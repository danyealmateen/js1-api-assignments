//Dog API
//1.Hämta en random hundbildsurl av en dalmatiner och visa bilden på Webbsidan.
// let renderAPI = document.getElementById("renderAPI");

// fetch("https://dog.ceo/api/breed/dalmatian/images/random")
//   .then((response) => response.json())
//   .then((data) => renderAPI.setAttribute("src", data.message));

//Dog API
//2.Hämta 10 random bilder av pomeranians och visa på webbsidan.
// function generateTenPoms() {
//   let pictureDiv = document.getElementById("pictureDiv");
//   fetch("https://dog.ceo/api/breeds/image/random/10")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       data.message.forEach((mess) => {
//         let createImg = document.createElement("img");
//         pictureDiv.appendChild(createImg);
//         createImg.setAttribute("src", mess);
//       });
//     });
// }
// generateTenPoms();

//PUNK API
//1. Hämta info om ett random öl och presentera beskrivningen och ‘food pairing’ i html-element.
// function getRandomBeer() {
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       data.forEach((beerInfo) => {
//         let divvy = document.createElement("div");
//         divvy.innerHTML = `<div id="des">Description: ${beerInfo.description}</div><br><div id="food">${beerInfo.food_pairing}</div>  `;
//         console.log(beerInfo);
//         document.body.appendChild(divvy);
//       });
//     });
// }
// getRandomBeer();

//2. Hämta info om ett random öl och visa namnet på ölen och en bild på ölen i HTML-element.
// function beerInfo() {
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let beerDiv = document.createElement("div");
//       let beerImg = document.createElement("img");
//       beerImg.setAttribute("src", data[0].image_url);
//       beerDiv.innerHTML = `<div>${data[0].description}</div><hr>${data[0].name}<hr>`;
//       document.body.appendChild(beerDiv);
//       document.body.appendChild(beerImg);
//     });
// }
// beerInfo();

//3. Hämta info om ett random öl och visa namnen på alla ingredienser i HTML-element.
function oneMoreBeer() {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
oneMoreBeer();
