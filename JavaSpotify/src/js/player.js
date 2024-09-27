import Song, {play_song} from './song.js';

export default class Player {
    
    constructor(map) {
        this.songs = [];
        Object.entries(map);
        let aux = 0;
        for(var [key, value] of Object.entries(map)) {
            this.songs.push(new Song(key, value));
            
            play_song(this.songs[aux]);
            aux++;
        }
    }
}