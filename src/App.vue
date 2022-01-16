<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/ant-design.svg">
    <StartComponents/>
  </div>
</template>

<script>
import StartComponents from './components/StartComponents.vue'

export default {
  name: 'App',
  components: {
    StartComponents
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
