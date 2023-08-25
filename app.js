// Animated text show
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Splash screen

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logospan = document.querySelector(".logo");

// setTimeout(() => {
//   setTimeout(() => {
//     logospan.classList.add("active");
//   }, 400);

//   setTimeout(() => {
//     setTimeout(() => {
//       logospan.classList.remove("active");
//       logospan.classList.add("fade");
//     }, 50);
//   }, 2000);

//   setTimeout(() => {
//     intro.style.top = "-100vh";
//   }, 2300);
// });

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      logospan.classList.add("active");
    }, 400);

    setTimeout(() => {
      logospan.classList.remove("active");
      logospan.classList.add("fade");
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100%";
    }, 2300);
  });
});
