---
outline: deep
title: Features
editLink: true
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi Generator yang lama. Pertimbangkan untuk memperbaharui proyek Kamu ke [Generator 0.3.x](/).
:::

# Fitur

### Versi Sederhana
 
- CRUD Generator
    - Mendukung lebih dari 15 [jenis kolom migrasi](https://laravel.com/docs/9.x/migrations#available-column-types), seperti `string, char, date, year`, dll.
    - Mendukung [Input HTML 5](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Validasi Permintaan yang Didukung: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - Tabel Data ([Yajra Datatables](https://github.com/yajra/laravel-datatables))
    - [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse)
    - Pembuatan Model
    - Unggah Gambar ([Intervention Image](https://image.intervention.io/v2))

### Versi Lengkap
  
- Generator CRUD
- Menu sisi yang dapat dikonfigurasi
- Pengguna CRUD
- Peran dan izin ([Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction))
- Otentikasi ([Laravel Fortify](https://laravel.com/docs/9.x/fortify))
    - Masuk
    - Daftar
    - Lupa Kata Sandi
    - Otentikasi 2FA
    - Perbarui informasi profil 

## Available Commands

### Install The Generator
Install Generator Variants (Simple/Full Version)

For simple version
```sh
php artisan generator:install simple
```
For full version
```sh
php artisan generator:install full
```
> Warning! That will overwrite several files, so use caution while using this command and avoid using it more than once.

### Set the sidebar menu
Set the sidebar menu to fully blade code (static) or use a list from config (dynamic)

Sidebar configuration place in ```config/generator.php```

```sh
php artisan generator:sidebar dynamic
```

While using static sidebar menu, you feel free to edit the sidebar menus on ```resources/views/layouts/sidebar.blade.php```

```sh
php artisan generator:sidebar static
```
> After you create a new module using the generator, sidebar will automatically comeback to set dynamic

## Utilities/Helpers

### Check sidebar active menus

```php
is_active_menu(string|array $menu): boolean;
```

### Utility class

All utility functions that you maybe need, are available in ```App\Generators\GeneratorUtils```

```php
use App\Generators\GeneratorUtils;

/**
 * Get template/file.
*/
public static function getTemplate(string $path): string;

/**
* Get published files.
*/
public static function getPublishedFiles(string $path): string;

/**
* Check folder if not exist, then make folder.
*/
public static function checkFolder(string $path): void;

/**
* Convert string to singular pascal case.
*/
public static function singularPascalCase(string $string): string;

/**
* Convert string to singular pascal case.
*/
public static function pascalCase(string $string): string;

/**
* Convert string to plural pascal case.
*/
public static function pluralPascalCase(string $string): string;

/**
* Convert string to plural snake case.
*/
public static function pluralSnakeCase(string $string): string;

/**
* Convert string to singular snake case.
*/
public static function singularSnakeCase(string $string): string;

/**
* Convert string to plural pascal case.
*/
public static function pluralCamelCase(string $string): string;

/**
* Convert string to singular pascal case.
*/
public static function singularCamelCase(string $string): string;

/**
* Convert string to plural, kebab case, and lowercase.
*/
public static function pluralKebabCase(string $string): string;

/**
* Convert string to kebab case, and lowercase.
*/
public static function kebabCase(string $string): string;

/**
* Convert string to singular, kebab case, and lowercase.
*/
public static function singularKebabCase(string $string): string;

/**
* Convert string to singular, remove special characters, and lowercase.
*/
public static function cleanSingularLowerCase(string $string): string;

/**
* Remove special characters, and lowercase.
*/
public static function cleanLowerCase(string $string): string;

/**
* Convert string to plural, remove special characters, and uppercase every first letters.
*/
public static function cleanPluralUcWords(string $string): string;

/**
* Convert string to singular, remove special characters, and uppercase every first letters.
*/
public static function cleanSingularUcWords(string $string): string;

/**
* Remove special characters, and uppercase every first letters.
*/
public static function cleanUcWords(string $string): string;

/**
* Convert string to plural, remove special characters, and lowercase.
*/
public static function cleanPluralLowerCase(string $string): string;

/**
* Get 1 column after id on the table.
*/
public static function getColumnAfterId(string $table): string;

/**
* Select id and column after id on the table.
*/
public static function selectColumnAfterIdAndIdItself(string $table): string;

/**
* Get model location or path if contains '/'.
*/
public static function getModelLocation(string $model): string;

/**
* Converts camelCase string to have spaces between each.
*/
public static function fromCamelCase(string $string): string;
/**
* Set model name from the latest of array(if exists).
*/
public static function setModelName(string $model, string $style = 'pascal case'): string;

/**
* Set default image and code to controller.
*/
public static function setDefaultImage(null|string $default, string $field, string $model): array;

/**
* Convert array from config to string like array.
*/
public static function convertArraySidebarToString(array $sidebars): string;

/**
* Check if menu is active.
*/
public static function isActiveMenu(string|array $route): string;
```

### Things that we want to add in the future
- API CRUD generator
- API docs
- Can create more relation type
- Upload file except image
- CRUD with desain pattern(Service/Repository Pattern)
- Laravel table pagination
- Import/Export csv
- Input for custom table name
- Change request validation as an array
- Add a checkbox for whether to use route model binding or not
- Add a checkbox to turn off automatic pluralization
- If the time zone is set to Indonesia, then disable pluralization
- Add username to users table
- New template admin
- Option to auto migrate table or not
- Add config for showing an image in the data table or not
- ability to hide/show the field on the view page
- Configuration to limit showing fields in the index page
- Can select the field that will be showing in belongsTo the relation
- The generator can make seeder and factory
- Add default config for minimum & maximum length to column type string
- The generator can make subfolders for request class validation
- Add configuration for image type rounded or square
- Add support for diffForHumans() to input type date.
- Can custom validation(write-in input)
- The generator can use caching
- The generator can create policy
- The generator can create model observer
- Use database transaction
- The generator can create mutator & casting
- Configuration for upload file to S3
- Add soft delete option
- If the model is in a subfolder then the route will use the sub-route
- Add unit test for the generator
- The generator can create unit test
- Add notification if the user changed their email or password (package)
- Add activity log (package)
- Add backup database (package)
- The Generator uses enum class for column type enum
- Refactor code

> The list is subject to change at any time and features may be added in any order.