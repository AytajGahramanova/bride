// main-swiper
var swiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2000,
  // },
});

// products-swiper
var swiper = new Swiper(".products-swiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  },
});

// responsive-search
let magnifyingGlass = document.querySelector(".magnifying-glass");
let responsiveSearch = document.querySelector(".responsive-search");

magnifyingGlass.addEventListener("click", () => {
  responsiveSearch.classList.toggle("responsive-search-active");
});

// load more button
let cards = document.querySelectorAll(".category-card");
let loadBtn = document.querySelector(".category-btn .btn");
let visibleCount = 7;

cards.forEach((card, index) => {
  if (index >= visibleCount) {
    card.style.display = "none";
  }
});
loadBtn.addEventListener("click", () => {
  let nextCards = Array.from(cards).slice(visibleCount, visibleCount + 7);
  nextCards.forEach((card) => {
    card.style.display = "block";
  });
  visibleCount += 7;

  if (visibleCount >= cards.length) {
    loadBtn.style.display = "none";
  }
});
