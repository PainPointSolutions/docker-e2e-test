const { expect } = require('chai');

describe('test 2', function() {

    
    it('should work', async function() {

        expect(this.config.url).to.equal('http://www.google.com');

    })
    it('should search for unicorns', async function() {

        const {screenshot} = global;
        
        await this.page.type('input[name=q]','unicorns');
        await this.page.keyboard.press('Enter');
        await screenshot(this.page);
        const title = await this.page.evaluate(() => document.querySelectorAll('h3 > a')[0].innerText);
        expect(title).to.equal('Unicorn - Wikipedia');
        await screenshot(this.page,"custom.png");
    })



})