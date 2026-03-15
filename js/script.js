/* ======================================
    Funzioni per aprire/chiudere la SideBar dell'header
========================================= */
function toggleMenu() {
    
    const sidebar = document.getElementById("sidebar"); /* Questa costante prende il valore dall'elemento con ID Sidebar */
    const overlay = document.getElementById("overlay"); /* Questa costante prende il valore dall'elemento con ID Overlay */

    sidebar.classList.toggle("open"); /* Metti a questo elemento la classe CSS "Open" */
    overlay.classList.toggle("active"); /* Metti a questo elemento la classe CSS "Active" */

    document.body.classList.toggle("no-scroll"); /* Metti all'interno Body elemento la classe CSS "no-scroll" */

}

function closeMenu() {

    const sidebar = document.getElementById("sidebar"); /* Questa costante prende il valore dall'elemento con ID Sidebar */
    const overlay = document.getElementById("overlay"); /* Questa costante prende il valore dall'elemento con ID Overlay */

    sidebar.classList.remove("open"); /* Togli a questo elemento la classe CSS "Open" */
    overlay.classList.remove("active"); /* Togli a questo elemento la classe CSS "Active" */

    document.body.classList.remove("no-scroll"); /* Togli all'interno Body elemento la classe CSS "no-scroll" */

}

/*================================================ 
    Funzione per chiudere la SideBar quando si seleziona una categoria
================================================== */
document.addEventListener("click", function(e) { /* Prendi qualsiasi azioni che succede sulla pagina Web */
    
    if(e.target.classList.contains("menu-link")) { /* Se l'azione è stata eseguita sopra a una categoria della Sidebar */
        closeMenu(); /* Attiva questa funzione per chiudere la sidebar */
    }
});