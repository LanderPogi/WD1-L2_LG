document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded Successfully!");

  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });
});
