// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
  },
  created () {
    window.setInterval(() => {
      this.processUpgrades()
    }, 1000)
  },
  methods: {
    processUpgrades () {
      store.state.upgrades.forEach(upgrade => {
        if (upgrade.purchased > 0) {
          store.state.totalClicks += (upgrade.value * upgrade.purchased)
        }
      })
    }
  }
})
