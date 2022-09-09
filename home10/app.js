Daalgawr 1

		function toBinary(n) {
  			var huwirsan = 0;
    		var vld, i = 1;
    		while (n != 0) {
        		vld = n % 2;
        		n = parseInt(n / 2);
        		huwirsan = huwirsan + vld * i;
        		i = i * 10;
    		}
    		document.writeln(n + "to" + huwirsan + ".");
    	}

		var n = prompt("hurwvvleh too");
		toBinary(n);
//  daalgwar 22

        // Daalgawar 3 bodlogo
            var ran = (Math.floor(Math.random() * 10));
                var utga = parseInt(prompt("sanamsargv too oruul 1-10 hoorod"));
                while( utga != ran){
                    utga = parseInt(prompt("sanamsargv too dahin oruul 1-10 hoorod"));
                }
                alert("bayr hvrgey too zuw taalaa"); 