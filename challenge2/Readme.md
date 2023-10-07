## Skill Metric

- Programming Algorithm
- Melakukan error handling
- Menerapkan Asynchronous process
- Menerapkan OOP
- Menggunakan Git

## Delivery

- [x] Membuat repositori "Basic-Banking-System"
- [x] Salin file bank_account.js Challenge 1 ke direktori proyek di repositori baru
- [x] Membuat file banking_system.js
- [x] Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
- [x] Menggunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous
- [x] Commit dan push perubahan ke repositori GitHub

## Criteria

- [x] Menggunakan modular class OOP (40 points)
- [x] Mengurai proses berpikir dengan menggunakan flowchart (30 points)
- [x] Menggunakan GitHub untuk mengelola repository (30 points)

## Flowchart

![Tux, the Linux](/flowchart.jpeg)

## Pseudocode
```
class BankAccount {
    constructor(params) {
        // Mencegah akses langsung ke kelas ini
        Jika this.constructor sama dengan BankAccount
            Lemparkan Error dengan pesan "Tidak dapat diakses"
-
        Inisialisasi _saldo dengan nilai dari params.saldo
    }
-
    deposit(angka) {
        Tunda eksekusi selama 2 detik
        Tambahkan angka ke _saldo
        Perbarui tampilan saldo di halaman HTML
    }
-
    withdraw(angka) {
        Tunda eksekusi selama 2 detik
        Kurangkan angka dari _saldo
        Perbarui tampilan saldo di halaman HTML
    }
}
```
```
class ImplAlert extends Base {
    deposit(angka) {
        Panggil metode deposit dari kelas induk (Base)
        Tunda eksekusi selama 4 detik
        Tampilkan pesan alert dengan detail deposit dan saldo
    }
-
    withdraw(angka) {
        Panggil metode withdraw dari kelas induk (Base)
        Tunda eksekusi selama 4 detik
        Tampilkan pesan alert dengan detail withdrawal dan saldo
    }
}
```
```
class ImplPoly extends ImplAlert(BankAccount) {
    constructor(params) {
        Panggil konstruktor kelas induk (ImplAlert) dengan params
    }
-
    deposit(angka) {
        try
            Jika angka bukan angka
                Tampilkan pesan alert "Input harus berupa angka"
            Jika angka kurang dari atau sama dengan 0
                Tampilkan pesan alert "Input harus lebih besar dari 0"
-
            Panggil metode deposit dari kelas induk (ImplAlert)
        catch error jika ada dan tampilkan pesan error di konsol
    }

    withdraw(angka) {
        try
            Jika angka bukan angka
                Tampilkan pesan alert "Input harus berupa angka"
            Jika angka kurang dari atau sama dengan 0
                Tampilkan pesan alert "Input harus lebih besar dari 0"
            Jika angka lebih besar dari _saldo
                Tampilkan pesan alert "Saldo tidak cukup. Saldo saat ini sebesar _saldo"
-
            Panggil metode withdraw dari kelas induk (ImplAlert)
        catch error jika ada dan tampilkan pesan error di konsol
    }
}
```
```
Deklarasi objek user dari kelas ImplPoly dengan saldo awal 0
```
```
Fungsi deposit()
    try
        Minta input jumlah saldo dari pengguna
        Konversi input menjadi angka floating-point
        Panggil metode deposit dari objek user dengan input
    catch error jika ada dan tampilkan pesan error di konsol

Fungsi withdraw()
    try
        Minta input jumlah saldo dari pengguna
        Konversi input menjadi angka floating-point
        Panggil metode withdraw dari objek user dengan input
    catch error jika ada dan tampilkan pesan error di konsol
```