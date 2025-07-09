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
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Collapse mobile navbar after a link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav > li > a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // Mobile Navbar Toggle is now handled entirely by data-bs-* attributes in HTML.
  // The custom JS implementation has been removed.

  // Resume Tabs are now handled by Bootstrap's built-in JS via data-bs-toggle.

  // Waypoints and Testimonial Slider will be initialized via main.js after we install them via npm.
  // We'll leave the logic out of this file for now to keep it clean.
});
