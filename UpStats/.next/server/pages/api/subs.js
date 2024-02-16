"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subs";
exports.ids = ["pages/api/subs"];
exports.modules = {

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/subscriber.js":
/*!******************************!*\
  !*** ./models/subscriber.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst emailSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        minlength: 5,\n        maxlength: 255,\n        unique: true\n    }\n});\nfunction validateEmail(email) {\n    const schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n        email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(5).max(255).required().email()\n    });\n    return schema.validate(email);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_1___default().models.Email) || mongoose__WEBPACK_IMPORTED_MODULE_1___default().model(\"Email\", emailSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvc3Vic2NyaWJlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0I7QUFDVTtBQUVoQyxNQUFNRSxXQUFXLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUN0Q0csS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxTQUFTLEVBQUUsR0FBRztRQUNkQyxNQUFNLEVBQUUsSUFBSTtLQUNiO0NBQ0YsQ0FBQztBQUVLLFNBQVNDLGFBQWEsQ0FBQ1AsS0FBSyxFQUFFO0lBQ25DLE1BQU1RLE1BQU0sR0FBR1osaURBQVUsQ0FBQztRQUN4QkksS0FBSyxFQUFFSixpREFBVSxFQUFFLENBQUNlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDVCxRQUFRLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFO0tBQ3ZELENBQUM7SUFFRixPQUFPUSxNQUFNLENBQUNLLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELGlFQUFlSCw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxPQUFPLEVBQUVDLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBzdGF0cy8uL21vZGVscy9zdWJzY3JpYmVyLmpzP2RmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tIFwiam9pXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGVtYWlsU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1pbmxlbmd0aDogNSxcbiAgICBtYXhsZW5ndGg6IDI1NSxcbiAgICB1bmlxdWU6IHRydWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCh7XG4gICAgZW1haWw6IEpvaS5zdHJpbmcoKS5taW4oNSkubWF4KDI1NSkucmVxdWlyZWQoKS5lbWFpbCgpLFxuICB9KTtcblxuICByZXR1cm4gc2NoZW1hLnZhbGlkYXRlKGVtYWlsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkVtYWlsIHx8IG1vbmdvb3NlLm1vZGVsKFwiRW1haWxcIiwgZW1haWxTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIkpvaSIsIm1vbmdvb3NlIiwiZW1haWxTY2hlbWEiLCJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsInVuaXF1ZSIsInZhbGlkYXRlRW1haWwiLCJzY2hlbWEiLCJvYmplY3QiLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJ2YWxpZGF0ZSIsIm1vZGVscyIsIkVtYWlsIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/subscriber.js\n");

/***/ }),

