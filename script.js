// Smooth scrolling for navigation links
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

// Interactive glow effect on cards
const teamSection = document.getElementById("team");
if (teamSection) {
    teamSection.onmousemove = e => {
        for (const card of document.getElementsByClassName("team-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
}

// Fade-in animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in classes
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-title, .team-card, .vision-block, .contact-btn');
    sections.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
