'use strict';

var expect = require('chai').expect;

module.exports = function () {

    this.Then(/^the checkout should( not)? exist$/, function(not) {
        const world = this;
        const lastResponse = world.getValue('lastResponse');

        if(not) {
            lastResponse.statusCode.should.equal(404);
            expect(lastResponse.body).to.not.exist;
        } else {
            lastResponse.statusCode.should.equal(200);
            expect(lastResponse.body).to.exist;
        }
    });
};
