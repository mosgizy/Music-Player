"use strict";
exports.__esModule = true;
var google_1 = require("@next/font/google");
var HeroCard_1 = require("./components/HeroCard");
var Slide_1 = require("./components/Slide");
var TopChartCard_1 = require("./components/TopChartCard");
var SongCard_1 = require("./components/SongCard");
var Controller_1 = require("./components/Controller");
var link_1 = require("next/link");
var inter = google_1.Inter({ subsets: ['latin'] });
var Home = function () {
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
    return (React.createElement("main", { className: "min-height-screen pb-8 pt-20 text-red-500 flex flex-col" },
        React.createElement("div", { className: "flex flex-col gap-10" },
            React.createElement("div", { className: "flex flex-col gap-8 md:flex-row md:gap-2" },
                React.createElement(HeroCard_1["default"], null),
                React.createElement("div", { className: "hidden md:flex-col md:gap-4 md:flex md:flex-[1_1_32%]" },
                    React.createElement("h1", { className: "text-2xl font-bold" },
                        React.createElement(link_1["default"], { href: "/chart" }, "Top Charts")),
                    React.createElement(TopChartCard_1["default"], null),
                    React.createElement(TopChartCard_1["default"], null),
                    React.createElement(TopChartCard_1["default"], null))),
            React.createElement("div", { className: "md:hidden" },
                React.createElement(Slide_1["default"], { data: cards, responsive: responsiveTopChart, Component: React.createElement(TopChartCard_1["default"], null), title: 'Top charts', link: '/chart' })),
            React.createElement(Slide_1["default"], { data: cards, responsive: responsiveNewRelease, Component: React.createElement(SongCard_1["default"], null), title: 'New releases', link: "releases" })),
        React.createElement("div", { className: "md:hidden" },
            React.createElement(Controller_1["default"], null))));
};
exports["default"] = Home;
