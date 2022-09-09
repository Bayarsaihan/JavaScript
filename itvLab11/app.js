// 7. Нэг хэмжээст массив ашиглаж доорх асуудлыг шийдэх кодыг бичнэ үү. <br>
// Хэрэглэгчээс 10-аас 100 хүртэлх 10 ширхэг тоог ав. Тоог авах болгонд хэрвээ уг тоо нь өмнө нь
// хэвлэгдээгүй бол дэлгэцэнд хэвлэ. <br>
    var a = new Array(10);
    var dawhtsal = 0;
    for( var i = 0; i < 10; i++){
        var too = parseInt(prompt("10-100?"));
        a[i] = too;
            for(var j = 0; j <= i; j++)
            if(too == a[j]) dawhtsal++;
        if(dawhtsal == 0) document.writeln(" "+too+".");
        dawhtsal = 0;
    } 