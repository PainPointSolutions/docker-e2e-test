const { expect } = require('chai');

describe('test 1', function() {

    const { page, config, screenshot } = global;
    it('should work', async function() {

        expect(config.url).to.equal('http://www.google.com');

    })



})