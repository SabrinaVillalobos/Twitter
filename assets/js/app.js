function textArea(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un msje
	if(comments.length === 0 || comments === null) {
		return false;
	}
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
}

function textAreaGrow(element) { //crece el textarea
    element.style.height = "1px";
    element.style.height = (element.scrollHeight)+"px";
}

function charCounter (element) { //contador de caracteres
    var characters = element.value.length;
    var remain = 140 - characters;
    if(characters >= 120 && characters < 130){//Si pasa los 120 caracteres, mostrar el contador con OTRO color.
    	counter.style.color = "#D02BFF";
    }
    if(characters >=130 && characters < 140){
    	counter.style.color = "#FFD21F"; //Si pasa los 130 caracteres, mostrar el contador con OTRO color.
    }
    if(characters >=140){
    	counter.style.color= "red";
    }/*
    else{ 
    	counter.style.color="#1DA1F2";
    }*/
  document.getElementById("counter").innerHTML = remain;
}