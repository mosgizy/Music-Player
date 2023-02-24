'use client';
"use strict";
exports.__esModule = true;
var TopChartCard_1 = require("./TopChartCard");
var nuka_carousel_1 = require("nuka-carousel");
var Slide = function () {
    var cards = [1, 2, 3, 4, 5, 6];
    return (React.createElement("section", null,
        React.createElement("h3", null, "Top charts"),
        React.createElement("div", { className: "mt-4" },
            React.createElement(nuka_carousel_1["default"], { wrapAround: true, animation: 'zoom', swiping: true, dragging: true, withoutControls: true, slidesToShow: 1.18, dragThreshold: 0.5, enableKeyboardControls: true }, cards.map(function (card) {
                return React.createElement(TopChartCard_1["default"], { key: card });
            })))));
};
exports["default"] = Slide;
