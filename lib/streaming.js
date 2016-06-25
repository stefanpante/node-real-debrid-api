'use strict';

var createBasicRequestById = require('./helpers/createBasicGet').createBasicRequestById;

function init(apiRequest){
    return {
        getTranscodedForId: createBasicRequestById(apiRequest, 'GET', 'streaming/transcode'),
        GetMediaInformationForId: createBasicRequestById(apiRequest, 'GET', 'streaming/mediaInfos'),
    };
}

module.exports = init;