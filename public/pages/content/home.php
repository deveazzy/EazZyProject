<?php
/**
 * @[EazZy Project] Copyright (c) [2025] [EazZy Project] license
 * @https://opensource.org/licenses/MIT MIT License
 * @path public/pages/home.php
 * @author EazZy Project
 *
 * File ini berisi konten utama untuk halaman 'home' EazZy Project,
 * yang kini berfungsi sebagai showcase dan penjelasan EazZy Project UI.
 */
?>

<main class="flex-1 container mx-auto p-4 md:p-8 lg:p-10">
    <!-- Hero Section: Pengenalan EazZy Project UI -->
    <section id="hero" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 md:p-12 lg:p-16 rounded-xl shadow-2xl max-w-7xl mx-auto mb-6 md:mb-8 text-center">
        <div class="flex flex-col items-center justify-center mb-8">
            <div class="bg-white text-blue-600 p-5 rounded-full mb-6 shadow-lg animate__animated animate__zoomIn animate__delay-2s">
                <i data-lucide="monitor-dot" class="w-16 h-16 md:w-20 md:h-20"></i>
            </div>
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate__animated animate__fadeInDown animate__delay-0-5s">
                EazZy Project UI: Desain Intuitif, Pengembangan Cepat
            </h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
                Jelajahi koleksi aset antarmuka pengguna (UI) kami yang dirancang dengan presisi untuk mempercepat pengembangan aplikasi Anda. Fokus pada estetika, fungsionalitas, dan pengalaman pengguna yang tak tertandingi.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-1-5s">
                <a href="#ui-showcase" class="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Lihat Contoh UI
                </a>
                <a href="#benefits" class="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Pelajari Manfaatnya
                </a>
            </div>
        </div>
    </section>

    <!-- Section: Mengapa EazZy Project UI? (Manfaat Utama) -->
    <section id="benefits" class="py-12 md:py-20">
        <div class="container mx-auto px-6 md:px-10 py-8 bg-white rounded-xl shadow-xl max-w-7xl mb-6 md:mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Mengapa Memilih EazZy Project UI?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Benefit 1: Efisiensi Pengembangan -->
                <div class="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="bg-blue-200 text-blue-700 p-4 rounded-full mb-4">
                        <i data-lucide="zap" class="w-8 h-8"></i>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-800">Efisiensi Pengembangan</h4>
                    <p class="text-base leading-relaxed text-gray-600">
                        Dengan komponen UI yang siap pakai dan teruji, Anda dapat membangun fitur-fitur aplikasi lebih cepat, mengurangi waktu coding yang berulang.
                    </p>
                </div>
                <!-- Benefit 2: Konsistensi Visual -->
                <div class="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="bg-green-200 text-green-700 p-4 rounded-full mb-4">
                        <i data-lucide="palette" class="w-8 h-8"></i>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-800">Konsistensi Visual</h4>
                    <p class="text-base leading-relaxed text-gray-600">
                        Pastikan tampilan yang seragam dan profesional di seluruh aplikasi Anda dengan panduan desain yang jelas dan komponen yang terkoordinasi.
                    </p>
                </div>
                <!-- Benefit 3: Responsif Penuh -->
                <div class="flex flex-col items-center text-center p-6 bg-purple-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="bg-purple-200 text-purple-700 p-4 rounded-full mb-4">
                        <i data-lucide="smartphone" class="w-8 h-8"></i>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-800">Responsif Penuh</h4>
                    <p class="text-base leading-relaxed text-gray-600">
                        Desain kami dioptimalkan untuk berbagai ukuran layar, dari desktop hingga perangkat seluler, memastikan pengalaman yang mulus di mana saja.
                    </p>
                </div>
                <!-- Benefit 4: Pengalaman Pengguna Optimal -->
                <div class="flex flex-col items-center text-center p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="bg-yellow-200 text-yellow-700 p-4 rounded-full mb-4">
                        <i data-lucide="user-check" class="w-8 h-8"></i>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-800">Pengalaman Pengguna Optimal</h4>
                    <p class="text-base leading-relaxed text-gray-600">
                        Fokus pada kemudahan navigasi, interaksi intuitif, dan alur kerja yang logis untuk kepuasan pengguna maksimal.
                    </p>
                </div>
                <!-- Benefit 5: Modular & Fleksibel -->
                <div class="flex flex-col items-center text-center p-6 bg-red-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="bg-red-200 text-red-700 p-4 rounded-full mb-4">
                        <i data-lucide="puzzle" class="w-8 h-8"></i>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-800">Modular & Fleksibel</h4>
                    <p class="text-base leading-relaxed text-gray-600">
                        EazZy Project UI memanfaatkan aset-aset modular dan fleksibel, memungkinkan integrasi yang mudah dan penyesuaian yang cepat ke dalam berbagai proyek Anda.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Showcase UI (Galeri Contoh) -->
    <section id="ui-showcase" class="py-12 md:py-20">
        <div class="container mx-auto px-6 md:px-10 py-8 bg-white rounded-xl shadow-xl max-w-7xl mb-6 md:mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Jelajahi Komponen UI Kami
            </h2>
            <p class="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
                Berikut adalah beberapa contoh komponen UI dan tata letak yang dapat Anda temukan di EazZy Project UI.
                Klik pada gambar untuk melihat detail lebih lanjut atau demo interaktif.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- UI Example 1: Modals -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-blue-500 text-white">
                        <i data-lucide="maximize" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Modals</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Modal & Dialog</h4>
                        <p class="text-sm text-gray-600">Berbagai jenis modal untuk interaksi pengguna.</p>
                        <a href="modal-form" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
                <!-- UI Example 2: Form Elements -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-green-500 text-white">
                        <i data-lucide="form-input" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Forms</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Elemen Formulir Lengkap</h4>
                        <p class="text-sm text-gray-600">Input teks, checkbox, radio, dropdown, dan validasi.</p>
                        <a href="atoms" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
                <!-- UI Example 3: Navigation Menus -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-indigo-500 text-white">
                        <i data-lucide="menu" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Navigation</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Menu Navigasi Responsif</h4>
                        <p class="text-sm text-gray-600">Navigasi desktop, mobile hamburger, dan breadcrumbs.</p>
                        <a href="dashboard/sidebar-left" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
                <!-- UI Example 4: Charts -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-yellow-500 text-white">
                        <i data-lucide="bar-chart" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Charts</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Visualisasi Data (Charts)</h4>
                        <p class="text-sm text-gray-600">Berbagai jenis grafik untuk menampilkan data.</p>
                        <a href="apexcharts" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
                <!-- UI Example 5: Alerts & Notifications -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-red-500 text-white">
                        <i data-lucide="bell-ring" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Alerts</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Alerts & Notifikasi</h4>
                        <p class="text-sm text-gray-600">Pesan sukses, error, peringatan, dan informasi.</p>
                        <a href="alerts-and-notifications" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
                <!-- UI Example 6: Data Tables -->
                <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-48 flex flex-col items-center justify-center bg-teal-500 text-white">
                        <i data-lucide="table" class="w-16 h-16"></i>
                        <span class="text-2xl font-bold mt-2">Tables</span>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl mb-2 text-gray-800">Tabel Data Interaktif</h4>
                        <p class="text-sm text-gray-600">Tabel dengan fitur sorting, filtering, dan pagination.</p>
                        <a href="tabulator" class="mt-4 inline-block text-blue-600 hover:underline font-semibold">Lihat Detail & Demo</a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105">
                    Lihat Semua Komponen UI
                </a>
            </div>
        </div>
    </section>

    <!-- Section: Vendor Support & Dokumentasi -->
    <section id="vendor-support" class="py-12 md:py-16 bg-gray-50">
        <div class="container mx-auto px-6 md:px-10 py-8 bg-white rounded-xl shadow-xl max-w-7xl mb-6 md:mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Didukung Oleh & Dokumentasi
            </h2>
            <p class="text-lg text-gray-600 text-center mb-8 max-w-xl mx-auto">
                EazZy Project UI dibangun dengan dukungan dari berbagai library dan framework terkemuka.
                Kunjungi situs web resmi mereka melalui tautan di bawah ini untuk dokumentasi lengkap dan detail penggunaan.
            </p>
            <div class="splide" role="group" aria-label="Vendor Support Slider">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://lucide.dev/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-pink-600 text-white rounded-full shadow-md">
                                    <i data-lucide="layers" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Lucide Icons</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://tailwindcss.com/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-blue-600 text-white rounded-full shadow-md">
                                    <i data-lucide="wind" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Tailwind CSS</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://flatpickr.js.org/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-blue-300 text-white rounded-full shadow-md">
                                    <i data-lucide="calendar-days" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Flatpickr</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://splidejs.com/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-green-400 text-white rounded-full shadow-md">
                                    <i data-lucide="gallery-horizontal" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Splide.js</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="http://tabulator.info/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-green-700 text-white rounded-full shadow-md">
                                    <i data-lucide="table" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Tabulator</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://apexcharts.com/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-blue-400 text-white rounded-full shadow-md">
                                    <i data-lucide="area-chart" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">ApexCharts</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://animate.style/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-purple-900 text-white rounded-full shadow-md">
                                    <i data-lucide="sparkles" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">Animate.css</span>
                            </a>
                        </li>
                        <li class="splide__slide flex justify-center items-center p-4">
                            <a href="https://ricostacruz.com/nprogress/" target="_blank" class="block text-center hover:opacity-75 transition-opacity duration-300">
                                <div class="w-20 h-20 flex flex-col items-center justify-center bg-blue-500 text-white rounded-full shadow-md">
                                    <i data-lucide="gauge-circle" class="w-12 h-12"></i>
                                </div>
                                <span class="text-sm font-semibold text-gray-700 mt-2 block">NProgress.js</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Gabung Komunitas & Unduh Aset -->
    <section id="contact" class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-10 text-center bg-white rounded-xl shadow-xl max-w-7xl p-8 mb-6 md:mb-8">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kontribusi di GitHub!
            </h3>
            <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Bergabunglah dengan kami di GitHub untuk melihat kode sumber, berkontribusi, atau melaporkan isu.
                Anda juga bisa mengunduh aset UI/UX kami secara langsung di sini.
            </p>
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <!-- Tombol Kunjungi GitHub -->
                <a href="https://github.com/deveazzy/EazZyProject/tree/uiux" target="_blank" class="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105">
                    <i data-lucide="github" class="w-6 h-6"></i>
                    Kunjungi GitHub
                </a>
                <!-- Tombol Unduh File -->
                <a href="assets/file/uiux.rar" download class="w-full md:w-auto bg-green-600 text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105">
                    <i data-lucide="download" class="w-6 h-6"></i>
                    Unduh Aset UI/UX
                </a>
            </div>
        </div>
    </section>
</main>

<!-- Memuat library Splide dari lokal -->
<script src="/assets/vendor/splide/splide.min.js" defer></script>
