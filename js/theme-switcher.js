document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is loaded");
    var themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        console.log("Theme selector found");
        themeSelector.addEventListener('change', function () {
            var selectedTheme = this.value;
            console.log("Selected theme: " + selectedTheme);
            changeTheme(selectedTheme);
        });
    } else {
        console.error("Theme selector not found!");
    }
});

function changeTheme(themeName) {
    console.log("Changing theme to: " + themeName);
    var body = document.body;
    // Remove existing theme class
    body.className = body.className.replace(/theme-\S+/g, '');
    // Add new theme class
    body.classList.add(themeName);
    console.log("Theme changed to: " + themeName);
}
