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
    
    // Hiding any .html files in the URL dynamically
    const currentPath = window.location.pathname;
    if (currentPath.includes(".html")) {
        const newPath = currentPath.replace(/\/?(index|data|web)\.html/, "/");
        window.history.replaceState(null, null, newPath);
    }
    
    // Show the content once the URL is cleaned up
    $('body').fadeIn(500); // Smooth fade-in for a better UX

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Apply smooth scroll when clicking on navbar menu links
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script for mobile view
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Handling links with data-href to hide URL in the status bar
    document.querySelectorAll('a[data-href]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-href');

            // Collapsing the menu after click (important for mobile)
            $('.navbar .menu').removeClass('active');
            $('.menu-btn i').removeClass('active');
            
            // Navigate to target page after collapsing
            window.location.href = target;
        });
    });
});
