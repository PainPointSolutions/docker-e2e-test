const { expect } = require('chai');

describe('test 2', function() {

    
    it('should visit tesla.com', async function() {
        await this.page.goto(this.config.anotherUrl, { waitUntil: 'networkidle2' });
        expect(await this.page.url()).to.equal(this.config.anotherUrl);
        await this.screenshot("tesla");
    })
    it('should search for unicorns', async function() {

        expect(this.config.url).to.equal('http://www.google.com');
        
        await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
        await this.page.type('input[name=q]','unicorns');
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('h3 > a');
        const title = await this.page.evaluate(() => document.querySelectorAll('h3 > a')[0].innerText);
        expect(title).to.equal('Unicorn - Wikipedia');
        await this.screenshot("unicorns search");
        
    })



})