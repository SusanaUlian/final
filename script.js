// info proyectos

async function getApiInfo() {
  const res = await fetch(
    "https://api.openbrewerydb.org/v1/breweries/?per_page=3"
  );
  const breweries = await res.json();

  const results = breweries.map((brewery) => {
    return {
      name: brewery.name,
      address: `${brewery.address_1}, ${brewery.city}, ${brewery.state}`,
      phone: brewery.phone,
    };
  });
  const projects = document.querySelector(".container-projects");
  projects.innerHTML = "";


  results.forEach((brewery) => {
    projects.innerHTML += `<div class="project">
                        <img src="/img/fondoFlexJS.png" alt="image" width="265"/>
                        <h2 class="post-title">${brewery.name}</h2>
                        <p class="post-address">${brewery.address}</p>
                        <p class="post-phone">${brewery.phone}</p>
                        <a href="/project-page/project.html" class="moreInfo">More Info...</a>
                     </div>`;
  });
}

getApiInfo();

// cursor botones:

document.addEventListener('DOMContentLoaded', (MouseEvent))
const boton = document.querySelectorAll("button")
boton.forEach((boton) => {
    boton.addEventListener("mouseover", () => {
    boton.classList.add('custom-cursor')
})
boton.addEventListener("mouseout", () => {
    boton.classList.remove('custom-cursor')
})
})

// enlace segunda pag:

// document.addEventListener('load', (MouseEvent))
// const pulsar = document.querySelectorAll("#learn")
// pulsar.innerHTML = "" ;

// pulsar.addEventListener("click", () => {
//     pulsar.innerHTML += 
// })


// validacion email


let emailId = document.querySelector('.email');
let errorMsg = document.querySelector('.error-msg');
let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validarMail () {
    
    if(emailId.value.match(mailRegex)) {
        emailId.style.border = '2px solid green';
        errorMsg.style.display = 'none';
    } 
    else if (emailId.value === "") {
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid gray';
    }
    else {
        emailId.style.border = '2px solid red'; 
        errorMsg.style.display = 'block';
        errorMsg.style.color = 'red';
    }
}
emailId.addEventListener('input', validarMail);
validarMail();