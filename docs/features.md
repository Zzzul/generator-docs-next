---
outline: deep
lastUpdated: true
editLink: true
title: Features
titleTemplate: Available features
description: List of available features
head:
  - - meta
    - name: description
      content: List of available features
  - - meta
    - name: keywords
      content: Generator Features

---

# Available Features

Here are some features currently available for you to try.

1. _CRUD Generator_
    - Supports over 15 [migration column types](https://laravel.com/docs/11.x/migrations#available-column-types), such as `string, char, date, year`, etc.
    - Supports [HTML 5 Input](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Supported _Request_ validation: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - _Datatable_ ([Yajra Datatables](https://github.com/yajra/laravel-datatables))
    - [One To Many (Inverse) / Belongs To](https://laravel.com/docs/11.x/eloquent-relationships#one-to-many-inverse)
    - Model Creation
    - Image Upload ([Intervention Image](https://image.intervention.io))
    - _Single Form CRUD_
    - _CRUD API Generator_
    - _Seeder & Factory Generator_
2. Configurable _Sidebar_ Menu ([full version](get-started.md#full-version))
3. _CRUD User_ ([full version](get-started.md#full-version))
4. Role & permissions using [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction) ([full version](get-started.md#full-version))
5. Authentication using [Laravel Fortify](https://laravel.com/docs/11.x/fortify) ([full version](get-started.md#full-version))
    - Login
    - Register
    - Forgot Password
    - 2FA Authentication
    - Profile Information Update

## Available Commands

### Generator Installation
Install Generator variants: Simple / Full version

For the simple version
```sh
php artisan generator:install simple
```

For the full version
```sh
php artisan generator:install full
```
::: danger
Both scripts will overwrite some files, so proceed with caution and avoid running them several times.
:::

#### Publish utility classes
```sh
php artisan generator:publish utils
```

### Configure the menu on the sidebar.
The sidebar menu settings may be found in `config/generator.php`. Set the sidebar menu to static `.blade` code or use a list from the configuration (dynamic).

```sh
php artisan generator:sidebar dynamic
```

When using a static Sidebar menu, you are free to modify the Sidebar menu in `resources/views/layouts/sidebar.blade.php`

```sh
php artisan generator:sidebar static
```
::: info
When you create a new module with the Generator, the Sidebar will automatically revert to dynamic. But don't panic, you may revert to the previous settings.
:::

## Utilitas/Helper

### Helper
The helper class is placed in `App\Generators\helper.php`

#### Check active menu on Sidebar
Checks whether the menu on the Sidebar matches the accessed uri.

```php
is_active_menu(string|array $menu): boolean;
```
### Utility Classes

All utility functions you might need are available in `App\Generators\GeneratorUtils`

#### `GeneratorUtils`
```php
namespace App\Generators;

class GeneratorUtils 
{

}
```

#### `ImageService`
This class is used to perform image upload and manipulation functions using [Intervention Image v3.x](https://image.intervention.io/v3)

```php
namespace App\Generators\Services;

use App\Generators\Interfaces\ImageServiceInterface;
use Illuminate\Support\Facades\Storage;

class ImageService implements ImageServiceInterface
{
    /**
     * @throws \Exception
     */
    public function upload(string $name, string $path, string|null $defaultImage = null, string $disk = 'local', int $width = 500, int $height = 500, bool $isCustomUpload = false): string|null
    {
        if (request()->file($name) && request()->file($name)->isValid()) {
            if (!$isCustomUpload) {
                $file = request()->file($name);

                if (class_exists(\Intervention\Image\Facades\Image::class)) {
                    $filename = $file->hashName();
                } else {
                    // set image to webp
                    $filename = str()->random(30) . '.webp';
                }

                // s3 or local
                switch (config('generator.image.disk', $disk)) {
                    case 's3':
                        if (class_exists(\Intervention\Image\Facades\Image::class)) {
                            // for intervention v2
                            $image = \Intervention\Image\Facades\Image::make($file)->resize($width, $height, config('generator.image.crop') ? function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            } : null)->encode($file->extension());
                        } else {
                            // for intervention v3

                            $imageInstance = \Intervention\Image\Laravel\Facades\Image::read($file);

                            if (config('generator.image.crop')) {
                                // constraint aspect ratio
                                $image = $imageInstance->resizeDown($width, $height)->encode(new \Intervention\Image\Encoders\WebpEncoder(quality: 65));
                            } else {
                                $image = $imageInstance->encode(new \Intervention\Image\Encoders\WebpEncoder(quality: 65));
                            }
                        }

                        Storage::disk('s3')->put($path . '/' . $filename, $image);

                        // remove old image
                        if ($defaultImage) $this->delete($path . $defaultImage, 's3');
                        break;
                    default:
                        if (!file_exists($path)) mkdir($path, 0777, true);

                        // for intervention v2
                        if (class_exists(\Intervention\Image\Facades\Image::class)) {
                            \Intervention\Image\Facades\Image::make($file->getRealPath())->resize($width, $height, config('generator.image.crop') ? function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            } : null)->save($path . $filename);
                        } else {
                            // for intervention v3
                            $image = \Intervention\Image\Laravel\Facades\Image::read($file);

                            if (config('generator.image.crop')) {
                                // constraint aspect ratio
                                $image->resizeDown($width, $height)->toWebp()->save($path . $filename);
                            } else {
                                $image->toWebp()->save($path . $filename);
                            }
                        }

                        // remove old image
                        if ($defaultImage) $this->delete($path . $defaultImage);
                        break;
                }

                return $filename;
            } else {
                // TODO: write your logic here
                return 'something';
            }
        }

        return $defaultImage;
    }

    public function delete(string|null $image, string $disk = 'local'): void
    {
        if ($image) {
            switch ($disk) {
                case 's3':
                    Storage::disk('s3')->delete($image);
                    break;
                default:
                    if (file_exists($image)) unlink($image);
                    break;
            }
        }
    }
}

```