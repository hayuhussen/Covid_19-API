// Fetch data from the COVID-19 API
fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    // Extract the relevant data
    const countries = data.Countries.map(country => {
      return {
        name: country.Country,
        cases: country.TotalConfirmed,
        deaths: country.TotalDeaths,
        recovered: country.TotalRecovered
      }
    });
    console.log("countries", countries);

    // Create a chart using covid-charts
    // const chart = new CovidCharts({
    //   el: '#chart-container',
    //   data: {
    //     type: 'bar',
    //     datasets: [{
    //       label: 'Cases',
    //       data: countries.map(country => country.cases)
    //     }, {
    //       label: 'Deaths',
    //       data: countries.map(country => country.deaths)
    //     }, {
    //       label: 'Recovered',
    //       data: countries.map(country => country.recovered)
    //     }],
    //     labels: countries.map(country => country.name)
    //   }
    // });

    // Add a search box
//     const searchBox = document.querySelector('#search-box');
//     searchBox.addEventListener('input', event => {
//       const searchTerm = event.target.value.toLowerCase();
//       const matchingCountries = countries.filter(country => {
//         return country.name.toLowerCase().includes(searchTerm);
//       });
//       chart.update({
//         labels: matchingCountries.map(country => country.name),
//         datasets: [{
//           label: 'Cases',
//           data: matchingCountries.map(country => country.cases)
//         }, {
//           label: 'Deaths',
//           data: matchingCountries.map(country => country.deaths)
//         }, {
//           label: 'Recovered',
//           data: matchingCountries.map(country => country.recovered)
//         }]
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Failed to fetch COVID-19 data:', error);
  });
