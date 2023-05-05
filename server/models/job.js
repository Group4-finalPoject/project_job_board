const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true
    },
    salary: {
        type: Number,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;