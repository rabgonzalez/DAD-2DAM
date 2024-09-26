import Song, {play_song} from './Song.js';
import map from './index.js';

export default class Player {
    constructor(map) {
        this.songs;
        Object.entries(map);
        let aux = 1;
        for(var [key, value] of Object.entries(map)) {
            this.songs.push(new Song(key, value));
            aux++;
        }
        exports.songs = this.songs;
    }
}
