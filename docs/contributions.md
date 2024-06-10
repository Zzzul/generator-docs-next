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

3. Install the required libraries:

    ```sh
   composer require laravel/fortify spatie/laravel-permission intervention/image-laravel  yajra/laravel-datatables-oracle
    ```

4. Create the `packages/evdigi-ina` folder in the main project directory

5. CD into `packages/evdigi-ina` folder and clone the repository

    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

6. CD into `/generator`and install the dependencies

    ```sh
    composer i
    ```
    then return to the main project directory

7. Add the following code to `composer.json`

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

8. Run the following command

    ```sh
    composer dump-autoload
    ```

9. Add the following code to `bootstrap/app.php`

    ```php
    ->withProviders([
        EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
        //...
    ])
    ```

10. Publish the necessary files for Generator

    ```sh
    php artisan generator:install full
    ```

11. Add the following code to `composer.json`

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

12. Uncomment `App\Providers\ViewComposerServiceProvider::class` and add `EvdigiIna\Generator\Providers\GeneratorServiceProvider::class` in `bootstrap/app.php` 

13. Then execute the following command again
    ```sh
    composer dump-autoload
    ```

14. Migrate the database
    ```sh
    php artisan migrate --seed
    ```

15. Run the local development server and open `/generators/create`
    ```sh
    php artisan serve
    ```

16. Make the desired code changes in `packages/evdigi-ina/generator`

17. Ensure the code works well

18. It would be better if you create unit tests as well

19. Switch to a new branch
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

20. Push the code to the repository

    ```bash
    git push origin update-generator
    ```

21. Create a Pull Request to the repository
