const mongoose = require('mongoose');
const Job = require('./models/job');
const User = require('./models/user');
const Application = require('./models/application');

mongoose.set('strictQuery', false);

// Connect to the database
mongoose.connect('mongodb://localhost:27017/job-db', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

// Seed data for Jobs
const jobSeedData = [
   {
            _id: mongoose.Types.ObjectId(),
            name: "Junior Web Developer",
            company: "Aircraft Performance Group",
            description: "Like a senior web developer, but younger.",
            category: "developer",
            salary: 200000
        },
        {
            _id: mongoose.Types.ObjectId(),
            name: "Senior Web Developer",
            company: "Cognizant Technology Solutions",
            description: "Like a junior web developer, but older.",
            category: "developer",
            salary: 400000
        },
        {
            _id: mongoose.Types.ObjectId(),
            name: "Java Lead",
            company: "Peterson Technology Partners",
            description: "Cognizant is looking to hire a motivated and energetic Java Lead whos passionate about software modernization, with strong experience in Java / J2EE, Spring and Spring Boot professional experience, also experience building APIs and Restful, and experience in Cassandra, NoSQL databases and API Gateways is a strong plu Someone with the ability to support in technical design and solutioning.",
            category: "developer",
            salary: 100000
        },
        {
            _id: mongoose.Types.ObjectId(),
            name: "Microsoft MDM Intune Engineer (Mobile Device Management)",
            company: "Microsoft",
            description: "Work closely with the DevOps and SRE RunOps team members to manage thousands of iOS devices in stores for Delivery processing.",
            category: "developer",
            salary: 400000
        },
        {
            _id: mongoose.Types.ObjectId(),
            name: "Principal Software Engineer",
            company: "Fidelity",
            description: "We are looking for a highly motivated software engineer in test who can support our Marketing Technology and Social Platform in multiple ways such as automation testing, CI / CD build out, analysis, and application development.",
            category: "engineer",
            salary: 230000
        },
        {
            _id: mongoose.Types.ObjectId(),
            name: "Backend Developer",
            company: "TSYS Technologies",
            description: " Implement back-end architecture components, tasks, and services to support Company's Electronic businesses.",
            category: "developer",
            salary: 430000
        }
];

const seedJobs = async () => {
  try {
    await Job.deleteMany({});
    await Job.insertMany(jobSeedData);
    console.log('Job seeds created successfully!');
  } catch (err) {
    console.error('Error seeding jobs:', err);
  }
};

// Seed data for Users
const userSeedData = [
  // Your user seed data here...
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
    dateJoined: new Date('2022-01-01'),
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
    dateJoined: new Date('2022-01-02'),
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@example.com',
    dateJoined: new Date('2022-01-03'),
  },
];

const seedUsers = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(userSeedData);
    console.log('User seeds created successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

// Seed data for Applications
const applicationSeedData = [
  // Your application seed data here...
  {
    job: mongoose.Types.ObjectId("645885f2c00ca5019de90018"),
    user: mongoose.Types.ObjectId("645885f2c00ca5019de90024"),
    status: 'accepted',
    dateApplied: new Date('2022-01-01')
},
{
    job: mongoose.Types.ObjectId("645885f2c00ca5019de90019"),
    user: mongoose.Types.ObjectId("645885f2c00ca5019de90025"),
    status: 'rejected',
    dateApplied: new Date('2022-01-02')
},
{
    job: mongoose.Types.ObjectId("645885f2c00ca5019de9001a"),
    user: mongoose.Types.ObjectId("645885f2c00ca5019de90026"),
    status: 'pending',
    dateApplied: new Date('2022-01-03')
}
];

const seedApplications = async () => {
  try {
    await Application.deleteMany({});
    await Application.insertMany(applicationSeedData);
    console.log('Application seeds created successfully!');
  } catch (err) {
    console.error('Error seeding applications:', err);
  }
};

// Call all seed functions inside an async IIFE function
(async () => {
  await seedJobs();
  await seedUsers();
  await seedApplications();
  mongoose.connection.close();
})();

