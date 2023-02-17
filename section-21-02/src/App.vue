<template>
  <div id="app">
    <div class="scrollPosition"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}

.scrollPosition {
  position: fix;
  left: 10px;
  right: 10px;
}
</style>
