var random
var adjectives = ["senang", "sedih", "marah", "cantik", "tampan", "ganteng", "keren", "gokil", "keras", "lembut"]
var nouns = ["kucing", "kambing", "harimau", "kayu", "kursi", "meja", "satpam", "sapu", "laptop", "buku"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+"]
var newUsername;
var newPassword;
var historyUsername = []
var historyPassword = []

var generate = function (option) {
    // var option = prompt("1. Generate username atau opsi 2. Generate password")
    if (!isNaN(option)) {
        random = Math.floor(Math.random() * 10)
        if (option == 1) {
            random = Math.floor(Math.random() * 10)
            newUsername = adjectives[random] + nouns[random]
            historyUsername.push(newUsername)
            console.log(newUsername)
            console.log(historyUsername)
            // document.write(newUsername)

            document.getElementById("result").textContent = newUsername;

            // Tampilkan history username
            updateHistory(
                "usernameHistory",
                historyUsername,
                "Belum ada username"
            );
        } else if (option == 2) {
            random = Math.floor(Math.random() * 10)
            newPassword = adjectives[random].toUpperCase() + nouns[random] + random + symbols[random]
            historyPassword.push(newPassword)
            console.log(newPassword)
            console.log(historyPassword)
            // document.write(newPassword)

            document.getElementById("result").textContent =
                newPassword;

            // Tampilkan history password
            updateHistory(
                "passwordHistory",
                historyPassword,
                "Belum ada password"
            );
        } else {
           alert("Pilihan anda tidak tersedia");
        }
    } else {
        alert("Tolong masukkan angka")
    }
}

function updateHistory(elementId, historyArray, emptyMessage) {
    var historyList = document.getElementById(elementId);

    historyList.innerHTML = "";

    if (historyArray.length === 0) {
        var emptyItem = document.createElement("li");
        emptyItem.textContent = emptyMessage;
        historyList.appendChild(emptyItem);
        return;
    }

    historyArray.forEach(function(item) {
        var listItem = document.createElement("li");

        // textContent agar teks tidak dianggap sebagai HTML
        listItem.textContent = item;

        historyList.appendChild(listItem);
    });
}


// Fungsi untuk copy hasil generator
function copyResult() {
    var result = document.getElementById("result").textContent;

    if (result === "Hasil akan muncul di sini") {
        alert("Generate username atau password terlebih dahulu!");
        return;
    }

    navigator.clipboard.writeText(result)
        .then(function() {
            alert("Hasil berhasil disalin!");
        })
        .catch(function() {
            alert("Gagal menyalin hasil.");
        });
}

// generate(userOption)