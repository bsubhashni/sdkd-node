module.exports.InfoResponse = function() {
    return {
    CAPS:  this.Caps(),
    CONFIG:  this.Config(),
    HEADERS:  this.Headers(),
    Time: 0,
    RunTime:  this.SDKRuntime(),
    SDK: "",
    Changeset: ""
}};

module.exports.Caps = function() {
    return {
    DS_SHARED: false,
    CANCEL: false,
    CONTINUOUS: false,
    PREAMBLE: false,
    VIEWS: false
}};

module.exports.Config = function () {
    return {
        conncache: "",
        ioplugin: "",
        reconnect: 0
}};

module.exports.Headers = function () {
    return {
        changeset: "",
        SDK:""
}};

module.exports.SDKRuntime = function () {
    return {
        SDK: ""
}};

module.exports.ResponseCommand =  function () { return {
    Command: "",
    ReqID: 0,
    ResData: {},
    Handle: 0,
    Status: 0
}};

module.exports.ResultResponse = function () { return {
    Summary: null,
    Timings: this.Timings()
}};

module.exports.Timings = function () { return {
    Base: 0,
    Step : 0,
    Windows: []
}};

module.exports.Window = function () { return {
    Count: 0,
    Avg: 0,
    Min: 0,
    Max: 0,
    Errors: {}
}};