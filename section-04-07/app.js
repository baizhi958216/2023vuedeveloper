let vm = Vue.createApp({
    data() {
        return {
            message: 'Hello world!'
        }
    }
})

/* 
Available after app created

component(component name,configuration object)

Component Name: KeyBoard Case, Pascal Case, Bob Case 
*/
vm.component('hello',{
    template: `<h1>{{ message }}</h1>`,
    data(){
        return{
            message: 'Hello World 1!'
        }
    }
})

vm.mount('#app')