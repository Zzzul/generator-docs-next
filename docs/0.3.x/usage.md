---
outline: deep
lastUpdated: true
editLink: true
title: Usage
titleTemplate: How to basic
description: Create your first CRUD's with Generator
head:
  - - meta
    - name: description
      content: Create your first CRUD's with Generator
  - - meta
    - name: keywords
      content: Usage Generator
next: true
---

# Usage

### Create your first CRUD

Go to ```/generators/create``` if yo're using [Full Version](features.md#full-version) 

```/simple-generators/create``` for [Simple Version](features.md)

Below is table about supported input type & validation when you are using some column type.

|Column Type|Input Type|Validation|
|-----------|----------|----------|
|`string`|`text, textarea, email, telephone, password, url, search, file, hidden`| `required, string, min, max`|
|`boolean`|`radio, select, datalist`|`required, boolean`|
|`char`|`text, color, week, email, telephone, password, url, search, file, hidden`|`required, string, min, max`|
|`date`|`date, month`|`required, date`|
|`time`|`time`|`required, date`|
|`year, foreignId`|`select, datalist`|`required, numeric`|
|`dateTime`|`datetime-local`|`required, date`|
|`float, decimal, double`|`number, range, hidden`|`required, numeric`|
|`enum`|`select, radio, datalist`|`required, in`|
|`integer, tinyInteger, mediumInteger, bigInteger`|`number, range, hidden`|`required, numeric`|
|`text, tinyText, mediumText, longText`|`text, textarea, email, telephone, password, url, search, file, hidden`|`required, string, min, max`|

:::info
`required` validation will change to `nullable` if you uncheck required switch in the form, if any input type `password` will automatically added `confirmed` validation, `min:1|max:100` for supported length column and `email|unique` for `email` input type.
:::

:::info
<img src="/404.png" alt="404 Laravel" style="display: block; margin-left: auto; margin-right: auto; width: 50%; border-radius: 5px"/>

After creating the new module, the `404` error may show, if this occurs, simply refresh the browser.
:::


## Create a Relation

![Create Relation](https://user-images.githubusercontent.com/62506582/230761648-1ef36018-2486-424b-831f-ae5f74a66705.png)

Currently, only [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse) relationships are supported. There are specific rules you must follow to create a relation:

- Field name: 
    - Must be the table name but in singular + `_id`, eg: if we have a `users` table then it must be a `user_id`.
- Column Type:
    - Change to `foreignId`.
    - For constrain or related model name, you can fill with Model name (automatically change to plural).
    - Action on update & delete:
        - On update: `nothing, cascade, restrict`
        - On delete: `nothing, cascade, restrict, null`


:::warning
Ensure that the related table and model already exist. If they don't, attempting to display or use them in a `<select>` or `<datalist>` will result in an error. 
By default, the `id` field is chosen to appear in the dropdown or autocomplete list, while the selected field typically corresponds to the second column in the relevant table.
:::

## Create an Upload File

![Upload File](https://user-images.githubusercontent.com/62506582/231070943-cc1f13fd-0ee5-47f1-baaf-fb1e66e93ab5.png)

Set the column type to `string`, the input type to `file`, and select the file type (currently only supporting images). Fill in the max size, and the default value is optional (must be a valid link). 

We use [Intervention Image](https://image.intervention.io) for manipulating uploaded images. All settings for images are available in `config/generator.php`.


Default image configuration:
```php
"image" => [
    /**
    * Path for store the image.
    *
    * Available options:
    * 1. public
    * 2. storage
    * 3. s3
    */
    "disk" => "storage",  // [!code focus]

    /**
    * Will used if image is nullable and default value is null.
    */
    "default" => "https://via.placeholder.com/350?text=No+Image+available",  // [!code focus]

    /**
    * Crop the uploaded image using intervention image.
    */
    "crop" => true,  // [!code focus]

    /**
    * When set to true the uploaded image aspect ratio will still original.
    */
    "aspect_ratio" => true, // [!code focus]

    /**
    * Crop image size.
    */
    "width" => 500, // [!code focus]
    "height" => 500, // [!code focus]
],
```

:::info
If you are using `storage` for store the image, make sure you run 

```sh
php artisan storage:link
```

Or if you are using `s3` to store the image, make sure you read the [documentation](https://laravel.com/docs/11.x/filesystem#s3-driver-configuration)
:::


## Create a Sidebar Menu

![Create sidebar menu](https://user-images.githubusercontent.com/62506582/230722893-f11aae2c-4407-4eaf-803e-3b8491269e40.png)

:::info
This feature only available in full version.
:::

You can easily create a dynamic sidebar menu with just a few inputs. All sidebar menu configurations are placed in `config/generator.php`.

What if you don't need a dynamic sidebar menu and prefer to create your menu in `blade`? No problem, we provide support for that too. [Click here to learn how to do it](features.md#configure-the-menu-on-the-sidebar).


## Role & Permissions

When using the full version, creating a new module will automatically generate specific permissions and assign them to the `admin` role. All permissions are managed in `config/permission.php`.

Here an example:
```php
[
    'group' => 'products',  // [!code focus]
    'access' => [  // [!code focus]
        'product view',  // [!code focus]
        'product create',  // [!code focus]
        'product edit',  // [!code focus]
        'product delete'  // [!code focus]
    ] // [!code focus]
],
```

## Creating API CRUD
Before you use this feature, make sure you have installed and read the latest documentation of [Laravel 11](https://laravel.com/docs/11.x/sanctum#introduction) regarding APIs.

1. Execute the following command

```sh
php artisan install:api
```

2. Check if the `routes/api.php` file is exists
3. Go to `bootstrap/app.php` and remove or add the following code

```php
->withRouting(
    api: __DIR__ . '/../routes/api.php', // [!code focus]
    web: __DIR__ . '/../routes/web.php',
    commands: __DIR__ . '/../routes/console.php',
    health: '/up',
)
```

4. If you want an authentication module, such as login and register, please execute the following command

```sh
php artisan generator:publish-api
```

This command will generate some code in `app/Http/Controllers/Api/AuthController`, `app/Http/Requests/Auth`, and `routes/api.php`

For the [full version](get-started#full-version), navigate to `/generators-api/create`. For the [simple version](get-started#simple-version), go to `/simple-generators/create`. Then, follow the same steps you used to create CRUD operations above.

:::info
If you are using the API Generator in the [full version](get-started#full-version), sidebar menu creation is not available.
:::
