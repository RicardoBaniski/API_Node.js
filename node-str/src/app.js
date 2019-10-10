'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta com o banco
mongoose.connect('mongodb+srv://nodestr:nodestr@nodestr-nc0u7.mongodb.net/test?retryWrites=true&w=majority');

//Carrega os Models
const Product = require('./models/product');

//Carrehga as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;