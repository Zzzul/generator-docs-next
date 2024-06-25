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

# Cara berkontribusi

kamu dapat berkontribusi pada proyek ini, dengan mengikuti langkah-langkah berikut:

1. _[Star & fork the repositori](https://github.com/Evdigi-INA/generator)_

2. Buat proyek Laravel baru

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    atau

    ```sh
    laravel new generator-dev
    ```

3. _Instal_ pustaka yang diperlukan

    ```sh
   composer require laravel/fortify spatie/laravel-permission intervention/image-laravel yajra/laravel-datatables-oracle
    ```

4. Buat folder `packages/evdigi-ina` pada folder utama

    ```sh
    mkdir packages/evdigi-ina
    ```

5. Pindah ke folder `packages/evdigi-ina` dan _Clone_ repositori 

    ```sh
    cd packages/evdigi-ina
    ```
    
    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

6. Pindah ke folder `/generator`dan _Instal_ pustaka yang diperlukan

    ```sh
    cd generator
    ```

    Pindah ke _Branch_ `dev` untuk perubahan terbaru

    ```bash
    git checkout -b dev
    ```

    ```bash
    git pull origin dev
    ```
    _Instal_ pustaka yang dibutuhkan

    ```sh
    composer i
    ```
    Kembali ke folder utama

    ```sh
    cd ../../../
    ```

7. Tambahkan kode berikut ini pada `composer.json`

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

10. Publikasikan berkasi yang diperlukan

    ```sh
    php artisan generator:install full
    ```

11. Tambahkan kode berikut pada `composer.json` _(folder utama/root)_

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

12. Ubah kode pada `bootstrap/app.php`

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
        //..
    ])
    ```

13. Jalankan perintah berikut sekali lagi
    ```sh
    composer dump-autoload
    ```

14. Migrasi basis data
    ```sh
    php artisan migrate --seed
    ```

15. Jalankan _Server_ pengembangan lokal
    ```sh
    php artisan serve
    ```

16. Lakukan perubahan pada `packages/evdigi-ina/generator`

17. Pastikan kode kamu berjalan dengan normal

18. Akan lebih baik jika kamu membuat _Unit Tests_

19. Pindah ke branch baru
    ```bash
     git checkout -b update-generator
    ```

    ```bash
    git add .
    ```
    
    ```bash
    git pull origin dev
    ```
    
    ```bash
    git commit -m "describe your changes"
    ```

20. _Push_ perubahan kamu ke repositori

    ```bash
    git push origin update-generator
    ```

21. Buat _Pull Request_ pada [Repositori](https://github.com/Evdigi-INA/generator)
