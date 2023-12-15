var nav = document.querySelectorAll(".navbar-nav li , .card-img , .swiper-slide img , .box , .main-box, #scroller-in h1, .slider-text a,.down")
nav.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      width:"70px",
      height:"70px",
      border: "2px solid #fff",
      backgroundColor: "transparent",
    })
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      width:"22px",
      height:"22px",
      backgroundColor: "#95C11E",
      border: "0px",
      x:0,
      y:0,
    });
  });
});

var down = document.querySelector(".down");
down.addEventListener("mouseenter",function(){
  gsap.to(down,{
    backgroundColor:"#95C11E",
    width:"70px",
    height:"70px",
    x:30
  });
});
down.addEventListener("mouseleave",function(){
  gsap.to(down,{
    backgroundColor:"transparent",
    width:"150px",
    height:"150px",
    x:0
  })
});

var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (det) {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
    left: det.x,
    top: det.y 
  });
});
var blur = document.querySelector("#blur");
document.addEventListener("mousemove", function (dets) {

  gsap.to(blur, {
    left: dets.x - 75,
    top: dets.y - 75,
    duration: 1.7

  });
});

gsap.to(".navbar", {
  backgroundColor: "#000",
  duration: .5,
  height: "80px",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -22%",
    end: "top -75%",
    scrub: 2
  }
});
gsap.to("#qoute-img", {
  y: 75,
  x: 100,
  duration: .5,
  scrollTrigger: {
    trigger: "#qoute-img",
    scroller: "body",
    start: "top 75%",
    end: "top 30%",
    scrub: 2
  }
});
gsap.to("#qoute-img2", {
  y: -80,
  x: -90,
  duration: .5,
  scrollTrigger: {
    trigger: "#qoute-img",
    scroller: "body",
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
  }
});
gsap.to(".main-box", {
  y: -65,
  duration: .5,
  scrollTrigger: {
    trigger: ".main-box",
    scroller: "body",
    scrub: 2,
    start: "top 88%",
    end: "top 50%",
  }
});

var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
},
);

const navlink = document.querySelectorAll(".nav-link");
const navcollapse = document.querySelector(".navbar-collapse.collapse")
navlink.forEach(function(a){
  a.addEventListener("click",function(){
    navcollapse.classList.remove("show")
  })
})