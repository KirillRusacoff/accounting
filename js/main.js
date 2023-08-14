const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu')

navButton.addEventListener('click', function () {
    navButton.classList.toggle('nav-button--active');
    navMenu.classList.toggle('nav-menu--active');
});

const navMenuLink = document.querySelectorAll('.nav-menu__link');

navMenuLink.forEach(function (item) {
    item.addEventListener('click', function () {
        navButton.classList.remove('nav-button--active');
        navMenu.classList.remove('nav-menu--active');
    });
});

const buttonForm = document.querySelectorAll('.button__form-click');
const form = document.querySelector('.hidden-form');
const formCross = document.querySelector('.hidden-form__cross');

buttonForm.forEach(function (item) {
    item.addEventListener('click', function () {
        form.classList.add('hidden-form--active');
    });
});

formCross.addEventListener('click', function () {
    form.classList.remove('hidden-form--active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const consentButton = document.querySelectorAll('.button__consent');
const consent = document.querySelector('.consent');
const consentCross = document.querySelector('.consent__cross');

consentButton.forEach(function (item) {
    item.addEventListener('click', function () {
        consent.classList.add('consent--active');
    });
});

consentCross.addEventListener('click', function () {
    consent.classList.remove('consent--active');
});

const privacyButton = document.querySelectorAll('.button__privacy');
const privacy = document.querySelector('.privacy');
const privacyCross = document.querySelector('.privacy__cross');

privacyButton.forEach(function (item) {
    item.addEventListener('click', function () {
        privacy.classList.add('privacy--active');
    });
});

privacyCross.addEventListener('click', function () {
    privacy.classList.remove('privacy--active');
});

$(function(){
    $('.slider-img').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
       left: ($(document).width() - $('#magnify').outerWidth())/2,
              top: ($(window).height() - $('#magnify').outerHeight())/2
     });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
  
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
});

