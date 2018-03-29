const { expect } = require('chai');

describe('test 3', function() {

    
    it('should visit chrome', async function() {

        const {screenshot} = global;
        await this.page.goto('https://www.google.com/chrome/',{ waitUntil: 'networkidle2' });
        
        const title = await this.page.evaluate(() => document.querySelector('h1').innerText);
        expect(title).to.equal('Browse fast');
        await screenshot(this.page);

    });


})