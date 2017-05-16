'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

 this.When(/^a clerk want to add "([^"]*)"$/, function (product, done) {
         const world = this;

         let checkoutResponse = world.getValue('checkoutCreationResponse');
         const options = {
            method: 'POST',
            uri: checkoutResponse.headers.location + '/items',
            json: {
                product: product
            },
            resolveWithFullResponse: true
        };

        requestPromise(options)
        .then(function (response) {
            response.statusCode.should.equal(201);
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });
};