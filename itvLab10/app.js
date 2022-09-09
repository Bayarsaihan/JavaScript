// // 1 -р бодлого 
// // Хэрэглэгчээс радиусыг авч тойргийн талбайг бодож ол.
//         function circleArea(){
//             // argument awdaggv, utga butsaadgv
//             let radius = parseInt(prompt("radius?"));
//             let area = Math.PI * Math.pow( radius, 2);
//             document.writeln("<p> Талбай: "+ Math.floor(area)+"</p>");

//         }
//         circleArea();
// // 2. Машины зогсоолын төлбөрийг тооцох програм бич. Үүнд машин зогсоолд зогссон цагийг
// // хэрэглэгчээс аваад төлбөрийг тооцоолон дэлгэцэнд харуулна. Төлбөрийг тооцоолохдоо
// // эхний 3 цаг 5000 төгрөг, эхний 3 цагаас хэтэрсэн цаг тутамд 1000 төгрөг байна. Гэсэн ч
// // зогсоолын нийт төлбөр 23000 төгрөгөөс хэтрэхгүй байх ёстой. Ямар ч хэрэглэгч машинаа
// // зогсоолд 24 цагаас илүү байрлуулаагүй гэж тооцно. Төлбөрийг тооцоолохдоо
// // calculateCharges функцийг дуудаж ашиглана.

//         function calculateCharges(x) {
//             var n = 0;
//             if( x <= 3 && x > 0) 
//                 n = 5000;
//             else if( x > 3 && x < 23){
//                 n = 5000 + (x - 3) * 1000;
//             }else n = 23000;
//             return n;
//         }
//         var stopTime = parseInt(prompt("ta heden tsag zogsson be"));
//         var tulbur = calculateCharges(stopTime);
//         document.writeln("Tanii niit tulbur "+ tulbur + " bna");
// // 3. Координатын хоёр цэг points (x1, y1), (x2, y2) хоорондын зайг олох distance функц бич
//         function distance(x1, x2, y1, y2){
//             return Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//         }
//         var x1 = parseInt(prompt("x1 "));
//         var x2 = parseInt(prompt("x2 "));
//         var y1 = parseInt(prompt("y1 "));
//         var y2 = parseInt(prompt("y2 "));
//         document.writeln("distance is: \n"+Math.floor(distance(x1, x2, y1, y2)));

// // 4. Дараах утгын мужаас n санасмаргүй тоо сонгох илэрхийллийг бич. <br>
//         // //     a) 1 ≤n ≤2 <br>
//         // var n = Math.floor(Math.random() * (2 - 1 + 1)) + 1; <br>
//         // //     b) 1 ≤n ≤100 <br>
//         // var n = Math.floor(Math.random() * (100 - 1 + 1)) + 1; <br>
//         // //     c) 0 ≤n ≤9 <br>
//         // var n = Math.floor(Math.random() * (100 - 0 + 1)) + 0; <br>
//         // //     d) 1000 ≤n ≤1112 <br>
//         // var n = Math.floor(Math.random() * (1112 - 1000 + 1)) + 1000; <br>
//         // //     e) –1 ≤n ≤1 <br>
//         // var n = Math.floor(Math.random() * (1 + 1 + 1)) - 1; <br>
//         // //     f) –3 ≤n ≤11 <br>
//         // var n = Math.floor(Math.random() * (11 + 3 + 1)) - 3; <br>

// // 5. Дараах зэрэг олох integerPower( base, exponent ) функцийг бич. Үүнд that exponent, base нар
// // нь бүхэл тоо. Жишээ нь integerPower( 3, 4 ) = 3 * 3 * 3 * 3 байна.
//         function integerPower(base, exponent){
//             return Math.pow(base, exponent);
//         }
//         var base = parseInt(prompt("base"));
//         var exponent = parseInt(prompt("exponent"));
//         document.writeln("<br>"+base+" iin "+exponent+"zereg bol "+integerPower(base, exponent));

// // 6. Хоёр тоон утга аргументаар авч хэрвээ хоёр дахь аргумент нь эхний аргументынхаа
// // үржигдэхүүн мөн бол true эсрэг тохиолдолд false утга буцаах multiple функцийг тодорхойл.
//         function multiple(x, y){
//             if(x % y == 0) return true;
//             else return false;
//         }
//         var x = parseInt(prompt("x=? "));
//         var y = parseInt(prompt("y=? "));
//         document.writeln("vrjegdehvvn mun eseh "+multiple(x, y));

// // 7. Хэрэглэгчээс тэмдэгт давталт ашиглан prompt цонхоор бүлэг бүхэл тоонуудыг аваад тоо
// // бүрийг тэгш эсэхийг шалгах isEven функцэд дамжуулна. isEven функц нь үлдэгдэл
// // операторыг ашиглан тоо тэгш бол true, эсрэг тохиолдолд false утгыг буцаадаг.
//         function isEven(x){
//             if( x % 2 == 0) return true;
//             else return false;
//         }
//         var temdeg = 0, i ;
//         while(temdeg != 0){
//             i = parseInt(prompt("duriin too oruul 0 orulwal duusnal"));
//             document.writeln("tanii oruulsn too tegsh eseh n "+isEven(i));
//         }

