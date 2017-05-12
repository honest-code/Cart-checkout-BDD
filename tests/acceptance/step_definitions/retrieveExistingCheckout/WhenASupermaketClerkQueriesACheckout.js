'use strict';

const getCheckout = require('../../lib/service/getCheckout');

module.exports = function () {

    this.When(/^a supermarket clerk queries the checkout "([^"]*)" current state$/, function (code) {
        const world = this;

        return getCheckout(code)
            .then(response => {
                world.publishValue('checkoutRequestResponse', response);
            });
    });
};

