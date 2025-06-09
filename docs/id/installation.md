---
outline: deep
lastUpdated: true
editLink: true
title: Installation
titleTemplate: Let's get started
description: Install your Generator for first time
head:
  - - meta
    - name: description
      content: Install your Generator for first time
  - - meta
    - name: keywords
      content: Installation Generator
next: true
---

::: info
Dokumentasi Bahasa Indonesia akan segera tersedia, kamu dapat membantu kami menyusun dokumentasi [disini](https://github.com/Zzzul/generator-docs-next/tree/main/docs/id).
:::

# Installation

## Requirements

Here are some minimum requirements you need to consider:
 - [PHP ^8.2.x](https://www.php.net/releases/8.2/en.php)
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

Includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation) & [Bootstrap 5](https://getbootstrap.com/).

[See available features](features.md)
  
Publish files

```sh
php artisan generator:install simple
```

Run the local development server 
```sh
php artisan serve
```
And then in your browser navigate to  `/simple-generators/create/`
  

### Full Version

![Full Version](/full-version.png)

This comprehensive version goes beyond basic CRUD operations, offering a complete starter app, robust authentication, and flexible role-based access control. 

Perfect for developers seeking an all-in-one solution, the Full Version empowers you to kickstart your applications with essential features, focus on innovation and leave the groundwork to us.

Includes: [Yajra Datatables](https://yajrabox.com/docs/laravel-datatables/master/installation), [Laravel Fortify](https://laravel.com/docs/11.x/fortify), [Spatie Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel) & [Mazer Template](https://github.com/zuramai/mazer).

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

Start the local development server 
```sh
php artisan serve
```

#### Credentials

Email: 
```txt
admin@example.com
```

Password: 
```txt
password
```

