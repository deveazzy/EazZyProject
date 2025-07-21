<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$requestUri = $_SERVER['REQUEST_URI'];
$path = strtok($requestUri, '?');
$path = trim($path, '/');
$segments = explode('/', $path);

$page = (!empty($segments[0])) ? htmlspecialchars($segments[0]) : 'home';
$layout = 'default';
if (isset($segments[1])) {
    $layout = htmlspecialchars($segments[1]);
}

if ($page === 'redis-test' && isset($_GET['clear_cache'])) {
    try {
        if (class_exists('Redis')) {
            $redis = new Redis();
            $redis->connect('redis-cache', 6379);
            $redis->del('products:all');
        }
    } catch (Exception $e) {
        // Error handling for Redis connection
    }
    header('Location: /redis-test');
    exit;
}

$page_css_file = "/css/{$page}.css";
$page_js_file = "/js/{$page}.js";

$pages_without_sidebar = [
    '401', '403', '500', '503', '404', 'home', 'about'
];

$allowed_pages = [
    '401', '403', '500', '503', '404',
    'home', 'about', 'atoms', 'icons',
    'typography', 'tabs', 'widgets', 'buttons',
    'alerts-and-notifications', 'tailwind-css',
    'flatpickr', 'apexcharts', 'animate-style',
    'tabulator', 'splide', 'redis-test', 'modal-form',
    'blank-content', 'nprogress', 'grid'
];
