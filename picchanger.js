// JavaScript Document
randomPic();
function randomPic()//Selects from three random pictures and displays it in the "controller" Image ID
{
	"use strict";
	var pictures = new Array("controller0.jpg","controller1.jpg","controller2.jpg");//Array of picture file names
	var picNum = Math.floor(Math.random()*3);//Random number between 0, 1, and 2 used to select the pictures
	var picFile = pictures[picNum];//selects the file name by number
	document.getElementById("controller").src=picFile;
}