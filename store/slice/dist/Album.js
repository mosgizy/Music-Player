"use strict";
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
var _a;
exports.__esModule = true;
exports.setMyCollections = exports.setAlbum = exports.setLoader = exports.albumSlice = exports.fetchAlbums = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var Api_1 = require("utils/Api");
exports.fetchAlbums = toolkit_1.createAsyncThunk("fetchAlbums", function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Api_1["default"]()];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5000); })];
            case 2:
                _a.sent();
                return [2 /*return*/, response.albums];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); });
var initialState = {
    loading: true,
    albums: [],
    album: [],
    myCollections: []
};
exports.albumSlice = toolkit_1.createSlice({
    name: 'album',
    initialState: initialState,
    reducers: {
        setLoader: function (state, action) {
            state.loading = action.payload ? action.payload : true;
        },
        setAlbum: function (state, action) {
            state.albums = action.payload;
            state.loading = false;
        },
        setMyCollections: function (state, action) {
            state.myCollections = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(exports.fetchAlbums.pending, function (state) {
            state.loading = true;
        })
            .addCase(exports.fetchAlbums.fulfilled, function (state, _a) {
            var payload = _a.payload;
            state.albums = payload;
            state.loading = false;
        })
            .addCase(exports.fetchAlbums.rejected, function (state) {
            state.loading = true;
        });
    }
});
// Action creators are generated for each case reducer function
exports.setLoader = (_a = exports.albumSlice.actions, _a.setLoader), exports.setAlbum = _a.setAlbum, exports.setMyCollections = _a.setMyCollections;
exports["default"] = exports.albumSlice.reducer;
