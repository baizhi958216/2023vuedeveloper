let vm = Vue.createApp({
    data() {
        return {
            message: 'Hello world!'
        }
    },
    beforeCreate(){
        console.log('beforeCreate() function called!',this.message);
    },
    // Use created if you need data
    created(){
        console.log('created() function called!',this.message);
    },
    beforeMount(){
        console.log('beforeMount() function called!',this.$el);
    },
    // Use mounted if you need dom
    // The mounted lifecycle only triggered once the template is compiled
    // and inserted into the document.
    mounted(){
        console.log('mounted() function called!',this.$el);
    },
    // Use VueJs Dev tool check this
    beforeUpdate(){
        console.log('beforeUpdate() function called!');
    },
    updated(){
        console.log('updated() function called!');
    },
    // Call vm.unmount() via console
    beforeUnmount(){
        console.log('beforeUnmount() function called!');
    },
    unmounted(){
        console.log('unmounted() function called!');
    }
})

vm.mount('#app')

/* setTimeout(() => {
    vm.mount('#app')
}, 3000); */