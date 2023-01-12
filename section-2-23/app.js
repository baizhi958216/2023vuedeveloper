const vm = Vue.createApp({
    data() {
        return {
            people: [
                {
                    name: 'John',
                    message: 'Hello World!'
                },
                {
                    name: 'Rick',
                    message: 'I like pie.'
                },
                {
                    name: 'Amy',
                    message: 'Skydiving is fun!'
                }
            ]
        }
    },
    methods:{
        move(){
            const first = this.people.shift()
            this.people.push(first)
        }
    }
}).mount('#app')