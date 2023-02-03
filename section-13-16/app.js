const app = Vue.createApp({
  data: () => ({
    title: "Hello",
  }),
}).mount("#app");

// References
// Any changes made through references are not reactive.
// In most cases, should be able to create applications without references.
/* 
    With Reactivity
   1 Data Changes
   2 Vue Instance is Updated
   3 Vue Updates the template
   4 Template gets rendered onto the DOM
    
    With References
   Directly Access the DOM without updating the Vue Instance
*/

app.$refs.greeting.innerText = "Another Hellp";
