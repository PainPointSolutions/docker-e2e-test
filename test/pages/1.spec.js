const { expect } = require('chai');

describe('test 1', function() {

    it('should work', async function() {

        expect(this.config.url).to.equal('http://www.google.com');

    })



})