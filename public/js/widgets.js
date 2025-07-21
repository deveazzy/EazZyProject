/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";

document.addEventListener("DOMContentLoaded", () => {
  const initPerformanceChart = () => {
    const performanceWidgets = document.querySelectorAll(".performance-widget");
    if (performanceWidgets.length === 0) return;

    performanceWidgets.forEach((widgetContainer, index) => {
      const progressBar = widgetContainer.querySelector(
        ".performance-progress-bar"
      );
      const progressText = widgetContainer.querySelector(".performance-text");

      if (!progressBar || !progressText) {
        console.error(
          `Elemen untuk chart performa #${
            index + 1
          } tidak lengkap. Pastikan .performance-widget, .performance-progress-bar, dan .performance-text ada di dalam HTML.`
        );
        return;
      }
      const performanceScore = parseInt(widgetContainer.dataset.score) || 92;
      const radius = progressBar.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = circumference;

      const animateChart = () => {
        if (widgetContainer.classList.contains("is-animated")) return;
        widgetContainer.classList.add("is-animated");

        const offset = circumference - (performanceScore / 100) * circumference;
        progressBar.style.strokeDashoffset = offset;

        let current = 0;
        const stepTime =
          performanceScore > 0 ? Math.max(1, 1500 / performanceScore) : 0;

        if (stepTime === 0) {
          progressText.textContent = `${performanceScore}%`;
          return;
        }

        const timer = setInterval(() => {
          current++;
          progressText.textContent = `${current}%`;
          if (current >= performanceScore) {
            clearInterval(timer);
            progressText.textContent = `${performanceScore}%`;
          }
        }, stepTime);
      };

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateChart();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(widgetContainer);
    });
  };

  const initMusicPlayer = () => {
    const musicPlayer = document.querySelector(".music-player");
    if (!musicPlayer) return;

    const playPauseBtn = musicPlayer.querySelector(".play-pause-btn");
    const playIcon = '<i data-lucide="play-circle" class="w-10 h-10"></i>';
    const pauseIcon = '<i data-lucide="pause-circle" class="w-10 h-10"></i>';

    playPauseBtn.addEventListener("click", () => {
      const isPlaying = musicPlayer.classList.toggle("playing");
      playPauseBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
      createIcons({ icons });
    });
  };

  const initFormWidgets = () => {
    const formWidgets = document.querySelectorAll(".form-widget");
    formWidgets.forEach((widget) => {
      const form = widget.querySelector("form");
      if (!form) return;

      const button = form.querySelector('button[type="submit"]');
      const btnText = button.querySelector(".btn-text");

      if (!btnText) {
        console.error(
          "Elemen .btn-text tidak ditemukan di dalam tombol submit."
        );
        return;
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (button.classList.contains("is-sending")) return;

        const originalText = btnText.textContent;
        btnText.textContent = "Mengirim...";
        button.classList.add("is-sending");

        setTimeout(() => {
          btnText.textContent = "Terkirim!";
          setTimeout(() => {
            btnText.textContent = originalText;
            button.classList.remove("is-sending");
            form.reset();
          }, 2000);
        }, 1500);
      });
    });
  };

  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll(".animated-on-scroll");
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  };

  initPerformanceChart();
  initMusicPlayer();
  initFormWidgets();
  initScrollAnimations();
});