const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose 
    .connect('mongodb://localhost:27017/job-db', {
        useNewUrlParser: true})
    .then(() => {
        console.log('Connected to MongoDB ... ');
    })
    .catch((err) => {
        console.log(err);
    });

    module.exports = mongoose.connection;