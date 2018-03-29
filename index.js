const filenamify = require('filenamify');
const puppeteer = require('puppeteer');
const puppeteerOptions = require('./config/puppeteer-options');
const shared = require('./config/shared.config');

// Globals
global={
  config:shared,
  env:process.env,
  state:{ screenshotIndex: 0 }
};
global.screenshot = function(page){ 
  return async function(filename, config = {}) {
  let folder = (process.env.ROOT||'')+'/screenshots/';
  let screenshotPath;
  if (filename) { 
    screenshotPath = `${folder}${filenamify(filename)}.png`; 
  }
  else {
    global.state.screenshotIndex++;
    screenshotPath = `${folder}${global.config.email}_${global.state.screenshotIndex}.png`;
  }
  return page.screenshot(Object.assign({
    path: screenshotPath,
    fullPage: true
  }, config)).catch(err=>{
    console.log(err);
    return err;
  })
  }
};


before(async function(){
  global.browser = await puppeteer.launch(puppeteerOptions);
})    

beforeEach(async function(){
  // Scope hack so we can access browser in `afterEach()`.
  // NOTE: this works only in `beforeEach()`, cf.:
  // - https://github.com/mochajs/mocha/issues/253
  this.browser = global.browser;
  this.page = await global.browser.newPage();
  this.screenshot = global.screenshot(this.page);
  this.state = global.state;
  this.config = global.config;
});
afterEach(async function(){
  try{
    await this.page.close();
  }catch(err){
    console.log("ERROR");
    console.log(err);
  }
})
    
after(async function(){
    await global.browser.close();
});
