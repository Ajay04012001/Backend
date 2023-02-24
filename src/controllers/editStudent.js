const express = require('express');
const { findById, findByIdAndUpdate } = require('../model/studentMode');
const router = express.Router();
const model = require('../model/studentMode');

router.put("/:id",async(req,res) => {
try {
    const {name,email} = req.body;
const id = req.params.id;
const updateData = {
    name: name,
    email: email
} 
const data = await model.findByIdAndUpdate(id,updateData);
res.status(200).send("Everything is success")

} catch (error) {
    res.send(error);
}

});
module.exports = router;