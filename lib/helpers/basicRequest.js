'use strict';

var baseUrl = 'https://api.real-debrid.com/rest/1.0/';
var querystring = require('querystring');


function createRequestOptions(method, path, id, options, data){
    var query = querystring.stringify(options);
    var url = baseUrl + path;

    if(id){
        url += '/' + id;
    }

    url += '?' + query;

    var requestOptions =  {
        url: createUrl(path, id, options),
        method: method
    };

    if(data){
        requestOptions.data = data;
    }
}

function createBasicRequestById(apiRequest, method, path){

    return function(id, options, callback){

        if(!callback && typeof options === 'function'){
            callback = options;
            options = {};
        }

        var requestOptions = createRequestOptions(method, path, id, options);
        apiRequest(requestOptions, callback);
    }
}

function createBasicRequest(apiRequest, method, path){

    return function(options, callback){

        if (typeof options === 'function') {
            callback = options;
            options = {};
        }

        var requestOptions = createRequestOptions(method, path, false, options);
        apiRequest(requestOptions, callback);
    };
}

function createBasicRequestWithData(apiRequest, method, path){
    return function(data, options, callback){

        if (typeof options === 'function') {
            callback = options;
            options = {};
        }

        var requestOptions = createRequestOptions(method, path, false, options, data);
        apiRequest(requestOptions, callback);
    };
}

function createBasicRequestByIdWithData(apiRequest, method, path){
    return function(id, data, options, callback){

        if (typeof options === 'function') {
            callback = options;
            options = {};
        }

        var requestOptions = createRequestOptions(method, path, false, options, data);
        apiRequest(requestOptions, callback);
    };
}

module.exports = {
    createBasicRequest: createBasicRequest,
    createBasicRequestById: createBasicRequestById,
    createBasicRequestWithData: createBasicRequestWithData,
    createBasicRequestByIdWithData: createBasicRequestByIdWithData    
};