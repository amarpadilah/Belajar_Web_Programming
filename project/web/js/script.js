//toggle class aktive
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav nya
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});