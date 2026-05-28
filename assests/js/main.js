document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => preloader.remove(), 500);
  }

  const searchItems = document.querySelectorAll(".user-items .search-item");
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-box .search-input");
  const closeButton = document.querySelector(".close-button");

  searchItems.forEach(item => {
    item.addEventListener("click", function () {
      searchBox?.classList.toggle("active");
      searchInput?.focus();
    });
  });

  closeButton?.addEventListener("click", function () {
    searchBox?.classList.remove("active");
  });

  new Swiper(".main-swiper", {
    speed: 500,
    loop: true,
    pagination: {
      el: "#billboard .swiper-pagination",
      clickable: true,
    },
  });

  document.querySelectorAll(".product-swiper").forEach(function (el) {
    const sectionId = el.id;
    new Swiper("#" + sectionId + " .swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: "#" + sectionId + " .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        999: { slidesPerView: 3, spaceBetween: 10 },
        1366: { slidesPerView: 4, spaceBetween: 40 },
      },
    });
  });

    new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
      },
      pagination: {
        el: "#testimonials .swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".collection-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: "#collections .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        599: { slidesPerView: 2, spaceBetween: 10 },
        980: { slidesPerView: 3, spaceBetween: 20 },
      },
    });

    const thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".product-large-slider", {
      slidesPerView: 1,
      autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

    new Swiper(".feat-swiper", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      creativeEffect: {
        prev: { shadow: true, translate: ["-20%", 0, -1] },
        next: { translate: ["100%", 0, 0] },
      },
    });

  document.querySelectorAll(".product-qty").forEach(function (productEl) {
    const quantityInput = productEl.querySelector('#quantity');
    const rightBtn = productEl.querySelector('.quantity-right-plus');
    const leftBtn = productEl.querySelector('.quantity-left-minus');

    rightBtn?.addEventListener('click', function (e) {
      e.preventDefault();
      const quantity = parseInt(quantityInput.value);
      quantityInput.value = quantity + 1;
    });

    leftBtn?.addEventListener('click', function (e) {
      e.preventDefault();
      const quantity = parseInt(quantityInput.value);
      if (quantity > 0) {
        quantityInput.value = quantity - 1;
      }
    });
  });

  jarallax(document.querySelectorAll(".jarallax"));
  jarallax(document.querySelectorAll(".jarallax-img"), { keepImg: true });
});
