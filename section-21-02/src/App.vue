<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
import mixin from "@/mixin";
export default {
  name: "App",
  /* 
    定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
   */
  mixins: [mixin],
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    console.log("App mounted lifecycle function");
  },
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
