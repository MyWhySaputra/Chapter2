// Asyncronous
/*
console.log('Aku keluar pertama')

setTimeout(() => console.log('Aku keluar setelah 3 detik'), 3000)
setTimeout(() => console.log('Apakah aku yang kedua?'), 0)

console.log('Apakah aku yang ketiga?')
*/

// Interval
/*
let a = 0
const iniInterval = setInterval(() => {
    console.log(`${++a} kali kali jalan`)
    if (a === 10) {
        clearInterval(iniInterval)
    }
}, 1000)

console.log('Apakah aku jalan duluan?')
*/

// Promise
function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        console.log('Password:', password)
        if (password !== '123456')
            return reject("Wrong password!")

        resolve("Password is correct!")
    })
}
// Output-nya akan resolve
isPasswordCorrect('123456')
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
// Output-nya akan reject
isPasswordCorrect('123455')
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))


//async-await
/*
let punyaBuku = false
//function beliBuku
const beliBuku = () => new Promise(resolve => {
    setTimeout(() => {
        punyaBuku = true
        resolve()
    }, 1000)
})
// Function gambar meminta judul sebagai parameter
// Mengembalikan promise
const gambar = judul => {
    if (!punyaBuku) return Promise.reject('Tidak punya buku')
    return Promise.resolve({
        id: Date.now(), title: judul, createAt: Date()
    })
}
// Function utama akan menjalankan function yang lain

// Contoh salah
// async function main() {
//     if (!punyaBuku) await beliBuku()
//     const hasilGambar = await gambar("Doraemon")
//     console.log(hasilGambar)
// }

async function main() {
    try {
        if (!punyaBuku) await beliBuku()
        const hasilGambar = await gambar("Doraemon")
        console.log(hasilGambar)
    } catch (err) {
        console.log("Beli buku dulu dong!")
    }
}

main()
*/