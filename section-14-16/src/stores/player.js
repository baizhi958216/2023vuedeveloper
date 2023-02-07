import { defineStore } from "pinia";
import { Howl } from "howler";
export default defineStore("player", {
  state: () => ({
    current_song: {},
    sound: {},
  }),
  actions: {
    async newSong(song) {
      this.current_song = song;

      this.sound = new Howl({
        src: [song.url],
        // By default, howler request the audio file with an AJAX request
        // That will result in an origin policy error.
        // set html5 to true, the library will switch to the HTML5 API to retrieve audio files.
        html5: true,
      });

      this.sound.play();
    },
  },
});
