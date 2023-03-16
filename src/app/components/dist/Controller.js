'use client';
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var hook_1 = require("store/hook");
var react_1 = require("react");
var track_1 = require("store/slice/track");
var functions_1 = require("resources/helper/functions");
var Controller = function () {
    var _a = hook_1.useAppSelector(function (state) { return state.trackSlice; }), audioUrl = _a.audioUrl, image = _a.image, name = _a.name, title = _a.title, tracks = _a.tracks, play = _a.play, trackId = _a.trackId, repeatTrack = _a.repeatTrack;
    var dispatch = hook_1.useAppDispatch();
    var audio = react_1.useState(new window.Audio(audioUrl))[0];
    // const audio = new Audio(audioUrl);
    var _b = react_1.useReducer(function (prev, next) {
        return __assign(__assign({}, prev), next);
    }, { progress: 0, currentTrackIndex: 0, shuffle: false, volume: 0.5 }), event = _b[0], updateEvent = _b[1];
    var audioProgress = function () {
        var currentTime = audio.currentTime, duration = audio.duration;
        updateEvent({ progress: Math.floor((currentTime / duration) * 100) });
        event.progress > 98.9 && updateEvent({ progress: 0 });
    };
    var handlePlay = function () {
        dispatch(track_1.setPlaying(!play));
    };
    var handleChangeTrack = function (index) {
        if (!tracks)
            return;
        var track = tracks[index];
        var change = {
            audioUrl: track === null || track === void 0 ? void 0 : track.preview_url,
            title: track === null || track === void 0 ? void 0 : track.name,
            trackId: track === null || track === void 0 ? void 0 : track.id
        };
        dispatch(track_1.changeTrack(change));
        setTimeout(function () {
            dispatch(track_1.setPlaying(true));
        }, 1);
    };
    var handleNext = function () {
        if (!tracks)
            return;
        if (event.currentTrackIndex >= (tracks === null || tracks === void 0 ? void 0 : tracks.length) - 1) {
            updateEvent({ currentTrackIndex: 0 });
            handleChangeTrack(0);
            !event.repeat && dispatch(track_1.setPlaying(false));
        }
        else {
            updateEvent({ currentTrackIndex: event.currentTrackIndex + 1 });
            handleChangeTrack(event.currentTrackIndex + 1);
        }
    };
    var handlePrev = function () {
        if (!tracks)
            return;
        if (event.currentTrackIndex <= 0) {
            updateEvent({ currentTrackIndex: (tracks === null || tracks === void 0 ? void 0 : tracks.length) - 1 });
            handleChangeTrack((tracks === null || tracks === void 0 ? void 0 : tracks.length) - 1);
        }
        else {
            updateEvent({ currentTrackIndex: event.currentTrackIndex - 1 });
            handleChangeTrack(event.currentTrackIndex - 1);
        }
    };
    var handleShuffleTracks = function () {
        if (!tracks)
            return;
        var newTracks = functions_1.shuffle(tracks);
        dispatch(track_1.setTrackList(newTracks));
        updateEvent({ shuffle: !event.shuffle });
    };
    var handleAutoNext = function () {
        if (!repeatTrack) {
            handleNext();
            return;
        }
        handleChangeTrack(event.currentTrackIndex);
        dispatch(track_1.setPlaying(false));
    };
    var setCurrentTrackIndex = function () {
        var currentTrack = tracks === null || tracks === void 0 ? void 0 : tracks.findIndex(function (track) {
            return trackId === track.id;
        });
        updateEvent({ currentTrackIndex: currentTrack });
    };
    var handleTrackEvent = function (e) {
        //set the current track time
        audio.currentTime = (e.target.value * audio.duration) / 100;
    };
    var handleVolume = function (e) {
        audio.volume = Number(e.target.value);
        updateEvent({ volume: Number(e.target.value) });
    };
    var handleMute = function () {
        audio.volume = event.volume - 0.1;
        updateEvent({ volume: event.volume - 0.1 });
    };
    react_1.useEffect(function () {
        //set tracks and audio url when the
        //url is changed for next track or selected track
        audio.src = audioUrl;
        audio.currentTime = 0;
        updateEvent({ progress: 0 });
        dispatch(track_1.setPlaying(false));
        setCurrentTrackIndex();
    }, [audioUrl]);
    react_1.useEffect(function () {
        //play next track if current track ended
        audio.addEventListener('ended', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleAutoNext()];
        }); }); });
        return function () {
            audio.removeEventListener('ended', function () { return function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, handleAutoNext()];
            }); }); }; });
        };
    });
    react_1.useEffect(function () {
        play ? audio.play()["catch"](function (e) { return console.log(e); }) : audio.pause();
    }, [play]);
    react_1.useEffect(function () {
        audio.volume = event.volume;
    }, [event.volume]);
    // console.log(repeatTrack, 'general playing');
    audio.addEventListener('timeupdate', audioProgress);
    return (React.createElement("div", { className: "fixed z-50 bottom-0 py-8 px-6 md:px-10 md:py-5 bg-[rgba(29,33,35,0.3)] backdrop-blur-lg w-full border border-[rgba(255,255,255,0.1)]" },
        React.createElement("div", { className: "flex flex-row justify-between items-center md:gap-8" },
            React.createElement("div", { className: "flex flex-row gap-4 items-center" },
                React.createElement(image_1["default"], { className: "rounded-2xl", src: image, alt: "Avatar", width: 57, height: 57 }),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "text-sm" }, title),
                    React.createElement("p", { className: "text-xs opacity-50 mt-1" }, name))),
            React.createElement("div", { className: "hidden md:block md:flex-1" },
                React.createElement("div", { className: "flex flex-row gap-6 items-center justify-center text-base" },
                    React.createElement("button", { "aria-label": "shuffle" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { onClick: handleShuffleTracks, className: "w-[16px] h-[16px] cursor-pointer " + (event.shuffle && 'text-alt'), icon: free_solid_svg_icons_1.faShuffle })),
                    React.createElement("button", { "aria-label": "previous" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { onClick: handlePrev, className: "w-[16px] h-[16px] cursor-pointer", icon: free_solid_svg_icons_1.faBackward })),
                    React.createElement("button", { onClick: handlePlay, "aria-label": "play", className: "bg-secondary rounded-full flex justify-center cursor-pointer items-center h-[34px] w-[34px] shadow-3xl" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "w-[16px] h-[16px]", icon: play ? free_solid_svg_icons_1.faPause : free_solid_svg_icons_1.faPlay })),
                    React.createElement("button", { "aria-label": "next" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { onClick: handleNext, className: "w-[16px] h-[16px] cursor-pointer", icon: free_solid_svg_icons_1.faForward })),
                    React.createElement("button", { "aria-label": "repeat" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "w-[16px] h-[16px] cursor-pointer " + (repeatTrack && 'text-alt'), icon: free_solid_svg_icons_1.faRepeat, onClick: function () { return dispatch(track_1.setRepeatTrack(!repeatTrack)); } }))),
                React.createElement("div", { className: "mt-6 w-full" },
                    React.createElement("input", { type: "range", name: "scroll", id: "scroll", min: "0", max: "100", value: event.progress, className: "w-full", onChange: handleTrackEvent }))),
            React.createElement("div", { className: "hidden md:flex md:flex-row md:gap-4 md:items-center md:flex-initial md:w-48" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "w-[18px] h-[18px] cursor-pointer", icon: free_solid_svg_icons_1.faVolumeUp, onClick: handleMute }),
                React.createElement("input", { type: "range", name: "volume", id: "volume", min: "0", max: "1", step: "0.1", value: event.volume, className: "w-full cursor-pointer", onChange: handleVolume })),
            React.createElement("div", { className: "flex flex-row items-center gap-6 md:hidden" },
                React.createElement("div", { onClick: handlePlay, className: "bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlay })),
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faForward })))));
};
exports["default"] = react_1.memo(Controller);
