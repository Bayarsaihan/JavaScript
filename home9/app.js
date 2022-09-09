// // // 1. Хэрэглэгчээс n тоог гараас авч 1-ээс n хүртэлх тоонуудын квадрат, куб зэргүүдийг олж
// // // дараах хүснэгт хэлбэрээр HTML5 документэд харуул.
// var n = parseInt(prompt("n=?"));
// document.writeln("<table border = 1>");
//     for( var i = -1; i < n; i++){
//         document.writeln("<tr>");
//         for( var j = 0; j < 3; j++){
//             if( i == -1 && j == 0) document.writeln("<td> number </td>");
//             if( i == -1 && j == 1) document.writeln("<td> square </td>");
//             if( i == -1 && j == 0) document.writeln("<td> cube </td>");
//             if( i != -1 && j == 0) document.writeln("<td>"+i+"</td>");
//             if( i != -1 && j == 1) document.writeln("<td>"+i*i+"</td>");
//             if( i != -1 && j == 2) document.writeln("<td>"+i*i*i+"</td>");
//         }
//         document.writeln("</tr>");
//     }
//     document.writeln("</table>");
// // // 2. Палиндром гэдэг нь араасаа болон урдаасаа ижил уншдаг тоо эсвэл текст юм. Жишээлбэл
// // // дараах таван оронтой тоонууд нь бүгд палиндром юм: 12321, 55555, 45554, 11611.
// // // Хэрэглэгчээс 5 оронтой тоог аваад палиндром эсэхийг тодорхойл. Хэрвээ хэрэглэгч 5-с өөр
// // // оронтой тоо оруулбал alert цонхоор анхааруулах мэдээлэл гарга. Хэрэглэгч alert цонхыг
// // // хаахад шинэ утга оруулах prompt цонхыг дахин гарга.
// var n = parseInt(prompt("n=?"));
//     while( !(n < 100000 && n >= 10000)){
//         alert("ta 5n orontoi too oruul");
//         n = parseInt(prompt("n=?"));
//     }
//     var n1, n2, n3, n4, n5;
//     n1 = n % 10;
//     n2 = n / 10 % 10;
//     n3 = n / 100 % 10;
//     n4 = n / 1000 % 10;
//     n5 = n / 10000;
//     var a, b, c, d, e;
//     a = parseInt(n1);
//     b = parseInt(n2);
//     c = parseInt(n3);
//     d = parseInt(n4);
//     e = parseInt(n5);
//     if( a == e && b == d) document.writeln("palindrom too bna");
//     else document.writeln("palindrom too bish bna");
//     document.writeln("<br>");
// // 3. Хэрэглэгчээс 4 оронтой тоо авч шифрлээд HTML5 текстээр гаргадаг скрипт бич.
// // Шифрлэхдээ оронгийн цифр бүрийг тухайн цифр дээр 7-г нэмээд 10т хуваасан үлдэгдлээр
// // нь сольж бичнэ. Дараа нь эхний цифрийг 3 дахь цифртэй, 2 дахь цифрийг 4 дэхь цифртэй
// // байрыг нь сольж бичнэ.
//  
  