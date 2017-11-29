var clicks = 0
var clickers = 0
var advancedClickers = 0
var clickerModifier = 1

function getClick(value) {
    clicks = clicks + value
    document.getElementById('clicks').innerHTML = clicks
}

function buyAutoClicker() {
    var clickerCost = Math.floor(10 * Math.pow(1.1, clickers))

    if (clicks >= clickerCost) {
        clickers = clickers + 1
        clicks = clicks - clickerCost
        document.getElementById('clicks').innerHTML = clicks
        document.getElementById('clickers').innerHTML = clickers
    }

    var nextCost = Math.floor(10 * Math.pow(1.1, clickers))
    document.getElementById('clicker_cost').innerHTML = nextCost

    calculateCPS()
}

function buyAdvancedAutoClicker() {
    var clickerCost = Math.floor(100 * Math.pow(1.1, advancedClickers))

    if (clicks > clickerCost) {
        advancedClickers = advancedClickers + 1
        clicks = clicks - clickerCost
        document.getElementById('clicks').innerHTML = clicks
        document.getElementById('advancedClickers').innerHTML =advancedClickers
    }

    var nextCost = Math.floor(100 * Math.pow(1.1, advancedClickers))
    document.getElementById("advanced_clicker_cost").innerHTML = nextCost

    calculateCPS()
}

function calculateCPS() {
    var clickerCPS = clickers
    var advancedCPS = advancedClickers * 5

    var total = clickerCPS + advancedCPS

    document.getElementById('cps').innerHTML = total
}

function upgradeClicker() {
    clickerModifier = clickerModifier * 2
}

window.setInterval(function() {
    getClick(clickers * clickerModifier)
    getClick(advancedClickers * 5)
    calculateCPS()
}, 1000)

