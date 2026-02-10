export function initNavigation() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('glass-nav');
            nav.classList.remove('py-6');
            nav.classList.add('py-4');
        } else {
            nav.classList.remove('glass-nav');
            nav.classList.remove('py-4');
            nav.classList.add('py-6');
        }
    });
}
