<template>
  <div>{{ num }}</div>
  <p>{{ double }}</p>
  <button type="button" @click.prevent="increment">Click Me</button>

  <p>{{ name }}</p>

  <p>
    <input type="text" v-model="phrase" />
  </p>
  <P>{{ reversedPhrase }}</P>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, watch, computed } from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(0);

    console.log(num);

    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    const phrase = ref("");
    const reversedPhrase = ref("");

    /* watch([phrase],([newVal,oldVal]) => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    }); */

    watchEffect(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
    };
  },
};
</script>
