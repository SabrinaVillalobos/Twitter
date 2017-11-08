document.getElementById("btn").addEventListener("click", textArea);

function textArea() {

    var d = new Date(); //agregar hora antes del comentario
    var n = d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    }); //quitar los segundos del string hora hh:mm:ss
    document.getElementById("comment").innerHTML = n;

    //guardar texto ingresado en una variable
    var comments = document.getElementById('comment').value;

    //limpiar el textarea
    document.getElementById('comment').value = '';

    //contenedor que esta en el html
    var cont = document.getElementById('cont');

    //crear div con el comentario
    var newComments = document.createElement('div');
    newComments.className = "new";

    //validar que textarea tenga un mensaje
    if (comments.length === 0 || comments === null) {
        return false;
    }

    //nodos de texto del textarea
    var textNewComment = document.createTextNode("@SuperCuate" + " " + "posted on" + " " + n + ":  " + comments);
    var contenedorElemento = document.createElement('div');
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);

}

var textarea = null; //textarea crece al saltar linea o seguir escribiendo
window.addEventListener("load", function() {
    textarea = window.document.querySelector("textarea");
    textarea.addEventListener("keypress", function() {
        if (textarea.scrollTop != 0) {
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }, false);
}, false);

document.getElementById("comment").addEventListener("keyup", charCounter);

function charCounter(element) { //contador de carácteres
    var element = document.getElementsByClassName("txt")[0];
    var characters = element.value.length;
    var remain = 140 - characters;
    if (characters >= 120 && characters <= 129) { //Si pasa los 120 caracteres, mostrar el contador con OTRO color.
        counter.style.color = "#743D7B";
    } else if (characters >= 130 && characters <= 139) {
        counter.style.color = "#ED7513"; //Si pasa los 130 caracteres, mostrar el contador con OTRO color.
    } else if (characters >= 140) {
        counter.style.color = "red"; //si pasa el máximo, en rojo
    } else {
        counter.style.color = "#0F1232"; //de no cumplir nada de lo anterior, azul (el color default)
    }
    document.getElementById("counter").innerHTML = remain; //el contenido del contador es 140 menos el numero de letras

}

document.getElementById("btn").addEventListener("click", resetCharCount);

function resetCharCount() {
    counter.textContent = "140"; //se resetea el numero del contador de caracteres al apretar el botón
    counter.style.color = "#0F1232" //se resetea el color del contador de caracteres al apretar el botón
    textarea.style.height = "auto" //resetea la altura del textarea

}

document.getElementById("comment").addEventListener("input", disableBtn);

function disableBtn() { //desactivar boton si el numero de caracteres supera los 140

    if (document.getElementById('comment').value.length >= 140) {
        document.getElementById("btn").disabled = true;
    } else if (document.getElementById('comment').value.length <= 140) {
        document.getElementById("btn").disabled = false;
    }
}
