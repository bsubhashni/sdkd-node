"use strict";

var net = require('net'),
    control = require('./control'),
    worker = require('./worker'),
    server,
    csock = null,
    wsock = [];


function handleConnection(sock){
    if (!csock) {
        console.log("Got control connection from ", sock.remoteAddress, sock.remotePort);
        //first connection is control
        csock = sock;
        control.init(sock);
        sock.on('data', control.handleMsg);
        sock.on('close', control.close);
    } else {
        wsock.push(sock);
    }
}



exports.start = function() {
    server = net.createServer();
    server.on('connection', handleConnection);
    server.listen('8050');
};
