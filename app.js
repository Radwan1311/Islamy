const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port , function(req , res){
  console.log('Server Has Started Successfully.');
});


app.get('/' , function(req ,res){

  res.render('index');

});
