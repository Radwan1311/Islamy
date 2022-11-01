
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
     index_ar:{
       index1: ":مرحبا بكم في الموقع إسلامي" ,
       index2 :'إسلامي هو موقع تم إنشاؤه لتقديم كلا من المساعدة والمعرفة لكل من يبحث عن المعرفة عن الإسلام، في هذا الموقع نقدم المعرفة الأساسية التي تحتاجها لفهم ما هو الإسلام ومعرفة تقاليده، ونحن نوصي بشدة بعدم التوقف هنا والبحث عن المعرفة في مواقع أخرى أيضا لأن الإسلام لا يمكن أن يمثله او يحتويه مصدر واحد ولكن نأمل أن تجد كل ما تبحث عنه هنا في موقع إسلامي. ' ,
       index3 :'ما هو الإسلام؟' ,
       index4 :'الإسلام هو واحد من الديانات الرئيسية في العالم. وهي تشترك مع اليهودية والمسيحية في الإيمان بإله واحد. الاسم العربي لهذا الاله هو الله. كلمة الإسلام تعني  الاستسلام لله . ويطلق على أتباع الإسلام اسم المسلمين، وهو ما يعني باللغة العربية الشخص الذي يستسلم لله  . في حين أن الإسلام مرتبط بشكل رئيسي بالشرق الأوسط ، إلا أن أتباعه البالغ عددهم حوالي مليار شخص موجودون في جميع أنحاء العالم. من الأمور المركزية في معتقدات الإسلام فكرة وجود إله واحد كامل القدرة يتجاوز الاختلافات الطبقية والعرقية والقومية.',
       index5 :'هل تريد معرفة المزيد عن الإسلام؟' ,
       index6 :'اضغط هنا' ,
       index7 :'لماذا نفعل هذا؟',
       index8 :'في العقد الماضي ، تم توصيل العديد من الأفكار الخاطئة حول الإسلام للناس من خلال مصادر اعلاميه مختلفة في مناسبات واحداث مختلفة ، وعندما تحدثنا إلى الناس حول هذا الموضوع وجدنا أن معظمهم لا يعرفون حتى المبادئ الاساسيه للإسلام هم فقط يتبعون ما سمعوه و ما تم اخبارهم به .ولكن الإسلام هو رسالة السلام إلى العالم ونحن هنا لإثبات ذلك والسماح للناس بمعرفة ما هو الإسلام .',
       index9 :'هل تريد أن تكون جزءا مما نقوم به؟',
       index10:'ادعمنا',
     },
     history_ar:{
       history1:'',
       history2:'',
       history3:'',
       history4:'',
       history5:'',
       history6:'',
       history7:'',
       history8:'',
       history9:'',
       history10:'',
       history11:'',
       history12:'',
       history13:'',
       history14:'',
       history15:'',
       history16:'',
       history17:'',
       history18:'',
       history19:'',
       history20:'',
       history21:'',
       history22:'',

     },

   };

   console.log(window.location.hash);
   // Check if a hash value exists in the URL
   if (window.location.hash === '#ar') {

     // Set the content of the webpage
     // depending on the hash value
     if (window.location.hash == "#ar") {
       $('body').css( {'text-align': 'right'});
       $('.footer').css( {'margin': '5% auto 0 auto'});
       $('.content').css( {'margin': '2% auto 0 auto'});


       $('#index1').html(language.index_ar.index1);
       $('#index2').html(language.index_ar.index2);
       $('#index3').html(language.index_ar.index3);
       $('#index4').html(language.index_ar.index4);
       $('#index5').html(language.index_ar.index5);
       $('#index6').html(language.index_ar.index6);
       $('#index7').html(language.index_ar.index7);
       $('#index8').html(language.index_ar.index8);
       $('#index9').html(language.index_ar.index9);
       $('#index10').html(language.index_ar.index10);


       $('.index11').html(language.nav.index11);
       $('.index12').html(language.nav.index12);
       $('.index13').html(language.nav.index13);
       $('.index14').html(language.nav.index14);
       $('.index15').html(language.nav.index15);
       $('.index16').html(language.nav.index16);


     }

   }
