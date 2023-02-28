const express = require('express');
const router = express.Router();
const model = require('../model/studentMode');

router.delete('/:_id',async(req,res) => {
    try {
        const id =req.params.id;


        await model.deleteOne(id);
        res.status(200).send("delete aand!");

    } catch (error) {
        res.send(error);
    }
});
module.exports = router;