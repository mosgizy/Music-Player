'use client';
"use strict";
exports.__esModule = true;
var TopChartCard_1 = require("../components/TopChartCard");
var Page = function () {
    var cards = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    return (React.createElement("main", { className: "flex flex-col gap-4 pt-20" }, cards.map(function (card) {
        return React.createElement(TopChartCard_1["default"], { key: card });
    })));
};
exports["default"] = Page;
