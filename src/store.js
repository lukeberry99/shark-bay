export default {
  debug: true,
  state: {
    totalClicks: 0,
    upgrades: [
      {
        name: 'First Upgrade',
        cost: 100,
        value: 1,
        purchased: 0
      },
      {
        name: 'Second Upgrade',
        cost: 1000,
        value: 10,
        purchased: 0
      },
      {
        name: 'Dan\'s Upgrade',
        cost: 10000,
        value: 50,
        purchased: 0
      },
      {
        name: 'test',
        cost: 5,
        value: 5000,
        purchased: 0
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
    if (this.debug) console.log('Purchasing ' + upgrade.name)
    upgrade.purchased = upgrade.purchased + 1
  }
}
