<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">{{ $t("home.listen") }}</h1>
          <p class="w-full md:w-8/12 mx-auto">
            {{ $t("home.music") }}
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="/assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div
          class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
          v-icon-secondary="{ icon: 'headphones-alt', right: true }"
        >
          <span class="card-title">{{ $t("home.songs") }}</span>
          <!-- Icon -->
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <!--  
          Vue does not allow for components to have a loop
          applied to the root element and said we'll have to
          approach this problem the second way
        -->
          <!-- <app-song-item :songs="songs" /> -->
          <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>
<script>
import AppSongItem from "../components/SongItem.vue";
import {
  songsCollection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
  db,
  doc,
  getDoc,
} from "@/includes/firebase";
import IconSecondary from "@/directives/icon-secondary";
export default {
  name: "Home",
  directives: {
    "icon-secondary": IconSecondary,
  },
  data() {
    return {
      songs: [],
      maxPerPage: 1,
      pendingRequest: false,
    };
  },
  components: {
    AppSongItem,
  },
  async created() {
    this.getSongs();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow =
        Math.round(scrollTop) + innerHeight === offsetHeight;
      if (bottomOfWindow) {
        this.getSongs();
      }
    },
    async getSongs() {
      if (this.pendingRequest) {
        return;
      }

      this.pendingRequest = true;

      let snapshots;
      if (this.songs.length) {
        const lastDoc = await getDoc(
          doc(db, "songs", this.songs[this.songs.length - 1].docID)
        );
        snapshots = await getDocs(
          query(
            songsCollection,
            orderBy("modified_name"),
            startAfter(lastDoc),
            limit(this.maxPerPage)
          )
        );
      } else {
        snapshots = await getDocs(
          query(
            songsCollection,
            orderBy("modified_name"),
            limit(this.maxPerPage)
          )
        );
      }

      snapshots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data(),
        });
      });

      this.pendingRequest = false;
    },
  },
};
</script>
