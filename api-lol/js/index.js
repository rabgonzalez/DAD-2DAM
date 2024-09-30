const DOM = {
    boton : document.getElementById('boton'),
    campeones : document.getElementById('campeones'),
}

var campeones = [];

boton.addEventListener('click', getCampeones);

async function getCampeones() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos.data);
        campeones.push(campeon);
    } catch(error) {
        console.log(error.message);
    }
    return campeones;
}

function mostrarCampeones(datos) {
    foreach(datos.data) {
        
    }
}