'use strict';

var request = require('request');

/**
 * Returns a new request object with the bearer token filled in.
 */
function createApiRequest(apiKey){
    var apiRequest = request.defaults({
        auth: {
            bearer: apiKey 
        }
    });

    return apiRequest;
}

module.exports = createApiRequest;