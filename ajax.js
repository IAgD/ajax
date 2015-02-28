window.onload = inicio;

var x = new XMLHttpRequest();

function inicio(){
	var links = document.getElementsByTagName("a");
	for(var x = 0;x<links.length;x++){
		links[x].onmouseover = ver;
	}
}

function ver(evt){
	var direccion =  evt.target;

	x.open("GET",direccion,true);
	x.send();

	x.onreadystatechange = function(){
		if(x.readyState ==4 && x.status ==200){
			ventana = document.getElementById("vista");
			ventana.innerHTML = x.responseText;
			ventana.style.visibility = "visible";
			window.onmouseover = esconde;
		}
	}
}

function esconde(){
	document.getElementById("vista").style.visibility="hidden";
}