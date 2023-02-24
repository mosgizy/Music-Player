'use client';
"use strict";
exports.__esModule = true;
exports.activeSideBar = exports.sideBar = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    active: false
};
exports.sideBar = toolkit_1.createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        activeSideBar: function (state, action) {
            state.active = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
exports.activeSideBar = exports.sideBar.actions.activeSideBar;
exports["default"] = exports.sideBar.reducer;
