
const path = require("path");
const puppeteer = require('puppeteer');
const puppeteerOptions = require('./puppeteer-options');
// Globals
global.config = Object.assign({
  url: 'http://www.google.com'
}, process.env);
global.state = {
  screenshotIndex: 0
};

before(async function (){
  
  global.browser = await puppeteer.launch(puppeteerOptions);
  global.page = await global.browser.newPage();
  
  global.screenshot = async function (name) {
      global.state.screenshotIndex++;
      return global.page.screenshot({
          path: path.join(__dirname,
          `/screenshots/${global.config.EMAIL}_${global.state.screenshotIndex}.png`),
          fullPage: true
      })
  }
  
})    

beforeEach(function(){
  // Scope hack so we can access browser in `afterEach()`.
  // NOTE: this works only in `beforeEach()`, cf.:
  // - https://github.com/mochajs/mocha/issues/253
  this.browser = global.browser;
  this.page = global.page;
  this.config = global.config;
});
// afterEach(async function(){})
    
after(async() => {
    await global.browser.close();
});
