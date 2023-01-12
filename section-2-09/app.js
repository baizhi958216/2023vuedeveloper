const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://bing.com'
        }
    },
    methods: {
        // ES6 arrow function not work here because of Proxy 
        // you want to use `this` keyword
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')