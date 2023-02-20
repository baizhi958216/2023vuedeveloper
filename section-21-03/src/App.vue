<template>
  <div>{{ num }}</div>
  <button type="button" @click.prevent="increment">Click Me</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(0);

    console.log(num);

    function increment() {
      num.value++;
    }

    return {
      num,
      increment,
    };
  },
};
</script>
