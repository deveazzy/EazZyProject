/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

/**
 * Logika untuk NProgress.js
 * Skrip ini mengelola progress bar di bagian atas halaman untuk memberikan
 * umpan balik visual selama pemuatan halaman. Ini menggunakan NProgress.inc()
 * untuk mensimulasikan kemajuan pada koneksi yang lambat.
 */
import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";
import { showErrorModal } from "./nprogress-utils.js";
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Gagal memuat skrip ${src}`));
    document.head.append(script);
  });
}

loadScript("/assets/vendor/nprogress/nprogress.min.js")
  .then(() => {
    let nprogressInterval;
    NProgress.start();

    nprogressInterval = setInterval(() => NProgress.inc(), 800);

    window.onload = function () {
      clearInterval(nprogressInterval);
      NProgress.done();
    };
  })
  .catch((error) => {
    console.error(error);
    showErrorModal(
      "Masalah Koneksi",
      "Gagal memuat komponen halaman. Mohon periksa koneksi internet Anda."
    );
  });
  
document.addEventListener("DOMContentLoaded", () => {
  // Anda bisa menambahkan fungsi global lainnya di sini.
  createIcons({ icons });
});