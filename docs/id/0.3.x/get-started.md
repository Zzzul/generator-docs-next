::: warning
Kamu sedang menjelajahi dokumentasi untuk versi _Generator_ yang lama nih. Tolong pertimbangkan untuk memperbarui proyek kamu ke versi [Generator 0.4](/id/introduction) yaa.
:::

# Mari Kita Mulai

### Persyaratan

Berikut adalah beberapa persyaratan minumum yang harus kamu diperhatikan:
 - [Composer ^2.x](https://getcomposer.org/)
 - [PHP ^8.2.x](https://www.php.net/releases/8.1/en.php)
 - [Laravel ^11.x](http://laravel.com/)

## Instalasi

```sh
composer require evdigiina/generator --dev
```
:::info
Pustaka ini memiliki dua variasi, yaitu: [Versi Sederhana](#versi-sederhana) dan [Versi Lengkap](#versi-lengkap)
:::

### Versi Sederhana

![Versi Sederhana](/simple-version.png)

Dirancang untuk para pengembang yang ingin solusi mudah, versi ini difokuskan pada pembuatan operasi CRUD, kamu bisa membuat _Create_, _Read_, _Update_, dan _Delete_ dengan mudah. 

Membuat kamu lebih berkonsentrasi pada fitur utama aplikasi tanpa repot dengan tugas coding yang berulang-ulang.

Didalamnya sudah terdapat: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v2), dan [Bootstrap 5](https://getbootstrap.com/).

[Lihat fitur yang tersedia](features.md)
  
Instalasi pustaka

```sh
php artisan generator:install simple
```

jalankan server pengembangan lokal `php artisan serve` lalu pada _browser_ kamu dapat menuju ```/simple-generators/create/```
  
<hr>

### Versi Lengkap

![Versi Lengkap](/full-version-2.png)

Versi lengkap ini lebih dari sekedar membuat operasi CRUD, menawarkan _Starter App_ yang komplit, mulai dari autentikasi, admin panel, _User_ manajemen hingga hak akses (_Role & Permissions_) yang fleksibel. Cocok untuk kamu yang membutuhkan solusi _All-in-one_.

Versi ini memberdayakan kamu untuk langsung memulai aplikasi dengan fitur-fitur esensial, fokus pada inovasi, dan biarkan kami yang urus hal-hal dasarnya.

Pada versi ini kamu akan mendapatkan: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v3), [Laravel Fortify](https://laravel.com/docs/11.x/fortify), [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel), dan [Mazer Template](https://github.com/zuramai/mazer).

[Lihat fitur yang tersedia](features.md#full-version).


::: warning
Jika kamu ingin menggunakan versi lengkap, memasang pustaka ini setelah instalasi proyek Laravel baru sangat disarankan, karena beberapa file akan ditimpa.
:::

Instalasi [Laravel Fortify](https://laravel.com/docs/11.x/fortify) & [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel)


```sh
composer require laravel/fortify spatie/laravel-permission
```

Publikasikan berkas

```sh
php artisan generator:install full
```

::: danger
Perintah ini akan menimpa beberapa berkas, jadi kamu harus berhati-hati saat menjalankan perintah ini dan hindari menjalankannya lebih dari sekali.
:::

Jalankan perintah migrasi dan _seeder_

```sh
php artisan migrate --seed
```

Mulai server pengembangan lokal `php artisan serve`

Akun

- Email: admin@example.com
- Kata sandi: password

## Pustaka apa saja sih yang digunakan? 

### Versi Sederhana

- [Yajra datatable - ^11.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^3.x](https://image.intervention.io/v3)
- [Bootstrap - ^5.x](https://getbootstrap.com/)
  
### Versi Lengkap

- [Yajra datatable - ^11.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^3.x](https://image.intervention.io/v3)
- [Laravel Forify - ^1.x](https://laravel.com/docs/11.x/fortify)
- [Spatie permission - ^6.x](https://github.com/spatie/laravel-permission)
- [Mazer template - ^2.x](https://github.com/zuramai/mazer/) 