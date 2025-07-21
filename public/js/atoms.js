/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */
import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password-input");
  const passwordToggleBtn = document.getElementById("password-toggle-btn");
  if (passwordInput && passwordToggleBtn) {
    passwordToggleBtn.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      passwordToggleBtn.innerHTML = isPassword
        ? '<i data-lucide="eye-off" class="w-5 h-5 text-gray-500"></i>'
        : '<i data-lucide="eye" class="w-5 h-5 text-gray-500"></i>';
      createIcons({ icons });
    });
  }

  // --- Inisialisasi Flatpickr ---
  if (document.getElementById("date-picker")) {
    flatpickr("#date-picker", {
      altInput: true,
      altFormat: "j F Y",
      dateFormat: "Y-m-d",
      disableMobile: true,
    });
  }

  if (document.getElementById("date-range-picker")) {
    flatpickr("#date-range-picker", {
      mode: "range",
      altInput: true,
      altFormat: "j F Y",
      dateFormat: "Y-m-d",
      disableMobile: true,
    });
  }
});
