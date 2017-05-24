'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the checkout has "([^"]*)" in the total value$/, function (totalWithCurrency, done) {
    	const totalAmount = parseFloat(totalWithCurrency.split(' ')[0]);
    	const currency = totalWithCurrency.split(' ')[1];
        const world = this;

        const lastResponse = world.getValue('lastResponse');
        lastResponse.body.should.have.property('total', totalAmount);
        lastResponse.body.should.have.property('currency', currency);

        done();
    });

};
