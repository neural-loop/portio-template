document.addEventListener('DOMContentLoaded', function () {
  // Change navigation color on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 200) {
        navbar.classList.add('nav__color__change');
      } else {
        navbar.classList.remove('nav__color__change');
      }
    });
  }

  // The custom smooth-scrolling JS has been removed to prevent conflicts with Bootstrap tabs.
  // It is replaced by the `scroll-behavior: smooth;` rule in the main SCSS file.

  // Collapse mobile navbar after a link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Check if the navbar is actually collapsible and currently shown
        if (navbarCollapse.classList.contains('show')) {
           new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  }

  // Waypoints and Testimonial Slider will be initialized via main.js after we install them via npm.
  // We'll leave the logic out of this file for now to keep it clean.
});
