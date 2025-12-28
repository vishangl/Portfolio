const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
const links = nav.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

// Toggle mobile nav
menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close nav on link click (mobile)
links.forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});

// Highlight active section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        }
    });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));
