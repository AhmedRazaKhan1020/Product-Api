const div = document.querySelector("#container")

const result = localStorage.getItem("card");
console.log(result);

fetch(`https://fakestoreapi.com/products/${result}`)
.then(res => res.json())
.then((res)=>{
    // console.log(res.products)

   
        div.innerHTML += `
    <div class="card" style="width: 18rem;">
    
    <div class="cardbody">
    <img src="${res.image}"alt="..." class="img">
    <h3 class="card"> <span class="span">Titile:</span>${res.title}</h3>
    <h3 class="card"> <span class="span">Category:</span> ${res.category}</h3>
      <h3 class="card"> <span class="span">Description :</span>${res.description}</h3>
      <h3 class="card"> <span class="span">rating :</span>${res.rating.rate} <span class="star">★★★</span></h3>
      <h3 class="card"><span class="span">Price: $</span>${res.price}</h3>
     
    
    </div>
  </div>
        `
    })

.catch((err)=>{
    console.log(err);
    
})