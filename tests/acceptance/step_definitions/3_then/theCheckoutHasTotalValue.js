'use strict';

require('chai').should();

module.exports = function() {

   this.Then(/^the checkout has "([^"]*)" in the total value$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
    });
};