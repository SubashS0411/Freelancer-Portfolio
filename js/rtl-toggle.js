document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    const body = document.body;
    const html = document.documentElement;
    const existingOverlay = document.querySelector('.wipe-overlay');
    const wipeOverlay = existingOverlay || document.createElement('div');

    if (!existingOverlay) {
        wipeOverlay.className = 'wipe-overlay';
        body.appendChild(wipeOverlay);
    }

    const savedDirection = localStorage.getItem('direction') === 'rtl' ? 'rtl' : 'ltr';
    applyDirection(savedDirection, false);

    toggleBtns.forEach(btn => {
        btn.setAttribute('aria-pressed', savedDirection === 'rtl');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = html.getAttribute('dir') === 'rtl';
            triggerWipe(isRTL ? 'ltr' : 'rtl');
        });
    });

    function triggerWipe(targetDir) {
        body.classList.add('wiping-active');

        setTimeout(() => {
            applyDirection(targetDir, true);
        }, 250);

        setTimeout(() => {
            body.classList.remove('wiping-active');
        }, 600);
    }

    function applyDirection(dir, persist) {
        const isRTL = dir === 'rtl';
        html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        html.classList.toggle('rtl', isRTL);
        toggleBtns.forEach(btn => btn.setAttribute('aria-pressed', isRTL));
        if (persist) localStorage.setItem('direction', dir);
    }
});
