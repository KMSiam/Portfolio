// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
}

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('show'));
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
});

// Skills tabs functionality
document.querySelectorAll('.skills__tab-button').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        
        // Remove active from all tabs and contents
        document.querySelectorAll('.skills__tab-button').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.skills__content').forEach(content => content.classList.remove('active'));
        
        // Add active to clicked tab and target content
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});
