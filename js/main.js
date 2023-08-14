// Se muestran las secciones de la pagina
function DocumentReady() {
    $(document).ready(function () {
        $('.header').load('header.html');
        $('.main').load('main.html');
    });
}

DocumentReady();

let num = 3;

function loadDoc(num) {
    const xhttp = new XMLHttpRequest();
    let data = document.getElementById("data");
    switch (num) {
        case 1:
            xhttp.onload = function () {
                data.innerHTML = this.responseText;
            }
            xhttp.open("GET", "main.html");
            xhttp.send();
            break;
        case 2:
            xhttp.onload = function () {
                data.innerHTML = this.responseText;
            }
            xhttp.open("GET", "productos.html");
            xhttp.send();
            break;
        case 3:
            xhttp.onload = function () {
                data.innerHTML = this.responseText;
            }
            xhttp.open("GET", "contactanos.html");
            xhttp.send();
            break;
    }
}