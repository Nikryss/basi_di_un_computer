/* Nasconde tutte le sezioni inizialmente e mostra solamente quelle selezionate
    Con questa funzione, permette una navigazione senza dove cambiare pagina
*/

function showSection(sectionId) {

    let sections = document.querySelectorAll("main section");

    sections.forEach(section => {
        section.classList.remove("active")
    });

    document.getElementById(sectionId).classList.add("active");
}

/* ======================================
    Funzione per aprire la SideBar dell'header
========================================= */
function toggleMenu() {
    
    let sidebar = document.getElementById("sidebar");

    if(sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}