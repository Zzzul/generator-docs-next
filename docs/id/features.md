# Fitur yang Tersedia Saat Ini

Berikut adalah beberapa fitur yang tersedia saat ini dan dapat kamu coba.

1. _CRUD Generator_
    - Mendukung lebih dari 15 [jenis kolom migrasi](https://laravel.com/docs/10.x/migrations#available-column-types), seperti `string, char, date, year`, dll.
    - Mendukung [Input HTML 5](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Validasi _Request_ yang didukung: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - _Datatable_ - [Yajra Datatables](https://github.com/yajra/laravel-datatables)
    - Pembuatan Model dan relasi [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse)
    - Unggah Gambar - [Intervention Image](https://image.intervention.io/v2)
    - _Single Form CRUD_
    - _CRUD API Generator_
    - _Seeder & Factory Generator_
2. Menu _Sidebar_ yang dapat dikonfigurasi ([versi lengkap](get-started.md#versi-lengkap))
3. _CRUD User_ ([versi lengkap](get-started.md#versi-lengkap))
4. Hak akses (_Role & permissions_) - [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction) ([versi lengkap](get-started.md#versi-lengkap))
5. Otentikasi - [Laravel Fortify](https://laravel.com/docs/10.x/fortify) ([versi lengkap](get-started.md#versi-lengkap))
    - Masuk
    - Daftar
    - Lupa Kata Sandi
    - Otentikasi _2FA_
    - Pembaruan informasi profil 

## Perintah Tersedia

### Instalasi Generator
 Instalasi varian Generator: [Sederhana (_Simple version_)](/id/get-started#versi-sederhana) / [Lengkap (_Full version_)](/id/get-started#versi-lengkap)

Untuk versi sederhana
```sh
php artisan generator:install simple
```
Untuk versi lengkap
```sh
php artisan generator:install full
```
::: danger
Kedua perintah diatas akan menimpa beberapa berkas, jadi kamu harus berhati-hati saat menjalankan perintah tersebut dan hindari menjalankannya lebih dari sekali.
:::

#### Publikasikan kelas utilitas
```sh
php artisan generator:publish-utils
```

### Tetapkan menu _Sidebar_
Tetapkan menu _Sidebar_ menjadi kode `.blade` (statis) atau gunakan daftar dari konfigurasi (dinamis)

Kamu dapat melihat konfigurasi menu _Sidebar_  di ```config/generator.php```

Gunakan konfigurasi menu _Sidebar_ dinamis
```sh
php artisan generator:sidebar dynamic
```

Saat menggunakan menu _Sidebar_ statis, kamu bebas untuk mengubah menu _Sidebar_ yang berada di  ```resources/views/layouts/sidebar.blade.php```

```sh
php artisan generator:sidebar static
```
::: info
Setelah kamu membuat modul baru menggunakan Generator, _Sidebar_ akan otomatis kembali ke dinamis. Tapi tenang kamu dapat mengubahnya kembali seperti semula.
:::

## Utilitas/Helper

### Helper

Kelas `helper` ditempatkan di `App\Generators\helper.php`

#### Periksa menu aktif pada _Sidebar_
Cek menu pada _Sidebar_ apakah sesuai dengan _url_ yang sedang diakses.
```php
is_active_menu(string|array $menu): boolean;
```

#### `ImageService`
Kelas ini digunakan untuk melakukan fungsi unggah dan manipulasi gambar menggunakan [Intervention Image v3.x](https://image.intervention.io/v3), jika kamu ingin melihatnya, kelas ini dapat diakses pada `App\Generator\Services`