// 1. Гараас 2 хэмжээст массивын мөр баганын тоог авч утгуудад нь мөр баганын нийлбэрийг
// олгоод хүснэгт хэлбэрээр дэлгэцэлж гарга.
            var n = parseInt(prompt("muriin too? "));
            var m = parseInt(prompt("baganiin too? "));
            document.writeln("<table border = 1 width=300 height=200>");
            for(var i = 0; i < n; i++){
                document.writeln("<tr>");
                for(var j = 0; j < m; j++)
                    document.writeln("<td>"+(i+j)+"</td>");
                document.writeln("</tr>");
            }

// 2. (Анхны тоо) Анхны тоо нь нэгээс их бүхэл тоо бөгөөд зөвхөн өөртөө болон 1-т хуваагддаг.
// Анхны тоог олох алгоритм нь дараах байдлаар ажиллана :
// a) Бүх элементүүдэд 1 (үнэн) анхны утга оноосон массив үүсгэнэ. Анхны тоотой массивын
// элементүүд утга 1 хэвээр үлдэж бусад анхны тоо биш массивын элементүүдэд 0-г олгоно.
// b) Эхний хоёр элементийг 0 болгоно. Учир нь 0 ба 1 нь анхны тоо биш юм. Массивын индекс
// 2-с эхэлж, 1 утгатай элемент олдох бүрт массивын үлдсэн элементүүдээр гүйж үржвэрт нь 1
// утгатай элементийн индекс орсон байвал 0 утга онооно. Жишээ нь 2-р массивын индексийн
// хувьд массив доторх 2-н бүх үржвэр индексүүдтэй (индекс 4, 6, 8, 10 гэх мэт) элементийн
// утгууд 0 болно. Үүнтэй ижлээр массив индекс 3-т, массив доторх 3-н бүх үржвэр
// индексүүдтэй (индекс 6, 9, 12, 15 гэх мэт) элементийн утгууд 0 болно гэх мэт.
// Энэ процесс дуусахад 1-д утгатай массив элементүүдийн индекс нь анхны тоонууд байх ба эдгээр
// индексүүдийг хэвлэнэ.
// Дээрх алгоритмаар 1000 элементтэй массив ашиглан 1-999 хүртэлх анхны тоонуудыг хэвлэж гарга
function anhnii_too(x){
    for(var i = 2; i < x; i++)
    if(x % i == 0) return 1;
    return 0;
}
var a = new Array(1000);
for(var i = 0; i < 1000; i++){
    if(i == 0 || i == 1) a[i] = 0;
    else a[i] = 1; // a
    if(anhnii_too(i))
    a[i] = 0;
    if(a[i] == 1)
    document.writeln(i+"\n"); 
} 
    