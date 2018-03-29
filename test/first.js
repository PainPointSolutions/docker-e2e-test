const { expect } = require('chai');

describe('First script', function () {
  it('should work', async function () {
    const {screenshot,config} = global;
    console.log(this.config.email);
    await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
    await screenshot(this.page);
    expect(this.config.url).to.equal('http://www.google.com');
    expect(true).to.be.true;
  });
});
