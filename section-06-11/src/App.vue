<template>
  <h3>Hey!</h3>

  <button type="button" @click="age++">Update Age</button>

  <greeting :age="age"></greeting>
  <user :age="age"></user>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';
export default {
  name: 'App',
  components: {
    // Greeting: Greeting
    
    // ES2015 ↓
    Greeting,
    User
  },
  data() {
    return {
      age: 20
    }
  }
}
</script>