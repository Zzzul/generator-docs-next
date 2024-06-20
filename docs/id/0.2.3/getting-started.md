---
outline: deep
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi _Generator_ yang lama nih. Tolong pertimbangkan untuk memperbarui proyek Kamu ke versi [Generator 0.3.x](/id/introduction) yaa.
:::

# Mari Mulai

### Persyaratan

Yang Kamu butuhkan adalah:
 - [Composer ^2.x](https://getcomposer.org/)
 - [PHP ^8.1.x](https://www.php.net/releases/8.1/en.php)
 - [Laravel ^9.x](http://laravel.com/)

## Instalasi

```sh
composer require evdigiina/generator:0.2.3 --dev
```
> Pustaka ini memiliki dua variasi, yaitu: [Versi Sederhana](#simple-version) dan [Versi Lengkap](#full-version)

### Versi Sederhana

 ![image](https://user-images.githubusercontent.com/62506582/219941448-94c46fca-6a9f-422b-bdd1-29f642c3ccf6.png)

_Generator_, yang sudah termasuk: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v2), dan [Bootstrap 5](https://getbootstrap.com/).

[Lihat fitur yang tersedia](features.md)
  
Instalasi pustaka

```sh
php artisan generator:install simple
```

Daftarkan _Service Provider_ pada `config/app.php`

```php
/*
* Package Service Providers...
*/
App\Providers\ViewComposerServiceProvider::class,
```
  
Lalu pada _browser_ Kamu, menuju ```/simple-generators/create/```
  
<hr>

### Versi Lengkap

![image](https://user-images.githubusercontent.com/62506582/219942571-63c42764-1702-4df3-b165-4217e5558713.png)

_Generator + Starter App_, yang sudah termasuk: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v2), [Laravel Fortify](https://laravel.com/docs/9.x/fortify), [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/installation-laravel), dan [Mazer Template](https://github.com/zuramai/mazer).

[Lihat fitur yang tersedia](features.md#full-version).


::: warning
Jika Kamu ingin menggunakan versi lengkap, memasang pustaka ini setelah instalasi proyek Laravel baru sangat disarankan, karena beberapa file akan ditimpa.
:::

Instalasi [Laravel Fortify](https://laravel.com/docs/9.x/fortify) & [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/installation-laravel)


```sh
composer require laravel/fortify spatie/laravel-permission
```

Publikasikan berkas

```sh
php artisan generator:install full
```

::: danger
Perintah ini akan menimpa beberapa berkas, jadi Kamu harus berhati-hati saat menjalankan perintah ini dan hindari menjalankannya lebih dari sekali.
:::
 

Daftarkan kelas _Provider_ pada `config/app.php`

```php
/*
* Package Service Providers...
*/
App\Providers\FortifyServiceProvider::class,
Spatie\Permission\PermissionServiceProvider::class,
App\Providers\ViewComposerServiceProvider::class,
```

Jalankan migrasi dan _Seeder_

```sh
php artisan migrate --seed
```

Lalu akses ```/generators/create```

Akun

- Email: admin@example.com
- Kata sandi: password

## Pustaka apa saja sih yang digunakan? 

#### Versi Sederhana

- [Yajra datatable - ^10.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^2.x](https://image.intervention.io/v2)
- [Bootstrap - ^5.x](https://getbootstrap.com/)
  
#### Versi Lengkap

- [Yajra datatable - ^10.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^2.x](https://image.intervention.io/v2)
- [Laravel Forify - ^1.x](https://laravel.com/docs/9.x/fortify)
- [Spatie permission - ^5.x](https://github.com/spatie/laravel-permission)
- [Mazer template - ^2.x](https://github.com/zuramai/mazer/) 