<template>
    <!-- 
        The changes will not be reflected in other components.
        components is not being able to hold on to those changes.
        parent component updates will override the changes in the child component
    -->
    <button type="button" @click="age++">Update Age</button>
    <p>The user is {{ age }} years old</p>
</template>

<script>
export default {
    name: 'User',
    /* 
        If the data inside the parent component changes,
        then all children components will reflect that change.
        
        However, it doesn't necessarily work in the reverse.
    */
    props: ["age"]
}
</script>