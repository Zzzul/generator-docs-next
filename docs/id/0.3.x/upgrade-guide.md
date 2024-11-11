---
outline: deep
lastUpdated: true
editLink: true
title: Pembaruan
titleTemplate: Update untuk pengalaman yang lebih baik
description: Update Generator ke versi terakhir
head:
  - - meta
    - name: description
      content: Update Generator ke versi terakhir
  - - meta
    - name: keywords
      content: Pembaruan Generator
next: true
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi _Generator_ yang lama nih. Tolong pertimbangkan untuk memperbarui proyek kamu ke versi [Generator 0.4](/id/introduction) yaa.
:::

# Apa aja sih yang baru?

Setiap perubahan itu pasti ada dan wajar, jadi kami harap kamu dapat menerima perubahan ini yaa.

## Perubahan dengan versi terbau

1. Minimal [Laravel 11.x](https://laravel.com/docs/11.x/upgrade)

   Karena [Laravel 11.x](https://laravel.com) berbeda secara signifikan dari versi sebelumnya, jadi kami memutuskan untuk menghentikan dukungan untuk [Laravel 10](https://laravel.com/docs/10.x). Versi terendah yang didukung saat ini adalah [Laravel 11](https://laravel.com/docs/11.x/upgrade)

2. Memperbarui beberapa pustaka yang dibutuhkan:

   - [Intervention Image v3.x](https://image.intervention.io/v3)
   - [Yajra Datatable v11.x](https://yajrabox.com/docs/laravel-datatables/11.0)
   - [Spatie Permission v6.x](https://spatie.be/docs/laravel-permission/v6/introduction)

   Dan yang dibutuhkan untuk proses pengembangan:

   - [Larastan v2.x](https://github.com/larastan/larastan)
   - [PHPinsights v2.x](https://phpinsights.com/)
   - [Testbench v9.x](https://packages.tools/testbench.html)

3. Menghapus (opsional) `App\Generators\GeneratorUtils` kelas dan melakukan perubahan pada _helper_ kelas, [Disini untuk lebih lanjut](#how-to-update)

4. Memperbaiki _Bug_ dan _Error_

Untuk daftar perubahan terbaru dan lebih lengkap, silakan kunjungi [GitHub Rilis](https://github.com/evdigiina/generator/releases)

## Cara memperbarui

1. Jika kamu masih menggunakan [Laravel 10.x](https://laravel.com/docs/10.x), harap pertimbangkan untuk membaca [Panduan peningkatan Laravel 11.x](https://laravel.com/docs/11.x/updgrade)

2. Ubah pustaka berikut pada `composer.json`

   ```json
   "require": {
        "laravel/framework": "^11.0", // [!code focus]
   },
   "require-dev": {
        "nunomaduro/collision": "^8.1", // [!code focus]
        "evdigiina/generator": "^0.3.0",  // [!code focus]
   }
   ```

Opsional, jika kamu menggunakannya

```json
"require": {
     "spatie/laravel-permission": "^6.0", // [!code focus]
     "laravel/fortify": "^1.21" // [!code focus]
},
```

Lalu jalankan perintah berikut

```sh
composer update
```

3. Publikasikan berkas terbaru

   ```sh
   php artisan generator:publish-utils
   ```

4. Tambahkan kode berikut pada `resources/views/layouts/sidebar.blade.php`

   ```blade
    <ul class="menu">
        {{-- New code --}}
        @auth // [!code focus]
            <li class="sidebar-item{{ request()->is('/') || request()->is('dashboard') ? ' active' : '' }}"> // [!code focus]
                <a class="sidebar-link" href="/"> // [!code focus]
                    <i class="bi bi-speedometer"></i> // [!code focus]
                    <span> {{ __('Dashboard') }}</span> // [!code focus]
                </a> // [!code focus]
            </li> // [!code focus]
        @endauth // [!code focus]

        {{-- Your sidebar code --}}
        @foreach (config('generator.sidebars') as $sidebar)
            {{-- ... --}}
        @endforeach

        {{-- New code --}}
        @if (env('APP_ENV') === 'local') // [!code focus]
            <li class="sidebar-title">{{ __('Generators') }}</li> // [!code focus]

            <li class="sidebar-item{{ request()->is('generators/create') ? ' active' : '' }}"> // [!code focus]
                <a class="sidebar-link" href="{{ route('generators.create') }}"> // [!code focus]
                    <i class="bi bi-fire"></i> // [!code focus]
                    <span>{{ __('CRUD Generator') }}</span> // [!code focus]
                </a> // [!code focus]
            </li> // [!code focus]

            <li class="sidebar-item{{ request()->is('api-generators/create') ? ' active' : '' }}"> // [!code focus]
                <a class="sidebar-link" href="/api-generators/create"> // [!code focus]
                    <i class="bi bi-rocket"></i> // [!code focus]
                    <span>{{ __('API CRUD Generator') }}</span> // [!code focus]
                </a> // [!code focus]
            </li> // [!code focus]

            <li class="sidebar-item{{ request()->is('simple-generators/create') ? ' active' : '' }}"> // [!code focus]
                <a class="sidebar-link" href="/simple-generators/create"> // [!code focus]
                    <i class="bi bi-droplet"></i> // [!code focus]
                    <span>{{ __('Simple CRUD Generator') }}</span> // [!code focus]
                    </a> // [!code focus]
                </li> // [!code focus]
            @endif // [!code focus]

        {{-- New code --}}
        @auth // [!code focus]
            <li class="sidebar-title">Account</li>// [!code focus]

            <li class="sidebar-item{{ request()->is('profile') ? ' active' : '' }}"> // [!code focus]
                <a class="sidebar-link" href="{{ route('profile') }}"> // [!code focus]
                    <i class="bi bi-person-badge-fill"></i> // [!code focus]
                    <span>{{ __('Profile') }}</span> // [!code focus]
                </a> // [!code focus]
            </li> // [!code focus]

            <li class="sidebar-item"> // [!code focus]
                <a class="sidebar-link" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"> // [!code focus]
                    <i class="bi bi-door-open-fill"></i> // [!code focus]
                    <span>{{ __('Logout') }}</span> // [!code focus]
                </a> // [!code focus]

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none"> // [!code focus]
                    @csrf // [!code focus]
                </form> // [!code focus]
            </li> // [!code focus]
        @endauth // [!code focus]
    </ul>

   ```

5. Ubah kode pada `resources/views/layouts/header.blade.php` menjadi seperti dibawah ini

   ```blade
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav ms-auto mb-lg-0">
           {{-- Your code --}}
       </ul>

       {{-- New code --}}
       @auth // [!code focus]
           <div class="dropdown"> // [!code focus]
               <a href="#" data-bs-toggle="dropdown" aria-expanded="false"> // [!code focus]
                   <div class="user-menu d-flex"> // [!code focus]
                       <div class="user-name text-end me-3"> // [!code focus]
                           <h6 class="mb-0 text-gray-600">{{ auth()?->user()?->name }}</h6> // [!code focus]
                           <p class="mb-0 text-sm text-gray-600"> // [!code focus]
                               {{ isset(auth()?->user()?->roles) ? implode(auth()?->user()?->roles?->map(fn ($role) => $role->name)->toArray()) : '-' }} // [!code focus]
                           </p> // [!code focus]
                       </div> // [!code focus]
                       <div class="user-img d-flex align-items-center"> // [!code focus]
                           <div class="avatar avatar-md"> // [!code focus]
                               @if (auth()?->user()?->avatar == null) // [!code focus]
                                   <img src="https://www.gravatar.com/avatar/{{ md5(strtolower(trim(auth()?->user()?->email))) }}&s=500" alt="Avatar"> // [!code focus]
                               @else // [!code focus]
                                   <img src="{{ asset('storage/uploads/avatars/' . auth()?->user()?->avatar) }}" alt="Avatar"> // [!code focus]
                               @endif // [!code focus]
                           </div> // [!code focus]
                       </div> // [!code focus]
                   </div> // [!code focus]
               </a> // [!code focus]

               <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton" style="min-width: 11rem;"> // [!code focus]
                   <li> // [!code focus]
                       <h6 class="dropdown-header">{{ __('Hello') }}, {{ auth()?->user()?->name }}!</h6> // [!code focus]
                   </li> // [!code focus]
                   <li> // [!code focus]
                       <a class="dropdown-item" href="{{ route('profile') }}"><i class="icon-mid bi bi-person-fill me-2"></i>{{ __('My Profile') }}</a> // [!code focus]
                   </li> // [!code focus]
                   <li> // [!code focus]
                       <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form-nav').submit();"> // [!code focus]
                           <i class="bi bi-door-open-fill"></i> // [!code focus]
                           {{ __('Logout') }} // [!code focus]
                       </a> // [!code focus]

                       <form id="logout-form-nav" action="{{ route('logout') }}" method="POST" class="d-none"> // [!code focus]
                           @csrf // [!code focus]
                       </form>  // [!code focus]
                   </li>  // [!code focus]
               </ul>  // [!code focus]
           </div>  // [!code focus]
       @endauth   // [!code focus]
   </div>
   ```

6. Buat file `generator.cache` di folder `storage` lalu _copy_ kode di bawah ini

   ```json
   { "simple_version_publish_count": 0, "full_version_publish_count": 1 }
   ```

:::info
Ubah `simple_version_publish_count` atau `full_version_publish_count` menjadi `1` sesuaikan dengan versi yang kamu gunakan
:::

7. Ubah `config/generator.php` dari `image.path` menjadi `image.disk`

   ```php
   "image" => [
       /**
        * Path for store the image.
        *
        * available options:
        * 1. public
        * 2. storage
       */
       "path" => "storage", // [!code focus]
   ]
   ```

   ```php
   "image" => [
       /**
        * Image storage location
        *
        * Available options:
        * 1. public
        * 2. storage
        * 3. S3
       */
       "disk" => "storage", // [!code focus]
       // ... another configuration
   ]
   ```

   Untuk informasi tambahan tentang perubahan ini, [buka di sini](#fitur-terbaru)

8. Jika kamu mendapation masalah berikut setelah membuat modul baru, silakan baca dokumentasi mengenai _Middleware_ Laravel 11 baru di _Controller_ [di sini](https://laravel.com/docs/11.x/controllers#controller-middleware)

   ![Error middleware](/error-middleware.png)

   Jika kamu tidak memerlukan _Middleware_, cukup hapus komentar pada kode tersebut atau gunakan gaya _Middleware_ Laravel 10 di bawah ini.

   ```php
    // comment code below
    public static function middleware(): array
    {
        return [
            // 'auth',

            // TODO: uncomment this code if you are using spatie permission
            // new Middleware('permission:permission_name view', only: ['index', 'show']),
            // new Middleware('permission:permission_name create', only: ['create', 'store']),
            // new Middleware('permission:permission_name edit', only: ['edit', 'update']),
            // new Middleware('permission:permission_name delete', only: ['destroy']),
        ];
    }
   ```

   Ubah menjadi Laravel 10 _Middleware_ seperti di bawah ini

   ```php
   public function __construct()
   {
       $this->middleware('permission:permission_name view')->only('index', 'show');
       $this->middleware('permission:permission_name create')->only('create', 'store');
       $this->middleware('permission:permission_name edit')->only('edit', 'update');
       $this->middleware('permission:permission_name delete')->only('destroy');
   }
   ```

   Dari

   ```php
   use Illuminate\Routing\Controllers\{HasMiddleware, Middleware}; // [!code focus]

   class YourController extends Controller implements HasMiddleware // [!code focus]
   {
       //...
   }
   ```

   Menjadi

   ```php
   // use Illuminate\Routing\Controllers\{HasMiddleware, Middleware}; // [!code focus]

   class YourController extends Controller  // [!code focus]
   {
       //...
   }
   ```

   Jangan lupa hapus atau berikan komentar pada kode `use Illuminate\Routing\Controllers\{HasMiddleware, Middleware};`

## Fitur Terbaru :fire:

Fitur terbaru yang ditambahkan pada versi _Generator ^0.3.x_:

1. <small>(beta)</small> Generator dapat membuat kelas _Seeder_ dan _Factory_

2. <small>(beta)</small> _CRUD API Generator_ :rocket:

   Sekarang kamu dapat membuat API yang cepat dan mudah menggunakan _CRUD API Generator_

3. _Single Form_

   Buat CRU<s>D</s> dalam satu halaman dan _Form_. Fitur ini ideal untuk membuat halaman seperti pengaturan, profil web, dan fitur lainnya yang hanya memiliki 1 data saja.

4. Menambahkan kelas terbaru [ImageService](features.md#imageservice)

   Kelas ini digunakan untuk melakukan unggah gambar dan manipulasi gambar menggunakan [Intervention Image](https://image.intervention.io/v3)

5. Menambahkan opsi baru ke konfigurasi `generator.image.disk`, yang sebelumnya adalah `generator.image.path`, kini kamu dapat menggunakan opsi `public`, `storage` atau `s3`. Berikut ini contohnya

```php
"image" => [
    /**
     * Image storage location
     *
     * Available options:
     * 1. public
     * 2. storage
     * 3. S3
     *
     * change path to disk
    */
    "disk" => "storage", // [!code focus]

    // other configuration codes.
]
```

Untuk menggunakan opsi `s3`, kamu harus membaca dokumentasi terkait [di sini](https://laravel.com/docs/11.x/filesystem#amazon-s3-kompatibel-filesystems)

Dan jika kamu menggunakan opsi `storage`, pastikan kamu menjalankan perintah berikut

```sh
php artisan storage:link
```

Jika ingin melihat konfigurasi terbarunya ada di bawah ini yaa:

```php
return [
    /**
     * If any input file(image) as default will use options below.
     */
    "image" => [  // [!code focus]
        /**
         * Image storage location
         *
         * Available options:
         * 1. public
         * 2. storage
         * 3. S3
         *
         * change path to disk
        */
        "disk" => "storage",  // [!code focus]

        /**
         * Will be used if image is nullable and default value is null.
         */
        "default" => "https://via.placeholder.com/350?text=No+Image+Avaiable",  // [!code focus]

        /**
         * Crop the uploaded image using intervention image.
         */
        "crop" => true,  // [!code focus]

        /**
         * When set to true the uploaded image aspect ratio will still original.
         */
        "aspect_ratio" => true,  // [!code focus]

        /**
         * Crop image size.
         */
        "width" => 500,  // [!code focus]
        "height" => 500,  // [!code focus]
    ],

    "format" => [  // [!code focus]
        /**
         * Will be used to first year on select, if any column type year.
         */
        "first_year" => 1970,  // [!code focus]

        /**
         * If any date column type will cast and display used this format, but for input date still will used Y-m-d format.
         *
         * another most common format:
         * - M d Y
         * - d F Y
         * - Y m d
         */
        "date" => "Y-m-d",  // [!code focus]

        /**
         * If any input type month will cast and display used this format.
         */
        "month" => "Y/m",  // [!code focus]

        /**
         * If any input type time will cast and display used this format.
         */
        "time" => "H:i",  // [!code focus]

        /**
         * If any datetime column type or datetime-local on input, will cast and display used this format.
         */
        "datetime" => "Y-m-d H:i:s",  // [!code focus]

        /**
         * Limit string on index view for any column type text or long text.
         */
        "limit_text" => 100,  // [!code focus]
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
    "sidebars" => [  // [!code focus]
        [ // [!code focus]
            "header" => "Main",  // [!code focus]
            "permissions" => ["test view"],  // [!code focus]
            "menus" => [  // [!code focus]
                [  // [!code focus]
                    "title" => "Main Data",  // [!code focus]
                    "icon" => '<i class="bi bi-collection-fill"></i>',  // [!code focus]
                    "route" => null,  // [!code focus]
                    "permission" => null,  // [!code focus]
                    "permissions" => ["test view"],  // [!code focus]
                    "submenus" => [  // [!code focus]
                        [  // [!code focus]
                            "title" => "Tests",  // [!code focus]
                            "route" => "/tests",  // [!code focus]
                            "permission" => "test view",  // [!code focus]
                        ],  // [!code focus]
                    ],  // [!code focus]
                ],  // [!code focus]
            ],  // [!code focus]
        ],  // [!code focus]
        [  // [!code focus]
            "header" => "Users",  // [!code focus]
            "permissions" => ["user view", "role & permission view"],  // [!code focus]
            "menus" => [  // [!code focus]
                [  // [!code focus]
                    "title" => "Users",  // [!code focus]
                    "icon" => '<i class="bi bi-people-fill"></i>',  // [!code focus]
                    "route" => "/users",  // [!code focus]
                    "permission" => "user view",  // [!code focus]
                    "permissions" => [],  // [!code focus]
                    "submenus" => [],  // [!code focus]
                ],  // [!code focus]
                [  // [!code focus]
                    "title" => "Roles & permissions",  // [!code focus]
                    "icon" => '<i class="bi bi-person-check-fill"></i>',  // [!code focus]
                    "route" => "/roles",  // [!code focus]
                    "permission" => "role & permission view",  // [!code focus]
                    "permissions" => [],  // [!code focus]
                    "submenus" => [],  // [!code focus]
                ],  // [!code focus]
            ],  // [!code focus]
        ],  // [!code focus]
    ],  // [!code focus]
];  // [!code focus]

```

6. Dokumentasi terbaru :book:

   Kami kesulitan ketika membuat dokumentasi untuk banyak versi dan bahasa menggunakan [MkDocs](https://www.mkdocs.org/), oleh karena itu kami memutuskan untuk membuat dokumentasi baru menggunakan [Vitepress](https://vitepress.dev/).
