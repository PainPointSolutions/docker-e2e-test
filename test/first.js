const { expect } = require('chai');

describe('First script', function () {
  it('should work', async function () {
    
    /* Available objects
    
    this.browser,this.page : From official puppeteer
    this.screenshot : https://github.com/PainPointSolutions/docker-e2e-test/blob/0d75a0601ee40f3f3c5d13262481f2398b9ec431/index.js#L12
    this.config : initial configuration loaded from https://github.com/PainPointSolutions/docker-e2e-test/blob/master/config/shared.config.js
    this.state : this can be shared among different test suites and tests!
    
    */
    
    await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
    await this.screenshot();
  });
});
