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

