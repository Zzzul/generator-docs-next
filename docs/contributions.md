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

# Contributions

We are excited to have you contribute to Generator! We welcome all contributions. You can contribute to this project by following these steps:

::: warning
Make sure your PHP version is 8.2 or higher, check requirements [here](installation.md#requirements).
:::

## Create local copy

the repository before making any changes. This will allow you to test your changes before submitting a pull request. Every change should be tested using dev branch.

1. Please fork the repository to your GitHub account by clicking the "Fork" button on the top right corner of the repository page, click [here](https://github.com/Evdigi-INA/generator)

2. Create a new Laravel project:

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    or

    ```sh
    laravel new generator-dev
    ```

3. Move into the newly Laravel project and install the required libraries:

    ```sh
   composer require laravel/fortify spatie/laravel-permission intervention/image-laravel yajra/laravel-datatables-oracle
    ```

4. Create the `packages/evdigi-ina` folder in the main project directory

    Manually or using command:

    ```sh
    mkdir packages/evdigi-ina
    ```

5. `cd` into `packages/evdigi-ina` folder and clone the repository

    ```sh
    cd packages/evdigi-ina
    ```

    ```bash
    git clone https://github.com/{your-github-username}/generator.git
    ```

## Prepare the environment

Have you cloned the repository? Great! Now let's prepare the environment.

1. `cd` into `/generator`and install the dependencies

    ```sh
    cd generator
    ```

2. install the dependencies

    ```sh
    composer i
    ```

3. Return to the main project directory of the Laravel project.

4. Add the following code to `composer.json`

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

5. Run the following command

    ```sh
    composer dump-autoload
    ```

6. Add the following code to `bootstrap/app.php`

    > [!IMPORTANT]
    > If you don't have the `withProviders` method, you can add it manually..

    > [!WARNING]
    > If you can't add "withProviders" like the example below, most likely you are using an older version of Laravel.

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,  // [!code focus]
        //...
    ])
    ```

7.  Publish the necessary files for Generator

    ```sh
    php artisan generator:install full
    ```

8.  Add the following code to `composer.json` (same location as step 4)

    ```json
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/",
            "EvdigiIna\\Generator\\": "packages/evdigi-ina/generator/src/" 
        },
        "files": [ // [!code focus]
            "App/Generators/helper.php" // [!code focus]
        ] // [!code focus]
    },
    ```

9.  Add the following code to `bootstrap/app.php` again, because the previous process overwrites the file

    ```php
    ->withProviders([
        \EvdigiIna\Generator\Providers\GeneratorServiceProvider::class, // [!code focus]
        //..
    ])
    ```

10. Then execute the following command again

    ```sh
    composer dump-autoload
    ```

11. Migrate the database

    ```sh
    php artisan migrate --seed
    ```

12. Run the local development server

    ```sh
    php artisan serve
    ```

13. Make the desired code changes in `packages/evdigi-ina/generator`

## Submit a Pull Request

Ensure the code works well

> [!TIP]
> It would be better if you create unit tests as well (optional)

1. Push the code to your forked repository

    ```bash
    git push origin main
    ```

2. Create a Pull Request with "dev" as the base branch to be merged into, we will review your code and merge your changes on the next release.
