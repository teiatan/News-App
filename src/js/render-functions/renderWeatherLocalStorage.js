// async function ggg() {
//   const results = await fetchDefaultWeather();
//   localStorage.city = results.data.name;
//   localStorage.temperature = results.data.main.temp;
//   localStorage.dateOfWeather = results.data.main.temp;
//   window.setTimeout(
//     (document.querySelector(
//       '.weather-item'
//     ).innerHTML = `<li class="weather-item card">Temperature in ${localStorage.city} ${localStorage.temperature}</li>`),
//     5000
//   );
//   window.setTimeout(
//     document
//       .querySelector('.weather-item')
//       .insertAdjacentHTML('afterbegin', `<h1>header</h1>`)
//   );
// }
// ggg();
// function aaa() {
//   console.log(document.querySelector('.weather-item'));
// }
