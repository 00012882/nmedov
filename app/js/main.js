AOS.init();

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
        
    var header = document.querySelector('.header');
        
    var headerChildren = header.querySelectorAll('.header-left > *, .header-right > *');
        
    var duration = 0.5;
        
    if (scrollPosition > 0) {
        gsap.to(headerChildren, {
                opacity: 0,
                y: -50,
                duration: duration,
                ease: "power2.out"
            });
    } else {
    gsap.to(headerChildren, {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: "power2.out"
        });
    }
});

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".products__main, .type");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".products",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".products").offsetWidth - window.innerWidth,
    enabled: () => window.innerWidth >= 1101 // Disable trigger for screen widths below 1101px
  }
});




gsap.registerPlugin(ScrollTrigger);

let brandsLists = gsap.utils.toArray(".brands__list");

gsap.to(brandsLists, {
  xPercent: -100 * (brandsLists.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".brands",
    pin: true,
    scrub: 1,
    snap: 1 / (brandsLists.length - 1),
    end: () => "+=" + document.querySelector(".brands").offsetWidth - window.innerWidth
  }
}); 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// gsap.registerPlugin(ScrollTrigger);

// // Function to animate the scrolling behavior
// function animateScroll() {
//   gsap.to(".products", {
//     x: () => -(document.documentElement.scrollLeft || document.body.scrollLeft),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".products",
//       start: "top left",
//       scrub: true, // Smooth scrolling effect
//       end: () => "+=" + document.querySelector(".products").offsetWidth - window.innerWidth // Adjust to the width of the section
//     }
//   });
// }

// // Call the function to animate scrolling
// animateScroll();







// const title = document.querySelector('.page-title__animated');
// const container = document.querySelector('.page');
// const containerHeight = container.offsetHeight;
// let translateX = 0;

// function moveText() {
//     translateX -= 4;
//     if (translateX <= -containerHeight) {
//         translateX = 0;
//     }
//     title.style.transform = `translateX(${translateX}px)`;
// }

// setInterval(moveText, 10); // Adjust the interval as needed for smoother or faster animation
