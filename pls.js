// JavaScript Document
var bulnert = document.getElementById("disclaimer");//gets the element to change

bulnert.addEventListener("mouseover",mouseIn,false);
bulnert.addEventListener("mouseout",mouseGone,false);
	
	function mouseIn()
	{
		var x = document.getElementById("disclaimer");//changes the color as the mouse goes over
		x.setAttribute("style","background-color:orange");		
	}
	function mouseGone()
	{
		var x = document.getElementById("disclaimer");//changes the color back as the mouse goes away
		x.setAttribute("style","background-color:#69a676");	
	}