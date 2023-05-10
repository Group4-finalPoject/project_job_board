const mongoose = require('mongoose');
const Application = require('./models/application');

mongoose.set('strictQuery', false);

mongoose
    .connect('mongodb://localhost:27017/job-db', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('MONGODB CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log(err);
    });

const seedApplications = [
    {
        job: 'job-id-1',
        user: 'user-id-1',
        status: 'accepted',
        dateApplied: new Date('2022-01-01')
    },
    {
        job: 'job-id-2',
        user: 'user-id-2',
        status: 'rejected',
        dateApplied: new Date('2022-01-02')
    },
    {
        job: 'job-id-3',
        user: 'user-id-3',
        status: 'pending',
        dateApplied: new Date('2022-01-03')
    }
];

const seedDB = async () => {
    await Application.deleteMany({});
    await Application.insertMany(seedApplications);
};

seedDB();
