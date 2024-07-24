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
This package has two variants: [Simple Version](#simple-version) dan [Full Version](#full-version)
:::

### Simple Version

![Simple Version](/simple-version.png)

Designed for developers who want a straightforward solution, this version focuses solely on generating CRUD operations, enabling you to quickly create, read, update, and delete functionalities with ease. 

Streamline your workflow and concentrate on building your application’s core features without the hassle of repetitive coding tasks.

Includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v2) & [Bootstrap 5](https://getbootstrap.com/).

[See available features](features.md)
  
Publish files

```sh
php artisan generator:install simple
```

Run the local development server `php artisan serve` and then in your browser navigate to  `/simple-generators/create/`
  

### Full Version

![Full Version](/full-version-2.png)

This comprehensive version goes beyond basic CRUD operations, offering a complete starter app, robust authentication, and flexible role-based access control. 

Perfect for developers seeking an all-in-one solution, the Full Version empowers you to kickstart your applications with essential features, focus on innovation and leave the groundwork to us.

Includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Intervention Image](https://image.intervention.io/v3), [Laravel Fortify](https://laravel.com/docs/11.x/fortify), [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel) & [Mazer Template](https://github.com/zuramai/mazer).

[See available features.](features.md#full-version)

::: warning
For the full version, it's recommended to install this library after setting up a new Laravel project to avoid overwriting files.
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
 
Execute migration and seeder commands

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
