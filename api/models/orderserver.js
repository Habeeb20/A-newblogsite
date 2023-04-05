const express = require("express");
const router = express.Router();
const order = require('../Schema/orderschema')
const mongoose = require ("mongoose")

router.post('/', (req, res, next) =>{
    const order = new order ({
        _id : mongoose.Types.ObjectId(),
        quantity:req.body.quantity,
        product: req.body.productId,
    });
    order.save()
    .then( result => {
        console.log(result)
        res.status(200).json()
    });
   
})





module.exports = router;