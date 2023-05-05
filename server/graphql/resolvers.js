const { Job, User, Company, Application } = require('../models/index')


const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find({});
    },
  },
};

module.exports = resolvers;
