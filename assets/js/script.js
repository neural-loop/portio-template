import { Offcanvas } from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
  // --- Navbar color change on scroll ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 50) {
        navbar.classList.add('nav__color__change');
      } else {
        navbar.classList.remove('nav__color__change');
      }
    });
  }

  // --- Custom Smooth Scroll for ALL on-page anchors ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const offcanvasNavbar = document.getElementById('offcanvasNavbar');

  // Get an instance of the offcanvas component, if it exists
  const bsOffcanvas = offcanvasNavbar ? Offcanvas.getOrCreateInstance(offcanvasNavbar) : null;

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      let hash = this.getAttribute('href');

      // Don't intercept clicks on empty hashes or elements that just toggle other components
      if (hash === '#' || this.getAttribute('data-bs-toggle')) return;

      const targetElement = document.querySelector(hash);

      if (targetElement) {
        e.preventDefault(); // Take complete control of the click

        // If the offcanvas is open, hide it first.
        if (bsOffcanvas && offcanvasNavbar.classList.contains('show')) {
          bsOffcanvas.hide();
        }

        // --- Calculate scroll position with navbar offset ---
        const navbarEl = document.querySelector('.navbar.fixed-top');
        const navbarHeight = navbarEl ? navbarEl.offsetHeight : 0;
        // Add a 20px buffer so the section title isn't jammed against the navbar
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        // Scroll to the target. We use a small timeout to allow the offcanvas
        // closing animation to start, preventing a visual jump.
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL hash without causing a page jump
          history.pushState(null, null, hash);
        }, 150); // A 150ms delay is usually sufficient
      }
    });
  });
});