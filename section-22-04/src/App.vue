<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-5 mt-3">
      <div class="card">
        <div class="card-header">Emoji Selector</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-2">
              <div class="input-group">
                <input type="text" class="form-control" readonly />
                <button class="btn btn-outline-secondary" type="button">
                  Button
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
