'use strict';

const createCheckout = require('../../lib/service/createCheckout');
const baseUri = require('../../lib/service/baseUri');

module.exports = function() {

    this.Given(/^a new checkout with code "([^"]*)"$/, function (code, done) {
        const world = this;

        createCheckout(code).then(function (response) {
            response.statusCode.should.equal(201);
            response.headers.location.should.be.equal(`${baseUri}/api/checkouts/${code}`);

            world.publishValue('lastResponse', response);
            world.publishValue('checkoutId', code);

            done();
        }).catch(function (err) {
            done(err);
        });
    });

};