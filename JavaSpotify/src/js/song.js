export default class Song{

    constructor(nombre, audio) {
        this.nombre = document.querySelector(nombre);
        //this.cancion = document.querySelector(cancion);
        this.audio = new Audio(audio);
    }
}

export function play_song(song) {
    console.log(song);
    song.nombre.onclick = () => {
        if (song.audio.paused) {
            song.audio.play();
        } else {
            song.audio.pause();
        }
    }
}