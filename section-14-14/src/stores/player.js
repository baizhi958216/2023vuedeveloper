import { defineStore } from "pinia";
export default defineStore("player", {
  state: () => ({
    current_song: {},
  }),
  actions: {
    async newSong(song) {
      this.current_song = song;
    },
  },
});
