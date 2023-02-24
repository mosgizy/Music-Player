'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var label_svg_1 = require("../../../resources/assets/avatar/label.svg");
var SongCard = function () {
    return (React.createElement("div", { className: "flex flex-col gap-1 w-[153px]" },
        React.createElement(image_1["default"], { className: "rounded-3xl", src: label_svg_1["default"], alt: "avatar" }),
        React.createElement("p", { className: "text-xs" }, "Life in a bubble"),
        React.createElement("p", { className: "text-sm opacity-50" }, "Asterisk")));
};
exports["default"] = SongCard;