/***/ "(api)/./pages/api/subs/index.js":
/*!*********************************!*\
  !*** ./pages/api/subs/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/subscriber */ \"(api)/./models/subscriber.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"GET\") {\n        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res, async ()=>{\n            const emails = await _models_subscriber__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().sort(\"email\");\n            res.send(emails);\n        });\n    } else if (req.method === \"POST\") {\n        const { error  } = (0,_models_subscriber__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(req.body);\n        if (error) return res.status(400).send(error.details[0].message);\n        const email = new _models_subscriber__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            email: req.body.email\n        });\n        await email.save();\n        res.send(email);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vicy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBQytCO0FBQ3ZCO0FBQzNDLGlFQUFlLE9BQU9JLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU1MLHFEQUFFLEVBQUUsQ0FBQztJQUNYLElBQUlJLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QkgsdURBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsVUFBWTtZQUM3QixNQUFNRSxNQUFNLEdBQUcsTUFBTU4sK0RBQVUsRUFBRSxDQUFDUSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQy9DSixHQUFHLENBQUNLLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxPQUFPLElBQUlILEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNoQyxNQUFNLEVBQUVLLEtBQUssR0FBRSxHQUFHVCxpRUFBYSxDQUFDRSxHQUFHLENBQUNRLElBQUksQ0FBQztRQUN6QyxJQUFJRCxLQUFLLEVBQUUsT0FBT04sR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQ0MsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1FBRWpFLE1BQU1DLEtBQUssR0FBRyxJQUFJZiwwREFBSyxDQUFDO1lBQ3RCZSxLQUFLLEVBQUVaLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDSSxLQUFLO1NBQ3RCLENBQUM7UUFDRixNQUFNQSxLQUFLLENBQUNDLElBQUksRUFBRSxDQUFDO1FBRW5CWixHQUFHLENBQUNLLElBQUksQ0FBQ00sS0FBSyxDQUFDLENBQUM7SUFDbEIsT0FBTztRQUNMWCxHQUFHLENBQUNhLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFBQyxLQUFLO1lBQUUsTUFBTTtTQUFDLENBQUMsQ0FBQztRQUN4Q2IsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNNLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0FBQ0gsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBzdGF0cy8uL3BhZ2VzL2FwaS9zdWJzL2luZGV4LmpzPzQ3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xuaW1wb3J0IEVtYWlsLCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3N1YnNjcmliZXJcIjtcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYXV0aFwiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGRiKCk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgd2l0aEF1dGgocmVxLCByZXMsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGVtYWlscyA9IGF3YWl0IEVtYWlsLmZpbmQoKS5zb3J0KFwiZW1haWxcIik7XG4gICAgICByZXMuc2VuZChlbWFpbHMpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gdmFsaWRhdGVFbWFpbChyZXEuYm9keSk7XG4gICAgaWYgKGVycm9yKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKTtcblxuICAgIGNvbnN0IGVtYWlsID0gbmV3IEVtYWlsKHtcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICB9KTtcbiAgICBhd2FpdCBlbWFpbC5zYXZlKCk7XG5cbiAgICByZXMuc2VuZChlbWFpbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiLCBcIlBPU1RcIl0pO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCBOb3QgQWxsb3dlZGApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImRiIiwiRW1haWwiLCJ2YWxpZGF0ZUVtYWlsIiwid2l0aEF1dGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbHMiLCJmaW5kIiwic29ydCIsInNlbmQiLCJlcnJvciIsImJvZHkiLCJzdGF0dXMiLCJkZXRhaWxzIiwibWVzc2FnZSIsImVtYWlsIiwic2F2ZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/subs/index.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res, fn)=>{\n    const token = req.headers[\"x-auth-token\"];\n    if (!token) return res.status(401).send(\"Access denied. No token provided.\");\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"secretkey\");\n        req.user = decoded;\n    } catch (ex) {\n        return res.status(400).send(\"Invalid token.\");\n    }\n    await fn();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxHQUFLO0lBQ3JDLE1BQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ3pDLElBQUksQ0FBQ0QsS0FBSyxFQUFFLE9BQU9GLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUU3RSxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHUiwwREFBVSxDQUFDSSxLQUFLLEVBQUVNLFdBQXlCLENBQUM7UUFDNURULEdBQUcsQ0FBQ1ksSUFBSSxHQUFHTCxPQUFPLENBQUM7SUFDckIsRUFBRSxPQUFPTSxFQUFFLEVBQUU7UUFDWCxPQUFPWixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELE1BQU1KLEVBQUUsRUFBRSxDQUFDO0FBQ2IsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXBzdGF0cy8uL3V0aWxzL2F1dGguanM/ZWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzLCBmbikgPT4ge1xuICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzW1wieC1hdXRoLXRva2VuXCJdO1xuICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoXCJBY2Nlc3MgZGVuaWVkLiBObyB0b2tlbiBwcm92aWRlZC5cIik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuand0UHJpdmF0ZUtleSk7XG4gICAgcmVxLnVzZXIgPSBkZWNvZGVkO1xuICB9IGNhdGNoIChleCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChcIkludmFsaWQgdG9rZW4uXCIpO1xuICB9XG4gIGF3YWl0IGZuKCk7XG59O1xuIl0sIm5hbWVzIjpbImp3dCIsInJlcSIsInJlcyIsImZuIiwidG9rZW4iLCJoZWFkZXJzIiwic3RhdHVzIiwic2VuZCIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52Iiwiand0UHJpdmF0ZUtleSIsInVzZXIiLCJleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://ajitha:YSLtTS4utq6p!cW@cluster0.lkjnibi.mongodb.net/?retryWrites=true&w=majority\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            bufferCommands: false,\n            bufferMaxEntries: 0,\n            useFindAndModify: false,\n            useCreateIndex: true\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsV0FBVyxHQUFHQyxnR0FBdUI7QUFFM0MsSUFBSSxDQUFDRCxXQUFXLEVBQUU7SUFDaEIsTUFBTSxJQUFJRyxLQUFLLENBQ2Isc0VBQXNFLENBQ3ZFLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Q0FJQyxHQUNELElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssTUFBTSxFQUFFO0lBQ1hBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUc7UUFBRU8sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7S0FBRSxDQUFDO0FBQzNELENBQUM7QUFFRCxlQUFlQyxTQUFTLEdBQUc7SUFDekIsSUFBSUosTUFBTSxDQUFDRSxJQUFJLEVBQUU7UUFDZixPQUFPRixNQUFNLENBQUNFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxJQUFJLEdBQUc7WUFDWEMsZUFBZSxFQUFFLElBQUk7WUFDckJDLGtCQUFrQixFQUFFLElBQUk7WUFDeEJDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CQyxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCQyxjQUFjLEVBQUUsSUFBSTtTQUNyQjtRQUVEWCxNQUFNLENBQUNHLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVcsRUFBRVMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxDQUFDbEIsUUFBUSxHQUFLO1lBQ3RFLE9BQU9BLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDREssTUFBTSxDQUFDRSxJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDbkMsT0FBT0gsTUFBTSxDQUFDRSxJQUFJLENBQUM7QUFDckIsQ0FBQztBQUVELGlFQUFlRSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cHN0YXRzLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgICBidWZmZXJNYXhFbnRyaWVzOiAwLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJidWZmZXJDb21tYW5kcyIsImJ1ZmZlck1heEVudHJpZXMiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subs/index.js"));
module.exports = __webpack_exports__;

})();