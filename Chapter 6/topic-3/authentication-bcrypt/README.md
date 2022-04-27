# Binar: Authentication & Bcrypt

Di dalam repository ini terdapat implementasi authentication dan penggunaan `bcryptjs` di dalamnya.

## Getting Started

Untuk mulai membuat sebuah implementasi dari HTTP Server, mulainya menginspeksi file [`app/index.js`](./app/index.js), dan lihatlah salah satu contoh `controller` yang ada di [`app/controllers/mainController.js`](./app/controllers/mainController.js)

Lalu untuk menjalankan development server, kalian tinggal jalanin salah satu script di package.json, yang namanya `develop`.

```sh
yarn develop
```

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir

## Endpoints

Di dalam repository ini, terdapat dua endpoint utama, yaitu `login` dan `register`.

##### `/api/v1/login`

Endpoint ini digunakan untuk login

###### Request

```json
{
  "email": "sabrina@binar.co.id",
  "password": "awurenwae"
}
```

###### Response

```json
{
  "id": 1,
  "email": "sabrina@binar.co.id",
  "createdAt": "2022-04-17T13:52:42.372Z",
  "updatedAt": "2022-04-17T13:52:42.372Z"
}
```

##### `/api/v1/register`

Endpoint ini digunakan untuk registrasi user

###### Request

```json
{
  "email": "sabrina@binar.co.id",
  "password": "awurenwae"
}
```

###### Response

```json
{
  "id": 1,
  "email": "sabrina@binar.co.id",
  "token": "iniToken",
  "createdAt": "2022-04-17T13:52:42.372Z",
  "updatedAt": "2022-04-17T13:52:42.372Z"
}
```
