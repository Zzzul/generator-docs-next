---
outline: deep
lastUpdated: true
editLink: true
title: Cara berkontribusi
titleTemplate: Mari ikut berkontribusi
description: Cara berkontribusi pada proyek ini
head:
  - - meta
    - name: description
      content: Cara berkontribusi pada proyek ini
  - - meta
    - name: keywords
      content: Cara berkontribusi to Generator
next: true
---

# Cara Berkontribusi

Kamu dapat berkontribusi pada proyek ini, dengan mengikuti langkah-langkah berikut:

1. [_Star & fork_ repositori](https://github.com/Evdigi-INA/generator)

2. Buat proyek Laravel baru:

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    or

    ```sh
    laravel new generator-dev
    ```

3. _Instal_ pustaka yang dibutuhkan:

    ```sh
   composer require laravel/fortify spatie/laravel-permission intervention/image-laravel  yajra/laravel-datatables-oracle
    ```

4. Buat folder `packages/evdigi-ina` dalam proyek utama

5. Pindah ke folder `packages/evdigi-ina` and _clone_ repositori

    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

6. Pindah lagi ke folder `/generator` dan _instal_ pustaka yang diperlukan

    ```sh
    composer i
    ```
    Lalu kembali ke folder utama

7. Tambahkan kode berikut ke `composer.json`

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

8. Jalankan perintah dibawah ini

    ```sh
    composer dump-autoload
    ```

9. Tambahkan kode berikut ke `bootstrap/app.php`

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
        //...
    ])
    ```

10. Publikasikan berkas yang dibutuhkan

    ```sh
    php artisan generator:install full
    ```

11. Tambahan kode berikut ke `composer.json`

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

12. Hapus komenter `ViewComposerServiceProvider::class` dan tambahkan kode berikut `\EvdigiIna\Generator\Providers\GeneratorServiceProvider::class` pada `bootstrap/app.php` 

```php
->withProviders([
    \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
    ViewComposerServiceProvider::class
])
```

13. Lalu jalankan perintah berikut sekali lagi
    ```sh
    composer dump-autoload
    ```

14. Migrasi _Database_
    ```sh
    php artisan migrate --seed
    ```

15. Jalankan server pengembangan lokal
    ```sh
    php artisan serve
    ```

16. Lakukan perubahan kode pada `packages/evdigi-ina/generator`

17. Pastikan kode berjalan dengan baik

18. Akan lebih baik jika kamu membuat _Unit Test_

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
    git commit -m "describe your changes"
    ```

20. _Push_ ke repositori

    ```bash
    git push origin update-generator
    ```

21. Buat _Pull Request_ pada repositori
