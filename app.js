/*
 * Faye Chat server adapted from Soapbox by James Coglan
 * (https://github.com/jcoglan/faye/tree/master/examples)
 */
var express = require('express'),
    url     = require('url'),
    https   = require('https'),
    faye    = require('faye'),
    request = require('request');

var fayeServer = new faye.NodeAdapter({mount: '/faye', timeout: 20}),
    client     = fayeServer.getClient(),
    port       = process.env.PORT || '8000';

// All subs active - start the web server
var app = express.createServer();

app.use(express.static(__dirname + '/public'));

fayeServer.attach(app);

app.listen(Number(port));

console.log('Listening on ' + port);