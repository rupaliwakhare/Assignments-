let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let name = document.getElementById("name");
let category = document.getElementById("category");
let image = document.getElementById("image");
let price = document.getElementById("price")
// console.log(price);

let gender = document.getElementById("gender")
form.addEventListener("submit", getData)

let data_arr = []

function getData(){
    event.preventDefault();
    let obj = {
        name: name.value,
        category: category.value,
        image : image,
        price: price.value,
        gender: gender.value
    }
    // console.log(obj);
    data_arr.push(obj)
localStorage.setItem("array", JSON.stringify(data_arr))
}