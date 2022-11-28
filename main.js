function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener('click', function (e) {
  if (document.getElementsByClassName('mobile')[0].contains(e.target)) {
    // Clicked in box
  } else {
    hideMobileNavbar();
  }
});
async function showMobileNavbar() {
  document.getElementsByClassName("right-navbar")[0].style.left = "10px";
  document.getElementsByClassName("top-bar")[0].style.top = "-61px";
  await sleep(500)
  document.getElementsByClassName("right-navbar")[0].style.left = "0px";
}
function hideMobileNavbar() {
  document.getElementsByClassName("right-navbar")[0].style.left = "-500px";
  document.getElementsByClassName("top-bar")[0].style.top = "0";
}
function toggleMobileNavbar() {
  if (document.getElementsByClassName("right-navbar")[0].style.left !== "0px") {
    showMobileNavbar();
  } else {
    hideMobileNavbar();
  }
}
$(document).ready(function () {
  var elements;
  var windowHeight;
  function init() {
    elements = document.querySelectorAll('.scroll-from-left');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('left-scroll-element');
        element.classList.remove('scroll-from-left');
        if (element.classList.contains("intro")) addClassAfterTime(1000, "short-float", element)
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
});

async function addClassAfterTime(time, className, element) {
  await sleep(time)
  element.classList.add(className)
}

$(document).ready(function () {

  var elements;
  var windowHeight;
  function init() {
    elements = document.querySelectorAll('.scroll-from-right');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('right-scroll-element');
        element.classList.remove('scroll-from-right');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
$(document).ready(function () {
  "use strict";
  // Select all slides
  const slides = document.querySelectorAll(".slide");

  // loop through slides and set each slides translateX
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // select next slide button
  const nextSlide = document.querySelector(".btn-next");

  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;

  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  // select next slide button
  const prevSlide = document.querySelector(".btn-prev");

  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

})