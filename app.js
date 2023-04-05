const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const productRoutes = require('./api/models/productserver');
const productapp = require('./api/models/productserver')
const orderRoutes = require('./api/models/orderserver');
const User = require("./api/Schema/userschema");
const userschema = require('./api/Schema/userschema');
const router = express.Router();




const PORT = process.env.PORT || 9000;
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("veiw engine", "ejs");
app.use('.../productsever', productRoutes)
app.use('.../productsever', productapp)
app.use('/orderserver', orderRoutes)




const users=[]




app.use( '/product',(req, res, next) =>{
        res.status(200).json({
            message: "hello there"
        });
      
    })


app.use( '/productId',(req, res, next) =>{
        res.status(200).json({
            message: "hello "
        });
      
    })


app.get('/fintech', (req, res, next) => {
    res.render("fintech.ejs")
});


app.get('/shopping', (req, res, next) => {
    res.render("shopping.ejs")
});



app.get('/try', (req, res, next) => {
    res.render("try.ejs")
});



app.get('/product1', (req, res, next) => {
    res.render("product1.ejs")
});

app.get('/product2', function(req, res){
    res.render("product2.ejs")
});

app.get('/product3', function(req, res){
    res.render("product3.ejs")
});

app.get('/landing', function(req, res){
    res.render("landing.ejs")
});





app.get('/try', function(req, res){
    res.render("try.ejs")
});






app.get('/contactus', (req, res, next) => {
    res.render("contactus.ejs")
});

app.get('/emoji', (req, res, next) => {
    res.render("emoji.ejs")
});

app.get('/signing', (req, res, next) => {
    res.render("signing.ejs")
})


app.post('/signing', async (req, res, next) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }catch {
        res.redirect('/shopping')

    }
    alert(users)

});



app.get('/log', (req, res, next) => {
    res.render("log.ejs")
})


app.get('/login', (req, res, next) => {
    res.render("login.ejs")
})

app.post('/login', (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length < 1){
             res.status(404).json(
                res.render("log.ejs")
            );
        }
        bcrypt.compare(req.body.password, user [0].password,(err, result))
        if (err) {
            res.status(401).json(
                res.render("log.ejs")
            );
        }
        if (result){
            res.render("shopping.ejs")

        }
    });
});







app.use((req, res, next) => {
    res.status(200).json ({
        message: "hello its working"
    });
});

app.use((req, res, next) => {
    const error = new error ("not available")
    error.status = 404
    next(error)
})



app.listen(PORT, () => console.log ("server listening on port " + PORT));