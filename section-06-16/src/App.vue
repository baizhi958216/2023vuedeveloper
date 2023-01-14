<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <!--  
    Any data inside of it will not be available anymore 
    if the component gets reintroduced on the page,
    the data will be reset to its default state.
  -->
  <component :is="componentName"></component>

  <!--  
    keep-alive will make a component to persist.
    It keeps the component that's inside of it alive, 
    even if it shouldn't appear in the DOM, 
    this will make sure the component lives in memory.

    If the component needs to be added onto the page again,
    vue will use the one in memory rather than create a new component.

    unmounted lifecycle function doesn't get excuted anymore!
    Instead activated and deactivated
  -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    About
  },
  data() {
    return {
      componentName: "Home"
    }
  }
}
</script>