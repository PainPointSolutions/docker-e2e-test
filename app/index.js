const puppeteer = require('puppeteer');
// Internal modules
var path = require("path");
var tests = require('require-all')({
  dirname     :  path.join(__dirname, '../test'),
  filter      :  /(.+spec)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
//   recursive   : true
});

const config = Object.assign({}, process.env);
var state={
    screenshotIndex:0
};

console.log(tests);

// (async(config) => {

//     const browser = await puppeteer.launch({
//          ignoreHTTPSErrors: true,
//         args: [
//             '--no-sandbox',
//             '--disable-setuid-sandbox'
//         ]
//     });

//     const page = await browser.newPage();
    
    
//     before((done) => {
//       console.log(`Testing site: "${options.appUrl}"...`)
//       browser.setOptions(options);
//       browser.setUp(done);
//     });
//     beforeEach(function(){
//       // Scope hack so we can access browser in `afterEach()`.
//       // NOTE: this works only in `beforeEach()`, cf.:
//       // - https://github.com/mochajs/mocha/issues/253
//       this.browser = browser;
//     });
    

//     await rootScenario(page,config,screenshot);
    
//     /* END OF CLIENT SCRIPT */
//     after(async() => {
//         await browser.close();
//     });
        
//     /* HELPER FUNCTIONS */
//     async function screenshot(name) {
//         state.screenshotIndex++;
//         return page.screenshot({
//             path: `/screenshots/${config.EMAIL}_${state.screenshotIndex}.png`,
//             fullPage: true
//         })
//     }

// })(config);