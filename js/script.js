// Nav Items
const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
const navGallery = document.getElementById("nav-gallery");
const navContact = document.getElementById("nav-contact");
// sections
const sectionHero = document.querySelector(".hero");
const sectionAbout = document.querySelector(".about");
const sectionCta = document.querySelector(".cta");
const sectionGallery = document.querySelector(".gallery");
const sectionContact = document.querySelector(".contact");

// init
function init() {
  // sections
  sectionAbout.classList.add("hidden");
  sectionCta.classList.add("hidden");
  sectionGallery.classList.add("hidden");
  sectionContact.classList.add("hidden");
  sectionHero.classList.remove("hidden");
  // nav
  navAbout.classList.remove("nav-item-active");
  navGallery.classList.remove("nav-item-active");
  navContact.classList.remove("nav-item-active");
  navHome.classList.add("nav-item-active");
}

// Home
navHome.addEventListener("click", () => {
  init();
});

// About
navAbout.addEventListener("click", () => {
  // sections
  sectionAbout.classList.remove("hidden");
  sectionCta.classList.remove("hidden");
  sectionHero.classList.add("hidden");
  sectionContact.classList.add("hidden");
  sectionGallery.classList.add("hidden");
  // nav
  navHome.classList.remove("nav-item-active");
  navGallery.classList.remove("nav-item-active");
  navContact.classList.remove("nav-item-active");
  navAbout.classList.add("nav-item-active");
});

// Gallery
navGallery.addEventListener("click", () => {
  // sections
  sectionAbout.classList.add("hidden");
  sectionCta.classList.add("hidden");
  sectionHero.classList.add("hidden");
  sectionContact.classList.add("hidden");
  sectionGallery.classList.remove("hidden");
  // nav
  navHome.classList.remove("nav-item-active");
  navAbout.classList.remove("nav-item-active");
  navContact.classList.remove("nav-item-active");
  navGallery.classList.add("nav-item-active");
});

// CONTACT
navContact.addEventListener("click", () => {
  // sections
  sectionAbout.classList.add("hidden");
  sectionCta.classList.add("hidden");
  sectionHero.classList.add("hidden");
  sectionGallery.classList.add("hidden");
  sectionContact.classList.remove("hidden");
  // nav
  navHome.classList.remove("nav-item-active");
  navAbout.classList.remove("nav-item-active");
  navGallery.classList.remove("nav-item-active");
  navContact.classList.add("nav-item-active");
});

init();
