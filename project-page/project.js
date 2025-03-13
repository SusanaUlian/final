async function getBreweryInfo() {
    const res = await fetch(
      "https://api.openbrewerydb.org/v1/breweries/?per_page=1"
    );
    const brewery = await res.json();
  
    const results = brewery.map((brewery) => {
      return {
        name: brewery.name,
        address: `${brewery.address_1}, ${brewery.city}, ${brewery.state}`,
        phone: brewery.phone,
        type: brewery.brewery_type,
        website: brewery.website_url

      };
    })

    const infoBrewery = document.querySelector(".container-brewery");
    infoBrewery.innerHTML = " ";

    results.forEach((brewery) => {
        infoBrewery.innerHTML += ` <div class="infoProjects">
                                            <img src="/img/cerveceria.jpg" alt="brewery"></img>
                                            <p class="information"> Name: ${brewery.name},<br> 
                                            Address: ${brewery.address}, <br>
                                            Type: ${brewery.type}, <br> 
                                            Phone: ${brewery.phone}, <br>
                                            Email: ${brewery.website}</p>
                                            <p class="information">Breweries.project is Europe’s brewers knowledge portal, the central point at European level where brewers can find information, tips, data, guidance on brewing technologies, brewing techniques, marketing, trade forecast and business insights. Breweries project has been developed to service European brewers and provide them with data and information that will help them grow their business and improve their brewing skills.</p>
                                        
                                 </div>  `

    })
    }
    getBreweryInfo();
