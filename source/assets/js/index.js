import switchTheme from "./btn-dark.js";
import shiftActive from "./btn.js";
import scrollBtn from "./btn-scroll.js";
import headerScroll from "./header-scrolling.js";
import scrollSpy from "./scroll-spy.js";
import { alertKeys } from "./section2.js";
import btnOnOff from "./section1.js";
import moveBall from "./section2.js";
import missDate from "./section3.js";
import responsiveFrame from "./section4.js";
import responsiveTester from "./section5.js";
import aboutDevice from "./section6.js";
import disconnected from "./section7.js";
import webCam from "./section8.js";
import getGeolocation from "./section9.js";
import searchImg from "./section10.js";
import sorteo from "./section11.js";
import slider from "./section12.js";
// import autoVideo from "./section13.js";
import validateForm from "./section14.js";
import speaker from "./section15.js";

document.addEventListener("DOMContentLoaded", () => {
    switchTheme(".dark-light-btn");
    shiftActive(".nav-btn", ".nav-menu");
    scrollBtn(".scroll-top-btn");
    headerScroll(".header");
    scrollSpy();
    alertKeys();
    btnOnOff("#show-clock", "#hide-clock", "h2", "clocky", "#section1 h2", "clock");
    btnOnOff("#active-alarm", "#silence-alarm", "h1", "alarmy", "#section1 h2", "alarm");
    moveBall(".ball", ".ball-box");
    missDate(".countdown", "January 1, 2022, 00:00:00", "AÑO NUEVO", "¡ Nada || Nothing !", "source/sound/少女終末旅行 Shoujo Shuumatsu Ryokou Ending FULL - More One Night.mp3");
    responsiveFrame(
    "youtube",
    "(min-width: 700px)",
    `<a href="https://www.youtube.com/watch?v=3ROXafxkd6E" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/3ROXafxkd6E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveFrame(
    "gmap",
    "(min-width: 700px)",
    `<a href="https://goo.gl/maps/fQBguS2uMUKvChLc8" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4551.617566903035!2d-71.52484043769198!3d-16.40252130174789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a559e02d9cd%3A0x4e489b21a257bb44!2sHospital%20Goyeneche!5e0!3m2!1ses!2spe!4v1611102884030!5m2!1ses!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );
    responsiveTester("res-test-form");
    aboutDevice("user-device");
    disconnected("disconnected", "SIN CONEXIÓN");
    webCam("web-cam");
    getGeolocation("geolocation");
    searchImg(".search-bar", ".category-cards");
    sorteo(".participants", ".sorteo-btn");
    slider(".slider-p", ".slider-n", ".slider-el");
    // autoVideo();
    validateForm(".c-form");
});

speaker();