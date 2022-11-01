var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



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
     history_ar:{
       history1:'الدين الإسلامي',
       history2:'البداية',
       history3:'ولتوضيح الموضوع، سأقول بضع كلمات عن عصر ما قبل الإسلام، المعروف باسم عصر الجاهلية.',
       history4:'ظهر النبي محمد في وقت فقد فيه الناس معرفتهم بالدين الصحيح وعادوا إلى عبادة أصنام الحجارة ،الأرض والخبز وحتى الجبن. كما جاء في القرآن الكريم: كانوا يعبدون من دون  الله، ما يؤذيهم، ولا ينفعهم، وهم يقولون: "هؤلاء هم شفعاؤنا لدى الله"',
       history5:'كانوا مهينين في الفكر والأخلاق لدرجة أنهم ، كما ذكر أبو ذر الغفاري ، كانوا يقطعون أصنامهم إلى قطع ويأكلونها. و كان العذر الوحيد المقدم هو أنهم كانوا يتبعون خطوات أجدادهم: عندما يقال لهم: "اتبعوا ما أنزله الله" قالو: "لا. نحن نتبع ما وجدنا آباءنا عليه"',
       history6:'كما انهم كانو يدفنون بناتهم أحياء: عندما يتم إعطاء أي منهن الأخبار الجيدة لفتاة ، يكون وجهه مظلما ويختنق داخليا ، بينما هو يختبئ من الناس بسبب شر البشائر الطيبة التي أعطيت له، سواء كان سيبقيها في الذل، أو يدفنها في الغبار',
       history7:'كانت النساء يتم احتقارهن ، ليس فقط في الجزيرة العربية قبل الإسلام ولكن أيضا في الأراضي الرومانية .ولكن اعلن القرآن صراحة أن الرجال سيتم سؤالهم و حسابهم فيما يتعلق بهذا: عندما يتم سؤال الأنثى (الرضيعة) المدفونة على قيد الحياة يوم القيامه - لأي جريمة  تم قتلها؟',
       history8:'محمد النبي الأخير',
       history9:'نشأ النبي محمد في كنف الله ورعايته. فقد توفي والده عبد الله قبل ولادته ، مما يعني أنه كان عليه أن يضع كل ثقته في الله ويخضع له بالكامل. وقد زار قبر والده في المدينة المنورة بعد سنوات ، وبكى قلبه ، و عند عودته قال: "بكيت على والدي وطلبت من الله أن يغفر له.',
       history10:'بوفاة والده، حرمه الله من كل دعم بشري ووجهه إلى إدراك أنه لا إله إلا الله، الذي ليس لديه شركاء. فقد قام جده وعمه بحمايته إلى حد ما ، لكنه أدرك أن وصيه الحقيقي هو الله. فهو وراء كل شيء وكل سبب ونتيجة ،فقد كان يمكنه تمييز يد الخالق الوحيد للكون والأسباب. ووحدانية الله تتجلى له في ضوء الوحدة الإلهية. أي أنه سيتم اختباره في عالم الحكمة هذا ، كان عليه أن يعتمد كليا على ربه ويطلب منه أي مساعدة، مما يدل على أن الله وحده هو الذي يخلق النتيجة ويعطي النجاح.',
       history12:'كما انه قد فقد والدته أمينة في سن مبكرة. عندما توفيت في أبوة عن عمر يناهز 25 أو 26 عاما في طريق عودتها من زيارتها قبر زوجها في المدينة المنورة ،عندها كان محمد يبلغ من العمر 6 سنوات فقط. وهكذا ، تعلم ألم عدم وجود أب أو أم. ',
history13:'قبعد ذلك تولى جده عبد المطلب، وهو شيخ كبير المقام في مكة، حمايته. لهذا السبب، أنقذ الله عبد المطلب من سوء الحظ.فقد احتضن حفيده الحبيب ، وقدم له دائما مقعد الشرف في منزله.حيث شعلر أن محمد سيكبر لإنقاذ البشرية. وكان محمد نبيلا ومهذبا لدرجة أن جده توقع نبوته. لم يكن أول أجداده النبلاء الذين فعلوا ذلك ، فقد تنبأ كعب بن لؤي،  بأن الرسول الأخير سيقام من ذريته. ذكره من قبل باسمه فقال',       history14:'فجأة سيظهر النبي محمد.  و سوف يعطي البشارات، وهو صادق في حديثه',
       history15:'عبد المطلب، الذي لم يستطع حتى جيش أبرهة العظيم أن يبكيه، بكى بمرارة عندما أخذ إلى فراش الموت.، وعندما سئل عن الخطأ، أجاب:أنا أبكي لأنني لن أتمكن بعد الآن من احتضان محمد، ثم أضاف: أخشى أن يحدث شيء ما. إلى لؤلؤتي التي لا مثيل لها.',
       history17:'قام أبو طالب بحماية محمد بعناية فائقة. حيث يروي المؤرخون وكتاب السير الذاتية، مثل ابن إسحاق، أن أبو طالب أخذ ابن أخيه إلى سوريا في قافلة تجاريه عندما كان عمره 10 أو 12 عاما. توقفوا في مكان ما بالقرب من دمشق وتركوه، لأنه كان الأصغر، يراقب القافلة، وكان هناك راهب مسيحي بالقرب من البحيرة يراقب القافلة. كان هذا الراهب يتوقع وصول النبي الأخير ،عندها لاحظ أن سحابة تبعت القافله من أجل أن يكون أحد أعضائها مظللا. كان يعتقد ان هذه سمة خاصة للأنبياء حيث يجب أن يكون النبي المتوقع في تلك القافلة.',
       history18:'عندما توقفت القافلة بالقرب من دير لتناول وجبة. لاحظ ان السحابة لا  تحوم فوق القافلة ، فسأل أبو طالب لو أن شخصا ما قد ترك وراءهم. فأجاب أبو طالب أنهم قد تركوا صبيا صغيرا يراقب أمورهم. فطلب منهم الراهب إحضاره و. عندما جاء محمد، أخذ بحيرة أبو طالب إلى جانب وسأله عن علاقته بالصبي.أجاب أبو طالب: إنه ابني، لكن بحيرة اعترض على ذلك، قائلة: لا يمكن أن يكون ابنك. وفقا لكتبنا، يجب أن يكون والده قد توفي قبل ولادته. ثم أضاف: دعني أعطي لك هذه النصيحة. خذ هذا الصبي وارجع مرة أخرى على الفور. فاليهود حاسدون . إذا تعرفوا عليه، فسوف يؤذونه. فقام أبو طالب بتقديم عذرا لاعضاء القافلة وعاد إلى مكة مع ابن أخيه',
       history19:'قام النبي محمد برحلة ثانية عندما كان عمره 25 عاما ، مع قافلة خديجة التجارية ، وهي من سوف يتزوجها لاحقا. وفي الرحلة، واجه بحيرة مرة أخرى. وكان الراهب سعيدا جدا بهذا اللقاء الثاني، وقال له: ستكون نبيا، آخر نبي. أتمنى أنه سيسمح لي الله أن أعيش لأراك قد نشأت فسأتبعك وأحمل حذاءك وأحميك من أعدائك!',
       history20:' ... اقرأ المزيد',
       history21:'',
       history22:'',
       history23:'',
       history24:'',
       history25:'',
       history26:'',
       history27:'',
       history28:'',
       history29:'',
       history30:'',
       history31:'',
       history32:'',
       history33:'',
       history34:'',
       history35:'',
       history36:'',
       history37:'',
       history38:'',
       history39:'',
       history40:'',
       history41:'',
       history42:'',
       history43:'',
       history44:'',
       history45:'',
       history46:'',
       history47:'',
       history48:'',
       history49:'',
       history50:'',
       history51:'',
       history52:'',
       history53:'',
       history54:'',
       history55:'',
       history56:'',
       history57:'',
       history58:'',
       history59:'',
       history60:'',
       history61:'',
       history62:'',
       history63:'',
       history64:'',
       history65:'',
       history66:'',
       history67:'',
       history68:'',
       history69:'',
       history70:'',
       history71:'',
       history72:'',
       history73:'',
       history74:'',
       history75:'',
       history76:'',
       history77:'',
       history78:'',
       history79:'',
       history80:'',
       history81:'',
       history82:'',
       history83:'',
       history84:'',
       history85:'',
       history86:'',
       history87:'',
       history88:'',
       history89:'',
       history90:'',
       


     },

   };

   console.log(window.location.hash);
   // Check if a hash value exists in the URL
   if (window.location.hash === '#ar') {

     // Set the content of the webpage
     // depending on the hash value
     if (window.location.hash == "#ar") {
       $('span').css( {'text-align': 'right' ,'font-size':'2rem'});
       $('h2').css( {'text-align': 'right','margin-right':'4%' , 'font-size':'3rem'});
       $('p').css( {'text-align': 'right' , 'font-size':'1.5rem'});
       $('button').css( {'text-align': 'right'});


       $('.index11').html(language.nav.index11);
       $('.index12').html(language.nav.index12);
       $('.index13').html(language.nav.index13);
       $('.index14').html(language.nav.index14);
       $('.index15').html(language.nav.index15);
       $('.index16').html(language.nav.index16);

       $('#history1').html(language.history_ar.history1);
       $('#history2').html(language.history_ar.history2);
       $('#history3').html(language.history_ar.history3);
       $('#history4').html(language.history_ar.history4);
       $('#history5').html(language.history_ar.history5);
       $('#history6').html(language.history_ar.history6);
       $('#history7').html(language.history_ar.history7);
       $('#history8').html(language.history_ar.history8);
       $('#history9').html(language.history_ar.history9);
       $('#history10').html(language.history_ar.history10);
       $('#history11').html(language.history_ar.history11);
       $('#history12').html(language.history_ar.history12);
       $('#history13').html(language.history_ar.history13);
       $('#history14').html(language.history_ar.history14);
       $('#history15').html(language.history_ar.history15);
       $('#history16').html(language.history_ar.history16);
       $('#history17').html(language.history_ar.history17);
       $('#history18').html(language.history_ar.history18);
       $('#history19').html(language.history_ar.history19);
       $('#history20').html(language.history_ar.history20);


     }

   }
