import HeroSlider from './HeroSlider.js';
import PropertyCarousel from './PropertyCarousel.js';
import OffPlanSlider from './OffPlanSlider.js';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize components
    new HeroSlider('#hero');
    new PropertyCarousel('#properties');
    new OffPlanSlider('#offplan-slider');

    // Tab functionality for search form
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Tab functionality for properties section
    const propertyTabs = document.querySelectorAll('.properties-tabs button');
    propertyTabs.forEach(button => {
        button.addEventListener('click', () => {
            propertyTabs.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // WhatsApp button functionality
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            window.open('https://wa.me/971234567890', '_blank');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Property card favorite functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('property-favorite')) {
            e.target.style.background = e.target.style.background === 'rgb(255, 107, 53)' ? 'rgba(255,255,255,0.9)' : '#ff6b35';
            e.target.style.color = e.target.style.color === 'white' ? '#333' : 'white';
            e.target.innerHTML = e.target.innerHTML === '♡' ? '♥' : '♡';
        }
    });

    // Form submission handling
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Search functionality would be implemented here!');
        });
    }

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button, .offplan-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Contact form would open here!');
        });
    });
});