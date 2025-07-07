// assets/js/lib/contact-calendar/viewToggle.js
import {
  showFormBtn,
  showCalendarBtn,
  formContainer,
  calendarContainer,
  validateElements
} from './domElements.js';
import { ensureCalendarReadyAndEmbed, clearCalError, isCalInitialized } from './calService.js';

let elementsValid = false;

export function initializeViews() {
  elementsValid = validateElements();
  if (!elementsValid) {
    console.warn("ViewToggle: Cannot initialize views due to missing critical DOM elements.");
    return;
  }
  showFormView();
}

export function showFormView() {
  if (!elementsValid) return;

  formContainer.classList.remove('d-none');
  calendarContainer.classList.add('d-none');
  showFormBtn.classList.add('btn-primary');
  showFormBtn.classList.remove('btn-outline-primary');
  showCalendarBtn.classList.add('btn-outline-primary');
  showCalendarBtn.classList.remove('btn-primary');
  clearCalError();
}

export async function showCalendarView() {
  if (!elementsValid) return;

  formContainer.classList.add('d-none');
  calendarContainer.classList.remove('d-none');
  showCalendarBtn.classList.add('btn-primary');
  showCalendarBtn.classList.remove('btn-outline-primary');
  showFormBtn.classList.add('btn-outline-primary');
  showFormBtn.classList.remove('btn-primary');
  clearCalError();

  if (!isCalInitialized()) {
    await ensureCalendarReadyAndEmbed();
  }
}