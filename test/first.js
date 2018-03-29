const { expect } = require('chai');

describe('First script', function () {
  it('should work', async function () {
    const {screenshot} = global;
    console.log(this.config.email);
    await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
    await screenshot(this.page);
  });
});
