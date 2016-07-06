'use strict'

module.exports = function () {
  const driver = require('./driver')

  this.World = require('./world').World // overwrite default World constructor

  this.AfterFeatures(function () {
    return driver.quit()
  })
}
