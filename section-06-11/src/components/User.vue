<template>
    <!-- 
        The changes will not be reflected in other components.
        components is not being able to hold on to those changes.
        parent component updates will override the changes in the child component
    -->
    <button type="button" @click="onClickAge">Update Age</button>
    <p>The user is {{ age }} years old</p>
    <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
    name: 'User',
    /* 
        If the data inside the parent component changes,
        then all children components will reflect that change.
        
        However, it doesn't necessarily work in the reverse.
    */
    props: ["age"],
    /* 
        Vue want to know what events the parent component 
        can expect from the child component.
        Add emits option
    */
    emits: ['age-change'],
    /* 
        If plan on using the value but not changing it, 
        it's not necessary to use events.
    */
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            // The second parameter will passed on to any listeners to use
            this.$emit('age-change',3)
        }
    }
}
</script>