<template>
  <div>
    <h1>Clicker game</h1>
    <TotalClicks />
    <p>Total Clicks per second: {{ this.getCPS() }}</p>
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
      sharedStorage: store.state
    }
  },
  methods: {
    getCPS () {
      let val = 0
      
      store.state.upgrades.forEach(upgrade => {
        if (upgrade.purchased > 0) {
          val = val + (upgrade.value * upgrade.purchased)
        }
      })

      return val
    }
  }
}
</script>
<style scoped>
</style>
