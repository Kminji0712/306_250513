/* header */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const logoImg = document.querySelector("#headerLogo");
  const search = document.querySelector(".search");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 850) {
      header.classList.add("on");
      logoImg.setAttribute("src", "image/logo01_c.png"); // 스크롤 시 로고 변경
      search.classList.add("searchColor");
    } else {
      header.classList.remove("on");
      search.classList.remove("searchColor");
      logoImg.setAttribute("src", "image/logo01_w.png"); // 원래 로고로 되돌림
    }
  });
});
/* nav */
// nav 색상 변경
document.querySelectorAll('.sub_menu_list ul > li').forEach(li => {
  li.addEventListener('mouseenter', () => {
    const parent = li.closest('.sub_menu_list');
    const h3 = parent.querySelector('h3');
    const ul = li.parentElement;
    li.classList.add('hovered');
    h3.classList.add('hovered');
    ul.classList.add('hovered');
  });

  li.addEventListener('mouseleave', () => {
    const parent = li.closest('.sub_menu_list');
    const h3 = parent.querySelector('h3');
    const ul = li.parentElement;
    li.classList.remove('hovered');
    h3.classList.remove('hovered');
    ul.classList.remove('hovered');
  });
});
// 내비게이션 숨기기
let menuItems = document.querySelectorAll(".menu_item");
let subMenus = document.querySelectorAll(".sub_menu");
const header = document.querySelector(".header");
const mainMenu = document.querySelector(".main_menu");
const mainMenuText = document.querySelector(".menu_item > a");
const logoImg = document.querySelector("#headerLogo");
const search = document.querySelector(".search");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let target = document.getElementById(item.dataset.target);

    // 메뉴 열려 있으면 닫고 클래스 제거
    if (target.style.display === "block") {
      target.style.display = "none";

      // 모든 서브메뉴 닫힌 상태라면 클래스 제거
      const anyOpen = Array.from(subMenus).some(
        (sub) => sub.style.display === "block"
      );
      if (!anyOpen) {
        header.classList.remove("on");
        mainMenu.classList.remove("click");
        mainMenuText.classList.remove("click");
        logoImg.setAttribute("src", "image/logo01_w.png");
        search.classList.remove("searchColor");
      }
    } else {
      // 다른 메뉴 닫고 현재 메뉴 열기
      subMenus.forEach(function (sub) {
        sub.style.display = "none";
      });
      if (target) {
        target.style.display = "block";
      }

      // header, main_menu에 클래스 추가
      header.classList.add("on");
      mainMenu.classList.add("click");
      mainMenuText.classList.add("click");
      logoImg.setAttribute("src", "image/logo01_c.png");
      search.classList.add("searchColor");
    }
  });
});

/* section5 slide */
const tabs = document.querySelectorAll(".tab");
const swiperEl = document.querySelector(".swiper2");
const videoEl = document.querySelector(".video-section");

let swiper2 = new Swiper(".slider", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: -500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.type;

    if (type === "video") {
      swiperEl.style.display = "none";
      videoEl.style.display = "block";
    } else {
      swiperEl.style.display = "block";
      videoEl.style.display = "none";
    }
  });
});
// main visual
var swiper = new Swiper(".mySwiper",
  {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 대기환경
  function toggleBox(element) {
    element.classList.toggle('open');
  }