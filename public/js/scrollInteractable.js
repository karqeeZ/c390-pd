document.getElementById("scrollIcon").addEventListener("click", function () {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  });
  