---
outline: deep
---

# Cara Pakai yang <s>Semoga</s> Benar

### Buat _CRUD_ untuk pertama kali

Akses pada _browser_ Kamu `/generators/create` jika Kamu menggunkan [versi lengkap](features.md#versi-lengkap) `/simple-generators/create` untuk [versi sederhana](features.md)

Di bawah ini adalah tabel tentang jenis input & validasi yang didukung saat Kamu menggunakan beberapa jenis kolom.

|Jenis Kolom|Jenis Input|Validasi|Panjang (min & maks)|
|-----------|----------|----------|------------------|
|`string`|`text, textarea, email, telephone, password url, search, file, hidden`| `required, string`| ✅ |
|`integer`|`number, range, hidden`|`required, numeric`| ✅ |
|`text`|`text, textarea, email, telephone, password url, search, file, hidden`|`required, string`| ✅ |
|`boolean`|`radio, select, datalist`|`required, boolean`| ❌ |
|`char`|`text, color, week, email, telephone, password url, search, file, hidden`|`required, string`| ✅ |
|`date`|`date, month`|`required, date`| ❌ |
|`time`|`time`|`required, date`| ❌ |
|`year`|`select, datalist`|`required, numeric`| ❌ |
|`dateTime`|`datetime-local`|`required, date`| ❌ |
|`decimal`|`number, range, hidden`|`required, numeric`| ❌ |
|`double`|`number, range, hidden`|`required, numeric`| ❌ |
|`enum`|`select, radio, datalist`|`required, in`| ❌ |
|`float`|`number, range, hidden`|`required, numeric`| ❌ |
|`foreignId`|`select, datalist`|`required, exist`| ❌ |
|`tinyInteger`|`number, range, hidden`|`required, numeric`| ❌ |
|`mediumInteger`|`number, range, hidden`|`required, numeric`| ❌ |
|`bigInteger`|`number, range, hidden`|`required, numeric`| ❌ |
|`tinyText`|`text, textarea, email, telephone, password url, search, file, hidden`|`required, string`| ✅ |
|`mediumText`|`text, textarea, email, telephone, password url, search, file, hidden`|`required, string`| ✅ |
|`longText`|`text, textarea, email, telephone, password url, search, file, hidden`|`required, string`| ✅ |


:::info
Validasi `required` akan berubah menjadi `nullable` jika Kamu tidak mencentang _checkbox_ yang terdapat pada _form_, jika ada jenis input `password` akan otomatis ditambahkan validasi `confirmed`, `min:1|max:100` untuk teks dan `email|unique` untuk jenis input `email`.
:::


## Membuat relasi model

![Pembuatan Relasi](https://user-images.githubusercontent.com/62506582/230761648-1ef36018-2486-424b-831f-ae5f74a66705.png)

Sayangnya _Generator_ saat ini hanya mendukung [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse).

Terdapat beberapa aturan yang harus diikuti jika Kamu ingin membuat relasi:

- Nama Kolom: 
    - Harus merupakan nama tabel tetapi dalam bentuk tunggal + `_id`, misalnya: jika kita memiliki tabel `users` maka harus `user_id`.
- Jenis Kolom:
    - Diubah menjadi `foreignId`.
    - Untuk _constrains_ atau nama model terkait, Kamu bisa mengisi dengan nama tabel (secara otomatis berubah menjadi jamak).
    - Aksi pada ubah/edit & penghapusan:
        - Pada ubah/edit: `nothing, cascade, restrict`
        - Pada penghapusan: `nothing, cascade, restrict, null`

> Pastikan tabel & model terkait sudah ada, jika tidak maka kolom yang dipilih untuk ditampilkan di `select`/`datalist` adalah `id`, secara _default_ kolom yang dipilih adalah kolom kedua di tabel terkait.

## Membuat Unggah File

![Unggah File](https://user-images.githubusercontent.com/62506582/231070943-cc1f13fd-0ee5-47f1-baaf-fb1e66e93ab5.png)

Atur jenis kolom menjadi `string`, jenis input menjadi `file`, pilih jenis file (saat ini hanya mendukung gambar), isi ukuran maksimal (opsional), dan nilai _default_ (harus berupa tautan yang valid), juga kami menggunakan [Intervention Image](https://image.intervention.io/v2) untuk memanipulasi gambar yang diunggah. semua konfigurasi untuk gambar tersedia di `config/generator.php`.

Konfigurasi gambar default:
```php
'image' => [
    /**
    * Tempat untuk menyimpan gambar.
    *
    * opsi yang tersedia:
    * 1. public
    * 2. storage
    */
    'path' => 'storage',

    /**
    * Akan digunakan jika gambar nullable dan nilai default adalah null.
    */
    'default' => 'https://via.placeholder.com/350?text=No+Image+available',

     /**
    * Memotong gambar yang diunggah menggunakan Intervention Image.
    */
    'crop' => true,

      /**
    * Jika diatur ke true, rasio aspek gambar yang diunggah akan tetap asli.
    */
    'aspect_ratio' => true,

    /**
    * Potong ukuran gambar.
    */
    'width' => 500,
    'height' => 500,
],
```

:::info
Jika Kamu menggunakan `storage` untuk menyimpan gambar, pastikan Kamu menjalankan 
```sh
php artisan storage:link
```
:::


## Membuat menu _Sidebar_

![Membuat menu Sidebar](https://user-images.githubusercontent.com/62506582/230722893-f11aae2c-4407-4eaf-803e-3b8491269e40.png)

:::info
Fitur ini hanya tersedia di versi lengkap.
:::

Kamu dapat dengan mudah membuat menu sidebar dinamis dengan hanya beberapa input. semua konfigurasi menu sidebar berada di `config/generator.php`


Bagaimana jika Kamu tidak membutuhkan menu sidebar dinamis, Kamu hanya ingin membuat menu Kamu langusng pada `.blade`. ya, tenang kami sudah menyediakannya, [kamu dapat melihatnya disni](features.md#tetapkan-menu-sidebar).


## Hak Akses (Role & Permissions)

Saat Kamu menggunakan versi lengkap, setelah membuat modul baru akan secara otomatis membuatkan beberapa _permissions_ dan mengaitkannya ke _Role_ admin. semua konfigurasi _permissions_ disimpan di `config/permission.php`

Berikut contohnya:
```php
[
    'group' => 'products',
    'access' => [
        'product view',
        'product create',
        'product edit',
        'product delete'
    ]
],
```
## Membuat _API CRUD_

Sebelum Kamu menggunakan fitur ini, pastikan kamu sudah meng-_install_ dan membaca dokumentasi terbaru [Laravel 11](#) mengenai _API_

Jalankan perintah berikut
```sh
php artisan api:install
```
Lalu menuju `/generators-api/create` untuk [versi lengkap](#) lalu `/simple-generators/create` untuk [versi sederhana](#), dan sisanya lakukan hal yang sama seperti kamu membuat _CRUD_ diatas.

:::info
Jika kamu menggunakan _Generator API_ dan [versi lengkap](#), kamu tidak dapat membuat menu _Sidebar_
:::

## Konfigurasi

Di bawah ini adalah konfigurasi _default_ untuk generator dan menu sidebar:

```php
return [
    /**
     * If any input file(image) as default will use options below.
     */
    "image" => [
        /**
         * Path for store the image.
         *
         * Available options:
         * 1. public
         * 2. storage
         * 3. S3
         */
        "disk" => "storage",

        /**
         * Will be used if image is nullable and default value is null.
         */
        "default" => "https://via.placeholder.com/350?text=No+Image+Avaiable",

        /**
         * Crop the uploaded image using intervention image.
         */
        "crop" => true,

        /**
         * When set to true the uploaded image aspect ratio will still original.
         */
        "aspect_ratio" => true,

        /**
         * Crop image size.
         */
        "width" => 500,
        "height" => 500,
    ],

    "format" => [
        /**
         * Will be used to first year on select, if any column type year.
         */
        "first_year" => 1970,

        /**
         * If any date column type will cast and display used this format, but for input date still will used Y-m-d format.
         *
         * another most common format:
         * - M d Y
         * - d F Y
         * - Y m d
         */
        "date" => "Y-m-d",

        /**
         * If any input type month will cast and display used this format.
         */
        "month" => "Y/m",

        /**
         * If any input type time will cast and display used this format.
         */
        "time" => "H:i",

        /**
         * If any datetime column type or datetime-local on input, will cast and display used this format.
         */
        "datetime" => "Y-m-d H:i:s",

        /**
         * Limit string on index view for any column type text or long text.
         */
        "limit_text" => 100,
    ],

    /**
     * It will be used for generator to manage and showing menus on sidebar views.
     *
     * Example:
     * [
     *   'header' => 'Main',
     *
     *   // All permissions in menus[] and submenus[]
     *   'permissions' => ['test view'],
     *
     *   menus' => [
     *       [
     *          'title' => 'Main Data',
     *          'icon' => '<i class="bi bi-collection-fill"></i>',
     *          'route' => null,
     *
     *          // permission always null when isset submenus
     *          'permission' => null,
     *
     *          // All permissions on submenus[] and will empty[] when submenus equals to []
     *          'permissions' => ['test view'],
     *
     *          'submenus' => [
     *                 [
     *                     'title' => 'Tests',
     *                     'route' => '/tests',
     *                     'permission' => 'test view'
     *                  ]
     *               ],
     *           ],
     *       ],
     *  ],
     *
     * This code below always changes when you use a generator, and maybe you must format the code.
     */
    "sidebars" => [
        [
            "header" => "Main",
            "permissions" => ["test view"],
            "menus" => [
                [
                    "title" => "Main Data",
                    "icon" => '<i class="bi bi-collection-fill"></i>',
                    "route" => null,
                    "permission" => null,
                    "permissions" => ["test view"],
                    "submenus" => [
                        [
                            "title" => "Tests",
                            "route" => "/tests",
                            "permission" => "test view",
                        ],
                    ],
                ],
            ],
        ],
        [
            "header" => "Users",
            "permissions" => ["user view", "role & permission view"],
            "menus" => [
                [
                    "title" => "Users",
                    "icon" => '<i class="bi bi-people-fill"></i>',
                    "route" => "/users",
                    "permission" => "user view",
                    "permissions" => [],
                    "submenus" => [],
                ],
                [
                    "title" => "Roles & permissions",
                    "icon" => '<i class="bi bi-person-check-fill"></i>',
                    "route" => "/roles",
                    "permission" => "role & permission view",
                    "permissions" => [],
                    "submenus" => [],
                ],
            ],
        ],
    ],
];

```