```md
## Form Auth
- Nama  : Latanza Akbar Fadilah
- NIM   : 2410501004
- Aplikasi : Auth Form App (Login & Register)

---

## Deskripsi Aplikasi
Aplikasi Auth Form adalah aplikasi mobile berbasis React Native (Expo) yang berfungsi untuk mengelola autentikasi pengguna melalui fitur Login dan Register.

Aplikasi ini memiliki sistem form yang lengkap dengan validasi menggunakan Formik dan Yup, serta mendukung multi-step form pada proses registrasi. Data pengguna disimpan secara lokal menggunakan AsyncStorage sehingga dapat digunakan kembali saat proses login.

Fitur utama:
- Login dengan validasi email dan password
- Register multi-step (Data Pribadi → Akun → Review)
- Upload foto profil dari galeri
- Password strength indicator (weak, medium, strong)
- Auto focus antar input
- Custom alert (bukan alert bawaan)
- Penyimpanan data menggunakan AsyncStorage
- Animasi transisi antar step

---

## Dependency & Library yang Digunakan

- React Native (Expo)
- Formik → manajemen form
- Yup → validasi form
- @react-navigation/native → navigasi antar screen
- @react-native-async-storage/async-storage → penyimpanan data lokal
- expo-image-picker → upload foto dari galeri
- @expo/vector-icons → icon UI
- React Native Animated API → animasi transisi

---

## Screenshot

<div align="center">
  <img src="./screenshot/signin.jpeg" width="180" alt="Login Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step1.jpeg" width="180" alt="Register Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step2.jpeg" width="180" alt="Upload Photo Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-step3.jpeg" width="180" alt="Home Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/signup-photo.jpeg" width="180" alt="Home Screen" />
  &nbsp;&nbsp;&nbsp;
  <img src="./screenshot/homescreen.jpeg" width="180" alt="Home Screen" />
</div>

---

## Cara Menjalankan

1. Install dependency:
```

npm install

```

2. Jalankan aplikasi:
```

npx expo start

```

3. Jalankan di device:
- Scan QR dengan Expo Go (Android/iOS)
- Tekan `a` untuk Android emulator
- Tekan `i` untuk iOS simulator
```

---