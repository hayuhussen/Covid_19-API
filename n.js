function fetchData() {
    return fetch("https://api.covid19api.com/dayone/country/south-africa") 
      .then((response) => response.json())
      .then((data) => {
        const countries = data.Countries.map((country) => {
          return {
            name: country.Country,
            cases: country.TotalConfirmed,
            deaths: country.TotalDeaths,
            recovered: country.TotalRecovered,
          };
        });
        return countries;
      })
      .catch((error) => {
        console.error("Failed to fetch COVID-19 data:", error);
      });
  }
  
  // Create the chart
  function createChart(country) {
    const chart = Highcharts.chart("chart-container", {
      chart: {
        type: "column",
      },
      title: {
        text: country.name + "'s summary",
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        title: {
          text: "Number of Cases",
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
        },
      },
      series: [
        {
          name: "Cases",
          colorByPoint: true,
          data: {
            name: country.name,
            y: country.cases,
            drilldown: country.name,
          },
        },
      ],
    });
    chart.addSeries({
      name: country.name,
      id: country.name,
      type: "column",
      data: [
        ["Deaths", country.deaths],
        ["Recovered", country.recovered],
      ],
    });
  
    return chart;
  }
  
  // Search for specific country
  function searchForCountry(countries, chart) {
    const searchBox = document.querySelector("#search-box");
    searchBox.addEventListener("input", (event) => {
      const searchTerm = event.target.value.toLowerCase();
      console.log("searchTerm", searchTerm);
      const matchingCountries = countries.filter((country) => {
        return country.name.toLowerCase().includes(searchTerm);
      });
      chart.series[0].setData({
        name: matchingCountries[0].name,
        y: matchingCountries[0].cases,
        drilldown: matchingCountries[0].name,
      });
      chart.setTitle({ text: matchingCountries[0].name + "'s summary" });
    });
  }
  
  // Select country
  function selectCountry(countries, chart) {
    const selectBox = document.querySelector("#country-select");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name;
      option.textContent = country.name;
      selectBox.appendChild(option);
    });
    selectBox.addEventListener("change", (event) => {
      const selectedCountry = event.target.value;
      console.log("selectedCountry", selectedCountry);
      const matchingCountry = countries.find((country) => {
        return country.name === selectedCountry;
      });
      chart.series[0].setData([
        {
          name: "Cases",
          y: matchingCountry.cases,
          drilldown: matchingCountry.name,
        },
      ]);
      chart.setTitle({ text: matchingCountry.name + "'s summary" }); // update chart title
    });
  }
  
  async function main() {
    const countries = await fetchData();
    const chart = createChart(countries[0]);
    searchForCountry(countries, chart);
    selectCountry(countries, chart);
  }
  
  main();