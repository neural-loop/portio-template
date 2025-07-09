window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("contact-form-button");
  const status = document.getElementById("contact-form-status");
  const calContainer = document.getElementById('calendar-container');

  if (!form || !button || !status || !calContainer) {
    return;
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "Thanks! Your message has been submitted.";
        status.classList.add('text-success');
        form.reset();
        button.style.display = "none";
      } else {
        const responseData = await response.json();
        if (Object.hasOwn(responseData, 'errors')) {
          status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form.";
        }
        status.classList.add('text-danger');
      }
    } catch (error) {
      status.innerHTML = "Oops! There was a network error.";
      status.classList.add('text-danger');
    }
  }

  form.addEventListener("submit", handleSubmit);
});
