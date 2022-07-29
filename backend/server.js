const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

// db connection (MONGO-DB-atlas)
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection - OK!');
});

// API Routes register
const employersRouter = require('./api_routes/api_employers');
const departmentsRouter = require('./api_routes/api_departments');

app.use('/employers', employersRouter);
app.use('/departments', departmentsRouter);

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;