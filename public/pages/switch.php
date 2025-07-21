<?php
/**
 * page/switch.php
 *
 * File ini HANYA mengelola routing konten halaman berdasarkan parameter URL 'page'.
 * Logika layout (seperti sidebar) ditangani di index.php.
 */
// Daftar halaman yang valid untuk mencegah include file sembarangan
// var_dump($page);

if (in_array($page, $allowed_pages)) {
    // Tambahkan '../' untuk naik satu level dari folder 'page' ke root direktori
    $content_file = __DIR__ . '/content/' . $page . '.php'; 
    if (file_exists($content_file)) {
        include $content_file;
    } else {
        // Jika file tidak ada meski ada di daftar (seharusnya tidak terjadi)
        include 'content/404.php'; 
    }
} else {
    // Jika 'page' tidak valid, tampilkan halaman 404
    include 'content/404.php'; 
    // http_response_code(404); // Opsional: Kirim header HTTP 404
}

?>