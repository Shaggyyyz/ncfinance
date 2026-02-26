window.onload = function() {
    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 2. Add loaded class for Hero text animation
    document.body.classList.add('loaded'); 
    
    // 3. Hero Slideshow Logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-bg-slide');
    
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 8000); 
    }
    
    // 4. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        });
    }

    // 5. Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    
    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden'); // Stops background scrolling when menu is open
        }
    }
    
    if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // 6. Scroll Reveal Animations
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
            if(!el.classList.contains('active')) el.classList.add('reveal-hidden');
            revealObserver.observe(el);
        });
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const transitionLayer = document.getElementById('page-transition');

    // 1. On page load: Start with curtain visible, then slide it UP and away
    if (transitionLayer) {
        // Set it to full screen immediately
        transitionLayer.style.transform = 'translateY(0)';
        
        // Small timeout to ensure the browser has rendered the page
        setTimeout(() => {
            transitionLayer.classList.add('exit');
        }, 100);
    }

    // 2. Intercept clicks to slide curtain back IN before leaving
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');

            // Only transition for internal links that aren't anchors or phone numbers
            if (href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:') && link.target !== '_blank') {
                e.preventDefault(); // Stop immediate navigation
                
                // Reset the exit class and slide the curtain to the middle
                transitionLayer.classList.remove('exit');
                transitionLayer.style.transform = 'translateY(100%)';
                
                // Force a tiny reflow so the browser sees the reset
                void transitionLayer.offsetWidth;
                
                // Slide back to center
                transitionLayer.style.transform = 'translateY(0)';

                // Navigate to the new page after the animation finishes (700ms)
                setTimeout(() => {
                    window.location.href = href;
                }, 700);
            }
        });
    });
});
