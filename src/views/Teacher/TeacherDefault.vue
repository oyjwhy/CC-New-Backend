<template>
  <div class="TeacherDefault">
    <navigate-bar></navigate-bar>

  </div>
</template>

<script>
import NavigateBar from '@/components/NavigateBar'
export default {
  name: 'TeacherDefault',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10
    }
  },
  components: {
    NavigateBar
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
