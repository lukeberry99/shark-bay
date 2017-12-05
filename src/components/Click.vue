<template>
  <div>
    <button v-on:click="sharedStore.updateTotalClicks(1)">Click Me</button>
    <button v-if="sharedStore.debug" v-on:click="sharedStore.updateTotalClicks(100)">DEBUG: Add 100 clicks</button>
    <button v-if="sharedStore.debug" v-on:click="sharedStore.updateTotalClicks(1000)">DEBUG: Add 1000 clicks</button>
    <button v-if="sharedStore.debug" v-on:click="sharedStore.updateTotalClicks(10000)">DEBUG: Add 10000 clicks</button>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'Click',
  data () {
    return {
      sharedStore: store
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
