// rotating words from https://codepen.io/rachsmith/pen/BNKJme


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

function hideContent(){
	var x = document.getElementById("first-message");
	if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("second-message");
  	if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }


}

function hideNewContent(){

	var y = document.getElementById("second-message");
  	if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }

  
  var z = document.getElementById("third-message");
  	if (z.style.display === "none") {
    z.style.display = "block";
     
  

  	setTimeout(function showDelay(){
		var delay = document.getElementById("delayed");
  		delay.style.display = "block";
  			}
		, 3000);

  } else {
    z.style.display = "none";
  }

 


}

function delayedContent(){
	var x = document.getElementById("delayed-A");
	x.style.display = "block";

	if (x.style.display==="block"){
		document.getElementById("infobox").style.display = "none";
		document.body.style.backgroundImage = "url(../img/standby.png)";
	}

}

	
document.getElementById("second-message").style.display = "none";
document.getElementById("third-message").style.display = "none";
document.getElementById("delayed").style.display = "none";
document.getElementById("delayed-A").style.display = "none";
