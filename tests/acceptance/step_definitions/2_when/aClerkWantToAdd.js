'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

 this.When(/^a clerk want to add "([^"]*)"$/, function (itemName, done) {
         const world = this;

         let checkoutResponse = world.getValue('checkoutCreationResponse');
         const options = {
            method: 'POST',
            uri: checkoutResponse.headers.location + '/items',
            json: {
                'itemName': itemName
            },
            resolveWithFullResponse: true
        };

        requestPromise(options)
        .then(function (response) {
//            response.statusCode.should.equal(201);
//               response.headers.location.should.be.equal('http://localhost:3000/api/checkouts/' + code);

            world.publishValue('checkoutItemAddedResponse', response);
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });
};
