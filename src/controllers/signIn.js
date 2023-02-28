const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userModel =require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv = require('dotenv').config();


router.post('/',async(req,res) => {
try {
    const {email,password}=req.body;

    const user = await userModel.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        const token=jwt.sign(
            {email:email},
            process.env.TOKEN_KEY,
            );
            return res.status(200).json({
                email:user.email,
                access_token:token
            });


    }
    return res.status(201).send('Email and password not match');

} catch (error) {
    res.status(400).send(error);
    
}
});
module.exports=router;