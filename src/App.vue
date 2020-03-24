<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <button @click="increment">Increment</button>
    </div>
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  count = 0

  increment() {
    this.count++
  }
}
</script>
