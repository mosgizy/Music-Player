'use client';
"use strict";
exports.__esModule = true;
var HeroCard_1 = require("./../components/HeroCard");
var Slide_1 = require("./../components/Slide");
var TopChartCard_1 = require("./../components/TopChartCard");
var SongCard_1 = require("./../components/SongCard");
var Controller_1 = require("./../components/Controller");
var link_1 = require("next/link");
var Album_1 = require("store/slice/Album");
var hook_1 = require("store/hook");
var react_1 = require("react");
var functions_1 = require("resources/helper/functions");
var track_1 = require("store/slice/track");
var HomePage = function (_a) {
    var data = _a.data;
    var cards = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    var responsiveTopChart = {
        0: {
            items: 1.1
        },
        500: {
            items: 2.1
        },
        768: {
            items: 3.1,
            itemsFit: 'contain'
        },
        1024: {
            items: 5.1,
            itemsFit: 'contain'
        }
    };
    var responsiveNewRelease = {
        0: {
            items: 2.1
        },
        500: {
            items: 3.1
        },
        768: {
            items: 4.1,
            itemsFit: 'contain'
        },
        1024: {
            items: 6.1,
            itemsFit: 'contain'
        },
        1640: {
            items: 9.1,
            itemsFit: 'contain'
        }
    };
    var dispatch = hook_1.useAppDispatch();
    var _b = hook_1.useAppSelector(function (state) { return state.albumSlice; }), albums = _b.albums, loading = _b.loading;
    var albumCarousel = albums.map(function (album, index) {
        var track = {
            audioUrl: album.tracks.items[0].preview_url,
            title: album.tracks.items[0].name.replace(',', ''),
            image: album.images[2].url,
            name: album.artists[0].name,
            trackId: album.tracks.items[0].id
        };
        if (index === 0) {
            dispatch(track_1.setTrack(track));
            dispatch(track_1.setTrackList(album.tracks.items));
        }
        return (React.createElement(TopChartCard_1["default"], { avatar: album.images[2].url, title: album.name.replace(',', ''), time: "" + functions_1.msToTime(functions_1.totalTrackTime(album.tracks.items)), artist: album.artists[0].name, key: album.id }));
    });
    var imageUrls = albums.map(function (album) {
        return album.images[2].url;
    });
    var handleSetTracks = function (item, album) {
        dispatch(track_1.setTrack({
            title: item.name,
            audioUrl: item.preview_url,
            trackId: item.id,
            name: item.name,
            image: album.images[2].url
        }));
        // console.log('hello');
    };
    var songCards = albums.map(function (album, index) {
        var items = album.tracks.items;
        return items.map(function (item, index) {
            return (React.createElement(SongCard_1["default"], { image: album.images[2].url, title: item.artists[0].name, name: item.name, 
                // func={handleSetTracks(item, album)}
                key: index }));
        });
    });
    console.log(functions_1.shuffle(songCards.flat()));
    var loader = cards.slice(0, 3).map(function (card) {
        return React.createElement("div", { key: card, className: "loader bg-darkAlt" });
    });
    react_1.useEffect(function () {
        dispatch(Album_1.setAlbum(data.albums));
        // dispatch(fetchAlbums());
    }, []);
    // useEffect(() => {
    // 	// dispatch(setMyCollections(songCards.flat()));
    // }, [songCards]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex flex-col gap-10" },
            React.createElement("div", { className: "flex flex-col gap-8 md:flex-row md:gap-2" },
                React.createElement(HeroCard_1["default"], { imageUrls: imageUrls }),
                React.createElement("div", { className: "hidden md:flex-col md:gap-4 md:flex md:flex-[1_1_32%] md:h-[420px]" },
                    React.createElement("h1", { className: "text-2xl font-bold" },
                        React.createElement(link_1["default"], { href: "/chart" }, "Top Charts")),
                    React.createElement("div", { className: "flex flex-col gap-4 overflow-scroll h-full" }, loading || albums.length === 0 ? loader : albumCarousel))),
            React.createElement("div", { className: "md:hidden" },
                React.createElement(Slide_1["default"], { responsive: responsiveTopChart, Component: albumCarousel, title: 'Top charts', link: '/chart' })),
            React.createElement(Slide_1["default"], { responsive: responsiveNewRelease, Component: functions_1.shuffle(songCards.flat()), title: 'New releases', link: "releases" })),
        React.createElement("div", { className: "md:hidden" }, data.albums && React.createElement(Controller_1["default"], null))));
};
exports["default"] = HomePage;
