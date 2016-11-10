//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
    productShortName: String,
    productDescription: String,
    SKU:String,
    releaseDate: Date,
    modelNumber: Number
});

//Return model
module.exports = restful.model('products', productSchema);