<template>
  <div id="app">
    <div class="mt-2 ml-2">
      <button type="button" class="btn btn-primary" @click="open = true">
        Open
      </button>
    </div>

    <app-modal :show="open" @hide="open = false" />
  </div>
</template>

<script>
import AppModal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    AppModal,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
