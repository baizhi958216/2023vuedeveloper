<template>
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