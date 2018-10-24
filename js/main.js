var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var navLinks = document.getElementsByClassName('.page-link');
var responsiveColumnEl = document.querySelector('#responsiveColumn');
var carousels = bulmaCarousel.attach();

// Bulma responsive navigation bar with burger
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
window.onscroll = () => {
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
    }
}

if(window.innerWidth <= 1088) {
    responsiveColumnEl.classList.remove('is-offset-7');
}else{
    responsiveColumnEl.classList.add('is-offset-7');
}
window.onresize = () => {
    if(window.innerWidth <= 1088) {
        responsiveColumnEl.classList.remove('is-offset-7');
    }else{
        responsiveColumnEl.classList.add('is-offset-7');
    }
}


