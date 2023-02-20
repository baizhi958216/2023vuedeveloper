<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-5 mt-3">
      <div class="card">
        <div class="card-header">Emoji Selector</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-2">
              <emoji-input v-model="emoji" :options="{ position: 'bottom' }" />
            </div>
            <button type="submit" class="btn btn-primary">发送</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiInput from "./components/EmojiInput.vue";

export default {
  name: "App",
  components: { EmojiInput },
  data() {
    return {
      emoji: "",
    };
  },
  methods: {
    submit() {
      console.log("Emoji: ", this.emoji);
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
