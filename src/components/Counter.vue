<template>
  <div>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <p>
      <span>{{nume}}</span>
    </p>
  </div>
</template>

<<script>
export default {
  props: ['nume'],
  data () {
    return {
    }
  },
  methods: {
    increament () {
      this.nume++
    },
    decreament () {
      this.nume--
    }
  }
}
</script>
