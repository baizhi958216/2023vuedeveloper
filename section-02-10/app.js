const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://bing.com',
            raw_url: '<a href="https://bing.com" target="_blank">Bing</a>'
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