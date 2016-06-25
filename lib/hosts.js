'use strict';

var createBasicRequest = require('./helpers/createBasicGet');

function init(apiRequest) {
    return {
        list: createBasicRequest(apiRequest, 'GET', 'hosts'),
        getStatuses: createBasicRequest(apiRequest, 'GET', 'hosts/status'),
        getRegex: createBasicRequest(apiRequest, 'GET', 'hosts/regex'),
        getDomains: createBasicRequest(apiRequest, 'GET', 'hosts/domain')
    };
}

module.exports = init;