// assets/js/contact-calendar-toggle.js
import { showFormBtn, showCalendarBtn } from './lib/contact-calendar/domElements.js';
import { initializeViews, showFormView, showCalendarView } from './lib/contact-calendar/viewToggle.js';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  initializeViews();

  if (showFormBtn) {
    showFormBtn.addEventListener('click', showFormView);
  }

  if (showCalendarBtn) {
    showCalendarBtn.addEventListener('click', showCalendarView);
  }
});