'use strict';

var createBasicRequest = require('./helpers/basicRequest').createBasicRequest;

function init(apiRequest) {
    return {
        disableAccessToken: createBasicRequest(apiRequest, 'GET', 'disable_access_token'),
        getServerTime: createBasicRequest(apiRequest, 'GET', 'time'),
        getServerTimeISO: createBasicRequest(apiRequest, 'GET', 'time/iso')
    };
}

module.exports = init;