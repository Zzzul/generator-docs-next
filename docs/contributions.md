---
outline: deep
lastUpdated: true
editLink: true
title: How to Contribute
titleTemplate: Let's contribute
description: How to contribute to this project
head:
  - - meta
    - name: description
      content: How to contribute to this project
  - - meta
    - name: keywords
      content: How to contribute to Generator
next: true
---

# How to Contribute

You can contribute to this project by following these steps:

1. [Star & fork the repository](https://github.com/Evdigi-INA/generator)

2. Create a new Laravel project:

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    or

    ```sh
    laravel new generator-dev
    ```

4. Install the required libraries:

    ```sh
    composer require laravel/fortify spatie/laravel-permission intervention/image "^2.0" yajra/laravel-datatables-oracle
    ```

5. Publish the `fortify` library

    ```sh
    php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
    ```

6. Create the `packages/evdigi-ina` folder in the main project directory

7. Enter the `packages/evdigi-ina` folder and clone the repository

    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

    and install it

    ```sh
    composer i
    ```
    then return to the main project directory

8. Add the following code to `composer.json`

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"
        }
    },
    ```

9. Run the following command

    ```sh
    composer dump-autoload
    ```

10. Add the following code to `bootstrap/app.php`

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
        \Yajra\DataTables\DataTablesServiceProvider::class,
        \Spatie\Permission\PermissionServiceProvider::class,
        \Intervention\Image\ImageServiceProvider::class,
        \App\Providers\FortifyServiceProvider::class,
        // App\Providers\ViewComposerServiceProvider::class,
    ])
    ```

11. Publish the necessary files for Generator

    ```sh
    php artisan generator:install full
    ```

12. Add the following code to `composer.json`

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"
        },
        "files": [
            "App/Generators/helper.php"
        ]
    },
    ```

13. Uncomment `App\Providers\ViewComposerServiceProvider::class` in `bootstrap/app.php`

14. Then run the following command again
    ```sh
    composer dump-autoload
    ```

15. Migrate the database
    ```sh
    php artisan migrate --seed
    ```

16. Run the local development server and open `/generators/create`
    ```sh
    php artisan serve
    ```

17. Make the desired code changes in `packages/evdigi-ina/generator`

18. Ensure the code works well

19. It would be better if you create unit tests as well

20. Switch to a new branch
    ```bash
     git branch update-generator
    ```
    ```bash
    git checkout update-generator
    ```
    ```bash
    git add .
    ```
    ```bash
    git commit -m "describe your changes"
    ```

21. Push the code to the repository

    ```bash
    git push origin update-generator
    ```

22. Create a Pull Request to the repository
