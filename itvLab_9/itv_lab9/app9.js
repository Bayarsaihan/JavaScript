// 1.a// var x;

// var x;
// for (x= 10; x >= 1; x-- )
// document.writeln( x );

// 1.c

    // var  x;
    // for (x= 19; x >= 1; x -= 2 )
    // document.writeln( x );

// 1.d

        // var counter = 2;
        //             do {
        //             document.writeln( counter );
        //             counter += 2;
        //             } while ( counter <= 100 );

   

// asuult 2

        document.writeln("<table>");

            for( var i = 1; i <= 7; i++){
                document.writeln( "<tr>" );

                for( var j = 1; j <= 5; j++)
                    document.writeln( "<td>(" +i+ ", " +j+ ")</td>");
                    document.writeln( "</tr>" );
            }
            document.writeln("</stable>");
// asuult 3

// 3. 1-ээс 15 хүртэлх бүхэл тооны нийлбэрийг олоод HTML5 документад харуул.

        var i, summ = 0;
        for(i = 1; i <= 15; i++)
            summ += i;
            document.writeln("1 - ээс 15 хүртэлх тооны нийлбэр "+summ);

    // asuul 4

// 4. prompt цонх ашиглан хэрэглэгчээс n тоог аваад 1-ээс n хүртэлх тоонуудын квадратын
// нийлбэрийг ол.

        var i = 1, sum = 0, m = parseInt(prompt("n ="));

        while(i <= m){
            sum += (i * i);
            i++;
        }
        alert("1 - ээс "+m+" хүртэлх тооны квдратын нийлбэр нь "+sum);


// asuult 5

        // 5. prompt цонх ашиглан хэрэглэгчээс 1-7 хооронд тоо авч харгалзах гаригийг бичиж харуул.
        // Өөр утга оруулсан тохиолдолд “Буруу утга” гэж хэвлэ.

        var a = parseInt(prompt("n = "));
        switch(a){
            case 1:
                document.writeln("Davaa garig");
                break;
            case 2:
                document.writeln("myagmar garig");
                break;
            case 3:
                document.writeln("lhagwa garig");
                break;
            case 4:
                document.writeln("Pvrew garig");
                break;
            case 5:
                document.writeln("baasan garig");
                break;
            case 6:
                document.writeln("byamba garig");
                break;
            case 7:
                document.writeln("nyam garig");
                break;
            default:
                document.writeln("buruu 1-7 hoorond");
        }


    // asuult 6

// 6. prompt цонх ашиглан хэрэглэгчээс 1-30 хооронд 5 тоо аваад HTML5 документад тухайн
// тоотой тэнцүү одыг (*) нэг мөрөнд хэвлэ. Жишээ нь эхний тоо 7 байвал эхний мөрөнд
// ******* гэж хэвлэ.
    var i;
    for( i = 1; i <= 5; i++){
        var n = parseInt(prompt("n = "));
        if(n > 0 && n < 30){
            while(n > 0){
                document.writeln("*");
                n--;
            }
        }else alert("1-30 hoorond too oruul");
        document.writeln("<br>");
    }

     // asuult 8

// k-ийн утга 1, 2, 3, 4, 10 байх үед x
// x-ийн утга 1, 3, 4, 3, 30;

// var k = parseInt(prompt("k= "));

// switch(k){
//     case 1:
//         break;
//     case 2:
//     case 3:
//         ++k;
//         break;
//     case 4:
//         --k;
//         break;
//     default:
//         k *= 3;
// }
// alert(k);
