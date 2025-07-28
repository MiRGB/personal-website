 function createAnimatedBackground() {
    const bg = document.getElementById('animatedBg');

    function createBinaryRain() {
        const rain = document.createElement('div');
        rain.className = 'binary-rain';
        rain.textContent = Math.random() > 0.5 ? '1' : '0';
        rain.style.left = Math.random() * 100 + '%';
        rain.style.animationDelay = Math.random() * 5 + 's';
        rain.style.animationDuration = (10 + Math.random() * 5) + 's';
        bg.appendChild(rain);

        setTimeout(() => {
            rain.remove();
        }, 20000);
    }

    for (let i = 0; i < 30; i++) {
        createBinaryRain();
    }

    setInterval(createBinaryRain, 300);
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.pageYOffset;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createAnimatedBackground();
    initSmoothScrolling();
    handleScrollAnimations();
    updateActiveNav();

    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        updateActiveNav();
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function typeWriter() {
    const text = "QA Automation Engineer";
    const element = document.querySelector('.hero h1');
    let i = 0;
    
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 300);
});