# Getting Started

### Requirements

Here are some minimum requirements you need to consider:
 - [Composer ^2.x](https://getcomposer.org/)
 - [PHP ^8.2.x](https://www.php.net/releases/8.1/en.php)
 - [Laravel ^11.x](http://laravel.com/)

## Installation

```sh
composer require evdigiina/generator --dev
```

:::info
This library has two variants: [Simple Version](#simple-version) dan [Full Version](#full-version)
:::

### Simple Version

 ![image](https://user-images.githubusercontent.com/62506582/219941448-94c46fca-6a9f-422b-bdd1-29f642c3ccf6.png)

Which includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v2), dan [Bootstrap 5](https://getbootstrap.com/).

[See available features](features.md)
  
Library installation

```sh
php artisan generator:install simple
```

Register the Service Provider in `bootstrap/app.php`

```php
->withProviders([
    \App\Providers\ViewComposerServiceProvider::class,
])
```
  
Run the local development server `php artisan serve` and then in your browser navigate to  `/simple-generators/create/`
  

### Full Version

![image](https://user-images.githubusercontent.com/62506582/219942571-63c42764-1702-4df3-b165-4217e5558713.png)

_Generator + Starter App_, which includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v3), [Laravel Fortify](https://laravel.com/docs/11.x/fortify), [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel), dan [Mazer Template](https://github.com/zuramai/mazer).

[See available features.](features.md#full-version)

::: warning
If you want to use the full version, it is highly recommended to install this library after setting up a new Laravel project, as some files will be overwritten.
:::

Install [Laravel Fortify](https://laravel.com/docs/11.x/fortify) & [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel)


```sh
composer require laravel/fortify spatie/laravel-permission
```

Publish the required files

```sh
php artisan generator:install full
```

::: danger
This command will overwrite some files, so you should be careful when running this command and avoid running it more than once.
:::
 

Register the _Service Provider_ classes in `bootstrap/app.php`

```php
->withProviders([
    \App\Providers\FortifyServiceProvider::class,
    \App\Providers\ViewComposerServiceProvider::class,
])
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
        'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,
        'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,
    ]);
})
```

Run migration and Seeder commands

```sh
php artisan migrate --seed
```

Start the local development server `php artisan serve`

Account

- Email: admin@example.com
- Password: password

## What's inside?

### Simple Version

- [Yajra datatable - ^11.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^3.x](https://image.intervention.io/v3)
- [Bootstrap - ^5.x](https://getbootstrap.com/)
  
### Full Version

- [Yajra datatable - ^11.x](https://yajrabox.com/docs/laravel-datatables/master/installation)
- [Intervention Image - ^3.x](https://image.intervention.io/v3)
- [Laravel Forify - ^1.x](https://laravel.com/docs/11.x/fortify)
- [Spatie permission - ^6.x](https://github.com/spatie/laravel-permission)
- [Mazer template - ^2.x](https://github.com/zuramai/mazer/) 