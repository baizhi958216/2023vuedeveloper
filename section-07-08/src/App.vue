<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag">Hello World!</h2>
    <h2 v-else>Another Hello!</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Hello</h2>
  </transition> -->

  <!-- Also has @enter-cancelled @leave-cancelled -->
  <!-- <transition 
  @before-enter="beforEnter" 
  @enter="enter" 
  @after-enter="afterEnter" 
  @before-leave="beforeLeave"
  @leave="leave" 
  @after-leave="afterLeave"
  :css="true"
  name="fade"
  >
    <h2 v-if="flag">Hey</h2>
  </transition> -->

  <button @click="addItem">Add</button>

  <ul>
    <!--  
      Can't use transition component because it doesn't work with list items,
      the transition-group component is specifically for animating items and a loop.
    -->
    <transition-group name="fade">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1)
      const index = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(index, 0, num)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    },
    beforEnter(el) {
      console.log('before-enter event fired', el);
    },
    enter(el) {
      console.log('enter event fired', el);
    },
    afterEnter(el) {
      console.log('after-enter event fired', el);
    },
    beforeLeave(el) {
      console.log('before-leave event fired', el);
    },
    leave(el) {
      console.log('leave event fired', el);
    },
    afterLeave(el) {
      console.log('after-leave event fired', el);
    }
  }
}
</script>

<style>
li {
  font-size: 22px;
  cursor: pointer;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(0, 0);
  }
}
</style>