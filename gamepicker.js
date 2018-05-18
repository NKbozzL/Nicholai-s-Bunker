// JavaScript Document
window.addEventListener("load", startPick, false);//Listens for button press to change username

//Arrays of game titles to be randomly assigned for suggestion based on genre
var actions = new Array("Saints Row 2","Mercenaries: Playground of Destruction","Condemned: Criminal Origins","Prototype","inFamous","Max Payne");//Action Games
var rpgs = new Array("Fallout 3","Darkest Dungeon","The Elder Scrolls: Morrowind","Tyranny","Starbound","Demons Souls","Mount & Blade");//Role Playing Games
var strats = new Array("Sid Meier's Pirates","Rise of Nations","Age of Mythology","Police Quest 2","Imagine Earth","Dungeon Keeper","Roller Coaster Tycoon");//Strategy Games
var shoots = new Array("Left 4 Dead 2","S.T.A.L.K.E.R.","Spec Ops: The Line","Bulletstorm","Sniper Elite","Far Cry 2","Serious Sam 3","Blue Estate","Prey","Subsistence");//Shooter Games
var retros = new Array("Zombies ate my Neighbors!","Phantasy Star 4","Castlevania: Symphony of the Night","Resident Evil 2","Doom","Strife","Mario 64","ActRaiser");//Retro Games

function startPick()//Allows a click on a button to run pickGame
{	
	"use strict";
	var suggest=document.getElementById("suggest");//Gets the button press
	suggest.addEventListener("click",pickGame,false);
}

function pickGame()//replaces the old username with a new one
{
	"use strict";
	var suggest = document.getElementById("genre").value;//getting the genre
	var pick;//Used to get the number of games in a genre
	var game;//The game to be selected
	if(suggest == "action")
		{
			pick=Math.floor(Math.random()*6);//Select an Action Game
			game=actions[pick];
		}
	else if(suggest == "rpg")
		{
			pick=Math.floor(Math.random()*7);//Select a Role Playing Game
			game=rpgs[pick];
		}
	else if(suggest == "strat")
		{
			pick=Math.floor(Math.random()*7);//Select a Strategy Game
			game=strats[pick];
		}
	else if(suggest == "shoot")
		{
			pick=Math.floor(Math.random()*10);//Select a Shooter Game
			game=shoots[pick];
		}
	else if(suggest == "retro")
		{
			pick=Math.floor(Math.random()*8);//Select a Retro Game
			game=retros[pick];
		}
	document.getElementById("suggestion").innerHTML = game;//Replaces the old username in text
}