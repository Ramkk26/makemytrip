const statusEl = document.querySelectorAll(".status");

statusEl.forEach(function (element) {
  element.addEventListener("click", function () {
    statusEl.forEach(function (el) {
      if (el.classList.contains("radio-active")) {
        el.classList.remove("radio-active");
      }
    });
    element.classList.add("radio-active");
  });
});

// <===========slider=========>
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
