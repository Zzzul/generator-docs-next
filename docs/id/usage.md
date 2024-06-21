---
outline: deep
---

# Cara Pakai yang <s>Semoga</s> Benar

### Buat _CRUD_ untuk pertama kalinya

Akses pada _browser_ Kamu `/generators/create` jika Kamu menggunkan [versi lengkap](features.md#versi-lengkap) `/simple-generators/create` untuk [versi sederhana](features.md#versi-sederhana)

Di bawah ini adalah tabel tentang jenis input & validasi yang didukung saat Kamu menggunakan beberapa jenis kolom.

|Jenis Kolom|Jenis Input|Validasi|Panjang (min & maks)|
|-----------|----------|----------|------------------|
|`string`|`text, textarea, email, telephone, password, url, search, file, hidden`| `required, string`| ✅ |
|`boolean`|`radio, select, datalist`|`required, boolean`| ❌ |
|`char`|`text, color, week, email, telephone, password, url, search, file, hidden`|`required, string`| ✅ |
|`date`|`date, month`|`required, date`| ❌ |
|`time`|`time`|`required, date`| ❌ |
|`year, foreignId`|`select, datalist`|`required, numeric`| ❌ |
|`dateTime`|`datetime-local`|`required, date`| ❌ |
|`float, decimal, double`|`number, range, hidden`|`required, numeric`| ❌ |
|`enum`|`select, radio, datalist`|`required, in`| ❌ |
|`integer, tinyInteger, mediumInteger, bigInteger`|`number, range, hidden`|`required, numeric`| ❌ |
|`text, tinyText, mediumText, longText`|`text, textarea, email, telephone, password, url, search, file, hidden`|`required, string`| ✅ |

:::info
Validasi `required` akan berubah menjadi `nullable` jika Kamu tidak mencentang _checkbox_ yang terdapat pada _form_, jika ada jenis input `password` akan otomatis ditambahkan validasi `confirmed`, `min:1|max:100` untuk teks dan `email|unique` untuk jenis input `email`.
:::

:::info
<img src="/404.png" alt="404 Laravel" style="display: block; margin-left: auto; margin-right: auto; width: 50%; border-radius: 5px"/>

Setelah membuat modul baru terkadang mungkin kamu akan mendapati `404`, jika iya, kamu hanya perlu melakukan _refresh_ pada _browser_ mu.
:::


## Membuat relasi model

![Pembuatan Relasi](https://user-images.githubusercontent.com/62506582/230761648-1ef36018-2486-424b-831f-ae5f74a66705.png)

Sayangnya _Generator_ saat ini hanya mendukung [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse).

Terdapat beberapa aturan yang harus diikuti jika Kamu ingin membuat relasi:

- Nama Kolom: 
    - Harus merupakan nama tabel tetapi dalam bentuk tunggal + `_id`, misalnya: jika Kamu memiliki tabel `users` maka harus `user_id`.
- Jenis Kolom:
    - Diubah menjadi `foreignId`.
    - Untuk _constrains_ atau nama model terkait, Kamu bisa mengisi dengan nama tabel (secara otomatis berubah menjadi jamak).
    - Aksi pada ubah/edit & penghapusan:
        - Pada ubah/edit: `nothing, cascade, restrict`
        - Pada penghapusan: `nothing, cascade, restrict, null`

:::info
Pastikan tabel & model terkait sudah ada, jika tidak maka kolom yang dipilih untuk ditampilkan di `<select>` atau `<datalist>` adalah `id` dan akan mendapati error ketika kamu mengakses halaman terkait, secara _default_ kolom yang dipilih adalah kolom kedua di tabel relasi.
:::

## Membuat Unggah File

![Unggah File](https://user-images.githubusercontent.com/62506582/231070943-cc1f13fd-0ee5-47f1-baaf-fb1e66e93ab5.png)

Atur jenis kolom menjadi `string`, jenis input menjadi `file`, pilih jenis file (saat ini hanya mendukung gambar), isi ukuran maksimal, dan nilai _default_ bersifat opsional (harus berupa tautan yang valid), juga kami menggunakan [Intervention Image](https://image.intervention.io/v2) untuk memanipulasi gambar yang diunggah. semua konfigurasi untuk gambar tersedia di `config/generator.php`.

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

Sebelum Kamu menggunakan fitur ini, pastikan kamu sudah meng-_install_ dan membaca dokumentasi terbaru [Laravel 11](https://laravel.com/) mengenai _API_

Jalankan perintah berikut
```sh
php artisan api:install
```
Lalu menuju `/generators-api/create` untuk [versi lengkap](get-started#versi-lengkap) dan `/simple-generators/create` untuk [versi sederhana](get-started#versi-sederhana), sisanya lakukan hal yang sama seperti kamu membuat _CRUD_ diatas.

:::info
Jika kamu menggunakan _Generator API_ dan [versi lengkap](get-started#versi-lengkap), kamu tidak dapat membuat menu _Sidebar_
:::

<!-- ## Konfigurasi

Di bawah ini adalah konfigurasi _default_ untuk generator dan menu sidebar:
```php
return [
    /**
     * Jika ada file input (gambar) sebagai default akan digunakan opsi di bawah ini.
     */
    "image" => [
        /**
         * Tempat untuk menyimpan gambar.
         *
         * Opsi tersedia:
         * 1. public
         * 2. storage
         * 3. S3
         */
        "disk" => "storage",

        /**
         * Akan digunakan jika gambar nullable dan nilai default adalah null.
         */
        "default" => 'https://via.placeholder.com/350?text=No+Image+available',

        /**
         * Memotong gambar yang diunggah menggunakan intervention image.
         */
        "crop" => true,

       /**
         * Jika diatur ke true, rasio aspek gambar yang diunggah akan tetap asli.
         */
        "aspect_ratio" => true,

        /**
         * Potong ukuran gambar.
         */
        "width" => 500,
        "height" => 500,
    ],

    "format" => [
        /**
         * Akan digunakan untuk tahun pertama pada select, jika ada jenis kolom tahun.
         */
        "first_year" => 1970,

         /**
         * Jika ada jenis kolom tanggal akan di-cast dan ditampilkan menggunakan format ini, tetapi untuk input tanggal masih akan digunakan format Y-m-d.
         *
         * format umum lainnya:
         * - M d Y
         * - d F Y
         * - Y m d
         */
        "date" => "Y-m-d",

        /**
         * Jika ada jenis input bulan akan di-cast dan ditampilkan menggunakan format ini.
         */
        "month" => "Y/m",

         /**
         * Jika ada jenis input waktu akan di-cast dan ditampilkan menggunakan format ini.
         */
        "time" => "H:i",

       /**
         * Jika ada jenis kolom datetime atau datetime-local pada input, akan di-cast dan ditampilkan menggunakan format ini.
         */
        "datetime" => "Y-m-d H:i:s",

        /**
         * Batas string pada tampilan indeks untuk jenis kolom text atau longtext.
         */
        "limit_text" => 100,
    ],

    /**
     * Ini akan digunakan untuk generator untuk mengelola dan menampilkan menu di tampilan sidebar.
     *
     * Contoh:
     * [
     *   'header' => 'Main',
     *
     *   // Semua izin di menus[] dan submenus[]
     *   'permissions' => ['test view'],
     *
     *   menus' => [
     *       [
     *          'title' => 'Main Data',
     *          'icon' => '<i class="bi bi-collection-fill"></i>',
     *          'route' => null,
     *
     *          // izin selalu null ketika ada submenus
     *          'permission' => null,
     *
     *          // Semua izin di submenus[] dan akan kosong[] ketika submenus sama dengan []
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
     * Kode di bawah ini selalu berubah ketika Kamu menggunakan generator dan terkadang Kamu harus merapikan atau mmem-format kodenya.
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

``` -->