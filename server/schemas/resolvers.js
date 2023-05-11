const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Job, User, Application } = require('../models')
const mongoose = require('mongoose');


const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find({});
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    applications: async () => {
      return await Application.find({});
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ _id: new mongoose.Types.ObjectId(),username, email, password });
      await user.save();
      const token = signToken(user, "user");
      return { token, user };
    },
  login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    applyToJob: async (parent, { jobId }, context) => {
      // Check if user is authenticated
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to apply to a job');
      }
  
      // Find the job by ID
      const job = await Job.findById(jobId);
      if (!job) {
        throw new Error('Job not found');
      }
  
      // Create a new application and save it to the database
      const application = new Application({
        user: context.user._id,
        job: jobId,
      });
      await application.save();

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $push: { myApplications: application } },
        { new: true }
      );
  
      // Return the updated job object
      return job;
    },
    
    
    
    
  },
};



module.exports = resolvers;

