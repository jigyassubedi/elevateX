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