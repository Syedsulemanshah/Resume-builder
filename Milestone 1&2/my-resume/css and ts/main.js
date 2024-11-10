var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "block") {
        skillsSection.style.display = "none";
    }
    else {
        skillsSection.style.display = "block";
    }
});
