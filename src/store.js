export default {
  debug: true,
  state: {
    totalClicks: 9950,
    upgrades: [
      {
        name: 'First Upgrade',
        cost: 100,
        value: 1
      },
      {
        name: 'Second Upgrade',
        cost: 1000,
        value: 10
      },
      {
        name: 'Dan\'s Upgrade',
        cost: 10000,
        value: 50
      }
    ],
    purchasedUpgrades: [
      {
        name: 'Dan\'s Upgrade',
        cost: 10000,
        value: 50
      }
    ]
  },
  updateTotalClicks (clickAmount) {
    if (this.debug) console.log('Updating totalClicks by ' + clickAmount)
    this.state.totalClicks = this.state.totalClicks + clickAmount
  },
  clearTotalTicks () {
    if (this.debug) console.log('Clearing totalClicks')
  },
  removeClicks (amountToRemove) {
    if (this.debug) console.log('Removing ' + amountToRemove + ' clicks')
    this.state.totalClicks = this.state.totalClicks - amountToRemove
  },
  addUpgrade (upgrade) {
  }
}
