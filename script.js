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
////////////////// offers
const offersBtnContainer = document.querySelector(".offers__links");
const offerLink = document.querySelectorAll(".offer__link");
offersBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".offer__link");
  if (!clicked) return;
  offerLink.forEach((offerBtn) => {
    offerBtn.classList.remove("bg-primary");
    offerBtn.classList.remove("text-light");
  });
  clicked.classList.add("bg-primary");
  clicked.classList.add("text-light");
});
const offersContainer = document.querySelector(".offers-details");
const clearHtml = function (element) {
  element.innerHTML = "";
};
const render = function (element, markup) {
  clearHtml(element);
  element.innerHTML = markup;
};

const coupleBtn = document.querySelector("#couple");
coupleBtn.addEventListener("click", function (e) {
  const markup = `
  <div class="row gy-4 flex-sm-row flex-column">
              <div class="col-12 col-xl-4">
                <div class="offer1 py-3">
                  <div
                    class="picture d-flex justify-content-center gap-2 text-center"
                  >
                    <img
                      class="img-fluid"
                      src="assets/offer1.png"
                      alt="picture"
                    />
                    <p>
                      <span class="mb-3">1 4</span>
                      <span class="mb-3">F E B</span> 2 0 2 5
                    </p>
                  </div>
                  <div class="description px-5 mt-3">
                    <p class="period mb-0">
                      <span class="type px-3 mx-3">Relax</span> 3 Days,3 Nights
                    </p>
                    <p class="place ms-3 my-2">Loga Sea</p>
                    <div class="price ms-3 d-flex justify-content-between">
                      <p class="d-inline-block"><span>700$</span>/Person</p>
                      <a class="px-4 py-3 text-center" href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  render(offersContainer, markup);
});
const teamBtn = document.querySelector("#team");
teamBtn.addEventListener("click", function (e) {
  const markup = `
  <div class="row gy-4 flex-sm-row flex-column">
              <div class="col-12 col-xl-4">
                <div class="offer1 py-3">
                  <div
                    class="picture d-flex justify-content-center gap-2 text-center"
                  >
                    <img
                      class="img-fluid"
                      src="assets/offer1.png"
                      alt="picture"
                    />
                    <p>
                      <span class="mb-3">1 4</span>
                      <span class="mb-3">F E B</span> 2 0 2 5
                    </p>
                  </div>
                  <div class="description px-5 mt-3">
                    <p class="period mb-0">
                      <span class="type px-3 mx-3">Relax</span> 3 Days,3 Nights
                    </p>
                    <p class="place ms-3 my-2">Loga Sea</p>
                    <div class="price ms-3 d-flex justify-content-between">
                      <p class="d-inline-block"><span>700$</span>/Person</p>
                      <a class="px-4 py-3 text-center" href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-4">
                <div class="offer2 py-3">
                  <div
                    class="picture d-flex justify-content-center gap-2 text-center"
                  >
                    <img
                      class="img-fluid"
                      src="assets/offer2.png"
                      alt="picture"
                    />
                    <p>
                      <span class="mb-3">1 8</span>
                      <span class="mb-3">J U N</span>2 0 2 5
                    </p>
                  </div>
                  <div class="description px-5 mt-3">
                    <p class="period mb-0">
                      <span class="type px-3 mx-3">Adventure</span> 4 Days,3
                      Nights
                    </p>
                    <p class="place ms-3 my-2">Ansgar Scheffold</p>
                    <div class="price ms-3 d-flex justify-content-between">
                      <p class="d-inline-block"><span>400$</span>/Person</p>
                      <a class="px-4 py-3 text-center" href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-4">
                <div class="offer3 py-3">
                  <div
                    class="picture d-flex justify-content-center gap-2 text-center"
                  >
                    <img
                      class="img-fluid"
                      src="assets/offer3.png"
                      alt="picture"
                    />
                    <p>
                      <span class="mb-3">2 2</span>
                      <span class="mb-3">D E C</span> 2 0 2 5
                    </p>
                  </div>
                  <div class="description px-5 mt-3">
                    <p class="period mb-0">
                      <span class="type px-3 mx-3">Relax</span> 7 Days,6 Nights
                    </p>
                    <p class="place ms-3 my-2">Lona X</p>
                    <div class="price ms-3 d-flex justify-content-between">
                      <p class="d-inline-block"><span>340$</span>/Person</p>
                      <a class="px-4 py-3 text-center" href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  render(offersContainer, markup);
});

const familyBtn = document.querySelector("#family");
familyBtn.addEventListener("click", function (e) {
  const markup = `
  <div class="row gy-4 flex-sm-row flex-column">
              <div class="col-12 col-xl-4">
                <div class="offer2 py-3">
                  <div
                    class="picture d-flex justify-content-center gap-2 text-center"
                  >
                    <img
                      class="img-fluid"
                      src="assets/offer2.png"
                      alt="picture"
                    />
                    <p>
                      <span class="mb-3">1 8</span>
                      <span class="mb-3">J U N</span>2 0 2 5
                    </p>
                  </div>
                  <div class="description px-5 mt-3">
                    <p class="period mb-0">
                      <span class="type px-3 mx-3">Adventure</span> 4 Days,3
                      Nights
                    </p>
                    <p class="place ms-3 my-2">Ansgar Scheffold</p>
                    <div class="price ms-3 d-flex justify-content-between">
                      <p class="d-inline-block"><span>400$</span>/Person</p>
                      <a class="px-4 py-3 text-center" href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  render(offersContainer, markup);
});
/////////////////////////////////
// BAD PRACTISE !!!!!
////////////////////////////////////
const destinationsBtnContainer = document.querySelector(".destinations__links");
const destinationBtnLink = document.querySelectorAll(".destination__link");
destinationsBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".destination__link");
  if (!clicked) return;
  destinationBtnLink.forEach((destBtn) => {
    destBtn.classList.remove("text-primary");
    destBtn.classList.remove("active");
  });
  clicked.classList.add("text-primary");
  clicked.classList.add("active");
});
