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
  // const url2='https://api.alquran.cloud/v1/quran/ar.alafasy -' ;
  // https.get(url2 , function(response2){
  //
  //   var data2 = "";
  //   response2.on('data', function(chunk) {
  //     data2 += chunk.toString();
  //   })
  //   .on('end', function(){
  //     const quran = JSON.parse(data2);
  //     const surahName = quran.data.surahs.englishName;
  //     const surahNumber = quran.data.surahs.number;
  //     const ayahNumber = quran.data.surahs[1].ayahs[0].numberInSurah;
  //     const ayahText = quran.data.surahs[1].ayahs[0].text;
  //
  //
  //     const surahNames = [];
  //     const surahText = [];
  //     const surahArrays = [];
  //     const surahObj = [];
  //     const surahAyahs = [];
  //
  //
  //     for(var i = 0 ; i<= 113 ; i++){
  //       surahArrays.push(quran.data.surahs[i]);
  //     }
  //
  //     for(var i = 0 ; i<= 113 ; i++){
  //       surahNames.push(surahArrays[i].englishName);
  //       surahAyahs.push(surahArrays[i].ayahs);
  //       surahText.push(surahAyahs.text);
  //       console.log(surahText);
  //     }
  //
  //
  //     // for (var i = 0 ; i <= surahArrays.length ; i++){
  //     //   surahAyahs.push(surahArrays[i].ayahs);
  //     // }
  //     //
  //     // console.log(surahArrays);
  //
  //
  //
  //
  //
  //   });
  //
  // });

  res.render('quran');
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
