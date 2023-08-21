const container = document.querySelector(".product-wrapper")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


async function getProduct(){
  const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${id}`)
  const movie = await response.json()

  container.innerHTML = `
  <div class="product-wrapper">
  <div class="product-card">
   <div class="product-card-image">
   <img src="${movie.image}" class="filmcover-product" alt="Cover image of the movie" />
   </div>
   <div class="product-card-content">
    <div class="product-content-container">
     <h1 class="film-title-product">${movie.title}</h1>
     <p class="film-category">${movie.genre} | ${movie.released} | Rating: ${movie.rating} | 4k</p>
     <p>
      ${movie.description}
     </p>
     <div class="price-cta-container">
      <p class="price-product">${movie.price}$</p>
      <a href="./checkout.html" class="cta">Buy Now</a>
     </div>
    </div>
   </div>
  </div>
 </div>
  `
  
}

getProduct()


// import { baseApiUrl, endpointApiUrl } from "./apiService.js";
// import { createMessage } from "./errorMessage.js";
// import {getMovie} from "./APIsingle.js";

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const product = document.querySelector(".container");
// const apiUrl = `${baseApiUrl}${endpointApiUrl}`;

// async function createHtml() {
//     const movie = await getMovie();

//     product.innerHTML = '';
//     product.innerHTML +=
//         `<section class="product-wrapper">
//             <div class="product-card">
//                 <h1>${movie.title}</h1>
//                 <p class="product-content-container">${movie.description}</p>     
//                 <p>Release date: ${movie.released}</p>
//                 <p>Rated: ${movie.rating}</p>
//                 <p>Genre: ${movie.genre}</p>
//                 <h2 id="price"></h2>
//                 <h3 id="sale"></h3>
//             </div>
//             <div class="product-card-image">
//                 <img src="${movie.image}" alt="Cover image of the movie" class="img">
//                 <a href="cart.html" class="cta" id="ctaproduct">BUY NOW</a>
//             </div>
//         </section>`;

//     document.title = movie.title;

//     if (movie.onSale === true){

//         document.getElementById('sale').innerHTML += `<h3 id="sale">$ ${movie.discountedPrice}</h3>`;
//         document.getElementById('price').innerHTML += `<h2 id="reduced-price">$ ${movie.price}</h2>`;
//     }

//     else {
//         document.getElementById('price').innerHTML += `<h2>$ ${movie.price}</h2>`;
//         document.getElementById('sale').innerHTML = ``;
//     }

// }

// createHtml();