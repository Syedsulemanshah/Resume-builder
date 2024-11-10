const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLDivElement;

toggleButton?.addEventListener("click", () => {
    if (skillsSection.style.display === "block") {
        skillsSection.style.display = "none";
    } else {
        skillsSection.style.display = "block";
    }
});
