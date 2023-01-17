<template>
  <div>
    <!--  
      The value for this will have in the data object
      by binding a property to the slot component.
      It will become available in the parent scope.
    -->
    <slot :user="user" :favorites="favorites"></slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        name: "John",
        age: 25,
      },
      favorites: ["Pizza", "Marbles", "Birds"],
    };
  },
};
</script>
