<?php
/**
 * @[EazZy Project] Copyright (c) [2025] [EazZy Project] license
 * @https://opensource.org/licenses/MIT MIT License
 * @path public/pages/about.php
 * @author EazZy Project
 *
 * File ini berisi konten untuk halaman 'Tentang' EazZy Project UI,
 * menjelaskan filosofi, tujuan, dan manfaatnya.
 */
?>

<main class="flex-1 container mx-auto p-4 md:p-8 lg:p-10">
    <!-- Hero Section: Pengenalan Tentang EazZy Project UI -->
    <section id="about-hero" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 md:p-12 lg:p-16 rounded-xl shadow-xl max-w-7xl mx-auto mb-6 md:mb-8 text-center">
        <div class="flex flex-col items-center justify-center mb-8">
            <div class="bg-white text-blue-600 p-5 rounded-full mb-6 shadow-md animate__animated animate__zoomIn animate__delay-2s">
                <i data-lucide="info" class="w-16 h-16 md:w-20 md:h-20"></i>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeInDown animate__delay-0-5s">
                Tentang EazZy Project UI
            </h1>
            <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate__animated animate__fadeInUp animate__delay-1s">
                EazZy Project UI adalah koleksi aset antarmuka pengguna yang dirancang untuk mempercepat dan menyederhanakan proses pengembangan aplikasi web modern. Kami percaya pada kekuatan desain yang intuitif dan kode yang efisien.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-1-5s">
                <a href="atoms" class="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Lihat Komponen UI
                </a>
                <a href="https://github.com/deveazzy/EazZyProject/tree/uiux" target="_blank" class="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Kunjungi GitHub
                </a>
            </div>
        </div>
    </section>

    <!-- Section: Filosofi dan Prinsip Desain -->
    <section id="philosophy" class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-10 py-8 bg-white rounded-xl shadow-xl max-w-7xl mb-6 md:mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Filosofi di Balik Desain Kami
            </h2>
            <div class="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                    Kami membangun EazZy Project UI dengan satu filosofi utama: **memudahkan**. Baik Anda seorang developer berpengalaman yang mencari efisiensi, maupun desainer yang ingin mewujudkan ide visual tanpa hambatan teknis, UI kami dirancang untuk menjadi solusi.
                </p>
                <p>
                    Prinsip-prinsip inti yang kami terapkan meliputi:
                </p>
                <ul class="list-disc list-inside text-left space-y-2 pl-4">
                    <li>
                        <strong class="text-blue-600">Intuitif:</strong> Setiap komponen dirancang agar mudah dipahami dan digunakan, baik oleh pengguna akhir maupun developer.
                    </li>
                    <li>
                        <strong class="text-green-600">Modular:</strong> Aset-aset UI bersifat independen dan dapat digabungkan seperti blok bangunan, memberikan fleksibilitas tanpa batas.
                    </li>
                    <li>
                        <strong class="text-purple-600">Responsif:</strong> Pengalaman pengguna yang konsisten dan optimal di berbagai perangkat, dari desktop hingga seluler.
                    </li>
                    <li>
                        <strong class="text-yellow-600">Berkinerja:</strong> Dioptimalkan untuk kecepatan dan efisiensi, memastikan aplikasi Anda berjalan lancar.
                    </li>
                    <li>
                        <strong class="text-red-600">Open-Source:</strong> Kami percaya pada kekuatan kolaborasi dan transparansi, memungkinkan siapa saja untuk menggunakan, memodifikasi, dan berkontribusi.
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Section: Manfaat Utama bagi Pengguna -->
    <section id="benefits-detail" class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-10 py-8 bg-white rounded-xl shadow-xl max-w-7xl mb-6 md:mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Bagaimana EazZy Project UI Membantu Anda
            </h2>
            <div class="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                    Dengan memanfaatkan EazZy Project UI, Anda dapat:
                </p>
                <ul class="list-disc list-inside text-left space-y-2 pl-4">
                    <li>
                        <strong class="bg-blue-100 text-blue-800 px-1 py-0.5 rounded">Menghemat Waktu Pengembangan:</strong> Komponen siap pakai mengurangi kebutuhan untuk menulis kode UI dari nol.
                    </li>
                    <li>
                        <strong class="bg-green-100 text-green-800 px-1 py-0.5 rounded">Mencapai Konsistensi Desain:</strong> Memastikan tampilan dan nuansa yang seragam di seluruh aplikasi Anda.
                    </li>
                    <li>
                        <strong class="bg-purple-100 text-purple-800 px-1 py-0.5 rounded">Meningkatkan Pengalaman Pengguna:</strong> Fokus pada fungsionalitas inti aplikasi Anda, sementara UI kami menangani interaksi yang mulus.
                    </li>
                    <li>
                        <strong class="bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded">Mempercepat Prototyping:</strong> Bangun prototipe fungsional dengan cepat untuk validasi ide.
                    </li>
                    <li>
                        <strong class="bg-red-100 text-red-800 px-1 py-0.5 rounded">Membangun Aplikasi Responsif:</strong> Desain yang adaptif secara otomatis menyesuaikan dengan berbagai ukuran layar.
                    </li>
                </ul>
                <p>
                    Kami berkomitmen untuk terus mengembangkan dan memperkaya koleksi UI ini, menjadikannya sumber daya yang tak ternilai bagi komunitas developer dan desainer.
                </p>
            </div>
        </div>
    </section>

    <!-- Section: Ajakan Bertindak -->
    <section id="about-cta" class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-10 text-center bg-white text-gray-900 rounded-xl shadow-xl max-w-7xl p-8 mb-6 md:mb-8">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">
                Mulai Jelajahi atau Berkontribusi!
            </h3>
            <p class="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                Tertarik untuk melihat lebih banyak komponen UI kami atau ingin bergabung dalam pengembangan?
            </p>
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <a href="atoms" class="w-full md:w-auto bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105">
                    Lihat Komponen UI
                </a>
                <a href="https://github.com/deveazzy/EazZyProject/tree/uiux" target="_blank" class="w-full md:w-auto border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105">
                    Kunjungi GitHub
                </a>
            </div>
        </div>
    </section>
</main>
