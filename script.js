const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");
const menuBar = document.querySelector(".menu-bar");
console.log(nav, closeBtn, menuBar);
closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});

menuBar.addEventListener("click", () => {
  nav.classList.add("show");
});
