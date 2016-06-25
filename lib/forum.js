'use strict';

var createBasicRequest = require('./helpers/createBasicGet').createBasicRequest;
var createBasicRequestById = require('./helpers/createBasicGet').createBasicRequestById;

function init(apiRequest) {
    return {
        list: createBasicRequest(apiRequest, 'GET', 'forum'),
        getById: createBasicRequestById(apiRequest, 'GET', 'forum')
    };
}

module.exports = init;