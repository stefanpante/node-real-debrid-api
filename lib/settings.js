'use strict';

var createBasicRequest = require('./helpers/createBasicGet').createBasicRequest;
var createBasicRequestWithData = require('./helpers/createBasicGet').createBasicRequestWithData;

function init(apiRequest){
    return {
        get: createBasicRequest(apiRequest, 'GET', 'settings'),
        update: createBasicRequestWithData(apiRequest, 'POST', 'settings/update'),
        convertPoints: createBasicRequest(apiRequest, 'POST', 'settings/convertPoints'),
        changePassword: createBasicRequest(apiRequest, 'POST', 'settings/changePassword')
    };
}

module.exports = init;