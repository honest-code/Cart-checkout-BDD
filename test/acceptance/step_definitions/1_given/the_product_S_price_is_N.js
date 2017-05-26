'use strict';

const setPriceToProduct = require('../../lib/service/setPriceToProduct');

module.exports = function() {
    this.When(/^the product "([^"]*)" price is (\d+)$/, function (itemName, itemPrice, done) {

        const world = this;

        let checkoutId = world.getValue('checkoutId');

        setPriceToProduct(checkoutId, itemName, itemPrice).then(response => {
            world.publishValue('lastResponse', response);
            done();
        }).catch(err => {
            done(err);
        });

     });
};
