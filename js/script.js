// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    
      // Using CSS smooth scrolling - just refresh AOS animations
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            console.log(this.getAttribute('href'));
            console.log(targetId);
            const element = document.getElementById(targetId);
            if (!element) return;
            const yOffset = 0; // adjust if you want some offset from center
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset - (window.innerHeight / 2) + (element.offsetHeight / 2);
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });
});
