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

/*-----Scroll Section Active Link-----*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjusts when the underline switches
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

/*-----Typed JS function-----*/

const typed = new Typed('.home-content span', {
    strings: ['Web Developer', 'App Developer', 'Coder', 'Innovator', 'Entrepreneur','Software Engineer', 'Game Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/*----- Theme (dark / light) toggle -----*/
(() => {
    const THEME_KEY = 'theme'; // 'dark' | 'light'
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return; // nothing to do if toggle not present

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem(THEME_KEY);

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeToggle.setAttribute('aria-pressed', 'true');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
        } else {
            document.body.classList.remove('dark');
            themeToggle.setAttribute('aria-pressed', 'false');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
        }
    }

    // initialize
    const initial = saved ? saved : (prefersDark ? 'dark' : 'light');
    applyTheme(initial);

    // on toggle click
    themeToggle.addEventListener('click', () => {
        const next = document.body.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
    });

    // respond to system preference changes only when user hasn't set a preference
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e) => {
            if (!localStorage.getItem(THEME_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };
        // modern
        if (mql.addEventListener) mql.addEventListener('change', listener);
        else if (mql.addListener) mql.addListener(listener);
    }
})();

/*-----EmailJS Initialization-----*/
        (function(){
            emailjs.init("hGbjzA5_lxOE19vrY"); // Replace with your actual Public Key
        })();

/*-----Contact Form EmailJS-----*/
const contactForm = document.getElementById('contact-form');
const fullName = document.getElementById('name');
const emailAddress = document.getElementById('email');
const mobileNumber = document.getElementById('mobile');
const emailSubject = document.getElementById('email_subject');
const message = document.getElementById('message');

function sendEmail(e) {
    e.preventDefault(); // Prevents the page from reloading

    // Define the template parameters matching your EmailJS template variables
    const templateParams = {
        from_name: fullName.value,
        from_email: emailAddress.value,
        mobile: mobileNumber.value,
        subject: emailSubject.value,
        message: message.value
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
    emailjs.send('service_8biammd', 'template_fcsbgt5', templateParams)
        .then(() => {
            // Success Message
            alert('Message Sent Successfully!');
            
            // Clear the form
            contactForm.reset();
        }, (error) => {
            // Error Message
            console.log('FAILED...', error);
            alert('Something went wrong. Please try again.');
        });
}

// Attach the event listener
contactForm.addEventListener('submit', sendEmail);
