var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use(exress.urlencoded({extended: true}));
app.use(express.json());