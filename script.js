'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
const renderCountry = function (data) {
  const html = `
        <article class="country" >
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}people</p>

          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          )}</p>
           <p class="country__row"><span>💰</span>${Object.keys(
             data.currencies
           )}</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// ///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);
//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}people</p>

//           <p class="country__row"><span>🗣️</span>${Object.values(
//             data.languages
//           )}</p>
//            <p class="country__row"><span>💰</span>${Object.keys(
//              data.currencies
//            )}</p>

//           </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('USA');
// getCountryData('germany');

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const getCountryAndNeibour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   console.log(request.responseText);
//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     // get neibour county
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       const nei = 'neighbour';
//       renderCountry(data2, nei);
//     });
//   });
// };
// getCountryAndNeibour('usa');
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);
// const getCountyData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     });
// };

const getCountyData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`country not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = 'asdasd';
      if (!neighbour) {
        return;
      }
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`country not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} mistake`);
      renderError(`something went wrong ${err.message}.try aganain`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountyData('portugal');
});
// getCountyData('');
