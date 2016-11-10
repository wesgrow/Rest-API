//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var categorySchema = new mongoose.Schema({
    categoryCode: Number,
    categoryName: String,
    parentCategory:String
});

//Return model
module.exports = restful.model('categories', categorySchema);