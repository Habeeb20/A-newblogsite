var mongoose = require("mongoose");



var orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {type:mongoose.Schema.Types.ObjectId, ref:'product', required:true}, 
    quantity : {type: Number}
});






module.exports = mongoose.model("order", orderSchema);