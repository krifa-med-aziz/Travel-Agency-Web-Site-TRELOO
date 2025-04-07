"use strict";
/////////////// section scrolling
const allSections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.querySelector(".navLinks");

navLinksContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-link");
  const id = clicked.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

////////////// Scroll button
const scrollBtn = document.querySelector(".ScrollUp");
const navbar = document.querySelector(".navbar");
scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navbar.scrollIntoView({ behavior: "smooth" });
});
const landingPage = document.querySelector(".landing-page");
const stickyScrollBtn = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    scrollBtn.classList.remove("hide");
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
    scrollBtn.classList.add("hide");
  }
};
const landingPageObserver = new IntersectionObserver(stickyScrollBtn, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});
landingPageObserver.observe(landingPage);
/////////////////// Section revealing on scroll
const sectionOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(sectionOnScroll, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
/////////////// modal & overlay
const bookNowBtn = document.querySelectorAll(".book__now");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".bookNow");

const openModal = (modal) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = (modal) => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
bookNowBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.classList.remove("hidden");
    openModal(modal);
  });
});
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  closeModal(modal);
});
btnCloseModal.addEventListener("click", () => {
  closeModal(modal);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal(modal);
});
//////////////////
