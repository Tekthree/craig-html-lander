// Craig Debolt Realty - Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '15px 5%';
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.classList.add('scrolled');
        } else {
            header.style.padding = '20px 5%';
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Toggle hamburger animation
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Accordion for Q&A section
    const accordionItems = document.querySelectorAll('.qa-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const question = item.querySelector('.qa-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    // Only initialize if testimonials exist
    if (testimonials.length > 0) {
        // Set initial position
        updateSliderPosition();
        
        // Auto-scroll testimonials
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSliderPosition();
        }, 5000);
        
        function updateSliderPosition() {
            const testimonialWidth = testimonials[0].offsetWidth;
            testimonialSlider.scrollTo({
                left: currentIndex * testimonialWidth,
                behavior: 'smooth'
            });
        }
    }
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. Craig will contact you soon.`);
            contactForm.reset();
        });
    }
    
    // Newsletter Subscription
    const newsletterForm = document.querySelector('.footer-newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Property Card Hover Effect
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Solution Card Animation
    const solutionCards = document.querySelectorAll('.solution-card');
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.15,
    });
    
    solutionCards.forEach(card => {
        observer.observe(card);
    });
    
    // Services Animation
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        observer