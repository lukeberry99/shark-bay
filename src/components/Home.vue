<template>
  <div>
    <h1>Clicker game</h1>
    <TotalClicks />
    <Click />
    <PurchasedUpgrades />
    <Upgrades />
  </div>
</template>
<script>
import store from '../store'

import Click from '@/components/Click'
import TotalClicks from '@/components/TotalClicks'
import Upgrades from '@/components/Upgrades'
import PurchasedUpgrades from '@/components/PurchasedUpgrades'

export default {
  name: 'Home',
  components: {
    Click,
    TotalClicks,
    Upgrades,
    PurchasedUpgrades
  },
  data () {
    return {
      localStore: store.state
    }
  }
}
</script>
<style scoped>
</style>
