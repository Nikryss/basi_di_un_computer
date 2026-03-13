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
    Funzioni per aprire/chiudere la SideBar dell'header
========================================= */
function toggleMenu() {
    
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");

    document.body.classList.toggle("no-scroll");

}

function closeMenu() {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.remove("open");
    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

}

/* =====================================================
    Chiusura cliccando Overlay
======================================================== */
document.getElementById("overlay").addEventListener("click", closeMenu);

/*================================================ 
    Funzione per chiudere la SideBar quando si seleziona una categoria
================================================== */
document.getElementById(".menu-link").forEach(link => {
    link.addEventListener("click", closeMenu);
})