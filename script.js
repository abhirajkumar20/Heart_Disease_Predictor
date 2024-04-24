function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var topNav = document.querySelector('.top-left');
    topNav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}
