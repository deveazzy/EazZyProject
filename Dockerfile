# @path    /mnt/c/www/uiux/Dockerfile
# @author  [EazZy Project]
# @license https://opensource.org/licenses/MIT MIT License
#
# [EazZy Project] Copyright (c) 2025 [EazZy Project]
#
# Dockerfile untuk layanan PHP-FPM (uiux-app) dengan ekstensi Redis.

# Gunakan base image resmi PHP 8.2-FPM yang ringan
FROM php:8.2-fpm-alpine

# Tetapkan direktori kerja di dalam kontainer
WORKDIR /var/www/uiux

# Instal semua dependensi OS dan ekstensi PHP dalam satu layer untuk efisiensi
RUN apk add --no-cache \
    git \
    zip \
    unzip \
    fcgi \
    $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del $PHPIZE_DEPS

# Install Composer secara global di dalam image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Salin file composer terlebih dahulu untuk optimasi cache Docker
COPY composer.json composer.lock ./

# Jalankan composer install untuk mengunduh semua dependensi
RUN composer install --no-dev --optimize-autoloader

# Salin semua file dari konteks build ke direktori kerja kontainer
COPY . .

# (Opsional) Jika Anda butuh ekstensi PHP lain, tambahkan di sini
# Contoh:
# RUN docker-php-ext-install pdo pdo_mysql

# Ubah kepemilikan file agar sesuai dengan pengguna PHP-FPM
RUN chown -R www-data:www-data /var/www/uiux

# Port standar untuk PHP-FPM
EXPOSE 9000

# Perintah untuk menjalankan PHP-FPM saat kontainer dimulai
CMD ["php-fpm"]
