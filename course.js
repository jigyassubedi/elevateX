$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    const currentPath = window.location.pathname;
    if (currentPath.includes(".html")) {
        const newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/");
        window.history.replaceState(null, null, newPath);
    }

    $('body').fadeIn(500);

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Menu item click and touch event handler
    $('.navbar .menu li a').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        var target = $(this).attr('href'); // Use data-href instead of href
        console.log('Redirecting to: ' + target); // Debug log to see if click is being triggered

        // Ensure the target exists
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 600); // Adjust duration for smoothness
        }

        // Close the menu after clicking on a menu item
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script for mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

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
