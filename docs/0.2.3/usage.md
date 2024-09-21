---
outline: deep
lastUpdated: true
editLink: true
title: Usage
titleTemplate: How to basic
description: Create your first CRUD's with Generator
head:
  - - meta
    - name: description
      content: Create your first CRUD's with Generator
  - - meta
    - name: keywords
      content: Usage Generator
next: false
---

::: warning
You're browsing the documentation for an old version of Generator. Consider upgrading your project to [Generator 0.3.x](/).
:::

# Usage

### Create your first CRUD

Go to ```/generators/create``` if yo're using [Full Version](features.md#full-version) 

```/simple-generators/create``` for [Simple Version](features.md)

Below is table about supported input type & validation when you are using some column type.

|Column Type|Input Type|Validation|Length (min & max)|
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

> `required` validation will change to `nullable` if you uncheck required switch in the form, if any input type `password` will automatically added `confirmed` validation, `min:1|max:100` for supported length column and `email|unique` for `email` input type.


## Create a Relation

![Create Relation](https://user-images.githubusercontent.com/62506582/230761648-1ef36018-2486-424b-831f-ae5f74a66705.png)

For now is only support [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse).

There is rules you must be followed if you want create a a relation:

- Field name: 
    - Must be the table name but in singular + `_id`, eg: if we have a `users` table then it must be a `user_id`.
- Column Type:
    - Change to `foreignId`.
    - For constrain or related model name, you can fill with table name (automatically change to plural).
    - Action on update & delete:
        - On update: `nothing, cascade, restrict`
        - On delete: `nothing, cascade, restrict, null`


> Make sure the related table & model already exist, if its no then the selected field for showing in `select`/`datalist` is an `id`, by default selected field is second column in related table.

## Create an Upload File

![Upload File](https://user-images.githubusercontent.com/62506582/231070943-cc1f13fd-0ee5-47f1-baaf-fb1e66e93ab5.png)

Set column type to `string`, input type to `file`, select file type (for now only support image), fill the max size(optional), and default value (must be a valid link), also we use [Intervention Image](https://image.intervention.io/v2) for manipulating uploaded image. all setting for images are available at `config/generator.php`.

Default image configuration:
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

    /**
    * Will used if image is nullable and default value is null.
    */
    'default' => 'https://via.placeholder.com/350?text=No+Image+available',

    /**
    * Crop the uploaded image using intervention image.
    */
    'crop' => true,

    /**
    * When set to true the uploaded image aspect ratio will still original.
    */
    'aspect_ratio' => true,

    /**
    * Crop image size.
    */
    'width' => 500,
    'height' => 500,
],
```

> if you are using `storage` for store the image, make sure you run `php artisan storage:link`


## Create a Sidebar Menu

![Create sidebar menu](https://user-images.githubusercontent.com/62506582/230722893-f11aae2c-4407-4eaf-803e-3b8491269e40.png)

> This feature only available in full version.

You can easily create a dynamic sidebar menu with just a few inputs. all sidebar menus configuration are placed in `config/generator.php`

How about I don't need a dynamic sidebar menu, I just want to create my menu in `blade`. yeah, we provide it, [click here how to do it](/0.2.3/features.md#set-the-sidebar-menu).


## Role & Permissions

While you are using the full version, after creating a new module will automatically generate some permissions and assign them to the role `admin`. all permissions are stored in `config/permission.php`

Here an example:
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

## Configuration

Below is the default config for the generator and sidebar menus:

```php
<?php

return [
    /**
     * If any input file(image) as default will used options below.
     */
    'image' => [
        /**
         * Path for store the image.
         *
         * available options:
         * 1. public
         * 2. storage
         */
        'path' => 'storage',

        /**
         * Will used if image is nullable and default value is null.
         */
        'default' => 'https://via.placeholder.com/350?text=No+Image+available',

        /**
         * Crop the uploaded image using intervention image.
         */
        'crop' => true,

        /**
         * When set to true the uploaded image aspect ratio will still original.
         */
        'aspect_ratio' => true,

        /**
         * Crop image size.
         */
        'width' => 500,
        'height' => 500,
    ],

    'format' => [
        /**
         * Will used to first year on select, if any column type year.
         */
        'first_year' => 1900,

        /**
         * If any date column type will cast and display used this format, but for input date still will used Y-m-d format.
         *
         * another most common format:
         * - M d Y
         * - d F Y
         * - Y m d
         */
        'date' => 'd/m/Y',

        /**
         * If any input type month will cast and display used this format.
         */
        'month' => 'm/Y',

        /**
         * If any input type time will cast and display used this format.
         */
        'time' => 'H:i',

        /**
         * If any datetime column type or datetime-local on input, will cast and display used this format.
         */
        'datetime' => 'd/m/Y H:i',

        /**
         * Limit string on index view for any column type text or longtext.
         */
        'limit_text' => 100,
    ],

    /**
     * It will used for generator to manage and showing menus on sidebar views.
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
     * This code below always changes when you use a generator and maybe you must lint or format the code.
     */
    'sidebars' => [
        [
            'header' => 'Main',
            'permissions' => [
                'test view'
            ],
            'menus' => [
                [
                    'title' => 'Main Data',
                    'icon' => '<i class="bi bi-collection-fill"></i>',
                    'route' => null,
                    'permission' => null,
                    'permissions' => [
                        'test view'
                    ],
                    'submenus' => [
                        [
                            'title' => 'Tests',
                            'route' => '/tests',
                            'permission' => 'test view'
                        ]
                    ]
                ]
            ]
        ],
        [
            'header' => 'Users',
            'permissions' => [
                'user view',
                'role & permission view'
            ],
            'menus' => [
                [
                    'title' => 'Users',
                    'icon' => '<i class="bi bi-people-fill"></i>',
                    'route' => '/users',
                    'permission' => 'user view',
                    'permissions' => [],
                    'submenus' => []
                ],
                [
                    'title' => 'Roles & permissions',
                    'icon' => '<i class="bi bi-person-check-fill"></i>',
                    'route' => '/roles',
                    'permission' => 'role & permission view',
                    'permissions' => [],
                    'submenus' => []
                ],
            ]
        ],
    ],
];

```

## Production Setup

Because this package is only installed in development, so some files will not be included in the production environment. so you must do the following steps:

In `composer.json` add this code below:

```json
"autoload": {
    "files": [
        "App/Generators/helper.php"
    ]
},
"extra": {
    "laravel": {
        "aliases": {
            "GeneratorUtils": "App\\Generators\\GeneratorUtils",
        }
    }
}
```

Then run 
```sh
composer dump-autoload
```
