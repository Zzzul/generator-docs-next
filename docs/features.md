---
outline: deep
lastUpdated: true
editLink: true
title: Features
titleTemplate: Available features
description: List of available features
head:
  - - meta
    - name: description
      content: List of available features
  - - meta
    - name: keywords
      content: Generator Features
next: true
---

# Available Features

Here are some features currently available for you to try.

1. CRUD Generator
    - Supports over 15 [migration column types](https://laravel.com/docs/11.x/migrations#available-column-types), such as `string`, `char`, `date`, `year`, etc.
    - Supports [HTML 5 Input](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Supported Request validation: `required`, `in`, `image`, `min`, `max`, `string`, `email`, `number`, `date`, `exists`, `nullable`, `unique`, `confirmed`.  
     - Datatable  - [Yajra Datatables](https://github.com/yajra/laravel-datatables)
    - Model Creation and relation [One To Many (Inverse) / Belongs To](https://laravel.com/docs/11.x/eloquent-relationships#one-to-many-inverse)
    - Image Upload, Image Manipulation - [Intervention Image](https://image.intervention.io/v2)
    - Single Form CRUD
    - CRUD API Generator
    - Seeder & Factory Generator
    - Export excel Generator - [Maatwebsite](https://github.com/Maatwebsite/Laravel-Excel)
2. Configurable Sidebar Menu ([full version](installation#full-version))
3. CRUD User ([full version](installation#full-version))
4. Role & permissions - [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction) ([full version](installation#full-version))
5. Authentication - [Laravel Fortify](https://laravel.com/docs/11.x/fortify) ([full version](installation#full-version))
    - Login
    - Register
    - Forgot Password
    - 2FA Authentication
    - Profile Information Update

## Available Commands

### Generator Installation
Install Generator variants: Simple / Full version

For the simple version
```sh
php artisan generator:install simple
```

For the full version
```sh
php artisan generator:install full
```
::: danger
Both scripts will overwrite some files, so proceed with caution and avoid running them several times.
:::

::: info
For different between simple and full version, refer to [Getting Started](/installation#simple-version)
:::

### Publish image service class
```sh
php artisan generator:publish-image-service-v2
```

### Publish utility classes
```sh
php artisan generator:publish-utils
```

### Configure the menu on the sidebar.
The sidebar menu settings may be found in `config/generator.php`. Set the sidebar menu to static `.blade` code or use a list from the configuration (dynamic).

```sh
php artisan generator:sidebar dynamic
```

When using a static Sidebar menu, you are free to modify the Sidebar menu in `resources/views/layouts/sidebar.blade.php`

```sh
php artisan generator:sidebar static
```
::: info
When you create a new module with the Generator, the Sidebar will automatically revert to dynamic. But don't panic, you may revert to the previous settings.
:::

## Utility Classes/Helper

### Helper
The helper class is placed in `App\Generators\helper.php`

#### Check active menu on Sidebar
Checks whether the menu on the Sidebar matches the accessed uri.

```php
/**
 * @param string|array $route
 * @return string ('' || 'active')
 */
is_active_menu(string|array $route): string;
```

#### `ImageServiceV2`
This class is used to perform image upload and manipulation functions using [Intervention Image v3.x](https://image.intervention.io/v3) (optional), it's placed in `App\Generators\Services`