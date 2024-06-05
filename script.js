const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// loader
function loader() {
  let loading = document.querySelector(".loader");
  if (loading) {
    let h1 = loading.querySelector("h2");
    if (h1) {
      function textChange() {
        setTimeout(function () {
          h1.innerText = "EXPERIENCES";
        }, 1000);
        setTimeout(function () {
          h1.innerText = "CONTENTS";
        }, 2000);
      }
      textChange();
    }
    setTimeout(function () {
      loading.style.top = "-100%";
    }, 3000);
  }
}
loader();

function section3Img() {
  var projectFeature = document.querySelector(".project-feature");
  var imageSection = document.querySelector(".imageSection3");

  if (projectFeature && imageSection) {
    projectFeature.addEventListener("mouseenter", function () {
      imageSection.style.display = "block";
    });

    projectFeature.addEventListener("mouseleave", function () {
      imageSection.style.display = "none";
    });

    var projects = document.querySelectorAll(".project1");
    projects.forEach(function (p) {
      p.addEventListener("mouseenter", function () {
        var image = p.querySelector(".project-img > img").getAttribute("src");
        imageSection.style.backgroundImage = `url(${image})`;
      });
    });
  }
}

section3Img();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();

var main = document.querySelector('.section-5');
var crsr = document.querySelector('.cursor');
if (main && crsr) {
  main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    // crsr.style.top = dets.y + "px";
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector(".menu-screen");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  
  if (menu && full && navimg) {
    menu.addEventListener("click", function () {
      if (flag == 0) {
        full.style.top = "0";
        navimg.style.opacity = 0;
        flag = 1;
      } else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
      }
    });
  }
}

menuAnimation();
