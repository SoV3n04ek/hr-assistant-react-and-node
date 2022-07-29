const mongoose = require('mongoose');
const app = require('../server');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: { type: String, required: true },
    location: {type: String, required: true}
}, {
    timestamps: true
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;