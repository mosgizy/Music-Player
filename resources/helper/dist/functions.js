"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.shuffle = exports.handleTrackUpload = exports.msToTime = exports.totalTrackTime = void 0;
exports.totalTrackTime = function (tracks) {
    return tracks.map(function (_a) {
        var duration_ms = _a.duration_ms;
        return duration_ms;
    })
        .reduce(function (a, b) { return a + b; }, 0);
};
exports.msToTime = function (duration) {
    var seconds = Math.floor((duration / 1000) % 60), minutes = Math.floor((duration / (1000 * 60)) % 60), hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
};
exports.handleTrackUpload = function (item, album) {
    var payload = {
        audioUrl: item.preview_url,
        image: album[0].images[2].url,
        name: album[0].artists[0].name,
        title: item.name,
        trackId: item.id
    };
    return __assign({}, payload);
};
exports.shuffle = function (array) {
    return array === null || array === void 0 ? void 0 : array.map(function (value) { return ({ value: value, sort: Math.random() }); }).sort(function (a, b) { return a.sort - b.sort; }).map(function (_a) {
        var value = _a.value;
        return value;
    });
};
