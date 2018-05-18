// JavaScript Document
var lmod = document.lastModified;//Last Modified Date
lmod = "Date Last Modified: " + lmod;
document.getElementById("lastmod").innerHTML = lmod;//Puts the last modified date into a paragraph

window.addEventListener("load", startOpen, false);//Listens for startOpen to happen and open new window

storeName();
window.addEventListener("load", startReplace, false);//Listens for button press to change username

function newWindow()//Opens a window to another site
{	
	"use strict";
	window.open("https://www2.gmu.edu");
}

function startOpen()//Allows a click on a button to run newWindow
{	
	"use strict";
	var goToUni=document.getElementById("goToUni");//Gets the button press
	goToUni.addEventListener("click",newWindow,false);
}

function storeName()//gets the username from first-time visitors
{	"use strict";
	if(localStorage.getItem("username") === null)//If there is no username saved, prompt for one
		{
			var name = window.prompt("Enter Your Username:");//Initial username
			localStorage.setItem("username", name);
		}
	document.getElementById("uName").innerHTML = "Welcome to The Bunker, " + localStorage.getItem("username")+"!";//Post User Greeting
}

function startReplace()//Allows a click on a button to run changeName
{	
	"use strict";
	var changeUName=document.getElementById("changeUName");//Gets the button press
	changeUName.addEventListener("click",newName,false);
}

function newName()//replaces the old username with a new one
{
	"use strict";
	var name = window.prompt("Enter Your Username:");//Entering The New Username
	localStorage.setItem("username", name);
	document.getElementById("uName").innerHTML = "Welcome to The Bunker, " + localStorage.getItem("username")+"!";//Replaces the old username in text
}