/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */
import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof createIcons !== "function") {
    console.error("Lucide icons library not loaded correctly.");
    return;
  }

  const initMobileSliderExpand = () => {
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    const groups = document.querySelectorAll(".group.mobile-slider-scroll");

    groups.forEach((group) => {
      const form = group.querySelector("form");

      if (!form) {
        return;
      }

      const input = form.querySelector("input");
      const button = form.querySelector("button");

      if (!input || !button) return;

      form.classList.add("mobile-expandable-form");

      const expandForm = () => {
        form.classList.add("is-expanded-mobile");
      };

      const collapseForm = () => {
        form.classList.remove("is-expanded-mobile");
      };

      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (form.classList.contains("is-expanded-mobile")) {
          collapseForm();
          input.blur();
        } else {
          expandForm();
          input.focus();
        }
      });

      input.addEventListener("focus", () => {
        expandForm();
      });

      input.addEventListener("blur", () => {
        setTimeout(() => {
          if (!form.contains(document.activeElement)) {
            collapseForm();
          }
        }, 100);
      });

      document.addEventListener("click", (event) => {
        if (
          !form.contains(event.target) &&
          form.classList.contains("is-expanded-mobile")
        ) {
          collapseForm();
          input.blur();
        }
      });
    });
  };

  const initDropdowns = () => {
    const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");
    if (dropdownWrappers.length === 0) return;

    dropdownWrappers.forEach((wrapper) => {
      const toggleButton = wrapper.querySelector(".dropdown-toggle");
      if (toggleButton) {
        toggleButton.addEventListener("click", (event) => {
          event.stopPropagation();
          closeAllDropdowns(wrapper);
          wrapper.classList.toggle("is-open");

          if (wrapper.classList.contains("is-open")) {
            const firstMenu = wrapper.querySelector(
              ".dropdown-menu a:not(.cursor-not-allowed)"
            );
            if (firstMenu) firstMenu.focus();
          }
        });
      }
    });

    window.addEventListener("click", (event) => {
      if (
        !event.target.closest(".dropdown-wrapper") &&
        !event.target.closest(".mobile-slider-scroll")
      ) {
        closeAllDropdowns();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllDropdowns();
    });
  };

  const closeAllDropdowns = (exceptWrapper = null) => {
    document
      .querySelectorAll(".dropdown-wrapper.is-open")
      .forEach((openWrapper) => {
        if (openWrapper !== exceptWrapper) {
          openWrapper.classList.remove("is-open");
        }
      });
  };

  const initClickAnimations = () => {
    const animatedButtons = document.querySelectorAll(
      ".clickable-animated-btn"
    );

    animatedButtons.forEach((button) => {
      button.removeEventListener("click", handleAnimationClick);
      button.addEventListener("click", handleAnimationClick);
    });
  };

  function handleAnimationClick(event) {
    const button = event.currentTarget;
    const animationName = button.dataset.animation;

    if (!animationName || button.classList.contains("is-animating")) {
      return;
    }

    const animationClasses = [
      "is-animating",
      "animate__animated",
      `animate__${animationName}`,
    ];
    button.classList.add(...animationClasses);

    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove(...animationClasses);
      },
      { once: true }
    );
  }

  initDropdowns();
  initClickAnimations();
  initMobileSliderExpand();

  if (window.lucide && typeof createIcons === "function") {
    createIcons({ icons });
  } else {
    console.warn(
      "Lucide or createIcons function is not available on window object. Icons might not render."
    );
  }
});