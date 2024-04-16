// Nav Items
const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
const navGallery = document.getElementById("nav-gallery");
const navContact = document.getElementById("nav-contact");
// sections
const sectionHero = document.querySelector(".hero");
const sectionAbout = document.querySelector(".about");
const sectionCta = document.querySelector(".about-cta");

sectionAbout.classList.add("hidden");
sectionCta.classList.add("hidden");
navHome.classList.add("nav-item-active");

navAbout.addEventListener("click", () => {
  sectionAbout.classList.remove("hidden");
  sectionCta.classList.remove("hidden");
  sectionHero.classList.add("hidden");
  navHome.classList.remove("nav-item-active");
  navAbout.classList.add("nav-item-active");
});

navHome.addEventListener("click", () => {
  sectionAbout.classList.add("hidden");
  sectionCta.classList.add("hidden");
  sectionHero.classList.remove("hidden");
  navHome.classList.add("nav-item-active");
  navAbout.classList.remove("nav-item-active");
});
