// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.publication-item, .timeline-item, .award-item, .news-item').forEach(el => {
    observer.observe(el);
});

// Publication overview figures: acronym card for missing images + click-to-enlarge lightbox
(function initPublicationFigures() {
    const figures = document.querySelectorAll('.pub-figure');
    if (!figures.length) return;

    // If images/overview_<name>.png is not uploaded yet, show the acronym card instead
    figures.forEach(fig => {
        const img = fig.querySelector('img');
        if (!img) return;
        const markMissing = () => {
            fig.classList.add('is-missing');
            fig.removeAttribute('href');
            fig.removeAttribute('aria-label');
            fig.setAttribute('aria-hidden', 'true');
        };
        if (img.complete && img.naturalWidth === 0) {
            markMissing();
        } else {
            img.addEventListener('error', markMissing, { once: true });
        }
    });

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Paper overview figure');
    lightbox.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Close"><i class="fas fa-times"></i></button>
        <figure class="lightbox-figure">
            <img class="lightbox-img" alt="">
            <figcaption class="lightbox-caption"></figcaption>
        </figure>`;
    document.body.appendChild(lightbox);

    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbCaption = lightbox.querySelector('.lightbox-caption');
    const lbClose = lightbox.querySelector('.lightbox-close');
    let lastTrigger = null;

    function openLightbox(fig) {
        const src = fig.getAttribute('href');
        const thumb = fig.querySelector('img');
        const item = fig.closest('.publication-item');
        const title = item && item.querySelector('h3') ? item.querySelector('h3').textContent.trim() : '';
        const venue = fig.dataset.venue || '';

        lbImg.src = src;
        lbImg.alt = thumb ? thumb.alt : '';
        lbCaption.textContent = venue ? `${title} (${venue})` : title;
        const full = document.createElement('a');
        full.href = src;
        full.target = '_blank';
        full.rel = 'noopener';
        full.textContent = 'Open full size';
        lbCaption.append(' · ', full);

        lastTrigger = fig;
        lightbox.classList.add('open');
        document.body.classList.add('lightbox-lock');
        lbClose.focus();
    }

    function closeLightbox() {
        if (!lightbox.classList.contains('open')) return;
        lightbox.classList.remove('open');
        document.body.classList.remove('lightbox-lock');
        if (lastTrigger) lastTrigger.focus();
    }

    figures.forEach(fig => {
        fig.addEventListener('click', e => {
            e.preventDefault();
            if (fig.classList.contains('is-missing') || !fig.getAttribute('href')) return;
            openLightbox(fig);
        });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-figure')) closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'Tab') {
            // Keep keyboard focus inside the dialog
            const focusables = lightbox.querySelectorAll('button, a[href]');
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
})();

// Hide visitor placeholder if a real widget is loaded
function hideVisitorPlaceholderIfReady() {
    const widget = document.getElementById('visitorWidget');
    const placeholder = document.getElementById('visitorPlaceholder');
    if (!widget || !placeholder) return;

    // Prefer the MapMyVisitors globe script, but fall back to any injected
    // content (script/img/iframe/canvas/a) so the check stays widget-agnostic.
    const hasWidget = widget.querySelector('#mmvst_globe, script, img, iframe, canvas, a');
    if (hasWidget) {
        placeholder.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    hideVisitorPlaceholderIfReady();
    // Re-check after the globe script asynchronously injects its canvas/iframe.
    setTimeout(hideVisitorPlaceholderIfReady, 1500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 100);
    }
});

// Dynamic year in footer
const yearElement = document.querySelector('.footer-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Copy BibTeX functionality (for future implementation)
function copyBibTeX(paperTitle) {
    // This function can be implemented to copy BibTeX citations
    const bibtex = `@article{fang2025,
    title={${paperTitle}},
    author={Fang, Ruiyi and others},
    year={2025}
}`;
    
    navigator.clipboard.writeText(bibtex).then(() => {
        alert('BibTeX copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Print CV functionality
function printCV() {
    window.print();
}

// Back to top button (if needed)
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Console message
console.log('%c Welcome to Ruiyi Fang\'s Personal Website! ', 
    'background: #2563eb; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('Feel free to explore the code and reach out if you have any questions!');
