'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

    this.When(/^I request the heartbeat$/, function(done) {
        const world = this;
        const options = {
            method: 'GET',
            uri: 'http://localhost:3000/api/heartbeat' ,
            resolveWithFullResponse: true,
            simple: false
        };

        requestPromise(options)
            .then(function(response) {
                world.publishValue('heartbeatResponse', response);
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });
};