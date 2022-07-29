const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employerSchema = new Schema({
    firstname: {
        type: String, 
        required: true,
        trim: true
    }, 
    lastname: {
        type: String, 
        required: true,
        trim: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    }, 
    job_name: {
        type: String, 
        required: true,
        trim: true
    },
    salary: {
        type: Number, 
        required: true,
    },
    department_id: {
        type: Number, 
        required: true,
    }
}, {
    timestamps: true
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;