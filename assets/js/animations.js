// assets/js/animations.js
export function initializeSkillCounters() {
  const skillProgressElements = document.querySelectorAll('.skill__progress');
  if (skillProgressElements.length === 0) return;

  const animateCounter = (element) => {
    const finalValue = parseInt(element.textContent, 10);
    element.textContent = '0'; // Start from 0

    let start = null;
    const duration = 2500; // Animation duration in ms

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      element.textContent = Math.floor(progress * finalValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const spanElements = entry.target.querySelectorAll('.progress-value span');
        spanElements.forEach(animateCounter);
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.8 }); // Trigger when 80% of the element is visible

  skillProgressElements.forEach(el => {
    observer.observe(el);
  });
}