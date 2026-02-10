// Utilitários
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Animações
function initAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    } else {
        console.warn('AOS library not loaded');
    }
}

// Navegação
function initNavigation() {
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

// WhatsApp Button
function initWhatsAppButton() {
    const btn = document.getElementById('whatsapp-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else {
            btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            btn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    const icon = btn?.querySelector('svg path');
    let isOpen = false;

    if (!btn || !menu) return;

    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Previne scroll
            // Muda ícone para X
            if(icon) icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = ''; // Restaura scroll
            // Restaura ícone hambúrguer
            if(icon) icon.setAttribute('d', 'M4 8h16M4 16h16');
        }
    }

    btn.addEventListener('click', toggleMenu);

    // Fechar ao clicar em link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initNavigation();
    initWhatsAppButton();
    initMobileMenu();
});
