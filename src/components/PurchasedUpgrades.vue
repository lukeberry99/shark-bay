<template>
  <div v-if="purchasedUpgrades[0]">
    <h3>Purchased Upgrades</h3>
    <ul>
      <li v-for="upgrade in purchasedUpgrades">
        {{ upgrade.name }} - {{ upgrade.cost }} - <span class="italic">{{ upgrade.value }} clicks per second</span>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../store'

export default {
  name: 'PurchasedUpgrades',
  data () {
    return {
      sharedStore: store,
      purchasedUpgrades: store.state.purchasedUpgrades
    }
  }
}
</script>
