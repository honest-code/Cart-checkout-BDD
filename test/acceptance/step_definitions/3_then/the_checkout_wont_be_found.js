'use strict';

require('chai').should();

module.exports = function () {

    this.Then(/^the checkout won't be found$/, function () {
        const world = this;
        const lastResponse = world.getValue('lastResponse');

        lastResponse.statusCode.should.equal(404);
    });

};
