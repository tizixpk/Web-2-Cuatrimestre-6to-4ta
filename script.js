function mostrarHistoria() {
    var texto = document.getElementById("masHistoria");
    var boton = document.getElementById("botonHistoria");

    if (texto.hidden == true) {
        texto.hidden = false;
        boton.innerHTML = "Leer menos";
        boton.setAttribute("aria-expanded", "true");
    } else {
        texto.hidden = true;
        boton.innerHTML = "Leer más";
        boton.setAttribute("aria-expanded", "false");
    }
}
