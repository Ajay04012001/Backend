const express = require('express');
const router = express.Router();

const addStudent = require('./addStudent');
const listUser = require('./listStudents');
const updateStudent = require('./editStudent');
const deleteStudent = require('./deleteStudent');
const signUP = require('./signUp');
const signIn = require('.//signIn');



router.use('/add_student',addStudent);
router.use('/list_student',listUser);
router.use('/edit_student',updateStudent);
router.use('/delete_student',deleteStudent);
router.use('/sign_up',signUP);
router.use('/sign_in',signIn);

module.exports = router;