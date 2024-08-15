$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["ElevateX Academy"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    
    //Only alphabets no any numbers and special characters//
const alphabetInput = document.getElementById('alphabetInput');

alphabetInput.addEventListener('input', function () {
    // Remove any characters that are not alphabets
    this.value = this.value.replace(/[^a-z A-Z]/g, '');
});

const numberInput = document.getElementById('numberInput');
const errorText = document.getElementById('errorText');


//Only numbers maximum allowed to 10//
numberInput.addEventListener('input', function() {
const value = this.value;
const maxLength = parseInt(this.getAttribute('maxlength'));

if (value.length > maxLength) {
this.value = value.slice(0, maxLength); // Truncate to the maximum length
errorText.textContent = 'Maximum 10 digits allowed!!!';
} else {
errorText.textContent = '';
}
});

//Checks valid email//
const emailInput = document.getElementById('emailInput');
const emailValidationMessage = document.getElementById('emailValidationMessage');

emailInput.addEventListener('input', function () {
    const email = this.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        emailValidationMessage.textContent = ''; // Valid email, clear the error message
    } else {
        emailValidationMessage.textContent = 'Enter a valid email address.';
    }
});
});

