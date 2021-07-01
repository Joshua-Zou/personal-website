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
    if (window.screen.width > 500) return;
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