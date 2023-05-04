const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Job = require('./models/job')

mongoose 
    .connect('mongodb:localhost:27017/test', {
        useNewUrlParser: true, useUnifiesTopology: true })
    .then(() => {
        console.log('Connected to MongoDB ... ');
    })
    .catch((err) => {
        console.log(err);
    });