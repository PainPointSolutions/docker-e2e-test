
const puppeteer = require('puppeteer');
const puppeteerOptions = require('./config/puppeteer-options');
const shared = require('./config/shared.config');

// Globals
global={
  config:shared,
  env:process.env,
  state:{ screenshotIndex: 0 }
};
global.screenshot = function(page, filename, config = {}) {
  global.state.screenshotIndex++;
  let screenshotPath = `/screenshots/${global.config.email}_${global.state.screenshotIndex}.png`;
  if (filename) { screenshotPath = `/screenshots/${filename}`; }
  return page.screenshot(Object.assign({
    path: screenshotPath,
    fullPage: true
  }, config))
};


before(async function (){
  global.browser = await puppeteer.launch(puppeteerOptions);
})    

beforeEach(async function(){
  // Scope hack so we can access browser in `afterEach()`.
  // NOTE: this works only in `beforeEach()`, cf.:
  // - https://github.com/mochajs/mocha/issues/253
  this.browser = global.browser;
  this.page = global.page;
  // this.page = await global.browser.newPage();
  this.state = global.state;
  this.config = global.config;
});
afterEach(async function(){
  // await this.page.close();
})
    
after(async() => {
    await global.browser.close();
});
