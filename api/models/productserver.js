const express = require("express");
const router = express.Router();
const product = require('../Schema/productschema')
const mongoose = require ("mongoose")
const app = express();


router.get('/', (req, res, next) =>{
    product.findById()
    .select("name price id")
    .exec()
    .then(docs => {
        const response = {
            count:docs.length
        }
        res.render("hey.ejs")
    })
});

app.get('/product', (req, res, next) => {
    const id = req.params.productId
    .exec()
    .then (doc => {
        console.log(doc)
        res.status(200).json({
            message: "hello"
        })
    })
})


app.get('/productId', (req, res, next) =>{
    const id = req.params.productId;
    product.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc)
        res.status(200).json({
            message: "hello there"
        });

        
        });
      
    })
   




router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
    }
    res.status(200).json({
        message: "handling post request",
        createdproduct: producct
    });
});


router.post('/productId', (req, res, next) => {
    const product = new product ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });
    product.save
    .then (result => {
        res.status(200).json({
            message: "handling post request",
            createdproduct: producct
        });

    });

});



module.exports = router;
module.exports = app;