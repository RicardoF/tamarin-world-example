'use strict'

const LandingPage = require("../pages/landingPage")
const SigninPage = require("../pages/signinPage")

module.exports = function loginSteps() {
  this.Given(/^I see the home page$/, function () {
    return this.visit(LandingPage.PAGE_URL)
      .then(() => this.getTitle().should.eventually.equal('Mendeley Data', 'Error - Title was incorrect'))
  })

  this.When(/^I login with valid credentials$/, function () {
    return this.click(LandingPage.LOGIN_BUTTON)
      .then(()=> this.getTitle().should.eventually.equal('Sign-in to Mendeley'))
      .then(() => this.sendKeys(SigninPage.USERNAME, 'ricardo.fonseca@mendeley.com'))
      .then(() => this.sendKeys(SigninPage.PASSWORD, 'testers'))
      .then(() => this.click(SigninPage.SIGNIN_BUTTON))
      .then((ele) => this.getTitle().should.eventually.equal('Mendeley Data'))
  })
}