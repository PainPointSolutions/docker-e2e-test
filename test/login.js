const { expect } = require('chai');

describe('Login script', function () {
  it('should work', async function () {
      
    const {page,config,screenshot} = global;
    await page.goto(config.url, { waitUntil: 'networkidle2' });
    await screenshot();
    expect(config.url).to.equal('http://www.google.com');
    expect(true).to.be.true;
  });
});

/*
    const {page,config,screenshot} = this;
    
    console.log(global.config)
    await page.goto(config.URL, { waitUntil: 'networkidle2' });
    
    
    return true;
    
    
    await page.goto(config.URL, { waitUntil: 'networkidle2' });
    
    await page.waitFor(3000);
    await screenshot();
    await page.click('.auth0-lock-social-button-text');
    
    await page.waitFor(3000);
    await page.type('input#identifierId', config.EMAIL);
    await screenshot();
    await page.click('div#identifierNext');
    
    await page.waitFor(3000);
    await screenshot();
    await page.type('input[name="password"]', config.PASSWORD);
    await page.click('div#passwordNext');
    
    // optional recovery email
    try{
        await page.waitForSelector('#knowledge-preregistered-email-response', { timeout: 5000 });
        await screenshot();
        const recoveryEmail = await page.$('#knowledge-preregistered-email-response');
        if(recoveryEmail) {
            await page.type(recoveryEmail, config.RECOVERY_EMAIL);
            await page.click('div#next');
        }
    } catch(error){ console.log(error); }
    
    await page.waitFor(3000);
    
    return true;
    
}*/