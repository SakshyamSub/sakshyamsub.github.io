function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1, // 10% visible
    rootMargin: "0px 0px -50px 0px" // trigger slightly before fully in view
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fade in only once
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Elements to animate
const scrollElements = document.querySelectorAll('.img, .bio, #para, #project, #Hobbies, #skill, #contact');

const elementInView = (el, offset = 0) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (el) => {
    el.classList.add('visible');
};

const hideScrollElement = (el) => {
    el.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        }
        // Optional: remove class when scrolled out
        // else {
        //   hideScrollElement(el);
        // }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); // trigger on page load

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
    
