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
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios").default;
var db_1 = require("./helpers/db");
var config_1 = require("./helpers/config");
var mailer_1 = require("./helpers/mailer");
var telegram_1 = require("./helpers/telegram");
var mongoose = require("mongoose");
var config = require("config");
var uri = process.env.DB_URL || config.get("db");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);
var checkSite = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios.get(url)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data ? "up" : "down"];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, "down"];
            case 3: return [2 /*return*/];
        }
    });
}); };
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var systems, _i, systems_1, system, result, _a, result, _b, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, db_1.getSystems()];
                case 1:
                    systems = _c.sent();
                    _i = 0, systems_1 = systems;
                    _c.label = 2;
                case 2:
                    if (!(_i < systems_1.length)) return [3 /*break*/, 17];
                    system = systems_1[_i];
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 15, , 16]);
                    if (!(system.type === "web")) return [3 /*break*/, 9];
                    return [4 /*yield*/, checkSite(system.url)];
                case 4:
                    result = _c.sent();
                    return [4 /*yield*/, db_1.updateStatus(system._id, result)];
                case 5:
                    _c.sent();
                    if (!(result === "down")) return [3 /*break*/, 8];
                    _a = config_1.getConfig();
                    if (!_a) return [3 /*break*/, 7];
                    return [4 /*yield*/, mailer_1.mail(system.name)];
                case 6:
                    _a = (_c.sent());
                    _c.label = 7;
                case 7:
                    _a;
                    _c.label = 8;
                case 8:
                    console.log("Success " + system.name);
                    return [3 /*break*/, 14];
                case 9:
                    if (!(system.type === "telegram")) return [3 /*break*/, 14];
                    return [4 /*yield*/, telegram_1.getStatus(system.url)];
                case 10:
                    result = _c.sent();
                    return [4 /*yield*/, db_1.updateStatus(system._id, result)];
                case 11:
                    _c.sent();
                    if (!(result === "down")) return [3 /*break*/, 14];
                    _b = config_1.getConfig();
                    if (!_b) return [3 /*break*/, 13];
                    return [4 /*yield*/, mailer_1.mail(system.name)];
                case 12:
                    _b = (_c.sent());
                    _c.label = 13;
                case 13:
                    _b;
                    _c.label = 14;
                case 14: return [3 /*break*/, 16];
                case 15:
                    e_2 = _c.sent();
                    console.log(e_2);
                    return [3 /*break*/, 16];
                case 16:
                    _i++;
                    return [3 /*break*/, 2];
                case 17: return [2 /*return*/];
            }
        });
    });
}
main();
