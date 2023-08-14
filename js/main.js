const navButton=document.querySelector(".nav-button"),navMenu=document.querySelector(".nav-menu");navButton.addEventListener("click",function(){navButton.classList.toggle("nav-button--active"),navMenu.classList.toggle("nav-menu--active")});const navMenuLink=document.querySelectorAll(".nav-menu__link");navMenuLink.forEach(function(n){n.addEventListener("click",function(){navButton.classList.remove("nav-button--active"),navMenu.classList.remove("nav-menu--active")})});const buttonForm=document.querySelectorAll(".button__form-click"),form=document.querySelector(".hidden-form"),formCross=document.querySelector(".hidden-form__cross");buttonForm.forEach(function(n){n.addEventListener("click",function(){form.classList.add("hidden-form--active")})}),formCross.addEventListener("click",function(){form.classList.remove("hidden-form--active")});const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),consentButton=document.querySelectorAll(".button__consent"),consent=document.querySelector(".consent"),consentCross=document.querySelector(".consent__cross");consentButton.forEach(function(n){n.addEventListener("click",function(){consent.classList.add("consent--active")})}),consentCross.addEventListener("click",function(){consent.classList.remove("consent--active")});const privacyButton=document.querySelectorAll(".button__privacy"),privacy=document.querySelector(".privacy"),privacyCross=document.querySelector(".privacy__cross");privacyButton.forEach(function(n){n.addEventListener("click",function(){privacy.classList.add("privacy--active")})}),privacyCross.addEventListener("click",function(){privacy.classList.remove("privacy--active")}),$(function(){$(".slider-img").click(function(n){var e=$(this).attr("src");$("body").append('<div id="overlay"></div><div id="magnify"><img src="'+e+'"><div id="close-popup"><i></i></div></div>'),$("#magnify").css({left:($(document).width()-$("#magnify").outerWidth())/2,top:($(window).height()-$("#magnify").outerHeight())/2}),$("#overlay, #magnify").fadeIn("fast")}),$("body").on("click","#close-popup, #overlay",function(n){n.preventDefault(),$("#overlay, #magnify").fadeOut("fast",function(){$("#close-popup, #magnify, #overlay").remove()})})});