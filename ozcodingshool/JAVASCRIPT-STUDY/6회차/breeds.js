const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
var request1 = new XMLHttpRequest()
var request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")
const reset = document.getElementById("reset");

var currentDogs = []

function displayDogs(item) {
    const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item")
    dogImgDiv.innerHTML = `
    <img src=${item}>
  `
    main.appendChild(dogImgDiv)
}

function getList() {

    // 강아지 사진 뿌리기
    request1.open("GET", apiRandomDogs)
    request1.addEventListener("load", function () {

        const response = JSON.parse(request1.response)
        response.message.forEach(function (item) {
            currentDogs.push(item)
            displayDogs(item)
        });

    })
    request1.send()

    // 견종 텍스트 뿌리기
    request2.open("GET", apiAllBreeds)
    request2.addEventListener("load", function () {
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function (item) {
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        });
    })
    request2.send()
}

window.addEventListener("load", function () {
    getList()
})

//새 사진 불러오기
reset.addEventListener("click", function () {
    // location.reload();
    main.innerHTML = ""
    currentDogs.splice(0,currentDogs.length);
     request1 = new XMLHttpRequest()
     request2 = new XMLHttpRequest()
    // request1.splice(0,currentDogs.length)
    // request2.splice(0,currentDogs.length)
    // currentDogs.dele;
    getList()
})

button.addEventListener("click", function () {
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function (item) {
        return item.indexOf(input.value) !== -1
    })
    input.value = ""
    filteredDogs.forEach(function (item) {
        displayDogs(item)
    });
})

select.addEventListener("change", function () {
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function (item) {
        return item.indexOf(select.value) !== -1
    })

    filteredDogs.forEach(function (item) {
        displayDogs(item)
    });
})

more.addEventListener("click", function () {
    // 강아지 사진 더 불러와서 추가하고 뿌리기
    request1.open("GET", apiRandomDogs)
    request1.addEventListener("load", function () {
        const response = JSON.parse(request1.response)
        response.message.forEach(function (item) {
            currentDogs.push(item)
            displayDogs(item)
        });
    })
    request1.send()
})

tothetop.addEventListener("click", function () {
    window.scrollTo({ top: 0 })
})