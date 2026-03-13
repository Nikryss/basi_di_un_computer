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
    sidebar.classList.toggle("open");
}

function closeMenu() {
    
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
}

/* =============================================
    Funzione per la chiusura della Sidebar cliccando fuori
================================================ */
document.addEventListener("click", function(event) {

    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById(".menu-icon");

    if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuIcon.contains(event.target)
    ){
        closeMenu()
    }
});

/*================================================ 
    Funzione per chiudere la SideBar quando si seleziona una categoria
================================================== */
document.getElementById(".menu-link").forEach(link => {
    link.addEventListener("click", closeMenu);
})