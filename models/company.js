//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var companySchema = new mongoose.Schema({
    companyShortName: String,
    companyName: String
});

//Return model
module.exports = restful.model('companies', companySchema);