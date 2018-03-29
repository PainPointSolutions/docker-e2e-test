const { expect } = require('chai');

describe('First script', function () {
  it('should work', async function () {
    // const {screenshot} = global;
    await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
    await this.screenshot();
  });
});
