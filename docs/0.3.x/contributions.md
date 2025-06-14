---
outline: deep
lastUpdated: true
editLink: true
title: How to Contribute
titleTemplate: Let's contribute
description: How to contribute to Generator
head:
  - - meta
    - name: description
      content: How to contribute to Generator
  - - meta
    - name: keywords
      content: How to contribute to Generator
next: true
---

::: warning
You're browsing the documentation for an old version of Generator. Consider upgrading your project to [Generator 0.4](/).
:::

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
   composer require laravel/fortify spatie/laravel-permission intervention/image-laravel yajra/laravel-datatables-oracle
    ```

4. Create the `packages/evdigi-ina` folder in the main project directory

    ```sh
    mkdir packages/evdigi-ina
    ```

5. CD into `packages/evdigi-ina` folder and clone the repository

    ```sh
    cd packages/evdigi-ina
    ```
    
    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

6. CD into `/generator`and install the dependencies

    ```sh
    cd generator
    ```

    Checkout to `dev` branch for newest changes

    ```bash
    git checkout -b dev
    ```

    ```bash
    git pull origin dev
    ```

    ```sh
    composer i
    ```
    then return to the main project directory

    ```sh
    cd ../../../
    ```

7. Add the following code to `composer.json`

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"  // [!code focus]
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
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,  // [!code focus]
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
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/"  // [!code focus]
        }, // [!code focus]
        "files": [ // [!code focus]
            "App/Generators/helper.php" // [!code focus]
        ] // [!code focus]
    },
    ```

12. Add the following code to `bootstrap/app.php`

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class, // [!code focus]
        //..
    ])
    ```

13. Then execute the following command again
    ```sh
    composer dump-autoload
    ```

14. Migrate the database
    ```sh
    php artisan migrate --seed
    ```

15. Run the local development server
    ```sh
    php artisan serve
    ```

16. Make the desired code changes in `packages/evdigi-ina/generator`

17. Ensure the code works well

18. It would be better if you create unit tests as well

19. Switch to a new branch
    ```bash
     git checkout -b update-generator
    ```

    ```bash
    git add .
    ```
    
    ```bash
    git pull origin dev
    ```
    
    ```bash
    git commit -m "describe your changes"
    ```

20. Push the code to the repository

    ```bash
    git push origin update-generator
    ```

21. Create a Pull Request to the repository
