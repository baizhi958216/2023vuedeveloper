<template>
  <div v-if="!flag" style="color: red">Name changed!</div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["user"],
  setup(props) {
    const flag = computed(() => {
      return props.user.name === "John";
    });

    return { flag };
  },
};
</script>
