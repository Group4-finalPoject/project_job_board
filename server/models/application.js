const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    job: {
         type: mongoose.Schema.Types.ObjectId, ref: 'Job' 
        },
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
    status: { 
        type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' 
    },
    dateApplied: {
         type: Date, default: Date.now 
        },
  });

  const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;