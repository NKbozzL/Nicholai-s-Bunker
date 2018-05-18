window.addEventListener("load", startMsg, false);//Listens for button press to change the message displayed

function startMsg()//Allows a click on a button to run changeMsg
{	
	"use strict";
	var changeMsg=document.getElementById("changeMsg");//Gets the button press
	changeMsg.addEventListener("click",newMsg,false);
}

function newMsg()//replaces the old bar message with a new one
{
	"use strict";
	var phrase = window.prompt("What do you want to say?:");//Entering The New Message
	document.getElementById("msg").innerHTML = phrase;
}