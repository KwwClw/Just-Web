function drop() {
    document.getElementById("submenu").classList.toggle("show");
};

document.addEventListener("DOMContentLoaded", function () {
    const switchmode = document.getElementById("switchmode");
    const currentClass = body.className;

    switchmode.addEventListener("change", () => {
        if(switchmode.checked) {
            body.className = "dark-mode";
            console.log(currentClass);
        } else {
            body.className = "light-mode";
        }
    });
});