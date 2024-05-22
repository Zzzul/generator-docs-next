# Apa Aja sih, yang Baru?

Setiap perubahan itu pasti ada dan wajar, jadi Kami harap Kamu dapat menerima perubahan ini yaa.

## Perubahan dengan Versi Terbaru
1. Minimal [Laravel 11.x](#)

    Karena [Laravel 11.x](#) memiliki perbedaan yang sangat signifikan dengan versi sebelumya, maka Kami memutuskan untuk tidak melanjutkan dukungan ke [Laravel 10.x](#), dan minimal Laravel yang didukung adalah [Laravel 11.x](#)

2. Memperbaharui beberapa pustaka yang diperlukan, antara lain:
    - [Intervention Image v3.x](#)
    - [Yajra Datatable v11.x](#)
    - [Spatie Permission v6.x](#)

        dan untuk pustaka yang diguanakan dalam proses pengembangan, yaitu:
    - [Larastan v2.x](#)
    - [PHPinsights v2.x](#)
    - [Testbench v9.x](#)

Untuk melihat _Changelog_ yang terbaru dan lebih lengkap, silahkan kunjungi [Github Releases](https://github.com/evdigiina/generator/releases)

## Cara Memperbaharui

1. Jika Kamu masih menggunakan [Laravel v10.x](#), silahkan memperbaharui Laravel Kamu ke versi [11.x](#)
2. Menjalankan perintah berikut:

    ```sh
    composer update evdigiina/generator:0.3.0 --dev
    ```
3. Publikasikan beberapa berkas terbaru

    ```sh
    php artisan generator:publish utils
    ```
4. Tambahkan beberapa baris kode berikut pada `resources/views/layouts/sidebar.blade.php`
    ```blade
    {{-- Kode baru --}}
    @auth
        <li class="sidebar-item{{ request()->is('/') || request()->is('dashboard') ? ' active' : '' }}">
            <a class="sidebar-link" href="/">
                <i class="bi bi-speedometer"></i>
                <span> {{ __('Dashboard') }}</span>
            </a>
        </li>
    @endauth

    @foreach (config('generator.sidebars') as $sidebar)
        {{-- Kode menu sidebar kamu --}}
    @enforeach

    {{-- Kode baru --}}
    @if (env('APP_ENV') === 'local')
        <li class="sidebar-title">{{ __('Generators') }}</li>

        <li class="sidebar-item{{ request()->is('generators/create') ? ' active' : '' }}">
            <a class="sidebar-link" href="{{ route('generators.create') }}">
                <i class="bi bi-fire"></i>
                <span>{{ __('CRUD Generator') }}</span>
            </a>
        </li>

        <li class="sidebar-item{{ request()->is('api-generators/create') ? ' active' : '' }}">
            <a class="sidebar-link" href="/api-generators/create">
                <i class="bi bi-rocket"></i>
                <span>{{ __('API CRUD Generator') }}</span>
            </a>
        </li>

        <li class="sidebar-item{{ request()->is('simple-generators/create') ? ' active' : '' }}">
            <a class="sidebar-link" href="/simple-generators/create">
                <i class="bi bi-droplet"></i>
                <span>{{ __('Simple CRUD Generator') }}</span>
            </a>
        </li>
    @endif

    {{-- Kode baru --}}
    @auth
        <li class="sidebar-title">Account</li>

        <li class="sidebar-item{{ request()->is('profile') ? ' active' : '' }}">
            <a class="sidebar-link" href="{{ route('profile') }}">
                <i class="bi bi-person-badge-fill"></i>
                <span>{{ __('Profile') }}</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="{{ route('logout') }}"
            onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <i class="bi bi-door-open-fill"></i>
                <span>{{ __('Logout') }}</span>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </li>
    @endauth

    ```    

## Fitur Terbaru
Fitur-fitur baru yang ditambahkan pada _Generator v0.3.x_

1. <small>(beta)</small> _Generator_ dapat membuat _Seeder_ dan _Factory_

2. <small>(beta)</small> _CRUD API Generator_ :fire:

    Sekarang Kamu dapat membuat API dengan cepat dan mudah dengan menggunakan _CRUD API Generator_.

3. _Single Form_

    Melakukan operasi _CRU_<s>D</s>  dalam 1 halaman dan 1 form, fitur ini cocok bagi Kamu yang ingin membuat halaman seperti _Setting_, web profil, dan fitur lain yang hanya memiliki 1 data saja.

4. Menambahkan kelas utilitas terbaru [ImageService](features.md#imageservice) kelas.

    Kelas ini digunakan untuk melakukan fungsi unggah dan manipulasi gambar menggunakan [Intervention Image](#)

5. Memambahkan opsi baru pada konfigurasi `generator.image.disk` sebelumnya `generator.image.path`, sekarang Kamu bisa menggunakan opsi `public`, `storage` atau `s3`.
berikut contohnya:
```php
"image" => [
    /**
     * Lokasi penyimpanan gambar
     *
     * Opsi tersedia:
     * 1. public
     * 2. storage
     * 3. S3
     *
     * ganti path menjadi disk
    */
    "disk" => "storage",
    
    // kode konfigurasi lainnya.
]
```
Untuk menggunakan opsi `s3` kamu harus membaca dokumentasi terkait [disni](https://laravel.com/docs/11.x/filesystem#amazon-s3-compatible-filesystems).

Dan jika Kamu menggunakan opsi `storage` untuk menyimpan gambar, pastikan Kamu menjalankan 
```sh
php artisan storage:link
```

Jika kamu ingin melihat konfigurasi terbaru ada dibawah berikut:
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

5. Web dokumentasi terbaru :book:

    Karena Kami merasa kesulitan untuk membuat beberapa dokumentasi dalam beberapa versi (_versioning_) dan multi bahasa menggunakan [MkDocs](https://www.mkdocs.org/), oleh karena itu Kami memutuskan untuk membuat dokumentasi terbaru menggunakan [Vitepress](https://vitepress.dev/).



