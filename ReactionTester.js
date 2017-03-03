var clickedTime;
var createdTime;
var reactionTime;
var averageTime = 0;
var n = 0;
var good = 0;
var ok = 0;
var poor = 0;
var best = 10000;

var button = document.getElementById("reset");

button.onmouseover = function() {
	button.style.color = "white"
	button.style.backgroundColor = "steelblue";
}

button.onmouseleave = function() {
	button.style.color = "steelblue"
	button.style.backgroundColor = "white";
}

button.onclick = function() {
	averageTime = 0;
	n = 0;
	good = 0;
	ok = 0;
	poor = 0;
	best = 10000;

	document.getElementById("good").textContent = good;
	document.getElementById("ok").textContent = ok;
	document.getElementById("poor").textContent = poor;
	document.getElementById("avgTime").textContent = averageTime;

	document.getElementById("box").style.display = "none";
	makeBox();
}


function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}

	return color;
}			

function makeBox() {
	var time = Math.random();
	time = time * 5000;

	setTimeout(function() {
				if (Math.random() > 0.5) {
					document.getElementById("box").style.borderRadius = "100px";
				} else {
					document.getElementById("box").style.borderRadius = "0";
				}
								
				var top = Math.random();
				var left = Math.random();
				top = top * 270;
				left = left * 82.5;

				document.getElementById("box").style.top = top + "px";
				document.getElementById("box").style.left = left + "%";
				document.getElementById("box").style.backgroundColor = getRandomColor();
				document.getElementById("box").style.display = "block";
				createdTime = Date.now();
			}, time);
}

document.getElementById("box").onclick = function() {
	clickedTime=Date.now();
	reactionTime=(clickedTime-createdTime)/1000;

	if (reactionTime < best) {
		best = reactionTime;
	}
	
	n++;
	averageTime += reactionTime;

	if (reactionTime > 0 && reactionTime < 0.5) {
		good++;
		document.getElementById("time").style.color = "limegreen";
		document.getElementById("good").textContent = (good);
	} else if (reactionTime >= 0.5 && reactionTime < 0.75) {
		ok++;
		document.getElementById("time").style.color = "orange";
		document.getElementById("ok").textContent = (ok);
	} else {
		poor++;
		document.getElementById("time").style.color = "darkred";
		document.getElementById("poor").textContent = (poor);
	}

	document.getElementById("time").innerHTML = reactionTime + "s";
	document.getElementById("avgTime").textContent = (averageTime/n).toFixed(3);
	document.getElementById("totalTries").textContent = n;
	document.getElementById("best").textContent = best;

	
	this.style.display="none";
	
	makeBox();
}

makeBox();