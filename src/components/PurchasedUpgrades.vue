<template>
<div>
  <ul>
    <li v-for="(upgrade, key) in upgrades" v-bind:key="key" v-if="upgrade.purchased > 0">
      {{ upgrade.name }} x {{ upgrade.purchased }} - {{ (upgrade.value * upgrade.purchased) }} clicks per second
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
      upgrades: store.state.upgrades
    }
  },
}
</script>
