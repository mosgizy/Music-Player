'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var SongCard = function (_a) {
    var image = _a.image, title = _a.title, name = _a.name;
    return (React.createElement("div", { className: "flex flex-col gap-1 w-[153px] cursor-pointer" },
        React.createElement(image_1["default"], { className: "rounded-3xl", src: image, width: 153, height: 153, alt: "avatar" }),
        React.createElement("p", { className: "text-xs" }, title),
        React.createElement("p", { className: "text-sm opacity-50" }, name)));
};
exports["default"] = SongCard;
