var menu=document.getElementById("navbar-menu");
function openMenu() {
  menu.style.display="flex";
  menu.style.right="0";
}

function closeMenu() {
  const closemenu=document.getElementsByClassName("close-menu");
   menu.style.display="none"
  closemenu.style.display="none";
}

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
