const { Job, User, Company, Application } = require('../models/index')


const resolvers = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id),
    getCompany: async (_, { id }) => await Company.findById(id),
    getJob: async (_, { id }) => await Job.findById(id),
    getApplication: async (_, { id }) => await Application.findById(id),
  },

  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },

    createCompany: async (_, { name, description, logoUrl }) => {
      const company = new Company({ name, description, logoUrl });
      await company.save();
      return company;
    },

    createJob: async (_, { title, description, location, salary, companyId }) => {
      const job = new Job({ title, description, location, salary, company: companyId });
      await job.save();
      return job;
    },

    applyToJob: async (_, { jobId, userId, resumeUrl }) => {
      const application = new Application({ job: jobId, user: userId, resumeUrl });
      await application.save();
      return application;
    },
  },

  Job: {
    company: async (job) => await Company.findById(job.company),
  },

  Application: {
    job: async (application) => await Job.findById(application.job),
    user: async (application) => await User.findById(application.user),
  },
};

module.exports = resolvers;
