// Testicade console version, listens for all the events

var colors = require('colors/safe');
var util   = require('util');

var serviceName = "Testicade-cli";
console.log(colors.yellow("Starting " + serviceName));

var service = require("esticade")(serviceName);
service.alwaysOn('#', function(event) {
    var payload = {
        service: event.service,
        event: event.name,
        message: event.body
    };

    console.log(colors.green(util.inspect(payload, {showHidden: false, depth: null, colors: false})));
});
