const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    panel.classList.add("active");
  });

  panel.addEventListener("mouseout", () => {
    panel.classList.remove("active");
  });
});
