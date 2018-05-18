// JavaScript Document
getMovin();
getMovin2();
getMovin3();
getMovin4();
getMovin5();
function getMovin() 
{
	"use strict";
  	var elem = document.getElementById("line1");//element to be changed
  	var width = 0;//initial width
  	var id = setInterval(frame, 10);//rate of change
  	function frame() 
	{
		if (width == 100) 
		{
		  clearInterval(id);//stop when it htis the width limit
		} 
		else 
		{
		  width++; 
		  elem.style.width = width + '%';//continue growing
		}
  	}
}
//every "getMovin" function is a repeat of this, but for a different bar, with different proportions. There are 5 of them
function getMovin2() 
{
	"use strict";
  	var elem = document.getElementById("line2");
  	var width = 0;
  	var id = setInterval(frame, 10);
  	function frame() 
	{
		if (width == 80) 
		{
		  clearInterval(id);
		} 
		else 
		{
		  width++; 
		  elem.style.width = width + '%'; 
		}
  	}
}
function getMovin3() 
{
	"use strict";
  	var elem = document.getElementById("line3");
  	var width = 0;
  	var id = setInterval(frame, 10);
  	function frame() 
	{
		if (width == 60) 
		{
		  clearInterval(id);
		} 
		else 
		{
		  width++; 
		  elem.style.width = width + '%'; 
		}
  	}
}
function getMovin4() 
{
	"use strict";
  	var elem = document.getElementById("line4");
  	var width = 0;
  	var id = setInterval(frame, 10);
  	function frame() 
	{
		if (width == 40) 
		{
		  clearInterval(id);
		} 
		else 
		{
		  width++; 
		  elem.style.width = width + '%'; 
		}
  	}
}
function getMovin5() 
{
	"use strict";
  	var elem = document.getElementById("line5");
  	var width = 0;
  	var id = setInterval(frame, 10);
  	function frame() 
	{
		if (width == 20) 
		{
		  clearInterval(id);
		} 
		else 
		{
		  width++; 
		  elem.style.width = width + '%'; 
		}
  	}
}

window.addEventListener("load", startSwap, false);//Listens for button press to change the bars' color

function startSwap()//Allows a click on a button to run changeColor
{	
	"use strict";
	var changeColor=document.getElementById("changeColor");//Gets the button press
	changeColor.addEventListener("click",newColor,false);
}

function newColor()//replaces the old bar color with a new one
{
	"use strict";
	var color = window.prompt("What color shall it be?:");//Entering The New Color
	var lines = document.getElementsByClassName("myBar");//gets the animated bars
	for(var i=0;i<lines.length;++i)
		{	
    		lines[i].setAttribute("style", "background-color: "+color);//changes the bar colors
			getMovin();//Re-Does the bar animations
			getMovin2();
			getMovin3();
			getMovin4();
			getMovin5();
		}
}