const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/job-db',{
    useNewUrlParser: true})
    .then(()=> {
        console.log('connected to mongo');
    })
    .catch((err)=>{
        console.log(err);
    });

module.exports = mongoose.connection;
