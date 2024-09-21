---
outline: deep
lastUpdated: true
editLink: true
title: Fitur
titleTemplate: Fitur apa aja sih yang ada?
description: Mengetahui fitur-fitur yang ada pada Generator
head:
  - - meta
    - name: description
      content: Fitur apa aja sih yang ada?
  - - meta
    - name: keywords
      content: Fitur Generator
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi _Generator_ yang lama nih. Tolong pertimbangkan untuk memperbarui proyek kamu ke versi [Generator 0.3.x](/id/introduction) yaa.
:::

# Fitur

### Versi Sederhana
 
- _CRUD Generator_
    - Mendukung lebih dari 15 [jenis kolom migrasi](https://laravel.com/docs/10.x/migrations#available-column-types), seperti `string, char, date, year`, dll.
    - Mendukung [Input HTML 5](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Validasi _Request_ yang didukung: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - Tabel Data ([Yajra Datatables](https://github.com/yajra/laravel-datatables))
    - [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse)
    - Pembuatan Model
    - Unggah Gambar ([Intervention Image](https://image.intervention.io/v2))

### Versi Lengkap
  
- _CRUD Generator_
- Menu _Sidebar_ yang dapat dikonfigurasi
- _CRUD User_
- Hak akses ([Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction))
- Otentikasi ([Laravel Fortify](https://laravel.com/docs/10.x/fortify))
    - Masuk
    - Daftar
    - Lupa Kata Sandi
    - Otentikasi 2FA
    - Pembaruan informasi profil 

## Perintah Tersedia

### Instalasi Generator
Instalasi varian Generator: Sederhana (_Simple version_) / Lengkap (_Full version_)

Untuk versi sederhana
```sh
php artisan generator:install simple
```
Untuk versi lengkap
```sh
php artisan generator:install full
```

::: danger
Perintah ini akan menimpa beberapa berkas, jadi kamu harus berhati-hati saat menjalankan perintah ini dan hindari menjalankannya lebih dari sekali.
:::

### Tetapkan menu _Sidebar_
Tetapkan menu _Sidebar_ menjadi kode `.blade` (statis) atau gunakan daftar dari konfigurasi (dinamis)

Tempat konfigurasi menu _Sidebar_ berada di ```config/generator.php```

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
#### Periksa menu aktif pada _Sidebar_

```php
is_active_menu(string|array $menu): boolean;
```

### Kelas Utilitas

Semua fungsi utilitas yang mungkin kamu butuhkan, tersedia berada di ```App\Generators\GeneratorUtils```

```php
use App\Generators\GeneratorUtils;

/**
 * Dapatkan template/berkas.
*/
public static function getTemplate(string $path): string;

/**
* Dapatkan berkas yang telah dibuat.
*/
public static function getPublishedStub(string $path): string;

/**
* Periksa folder jika tidak ada, lalu buat folder.
*/
public static function checkFolder(string $path): void;

/**
* Ubah teks ke singular pascal case.
*/
public static function singularPascalCase(string $string): string;

/**
* Ubah teks ke singular pascal case.
*/
public static function pascalCase(string $string): string;

/**
* Ubah teks ke plural pascal case.
*/
public static function pluralPascalCase(string $string): string;

/**
* Ubah teks ke plural snake case.
*/
public static function pluralSnakeCase(string $string): string;

/**
* Ubah teks ke singular snake case.
*/
public static function singularSnakeCase(string $string): string;

/**
* Ubah teks ke plural pascal case.
*/
public static function pluralCamelCase(string $string): string;

/**
* Ubah teks ke singular pascal case.
*/
public static function singularCamelCase(string $string): string;

/**
* Ubah teks ke plural, kebab case, dan huruf kecil.
*/
public static function pluralKebabCase(string $string): string;

/**
* Ubah teks ke kebab case, dan huruf kecil.
*/
public static function kebabCase(string $string): string;

/**
* Ubah teks ke singular, kebab case, dan huruf kecil.
*/
public static function singularKebabCase(string $string): string;

/**
* Ubah teks ke singular, hapus karakter khusus, dan huruf kecil.
*/
public static function cleanSingularLowerCase(string $string): string;

/**
* Hapus karakter khusus, dan huruf kecil.
*/
public static function cleanLowerCase(string $string): string;

/**
* Ubah teks ke plural, hapus karakter khusus, dan huruf besar setiap huruf pertama.
*/
public static function cleanPluralUcWords(string $string): string;

/**
* Ubah teks ke singular, hapus karakter khusus, dan huruf besar setiap huruf pertama.
*/
public static function cleanSingularUcWords(string $string): string;

/**
* Hapus karakter khusus, dan huruf besar setiap huruf pertama.
*/
public static function cleanUcWords(string $string): string;

/**
* Ubah teks ke plural, hapus karakter khusus, dan huruf kecil.
*/
public static function cleanPluralLowerCase(string $string): string;

/**
* Dapatkan 1 kolom setelah id berada di tabel.
*/
public static function getColumnAfterId(string $table): string;

/**
* Pilih id dan kolom setelah id berada di tabel.
*/
public static function selectColumnAfterIdAndIdItself(string $table): string;

/**
* Dapatkan lokasi model atau path jika mengandung '/'.
*/
public static function getModelLocation(string $model): string;

/**
* Converts camelCase string to have spaces between each.
*/
public static function fromCamelCase(string $string): string;
/**
* Tetapkan nama model dari yang terakhir dari array (jika ada).
*/
public static function setModelName(string $model, string $style = 'pascal case'): string;

/**
* Tetapkan gambar default dan kode ke controller.
*/
public static function setDefaultImage(null|string $default, string $field, string $model): array;

/**
* Ubah array dari konfigurasi menjadi string seperti array.
*/
public static function convertArraySidebarToString(array $sidebars): string;

/**
* Periksa apakah menu aktif.
*/
public static function isActiveMenu(string|array $route): string;

```

### Yang ingin kami tambahkan di masa depan
- Generator _CRUD API_ [(tersedia pada v0.3.0)](/id/features)
- Dokumentasi _API_
- Dapat membuat lebih banyak jenis model relasi
- Unggah berkas selain gambar
- _CRUD_ dengan _Design pattern (Service/Repository)_
- _Laravel Pagination_
- Impor/Ekspor _csv_
- _Input_ untuk nama tabel kustom
- Ubah validasi _Request_ sebagai _Array_
- Menambahkan pilihan untuk apakah menggunakan _Route model binding_
- Menambahkan pilihan untuk mematikan _Pluralization_ otomatis
- Jika zona waktu diatur ke Indonesia, maka nonaktifkan _Pluralization_
- Menambahkan nama pengguna ke tabel _Users_
- _Template Admin_  baru
- Pilihan untuk otomatisasi tabel migrasi atau tidak
- Menambahkan konfigurasi untuk menampilkan gambar dalam tabel data atau tidak
- kemampuan untuk menyembunyikan/menampilkan _Field_ pada halaman detail
- Konfigurasi untuk membatasi _Field_ yang ditampilkan pada halaman indeks
- Dapat memilih _Field_ yang akan ditampilkan dalam relasi _belongsTo_
- _Generator_ dapat membuat _Seeder_ dan _Factory_ [(tersedia pada v0.3.0)](/id/features)
- Menambahkan konfigurasi bawaan untuk panjang minimum & maksimum untuk jenis kolom _String_
- _Generator_ dapat membuat _subfolder_ untuk validasi _Request_
- Menambahkan konfigurasi untuk jenis gambar, tampilkan dalam bentuk bulat atau kotak
- Menambahkan dukungan untuk `diffForHumans()` ke jenis _Input_ tanggal.
- Validasi kustom yang dapat ditulis pada _Input_
- _Generator_ dapat menggunakan penyimpanan _Cache_
- _Generator_ dapat membuat kebijakan
- _Generator_ dapat membuat pengamat model
- Gunakan _Database Transaction_
- _Generator_ dapat membuat mutator & pengecoran
- Konfigurasi untuk unggah berkas ke _S3_
- Menambahkan opsi _Soft Delete_
- Jika model berada dalam _subfolder_ maka rute akan menggunakan _sub-rute_
- Menambahkan _Unit Test_ untuk _Generator_
- _Generator_ dapat membuat _Unit Test_
- Menambahkan pemberitahuan jika pengguna mengubah email atau kata sandi mereka
- Menambahkan log aktivitas
- Menambahkan cadangan basis data
- _Generator_ dapat membuat kelas _enum_ untuk jenis kolom  tipe _enum_
- Refaktor kode

::: info
Daftar diatas berubah kapan saja dan fitur mungkin ditambahkan dalam urutan acak.
:::