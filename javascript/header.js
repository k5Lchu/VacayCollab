/* global document */
/* exported mobileNavClick */

function mobileNavClick() {
    'use strict';
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.offsetWidth > 0 && mobileNav.offsetHeight > 0) {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}
