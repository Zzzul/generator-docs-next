---
outline: deep
---

::: warning
Kamu sedang menjelajahi dokumentasi untuk versi Generator yang lama nih. Tolong pertimbangkan untuk memperbaharui proyek Kamu ke versi [Generator 0.3.x](/id/) yaa.
:::

# How to Contribute

### To contribute to this project, please follow the following steps:

1. [Star & fork the repository](https://github.com/Evdigi-INA/generator)

2. Create a new laravel project using the following command:

    ```sh
    composer create-project laravel/laravel generator-dev
    ```

    or

    ```sh
    laravel new generator-dev
    ```

4. Install the dependencies using the following command:

    ```sh
    composer require laravel/fortify spatie/laravel-permission intervention/image "^2.0" yajra/laravel-datatables-oracle
    ```

5. Publish `fortify` resources

    ```sh
    php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
    ```

6. Create folder `packages/evdigi-ina` in the root of the project

7. CD into `packages/evdigi-ina`, clone the repository

    ```bash
    git clone https://github.com/Evdigi-INA/generator.git
    ```

    and install the dependency

    ```sh
    composer i
    ```
    then back again into root project

8. Add the following code to the `composer.json`

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

10. Add the following code to the `config/app.php`

    ```php
    /*
    * Package Service Providers...
    */
    EvdigiIna\Generator\Providers\GeneratorServiceProvider::class,
    Yajra\DataTables\DataTablesServiceProvider::class,
    Spatie\Permission\PermissionServiceProvider::class,
    Intervention\Image\ImageServiceProvider::class,
    App\Providers\FortifyServiceProvider::class,
    // App\Providers\ViewComposerServiceProvider::class,
    ```

11. Publish required file for the generator

    ```sh
    php artisan generator:install full
    ```

12. Add the following code to the `composer.json` (autoload files)

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

13. Uncomment `App\Providers\ViewComposerServiceProvider::class` in `config/app.php`

14. Then run for a second time 
    ```sh
    composer dump-autoload
    ``` 

15. Migrate the database 
    ```sh
    php artisan migrate --seed
    ```

16. Start local development server and go to `/generators/create` 
    ```sh
    php artisan serve
    ```

17. Make changes code as you wish in `packages/evdigi-ina/generator`

18. Make sure the code is working properly

19. Checkout to a new branch
    ```bash
     git branch your_name
    ```
    ```bash
    git checkout your_name
    ```
    ```bash
    git add .
    ```
    ```bash
    git commit -m "describe your changes"
    ```

20. Push the code to the repository

    ```bash
    git push origin your_name
    ```

21. Create a pull request.
