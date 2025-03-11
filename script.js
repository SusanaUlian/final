async function getApiInfo () {
    const res = await fetch("https://api.openbrewerydb.org/v1/breweries/?per_page=3");
    const breweries = await res.json();

    const results = breweries.map((brewery) => {
        return {
            name: brewery.name,
            address: `${brewery.address_1}, ${brewery.city}, ${brewery.state}`,
            phone: brewery.phone,
        }
    })
    const projects = document.querySelector(".container-projects") ;

    results.forEach((brewery) => {
        projects.innerHTML += `<div class="container-projects">
                        <h2 class="post-title">${brewery.name}</h2>
                        <p class="post-address">${brewery.address}</p>
                        <p class="post-phone">${brewery.phone}</p>
                     </div>` 
    })
}

getApiInfo();


