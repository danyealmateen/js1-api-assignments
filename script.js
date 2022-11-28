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
// function oneMoreBeer() {
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       //forEach for ingredients
//       data.forEach((ing) => {
//         //forEach for hops
//         ing.ingredients.hops.forEach((hoppi) => {
//           let theHops = document.createElement("div");
//           theHops.innerHTML = `<div id="hops">NAME OF HOPS:${hoppi.name}</div>`;
//           document.body.appendChild(theHops);
//           console.log(hoppi.name);
//           //forEach for malt
//           ing.ingredients.malt.forEach((malti) => {
//             let theMaltis = document.createElement("div");
//             theMaltis.innerHTML = `<div>NAME OF MALTS:${malti.name}</div>`;
//             document.body.appendChild(theMaltis);
//             console.log(malti.name);
//           });
//         });
//       });
//     });
// }
// oneMoreBeer();

//4.Hämta info om ett öl som passar till Caramel toffee cake och presentera namn, tagline och image.
// function caramelBeer() {
//   fetch("https://api.punkapi.com/v2/beers")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);
//       let showBeer = document.createElement("div");
//       showBeer.innerHTML = `<div>${data[0].name}</div><hr><div>${data[0].tagline}</div><hr><img id="theImg" src="${data[0].image_url}"/>`;
//       document.body.appendChild(showBeer);
//     });
// }
// caramelBeer();

//CHUCK-NORRIS-JOKES
//1.Hämta ett random skämt och visa det i ett HTML-element.
// function getChuck() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let chuck = document.createElement("div");
//       chuck.innerHTML = `${data.value}`;
//       document.body.appendChild(chuck);
//     });
// }
// getChuck();

//2.Hämta ett random skämt i kategorin food och visa det i ett html-element
// function chuckFood() {
//   fetch("https://api.chucknorris.io/jokes/random?category=food")
//     .then((response) => response.json())
//     .then((data) => {
//       let chucky = document.createElement("div");
//       chucky.innerHTML = `<div>${data.value}</div>`;
//       document.body.appendChild(chucky);
//       console.log(data);
//     });
// }
// chuckFood();

//3.Hämta ett random skämt i kategorin sport och visa det i ett html-element
function chuckSport() {
  fetch("https://api.chucknorris.io/jokes/random?category=sport")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let sporty = document.createElement("div");
      sporty.innerHTML = `${data.value}`;
      document.body.appendChild(sporty);
    });
}
chuckSport();

//REST-COUNTRIES-API

