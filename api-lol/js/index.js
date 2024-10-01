const DOM = {
    boton : document.getElementById('boton'),
    campeones : document.getElementById('campeones'),
}

boton.addEventListener('click', objectToArray);

async function getCampeones() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.data;
    } catch(error) {
        console.log(error.message);
    }
}

function objectToArray() {
    getCampeones().then((datos) => {
        mostrarInformacion(datos);
    });
}

function mostrarInformacion(datos){
    const result = Object.values(datos);
    console.log(result);
    result.forEach((campeon) => {
        DOM.campeones.innerHTML += `
        <div class="card">
            <img src="http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${campeon.id}.png">
            <p>${campeon.name}</p>
            <p>${campeon.partype}</p>
        </div>`;
    })
}