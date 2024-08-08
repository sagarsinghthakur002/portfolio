let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
   
    // slider 

    
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // Change to 'vertical' if you prefer vertical sliding
        loop: true,
    
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // Scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    