'use strict';

const addPromotion = require('../../lib/service/addPromotion');

module.exports = function() {
    this.When(/^I add a promotion with code "([^"]*)"$/, function(promotion, done) {
        const world = this;

        let checkoutId = world.getValue('checkoutId');

        addPromotion(checkoutId, promotion).then(response => {
            world.publishValue('lastResponse', response);
            done();
        }).catch(err => {
            done(err);
        });
    });
};