//Dependencies
var express = require('express');
var router = express.Router();

//models
var Product = require('../models/product');
var Category = require('../models/category');
var Company = require('../models/company');
var Store = require('../models/store');


//Routes
Product.methods(['get','put','post','delete']);
Product.register(router, '/products')

Category.methods(['get','put','post','delete']);
Category.register(router, '/categories')

Company.methods(['get','put','post','delete']);
Company.register(router, '/companies')

Store.methods(['get','put','post','delete']);
Store.register(router, '/stores')


//Return router
module.exports = router;
