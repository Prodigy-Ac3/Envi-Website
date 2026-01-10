document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Toggle
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenue = document.querySelector(".mobile-menu");
  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", function () {
      mobileMenue.classList.toggle("active");
    });
  }

  //Registration Form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const registerMessage = document.getElementById("register-message");

      registerMessage.innerHTML = `<p class ='success'> Thank you, ${username}! Your registration has been recieved. We'll get back to you soon.</p>`;
      registerForm.reset();
    });
  }

  //Login FOrm
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const usernameInput = document.getElementById("username");
      const username = usernameInput ? usernameInput.value : "User";

      const loginMessage = document.getElementById("login-message");

      // Simulation
      if (username.toLowerCase().includes("envi")) {
        loginMessage.innerHTML = `<p class='success'> welcome back, The Environment Is Our Legacy!</p>`;
      } else {
        loginMessage.innerHTML = `<p class='error'>Login Failed. Please check your credentials.</p>`;
      }
      loginForm.reset();
    });
  }
});
