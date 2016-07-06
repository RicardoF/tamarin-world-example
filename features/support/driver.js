'use strict'

const webDriver = require('selenium-webdriver')
let driver

switch (process.env.PROFILE) {
    case 'androidSimulator':
        driver = new webDriver.Builder().
            withCapabilities({
                deviceName: 'Android',
                browserName: 'Browser',
                platformName: 'Android'
            }).
            usingServer('http://localhost:4723/wd/hub').
            build();
        break
    case 'android':
        driver = new webDriver.Builder().
            withCapabilities({
                deviceName: 'Android',
                browserName: 'Chrome',
                platformName: 'Android'
            }).
            usingServer('http://localhost:4723/wd/hub').
            build();
        break
    case 'iosSimulator':
        driver = new webDriver.Builder().
            withCapabilities({
                platformName: 'iOS',
                deviceName: 'iPhone 6s',
                browserName: 'Safari',
                platformVersion: '9.3'
            }).
            usingServer('http://localhost:4723/wd/hub').
            build();
        break
    case 'ios':
        driver = new webDriver.Builder().
            withCapabilities({
                platformName: 'iOS',
                deviceName: 'iPad Air',
                udid: 'ffffd1b4f08613d26734be2b61fed369e4f4068f',
                browserName: 'Safari',
                platformVersion: '9.2'
            }).
            usingServer('http://localhost:4723/wd/hub').
            build();
        break
    default: driver = (process.env.BROWSER ? new webDriver.Builder().forBrowser(process.env.BROWSER).build() : new webDriver.Builder().forBrowser('firefox').build())
}

module.exports = driver