const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const https = require('https');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var pressed = 0 ;

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

app.get('/prayer' , function(req ,res){
  res.render('prayer' ,{
    pressed:pressed
  });
});

app.get('/quran' , function(req ,res){
  res.render('quran');
});

app.get('/history' , function(req ,res){
  res.render('history');
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
