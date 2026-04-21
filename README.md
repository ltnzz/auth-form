# Auth Form

**Nama:** Latanza Akbar Fadilah  
**NIM:** 2410501004

Project ini adalah aplikasi Form sederhana yang mengimplementasikan fitur autentikasi pengguna berupa login dan registrasi. Aplikasi ini bisa membuat user mengupload foto nya sendiri ketika registrasi dan akan diarahkan ke Home setelah login selesai.

## Fitur Utama

- **Formik:** Digunakan untuk mengelola state form seperti input value, error, dan status submit agar lebih terstruktur dan mudah dikontrol.
- **Yup:** Digunakan sebagai schema validation untuk memastikan input user valid (misalnya format email, panjang password, dan konfirmasi password).
- **Expo Image Picker:** Digunakan untuk memilih foto profil dari galeri perangkat.
- **AsyncStorage:** Digunakan untuk menyimpan data user secara lokal agar tetap tersedia meskipun aplikasi ditutup (tanpa database).

## Screenshot Preview

<div align="center">
  <img src="./screenshot/signin.jpeg" width="200" alt="Login Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step1.jpeg" width="200" alt="Register Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step2.jpeg" width="200" alt="Upload Photo Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step3.jpeg" width="200" alt="Home Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-photo.jpeg" width="200" alt="Home Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/homescreen.jpeg" width="200" alt="Home Screen" />
</div>

## Cara Menjalankan

Aplikasi ini menggunakan Expo.

### 1. Clone Repository

```bash
git clone https://github.com/ltnzz/auth-form
cd auth-form
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Aplikasi

```bash
npx expo start
```