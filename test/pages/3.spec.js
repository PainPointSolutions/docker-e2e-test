const { expect } = require('chai');

describe('test 3', function() {

    
    it('should visit chrome', async function() {
        await this.page.goto('https://www.google.com/chrome/',{ waitUntil: 'networkidle2' });
        await this.screenshot();
        const title = await this.page.evaluate(() => document.querySelector('h1').innerText);
        expect(title).to.equal('Browse fast');

    });


})