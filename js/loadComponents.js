fetch("components/header.html") /* Richiedo risorse al server, in questo caso del file del componente Header */
    .then(response => response.text()) /* Quando riesce a prendere la risorsa, restituisce un oggetto response */
    .then(data => { /* Prendi il contenuto del file HTML */
        document.getElementById("header-placeholder").innerHTML = data; /* Inserisci il contenuto ricavato dal file */
    });

fetch("components/footer.html") /* Richiedo risorse al server, in questo caso del file del componente Footer */
    .then(response => response.text()) /* Quando riesce a prendere la risorsa, restituisce un oggetto response */
    .then(data => { /* Prendi il contenuto del file HTML */
        document.getElementById("footer-placeholder").innerHTML = data; /* Inserisci il contenuto ricavato dal file  */ 
    });