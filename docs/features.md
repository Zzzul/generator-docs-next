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

---

# Available Features

Here are some features currently available for you to try.

1. _CRUD Generator_
    - Supports over 15 [migration column types](https://laravel.com/docs/11.x/migrations#available-column-types), such as `string, char, date, year`, etc.
    - Supports [HTML 5 Input](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Supported _Request_ validation: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - _Datatable_  - [Yajra Datatables](https://github.com/yajra/laravel-datatables)
    - Model Creation and relation [One To Many (Inverse) / Belongs To](https://laravel.com/docs/11.x/eloquent-relationships#one-to-many-inverse)
    - Image Upload  - [Intervention Image](https://image.intervention.io) 
    - _Single Form CRUD_
    - _CRUD API Generator_
    - _Seeder & Factory Generator_
2. Configurable _Sidebar_ Menu ([full version](get-started.md#full-version))
3. _CRUD User_ ([full version](get-started.md#full-version))
4. Role & permissions - [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction) ([full version](get-started.md#full-version))
5. Authentication - [Laravel Fortify](https://laravel.com/docs/11.x/fortify) ([full version](get-started.md#full-version))
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

#### Publish utility classes
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
is_active_menu(string|array $menu): boolean;
```
#### `ImageService`
This class is used to perform image upload and manipulation functions using [Intervention Image v3.x](https://image.intervention.io/v3), it's placed in `App\Generators\Services`