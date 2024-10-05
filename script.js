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

    //hiding# from url
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (which adds # to the URL)
    
            const targetSection = this.getAttribute('data-href');
            const section = document.querySelector(targetSection);
    
            if (section) {
                // Scroll to the section smoothly
                section.scrollIntoView({ behavior: 'smooth' });
            }
    
            // Optionally, remove any existing hash from the URL
        setTimeout(() => {
            history.replaceState(null, null, ' '); // Removes the # part from the URL after scroll completes
        }, 0); // Delay to ensure scrolling is complete
    });
});

   // Hiding any .html files in the URL dynamically
    const currentPath = window.location.pathname;
    
    if (currentPath.includes(".html")) {
        const newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/");
        window.history.replaceState(null, null, newPath);
    }
    
    // Show the content once the URL is cleaned up
    $('body').fadeIn(0); // Smooth fade-in for a better UX
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

     // Applying smooth scroll to menu items click and prevent URL hash change
     $('.navbar .menu li a').click(function(event){
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section id from the href attribute
        var target = $(this).attr('href');

        // Smooth scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 0); // Adjust the duration as needed

        // Close the menu after clicking on a menu item
         $('.navbar .menu').removeClass("active");
         $('.menu-btn i').removeClass("active");


        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // Close menu when clicking on a menu item
    $('.navbar .menu li a').click(function(event){
    event.preventDefault(); // Prevent default anchor behavior

    var target = $(this).attr('href'); // Get target section

    $('html, body').animate({
        scrollTop: $(target).offset().top // Smooth scroll to section
    }, 0);

    // Close the menu
    $('.navbar .menu').removeClass("active");
    $('.menu-btn i').removeClass("active");
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

// minimum and maximum length for a number input
numberInput.addEventListener('input', function() {
    const value = this.value;
    const maxLength = parseInt(this.getAttribute('maxlength'));
    const minLength = 10;

    // Check if the input exceeds the maximum length
    if (value.length > maxLength) {
        this.value = value.slice(0, maxLength); // Truncate to the maximum length
        errorText.textContent = 'Maximum 10 digits allowed!!!';
    }
    // Check if the input is below the minimum length
    else if (value.length < minLength) {
        errorText.textContent = 'Minimum 10 digits required!!!';
    } 
    // Clear the error if the length is within the valid range
    else {
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

// Initialize EmailJS
(function() {
    emailjs.init("hoVAH_lKbREHsUo1L");
})();

// Function to send mail
function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById("alphabetInput").value;
    const email = document.getElementById("emailInput").value;
    const number = document.getElementById("numberInput").value;
    const subject = document.getElementById("subject").value;
    const message = document.querySelector("textarea").value;

    // Validate form data
    if (!name || !email || !number || !subject || !message) {
        alert("All fields are required. Please fill out the entire form.");
        return; // Stop execution if validation fails
    }
    // Perform length validation for the number input
    const maxLength = parseInt(numberInput.getAttribute('maxlength'));
    const minLength = 10;

    // Check if the number input has the correct length
    if (number.length < minLength || number.length > maxLength) {
    errorText.textContent = 'Number must be between 10 and ' + maxLength + ' digits!';
    return; // Stop execution if validation fails
    }
    // Parameters to send to EmailJS
    const templateParams = {
        alphabetInput: name,
        emailInput: email,
        numberInput: number,
        subject: subject,
        message: message
    };

    // Send email
    emailjs.send("service_byu3fl7", "template_6c0mp4l", templateParams)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
        }, function (error) {
            console.error("FAILED...", error);
            alert("Message failed to send. Please try again.");
        });

    // Reset the form
    document.querySelector("form").reset();
}

// Add event listener to the send button
document.getElementById("sendButton").addEventListener("click", sendMail);


 // Handling links with data-href to hide URL in the status bar
 document.querySelectorAll('a[data-href]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-href');
        window.location.href = target;
    });

    anchor.addEventListener('mouseover', function(event) {
        event.preventDefault(); // Prevent showing the link in the status bar
    });
});


});