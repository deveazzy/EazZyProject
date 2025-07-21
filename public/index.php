<?php
// Mendefinisikan konstanta APP_ROOT yang menunjuk ke direktori root proyek.
// __DIR__ adalah direktori dari file saat ini (misalnya, /var/www/mirror/public/).
// realpath(__DIR__ . '/..') akan naik satu level ke atas, menghasilkan /var/www/mirror/ (root proyek).

define('APP_ROOT', realpath(__DIR__ . '/..'));

// Mendefinisikan path absolut ke file core.php menggunakan APP_ROOT.
include_once APP_ROOT . '/app/Core/core.php';
?>
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <?php 
      include_once 'config/html-config.php'; 
      include_once 'config/meta-config.php';
      include_once 'config/asset-config.php'; 
  ?>
</head>
<body class="bg-gray-50 text-gray-800">
  <?php 
    include 'layout/header.php';
  ?>
    <div class="flex flex-1">
        <?php
        if (isset($layout) && $layout === 'sidebar-left' && !in_array($page, $pages_without_sidebar)) {
            include 'layout/sidebar-left.php';
        }
        include 'pages/switch.php'; 
        ?>
    </div>
  <?php 
  include 'layout/footer.php'; 
  include 'config/js-config.php'; 
  // Logika untuk memuat JavaScript spesifik untuk sidebar.
  if (isset($layout) && $layout === 'sidebar-left' && !in_array($page, $pages_without_sidebar)) {
      echo '<script type="module" src="/js/sidebar-left.js" defer></script>';
  }
  // Secara dinamis mencari file .js yang namanya sama dengan $page.
  if (isset($page_js_file) && file_exists($_SERVER['DOCUMENT_ROOT'] . $page_js_file)) {
        echo "<script type='module' src='{$page_js_file}' defer></script>";
  }
  ?>
</body>
</html>
