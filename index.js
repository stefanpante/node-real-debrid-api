'use strict';

var createApiRequest = require('./lib/apiRequest');

var initNonNSMethods = require('./lib/baseMethods');
var initUnrestrictNS = require('./lib/unrestrict');
var initTrafficNS = require('./lib/traffic');
var initStreamingNS = require('./lib/streaming');
var initDownloadsNS = require('./lib/downloads');
var initTorrentsNS = require('./lib/torrents');
var initHostsNS = require('./lib/hosts');
var initForumNS = require('./lib/forum');
var initSettingsNS = require('./lib/settings');


function initRealDebridAPI(apiKey) {
    var apiRequest = createApiRequest(apiKey);

    var api = initNonNSMethods(apiRequest);

    api.user = initUserNS(apiRequest);
    api.unrestrict = initUnrestrictNS(apiRequest);
    api.traffic = initTrafficNS(apiRequest);
    api.streaming = initStreamingNS(apiRequest);
    api.downloads = initDownloadsNS(apiRequest);
    api.torrents = initTorrentsNS(apiRequest);
    api.hosts = initHostsNS(apiRequest);
    api.forum = initForumNS(apiRequest);
    api.settings = initSettingsNS(apiRequest);

    return api;
}

/**
 * Creates a new RealDebrid instance
 */
function realDebrid(apiKey) {
    if (!APIKey) {
        throw new Error('APIKey is required to use the Real-debrid API');
    }

    return initRealDebridAPI(apiKey);

}

module.exports = realDebrid;