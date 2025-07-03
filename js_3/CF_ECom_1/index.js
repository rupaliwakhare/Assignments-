function Product_data(name,category,image,price,gender,sold){
    this.name = name,
    this.category = category,
    this.img = image,
    this.price = price,
    this.gender = gender,
    this.sold = sold || false
}
// console.log(Product_data);


let btn = document.getElementById("add");
let products = JSON.parse(localStorage.getItem("products")) || [];
btn.addEventListener("click",function(){
    event.preventDefault();
   let name = document.getElementById("name");
   Product_data.name = name.value ;
   let category = document.getElementById("category");
   Product_data.category = category.value;
//    let image = document.getElementById("img");
//    image.src = image;
   let price = document.getElementById("price");
   Product_data.price = price.value;
   let gender = document.getElementById("gender");
   Product_data.gender = gender.value;
   let sold = document.getElementById("sold");
   Product_data.sold = sold.value;
   
   let product = new Product_data(name, category,price,gender,sold);
   products.push(product);
   localStorage.setItem("Products", JSON.stringify(products));   
})
