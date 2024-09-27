export default class Song{

    constructor(nombre, audio) {
        this.nombre = document.querySelector(nombre);
        //this.cancion = document.querySelector(cancion);
        this.audio = new Audio(audio);
    }
}

export function play_song(song) {
    song.nombre.onclick = () => {
        if (song.audio.paused) {
            song.nombre.classList.add('playing');
            song.audio.play();
        } else {
            song.nombre.classList.remove('playing');
            song.audio.pause();
        }
    }
}