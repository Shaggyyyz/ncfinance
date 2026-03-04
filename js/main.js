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

// =====================================================
// Lead Popup: Once-per-user logic + Blur Overlay
// =====================================================

/**
 * Call this after every Calculate click.
 * Shows the lead popup only the FIRST time across all calculators.
 * After the user submits their details, localStorage is set and
 * they will never see the popup again on any calculator on this domain.
 */
function openCalcLeadModal() {
    const POPUP_KEY = 'nc_lead_popup_shown';
    const modal = document.getElementById('calc-lead-modal');
    if (!modal) return;

    // Already submitted details — skip the popup entirely
    if (localStorage.getItem(POPUP_KEY) === '1') return;

    // Show overlay + popup
    let overlay = document.getElementById('calc-lead-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'calc-lead-overlay';
        overlay.className = 'calc-lead-overlay';
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'block';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCalcLeadModal() {
    const modal = document.getElementById('calc-lead-modal');
    const overlay = document.getElementById('calc-lead-overlay');
    if (modal) modal.classList.add('hidden');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
}

// Mark popup as shown (called by each calculator's submit handler after success)
function markLeadPopupShown() {
    localStorage.setItem('nc_lead_popup_shown', '1');
}
