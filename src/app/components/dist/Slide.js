'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_alice_carousel_1 = require("react-alice-carousel");
require("react-alice-carousel/lib/alice-carousel.css");
var Slide = function (_a) {
    var data = _a.data, responsive = _a.responsive, Component = _a.Component, title = _a.title, link = _a.link;
    var handleDragStart = function (e) { return e.preventDefault(); };
    var items = data === null || data === void 0 ? void 0 : data.map(function (card) {
        return (React.createElement("div", { onDragStart: handleDragStart, key: card }, Component));
    });
    return (React.createElement("section", { className: "pl-5" },
        React.createElement("h3", null,
            React.createElement(link_1["default"], { href: link }, title)),
        React.createElement("div", { className: "mt-4" },
            React.createElement(react_alice_carousel_1["default"], { mouseTracking: true, disableButtonsControls: true, disableDotsControls: true, keyboardNavigation: true, responsive: responsive, items: items }))));
};
exports["default"] = Slide;
