document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    const body = document.body;
    const html = document.documentElement;
    const wipeOverlay = document.createElement('div');
    
    wipeOverlay.className = 'wipe-overlay';
    body.appendChild(wipeOverlay);

    // Initial State Check
    if (localStorage.getItem('direction') === 'rtl') {
        setRTL(false);
    } else {
        setLTR(false);
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = html.getAttribute('dir') === 'rtl';
            triggerWipe(isRTL ? 'ltr' : 'rtl');
        });
    });

    function triggerWipe(targetDir) {
        body.classList.add('wiping-active');
        
        setTimeout(() => {
            if (targetDir === 'rtl') {
                setRTL(true);
            } else {
                setLTR(true);
            }
        }, 300); // Wait for half animation

        setTimeout(() => {
            body.classList.remove('wiping-active');
        }, 600); // Full duration
    }

    function setRTL(save) {
        html.setAttribute('dir', 'rtl');
        html.classList.add('rtl');
        // If we need specific DOM order swapping that flex-direction doesn't cover, do it here.
        // For now, relying on dir="rtl" + flexbox behavior.
        // Also handling mobile menu slide direction if needed (CSS classes).
        if (save) localStorage.setItem('direction', 'rtl');
        updateToggleText('LTR');
    }

    function setLTR(save) {
        html.setAttribute('dir', 'ltr');
        html.classList.remove('rtl');
        if (save) localStorage.setItem('direction', 'ltr');
        updateToggleText('RTL');
    }

    function updateToggleText(text) {
        toggleBtns.forEach(btn => btn.innerText = text);
    }
});
