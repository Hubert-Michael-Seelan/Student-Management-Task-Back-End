const router = require('express').Router();
let Student = require('../Model/Student');
const moment = require('moment');

// Create a new student
router.route('/add').post((req, res) => {
    const { name, email, phoneNumber, enrollNumber, dateOfAdmission } = req.body;
    const parsedDate = moment(dateOfAdmission, 'DD-MM-YYYY').toDate();
    const newStudent = new Student({
        name,
        email,
        phoneNumber,
        enrollNumber,
        dateOfAdmission: parsedDate,
    });
    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get all students
router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get student by ID
router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update student by ID
router.route('/update/:id').put((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.name = req.body.name;
            student.email = req.body.email;
            student.phoneNumber = req.body.phoneNumber;
            student.enrollNumber = req.body.enrollNumber;
            student.dateOfAdmission = req.body.dateOfAdmission;
            student.save()
                .then(() => res.json('Student updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete student by ID
router.route('/:id').delete((req, res) => {
    const {id} = req.params;
    Student.findByIdAndDelete(id)
        .then(() => res.json('Student deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
