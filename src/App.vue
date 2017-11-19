<template>
  <div id="app">
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter'

export default {
  name: 'app',
  components: {
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 70%;
  margin: auto auto 0 auto;
}
</style>
