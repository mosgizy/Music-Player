"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sideBar_1 = require("./slice/sideBar");
exports.store = toolkit_1.configureStore({
    reducer: {
        sidebar: sideBar_1["default"]
    },
    devTools: true
});
// export type RootStore = ReturnType<typeof store.makeStore>
