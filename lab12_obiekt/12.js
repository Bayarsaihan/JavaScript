 var a = new Array(8);
 a = prompt("mungun dvng oruul");
 if(a.length = 6){
        a.unshift('*', '*');
        document.writeln(a[0]);
        document.writeln(a[1]);
 }
 if(a.length = 5){
        a.unshift('*', '*', '*');
 }
 if(a.length = 4){
        a.unshift('*', '*', '*', '*');
 }

 document.writeln("<table border=1><tr>");
 for(var i = 0; i < 8; i++){
    document.writeln("<td>"+ a[i] + "</td>");
 }
 document.writeln("</tr></table>");


//  var a = new Array(7);
//  for(var i = 0; i < a.length; i++){
//     if(a.length == 7){
//        if(a[i] == 1 ) document.writeln("neg mynga");
//        if(a[i] == 2) document.writeln("hoyr mynga");
//        if(a[i] == 3) document.writeln("gurwan mynga");
//        if(a[i] == 4) document.writeln("durwun mynga");
//        if(a[i] == 5) document.writeln("tawan mynga");
//        if(a[i] == 6) document.writeln("zurgaan mynga");
//        if(a[i] == 7) document.writeln("doloo mynga");
//        if(a[i] == 8) document.writeln("naiman mynga");
//        if(a[i] == 9) document.writeln("ysun mynga");
//        continue;
//     }
//     if(a.length == 6){
//        if(a[i] == 1) document.writeln("neg zuun");
//        if(a[i] == 2) document.writeln("hoyr zuun");
//        if(a[i] == 3) document.writeln("gurwan zuun");
//        if(a[i] == 4) document.writeln("durwun zuun");
//        if(a[i] == 5) document.writeln("tawan zuun");
//        if(a[i] == 6) document.writeln("zurgaan zuun");
//        if(a[i] == 7) document.writeln("doloo zuun");
//        if(a[i] == 8) document.writeln("naiman zuun");
//        if(a[i] == 9) document.writeln("ysun zuun");
//        continue;
//     }
//     if(a.length == 7){
//        if(a[i] == 1) document.writeln("neg mynga");
//        if(a[i] == 2) document.writeln("hoyr mynga");
//        if(a[i] == 3) document.writeln("gurwan mynga");
//        if(a[i] == 4) document.writeln("durwun mynga");
//        if(a[i] == 5) document.writeln("tawan mynga");
//        if(a[i] == 6) document.writeln("zurgaan mynga");
//        if(a[i] == 7) document.writeln("doloo mynga");
//        if(a[i] == 8) document.writeln("naiman mynga");
//        if(a[i] == 9) document.writeln("ysun mynga");
//        continue;
//     }
//  }