document.addEventListener("DOMContentLoaded", function () {
    // Define your variables
    const switchMode = document.getElementById("switchmode");
    const button = document.getElementById("dropbtn");
    const menu = document.getElementById("submenu");
    const body = document.body;
    const darkText = document.getElementById("darktext");
    const slider = document.getElementById("slider");
    const switchElement = document.getElementById("switch");

    // Add a change event listener for the switchmode element
    switchMode.addEventListener("change", function () {
        if (switchMode.checked) {
            body.className = "dark-mode";
        } else {
            body.className = "light-mode";
        }
    });

    // Add a click event listener for the button element to toggle the menu display
    button.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // Add a click event listener for the entire document to hide the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (
            event.target !== button &&
            event.target !== menu &&
            event.target !== switchMode &&
            event.target !== darkText &&
            event.target !== slider &&
            event.target !== switchElement
        ) {
            menu.style.display = "none";
        }
    });
});
