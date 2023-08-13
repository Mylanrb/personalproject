// Page text show

// Contact btn

document.querySelector(".contact-btn").addEventListener("click", () => {
  window.location.href = "contact.html";
});

setTimeout(() => {
  console.log("2s");
}, 2000);

// Page 1

const page1 = document.querySelector(".page-1");
const header1 = document.querySelector(".page-header-1");
const textDiv1 = document.querySelector(".page-text-div-1");

page1.addEventListener("mouseenter", () => {
  header1.classList.remove("unhovered");
  textDiv1.classList.remove("unhovered");
  header1.classList.add("hovered");
  textDiv1.classList.add("hovered");
});

page1.addEventListener("mouseleave", () => {
  header1.classList.remove("hovered");
  textDiv1.classList.remove("hovered");
  header1.classList.add("unhovered");
  textDiv1.classList.add("unhovered");
});

// Page 2

const page2 = document.querySelector(".page-2");
const header2 = document.querySelector(".page-header-2");
const textDiv2 = document.querySelector(".page-text-div-2");

page2.addEventListener("mouseenter", () => {
  header2.classList.remove("unhovered");
  textDiv2.classList.remove("unhovered");
  header2.classList.add("hovered");
  textDiv2.classList.add("hovered");
});

page2.addEventListener("mouseleave", () => {
  header2.classList.remove("hovered");
  textDiv2.classList.remove("hovered");
  header2.classList.add("unhovered");
  textDiv2.classList.add("unhovered");
});

// Page 3

const page3 = document.querySelector(".page-3");
const header3 = document.querySelector(".page-header-3");
const textDiv3 = document.querySelector(".page-text-div-3");

page3.addEventListener("mouseenter", () => {
  header3.classList.remove("unhovered");
  textDiv3.classList.remove("unhovered");
  header3.classList.add("hovered");
  textDiv3.classList.add("hovered");
});

page3.addEventListener("mouseleave", () => {
  header3.classList.remove("hovered");
  textDiv3.classList.remove("hovered");
  header3.classList.add("unhovered");
  textDiv3.classList.add("unhovered");
});

const pages = document.querySelectorAll(".page");

pages.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(el);
    let pageLink = el.getAttribute("li");

    window.location.href = data[pageLink].link;
  });
});

const data = {
  pagelink1: {
    link: "portfolio.html",
  },
  pagelink2: {
    link: "shutterstories.html",
  },
  pagelink3: {
    link: "contact.html",
  },
};

// language

// NIETTTT VERWIJDEREENNNN (ECHTE CODE DIE IK GEBRUIK MAAR OP PAUZE STAAT)

// const compass = document.querySelector(".compass");
// const lContainer = document.querySelector(".l-container");

// document.addEventListener("click", (e) => {
//   const isDropDown = e.target.matches(".l-text");
//   const isCompass = e.target.matches(".compass");

//   if (isCompass) {
//     lContainer.classList.toggle("l-container-s");
//     setTimeout(() => {
//       lContainer.classList.toggle("active");
//     }, 200);

//     return;
//   } else if (isDropDown) {
//     return;
//   } else {
//     lContainer.classList.remove("active");
//     setTimeout(() => {
//       lContainer.classList.add("l-container-s");
//     }, 1);
//   }
// });

//

// nav hamburger

const hamburger = document.querySelector(".bars");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log("Hamburger clicked!");
});
