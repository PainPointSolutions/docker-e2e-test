# travojo/docker-e2e-test

Headless chrome docker image with Puppeteer,Mocha,Chai

### Config
```
config
├── mocha.opts
├── puppeteer-options.js
└── shared.config.js
```
### Test
```
const { expect } = require('chai');

describe('First script', function () {
  it('should work', async function () {
    
    /* Available objects
    
    this.browser : From official puppeteer 
    this.page : a new page is created for every test but in the same browser session
    this.screenshot : https://github.com/PainPointSolutions/docker-e2e-test/blob/0d75a0601ee40f3f3c5d13262481f2398b9ec431/index.js#L12
    this.config : initial configuration loaded from https://github.com/PainPointSolutions/docker-e2e-test/blob/master/config/shared.config.js
    this.state : this can be shared among different test suites and tests!
    
    */
    
    await this.page.goto(this.config.url, { waitUntil: 'networkidle2' });
    await this.screenshot();
  });
});
```


### Preparations
```
# screenshots volume needs to be writable 
chmod 777 screenshots
```


### RUN
```
docker run -v $PWD/test:/app/test -v $PWD/screenshots:/screenshots -v $PWD/config:/app/config --shm-size 1G --rm travojo/docker-e2e-test
```