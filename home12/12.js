// 1r bodlogo 
var a = ['*', '.', '*', '*', '*', '.', '*', '*',];
b = prompt("mungun dvng oruul");

for(var i = 0; i < b.length; i++)
       a[a.length-1-i] = b[b.length-1-i];

if(b.length <= 6) a[1] = '*';
if(b.length <= 2) a[5] = '*';

document.writeln("<table border=1><tr>");
for(var i = 0; i < 8; i++){
   document.writeln("<td>"+ a[i] + "</td>");
}
document.writeln("</tr></table>");

// 2r bodlogo

var myngat = ['', 'нэг мянга', 'хоёр мянга', 'гурван мянга', 'дөрвөн мянга', 'таван мянга', 'зургаан мянга', 'долоон мянга', 'найман мянга','есөн мянга' ];

var zuut = ['', 'нэг зуун', 'хоёр зуун', 'гурван зуун', 'дөрвөн зуун', 'таван зуун', 'зургаан зуун', 'долоон зуун', 'найман зуун','есөн зуун' ];

var arawt = ['', 'арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерөн']

var negj = ['', 'нэгэн төгрөг', 'хоёр төгрөг', 'гурван төгрөг', 'дөрвөн төгрөг', 'таван төгрөг', 'зургаан төгрөг', 'долоон төгрөг', 'найман төгрөг','есөн төгрөг' ];

var mungu = ['', 'нэгэн мөнгө', 'хоёр мөнгө', 'гурван мөнгө', 'дөрвөн мөнгө', 'таван мөнгө', 'зургаан мөнгө', 'долоон мөнгө', 'найман мөнгө','есөн мөнгө' ];

var dvn = ['0', '.', '0', '0', '0', '.', '0', '0'];
var input = new Array(8);
input = prompt("dvn? ");
// dvn onooj huulah
for(var i = 0; i < input.length; i++)
       dvn[dvn.length-1-i] = input[input.length-1-i];

// for(var i = 0; i < dvn.length; i++)
//        document.writeln(dvn[i]);
document.writeln("\n"+myngat[dvn[0]]+" "+zuut[dvn[2]]+" "+arawt[dvn[3]]+" "+negj[dvn[4]]+" "+arawt[dvn[6]]+" "+mungu[dvn[7]]);
