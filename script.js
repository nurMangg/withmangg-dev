 // Preloader
 window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.classList.add('fade-out');
    }, 500);
    // document.body.classList.add('dark-mode');
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Scroll Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressBar = document.querySelector('.progress-bar');
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});

// Back to Top Functionality
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Testimonial Slider
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function goToSlide(index) {
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    testimonialDots[index].classList.add('active');
    
    currentSlide = index;
}

// Add click event to dots
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto slide testimonials
setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonialSlides.length;
    goToSlide(nextSlide);
}, 5000);

// Portfolio Filtering
const portfolioFilters = document.querySelectorAll('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        // Remove active class from all filters
        portfolioFilters.forEach(item => item.classList.remove('active'));
        
        // Add active class to current filter
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide portfolio items based on filter
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('expand');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('expand');
});

// Add cursor effects on buttons and links
const buttons = document.querySelectorAll('button, a, .social-link, .testimonial-dot, .portfolio-filter');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
    });
});

// Theme Toggle (Dark/Light Mode)
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.theme-toggle');
    const iconMoon = document.getElementById('icon-moon');
    const iconSun = document.getElementById('icon-sun');
    const body = document.body;

    // Set awal berdasarkan localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.setAttribute('class', 'dark-mode');
        iconMoon.style.display = 'none';
        iconSun.style.display = 'inline';
    } else {
        body.removeAttribute('class');
        iconMoon.style.display = 'inline';
        iconSun.style.display = 'none';
    }

    toggle.onclick = function () {
        const isDark = body.getAttribute('class') === 'dark-mode';

        if (isDark) {
            body.removeAttribute('class');
            iconMoon.style.display = 'inline';
            iconSun.style.display = 'none';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('class', 'dark-mode');
            iconMoon.style.display = 'none';
            iconSun.style.display = 'inline';
            localStorage.setItem('theme', 'dark');
        }
    };
});




// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
reveal();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

console.log("GSAP version:", gsap.version);
console.log("ScrollTrigger loaded:", typeof ScrollTrigger !== 'undefined');


// Hero Animation
gsap.from('.hero-text h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from('.hero-text p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8
});

gsap.from('.hero-cta', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.1
});

// Section Headers Animation
gsap.utils.toArray('.section-header reveal').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });
});

// Feature Cards Animation
gsap.utils.toArray('.feature-card reveal').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
    });
});


// Service Items Animation
gsap.utils.toArray('.service-item reveal').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 75%'
        },
        opacity: 0,
        x: -50,
        duration: 1
    });
});

// Portfolio Items Animation
gsap.utils.toArray('.portfolio-item reveal').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Validation
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let valid = true;
        const inputs = this.querySelectorAll('.form-control');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.boxShadow = 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light), 0 0 0 2px var(--primary)';
            } else {
                input.style.boxShadow = 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light)';
            }
        });
        
        if (valid) {
            // Form is valid, you would typically send data to server here
            alert('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
            this.reset();
        } else {
            alert('Mohon isi semua field yang diperlukan.');
        }
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const heroImg = document.querySelector('.hero-img-wrapper');
    const scrolled = window.pageYOffset;
    
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});