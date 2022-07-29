const router = require('express').Router();

let Department = require('../models/departments.model');

// 1 -> API-EP get all departments

router.route('/').get((request, response) => {
    Department.find()
        .then(departments => response.json(departments))
        .catch(error => response.status(400).json(`server get_departments error: ${error}`));
});

// 2 -> API-EP add one new department
router.route('/add').post((request, response) => {
    const name = request.body.name;
    const location = request.body.location;

    newDepartment = new Department({
        name, location
    });

    newDepartment.save()
        .then(() => response.json('Department added succesfully!'))
            .catch(error => response.status(400).json(`server add_department error: ${error}`));
});

module.exports = router;