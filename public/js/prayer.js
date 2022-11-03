
function changeLanguage(lang) {

     location.hash = lang;
     location.reload();
   }


   // Define the language reload anchors
   var language = {
     nav:{
       index11:'الرئيسية',
       index12:'تاريخ الاسلام',
       index13:'الصلاة',
       index14:'القرءان',
       index15:'الاسئله الشائعه',
       index16:'تواصل معنا'

     },
     prayer_ar:{
       prayer1:'الصلاة في الإسلام',
       prayer2:'يجب ان يقوم المسلم بالصلاة خمس مرات في اليوم. فإن الصلاة أصبحت واجبا  على المسلمين منذ الأيام الأولى للإسلام. حينما تمت رحلة الاسراء و المعراج  للنبي ليلا في السنة العاشرة بعد بدء رسالته. في تلك السنوات العشر ، كانت العديد من سور القرآن الكريم انزلت ، وفي كثير منها ، نقرأ تعليمات للنبي والمسلمين للقيام بصلواتهم والمحافظه عليها فهى من  أهم الواجبات في الإسلام ، وجميع الأديان السماوية السابقة فهي إيماننا بوحدانية الله حيث تجد ان الله قد امر النبي وأصحابه بقضاء معظم الليل في الصلاة والعبادة. وظل هذا إلزاميا لمدة عام كامل عندما تم تخفيف الالتزام، وأصبحت العبادة الليلية طوعية. كما أمر الأنبياء السابقون بتقديم الصلاة، كما هو واضح في القرآن.',
       prayer3:'كيفية الوضوء للصلاة ؟',
       prayer4:'الآن بعد الوضوء أنت مستعد للصلاة ، ولكن كيف؟',
       prayer5:'الآن أنت تعرف ماذا تفعل ، دعنا نعرف الآن متى تفعل؟',
       prayer6:'تذكر دائما ان الصلاة واجب أساسي على كل مسلم وركن الإسلام الثاني. يتم تنفيذه خمس مرات في اليوم. هذه الأوقات هي الفجر (الفجر) ، الظهر (الظهر) ،منتصف بعد الظهر (العصر) ، غروب الشمس (المغرب العربي) ، والمساء (العشاء). قبل الصلاة ، هناك طقوس التطهير (الوضوء). ويمكن للمسلمين أداء الصلاة في أي مكان تقريبا ، ولكن المكان الأكثر تفضيلا هو المسجد. حيث (المؤذن) يدعو المؤمنين إلى الصلاة عن طريق  (الأذان). و اليوم المقدس كل أسبوع هو الجمعة. كما انه يجب أن تؤدى الصلوات أينما أقيمت في اتجاه مكة. يشار إلى هذا الاتجاه بواسطة القبلة، وهي كلمة تعني "اتجاه الصلاة". يشار إليها في المسجد بجدار (يشار إليه باسم جدار القبلة) الذي عادة ما يتم تمييزه بواسطة مكان يسمى المحراب.',
       prayer7:'بحث',
       prayer8:'الضحى',
       prayer9:'الظهر',
       prayer10:'العصر',
       prayer11:'المغرب',
       prayer12:'العشاء',
       prayer13:'الفجر',

     }

   };

   console.log(window.location.hash);
   // Check if a hash value exists in the URL
   if (window.location.hash === '#ar') {

     // Set the content of the webpage
     // depending on the hash value
     if (window.location.hash == "#ar") {
       arabic = 1 ;
       $('body').css( {'text-align': 'right'});
       $('.footer').css( {'margin': '5% auto 0 auto'});
       $('.content').css( {'margin': '2% auto 0 auto'});
       $('span').css( {'text-align': 'right' ,'font-size':'1.5rem'});
       $('h2').css( {'text-align': 'right' , 'font-size':'2.5rem'});
       $('.prayer_content p').css( {'text-align': 'right' , 'font-size':'1.5rem'});


       $('#ifrm1').remove();
       var newIframe1 = $('<iframe ></iframe>').attr({src:'https://www.youtube.com/embed/JpRhM7pUinc' , class :'embed-responsive-item vedio ' ,allowFullScreen:'' });
       $('.ifrm1').append(newIframe1);


       $('#ifrm2').remove();
       var newIframe2 = $('<iframe ></iframe>').attr({src:'https://www.youtube.com/embed/943ToTsZGe4' , class :'embed-responsive-item vedio ' ,allowFullScreen:'' });
       $('.ifrm2').append(newIframe2);


       $('.index11').html(language.nav.index11);
       $('.index11').attr('href', '/#ar');

       $('.index12').html(language.nav.index12);
       $('.index12').attr('href', '/history#ar');

       $('.index13').html(language.nav.index13);
       $('.index13').attr('href', '/prayer#ar');

       $('.index14').html(language.nav.index14);
       $('.index14').attr('href', '/quran#ar');

       $('.index15').html(language.nav.index15);
       $('.index15').attr('href', '/questions#ar');

       $('.index16').html(language.nav.index16);
       $('.index16').attr('href', '/contact#ar');


       $('#prayer1').html(language.prayer_ar.prayer1);
       $('#prayer2').html(language.prayer_ar.prayer2);
       $('#prayer3').html(language.prayer_ar.prayer3);
       $('#prayer4').html(language.prayer_ar.prayer4);
       $('#prayer5').html(language.prayer_ar.prayer5);
       $('#prayer6').html(language.prayer_ar.prayer6);
       $('#prayer7').html(language.prayer_ar.prayer7);
       $('#prayer8').html(language.prayer_ar.prayer8);
       $('#prayer9').html(language.prayer_ar.prayer9);
       $('#prayer10').html(language.prayer_ar.prayer10);
       $('#prayer11').html(language.prayer_ar.prayer11);
       $('#prayer12').html(language.prayer_ar.prayer12);
       $('#prayer13').html(language.prayer_ar.prayer13);



     }

   }
