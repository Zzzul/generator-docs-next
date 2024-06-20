# What's New?

## Changes in the Latest Version
1. Minimum [Laravel 11.x](#)

   Because [Laravel 11.x](#) differs significantly from earlier versions, we decided to terminate support for [Laravel 10](#). The lowest supported version is currently [Laravel 11.x](#).

2. Updated numerous necessary libraries, including:
    - [Intervention Image v3.x](#)
    - [Yajra Datatable v11.x](#)
    - [Spatie Permission v6.x](#)

    And for development process libraries:
    - [Larastan v2.x](#)
    - [PHPinsights v2.x](#)
    - [Testbench v9.x](#)

3. Remove `App\Generators\GeneratorUtils` class and update the helper class, [here for more info](#how-to-update).

4. Bug and error fixing.

For the most recent and complete changelog, please visit [Github Releases](https://github.com/evdigiina/generator/releases)

## How to Update

1. If you are still using [Laravel version 10.x](https://laravel.com/docs/10.x), please upgrade to [Laravel 11.x](https://laravel.com/docs/).
2. Execute the following commands

    ```sh
    composer update evdigiina/generator:0.3.0 --dev
    ```

3. Publish the latest files

    ```sh
    php artisan generator:publish-utils
    ```

4. Add the following lines of code to `resources/views/layouts/sidebar.blade.php`

    ```blade
    {{-- New Code --}}
    @auth
        <li class="sidebar-item{{ request()->is('/') || request()->is('dashboard') ? ' active' : '' }}">
            <a class="sidebar-link" href="/">
                <i class="bi bi-speedometer"></i>
                <span> {{ __('Dashboard') }}</span>
            </a>
        </li>
    @endauth

    @foreach (config('generator.sidebars') as $sidebar)
        {{-- Your sidebar menu code --}}
    @endforeach

    {{-- New Code --}}
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

    {{-- New Code --}}
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

5. Delete the `App\Generators\GeneratorUtils` class additionally updates the helper class.
Here is the newest helper class, and we recommend changing the code in the `is_active_menu` function.

```php
/**
 * Check the sidebar menu with the current Uri
 */
if (!function_exists('is_active_menu')) {
    function is_active_menu(string|array $route): string
    {
        $activeClass = ' active';

        if (is_string($route)) {
            if (request()->is(substr($route . '*', 1))) return $activeClass;

            if (request()->is(str($route)->slug() . '*')) return $activeClass;

            if (request()->segment(2) == str($route)->before('/')) return $activeClass;

            if (request()->segment(3) == str($route)->after('/')) return $activeClass;
        }

        if (is_array($route)) {
            foreach ($route as $value) {
                $actualRoute = str($value)->remove(' view')->plural();

                if (request()->is(substr($actualRoute . '*', 1))) return $activeClass;

                if (request()->is(str($actualRoute)->slug() . '*')) return $activeClass;

                if (request()->segment(2) == $actualRoute) return $activeClass;

                if (request()->segment(3) == $actualRoute) return $activeClass;
            }
        }

        return '';
    }
}
```

## New Features :fire:
New features added in _Generator v0.3.x_:

1. <small>(beta)</small> Generator may generate Seeder and Factory.

2. <small>(beta)</small> _CRUD API Generator_ :rocket:

    Now you can create APIs quickly and easily using the _CRUD API Generator_.

3. _Single Form_

    Perform CRU <s>D</s> tasks using a single page and form. This functionality is ideal for generating pages such as settings, web profiles, and other features with only one data item.

4. Added a new utility class called [ImageService](features.md#imageservice).

    This class is used to upload and manipulate images via [Intervention Image](#).

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

To use the `s3` option, you should read the related documentation[here](https://laravel.com/docs/11.x/filesystem#amazon-s3-compatible-filesystems).

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

    Since we found it difficult to create documentation for multiple versions and languages using [MkDocs](https://www.mkdocs.org/), we decided to create the new documentation using [Vitepress](https://vitepress.dev/).


