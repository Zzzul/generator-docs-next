# Fitur yang Tersedia Saat Ini

Berikut adalah beberapa fitur yang tersedia saat ini dan dapat kamu coba.

1. _CRUD Generator_
    - Mendukung lebih dari 15 [jenis kolom migrasi](https://laravel.com/docs/10.x/migrations#available-column-types), seperti `string, char, date, year`, dll.
    - Mendukung [Input HTML 5](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
    - Validasi _Request_ yang didukung: `required, in, image, min, max, string, email, number, date, exists, nullable, unique, confirmed`  
     - _Datatable_ ([Yajra Datatables](https://github.com/yajra/laravel-datatables))
    - [One To Many (Inverse) / Belongs To](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse)
    - Pembuatan Model
    - Unggah Gambar ([Intervention Image](https://image.intervention.io/v2))
    - _Single Form CRUD_
    - _CRUD API Generator_
    - _Seeder & Factory Generator_
2. Menu _Sidebar_ yang dapat dikonfigurasi ([versi lengkap](get-started.md#versi-lengkap))
3. _CRUD User_ ([versi lengkap](get-started.md#versi-lengkap))
4. Hak akses (_Role & permissions_) menggunakan [Spatie Permission](https://spatie.be/docs/laravel-permission/v5/introduction) ([versi lengkap](get-started.md#versi-lengkap))
5. Otentikasi menggunakan [Laravel Fortify](https://laravel.com/docs/10.x/fortify) ([versi lengkap](get-started.md#versi-lengkap))
    - Masuk
    - Daftar
    - Lupa Kata Sandi
    - Otentikasi 2FA
    - Pembaharuan informasi profil 

## Perintah Tersedia

### Instalasi Generator
#### Instalasi varian Generator: Sederhana (_Simple version_) / Lengkap (_Full version_)

Untuk versi sederhana
```sh
php artisan generator:install simple
```
Untuk versi lengkap
```sh
php artisan generator:install full
```
::: danger
Kedua perintah diatas akan menimpa beberapa berkas, jadi Kamu harus berhati-hati saat menjalankan perintah tersebut dan hindari menjalankannya lebih dari sekali.
:::

#### Publikasikan kelas utilitas
```sh
php artisan generator:publish utils
```

### Tetapkan menu _Sidebar_
Tetapkan menu _Sidebar_ menjadi kode `.blade` (statis) atau gunakan daftar dari konfigurasi (dinamis)

Tempat konfigurasi menu _Sidebar_ berada di ```config/generator.php```

```sh
php artisan generator:sidebar dynamic
```

Saat menggunakan menu _Sidebar_ statis, Kamu bebas untuk mengubah menu _Sidebar_ yang berada di  ```resources/views/layouts/sidebar.blade.php```

```sh
php artisan generator:sidebar static
```
::: info
Setelah Kamu membuat modul baru menggunakan Generator, _Sidebar_ akan otomatis kembali ke dinamis. Tapi tenang Kamu dapat mengubahnya kembali seperti semula.
:::

## Utilitas/Helper

### Helper

Kelas `helper` ditempatkan di `App\Generators\helper.php`

#### Periksa menu aktif pada _Sidebar_
Memerikan menu pada _Sidebar_ apakah sesuai dengan _uri_ yang sedang diakses.
```php
is_active_menu(string|array $menu): boolean;
```

### Kelas Utilitas

Semua fungsi utilitas yang mungkin Kamu butuhkan, tersedia berada di `App\Generators\GeneratorUtils`

#### `GeneratorUtils`
```php
namespace App\Generators;

class GeneratorUtils 
{

}
```

#### `ImageService`
Kelas ini digunakan untuk melakukan fungsi unggah dan manipulasi gambar menggunakan [Intervention Image v3.x](https://image.intervention.io/v3)

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

