const db = require('../config/connection');
const { Job } = require('../models');
const jobSeeds = require('./jobSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(jobSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
