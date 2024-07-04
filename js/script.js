//Cargar el DOM, para llamar una función que realiza una solicitud a la API
//Traer los datos de la API. https://restcountries.com/v3/all
//Crear evento click para mostrar informacion en las banderas en una ventana flotante (Este flotante se quedará fijo y centrado hasta que se cierre.).
//Botón cerrar para hacer desaparecer esa información.
//TIPS:1.Los paises se ordenarán en orden alfabético (recuerda el método `sort`).

const listCountries = document.getElementById("countries-list")
let countrys = ''

const getCountries = async () => {
   try {
         const getData = await fetch(`https://restcountries.com/v3/all`);
        if (!getData.ok) {
            throw new Error('Ha surgido un error', getData.status);
        } 
        const responseData = await getData.json()
        countriesTemplate(responseData)
    }   catch (error) {
        console.log('Error al obtener datos', error);
    }
};

    function countriesTemplate(countrys) {
        listCountries.innerHTML - '';
        countrys.forEach(country => {
            const { population, car } = country;
            const name = country.name.common;
            const capital = country.capital ? country.capital[0] : "";
            const flag = country.flags[1];
            listCountries.innerHTML += 
            `
            <li>
                 <div class="imgCountry">
                 <div class="data-Countries">
                 <img src=${flag} alt=${name}/>
                 <p><span><b>Pais: </b>${name}</span></p>
                 <p><span><b>Capital: </b></span>${capital}</p>
                 <p><span><b>Población: </b></span>${population}</p>
                 <p><span><b>Lado de la Carretera: </b></span>${car.side}</p>
                 </div>
            </li>
            `
        
            listCountriesOutside = `
             <li>
                 <div class="imgCountryOut">
                 <div class="data-Countries">
                 <p><span><b>Pais: </b>${name}</span></p>
                 <p><span><b>Capital: </b></span>${capital}</p>
                 <p><span><b>Población: </b></span>${population}</p>
                 <p><span><b>Lado de la Carretera: </b></span>${car.side}</p>
                 <img src=${flag.png} alt=${name}/>
                 </div>
             </li>
    `;
    //console.log(listCountriesOutside);
        });
    }

getCountries();

