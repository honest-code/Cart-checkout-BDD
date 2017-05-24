'use strict';

const addProduct = require('../../lib/service/addProduct');

module.exports = function() {
    this.When(/^I add a product with name "([^"]*)"$/, function (itemName, done) {
        const world = this;

        let checkoutId = world.getValue('checkoutId');

        addProduct(checkoutId, itemName).then(response => {
            world.publishValue('lastResponse', response);
            done();
        }).catch(err => {
            done(err);
        });
    });
};
