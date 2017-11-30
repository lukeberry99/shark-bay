<template>
  <div>
    <button v-on:click=sharedStore.updateTotalClicks(1)>Click Me</button>
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
