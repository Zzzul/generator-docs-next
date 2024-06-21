# What's New?

## Changes in the Latest Version
1. Minimum [Laravel 11.x](https://laravel.com/docs/11.x/upgrade)

   Because [Laravel 11.x](#) differs significantly from earlier versions, we decided to terminate support for [Laravel 10](https://laravel.com/docs/10.x). The lowest supported version is currently [Laravel 11](https://laravel.com/docs/11.x/upgrade)

2. Updated numerous necessary libraries, including:
    - [Intervention Image v3.x](#)
    - [Yajra Datatable v11.x](#)
    - [Spatie Permission v6.x](#)

    And for development process libraries:
    - [Larastan v2.x](#)
    - [PHPinsights v2.x](#)
    - [Testbench v9.x](#)

3. Remove `App\Generators\GeneratorUtils` class and update the helper class, [here for more info](#how-to-update)

4. Fix bug and error.

For the most recent and complete changelog, please visit [Github Releases](https://github.com/evdigiina/generator/releases)

## How to Update

1. If you are still using [Laravel version 10.x](https://laravel.com/docs/10.x), please consider to read [Laravel 11.x upgrade guide](https://laravel.com/docs/11.x/upgrade)


2. Update `composer.json` file

    ```json
    "laravel/framework to": "^11.0",

    // require-dev
    "nunomaduro/collision": "^8.1",
    "evdigiina/generator": "^0.3.0",
    ```
    Optionally (if installed)

    ```json
    "spatie/laravel-permission": "^6.0",
    "laravel/fortify": "^1.21"
    ```

3. Publish the latest files

    ```sh
    php artisan generator:publish-utils
    ```

4. Add the following lines of code to `resources/views/layouts/sidebar.blade.php`

    ```blade
    <ul class="menu">
        {{-- New code --}}
        @auth
            <li class="sidebar-item{{ request()->is('/') || request()->is('dashboard') ? ' active' : '' }}">
                <a class="sidebar-link" href="/">
                    <i class="bi bi-speedometer"></i>
                    <span> {{ __('Dashboard') }}</span>
                </a>
            </li>
        @endauth

        {{-- Your sidebar code --}}
        @foreach (config('generator.sidebars') as $sidebar)
            {{-- ... --}}
        @endforeach

        {{-- New code --}}
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

        {{-- New code --}}
        @auth
            <li class="sidebar-title">Account</li>

            <li class="sidebar-item{{ request()->is('profile') ? ' active' : '' }}">
                <a class="sidebar-link" href="{{ route('profile') }}">
                    <i class="bi bi-person-badge-fill"></i>
                    <span>{{ __('Profile') }}</span>
                </a>
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="bi bi-door-open-fill"></i>
                    <span>{{ __('Logout') }}</span>
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </li>
        @endauth
    </ul>

    ```    

6. Update code in `resources/views/layouts/header.blade.php`


    ```blade
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-lg-0">
            {{-- Your code --}}
        </ul>

        {{-- New code --}}
        @auth
            <div class="dropdown">
                <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="user-menu d-flex">
                        <div class="user-name text-end me-3">
                            <h6 class="mb-0 text-gray-600">{{ auth()?->user()?->name }}</h6>
                            <p class="mb-0 text-sm text-gray-600">
                                {{ isset(auth()?->user()?->roles) ? implode(auth()?->user()?->roles?->map(fn ($role) => $role->name)->toArray()) : '-' }}
                            </p>
                        </div>
                        <div class="user-img d-flex align-items-center">
                            <div class="avatar avatar-md">
                                @if (auth()?->user()?->avatar == null)
                                    <img src="https://www.gravatar.com/avatar/{{ md5(strtolower(trim(auth()?->user()?->email))) }}&s=500" alt="Avatar">
                                @else
                                    <img src="{{ asset('storage/uploads/avatars/' . auth()?->user()?->avatar) }}" alt="Avatar">
                                @endif
                            </div>
                        </div>
                    </div>
                </a>
                
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton" style="min-width: 11rem;">
                    <li>
                        <h6 class="dropdown-header">{{ __('Hello') }}, {{ auth()?->user()?->name }}!</h6>
                    </li>
                    <li>
                        <a class="dropdown-item" href="{{ route('profile') }}"><i class="icon-mid bi bi-person-fill me-2"></i>{{ __('My Profile') }}</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form-nav').submit();">
                            <i class="bi bi-door-open-fill"></i>
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form-nav" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </li>
                </ul>
            </div>
        @endauth
    </div>
    ```
7. It's not a better way to modify the vendor folder, but lets forget it. create file `generator.cache` in `vendor/evdigiina/generator` then copy code below

    ```json
    {"simple_version_publish_count":0,"full_version_publish_count":1}
    ```

:::info
Change `simple_version_publish_count` or `full_version_publish_count` to `1`, specify which version (simple or full version) are you using
:::

7. Change `config/generator.php` from `image.path` to `image.disk`

    ```php
    'image' => [
        /**
         * Path for store the image.
         *
         * available options:
         * 1. public
         * 2. storage
        */
        'path' => 'storage',
        // ... another configuration
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
        "disk" => "storage",
        // ... another configuration
    ]
    ```

    For more info about this changes, [here](#new-features)


8. When after generating a new module, if you are getting an error below, please read the documentation about new Laravel 11 middleware in controller [here](https://laravel.com/docs/11.x/controllers#controller-middleware)

    ![Error middleware](/error-middleware.png)

    If you are don't need a middleware just simply uncomment those code or using Laravel 10 like middleware below
    

    ```php
    // comment code below
    public static function middleware(): array
    {
        return [
            'auth',

            // TODO: uncomment this code if you are using spatie permission
            new Middleware('permission:permission_name view', only: ['index', 'show']),
            new Middleware('permission:permission_name create', only: ['create', 'store']),
            new Middleware('permission:permission_name edit', only: ['edit', 'update']),
            new Middleware('permission:permission_name delete', only: ['destroy']),
        ];
    }
    ```

    And change to Laravel 10 like middleware

    ```php
    public function __construct()
    {
        $this->middleware('permission:permission_name view')->only('index', 'show');
        $this->middleware('permission:permission_name create')->only('create', 'store');
        $this->middleware('permission:permission_name edit')->only('edit', 'update');
        $this->middleware('permission:permission_name delete')->only('destroy');
    }
    ```

    From 

    ```php 
    use Illuminate\Routing\Controllers\{HasMiddleware, Middleware};

    class YourController extends Controller implements HasMiddleware
    {
        //...
    }
    ```
    To

    ```php
    // use Illuminate\Routing\Controllers\{HasMiddleware, Middleware};

    class YourController extends Controller 
    {
        //...
    }
    ```

    And in header remove or comment `use Illuminate\Routing\Controllers\{HasMiddleware, Middleware};`

## New Features :fire:
New features added in _Generator v0.3.x_:

1. <small>(beta)</small> Generator may generate Seeder and Factory

2. <small>(beta)</small> _CRUD API Generator_ :rocket:

    Now you can create APIs quickly and easily using the _CRUD API Generator_

3. _Single Form_

    Perform CRU <s>D</s> tasks using a single page and form. This functionality is ideal for generating pages such as settings, web profiles, and other features with only one data item.

4. Added a new utility class called [ImageService](features.md#imageservice)

    This class is used to upload and manipulate images via [Intervention Image](#)

5. Added a new option to the configuration `generator.image.disk`, previously known as `generator.image.path`, you can now select `public, storage, or s3`. Here's an example.
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
    "disk" => "storage",
    
    // other configuration codes.
]
```

To use the `s3` option, you should read the related documentation[here](https://laravel.com/docs/11.x/filesystem#amazon-s3-compatible-filesystems)

And if you use the `storage` option for image, make sure you run
```sh
php artisan storage:link
```

If you want to see the latest configuration, it is below:
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

6. New documentation :book:

    Since we found it difficult to create documentation for multiple versions and languages using [MkDocs](https://www.mkdocs.org/), we decided to create the new documentation using [Vitepress](https://vitepress.dev/)


