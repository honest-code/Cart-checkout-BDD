'use strict';

require('chai').should();

module.exports = function() {

    this.Then(/^the response code is 200$/, function (done) {
        const world = this;

        const response = world.getValue('heartbeatResponse');
        response.statusCode.should.equal(200);

/*
        response.body.should.be.deep.equal({
            response: {
                code: 200,
            }
        });

        response.headers.location.should.be.equal('http://localhost:3000/api/heartbeat');
*/
        done();
    });

};