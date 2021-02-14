var myVersion = "0.4.0", myProductName = "everyMinute";

function runEveryMinute (callback) { //run callback at the top of each minute, with no drift
	var whenLastEveryMinute = new Date ();
	function secondsSince (when) { 
		var now = new Date ();
		when = new Date (when);
		return ((now - when) / 1000);
		}
	function everySecond () {
		var now = new Date ();
		if (now.getSeconds () == 0) {
			whenLastEveryMinute = now;
			callback ();
			}
		else {
			if (secondsSince (whenLastEveryMinute) > 60) {
				whenLastEveryMinute = now;
				callback ();
				}
			}
		}
	setInterval (everySecond, 1000);
	}

runEveryMinute (function () { //test code
	console.log ("\n" + myProductName + ": " + new Date ().toLocaleTimeString () + ", v" + myVersion);
	});
