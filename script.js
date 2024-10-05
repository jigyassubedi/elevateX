$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Hiding # from URL
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetSection = this.getAttribute('data-href');
            const section = document.querySelector(targetSection);

            if (section) {
                // Scroll to the section smoothly
                section.scrollIntoView({ behavior: 'smooth' });
            }

            // Remove any existing hash from the URL
            setTimeout(() => {
                history.replaceState(null, null, ' '); // Removes the # part from the URL
            }, 0); // Delay to ensure scrolling is complete
        });
    });

    // Hiding any .html files in the URL dynamically
    const currentPath = window.location.pathname;
    if (currentPath.includes(".html")) {
        const newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/");
        window.history.replaceState(null, null, newPath);
    }

    // Show content once the URL is cleaned up
    $('body').fadeIn(500);

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto"); // Removing smooth scroll on slide-up button click
    });

    // Smooth scroll for menu items, and prevent URL hash change
    $('.navbar .menu li a').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        var target = $(this).attr('href');

        // Ensure the target exists
        if ($(target).length) {
            // Smooth scroll to the target section
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 0); // Adjust duration as needed
        }

        // Close the menu after clicking on a menu item
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

        // Re-enable smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Close menu when clicking on a menu item
    $('.navbar .menu li a').click(function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var target = $(this).attr('href'); // Get target section

        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top // Smooth scroll to section
            }, 0);
        }

        // Close the menu
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["ElevateX Academy"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Alphabet input: Only alphabets allowed
    const alphabetInput = document.getElementById('alphabetInput');
    alphabetInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-z A-Z]/g, ''); // Remove non-alphabet characters
    });

    // Number input validation
    const numberInput = document.getElementById('numberInput');
    const errorText = document.getElementById('errorText');
    numberInput.addEventListener('input', function() {
        const value = this.value;
        const maxLength = parseInt(this.getAttribute('maxlength'));
        const minLength = 10;

        // Max length check
        if (value.length > maxLength) {
            this.value = value.slice(0, maxLength);
            errorText.textContent = 'Maximum 10 digits allowed!!!';
        } else if (value.length < minLength) {
            errorText.textContent = 'Minimum 10 digits required!!!';
        } else {
            errorText.textContent = '';
        }
    });

    // Email validation
    const emailInput = document.getElementById('emailInput');
    const emailValidationMessage = document.getElementById('emailValidationMessage');
    emailInput.addEventListener('input', function() {
        const email = this.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(email)) {
            emailValidationMessage.textContent = '';
        } else {
            emailValidationMessage.textContent = 'Enter a valid email address.';
        }
    });

    // Initialize EmailJS
    (function() {
        emailjs.init("hoVAH_lKbREHsUo1L");
    })();

    // Send email
    function sendMail(event) {
        event.preventDefault();

        const name = document.getElementById("alphabetInput").value;
        const email = document.getElementById("emailInput").value;
        const number = document.getElementById("numberInput").value;
        const subject = document.getElementById("subject").value;
        const message = document.querySelector("textarea").value;

        if (!name || !email || !number || !subject || !message) {
            alert("All fields are required.");
            return;
        }

        const maxLength = parseInt(numberInput.getAttribute('maxlength'));
        const minLength = 10;

        if (number.length < minLength || number.length > maxLength) {
            errorText.textContent = 'Number must be between 10 and ' + maxLength + ' digits!';
            return;
        }

        const templateParams = {
            alphabetInput: name,
            emailInput: email,
            numberInput: number,
            subject: subject,
            message: message
        };

        emailjs.send("service_byu3fl7", "template_6c0mp4l", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            }, function(error) {
                console.error("FAILED...", error);
                alert("Message failed to send. Please try again.");
            });

        document.querySelector("form").reset();
    }

    document.getElementById("sendButton").addEventListener("click", sendMail);

    // Handle links with data-href to hide URL in the status bar
    document.querySelectorAll('a[data-href]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-href');
            window.location.href = target;
        });

        anchor.addEventListener('mouseover', function(event) {
            event.preventDefault();
        });
    });
});
