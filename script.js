document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contactNumber");
  const cityInput = document.getElementById("city");
  const messageInput = document.getElementById("message");
  const captchaCheckbox = document.getElementById("captcha");
  const formMessage = document.getElementById("formMessage");

  // Event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    clearMessages(); // Clear previous messages
    let isValid = validateForm(); // Validate the form

    if (isValid) {
      showSuccess("Form submitted successfully!");
      form.reset(); // Reset form fields
      setTimeout(() => {
        const successMessage = document.querySelector(".success-message");
        if (successMessage) successMessage.remove();
      }, 5000);
    }
  });

  // Form validation logic
  function validateForm() {
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
      showError(emailInput, "Enter a valid email address.");
      isValid = false;
    }

    // Validate Contact Number
    if (!contactInput.value.trim() || !/^\d{10}$/.test(contactInput.value)) {
      showError(contactInput, "Contact number must be a valid 10-digit number.");
      isValid = false;
    }

    // Validate City
    if (!cityInput.value.trim()) {
      showError(cityInput, "City is required.");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Message cannot be empty.");
      isValid = false;
    }

    // Validate CAPTCHA
    if (!captchaCheckbox.checked) {
      showError(captchaCheckbox, "Please verify you are not a robot.");
      isValid = false;
    }

    return isValid;
  }

  // Helper function to show error message
  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error-message text-red-500 text-sm mt-1";
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  // Helper function to show success message
  function showSuccess(message) {
    const success = document.createElement("div");
    success.className = "success-message text-green-500 text-lg mt-4";
    success.textContent = message;
    formMessage.appendChild(success);
  }

  // Helper function to clear previous messages
  function clearMessages() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll(".success-message").forEach((el) => el.remove());
  }
});
