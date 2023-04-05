var mongoose = require("mongoose");



var productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    price: Number
});






module.exports = mongoose.model("product", productSchema);