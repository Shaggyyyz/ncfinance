document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. PAGE TRANSITION LOGIC (Handle this first)
    const transitionLayer = document.getElementById('page-transition');
    if (transitionLayer) {
        // Force visible on load, then slide UP and away
        transitionLayer.style.transform = 'translateY(0)';
        setTimeout(() => {
            transitionLayer.classList.add('exit');
        }, 100);
    }

    // 3. INTERNAL LINK INTERCEPTION
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Check if link is internal and not just a placeholder/anchor
            if (href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:') && link.target !== '_blank') {
                if (transitionLayer) {
                    e.preventDefault();
                    // Slide curtain back IN from the bottom
                    transitionLayer.classList.remove('exit');
                    transitionLayer.style.transform = 'translateY(100%)';
                    
                    void transitionLayer.offsetWidth; // Force reflow
                    
                    transitionLayer.style.transform = 'translateY(0)';

                    setTimeout(() => {
                        window.location.href = href;
                    }, 700);
                }
            }
        });
    });

    // 4. HERO SLIDESHOW
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 8000);
    }

    // 5. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        });
    }

    // 6. MOBILE MENU TOGGLE
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }
    }

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    // Close menu when a link is clicked (useful for page transitions)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // 7. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-hidden');
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => {
            if (!el.classList.contains('active')) el.classList.add('reveal-hidden');
            revealObserver.observe(el);
        });
    }

    // 8. Final Class for Hero Text
    document.body.classList.add('loaded');
});
