const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userModel =require('../model/userModel');
const bcrypt = require('bcrypt');

router.post('/', async(req,res) => {
    try {
        const { email,password} = req.body;
    const encrptPassword = await bcrypt.hash(password,10);


    await userModel.create({
        email: email,
        password:encrptPassword
    });
    res.status(200).send("Registered successfully")
    } 
    catch (error) {
        res.status(400).send(err);
    }
    
});
module.exports = router;