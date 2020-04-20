async function getData() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const response = await fetch("https://api.covid19api.com/summary");
  const data = await response.json();
  console.log(data);
  const newConfirmed = data.Global.NewConfirmed;
  const totalConfirmed = data.Global.TotalConfirmed;
  const newDeaths = data.Global.NewDeaths;
  const totalDeaths = data.Global.TotalDeaths;
  const newlyRecovered = data.Global.NewRecovered;
  const totalRecovered = data.Global.TotalRecovered;

  document.getElementById("totalConfirmed").textContent = numberWithCommas(
    totalConfirmed
  );
  document.getElementById("newConfirmed").textContent = numberWithCommas(
    newConfirmed
  );
  document.getElementById("newDeaths").textContent = numberWithCommas(
    newDeaths
  );
  document.getElementById("totalDeaths").textContent = numberWithCommas(
    totalDeaths
  );
  document.getElementById("newlyRecovered").textContent = numberWithCommas(
    newlyRecovered
  );
  document.getElementById("totalRecovered").textContent = numberWithCommas(
    totalRecovered
  );
}

getData();
setInterval(getData, 900000);
