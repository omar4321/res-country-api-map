 const loadData =() =>{
    fetch('https://restcountries.eu/rest/v2/all')
     .then (res=> res.json())
    .then (data => displyData (data) );

}

const displyData = countries => {

    
    const countryHtml= countries.map(country=> getCountryHtml(country))
    console.log(countryHtml);
    const country = document.getElementById('country');
       country.innerHTML = countryHtml.join('  ');
}
const getCountryHtml = country =>  {
    return`
    <div class ="element">
    <h2> ${country.name}  </h2>
    <h4> captial: ${country.captial}  </h4>
    <img src = "${country.flag}">
    </div>
    
    `
}
loadData()