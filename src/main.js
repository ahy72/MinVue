import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   data:{
//     name : 'taguchi'
//   }
// }).$mount('#app')

new Vue({
  render: h => h(App),
  el:'#app',
  data:{
      name : 'taguchi'
  }
});
