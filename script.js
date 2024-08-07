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
