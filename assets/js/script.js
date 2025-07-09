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

  // Smooth scrolling for anchor links with the .scroll class
  const scrollLinks = document.querySelectorAll('.scroll');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
        // Collapse mobile nav if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Collapse mobile navbar after a link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav > li > a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Mobile Navbar Toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
      navbarToggler.classList.toggle('collapsed');
    });
  }

  // Resume Tabs are now handled by Bootstrap's built-in JS.
  // The custom vanilla JS implementation has been removed.

  // Waypoints and Testimonial Slider will be initialized via main.js after we install them via npm.
  // We'll leave the logic out of this file for now to keep it clean.
});
