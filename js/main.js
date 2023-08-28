// Se muestran las secciones de la pagina
function DocumentReady() {
    $(document).ready(function () {
        $('.header').load('header.html');
        $('.main').load('main.html');
    });
}

DocumentReady();

let num = 0;

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

function openURL(num) {
    switch (num) {
        case 1:
            window.open('https://www.facebook.com/lagunamosaicos/photos');
            break;
        case 2:
            window.open('https://www.instagram.com/lagunamosaicos/?hl=en');
            break;
    }
}

function downloadDoc() {
    axios({
          url: 'documents/catalog/2022CatalogoLagunaMosaico.pdf',
          method: 'GET',
          responseType: 'blob'
    })
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Catalogo_Laguna_Mosaicos.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}