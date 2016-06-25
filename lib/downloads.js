'use strict';

var createBasicRequest = require('./helpers/createBasicGet').createBasicRequest;
var createBasicRequestById = require('./helpers/createBasicGet').createBasicRequestById;

function init(apiRequest) {
    return {
        list: createBasicRequest(apiRequest, 'GET', 'downloads'),
        deleteById: createBasicRequestById(apiRequest, 'DELETE', 'downloads')
    };
}

module.exports = init;