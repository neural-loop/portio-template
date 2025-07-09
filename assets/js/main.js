// Import Bootstrap's JS
import 'bootstrap';

// Import Slick Carousel if you choose to keep it (see next section)
// import 'slick-carousel';

// Import Waypoints if needed for animations (see next section)
// import 'waypoints/lib/jquery.waypoints.js'; // Note: some plugins might still need jQuery

// Import our custom scripts
import './script.js';
import './form-handler.js';
import './contact-calendar-toggle.js';

// Re-initialize sliders or other plugins after webpack bundling
document.addEventListener('DOMContentLoaded', () => {
    // Testimonial slider initialization (if using Slick)
    // $('.testimonial__slider').slick({ ... });
    console.log("Modern JS bundle loaded.");
});