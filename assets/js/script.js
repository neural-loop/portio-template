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

  // Prevent page jump on resume tab change
  let scrollPosition = 0;
  const resumeTabs = document.querySelectorAll('.resume a[data-toggle="tab"]');
  resumeTabs.forEach(tab => {
    tab.addEventListener('show.bs.tab', () => {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    });
    tab.addEventListener('shown.bs.tab', () => {
      window.scrollTo(0, scrollPosition);
    });
  });

  // Waypoints and Testimonial Slider will be initialized via main.js after we install them via npm.
  // We'll leave the logic out of this file for now to keep it clean.
});
