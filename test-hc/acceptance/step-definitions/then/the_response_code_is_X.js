'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the response code must be (\d+)$/, function (arg1, done) {
        const world = this;

        const response = world.getValue('heartbeatResponse');
        response.statusCode.should.equal(Number(arg1));

        done();
    });

};
