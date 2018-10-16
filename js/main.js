// Bulma responsive navigation bar with burger
var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var navLinks = document.getElementsByClassName('.page-link');

burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    document.querySelectorAll
    console.log(navLinks[1]);
    var i;
    for(i=0; i<navLinks.length; i++)
    navLinks[i].style.color = "black";
});

// Navbar drop and scroll and background at top of page
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // Navbar
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.background = "rgba(3, 78, 81, 0.9)";
    }
    prevScrollpos = currentScrollPos;
    if (prevScrollpos == 0) {
        document.getElementById("navbar").style.background = "none";
        //     document.getElementById("footer").style.bottom = "-100px";
    }
    // else {
    //     document.getElementById("footer").style.bottom = "0";
    // }
    // // Hide full footer until scroll to bottom of page
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
    //   document.getElementById("contact-info").style.display = "flex";

    // } else {
    //   document.getElementById("contact-info").style.display = "none";
    // }
}

var carousels = bulmaCarousel.attach();