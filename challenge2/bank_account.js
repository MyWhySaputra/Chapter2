// Descripsi  saldo
let saldo = 0;

// Fungsi untuk memperbarui tampilan saldo
function updateSaldo() {
    // memperbarui tampilan saldo
    document.getElementById("saldo").value = saldo;
}

// fungsi tambah saldo
function tambahSaldo() {
    // prompt untuk memasukkan saldo yang ingin ditambahkan
    const tambah = prompt("Masukkan jumlah saldo yang ingin ditambahkan");

    // Mengonversi input ke tipe data float
    const floatTambah = parseFloat(tambah);

    // Validasi input jika angka dan kurang dari 0
    if (!isNaN(floatTambah) && floatTambah > 0) {
        // rumus saldo = saldo + tambah
        saldo += floatTambah;
        // panggil fungsi updateSaldo untuk memperbarui tampilan
        updateSaldo();
        // tampilkan pesan
        console.log(`saldo berhasil ditambahkan sebesar ${tambah}`);
    } else {
        // alert kalau masukkan string
        alert("Salah input, masukkan angka");
    }
}
// fungsi kurangi saldo
function kurangiSaldo() {
    // prompt untuk memasukkan saldo yang ingin dikurangi
    const kurang = prompt("Masukkan jumlah saldo yang ingin dikurangi");

    // Mengonversi input ke tipe data float
    const floatKurang = parseFloat(kurang);

    // Validasi input jika bukan angka dan kurang dari 0
    if (!isNaN(floatKurang) && floatKurang > 0) {
        // validasi saldo jika saldo lebih besar dari input
        if (saldo >= floatKurang) {
            // rumus saldo = saldo - kurang
            saldo -= floatKurang;
            // panggil fungsi updateSaldo untuk memperbarui tampilan
            updateSaldo();
            // tampilkan pesan
            console.log(`saldo berhasil dikurangi sebesar ${kurang}`);
        } else {
            // alert jika saldo tidak mencukupi
            alert("Saldo tidak mencukupi untuk melakukan penarikan sebesar jumlah yang diminta.");
        }
    } else {
        // alert kalau masukkan string
        alert("Salah input, masukkan angka");
    }
}