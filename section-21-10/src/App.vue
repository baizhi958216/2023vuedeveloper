<template>
  <div>{{ num }}</div>
  <p>{{ double }}</p>
  <button type="button" @click.prevent="increment">Click Me</button>

  <p>{{ name }}</p>

  <p>
    <input type="text" v-model="phrase" />
  </p>
  <P>{{ reversedPhrase }}</P>

  <app-alert :user="user" />

  <button type="button" ref="btn">Button</button>
</template>

<script>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";
export default {
  name: "App",
  components: {
    AppAlert,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");

      btn.value.addEventListener("click", () => {
        console.log("button clicked");
      });
    });

    const { num, increment, double } = useNumber();
    const { phrase, reversedPhrase, num: numPhrase } = usePhrase();

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
      numPhrase,
    };
  },
};
</script>
