---
outline: deep
---

# Cara Pakai yang <s>Semoga</s> Benar

### Buat _CRUD_ untuk pertama kalinya

Akses pada _browser_ kamu `/generators/create` jika kamu menggunkan [versi lengkap](features.md#versi-lengkap) `/simple-generators/create` untuk [versi sederhana](features.md#versi-sederhana)

Di bawah ini adalah tabel tentang jenis input & validasi yang didukung saat kamu menggunakan beberapa jenis kolom.

|Jenis Kolom|Jenis Input|Validasi|
|-----------|----------|----------|
|`string`|`text, textarea, email, telephone, password, url, search, file, hidden`| `required, string, min, max`|
|`boolean`|`radio, select, datalist`|`required, boolean`|
|`char`|`text, color, week, email, telephone, password, url, search, file, hidden`|`required, string, min, max`|
|`date`|`date, month`|`required, date`|
|`time`|`time`|`required, date`|
|`year, foreignId`|`select, datalist`|`required, numeric`|
|`dateTime`|`datetime-local`|`required, date`|
|`float, decimal, double`|`number, range, hidden`|`required, numeric`|
|`enum`|`select, radio, datalist`|`required, in`|
|`integer, tinyInteger, mediumInteger, bigInteger`|`number, range, hidden`|`required, numeric`|
|`text, tinyText, mediumText, longText`|`text, textarea, email, telephone, password, url, search, file, hidden`|`required, string, min, max`|

:::info
Validasi `required` akan berubah menjadi `nullable` jika kamu tidak mencentang _checkbox_ yang terdapat pada _form_, jika ada jenis input `password` akan otomatis ditambahkan validasi `confirmed`, `min:1|max:100` untuk teks dan `email|unique` untuk jenis input `email`.
:::

:::info
<img src="/404.png" alt="404 Laravel" style="display: block; margin-left: auto; margin-right: auto; width: 50%; border-radius: 5px"/>

Setelah membuat modul baru terkadang mungkin kamu akan mendapati `404`, jika iya, kamu hanya perlu melakukan _refresh_ pada _browser_ mu.
:::


## Membuat relasi model

![Pembuatan Relasi](https://user-images.githubusercontent.com/62506582/230761648-1ef36018-2486-424b-831f-ae5f74a66705.png)

Sayangnya _Generator_ saat ini hanya mendukung [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse).

Terdapat beberapa aturan yang harus diikuti jika kamu ingin membuat relasi:

- Nama Kolom: 
    - Harus merupakan nama tabel tetapi dalam bentuk tunggal + `_id`, misalnya: jika kamu memiliki tabel `users` maka harus `user_id`.
- Jenis Kolom:
    - Diubah menjadi `foreignId`.
    - Untuk _constrains_ atau nama model terkait, kamu bisa mengisi dengan nama tabel (secara otomatis berubah menjadi jamak).
    - Aksi pada ubah/edit & penghapusan:
        - Pada ubah/edit: `nothing, cascade, restrict`
        - Pada penghapusan: `nothing, cascade, restrict, null`

:::info
Pastikan tabel & model terkait sudah ada, jika tidak maka kolom yang dipilih untuk ditampilkan di `<select>` atau `<datalist>` adalah `id` dan akan mendapati error ketika kamu mengakses halaman terkait, secara _default_ kolom yang dipilih adalah kolom kedua di tabel relasi.
:::

## Membuat Unggah File

![Unggah File](https://user-images.githubusercontent.com/62506582/231070943-cc1f13fd-0ee5-47f1-baaf-fb1e66e93ab5.png)

Atur jenis kolom menjadi `string`, jenis input menjadi `file`, pilih jenis file (saat ini hanya mendukung gambar), isi ukuran maksimal, dan nilai _default_ bersifat opsional (harus berupa tautan yang valid)

Juga kami menggunakan [Intervention Image](https://image.intervention.io/v2) untuk memanipulasi gambar yang diunggah
semua konfigurasi untuk gambar kamu dapat melihatnya di `config/generator.php`

Konfigurasi gambar default:

```php
"image" => [
    /**
    * Path for store the image.
    *
    * Available options:
    * 1. public
    * 2. storage
    * 3. s3
    */
    "disk" => "storage",  // [!code focus]

    /**
    * Will used if image is nullable and default value is null.
    */
    "default" => "https://via.placeholder.com/350?text=No+Image+available",  // [!code focus]

    /**
    * Crop the uploaded image using intervention image.
    */
    "crop" => true,  // [!code focus]

    /**
    * When set to true the uploaded image aspect ratio will still original.
    */
    "aspect_ratio" => true, // [!code focus]

    /**
    * Crop image size.
    */
    "width" => 500, // [!code focus]
    "height" => 500, // [!code focus]
],
```
:::info
Jika kamu menggunakan `storage` untuk menyimpan gambar, pastikan kamu menjalankan perintah dibawah ini 

```sh
php artisan storage:link
```
Atau jika kamu ingin menggunakan `s3` untuk menyimpan gambar, pastikan kamu melihat dokumentasinya [disini](https://laravel.com/docs/10.x/filesystem#s3-driver-configuration)
:::


## Membuat menu _Sidebar_

![Membuat menu Sidebar](https://user-images.githubusercontent.com/62506582/230722893-f11aae2c-4407-4eaf-803e-3b8491269e40.png)

:::info
Fitur ini hanya tersedia di versi lengkap.
:::

kamu dapat dengan mudah membuat menu _Sidebar_ dinamis dengan hanya beberapa input. semua konfigurasi menu _Sidebar_ berada di `config/generator.php`


Bagaimana jika kamu tidak membutuhkan menu _Sidebar_ dinamis?, kamu hanya ingin membuat menu langusng pada kode `.blade`. ya, tenang kami sudah menyediakannya, [kamu dapat melihatnya disni](features.md#tetapkan-menu-sidebar).


## Hak Akses (Role & Permissions)

Saat kamu menggunakan versi lengkap, setelah membuat modul baru akan secara otomatis membuatkan beberapa _Permissions_ dan mengaitkannya ke _Role_ admin. semua konfigurasi _permissions_ disimpan di `config/permission.php`

Berikut contohnya:
```php
[
    'group' => 'products',  // [!code focus]
    'access' => [  // [!code focus]
        'product view',  // [!code focus]
        'product create',  // [!code focus]
        'product edit',  // [!code focus]
        'product delete'  // [!code focus]
    ]// [!code focus]
],
```
## Membuat _API CRUD_

Sebelum kamu menggunakan fitur ini, pastikan kamu sudah meng-_install_ dan membaca dokumentasi terbaru [Laravel 11](https://laravel.com/) mengenai _API_

1. Jalankan perintah berikut

```sh
php artisan install:api
```

2. Pastikan _file_ `routes/api.php` ada
3. Tambahkan kode berikut pada `bootstrap/app.php` _file_

```php
->withRouting(
    api: __DIR__ . '/../routes/api.php', // [!code focus]
    web: __DIR__ . '/../routes/web.php',
    commands: __DIR__ . '/../routes/console.php',
    health: '/up',
)
```
Lalu menuju `/generators-api/create` untuk [versi lengkap](get-started#versi-lengkap) dan `/simple-generators/create` untuk [versi sederhana](get-started#versi-sederhana), sisanya lakukan hal yang sama seperti kamu membuat _CRUD_ diatas.

:::info
Jika kamu menggunakan _Generator API_ dan [versi lengkap](get-started#versi-lengkap), kamu tidak dapat membuat menu _Sidebar_
:::