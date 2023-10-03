/*
Langkah 1 : Mulai
Langkah 2 : Masukkan nilai jari-jari lingkaran (r)
Langkah 3 : Jika input bukan bilangan bulat, tampilkan pesan kesalahan dan kembali ke langkah 2
Langkah 4 : Hitung keliling lingkaran (Keliling) menggunakan rumus Keliling = 2 * pi * r
Langkah 5 : Tampilkan hasil perhitungan keliling lingkaran (Keliling)
Langkah 6 : Selesai
*/

/*
FUNCTION
    INPUT jari-jari
    IF jari-jari bukan bilangan bulat THEN
        TAMPILKAN "Input harus berupa bilangan bulat"
        GOTO FUNCTION
    END IF
    keliling = 2 * 3.14 * jari-jari
    TAMPILKAN "Keliling lingkaran adalah ", keliling
END
*/

function hitungKelilingLingkaran() {

    // Meminta pengguna memasukkan nilai jari-jari
    let input = prompt("Masukkan nilai jari-jari lingkaran:");
    const jariJari = parseFloat(input);

    // Memeriksa apakah input adalah bilangan bulat
    if (!isNaN(jariJari) && Number.isInteger(jariJari)) {
        // Menghitung keliling lingkaran
        const keliling = 2 * 3.14 * jariJari;

        // Menampilkan hasil perhitungan keliling lingkaran
        alert("Keliling lingkaran adalah: " + keliling);
    } else {
        alert("Input harus berupa bilangan bulat.");
        return hitungKelilingLingkaran();
    }
}