// // 8. Дараах даалгаварыг гүйцэтгэх програмын хэсгийг бич.
// // Дээрх хоёр илэрхийллийг ашиглан аргументийнхаа оронгийн цифрүүдийг олж
// // хэвлэдэг displayDigits тодорхойл. Хэвлэхдээ цифр бүрийн хооронд 2 хоосон зай ав.
// // Жишээ нь 4562 тооны цифрүүд нь 4 5 6 2 гэж хэвлэгдэнэ.


//         function displayDigits(x) {
//             while(x > 0){
//                 var n = 0;
//                 n = x % 10;
//                 x /= 10;
//                 document.writeln("  "+n);
//             }
//         }
//         var x = parseInt(prompt("x=?"));
//         displayDigits(x);
//                 ////////////// 9. Дараах функцуудыг хэрэгжүүл.
//         // a) Фаренгейт утгаас цельсийн температур луу хөрвүүлэх celsius функц // C = 5.0 / 9.0 *(F- 32 );
                
//                 // function celsius(f){
//                 //     return 5.0 / 9.0 * (f - 32);
//                 // }
//                 // document.writeln(celsius(parseInt(prompt("temperatur? "))));

//         // b) Цельсийн температурыг фаренгейт луу хөрвүүлэх fahrenheit функц // F = 9.0 / 5.0 *C+ 32;

//                 // function fahrenheit(f){
//                 //     return 9.0 / 5.0 * f + 32;
//                 // }
//                 // document.writeln(fahrenheit(parseInt(prompt("temperatur? "))));
                
//         // c) Дээрх функцуудыг ашиглан хэрэглэгчээс Цельсийн температур, фаренгейтийн аль нэг
//         // утгыг авч нөгөө рүү нь хөрвүүлж үр дүнг гаргах скрипт бич.

//                 // function fahrenheit(f){
//                 //     return 9.0 / 5.0 * f + 32;
//                 // }
//                 // function celsius(f){
//                 //     return 5.0 / 9.0 * (f - 32);
//                 // }
//                 // var tuluw = parseInt(prompt("ta F-ees C ruu bol 1 vgvi bol 0 gedeg utgiig oruulna uu"));
//                 // if(tuluw) document.writeln(celsius(parseInt(prompt("temperatur? "))));
//                 // else document.writeln(fahrenheit(parseInt(prompt("temperatur? "))));
                
//         // 10. Аргументээр авсан 3 бутархайг тоонуудын хамгийн багыг олж буцаах minimum3 функцийг
//         // тодорхойл. Хамгийн багыг олохдоо Math.min дүрмийг ашиглана уу.

//                 function minimum3(a, b, c){
//                     return Math.min(a, b, c);
//                 }
//                 var a = parseFloat(prompt("a=?"));
//                 var b = parseFloat(prompt("b=?"));
//                 var c = parseFloat(prompt("c=?"));
//                 document.writeln("minimum is "+minimum3(a, b, c));

//         // 11. Хэрэглэгчээс оюутны дүнг аваад qualityPoints функц ашиглан тухайн дүнг үсгээр илэрхийл.
//         // Тухайлбал 100-90 А, 80-89 B, 70-79 C, 60-69 D, 60-аас бага бол F байна.
//                 function qualityPoints(dvn){
//                     if( dvn <= 100 && dvn >= 90){
//                         return A;
//                     }
//                     if( dvn < 90 && dvn >= 80){
//                         return B;
//                     }
//                     if( dvn < 80 && dvn >= 70){
//                         return C;
//                     }
//                     if( dvn < 70 && dvn >= 60){
//                         return D;
//                     }
//                     if( dvn < 60 && dvn > 0){
//                         return F;
//                     }
//                 }
//                     var dvn = parseInt(prompt("dvngee oruulna uu"));
//                     document.writeln("Vsgen dvn "+qualityPoints(dvn));

//         // 12. Зоос шидэх үйлдлийн програмыг бич. Хэрэглэгч “Toss” товч дээр дарахад зоос шидэгдэж үр
//         // дүн дэлгэцэнд гарна. Зоос шидэхдээ аргументгүй тоо буувал false, сүлд буувал true утга буцаах flip
//         // функцийг тодорхойлон ашигла
//         function flip(){
//                 if(Math.floor(Math.random()+1) == 0) return false;
//                 if(Math.floor(Math.random()+1) == 1) return true;
//         }
//         if(flip) document.writeln("svld buulaa");
//         else document.writeln("too buulaa");
