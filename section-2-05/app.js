const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app')

setTimeout(() => {
    // Without a Proxy
    vm.$data.lastName = 'Bob'
    // With a Proxy
    vm.lastName = 'Bob'
}, 3000);

console.log(vm);