function drop() {
    document.getElementById("submenu").classList.toggle("show");
};

document.addEventListener("DOMContentLoaded", function () {
    const switchmode = document.getElementById("switchmode");
    const styleLink = document.getElementById("style-link");
    const body = document.body;

    switchmode.addEventListener("change", () => {
        if(switchmode.checked) {
            body.classList.add("dark-mode");
            styleLink.href = "dark-mode.css";
        } else {
            body.classList.remove("dark-mode");
            styleLink.href = "styles.css";
        }
    });
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switchmode.checked = true;
        // Enable dark mode
        body.classList.add("dark-mode");
        // Update the stylesheet to the dark mode version
        styleLink.href = "dark-mode.css";
    }
});