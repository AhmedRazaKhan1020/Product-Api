let productdiv=document.querySelector('.product')
let displayproduct = async () => {
    productdiv.innerHTML="";
    let product=await fetch('https://fakestoreapi.com/products');
    let finalproduct=await product.json();
    finalproduct.forEach(element => {
        productdiv.innerHTML+=` <div class="productitem">
                <img src="${element.image}" alt="">
                <p>${element.price}|${element.rating.rate}<span class="star">★★★</span></p>
                <h3>$${element.title}</h3>
                <button onclick="seemore(${element.id}) ">see more</button>
            </div>`
    });
}
displayproduct()
function seemore(id) {
    var data = localStorage.setItem("card",id);
    console.log(data);
    window.location = "seemore.html"
}
