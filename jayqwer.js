// JavaScript Document
$(document).ready(function() {
	  		$('#time').datepicker({  

	  		});// end datepicker
			
			$('#thisForm').validate();//validates required form fields
  		});  // end ready


$(document).ready(function(){
			$("#fadePic").click(function(){
				$("#controller").fadeToggle("slow");
			});//end fadeToggle
		});//end ready
	
		function loadXMLDoc(){
			var xmlhttp=new XMLHttpRequest();//XML Data Request
			xmlhttp.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200){
					putList(this);//Activates the creation of the list
				}
			};
			xmlhttp.open("GET", "retrosys.xml", true);
			xmlhttp.send();
		}
		
		function putList(xml){
			var v;//List of system models
			var i;//the indesx of the models
			var xmlDoc;//the XML document call
			var text;//The text to be placed in the list
			xmlDoc=xml.responseXML;
			text = "<ul class='nobits'>";
			v = xmlDoc.getElementsByTagName("model");
			for (i=0;i<v.length;i++){
				text += "<li>"+v[i].childNodes[0].nodeValue+"</li>";//Populate list items
			}
			text += "</ul>";
			document.getElementById("oldsys").innerHTML = text;//Create text
		}
		loadXMLDoc();//Activate the XML call when the page loads