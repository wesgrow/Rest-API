//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var storeSchema = new mongoose.Schema({
    storeShortName: String,
    storeName: String,
    storeAddress:String
});

//Return model
module.exports = restful.model('stores', storeSchema);