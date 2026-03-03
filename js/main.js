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
// ==========================================
// 7. GLOBAL LEAD POPUP (35-Second Delay)
// ==========================================
function initializeLeadPopup() {
    // Check if the popup has already been shown in this browsing session
    // (This stops it from annoying the user every time they click a new page)
    if (sessionStorage.getItem('leadPopupShown')) return;

    // The HTML structure for the popup (styled with your existing Tailwind setup)
    const popupHTML = `
        <div id="lead-popup-overlay" class="fixed inset-0 z-[100] bg-brand-900/40 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500 flex items-center justify-center px-4">
            <div id="lead-popup-modal" class="bg-white rounded-sm shadow-2xl w-full max-w-md relative transform scale-95 transition-all duration-500 max-h-[90vh] overflow-y-auto">
                
                <button id="close-popup-btn" class="absolute top-4 right-4 text-gray-400 hover:text-accent-500 transition-colors z-10" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <div class="p-8">
                    <div class="text-center mb-6">
                        <h2 class="font-serif text-3xl text-brand-900 mb-2">Let's Discuss Your Goals</h2>
                        <p class="text-gray-600 text-sm">Leave your details and our Melbourne mortgage experts will be in touch shortly.</p>
                    </div>
                    
                    <form id="popup-contact-form" class="space-y-4">
                        <div>
                            <label class="block text-[10px] uppercase font-bold text-gray-700 mb-1 tracking-wider">Full Name *</label>
                            <input type="text" name="name" required class="w-full border border-gray-300 py-2 px-3 rounded-sm focus:outline-none focus:border-brand-900 transition bg-white text-sm">
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] uppercase font-bold text-gray-700 mb-1 tracking-wider">Email *</label>
                                <input type="email" name="email" required class="w-full border border-gray-300 py-2 px-3 rounded-sm focus:outline-none focus:border-brand-900 transition bg-white text-sm">
                            </div>
                            <div>
                                <label class="block text-[10px] uppercase font-bold text-gray-700 mb-1 tracking-wider">Phone *</label>
                                <input type="tel" name="phone" required class="w-full border border-gray-300 py-2 px-3 rounded-sm focus:outline-none focus:border-brand-900 transition bg-white text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] uppercase font-bold text-gray-700 mb-1 tracking-wider">Service</label>
                            <select name="interest" required class="w-full border border-gray-300 py-2 px-3 rounded-sm focus:outline-none focus:border-brand-900 transition bg-white text-sm">
                                <option value="" disabled selected>Select Service</option>
                                <option value="residential">Residential Lending</option>
                                <option value="investment">Investment Property</option>
                                <option value="refinance">Refinancing</option>
                                <option value="commercial">Commercial Finance</option>
                                <option value="smsf">SMSF Lending</option>
                                <option value="asset">Asset Finance</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] uppercase font-bold text-gray-700 mb-1 tracking-wider">Message</label>
                            <textarea name="message" rows="2" placeholder="Optional..." class="w-full border border-gray-300 py-2 px-3 rounded-sm focus:outline-none focus:border-brand-900 transition bg-white text-sm"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brand-900 text-white py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-accent-500 transition-colors duration-300 shadow-lg mt-2">Submit Details</button>
                        <div id="popup-form-message" class="hidden mt-3 text-sm"></div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Inject the popup into the body of whatever page the user is on
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const overlay = document.getElementById('lead-popup-overlay');
    const modal = document.getElementById('lead-popup-modal');
    const closeBtn = document.getElementById('close-popup-btn');
    const form = document.getElementById('popup-contact-form');

    // UI Functions
    function showPopup() {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100', 'pointer-events-auto');
        modal.classList.remove('scale-95');
        modal.classList.add('scale-100');
        // Mark as shown in session storage so it doesn't pop up again
        sessionStorage.setItem('leadPopupShown', 'true');
    }

    function hidePopup() {
        overlay.classList.remove('opacity-100', 'pointer-events-auto');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('scale-100');
        modal.classList.add('scale-95');
    }

    // Event Listeners for closing the popup
    closeBtn.addEventListener('click', hidePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) hidePopup(); // Close if clicking the blurred background
    });

    // Trigger the popup after 35 seconds (35000 milliseconds)
    setTimeout(showPopup, 3500);

    // Form Submission Logic (Linked directly to your Google Sheet)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDPIgyaybs2I1dRd7LVoj720JOuTaR-nBD0O5qVNKajZXsFLko8838eXf_9E8ItkA4lA/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const messageDiv = document.getElementById('popup-form-message');
        
        const formData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            interest: form.interest.value,
            message: form.message.value || "Lead generated from 35-Second Website Popup"
        };
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING...';
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            messageDiv.innerHTML = `
                <div class="bg-green-500/20 border border-green-500/40 rounded-sm p-3">
                    <p class="font-medium text-green-800">✓ Details received successfully!</p>
                    <p class="text-xs mt-1 text-green-700 opacity-80">We'll contact you shortly.</p>
                </div>
            `;
            messageDiv.classList.remove('hidden');
            form.reset();
            
            // Log conversion event for Google Analytics
            if(typeof gtag === 'function') { 
                gtag('event', 'generate_lead', { 'event_category': 'popup form', 'event_label': formData.interest }); 
            }

            // Automatically close the popup 3 seconds after a successful submission
            setTimeout(hidePopup, 3000);
            
        } catch (error) {
            messageDiv.innerHTML = `
                <div class="bg-red-500/20 border border-red-500/40 rounded-sm p-3">
                    <p class="font-medium text-red-800">✗ Oops! Something went wrong.</p>
                </div>
            `;
            messageDiv.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT DETAILS';
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    });
}

// Initialize the logic once window has loaded
if (document.readyState === 'complete') {
    initializeLeadPopup();
} else {
    window.addEventListener('load', initializeLeadPopup);
}
