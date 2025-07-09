// Import Bootstrap's JS
import 'bootstrap';

// Import our custom scripts
import './script.js';
import './form-handler.js';
import './contact-calendar-toggle.js';
import { initializeSkillCounters } from './animations.js';
import { initializeTestimonialSlider } from './testimonial-slider.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeSkillCounters();
    initializeTestimonialSlider();
    console.log("Modern JS bundle loaded. All components initialized.");
});