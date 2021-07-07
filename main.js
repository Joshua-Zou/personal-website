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
$(document).ready(function() {
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
          if (element.classList.contains("intro"))addClassAfterTime(1000, "short-float", element)
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition(); 
});

async function addClassAfterTime(time, className, element){
    await sleep(time)
    element.classList.add(className)
}

$(document).ready(function() {
   
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