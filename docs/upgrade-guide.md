---
outline: deep
lastUpdated: true
editLink: true
title: Upgrade Guide
titleTemplate: Update for better experience
description: Update Generator to latest version
head:
  - - meta
    - name: description
      content: Update Generator to latest version
next: true
---

# What's New?

## Changes in the Latest Version

- ([#79](https://github.com/Evdigi-INA/generator/pull/79)) ⚙️ Laravel 12 Support, now compatible with Laravel 12.

- ([#59](https://github.com/Evdigi-INA/generator/pull/59)) 🔒 Fixed issue with password input rendering in forms.

- ([#60](https://github.com/Evdigi-INA/generator/pull/60)) ✏️ Corrected grammar and sentence structure.

- ([#62](https://github.com/Evdigi-INA/generator/pull/62)) 🧩 Fixed unhandled match case for value '0'.

- ([#85](https://github.com/Evdigi-INA/generator/pull/85)) ➕ Fixed inability to create new submenu items.

- ([#71](https://github.com/Evdigi-INA/generator/pull/71)) 📝 Fixed typo: "telepon" → "telephone".

- ([#57](https://github.com/Evdigi-INA/generator/pull/57)) 🧼 Replaced `str_replace()` with a custom, more robust function.

- ([#64](https://github.com/Evdigi-INA/generator/pull/64)) 📦 Made [Intervention/Image](https://image.intervention.io/v3) an optional dependency.

- 🆕 Introduced new `ImageServiceV2()` class for better image handling.

- 🧹 Refactored `ViewServiceProvider` for cleaner structure.

- ⚙️ Added new `generator.image` config for image settings.

- 📸 Change default image configuration from [placeholder.com](https://via.placeholder.com/350?text=No+Image+Available) to [placehold.co](https://placehold.co/300?text=No+Image+Available).

For the most recent and complete changelog, please visit [Github Releases](https://github.com/Evdigi-INA/generator/releases)

## How to Update

1. Update `Generator`

    ```sh
    composer require evdigiina/generator:^0.4.0 --dev
    ```

2. Publish new `ImageService` class.

   ```sh
   php artisan generator:publish-image-service-v2
   ```

3. Install latest version of Intervention Image.

   ```sh
   composer require intervention/image-laravel
   ```

4. In `App\Providers\ViewComposerServiceProvider.php` import `ViewContract`
    ```php
    use Illuminate\Contracts\View\View as ViewContract;
    ```

5. Changes in `generator.image` config.
    - `generator.image.disk` from `public` to `storage`.
    - `generator.image.default` from [https://via.placeholder.com/350?text=No+Image+Available](https://via.placeholder.com/350?text=No+Image+Available) to [https://placehold.co/300?text=No+Image+Available](https://placehold.co/300?text=No+Image+Available)

For additional information on these changes, [go here](#new-features).

## New Features :fire:

New features added in Generator v0.4.x:

- ⚙️ Laravel 12 Support  
  Now compatible with Laravel 12.

- 🧾 Export to Excel (Beta)  
  Added support for exporting data to Excel.

- 🏷️ Named Parameters in Generated Code  
  Improves readability and maintainability of generated code.

- 🎨 Color Input Rendering  
  Displays color preview in index and show pages if input type is color.

- ✅ Boolean Icon Rendering  
  Automatically adds icon for boolean fields in index and show pages.

- 🔐 Role & User Resource APIs  
  Adds RESTful API resources for managing roles and users.

- 🖼️ Image Casting on Model  
  Adds native support for handling images using custom model casts.

- 🩹 Update option in the configuration `generator.image.disk`, previously known as `public`, `storage`, `s3`, you can now select `public`, `local`,`public_path` or `s3`. 

  Here's an example.

```php
 /**
  * If any input file(image) as default will use options below.
  */
  'image' => [ // [!code focus]
    /**
     * Path for store the image.
     *
     * Available options:
     * 1. public or storage.public
     * 2. local or storage.local
     * 3. public_path
     * 4. S3
     */
    'disk' => 'public', // [!code focus]

    // other configuration codes.
]
```

If you want to see the default latest configuration, it is below:

```php
return [
    /**
     * If any input file(image) as default will use options below.
     */
    'image' => [ // [!code focus]
        /**
         * Path for store the image.
         *
         * Available options:
         * 1. public or storage.public
         * 2. local or storage.local
         * 3. public_path
         * 4. S3
         */
        'disk' => 'public', // [!code focus]

        /**
         * Will be used if image is nullable and default value is null.
         */
        'default' => 'https://placehold.co/300?text=No+Image+Available', // [!code focus]

        /**
         * Crop the uploaded image using intervention image.
         */
        'crop' => true, // [!code focus]

        /**
         * When set to true the uploaded image aspect ratio will still original.
         */
        'aspect_ratio' => true, // [!code focus]

        /**
         * Crop image size.
         */
        'width' => 300, // [!code focus]
        'height' => 300, // [!code focus]
    ],

    'format' => [ // [!code focus]
        /**
         * Will be used to first year on select, if any column type year.
         */
        'first_year' => 1970, // [!code focus]

        /**
         * If any date column type will cast and display used this format, but for input date still will used Y-m-d format.
         *
         * another most common format:
         * - M d Y
         * - d F Y
         * - Y m d
         */
        'date' => 'Y-m-d', // [!code focus]

        /**
         * If any input type month will cast and display used this format.
         */
        'month' => 'Y/m', // [!code focus]

        /**
         * If any input type time will cast and display used this format.
         */
        'time' => 'H:i', // [!code focus]

        /**
         * If any datetime column type or datetime-local on input, will cast and display used this format.
         */
        'datetime' => 'Y-m-d H:i:s', // [!code focus]

        /**
         * Limit string on index view for any column type text or long text.
         */
        'limit_text' => 100, // [!code focus]
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
    'sidebars' => [ // [!code focus]
        [ // [!code focus]
            'header' => 'Main', // [!code focus]
            'permissions' => ['test view'], // [!code focus]
            'menus' => [ // [!code focus]
                [ // [!code focus]
                    'title' => 'Main Data', // [!code focus]
                    'icon' => '<i class="bi bi-collection-fill"></i>', // [!code focus]
                    'route' => null, // [!code focus]
                    'permission' => null, // [!code focus]
                    'permissions' => ['test view'], // [!code focus]
                    'submenus' => [ // [!code focus]
                        [ // [!code focus]
                            'title' => 'Tests', // [!code focus]
                            'route' => '/tests', // [!code focus]
                            'permission' => 'test view', // [!code focus]
                        ], // [!code focus]
                    ], // [!code focus]
                ], // [!code focus]
            ], // [!code focus]
        ], // [!code focus]
        [ // [!code focus]
            'header' => 'Users', // [!code focus]
            'permissions' => ['user view', 'role & permission view'], // [!code focus]
            'menus' => [ // [!code focus]
                [
                    'title' => 'Users', // [!code focus]
                    'icon' => '<i class="bi bi-people-fill"></i>', // [!code focus]
                    'route' => '/users', // [!code focus]
                    'permission' => 'user view', // [!code focus]
                    'permissions' => [], // [!code focus]
                    'submenus' => [], // [!code focus]
                ], // [!code focus]
                [ // [!code focus]
                    'title' => 'Roles & permissions', // [!code focus]
                    'icon' => '<i class="bi bi-person-check-fill"></i>', // [!code focus]
                    'route' => '/roles', // [!code focus]
                    'permission' => 'role & permission view', // [!code focus]
                    'permissions' => [], // [!code focus]
                    'submenus' => [], // [!code focus]
                ], // [!code focus]
            ], // [!code focus]
        ], // [!code focus]
    ], // [!code focus]
]; // [!code focus]
```
