// -------- Menú desplegable --------
const btnMenu = document.getElementById("btnMenu");
const panelMenu = document.getElementById("panelMenu");

btnMenu.addEventListener("click", function() {
    if (panelMenu.style.left === "0px") {
        panelMenu.style.left = "-260px"; 
    } else {
        panelMenu.style.left = "0px"; 
    }
});
