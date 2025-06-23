let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-container");

cart.forEach(function (el) {
  let title = document.createElement("h2");
  title.innerText = el.title;

  let price = document.createElement("h3");
  price.innerText = el.price;

  let image = document.createElement("img");
  image.src = el.image;

  let div = document.createElement("div");
  div.append(image, title, price);
  container.append(div);
});
