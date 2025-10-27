/*-----Menu toggle function-----*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/*-----Typed JS function-----*/

const typed = new Typed('.home-content span', {
    strings: ['Web Developer', 'App Developer', 'Coder', 'Programmer', 'Innovator', 'Entrepreneur','Software Engineer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

