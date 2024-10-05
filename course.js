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

    // Hiding .html files from the URL
    const currentPath = window.location.pathname;
    if (currentPath.includes(".html")) {
        const newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/");
        window.history.replaceState(null, null, newPath);
    }

    // Smooth fade-in for better UX
    $('body').fadeIn(500);

    // Slide-up button script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto"); // Remove smooth scroll when clicking slide-up button
    });

    // Reapply smooth scroll when clicking menu items
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Handling links with data-href
    document.querySelectorAll('a[data-href]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the target section from the data-href attribute
            const target = this.getAttribute('data-href');
            const targetElement = document.querySelector(target);

            // Check if the target element exists before attempting to scroll or change the URL
            if (targetElement) {
                // Smooth scroll to the section
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Optionally remove the # or any hash from the URL
                setTimeout(() => {
                    history.replaceState(null, null, ' ');
                }, 0);
            } else {
                console.error('Target element does not exist:', target);
            }
        });

        // Prevent link hover from showing in the status bar
        anchor.addEventListener('mouseover', function(event) {
            event.preventDefault();
        });
    });
});
