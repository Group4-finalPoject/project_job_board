const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
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
        type: NumberDecimal,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.expoprts = Job;