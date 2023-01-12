const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
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

/* // Way 2
const input = document.getElementById('first-name')
input.addEventListener('keyup',function(){
    const p = document.querySelector('p')
    p.innerText = this.value
}) */