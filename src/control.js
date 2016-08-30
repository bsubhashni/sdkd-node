"use strict";


var Control = {},
    worker = require('./worker'),
    protol = require('./protocol/protocol'),
    cHandle;

Control.init = function(csock) {
    cHandle = csock;
};

Control.handleMsg = function (buf) {
    var json = JSON.parse(buf);
    switch(json["Command"]){
        case "INFO":
            var doc = protol.InfoResponse();
            doc.CAPS = true;
            doc.SDK = "node.js";
            console.log(JSON.stringify(doc));
            cHandle.write(JSON.stringify(doc));
            return;
        case "GOODBYE":
            //cHandle.write(JSON.stringify());
            return;
        case "UPLOADLOGS":
            return;
        case "CANCEL":
            return;
    }
};


Control.close =  function () {
    process.exit(1);
};

module.exports = Control;