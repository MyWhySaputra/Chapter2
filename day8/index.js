/*
function terbang(ketinggian) {
    if (ketinggian > 10000) {
        throw new Error("Ketinggian terlalu tinggi!");
    }
    return "Pesawat berada di ketinggian yang aman.";
}

try {
    var status = terbang(12000);
} catch (error) {
    console.log(error);
}

console.log(status);
*/

/*
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Ini contoh error kustom.");
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Menangkap CustomError: " + error.message);
    }else {
        console.log("Menangkap error default: " + error.message);
    }
}
*/

function takeOff(altitude) {
    if (altitude > 10000) {
        throw new Error("Ketinggian terlalu tinggi!");
    } else if (altitude < 0) {
        throw new Error("Ketinggian tidak valid!");
    } else {
        return "Pesawat lepas landas menuju ketinggian " + altitude + " meter.";
    }
}

function flightSimulation(altitude) {
    try {
        const message = takeOff(altitude);
        console.log(message);
    } catch (error) {
        console.error(error.message);
    }
}

// Panggil flightSimulation(12000) dan tangkap pesan error yang mungkin muncul.
flightSimulation(12000);

// Panggil flightSimulation(-500) dan tangkap pesan error yang mungkin muncul.
flightSimulation(-500);

// Panggil flightSimulation(8000) dan tangkap pesan keluaran.
// Jika tidak ada error, tampilkan pesan hasil di konsol.
flightSimulation(8000);