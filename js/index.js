import { baseApiUrl, endpointApiUrl } from "./apiService.js";
import { getData } from "./apiService.js";
import { createMessage } from "./errorMessage.js";
fetch('https://eirikveskje.com/wp-json/wc/store/products', {
  mode: 'no-cors'
})

const favContainer = document.querySelector(".continue-watching__movies");
const discoverContainer = document.querySelector(".discover .continue-watching__movies");
const poster = document.querySelector(".movie-front")
const posterGif = document.querySelector(".movie-gif-10")
const apiUrl = `${baseApiUrl}${endpointApiUrl}`;

async function fetchPoster () {
  const response = await getData("https://www.eirikveskje.com/wp-json/wc/v3/products/2165?consumer_key=ck_b5877d7b70a5804f0ad7e9289848c8613753495b&consumer_secret=cs_b9042d621a1673ff92a770a2094124ab3c2148f0");

  poster.innerHTML = `
  <a href="../pages/product.html?id=${response.id}">
  <section class="new-release">
   <div>
    <img
     class="movie-poster"
     src="${response.images[0].src}"
     alt="batman" />
    <div class="movie-info">
     <p>${response.name}</p>
     <img class="rating" src="./assets/stars.svg" alt="rating" />
     <p>From 342 users</p>
    </div>
    <p class="movie-price">${response.price}$</p>
   </div>
  </section>
 </a>
  `;
  
}
fetchPoster()

// async function fetchPosterGif () {
//   const response = await getData("https://www.eirikveskje.com/wp-json/wc/v3/products/2165?consumer_key=ck_b5877d7b70a5804f0ad7e9289848c8613753495b&consumer_secret=cs_b9042d621a1673ff92a770a2094124ab3c2148f0");

//   posterGif.innerHTML = `
//   <a href="../pages/product.html?id=${response.id}">
//   <section class="new-release">
//   <div>
//    <img
//     class="movie-poster"
//     src="../assets/movie-pictures/giphy.gif"
//     alt="godzilla" />
//    <div class="movie-info-gif">
//     <p>${response.name}</p>
//     <p>${movie.genre} | ${movie.released} | Rating: ${movie.rating}</p>
//    </div>
//   </div>
//  </section>
//  </a>
//   `;
// }
// fetchPosterGif()
// console.log(posterGif);


async function fetchData() {
  try {
    const data = await getData(apiUrl);

    favContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      if (i === 10) break;
      favContainer.innerHTML += `
      <a href="../pages/product.html?id=${data[i].id}">
        <div class="movies__container">
          <div>
            <img src="${data[i].images[0].src}" alt="${data[i].name}" />
          </div>
          <p>${data[i].name}</p>
          <p>${data[i].price}$</p>
        </div>
        </a>
      `;
    }

    discoverContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      discoverContainer.innerHTML += `
      <a href="../pages/product.html?id=${data[i].id}">
        <div class="movies__container">
          <div>
            <img src="${data[i].images[0].src}" alt="${data[i].name}" />
          </div>
          <p class="title-product">${data[i].name}</p>
          <p>${data[i].price}$</p>
        </div>
        </a>
      `;
    }
  } catch (error) {
    console.log(error);
    createMessage();
  }
}


function showLoader() {
  favContainer.innerHTML = '<div class="loader"></div>';
  discoverContainer.innerHTML = '<div class="loader"></div>';
}

function hideLoader() {
  const loaders = document.querySelectorAll(".loader");
  loaders.forEach((loader) => loader.remove());
}

window.addEventListener("DOMContentLoaded", () => {
  showLoader();
  fetchData().finally(hideLoader);
});




// const favContainer = document.querySelector(".continue-watching__movies")
// const discoverContainer = document.querySelector(".discover .continue-watching__movies")
// const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";


// async function getData() {
//     try {
//         const response = await fetch(apiUrl); // Fetch the data
//         const data = await response.json(); // Process to JSON

//         for(let i = 0; i < data.length; i++) {
//             if(i === 10) break;
//             favContainer.innerHTML += `
//             <div class="movies__container">
//                 <div>
//                     <img src="${data[i].image}" alt="${data[i].title}"/>
//                 </div>
//                 <p>${data[i].title}</p>
//                 <p>${data[i].price}</p>
//                 <p>${data[i].genre}</p>
//             </div>    
//             `
//         }

//         for(let i = 4; i < data.length; i++) {
//             discoverContainer.innerHTML += `
//             <div class="movies__container">
//                 <div>
//                     <img src="${data[i].image}" alt="${data[i].title}"/>
//                 </div>
//                 <p class="title-product">${data[i].title}</p>
//                 <p>${data[i].price}</p>
//                 <p>${data[i].genre}</p>
//             </div>    
//             `
//         }


//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()
