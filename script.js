let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let dateTimeElement = document.getElementById("date-time"); // Add this line

// Toggle start menu visibility when clicking the taskbar
taskbar.addEventListener("click", () => {
    toggleStartMenu();
});

// Function to toggle start menu visibility
function toggleStartMenu() {
    if (startmenu.style.bottom === "50px") {
        startmenu.style.bottom = "-655px";
        // You can add additional logic here, e.g., closing open windows or other actions.
    } else {
        startmenu.style.bottom = "50px";
        // You can add additional logic here, e.g., loading and displaying recent applications or notifications.
    }
}
