'use strict';
module.exports = function(app){
    var wifi = require('./wifi_module');

    app.route('/search')
        .get(wifi.list_all_wifi);
        
}