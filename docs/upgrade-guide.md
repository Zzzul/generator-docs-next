# What's New?

## Changes in the Latest Version
1. Minimum [Laravel 11.x](https://laravel.com/docs/11.x/upgrade)

   Because [Laravel 11.x](#) differs significantly from earlier versions, we decided to terminate support for [Laravel 10](https://laravel.com/docs/10.x). The lowest supported version is currently [Laravel 11](https://laravel.com/docs/11.x/upgrade)

2. Updated numerous necessary libraries, including:
    - [Intervention Image v3.x](https://image.intervention.io/v3)
    - [Yajra Datatable v11.x](https://yajrabox.com/docs/laravel-datatables/11.0)
    - [Spatie Permission v6.x](https://spatie.be/docs/laravel-permission/v6/introduction)

    And for development process libraries:
    - [Larastan v2.x](https://github.com/larastan/larastan)
    - [PHPinsights v2.x](https://phpinsights.com/)
    - [Testbench v9.x](https://packages.tools/testbench.html)

3. Remove `App\Generators\GeneratorUtils` class and update the helper class, [here for more info](#how-to-update)

4. Fix bug and error.

For the most recent and complete changelog, please visit [Github Releases](https://github.com/evdigiina/generator/releases)

## How to Update

1. If you are still using [Laravel 10.x](https://laravel.com/docs/10.x), please consider reading the [Laravel 11.x upgrade guide](https://laravel.com/docs/11.x/upgrade)


2. Update `composer.json` file

    ```json
    "laravel/framework to": "^11.0",

    // require-dev
    "nunomaduro/collision": "^8.1",
    "evdigiina/generator": "^0.3.0",
    ```
    Optional (if installed).

    ```json
    "spatie/laravel-permission": "^6.0",
    "laravel/fortify": "^1.21"
    ```

3. Publish new files

    ```sh
    php artisan generator:publish-utils
    ```

4. Add the following code to `resources/views/layouts/sidebar.blade.php`

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

5. Update code in `resources/views/layouts/header.blade.php`


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
6. It's not the best technique to alter the vendor folder, but let's ignore it. Create a file `generator.cache` in `vendor/evdigiina/generator` then copy the code below

    ```json
    {"simple_version_publish_count":0,"full_version_publish_count":1}
    ```

:::info
Change `simple_version_publish_count` or `full_version_publish_count` to `1` and specify the version you're using
:::

7. Convert `config/generator.php` from `image.path` to `image.disk`

    ```php
    'image' => [
        /**
         * Path for store the image.
         *
         * available options:
         * 1. public
         * 2. storage
        */
        'path' => 'storage', // [!code focus]
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
        "disk" => "storage", // [!code focus]
        // ... another configuration
    ]
    ```

    For additional information on these changes, [go here](#new-features)


8. If you see the following problem after creating a new module, please read the documentation regarding the new Laravel 11 middleware in controller [here](https://laravel.com/docs/11.x/controllers#controller-middleware)

    ![Error middleware](/error-middleware.png)

    If you don't need a middleware, simply uncomment those codes or use the Laravel 10 like middleware below.


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
    use Illuminate\Routing\Controllers\{HasMiddleware, Middleware}; // [!code focus]

    class YourController extends Controller implements HasMiddleware // [!code focus]
    {
        //...
    }
    ```
    To

    ```php
    // use Illuminate\Routing\Controllers\{HasMiddleware, Middleware}; // [!code focus]

    class YourController extends Controller  // [!code focus]
    { 
        //...
    } 
    ```

    And in the header remove or comment.`use Illuminate\Routing\Controllers\{HasMiddleware, Middleware};`

## New Features :fire:
New features added in _Generator v0.3.x_:

1. <small>(beta)</small> Generator may generate Seeder and Factory

2. <small>(beta)</small> _CRUD API Generator_ :rocket:

    Now you can create APIs quickly and easily using the _CRUD API Generator_

3. _Single Form_

    Perform CRU <s>D</s> tasks using a single page and form. This functionality is ideal for generating pages such as settings, web profiles, and other features with only one data item.

4. Added a new utility class called [ImageService](features.md#imageservice)

    This class is used to upload and manipulate images via [Intervention Image](https://image.intervention.io/v3)

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
    "disk" => "storage", // [!code focus]
    
    // other configuration codes.
]
```

To use the `s3` option, you should read the related documentation [here](https://laravel.com/docs/11.x/filesystem#amazon-s3-compatible-filesystems)

And if you use the `storage` option, make sure you run
```sh
php artisan storage:link
```

If you want to see the latest configuration, it is below:
```php
return [
    /**
     * If any input file(image) as default will use options below.
     */
    "image" => [  // [!code focus]
        /**
         * Path for store the image.
         *
         * Available options:
         * 1. public
         * 2. storage
         * 3. S3
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

6. New documentation :book:

    Since we found it difficult to create documentation for multiple versions and languages using [MkDocs](https://www.mkdocs.org/), we decided to create the new documentation using [Vitepress](https://vitepress.dev/)


