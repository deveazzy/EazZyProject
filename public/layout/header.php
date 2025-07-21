<header class="bg-white shadow-sm relative z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" class="flex items-center space-x-3">
            <svg class="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H9a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="M12 18h.01"/></svg>
            <h1 class="text-2xl font-bold text-blue-600">EazZy Project UI</h1>
        </a>
        
        <button id="menu-btn" class="md:hidden z-20">
            <i data-lucide="menu" class="h-6 w-6"></i>
        </button>
        
        <!-- Kontainer untuk menu navigasi desktop. Akan diisi oleh JavaScript. -->
        <nav id="desktop-nav-container" class="hidden md:flex space-x-8 items-center">
            <!-- Menu desktop akan dirender di sini oleh js/header.js -->
        </nav>
    </div>
    
    <!-- Panel Mega Menu (Desktop) -->
    <div id="mega-menu" class="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-6xl bg-white rounded-b-lg shadow-xl border-t border-gray-300 opacity-0 transform -translate-y-4 pointer-events-none">
        <div class="p-8 grid grid-cols-4 gap-8">
            <!-- Kolom 1: Kategori Utama (akan diisi oleh JS) -->
            <div id="mega-menu-categories" class="col-span-1 border-r border-gray-300 pr-8">
                <ul id="mega-menu-category-list" class="space-y-2">
                    <!-- Kategori akan dirender di sini oleh js/header.js -->
                </ul>
            </div>
            <!-- Kolom 2-4: Konten Dinamis (akan diisi oleh JS) -->
            <div id="mega-menu-content-panel" class="col-span-3">
                <!-- Konten submenu akan dirender di sini oleh js/header.js -->
            </div>
        </div>
    </div>
    
    <!-- Kontainer untuk menu mobile. Akan diisi oleh JavaScript. -->
    <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
        <nav id="mobile-nav-container" class="flex flex-col p-6 space-y-2">
            <!-- Menu mobile akan dirender di sini oleh js/header.js -->
        </nav>
    </div>
</header>
<!-- [BARU] Elemen penanda untuk dideteksi oleh Intersection Observer -->
<div id="header-sentinel"></div>
