function cariLawan() {
    let cari = Math.ceil(Math.random() * 3)
    let comp = ""
    if (cari === 3) {
        comp = "gajah"
    } else if (cari === 2) {
        comp = "semut" 
    } else if (cari === 1) {
        comp = "manusia"
    }
    return comp
}

function hasil(person, comp) {
    let hasil
    if (person === "gajah") {
        if (comp === "semut") {
            hasil = "anda kalahhh"
        } else if (comp === "manusia") {
            hasil = "anda menangggg"
        } else if ( comp === person) {
            hasil = "sama kuattt"
        }
    } else if (person === "semut") {
        if (comp === "manusia") {
            hasil = "anda kalahhh"
        } else if (comp === "gajah") {
            hasil = "anda menangggg"
        } else if ( comp === person) {
            hasil = "sama kuattt"
        }
    } else if (person === "manusia") {
        if (comp === "gajah") {
            hasil = "anda kalahhh"
        } else if (comp === "semut") {
            hasil = "anda menangggg"
        } else if ( comp === person) {
            hasil = "sama kuattt"
        }
    }

    return hasil
}

const boxUser = document.getElementById("box-user")
const image = document.getElementById("img")
const computer = document.getElementById("comput")
const btnGajah = document.getElementById("btn-gajah")
const btnManusia = document.getElementById("btn-manusia")
const btnSemut = document.getElementById("btn-semut")
const info = document.getElementById("hasil")

btnGajah.addEventListener("click", () => {
    img.src = "./img/user-gajah.png"
    img.style.height = "100%"
    img.style.width = "100%"
    // boxUser.appenChild(img)

    const user = btnGajah.className
    const computer = cariLawan()
    const result = hasil(user, computer)
    info.innerHTML = result

    console.log('comp', computer)
    console.log('user', user)
    console.log(hasil(user, computer))

    if (computer === "gajah") {
        comput.src = "./img/comp-gajah.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "manusia") {
        comput.src = "./img/comp-manusia.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "semut") {
        comput.src = "./img/comp-semut.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    }
})

btnManusia.addEventListener("click", () => {
    img.src = "./img/user-manusia.png"
    img.style.height = "100%"
    img.style.width = "100%"
    // boxUser.appenChild(img)

    const computer = cariLawan()
    const user = btnManusia.className
    const result = hasil(user, computer)
    info.innerHTML = result
    

    console.log('comp', computer)
    console.log('user', user)
    console.log(hasil(user, computer))

    if (computer === "gajah") {
        comput.src = "./img/comp-gajah.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "manusia") {
        comput.src = "./img/comp-manusia.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "semut") {
        comput.src = "./img/comp-semut.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    }
})

btnSemut.addEventListener("click", () => {
    img.src = "./img/user-semut.png"
    img.style.height = "100%"
    img.style.width = "100%"
    // boxUser.appenChild(img)

    const computer = cariLawan()
    const user = btnSemut.className
    const result = hasil(user, computer)
    info.innerHTML = result

    console.log('comp', computer)
    console.log('user', user)
    console.log(hasil(user, computer))

    if (computer === "gajah") {
        comput.src = "./img/comp-gajah.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "manusia") {
        comput.src = "./img/comp-manusia.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    } else if (computer === "semut") {
        comput.src = "./img/comp-semut.png"
        comput.style.height = "100%"
        comput.style.width = "100%"
    }
})

