const mongoose = require('mongoose');
const Job = require('./models/job');

mongoose.set('strictQuery', false);

mongoose
    .connect('mongodb://localhost:27017/job-db', {
useNewUrlParser: true })
    .then(() => {
        console.log('MONGODB CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log(err);
    });

    const seedJobs = [
        {
            name: "Junior Web Developer",
            company: "Aircraft Performance Group",
            description: "Like a senior web developer, but younger.",
            category: "developer",
            salary: 200000
        },
        {
            name: "Senior Web Developer",
            company: "Cognizant Technology Solutions",
            description: "Like a junior web developer, but older.",
            category: "developer",
            salary: 400000
        },
        {
            name: "Java Lead",
            company: "Peterson Technology Partners",
            description: "Cognizant is looking to hire a motivated and energetic Java Lead whos passionate about software modernization, with strong experience in Java / J2EE, Spring and Spring Boot professional experience, also experience building APIs and Restful, and experience in Cassandra, NoSQL databases and API Gateways is a strong plu Someone with the ability to support in technical design and solutioning.",
            category: "developer",
            salary: 100000
        },
        {
            name: "Microsoft MDM Intune Engineer (Mobile Device Management)",
            company: "Microsoft",
            description: "Work closely with the DevOps and SRE RunOps team members to manage thousands of iOS devices in stores for Delivery processing.",
            category: "developer",
            salary: 400000
        },
        {
            name: "Principal Software Engineer",
            company: "Fidelity",
            description: "We are looking for a highly motivated software engineer in test who can support our Marketing Technology and Social Platform in multiple ways such as automation testing, CI / CD build out, analysis, and application development.",
            category: "engineer",
            salary: 230000
        },
        {
            name: "Backend Developer",
            company: "TSYS Technologies",
            description: " Implement back-end architecture components, tasks, and services to support Company's Electronic businesses.",
            category: "developer",
            salary: 430000
        }
    ];

const seedDB = async () => {
    await Job.deleteMany({});
    await Job.insertMany(seedJobs);
};

seedDB();