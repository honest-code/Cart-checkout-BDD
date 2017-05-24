'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the response code is (\d+)$/, function (arg1, done) {
        const world = this;

        const lastResponse = world.getValue('lastResponse');
        lastResponse.statusCode.should.equal(Number(arg1));

        done();
    });

};