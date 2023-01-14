<template>
  <h3>Hey!</h3>
  <greeting :age="age"></greeting>
  <!-- 
    [Vue warn]: Missing required prop: "age"  
    <user @age-change="updateAge"></user>
  -->
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
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
  },
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>