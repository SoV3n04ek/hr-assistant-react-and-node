const router = require('express').Router();

let Employer = require('../models/employers.model');

// API-EP get all employers

router.route('/').get((request, response) => {
    Employer.find()
        .then(employers => response.json(employers  ))
        .catch(error => response.status(400).json(`server get_employers error: ${error}`));
});

// API-EP add one new department
router.route('/add').post((request, response) => {
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const job_name = request.body.job_name;
    const salary = request.body.salary;
    const department_id = request.body.department_id;
   
    const newEmployer = new Employer({
        firstname, lastname, email, job_name, salary, department_id
    });

    newEmployer.save()
        .then(() => response.json('Employer added succesfully'))
        .catch(error => response.status(400).json(`server add_employer error: ${error}`));
});

module.exports = router;