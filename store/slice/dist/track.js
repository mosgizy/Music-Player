"use strict";
var _a;
exports.__esModule = true;
exports.setRepeatTrack = exports.setPlaying = exports.changeTrack = exports.setTrackList = exports.setTrack = exports.trackSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    audioUrl: "https://p.scdn.co/mp3-preview/06a9555fbc63956ab761e262afac81929b8f0231?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
    image: "",
    name: "",
    title: "",
    tracks: [],
    trackId: "",
    play: false,
    repeatTrack: false
};
exports.trackSlice = toolkit_1.createSlice({
    name: "trackSlice",
    initialState: initialState,
    reducers: {
        setTrack: function (state, action) {
            state.audioUrl = action.payload.audioUrl;
            state.image = action.payload.image;
            state.name = action.payload.name;
            state.title = action.payload.title;
            state.trackId = action.payload.trackId;
        },
        setTrackList: function (state, action) {
            state.tracks = action.payload;
        },
        changeTrack: function (state, action) {
            state.audioUrl = action.payload.audioUrl;
            state.title = action.payload.title;
            state.trackId = action.payload.trackId;
        },
        setPlaying: function (state, action) {
            state.play = action.payload;
        },
        setRepeatTrack: function (state, action) {
            state.repeatTrack = action.payload;
        }
    }
});
exports.setTrack = (_a = exports.trackSlice.actions, _a.setTrack), exports.setTrackList = _a.setTrackList, exports.changeTrack = _a.changeTrack, exports.setPlaying = _a.setPlaying, exports.setRepeatTrack = _a.setRepeatTrack;
exports["default"] = exports.trackSlice.reducer;
