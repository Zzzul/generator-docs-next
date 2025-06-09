---
outline: deep
lastUpdated: true
editLink: true
title: Cara berkontribusi
titleTemplate: Mari ikut berkontribusi
description: Cara berkontribusi di Generator
head:
  - - meta
    - name: description
      content: Cara berkontribusi di Generator
  - - meta
    - name: keywords
      content: Cara berkontribusi di Generator
next: true
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi _Generator_ yang lama nih. Tolong pertimbangkan untuk memperbarui proyek kamu ke versi [Generator 0.4](/id/introduction) yaa.
:::

# Cara Berkontribusi

### kamu dapat berkontribusi pada proyek ini, dengan mengikuti langkah-langkah berikut:

1. [Beri bintang & _fork_ repositori](https://github.com/Evdigi-INA/generator)

2. Buat proyek Laravel baru:

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    atau

    ```sh
    laravel new generator-dev
    ```

4. Lakukan instalasi pustaka yang diperlukan:

    ```sh
    composer require laravel/fortify spatie/laravel-permission intervention/image "^2.0" yajra/laravel-datatables-oracle
    ```

5. Publikasiki pustaka `fortify`

    ```sh
    php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
    ```

6. Buat folder `packages/evdigi-ina` di folder utama proyek

7. Pindah ke folder `packages/evdigi-ina`, dan klon repositori

    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

    dan lakukan instalasi

    ```sh
    composer i
    ```
    kemudian kembali ke folder utama proyek

8. Tambahkan kode berikut ke `composer.json`

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"
        }
    },
    ```

9. Jalankan perintah berikut

    ```sh
    composer dump-autoload
    ```

10. Tambahkan kode berikut ke `config/app.php`

    ```php
    /*
    * Package Service Providers...
    */
    EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
    Yajra\DataTables\DataTablesServiceProvider::class,
    Spatie\Permission\PermissionServiceProvider::class,
    Intervention\Image\ImageServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    // App\Providers\ViewComposerServiceProvider::class,
    ```

11. Publikasikan file yang diperlukan untuk Generator

    ```sh
    php artisan generator:install full
    ```

12. Tambahkan kode berikut pada `composer.json`

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"
        },
        "files": [
            "App/Generators/helper.php"
        ]
    },
    ```

13. Hapus komentar `App\Providers\ViewComposerServiceProvider::class` di `config/app.php`

14. Kemudian jalankan perintah berikut untuk kedua kalinya 
    ```sh
    composer dump-autoload
    ``` 

15. Migrasi basis data 
    ```sh
    php artisan migrate --seed
    ```

16. Jalankan server pengembangan lokal dan buka `/generators/create` 
    ```sh
    php artisan serve
    ```

17. Lakukan perubahan kode sesuai keinginan kamu di `packages/evdigi-ina/generator`

18. Pastikan kode berfungsi dengan baik

19. Pindah ke _Branch_ baru
    ```bash
     git branch update-generator
    ```
    ```bash
    git checkout update-generator
    ```
    ```bash
    git add .
    ```
    ```bash
    git commit -m "jelaskan perubahan kamu"
    ```

20. Unggah kode ke repositori

    ```bash
    git push origin update-generator
    ```

21. Buat _Pull Request_.
