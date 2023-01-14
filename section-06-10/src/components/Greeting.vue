<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be 25 years older to view this message</p>
</template>

<script>
export default {
    name: 'Greeting',
    props: ['age'],
    data() {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style scoped lang="scss">
p:hover {
    color: darken(#cc4444, 15%)
}
</style>