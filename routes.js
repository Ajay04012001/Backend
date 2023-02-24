const express = require('express');
const apiHandler = require('./src/controllers/apihandller')
module.exports = (app) => { 
    app.use(express.json());
    app.use('/api/student',apiHandler)

}