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
exports.mail = void 0;
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");
var config = require("config");
var emailSchema = new mongoose.Schema({
    email: String,
});
var Email = mongoose.model("Email", emailSchema);
function mail(system) {
    return __awaiter(this, void 0, void 0, function () {
        var emailDocs, emails, account, transporter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Email.find({})];
                case 1:
                    emailDocs = _a.sent();
                    emails = emailDocs.map(function (email) { return email.email; });
                    account = {
                        user: process.env.smtp_user || config.get("smtp_user"),
                        pass: process.env.smtp_pass || config.get("smtp_pass"),
                    };
                    transporter = nodemailer.createTransport({
                        host: process.env.smtp_host || config.get("smtp_host"),
                        port: process.env.smtp_port || config.get("smtp_port"),
                        // secure: (process.env.smtp_port || config.get("smtp_port")) == "465" ? true : false, // true for 465, false for other ports
                        // secure: true, // true for 465, false for other ports
                        auth: {
                            user: account.user,
                            pass: account.pass,
                        },
                    });
                    emails.forEach(function (email) {
                        transporter
                            .sendMail({
                            from: account.user,
                            to: email,
                            subject: "System Down",
                            text: "",
                            html: "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <meta name=\"x-apple-disable-message-reformatting\" />\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n  <meta name=\"color-scheme\" content=\"light dark\" />\n  <meta name=\"supported-color-schemes\" content=\"light dark\" />\n  <title></title>\n  <style type=\"text/css\" rel=\"stylesheet\" media=\"all\">\n    @import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap\");\n\n    body {\n      width: 100% !important;\n      height: 100%;\n      margin: 0;\n      -webkit-text-size-adjust: none;\n    }\n\n    a {\n      color: #3869D4;\n      text-decoration: none;\n    }\n\n    a img {\n      border: none;\n    }\n\n    td {\n      word-break: break-word;\n    }\n\n    body,\n    td,\n    th {\n      font-family: \"Nunito Sans\", Helvetica, Arial, sans-serif;\n    }\n\n    h1 {\n      margin-top: 0;\n      color: #333333;\n      font-size: 22px;\n      font-weight: bold;\n      text-align: left;\n    }\n\n    h2 {\n      margin-top: 0;\n      color: #333333;\n      font-size: 16px;\n      font-weight: bold;\n      text-align: left;\n    }\n\n    h3 {\n      margin-top: 0;\n      color: #333333;\n      font-size: 14px;\n      font-weight: bold;\n      text-align: left;\n    }\n\n    td,\n    th {\n      font-size: 16px;\n    }\n\n    p {\n      margin: .4em 0 1.1875em;\n      font-size: 16px;\n      line-height: 1.625;\n    }\n\n    .align-right {\n      text-align: right;\n    }\n\n    .align-left {\n      text-align: left;\n    }\n\n    .align-center {\n      text-align: center;\n    }\n\n\n\n    .button {\n      background-color: #3869D4;\n      border-top: 10px solid #3869D4;\n      border-right: 18px solid #3869D4;\n      border-bottom: 10px solid #3869D4;\n      border-left: 18px solid #3869D4;\n      display: inline-block;\n      color: #FFF;\n      text-decoration: none;\n      border-radius: 3px;\n      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);\n      -webkit-text-size-adjust: none;\n      box-sizing: border-box;\n    }\n\n    .button--green {\n      background-color: #22BC66;\n      border-top: 10px solid #22BC66;\n      border-right: 18px solid #22BC66;\n      border-bottom: 10px solid #22BC66;\n      border-left: 18px solid #22BC66;\n    }\n\n    @media only screen and (max-width: 500px) {\n      .button {\n        width: 100% !important;\n        text-align: center !important;\n      }\n    }\n\n\n    body {\n      background-color: #F2F4F6;\n      color: #51545E;\n    }\n\n    p {\n      color: #51545E;\n    }\n\n    .email-wrapper {\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      -premailer-width: 100%;\n      -premailer-cellpadding: 0;\n      -premailer-cellspacing: 0;\n      background-color: #F2F4F6;\n    }\n\n    .email-content {\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      -premailer-width: 100%;\n      -premailer-cellpadding: 0;\n      -premailer-cellspacing: 0;\n    }\n\n    .email-header {\n      padding: 25px 0;\n      text-align: center;\n    }\n\n    .email-body {\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      -premailer-width: 100%;\n      -premailer-cellpadding: 0;\n      -premailer-cellspacing: 0;\n    }\n\n    .email-footer p {\n      color: #A8AAAF;\n    }\n\n    .body-sub {\n      margin-top: 25px;\n      padding-top: 25px;\n      border-top: 1px solid #EAEAEC;\n    }\n\n    .content-cell {\n      padding: 45px;\n    }\n\n    @media only screen and (max-width: 600px) {\n\n      .email-body_inner,\n      .email-footer {\n        width: 100% !important;\n      }\n    }\n\n    @media (prefers-color-scheme: dark) {\n\n      body,\n      .email-body,\n      .email-body_inner,\n      .email-content,\n      .email-wrapper,\n      .email-header,\n      .email-footer {\n        background-color: #333333 !important;\n        color: #FFF !important;\n      }\n    }\n\n    :root {\n      color-scheme: light dark;\n      supported-color-schemes: light dark;\n    }\n  </style>\n</head>\n\n<body>\n  <table class=\"email-wrapper\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n    <tr>\n      <td align=\"center\">\n        <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n          <tr>\n            <td class=\"email-header\">\n              <a href=\"#\" class=\"f-fallback email-masthead_name\">\n                UP Stats\n              </a>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"email-body\" width=\"570\" cellpadding=\"0\" cellspacing=\"0\">\n              <table class=\"email-body_inner\" align=\"center\" width=\"570\" cellpadding=\"0\" cellspacing=\"0\">\n                <tr>\n                  <td class=\"content-cell\">\n                    <div class=\"f-fallback\">\n                      <h1>Currently " + system + " System down</h1>\n                      <p>you are receiving this email because you are subscribed.</p>\n                      <p>View System Status</p>\n                      <table class=\"body-action\" align=\"center\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n                        <tr>\n                          <td align=\"center\">\n                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                              <tr>\n                                <td align=\"center\"></td> <!-- Website URL -->\n                                <a href=\"#\" class=\" button button--green\" target=\"_blank\">Visit Website</a>\n                          </td>\n                        </tr>\n                      </table>\n                  </td>\n                </tr>\n              </table>\n          <tr>\n            <td>\n              <table class=\"email-footer\" align=\"center\" width=\"570\" cellpadding=\"0\" cellspacing=\"0\">\n                <tr>\n                  <td class=\"content-cell\" align=\"center\">\n                    <p class=\"f-fallback sub align-center\">&copy; 2021 UP Stats. All rights reserved.</p>\n                    <a href=\"/\">UnSubscribe</a>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</body>\n\n</html>", // html body
                        })
                            .then(function (info) {
                            console.log("Message sent:", info);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.mail = mail;
module.exports = { mail: mail };
