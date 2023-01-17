<template>
  <div id="app">
    <!--  
      The V slot property requires an alias for the list of slot properties.
      The V alias will represent every property bounced to the slot component.
    -->
    <hello-world v-slot="v">
      <p>Hello {{ v.user.name }}</p>
    </hello-world>

    <hello-world #default="{ user, favorites }">
      <p>Hello {{ user.name }}. I like {{ favorites[0] }}</p>
    </hello-world>

    <hello-world #="v">
      <p>Hello {{ v.user.name }}</p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
