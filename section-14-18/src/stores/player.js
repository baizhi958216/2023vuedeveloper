import { defineStore } from "pinia";
import { Howl } from "howler";
export default defineStore("player", {
  state: () => ({
    current_song: {},
    sound: {},
    seek: "00:00",
    duration: "00:00",
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

      this.sound.on("play", () => {
        requestAnimationFrame(this.progress);
      });
    },
    async toggleAudio() {
      if (!this.sound.playing) {
        return;
      }

      if (this.sound.playing()) {
        this.sound.pause();
      } else {
        this.sound.play();
      }
    },
    progress() {
      this.seek = this.sound.seek();
      this.duration = this.sound.duration();

      if (this.sound.playing()) {
        requestAnimationFrame(this.progress);
      }
    },
  },
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing();
      }
      return false;
    },
  },
});
