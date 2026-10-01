const form = document.getElementById("registrationForm");

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthProgress = document.getElementById("strengthProgress");
const strengthText = document.getElementById("strengthText");

const successMessage = document.getElementById("successMessage");
const newRegistration = document.getElementById("newRegistration");

// SHOW / HIDE PASSWORD

togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    password.type = "password";
    togglePassword.textContent = "👁";
  }
});

// PASSWORD STRENGTH

password.addEventListener("input", function () {
  const value = password.value;

  let strength = 0;

  if (value.length >= 6) {
    strength++;
  }

  if (/[A-Z]/.test(value)) {
    strength++;
  }

  if (/[0-9]/.test(value)) {
    strength++;
  }

  if (/[^A-Za-z0-9]/.test(value)) {
    strength++;
  }

  if (value.length === 0) {
    strengthProgress.style.width = "0%";
    strengthText.textContent = "Password strength";
  } else if (strength <= 1) {
    strengthProgress.style.width = "25%";
    strengthText.textContent = "Weak password";
  } else if (strength === 2) {
    strengthProgress.style.width = "50%";
    strengthText.textContent = "Medium password";
  } else if (strength === 3) {
    strengthProgress.style.width = "75%";
    strengthText.textContent = "Strong password";
  } else {
    strengthProgress.style.width = "100%";
    strengthText.textContent = "Very strong password";
  }
});

// PHONE NUMBER

const phone = document.getElementById("phone");

phone.addEventListener("input", function () {
  phone.value = phone.value.replace(/\D/g, "");
});

// FORM SUBMISSION

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  // NAME VALIDATION

  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  if (name.value.trim().length < 3) {
    nameError.textContent = "Please enter your full name.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // EMAIL VALIDATION

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";

    valid = false;
  } else {
    emailError.textContent = "";
  }

  // PHONE VALIDATION

  const phoneError = document.getElementById("phoneError");

  if (phone.value.length !== 10) {
    phoneError.textContent = "Phone number must contain 10 digits.";

    valid = false;
  } else {
    phoneError.textContent = "";
  }

  // PASSWORD VALIDATION

  if (password.value.length < 6) {
    alert("Password must contain at least 6 characters.");
    valid = false;
  }

  // SHOW SUCCESS

  if (valid) {
    form.style.display = "none";

    document.querySelector(".form-header").style.display = "none";

    successMessage.style.display = "block";
  }
});

// NEW REGISTRATION

newRegistration.addEventListener("click", function () {
  form.reset();

  form.style.display = "block";

  document.querySelector(".form-header").style.display = "block";

  successMessage.style.display = "none";

  strengthProgress.style.width = "0%";

  strengthText.textContent = "Password strength";
});
