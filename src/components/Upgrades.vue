<template>
  <div>
    <h3>Upgrades</h3>
    <ul>
      <li v-for="upgrade in upgrades">
        {{ upgrade.name }} - {{ upgrade.cost }} - <span class="italic">{{ upgrade.value }} clicks per second</span>
        <button v-if="canAfford(upgrade)" v-on:click="purchaseUpgrade(upgrade)">Buy</button>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../store'

export default {
  name: 'Upgrades',
  data () {
    return {
      sharedStore: store,
      upgrades: store.state.upgrades
    }
  },
  methods: {
    canAfford: (upgrade) => {
      if (store.state.totalClicks >= upgrade.cost) {
        return true
      }
      return false
    },
    purchaseUpgrade: (upgrade) => {
      console.log('Buying ' + upgrade.name)
      store.removeClicks(upgrade.cost)
      store.addUpgrade(upgrade)
    }
  }
}
</script>
<style lang="sass" scoped>
    .italic
        font-style: italic
</style>
