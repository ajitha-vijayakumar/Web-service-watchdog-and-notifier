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
exports.getStatus = void 0;
var telegram_1 = require("telegram");
var sessions_1 = require("telegram/sessions");
var config = require("config");
//Logger.setLevel("none"); // no logging
var config_apiId = config.get("api_id");
var config_apiHash = config.get("api_hash");
var config_session = config.get("tg_session");
var apiId = process.env.api_id || config_apiId;
var apiHash = process.env.api_hash || config_apiHash;
var stringSession = new sessions_1.StringSession(process.env.tg_session || config_session);
var getStatus = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var client, sentMessage, sentId, history, lastMessageId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = new telegram_1.TelegramClient(stringSession, apiId, apiHash, {
                    connectionRetries: 5,
                });
                return [4 /*yield*/, client.connect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, client.invoke(new telegram_1.Api.messages.SendMessage({ peer: username, message: "/start" }))];
            case 2:
                sentMessage = _a.sent();
                sentId = sentMessage.updates[0].id;
                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1500); })];
            case 3:
                _a.sent();
                return [4 /*yield*/, client.invoke(new telegram_1.Api.messages.GetHistory({ peer: username, limit: 1 }))];
            case 4:
                history = _a.sent();
                lastMessageId = history.messages[0].id;
                return [4 /*yield*/, client.disconnect()];
            case 5:
                _a.sent();
                return [2 /*return*/, sentId === lastMessageId ? "down" : "up"];
        }
    });
}); };
exports.getStatus = getStatus;
