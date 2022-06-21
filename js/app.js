// JQuery Counter
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// prining switch
const pricing_switch = document.querySelector(".switch-button-checkbox");
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");

pricing_switch.addEventListener(
  "change",
  function () {
    if (pricing_switch.checked) {
      monthly.classList.add("active");
      yearly.classList.remove("active");
    } else {
      monthly.classList.remove("active");
      yearly.classList.add("active");
    }
  },
  false
);

// Owl Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

//Scroll To Top button
var mybutton = document.getElementById("scroll_to_top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
