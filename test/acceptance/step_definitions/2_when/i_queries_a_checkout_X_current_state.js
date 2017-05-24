'use strict';

const getCheckout = require('../../lib/service/getCheckout');

module.exports = function () {

    this.When(/^I queries the checkout "([^"]*)" current state$/, function(code, done) {
        const world = this;

        getCheckout(code).then(response => {
            world.publishValue('lastResponse', response);
            done();
        }).catch(err => {
            console.log(err);
        });
    });
};

