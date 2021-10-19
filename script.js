let home = document.getElementById("home");
let resume = document.getElementById("resume");
let frame = document.getElementById("frame");

home.onclick = function(){
	frame.src = "home.html";
	home.style.backgroundColor = "#151B54";
	resume.style.backgroundColor = "#46C7C7";
}

resume.onclick = function(){
	frame.src = "resume.html";
	resume.style.backgroundColor = "#151B54";
	home.style.backgroundColor = "#46C7C7";
}