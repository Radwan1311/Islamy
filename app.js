const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const https = require('https');
const nodemailer = require('nodemailer');
const translate = require('translate');

var pressed = 0 ;
var arabic = 0 ;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


async function translateString (str , translateTo){
  translate.engine = 'libre' ;
  const foo = await translate(str , translateTo);
  console.log(foo);
}

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'islamy1311@gmail.com',
    pass: 'tgvaaggcgaspcfjc'
  }
});





app.listen(process.env.PORT || 3000, function(req , res){
  console.log('Server Has Started Successfully.');
});


app.get('/' , function(req ,res){

  res.render('index',{
    arabic : arabic
  });
});

app.post('/' , function(req , res){
  if(req.body.button === 'arabic'){
    arabic = 1 ;
    res.redirect('/')
  }

});


app.get('/prayer' , function(req ,res){
  res.render('prayer' ,{
    pressed:pressed
  });
});



app.get('/quran' , function(req ,res){
  res.render('quran',{
    arabic : arabic
  });
});


app.post('/quran' , function(req , res){
  if(req.body.button === 'arabic'){
    arabic = 1 ;
    res.redirect('/quran')
  }

});

app.get('/history' , function(req ,res){
  res.render('history',{
    arabic : arabic
  });
});


app.post('/history' , function(req , res){
  if(req.body.button === 'arabic'){
    arabic = 1 ;
    res.redirect('/history')
  }

});

app.get('/questions' , function(req ,res){
  res.render('questions',{
    arabic : arabic
  });
});

app.post('/questions' , function(req , res){
  if(req.body.button === 'arabic'){
    arabic = 1 ;
    res.redirect('/questions')
  }

});

app.get('/contact' , function(req ,res){
  res.render('contact',{
    arabic : arabic
  });
});

app.post('/contact',function(req,res){
  if(req.body.button === 'arabic'){
    arabic = 1 ;
    res.redirect('/contact')
  }
var mail = JSON.stringify(req.body);
  var mailOptions = {
    from: 'riotlolacc05@gmail.com',
    to: 'radwan.1311.mr@gmail.com',
    subject: 'islamy Email',
    text: mail
  };



  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.redirect('/questions');
});




app.post('/prayer', function(req , res){
// get the date
 var date_ob = new Date();
 let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
 let year = date_ob.getFullYear();

//get the city and country
  const city = req.body.cityName ;
  const counrty = req.body.countryName;

// passing it to the API url
  var url = 'https://api.aladhan.com/v1/hijriCalendarByCity?city=' + city + '&country=' + counrty+'&method=2&month='+month + '&year='+year ;
  https.get(url , function(response){

    var data = "";
    response.on('data', function(chunk) {
      data += chunk.toString();
    })
    .on('end', function() {
      const times = JSON.parse(data);
      var fajr = times.data[0].timings.Fajr ;
      var doha = times.data[0].timings.Sunrise;
      var duher = times.data[0].timings.Dhuhr;
      var asr = times.data[0].timings.Asr;
      var magreb = times.data[0].timings.Maghrib;
      var eshaa = times.data[0].timings.Isha;

      pressed = 1;
      res.render('prayer' ,{
        pressed : pressed,
        fajr:fajr ,
        doha:doha ,
        duher:duher ,
        asr:asr,
        magreb:magreb,
        eshaa:eshaa
      });
    });

  })
});
