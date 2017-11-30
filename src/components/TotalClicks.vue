<template>
  <h3>Total Clicks {{ sharedStore.state.totalClicks }}</h3>
</template>
<script>
import store from '../store'
export default {
  name: 'TotalClicks',
  data () {
    return {
      sharedStore: store
    }
  }
}
</script>
<style lang="sass" scoped>
</style>

