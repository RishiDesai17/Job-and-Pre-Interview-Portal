const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Employer'
    },
    positions: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],
    applicationDeadline: {
        type: Date,
        required: true
    },
    preInterview: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PreInterview'
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    shortlisted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    selected: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)