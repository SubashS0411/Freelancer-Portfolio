document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initCursorFollower();
    initPortfolioFilter();
    initTypewriter();
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const modal = document.getElementById('success-modal');
    const closeBtn = document.getElementById('close-modal');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            form.reset();
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        // Reset errors
        document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));

        if (!name.value.trim()) {
            document.getElementById('name-error').classList.remove('hidden');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('email-error').classList.remove('hidden');
            isValid = false;
        }

        if (!message.value.trim()) {
            document.getElementById('message-error').classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            // Simulate sending
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                if (modal) modal.classList.remove('hidden');
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1000);
        }
    });
}


function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const text = "that matter.";
    let i = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const current = el.innerText;

        if (isDeleting) {
            el.innerText = text.substring(0, i - 1);
            i--;
            delay = 50;
        } else {
            el.innerText = text.substring(0, i + 1);
            i++;
            delay = 150;
        }

        if (!isDeleting && i === text.length) {
            isDeleting = true;
            delay = 2000; // Pause at end
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            delay = 1000; // Pause before restarting
        }

        setTimeout(type, delay);
    }

    // Start with empty or full? Code assumes empty start logic mostly. 
    // But HTML has "that matter." in it. Let's clear it or handle it.
    // To avoid FOUC, let's leave it and just start deleting after a pause, or clear it.
    // I'll start by clearing it.
    el.innerText = "";
    setTimeout(type, 1000);
}

function initMobileMenu() {
    const menuBtn = document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('open');
            // Toggle hidden class is no longer needed if we want it strictly visible for animation?
            // Actually, we usually want display:none when closed to avoid focus overlap. 
            // But for slide animation, it needs to be display:flex/block but offscreen.
            // Let's remove the 'hidden' class from the HTML start.
        });
    }
}

function initCursorFollower() {
    const cursor = document.querySelector('.cursor-follower');
    const hoverTargets = document.querySelectorAll('.hover-reveal');

    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        // Simple follow
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            const imgUrl = target.getAttribute('data-img');
            if (imgUrl) {
                cursor.style.backgroundImage = `url(${imgUrl})`;
                cursor.style.width = '300px';
                cursor.style.height = '200px';
                cursor.style.backgroundSize = 'cover';
                cursor.classList.add('active-cursor');
                cursor.style.borderRadius = '8px';
            }
        });

        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('active-cursor');
            cursor.style.width = '0';
            cursor.style.height = '0';
        });
    });
}

function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active-filter', 'text-accent', 'font-bold'));
            btn.classList.add('active-filter', 'text-accent', 'font-bold');

            const filter = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Optional: Fade in animation
                    item.style.opacity = '0';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}
