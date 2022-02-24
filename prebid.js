/* prebid.js v6.13.0-pre
Updated : 2022-02-23*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["pbjsChunk"];
/******/ 	window["pbjsChunk"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		408: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1011);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return internal; });
/* harmony export (immutable) */ __webpack_exports__["getPrebidInternal"] = getPrebidInternal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (immutable) */ __webpack_exports__["getUniqueIdentifierStr"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["generateUUID"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["getBidIdParameter"] = getBidIdParameter;
/* harmony export (immutable) */ __webpack_exports__["tryAppendQueryString"] = tryAppendQueryString;
/* harmony export (immutable) */ __webpack_exports__["parseQueryStringParameters"] = parseQueryStringParameters;
/* harmony export (immutable) */ __webpack_exports__["transformAdServerTargetingObj"] = transformAdServerTargetingObj;
/* harmony export (immutable) */ __webpack_exports__["getAdUnitSizes"] = getAdUnitSizes;
/* harmony export (immutable) */ __webpack_exports__["parseSizesInput"] = parseSizesInput;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArray"] = parseGPTSingleSizeArray;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArrayToRtbSize"] = parseGPTSingleSizeArrayToRtbSize;
/* harmony export (immutable) */ __webpack_exports__["getWindowTop"] = getWindowTop;
/* harmony export (immutable) */ __webpack_exports__["getWindowSelf"] = getWindowSelf;
/* harmony export (immutable) */ __webpack_exports__["getWindowLocation"] = getWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["logMessage"] = logMessage;
/* harmony export (immutable) */ __webpack_exports__["logInfo"] = logInfo;
/* harmony export (immutable) */ __webpack_exports__["logWarn"] = logWarn;
/* harmony export (immutable) */ __webpack_exports__["logError"] = logError;
/* harmony export (immutable) */ __webpack_exports__["prefixLog"] = prefixLog;
/* harmony export (immutable) */ __webpack_exports__["hasConsoleLogger"] = hasConsoleLogger;
/* harmony export (immutable) */ __webpack_exports__["debugTurnedOn"] = debugTurnedOn;
/* harmony export (immutable) */ __webpack_exports__["createInvisibleIframe"] = createInvisibleIframe;
/* harmony export (immutable) */ __webpack_exports__["getParameterByName"] = getParameterByName;
/* harmony export (immutable) */ __webpack_exports__["isA"] = isA;
/* harmony export (immutable) */ __webpack_exports__["isFn"] = isFn;
/* harmony export (immutable) */ __webpack_exports__["isStr"] = isStr;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isPlainObject"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["isEmptyStr"] = isEmptyStr;
/* harmony export (immutable) */ __webpack_exports__["_each"] = _each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (immutable) */ __webpack_exports__["_map"] = _map;
/* harmony export (immutable) */ __webpack_exports__["hasOwn"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["insertElement"] = insertElement;
/* harmony export (immutable) */ __webpack_exports__["waitForElementToLoad"] = waitForElementToLoad;
/* harmony export (immutable) */ __webpack_exports__["triggerPixel"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["callBurl"] = callBurl;
/* harmony export (immutable) */ __webpack_exports__["insertHtmlIntoIframe"] = insertHtmlIntoIframe;
/* harmony export (immutable) */ __webpack_exports__["insertUserSyncIframe"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelHtml"] = createTrackPixelHtml;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelIframeHtml"] = createTrackPixelIframeHtml;
/* harmony export (immutable) */ __webpack_exports__["getValueString"] = getValueString;
/* harmony export (immutable) */ __webpack_exports__["uniques"] = uniques;
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["getBidRequest"] = getBidRequest;
/* harmony export (immutable) */ __webpack_exports__["getKeys"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["getKeyByValue"] = getKeyByValue;
/* harmony export (immutable) */ __webpack_exports__["getBidderCodes"] = getBidderCodes;
/* harmony export (immutable) */ __webpack_exports__["isGptPubadsDefined"] = isGptPubadsDefined;
/* harmony export (immutable) */ __webpack_exports__["isApnGetTagDefined"] = isApnGetTagDefined;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCpm", function() { return getHighestCpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldestHighestCpmBid", function() { return getOldestHighestCpmBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestHighestCpmBid", function() { return getLatestHighestCpmBid; });
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["adUnitsFilter"] = adUnitsFilter;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["inIframe"] = inIframe;
/* harmony export (immutable) */ __webpack_exports__["isSafariBrowser"] = isSafariBrowser;
/* harmony export (immutable) */ __webpack_exports__["replaceAuctionPrice"] = replaceAuctionPrice;
/* harmony export (immutable) */ __webpack_exports__["replaceClickThrough"] = replaceClickThrough;
/* harmony export (immutable) */ __webpack_exports__["timestamp"] = timestamp;
/* harmony export (immutable) */ __webpack_exports__["getPerformanceNow"] = getPerformanceNow;
/* harmony export (immutable) */ __webpack_exports__["hasDeviceAccess"] = hasDeviceAccess;
/* harmony export (immutable) */ __webpack_exports__["checkCookieSupport"] = checkCookieSupport;
/* harmony export (immutable) */ __webpack_exports__["delayExecution"] = delayExecution;
/* harmony export (immutable) */ __webpack_exports__["groupBy"] = groupBy;
/* harmony export (immutable) */ __webpack_exports__["getDefinedParams"] = getDefinedParams;
/* harmony export (immutable) */ __webpack_exports__["isValidMediaTypes"] = isValidMediaTypes;
/* harmony export (immutable) */ __webpack_exports__["getUserConfiguredParams"] = getUserConfiguredParams;
/* harmony export (immutable) */ __webpack_exports__["getOrigin"] = getOrigin;
/* harmony export (immutable) */ __webpack_exports__["getDNT"] = getDNT;
/* harmony export (immutable) */ __webpack_exports__["isAdUnitCodeMatchingSlot"] = isAdUnitCodeMatchingSlot;
/* harmony export (immutable) */ __webpack_exports__["isSlotMatchingAdUnitCode"] = isSlotMatchingAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["getGptSlotInfoForAdUnitCode"] = getGptSlotInfoForAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["unsupportedBidderMessage"] = unsupportedBidderMessage;
/* harmony export (immutable) */ __webpack_exports__["isInteger"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["convertCamelToUnderscore"] = convertCamelToUnderscore;
/* harmony export (immutable) */ __webpack_exports__["cleanObj"] = cleanObj;
/* harmony export (immutable) */ __webpack_exports__["pick"] = pick;
/* harmony export (immutable) */ __webpack_exports__["transformBidderParamKeywords"] = transformBidderParamKeywords;
/* harmony export (immutable) */ __webpack_exports__["convertTypes"] = convertTypes;
/* harmony export (immutable) */ __webpack_exports__["isArrayOfNums"] = isArrayOfNums;
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;
/* harmony export (immutable) */ __webpack_exports__["chunk"] = chunk;
/* harmony export (immutable) */ __webpack_exports__["getMinValueFromArray"] = getMinValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["getMaxValueFromArray"] = getMaxValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["compareOn"] = compareOn;
/* harmony export (immutable) */ __webpack_exports__["parseQS"] = parseQS;
/* harmony export (immutable) */ __webpack_exports__["formatQS"] = formatQS;
/* harmony export (immutable) */ __webpack_exports__["parseUrl"] = parseUrl;
/* harmony export (immutable) */ __webpack_exports__["buildUrl"] = buildUrl;
/* harmony export (immutable) */ __webpack_exports__["deepEqual"] = deepEqual;
/* harmony export (immutable) */ __webpack_exports__["mergeDeep"] = mergeDeep;
/* harmony export (immutable) */ __webpack_exports__["cyrb53Hash"] = cyrb53Hash;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dlv_index_js__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepAccess", function() { return __WEBPACK_IMPORTED_MODULE_4_dlv_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dset__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepSetValue", function() { return __WEBPACK_IMPORTED_MODULE_5_dset__["a"]; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */





var CONSTANTS = __webpack_require__(5);



var tArr = 'Array';
var tStr = 'String';
var tFn = 'Function';
var tNumb = 'Number';
var tObject = 'Object';
var tBoolean = 'Boolean';
var toString = Object.prototype.toString;
var consoleExists = Boolean(window.console);
var consoleLogExists = Boolean(consoleExists && window.console.log);
var consoleInfoExists = Boolean(consoleExists && window.console.info);
var consoleWarnExists = Boolean(consoleExists && window.console.warn);
var consoleErrorExists = Boolean(consoleExists && window.console.error);

var emitEvent = function () {
  // lazy load events to avoid circular import
  var ev;
  return function () {
    if (ev == null) {
      ev = __webpack_require__(10);
    }

    return ev.emit.apply(ev, arguments);
  };
}(); // this allows stubbing of utility functions that are used internally by other utility functions


var internal = {
  checkCookieSupport: checkCookieSupport,
  createTrackPixelIframeHtml: createTrackPixelIframeHtml,
  getWindowSelf: getWindowSelf,
  getWindowTop: getWindowTop,
  getWindowLocation: getWindowLocation,
  insertUserSyncIframe: insertUserSyncIframe,
  insertElement: insertElement,
  isFn: isFn,
  triggerPixel: triggerPixel,
  logError: logError,
  logWarn: logWarn,
  logMessage: logMessage,
  logInfo: logInfo,
  parseQS: parseQS,
  formatQS: formatQS,
  deepEqual: deepEqual
};
var prebidInternal = {};
/**
 * Returns object that is used as internal prebid namespace
 */

function getPrebidInternal() {
  return prebidInternal;
}
var uniqueRef = {};
var bind = function (a, b) {
  return b;
}.bind(null, 1, uniqueRef)() === uniqueRef ? Function.prototype.bind : function (bind) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(bind, args.concat(Array.prototype.slice.call(arguments)));
  };
};
/* utility method to get incremental integer starting from 1 */

var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}(); // generate a random string (to be used as a dynamic JSONP callback)


function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */

function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}
/**
 * Returns random data using the Crypto API if available and Math.random if not
 * Method is from https://gist.github.com/jed/982883 like generateUUID, direct link https://gist.github.com/jed/982883#gistcomment-45104
 */

function _getRandomData() {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint8Array(1))[0] % 16;
  } else {
    return Math.random() * 16;
  }
}

function getBidIdParameter(key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
}
function tryAppendQueryString(existingUrl, key, value) {
  if (value) {
    return existingUrl + key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
} // parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}
// aliases to formatQS

function parseQueryStringParameters(queryObj) {
  var result = '';

  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  result = result.replace(/&$/, '');
  return result;
} // transform an AdServer targeting bids into a query string to send to the adserver

function transformAdServerTargetingObj(targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map(function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(getValue(targeting, key)));
    }).join('&');
  } else {
    return '';
  }
}
/**
 * Read an adUnit object and return the sizes used in an [[728, 90]] format (even if they had [728, 90] defined)
 * Preference is given to the `adUnit.mediaTypes.banner.sizes` object over the `adUnit.sizes`
 * @param {object} adUnit one adUnit object from the normal list of adUnits
 * @returns {Array.<number[]>} array of arrays containing numeric sizes
 */

function getAdUnitSizes(adUnit) {
  if (!adUnit) {
    return;
  }

  var sizes = [];

  if (adUnit.mediaTypes && adUnit.mediaTypes.banner && Array.isArray(adUnit.mediaTypes.banner.sizes)) {
    var bannerSizes = adUnit.mediaTypes.banner.sizes;

    if (Array.isArray(bannerSizes[0])) {
      sizes = bannerSizes;
    } else {
      sizes.push(bannerSizes);
    } // TODO - remove this else block when we're ready to deprecate adUnit.sizes for bidders

  } else if (Array.isArray(adUnit.sizes)) {
    if (Array.isArray(adUnit.sizes[0])) {
      sizes = adUnit.sizes;
    } else {
      sizes.push(adUnit.sizes);
    }
  }

  return sizes;
}
/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {(Array.<number[]>|Array.<number>)} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {Array.<string>}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */

function parseSizesInput(sizeObj) {
  var parsedSizes = []; // if a string for now we can assume it is a single size, like "300x250"

  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(','); // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line

    var sizeRegex = /^(\d)+x(\d)+$/i;

    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if (_typeof(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length; // don't process empty array

    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
} // Parse a GPT style single size array, (i.e [300, 250])
// into an AppNexus style string, (i.e. 300x250)

function parseGPTSingleSizeArray(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return singleSize[0] + 'x' + singleSize[1];
  }
} // Parse a GPT style single size array, (i.e [300, 250])
// into OpenRTB-compatible (imp.banner.w/h, imp.banner.format.w/h, imp.video.w/h) object(i.e. {w:300, h:250})

function parseGPTSingleSizeArrayToRtbSize(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return {
      w: singleSize[0],
      h: singleSize[1]
    };
  }
}

function isValidGPTSingleSize(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  return isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1]);
}

function getWindowTop() {
  return window.top;
}
function getWindowSelf() {
  return window.self;
}
function getWindowLocation() {
  return window.location;
}
/**
 * Wrappers to console.(log | info | warn | error). Takes N arguments, the same as the native methods
 */

function logMessage() {
  if (debugTurnedOn() && consoleLogExists) {
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }

  emitEvent(CONSTANTS.EVENTS.AUCTION_DEBUG, {
    type: 'WARNING',
    arguments: arguments
  });
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }

  emitEvent(CONSTANTS.EVENTS.AUCTION_DEBUG, {
    type: 'ERROR',
    arguments: arguments
  });
}
function prefixLog(prefix) {
  function decorate(fn) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(void 0, [prefix].concat(args));
    };
  }

  return {
    logError: decorate(logError),
    logWarn: decorate(logWarn),
    logMessage: decorate(logMessage),
    logInfo: decorate(logInfo)
  };
}

function decorateLog(args, prefix) {
  args = [].slice.call(args);
  var bidder = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getCurrentBidder();
  prefix && args.unshift(prefix);

  if (bidder) {
    args.unshift(label('#aaa'));
  }

  args.unshift(label('#3b88c3'));
  args.unshift('%cPrebid' + (bidder ? "%c".concat(bidder) : ''));
  return args;

  function label(color) {
    return "display: inline-block; color: #fff; background: ".concat(color, "; padding: 1px 4px; border-radius: 3px;");
  }
}

function hasConsoleLogger() {
  return consoleLogExists;
}
function debugTurnedOn() {
  return !!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debug');
}
function createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
}
/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */

function getParameterByName(name) {
  return parseQS(getWindowLocation().search)[name] || '';
}
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */

function isA(object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
}
function isFn(object) {
  return isA(object, tFn);
}
function isStr(object) {
  return isA(object, tStr);
}
function isArray(object) {
  return isA(object, tArr);
}
function isNumber(object) {
  return isA(object, tNumb);
}
function isPlainObject(object) {
  return isA(object, tObject);
}
function isBoolean(object) {
  return isA(object, tBoolean);
}
/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */

function isEmpty(object) {
  if (!object) return true;

  if (isArray(object) || isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
}
/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */

function isEmptyStr(str) {
  return isStr(str) && (!str || str.length === 0);
}
/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */

function _each(object, fn) {
  if (isEmpty(object)) return;
  if (isFn(object.forEach)) return object.forEach(fn, this);
  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
}
function contains(a, obj) {
  if (isEmpty(a)) {
    return false;
  }

  if (isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;

  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
}
/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */

function _map(object, callback) {
  if (isEmpty(object)) return [];
  if (isFn(object.map)) return object.map(callback);
  var output = [];

  _each(object, function (value, key) {
    output.push(callback(value, key, object));
  });

  return output;
}
function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
}
;
/*
* Inserts an element(elm) as targets child, by default as first child
* @param {HTMLElement} elm
* @param {HTMLElement} [doc]
* @param {HTMLElement} [target]
* @param {Boolean} [asLastChildChild]
* @return {HTMLElement}
*/

function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}
/**
 * Returns a promise that completes when the given element triggers a 'load' or 'error' DOM event, or when
 * `timeout` milliseconds have elapsed.
 *
 * @param {HTMLElement} element
 * @param {Number} [timeout]
 * @returns {Promise}
 */

function waitForElementToLoad(element, timeout) {
  var timer = null;
  return new Promise(function (resolve) {
    var onLoad = function onLoad() {
      element.removeEventListener('load', onLoad);
      element.removeEventListener('error', onLoad);

      if (timer != null) {
        window.clearTimeout(timer);
      }

      resolve();
    };

    element.addEventListener('load', onLoad);
    element.addEventListener('error', onLoad);

    if (timeout != null) {
      timer = window.setTimeout(onLoad, timeout);
    }
  });
}
/**
 * Inserts an image pixel with the specified `url` for cookie sync
 * @param {string} url URL string of the image pixel to load
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 * @param  {Number} [timeout] an optional timeout in milliseconds for the image to load before calling `done`
 */

function triggerPixel(url, done, timeout) {
  var img = new Image();

  if (done && internal.isFn(done)) {
    waitForElementToLoad(img, timeout).then(done);
  }

  img.src = url;
}
function callBurl(_ref) {
  var source = _ref.source,
      burl = _ref.burl;

  if (source === CONSTANTS.S2S.SRC && burl) {
    internal.triggerPixel(burl);
  }
}
/**
 * Inserts an empty iframe with the specified `html`, primarily used for tracking purposes
 * (though could be for other purposes)
 * @param {string} htmlCode snippet of HTML code used for tracking purposes
 */

function insertHtmlIntoIframe(htmlCode) {
  if (!htmlCode) {
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.id = getUniqueIdentifierStr();
  iframe.width = 0;
  iframe.height = 0;
  iframe.hspace = '0';
  iframe.vspace = '0';
  iframe.marginWidth = '0';
  iframe.marginHeight = '0';
  iframe.style.display = 'none';
  iframe.style.height = '0px';
  iframe.style.width = '0px';
  iframe.scrolling = 'no';
  iframe.frameBorder = '0';
  iframe.allowtransparency = 'true';
  internal.insertElement(iframe, document, 'body');
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(htmlCode);
  iframe.contentWindow.document.close();
}
/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 * @param  {Number} [timeout] an optional timeout in milliseconds for the iframe to load before calling `done`
 */

function insertUserSyncIframe(url, done, timeout) {
  var iframeHtml = internal.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    waitForElementToLoad(iframe, timeout).then(done);
  }

  internal.insertElement(iframe, document, 'html', true);
}
/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */

function createTrackPixelHtml(url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
}
;
/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}
function getValueString(param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }

  if (isStr(val)) {
    return val;
  }

  if (isNumber(val)) {
    return val.toString();
  }

  internal.logWarn('Unsuported type for param: ' + param + ' required type: String');
}
function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}
function flatten(a, b) {
  return a.concat(b);
}
function getBidRequest(id, bidderRequests) {
  if (!id) {
    return;
  }

  var bidRequest;
  bidderRequests.some(function (bidderRequest) {
    var result = __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(bidderRequest.bids, function (bid) {
      return ['bidId', 'adId', 'bid_id'].some(function (type) {
        return bid[type] === id;
      });
    });

    if (result) {
      bidRequest = result;
    }

    return result;
  });
  return bidRequest;
}
function getKeys(obj) {
  return Object.keys(obj);
}
function getValue(obj, key) {
  return obj[key];
}
/**
 * Get the key of an object for a given value
 */

function getKeyByValue(obj, value) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
}
function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pbjs.adUnits;
  // this could memoize adUnits
  return adUnits.map(function (unit) {
    return unit.bids.map(function (bid) {
      return bid.bidder;
    }).reduce(flatten, []);
  }).reduce(flatten).filter(uniques);
}
function isGptPubadsDefined() {
  if (window.googletag && isFn(window.googletag.pubads) && isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
}
function isApnGetTagDefined() {
  if (window.apntag && isFn(window.apntag.getTag)) {
    return true;
  }
} // This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond

var getHighestCpm = getHighestCpmCallback('timeToRespond', function (previous, current) {
  return previous > current;
}); // This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448

var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous > current;
}); // This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2539

var getLatestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous < current;
});

function getHighestCpmCallback(useTieBreakerProperty, tieBreakerCallback) {
  return function (previous, current) {
    if (previous.cpm === current.cpm) {
      return tieBreakerCallback(previous[useTieBreakerProperty], current[useTieBreakerProperty]) ? current : previous;
    }

    return previous.cpm < current.cpm ? current : previous;
  };
}
/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */


function shuffle(array) {
  var counter = array.length; // while there are elements in the array

  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter); // decrease counter by 1

    counter--; // and swap the last element with it

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
function adUnitsFilter(filter, bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default()(filter, bid && bid.adUnitCode);
}
function deepClone(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_just_clone___default()(obj);
}
function inIframe() {
  try {
    return internal.getWindowSelf() !== internal.getWindowTop();
  } catch (e) {
    return true;
  }
}
function isSafariBrowser() {
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
}
function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}
function replaceClickThrough(str, clicktag) {
  if (!str || !clicktag || typeof clicktag !== 'string') return;
  return str.replace(/\${CLICKTHROUGH}/g, clicktag);
}
function timestamp() {
  return new Date().getTime();
}
/**
 * The returned value represents the time elapsed since the time origin. @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 * @returns {number}
 */

function getPerformanceNow() {
  return window.performance && window.performance.now && window.performance.now() || 0;
}
/**
 * When the deviceAccess flag config option is false, no cookies should be read or set
 * @returns {boolean}
 */

function hasDeviceAccess() {
  return __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('deviceAccess') !== false;
}
/**
 * @returns {(boolean|undefined)}
 */

function checkCookieSupport() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
}
/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */

function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error("numRequiredCalls must be a positive number. Got ".concat(numRequiredCalls));
  }

  var numCalls = 0;
  return function () {
    numCalls++;

    if (numCalls === numRequiredCalls) {
      func.apply(this, arguments);
    }
  };
}
/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {Object} {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {Object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {Object} An object containing all the specified values that are defined
 */

function getDefinedParams(object, params) {
  return params.filter(function (param) {
    return object[param];
  }).reduce(function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }, {});
}
/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */

function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream', 'adpod'];
  var types = Object.keys(mediaTypes);

  if (!types.every(function (type) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default()(SUPPORTED_MEDIA_TYPES, type);
  })) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default()(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
  }

  return true;
}
/**
 * Returns user configured bidder params from adunit
 * @param {Object} adUnits
 * @param {string} adUnitCode code
 * @param {string} bidder code
 * @return {Array} user configured param for the given bidder adunit configuration
 */

function getUserConfiguredParams(adUnits, adUnitCode, bidder) {
  return adUnits.filter(function (adUnit) {
    return adUnit.code === adUnitCode;
  }).map(function (adUnit) {
    return adUnit.bids;
  }).reduce(flatten, []).filter(function (bidderData) {
    return bidderData.bidder === bidder;
  }).map(function (bidderData) {
    return bidderData.params || {};
  });
}
/**
 * Returns the origin
 */

function getOrigin() {
  // IE10 does not have this property. https://gist.github.com/hbogs/7908703
  if (!window.location.origin) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  } else {
    return window.location.origin;
  }
}
/**
 * Returns Do Not Track state
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1' || navigator.doNotTrack === 'yes';
}

var compareCodeAndSlot = function compareCodeAndSlot(slot, adUnitCode) {
  return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
};
/**
 * Returns filter function to match adUnitCode in slot
 * @param {Object} slot GoogleTag slot
 * @return {function} filter function
 */


function isAdUnitCodeMatchingSlot(slot) {
  return function (adUnitCode) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Returns filter function to match adUnitCode in slot
 * @param {string} adUnitCode AdUnit code
 * @return {function} filter function
 */

function isSlotMatchingAdUnitCode(adUnitCode) {
  return function (slot) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * @summary Uses the adUnit's code in order to find a matching gptSlot on the page
 */

function getGptSlotInfoForAdUnitCode(adUnitCode) {
  var matchingSlot;

  if (isGptPubadsDefined()) {
    // find the first matching gpt slot on the page
    matchingSlot = __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(window.googletag.pubads().getSlots(), isSlotMatchingAdUnitCode(adUnitCode));
  }

  if (matchingSlot) {
    return {
      gptSlot: matchingSlot.getAdUnitPath(),
      divId: matchingSlot.getSlotElementId()
    };
  }

  return {};
}
;
/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {string} bidder bidder code that is not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */

function unsupportedBidderMessage(adUnit, bidder) {
  var mediaType = Object.keys(adUnit.mediaTypes || {
    'banner': 'banner'
  }).join(', ');
  return "\n    ".concat(adUnit.code, " is a ").concat(mediaType, " ad unit\n    containing bidders that don't support ").concat(mediaType, ": ").concat(bidder, ".\n    This bidder won't fetch demand.\n  ");
}
/**
 * Checks input is integer or not
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value
 */

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
}
/**
 * Converts a string value in camel-case to underscore eg 'placementId' becomes 'placement_id'
 * @param {string} value string value to convert
 */

function convertCamelToUnderscore(value) {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
    return '_' + y.toLowerCase();
  }).replace(/^_/, '');
}
/**
 * Returns a new object with undefined properties removed from given object
 * @param obj the object to clean
 */

function cleanObj(obj) {
  return Object.keys(obj).reduce(function (newObj, key) {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
}
/**
 * Create a new object with selected properties.  Also allows property renaming and transform functions.
 * @param obj the original object
 * @param properties An array of desired properties
 */

function pick(obj, properties) {
  if (_typeof(obj) !== 'object') {
    return {};
  }

  return properties.reduce(function (newObj, prop, i) {
    if (typeof prop === 'function') {
      return newObj;
    }

    var newProp = prop;
    var match = prop.match(/^(.+?)\sas\s(.+?)$/i);

    if (match) {
      prop = match[1];
      newProp = match[2];
    }

    var value = obj[prop];

    if (typeof properties[i + 1] === 'function') {
      value = properties[i + 1](value, newObj);
    }

    if (typeof value !== 'undefined') {
      newObj[newProp] = value;
    }

    return newObj;
  }, {});
}
/**
 * Converts an object of arrays (either strings or numbers) into an array of objects containing key and value properties
 * normally read from bidder params
 * eg { foo: ['bar', 'baz'], fizz: ['buzz'] }
 * becomes [{ key: 'foo', value: ['bar', 'baz']}, {key: 'fizz', value: ['buzz']}]
 * @param {Object} keywords object of arrays representing keyvalue pairs
 * @param {string} paramName name of parent object (eg 'keywords') containing keyword data, used in error handling
 */

function transformBidderParamKeywords(keywords) {
  var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keywords';
  var arrs = [];

  _each(keywords, function (v, k) {
    if (isArray(v)) {
      var values = [];

      _each(v, function (val) {
        val = getValueString(paramName + '.' + k, val);

        if (val || val === '') {
          values.push(val);
        }
      });

      v = values;
    } else {
      v = getValueString(paramName + '.' + k, v);

      if (isStr(v)) {
        v = [v];
      } else {
        return;
      } // unsuported types - don't send a key

    }

    arrs.push({
      key: k,
      value: v
    });
  });

  return arrs;
}
/**
 * Try to convert a value to a type.
 * If it can't be done, the value will be returned.
 *
 * @param {string} typeToConvert The target type. e.g. "string", "number", etc.
 * @param {*} value The value to be converted into typeToConvert.
 */

function tryConvertType(typeToConvert, value) {
  if (typeToConvert === 'string') {
    return value && value.toString();
  } else if (typeToConvert === 'number') {
    return Number(value);
  } else {
    return value;
  }
}

function convertTypes(types, params) {
  Object.keys(types).forEach(function (key) {
    if (params[key]) {
      if (isFn(types[key])) {
        params[key] = types[key](params[key]);
      } else {
        params[key] = tryConvertType(types[key], params[key]);
      } // don't send invalid values


      if (isNaN(params[key])) {
        delete params.key;
      }
    }
  });
  return params;
}
function isArrayOfNums(val, size) {
  return isArray(val) && (size ? val.length === size : true) && val.every(function (v) {
    return isInteger(v);
  });
}
/**
 * Creates an array of n length and fills each item with the given value
 */

function fill(value, length) {
  var newArray = [];

  for (var i = 0; i < length; i++) {
    var valueToPush = isPlainObject(value) ? deepClone(value) : value;
    newArray.push(valueToPush);
  }

  return newArray;
}
/**
 * http://npm.im/chunk
 * Returns an array with *size* chunks from given array
 *
 * Example:
 * ['a', 'b', 'c', 'd', 'e'] chunked by 2 =>
 * [['a', 'b'], ['c', 'd'], ['e']]
 */

function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    var start = i * size;
    var end = start + size;
    newArray.push(array.slice(start, end));
  }

  return newArray;
}
function getMinValueFromArray(array) {
  return Math.min.apply(Math, _toConsumableArray(array));
}
function getMaxValueFromArray(array) {
  return Math.max.apply(Math, _toConsumableArray(array));
}
/**
 * This function will create compare function to sort on object property
 * @param {string} property
 * @returns {function} compare function to be used in sorting
 */

function compareOn(property) {
  return function compare(a, b) {
    if (a[property] < b[property]) {
      return 1;
    }

    if (a[property] > b[property]) {
      return -1;
    }

    return 0;
  };
}
function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce(function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }

    return acc;
  }, {});
}
function formatQS(query) {
  return Object.keys(query).map(function (k) {
    return Array.isArray(query[k]) ? query[k].map(function (v) {
      return "".concat(k, "[]=").concat(v);
    }).join('&') : "".concat(k, "=").concat(query[k]);
  }).join('&');
}
function parseUrl(url, options) {
  var parsed = document.createElement('a');

  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  } // in window.location 'search' is string, not object


  var qsAsString = options && 'decodeSearchAsString' in options && options.decodeSearchAsString;
  return {
    href: parsed.href,
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: qsAsString ? parsed.search : internal.parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}
function buildUrl(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ":".concat(obj.port) : '')) + (obj.pathname || '') + (obj.search ? "?".concat(internal.formatQS(obj.search || '')) : '') + (obj.hash ? "#".concat(obj.hash) : '');
}
/**
 * This function deeply compares two objects checking for their equivalence.
 * @param {Object} obj1
 * @param {Object} obj2
 * @param checkTypes {boolean} if set, two objects with identical properties but different constructors will *not*
 * be considered equivalent.
 * @returns {boolean}
 */

function deepEqual(obj1, obj2) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$checkTypes = _ref2.checkTypes,
      checkTypes = _ref2$checkTypes === void 0 ? false : _ref2$checkTypes;

  if (obj1 === obj2) return true;else if (_typeof(obj1) === 'object' && obj1 !== null && _typeof(obj2) === 'object' && obj2 !== null && (!checkTypes || obj1.constructor === obj2.constructor)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (var prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        if (!deepEqual(obj1[prop], obj2[prop], {
          checkTypes: checkTypes
        })) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}
function mergeDeep(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isPlainObject(target) && isPlainObject(source)) {
    var _loop = function _loop(key) {
      if (isPlainObject(source[key])) {
        if (!target[key]) _extends(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else if (isArray(source[key])) {
        if (!target[key]) {
          _extends(target, _defineProperty({}, key, _toConsumableArray(source[key])));
        } else if (isArray(target[key])) {
          source[key].forEach(function (obj) {
            var addItFlag = 1;

            for (var i = 0; i < target[key].length; i++) {
              if (deepEqual(target[key][i], obj)) {
                addItFlag = 0;
                break;
              }
            }

            if (addItFlag) {
              target[key].push(obj);
            }
          });
        }
      } else {
        _extends(target, _defineProperty({}, key, source[key]));
      }
    };

    for (var key in source) {
      _loop(key);
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}
/**
 * returns a hash of a string using a fast algorithm
 * source: https://stackoverflow.com/a/52171480/845390
 * @param str
 * @param seed (optional)
 * @returns {string}
 */

function cyrb53Hash(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // IE doesn't support imul
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill
  var imul = function imul(opA, opB) {
    if (isFn(Math.imul)) {
      return Math.imul(opA, opB);
    } else {
      opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
      // floating points give us 53 bits of precision to work with plus 1 sign bit
      // automatically handled for our convienence:
      // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
      //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

      var result = (opA & 0x003fffff) * opB; // 2. We can remove an integer coersion from the statement above because:
      //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
      //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/

      if (opA & 0xffc00000) result += (opA & 0xffc00000) * opB | 0;
      return result | 0;
    }
  };

  var h1 = 0xdeadbeef ^ seed;
  var h2 = 0x41c6ce57 ^ seed;

  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = imul(h1 ^ ch, 2654435761);
    h2 = imul(h2 ^ ch, 1597334677);
  }

  h1 = imul(h1 ^ h1 >>> 16, 2246822507) ^ imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = imul(h2 ^ h2 >>> 16, 2246822507) ^ imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString();
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (immutable) */ __webpack_exports__["registerBidder"] = registerBidder;
/* harmony export (immutable) */ __webpack_exports__["newBidder"] = newBidder;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processBidderRequests", function() { return processBidderRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSyncInner", function() { return registerSyncInner; });
/* harmony export (immutable) */ __webpack_exports__["preloadBidderMappingFile"] = preloadBidderMappingFile;
/* harmony export (immutable) */ __webpack_exports__["getIabSubCategory"] = getIabSubCategory;
/* harmony export (immutable) */ __webpack_exports__["isValid"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidfactory_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userSync_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__native_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storageManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__ = __webpack_require__(18);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















var storage = Object(__WEBPACK_IMPORTED_MODULE_14__storageManager_js__["a" /* getCoreStorageManager */])('bidderFactory');
/**
 * This file aims to support Adapters during the Prebid 0.x -> 1.x transition.
 *
 * Prebid 1.x and Prebid 0.x will be in separate branches--perhaps for a long time.
 * This function defines an API for adapter construction which is compatible with both versions.
 * Adapters which use it can maintain their code in master, and only this file will need to change
 * in the 1.x branch.
 *
 * Typical usage looks something like:
 *
 * const adapter = registerBidder({
 *   code: 'myBidderCode',
 *   aliases: ['alias1', 'alias2'],
 *   supportedMediaTypes: ['video', 'native'],
 *   isBidRequestValid: function(paramsObject) { return true/false },
 *   buildRequests: function(bidRequests, bidderRequest) { return some ServerRequest(s) },
 *   interpretResponse: function(oneServerResponse) { return some Bids, or throw an error. }
 * });
 *
 * @see BidderSpec for the full API and more thorough descriptions.
 *
 */

/**
 * @typedef {object} BidderSpec An object containing the adapter-specific functions needed to
 * make a Bidder.
 *
 * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
 *   one as is used in the call to registerBidAdapter
 * @property {string[]} [aliases] A list of aliases which should also resolve to this bidder.
 * @property {MediaType[]} [supportedMediaTypes]: A list of Media Types which the adapter supports.
 * @property {function(object): boolean} isBidRequestValid Determines whether or not the given bid has all the params
 *   needed to make a valid request.
 * @property {function(BidRequest[], bidderRequest): ServerRequest|ServerRequest[]} buildRequests Build the request to the Server
 *   which requests Bids for the given array of Requests. Each BidRequest in the argument array is guaranteed to have
 *   passed the isBidRequestValid() test.
 * @property {function(ServerResponse, BidRequest): Bid[]} interpretResponse Given a successful response from the Server,
 *   interpret it and return the Bid objects. This function will be run inside a try/catch.
 *   If it throws any errors, your bids will be discarded.
 * @property {function(SyncOptions, ServerResponse[]): UserSync[]} [getUserSyncs] Given an array of all the responses
 *   from the server, determine which user syncs should occur. The argument array will contain every element
 *   which has been sent through to interpretResponse. The order of syncs in this array matters. The most
 *   important ones should come first, since publishers may limit how many are dropped on their page.
 * @property {function(object): object} transformBidParams Updates bid params before creating bid request
 }}
 */

/**
 * @typedef {object} BidRequest
 *
 * @property {string} bidId A string which uniquely identifies this BidRequest in the current Auction.
 * @property {object} params Any bidder-specific params which the publisher used in their bid request.
 */

/**
 * @typedef {object} ServerRequest
 *
 * @property {('GET'|'POST')} method The type of request which this is.
 * @property {string} url The endpoint for the request. For example, "//bids.example.com".
 * @property {string|object} data Data to be sent in the request.
 * @property {object} options Content-Type set in the header of the bid request, overrides default 'text/plain'.
 *   If this is a GET request, they'll become query params. If it's a POST request, they'll be added to the body.
 *   Strings will be added as-is. Objects will be unpacked into query params based on key/value mappings, or
 *   JSON-serialized into the Request body.
 */

/**
 * @typedef {object} ServerResponse
 *
 * @property {*} body The response body. If this is legal JSON, then it will be parsed. Otherwise it'll be a
 *   string with the body's content.
 * @property {{get: function(string): string} headers The response headers.
 *   Call this like `ServerResponse.headers.get("Content-Type")`
 */

/**
 * @typedef {object} Bid
 *
 * @property {string} requestId The specific BidRequest which this bid is aimed at.
 *   This should match the BidRequest.bidId which this Bid targets.
 * @property {string} ad A URL which can be used to load this ad, if it's chosen by the publisher.
 * @property {string} currency The currency code for the cpm value
 * @property {number} cpm The bid price, in US cents per thousand impressions.
 * @property {number} ttl Time-to-live - how long (in seconds) Prebid can use this bid.
 * @property {boolean} netRevenue Boolean defining whether the bid is Net or Gross.  The default is true (Net).
 * @property {number} height The height of the ad, in pixels.
 * @property {number} width The width of the ad, in pixels.
 *
 * @property {object} [native] Object for storing native creative assets
 * @property {object} [video] Object for storing video response data
 * @property {object} [meta] Object for storing bid meta data
 * @property {string} [meta.primaryCatId] The IAB primary category ID
 * @property [Renderer] renderer A Renderer which can be used as a default for this bid,
 *   if the publisher doesn't override it. This is only relevant for Outstream Video bids.
 */

/**
 * @typedef {Object} SyncOptions
 *
 * An object containing information about usersyncs which the adapter should obey.
 *
 * @property {boolean} iframeEnabled True if iframe usersyncs are allowed, and false otherwise
 * @property {boolean} pixelEnabled True if image usersyncs are allowed, and false otherwise
 */

/**
 * TODO: Move this to the UserSync module after that PR is merged.
 *
 * @typedef {object} UserSync
 *
 * @property {('image'|'iframe')} type The type of user sync to be done.
 * @property {string} url The URL which makes the sync happen.
 */
// common params for all mediaTypes

var COMMON_BID_RESPONSE_KEYS = ['cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];
var DEFAULT_REFRESHIN_DAYS = 1;
/**
 * Register a bidder with prebid, using the given spec.
 *
 * If possible, Adapter modules should use this function instead of adapterManager.registerBidAdapter().
 *
 * @param {BidderSpec} spec An object containing the bare-bones functions we need to make a Bidder.
 */

function registerBidder(spec) {
  var mediaTypes = Array.isArray(spec.supportedMediaTypes) ? {
    supportedMediaTypes: spec.supportedMediaTypes
  } : undefined;

  function putBidder(spec) {
    var bidder = newBidder(spec);
    __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].registerBidAdapter(bidder, spec.code, mediaTypes);
  }

  putBidder(spec);

  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach(function (alias) {
      var aliasCode = alias;
      var gvlid;
      var skipPbsAliasing;

      if (Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["isPlainObject"])(alias)) {
        aliasCode = alias.code;
        gvlid = alias.gvlid;
        skipPbsAliasing = alias.skipPbsAliasing;
      }

      __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[aliasCode] = spec.code;
      putBidder(_extends({}, spec, {
        code: aliasCode,
        gvlid: gvlid,
        skipPbsAliasing: skipPbsAliasing
      }));
    });
  }
}
/**
 * Make a new bidder from the given spec. This is exported mainly for testing.
 * Adapters will probably find it more convenient to use registerBidder instead.
 *
 * @param {BidderSpec} spec
 */

function newBidder(spec) {
  return _extends(new __WEBPACK_IMPORTED_MODULE_0__adapter_js__["a" /* default */](spec.code), {
    getSpec: function getSpec() {
      return Object.freeze(spec);
    },
    registerSyncs: registerSyncs,
    callBids: function callBids(bidderRequest, addBidResponse, done, ajax, onTimelyResponse, configEnabledCallback) {
      if (!Array.isArray(bidderRequest.bids)) {
        return;
      }

      var adUnitCodesHandled = {};

      function addBidWithCode(adUnitCode, bid) {
        adUnitCodesHandled[adUnitCode] = true;

        if (isValid(adUnitCode, bid)) {
          addBidResponse(adUnitCode, bid);
        }
      } // After all the responses have come back, call done() and
      // register any required usersync pixels.


      var responses = [];

      function afterAllResponses() {
        done();
        __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].runWithBidder(spec.code, function () {
          __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_DONE, bidderRequest);
          registerSyncs(responses, bidderRequest.gdprConsent, bidderRequest.uspConsent);
        });
      }

      var validBidRequests = bidderRequest.bids.filter(filterAndWarn);

      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }

      var bidRequestMap = {};
      validBidRequests.forEach(function (bid) {
        bidRequestMap[bid.bidId] = bid; // Delete this once we are 1.0

        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      });
      processBidderRequests(spec, validBidRequests, bidderRequest, ajax, configEnabledCallback, {
        onRequest: function onRequest(requestObject) {
          return __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BEFORE_BIDDER_HTTP, bidderRequest, requestObject);
        },
        onResponse: function onResponse(resp) {
          onTimelyResponse(spec.code);
          responses.push(resp);
        },
        // If the server responds with an error, there's not much we can do beside logging.
        onError: function onError(errorMessage, error) {
          onTimelyResponse(spec.code);
          __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].callBidderError(spec.code, error, bidderRequest);
          __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_ERROR, {
            error: error,
            bidderRequest: bidderRequest
          });
          Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Server call for ".concat(spec.code, " failed: ").concat(errorMessage, " ").concat(error.status, ". Continuing without bids."));
        },
        onBid: function onBid(bid) {
          var bidRequest = bidRequestMap[bid.requestId];

          if (bidRequest) {
            // creating a copy of original values as cpm and currency are modified later
            bid.originalCpm = bid.cpm;
            bid.originalCurrency = bid.currency;
            bid.meta = bid.meta || _extends({}, bid[bidRequest.bidder]);

            var prebidBid = _extends(Object(__WEBPACK_IMPORTED_MODULE_3__bidfactory_js__["a" /* createBid */])(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.STATUS.GOOD, bidRequest), bid);

            addBidWithCode(bidRequest.adUnitCode, prebidBid);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Bidder ".concat(spec.code, " made bid for unknown request ID: ").concat(bid.requestId, ". Ignoring."));
          }
        },
        onCompletion: afterAllResponses
      });
    }
  });

  function registerSyncs(responses, gdprConsent, uspConsent) {
    registerSyncInner(spec, responses, gdprConsent, uspConsent);
  }

  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Invalid bid sent to bidder ".concat(spec.code, ": ").concat(JSON.stringify(bid)));
      return false;
    }

    return true;
  }
}
/**
 * Run a set of bid requests - that entails converting them to HTTP requests, sending
 * them over the network, and parsing the responses.
 *
 * @param spec bid adapter spec
 * @param bids bid requests to run
 * @param bidderRequest the bid request object that `bids` is connected to
 * @param ajax ajax method to use
 * @param wrapCallback {function(callback)} a function used to wrap every callback (for the purpose of `config.currentBidder`)
 * @param onRequest {function({})} invoked once for each HTTP request built by the adapter - with the raw request
 * @param onResponse {function({})} invoked once on each successful HTTP response - with the raw response
 * @param onError {function(String, {})} invoked once for each HTTP error - with status code and response
 * @param onBid {function({})} invoked once for each bid in the response - with the bid as returned by interpretResponse
 * @param onCompletion {function()} invoked once when all bid requests have been processed
 */

var processBidderRequests = Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["b" /* hook */])('sync', function (spec, bids, bidderRequest, ajax, wrapCallback, _ref) {
  var onRequest = _ref.onRequest,
      onResponse = _ref.onResponse,
      onError = _ref.onError,
      onBid = _ref.onBid,
      onCompletion = _ref.onCompletion;
  var requests = spec.buildRequests(bids, bidderRequest);

  if (!requests || requests.length === 0) {
    onCompletion();
    return;
  }

  if (!Array.isArray(requests)) {
    requests = [requests];
  }

  var requestDone = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["delayExecution"])(onCompletion, requests.length);
  requests.forEach(function (request) {
    // If the server responds successfully, use the adapter code to unpack the Bids from it.
    // If the adapter code fails, no bids should be added. After all the bids have been added,
    // make sure to call the `requestDone` function so that we're one step closer to calling onCompletion().
    var onSuccess = wrapCallback(function (response, responseObj) {
      try {
        response = JSON.parse(response);
      } catch (e) {
        /* response might not be JSON... that's ok. */
      } // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.


      response = {
        body: response,
        headers: headerParser(responseObj)
      };
      onResponse(response);
      var bids;

      try {
        bids = spec.interpretResponse(response, request);
      } catch (err) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Bidder ".concat(spec.code, " failed to interpret the server's response. Continuing without bids"), null, err);
        requestDone();
        return;
      }

      if (bids) {
        if (Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["isArray"])(bids)) {
          bids.forEach(onBid);
        } else {
          onBid(bids);
        }
      }

      requestDone();

      function headerParser(xmlHttpResponse) {
        return {
          get: responseObj.getResponseHeader.bind(responseObj)
        };
      }
    });
    var onFailure = wrapCallback(function (errorMessage, error) {
      onError(errorMessage, error);
      requestDone();
    });
    onRequest(request);

    switch (request.method) {
      case 'GET':
        ajax("".concat(request.url).concat(formatGetParameters(request.data)), {
          success: onSuccess,
          error: onFailure
        }, undefined, _extends({
          method: 'GET',
          withCredentials: true
        }, request.options));
        break;

      case 'POST':
        ajax(request.url, {
          success: onSuccess,
          error: onFailure
        }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), _extends({
          method: 'POST',
          contentType: 'text/plain',
          withCredentials: true
        }, request.options));
        break;

      default:
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Skipping invalid request from ".concat(spec.code, ". Request type ").concat(request.type, " must be GET or POST"));
        requestDone();
    }

    function formatGetParameters(data) {
      if (data) {
        return "?".concat(_typeof(data) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseQueryStringParameters"])(data) : data);
      }

      return '';
    }
  });
}, 'processBidderRequests');
var registerSyncInner = Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["b" /* hook */])('async', function (spec, responses, gdprConsent, uspConsent) {
  var aliasSyncEnabled = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.aliasSyncEnabled');

  if (spec.getUserSyncs && (aliasSyncEnabled || !__WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[spec.code])) {
    var filterConfig = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.filterSettings');
    var syncs = spec.getUserSyncs({
      iframeEnabled: !!(filterConfig && (filterConfig.iframe || filterConfig.all)),
      pixelEnabled: !!(filterConfig && (filterConfig.image || filterConfig.all))
    }, responses, gdprConsent, uspConsent);

    if (syncs) {
      if (!Array.isArray(syncs)) {
        syncs = [syncs];
      }

      syncs.forEach(function (sync) {
        __WEBPACK_IMPORTED_MODULE_4__userSync_js__["a" /* userSync */].registerSync(sync.type, spec.code, sync.url);
      });
    }
  }
}, 'registerSyncs');
function preloadBidderMappingFile(fn, adUnits) {
  if (!__WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
    return fn.call(this, adUnits);
  }

  var adPodBidders = adUnits.filter(function (adUnit) {
    return Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.context') === __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__["a" /* ADPOD */];
  }).map(function (adUnit) {
    return adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_11__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_11__utils_js__["uniques"]);
  adPodBidders.forEach(function (bidder) {
    var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidder);

    if (bidderSpec.getSpec().getMappingFileInfo) {
      var info = bidderSpec.getSpec().getMappingFileInfo();
      var refreshInDays = info.refreshInDays ? info.refreshInDays : DEFAULT_REFRESHIN_DAYS;
      var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getSpec().code;
      var mappingData = storage.getDataFromLocalStorage(key);

      try {
        mappingData = mappingData ? JSON.parse(mappingData) : undefined;

        if (!mappingData || Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])() > mappingData.lastUpdated + refreshInDays * 24 * 60 * 60 * 1000) {
          Object(__WEBPACK_IMPORTED_MODULE_10__ajax_js__["a" /* ajax */])(info.url, {
            success: function success(response) {
              try {
                response = JSON.parse(response);
                var mapping = {
                  lastUpdated: Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])(),
                  mapping: response.mapping
                };
                storage.setDataInLocalStorage(key, JSON.stringify(mapping));
              } catch (error) {
                Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidder, " bidder translation mapping file"));
              }
            },
            error: function error() {
              Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to load ".concat(bidder, " bidder translation file"));
            }
          });
        }
      } catch (error) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidder, " bidder translation mapping file"));
      }
    }
  });
  fn.call(this, adUnits);
}
Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["a" /* getHook */])('checkAdUnitSetup').before(preloadBidderMappingFile);
/**
 * Reads the data stored in localstorage and returns iab subcategory
 * @param {string} bidderCode bidderCode
 * @param {string} category bidders category
 */

function getIabSubCategory(bidderCode, category) {
  var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidderCode);

  if (bidderSpec.getSpec().getMappingFileInfo) {
    var info = bidderSpec.getSpec().getMappingFileInfo();
    var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getBidderCode();
    var data = storage.getDataFromLocalStorage(key);

    if (data) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidderCode, " mapping data stored in local storage"));
      }

      return data.mapping[category] ? data.mapping[category] : null;
    }
  }
} // check that the bid has a width and height set

function validBidSize(adUnitCode, bid) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  if ((bid.width || parseInt(bid.width, 10) === 0) && (bid.height || parseInt(bid.height, 10) === 0)) {
    bid.width = parseInt(bid.width, 10);
    bid.height = parseInt(bid.height, 10);
    return true;
  }

  var bidRequest = index.getBidRequest(bid);
  var mediaTypes = index.getMediaTypes(bid);
  var sizes = bidRequest && bidRequest.sizes || mediaTypes && mediaTypes.banner && mediaTypes.banner.sizes;
  var parsedSizes = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseSizesInput"])(sizes); // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height

  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
        _parsedSizes$0$split2 = _slicedToArray(_parsedSizes$0$split, 2),
        width = _parsedSizes$0$split2[0],
        height = _parsedSizes$0$split2[1];

    bid.width = parseInt(width, 10);
    bid.height = parseInt(height, 10);
    return true;
  }

  return false;
} // Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.


function isValid(adUnitCode, bid) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$index = _ref3.index,
      index = _ref3$index === void 0 ? __WEBPACK_IMPORTED_MODULE_15__auctionManager_js__["a" /* auctionManager */].index : _ref3$index;

  function hasValidKeys() {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every(function (key) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(bidKeys, key) && !__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()([undefined, null], bid[key]);
    });
  }

  function errorMessage(msg) {
    return "Invalid bid from ".concat(bid.bidderCode, ". Ignoring bid: ").concat(msg);
  }

  if (!adUnitCode) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])('No adUnitCode was supplied to addBidResponse.');
    return false;
  }

  if (!bid) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Some adapter tried to add an undefined bid for ".concat(adUnitCode, "."));
    return false;
  }

  if (!hasValidKeys()) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Bidder ".concat(bid.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")));
    return false;
  }

  if (bid.mediaType === 'native' && !Object(__WEBPACK_IMPORTED_MODULE_5__native_js__["h" /* nativeBidIsValid */])(bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage('Native bid missing some required properties.'));
    return false;
  }

  if (bid.mediaType === 'video' && !Object(__WEBPACK_IMPORTED_MODULE_6__video_js__["d" /* isValidVideoBid */])(bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Video bid does not have required vastUrl or renderer property"));
    return false;
  }

  if (bid.mediaType === 'banner' && !validBidSize(adUnitCode, bid, {
    index: index
  })) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Banner bids require a width and height"));
    return false;
  }

  return true;
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * events.js
 */
var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var slice = Array.prototype.slice;
var push = Array.prototype.push; // define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];

var allEvents = utils._map(CONSTANTS.EVENTS, function (v) {
  return v;
});

var idPaths = CONSTANTS.EVENT_ID_PATHS; // keep a record of all events fired

var eventsFired = [];

module.exports = function () {
  var _handlers = {};
  var _public = {};
  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */

  function _dispatch(eventString, args) {
    utils.logMessage('Emitting event for: ' + eventString);
    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || {
      que: []
    };

    var eventKeys = utils._map(event, function (v, k) {
      return k;
    });

    var callbacks = []; // record the event:

    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key,
      elapsedTime: utils.getPerformanceNow()
    });
    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */

    if (key && utils.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }
    /** Push each general callback to the `callbacks` array. */


    push.apply(callbacks, event.que);
    /** call each of the callbacks */

    utils._each(callbacks, function (fn) {
      if (!fn) return;

      try {
        fn.apply(null, args);
      } catch (e) {
        utils.logError('Error executing handler:', 'events.js', e);
      }
    });
  }

  function _checkAvailableEvent(event) {
    return utils.contains(allEvents, event);
  }

  _public.on = function (eventString, handler, id) {
    // check whether available event or not
    if (_checkAvailableEvent(eventString)) {
      var event = _handlers[eventString] || {
        que: []
      };

      if (id) {
        event[id] = event[id] || {
          que: []
        };
        event[id].que.push(handler);
      } else {
        event.que.push(handler);
      }

      _handlers[eventString] = event;
    } else {
      utils.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };

  _public.emit = function (event) {
    var args = slice.call(arguments, 1);

    _dispatch(event, args);
  };

  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];

    if (utils.isEmpty(event) || utils.isEmpty(event.que) && utils.isEmpty(event[id])) {
      return;
    }

    if (id && (utils.isEmpty(event[id]) || utils.isEmpty(event[id].que))) {
      return;
    }

    if (id) {
      utils._each(event[id].que, function (_handler) {
        var que = event[id].que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    } else {
      utils._each(event.que, function (_handler) {
        var que = event.que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    }

    _handlers[eventString] = event;
  };

  _public.get = function () {
    return _handlers;
  };
  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */


  _public.getEvents = function () {
    var arrayCopy = [];

    utils._each(eventsFired, function (value) {
      var newProp = _extends({}, value);

      arrayCopy.push(newProp);
    });

    return arrayCopy;
  };

  return _public;
}();

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(140).charAt;
var InternalStateModule = __webpack_require__(46);
var defineIterator = __webpack_require__(73);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(50);
var addToUnscopables = __webpack_require__(55);
var Iterators = __webpack_require__(40);
var InternalStateModule = __webpack_require__(46);
var defineIterator = __webpack_require__(73);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setSizeConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = getLabels;
/* harmony export (immutable) */ __webpack_exports__["c"] = sizeSupported;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var sizeConfig = [];
/**
 * @typedef {object} SizeConfig
 *
 * @property {string} [mediaQuery] A CSS media query string that will to be interpreted by window.matchMedia.  If the
 *  media query matches then the this config will be active and sizesSupported will filter bid and adUnit sizes.  If
 *  this property is not present then this SizeConfig will only be active if triggered manually by a call to
 *  pbjs.setConfig({labels:['label']) specifying one of the labels present on this SizeConfig.
 * @property {Array<Array>} sizesSupported The sizes to be accepted if this SizeConfig is enabled.
 * @property {Array<string>} labels The active labels to match this SizeConfig to an adUnits and/or bidders.
 */

/**
 *
 * @param {Array<SizeConfig>} config
 */

function setSizeConfig(config) {
  sizeConfig = config;
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('sizeConfig', function (config) {
  return setSizeConfig(config.sizeConfig);
});
/**
 * Returns object describing the status of labels on the adUnit or bidder along with labels passed into requestBids
 * @param bidOrAdUnit the bidder or adUnit to get label info on
 * @param activeLabels the labels passed to requestBids
 * @returns {LabelDescriptor}
 */

function getLabels(bidOrAdUnit, activeLabels) {
  if (bidOrAdUnit.labelAll) {
    return {
      labelAll: true,
      labels: bidOrAdUnit.labelAll,
      activeLabels: activeLabels
    };
  }

  return {
    labelAll: false,
    labels: bidOrAdUnit.labelAny,
    activeLabels: activeLabels
  };
}
/**
 * Determines whether a single size is valid given configured sizes
 * @param {Array} size [width, height]
 * @param {Array<SizeConfig>} configs
 * @returns {boolean}
 */

function sizeSupported(size) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!maps.shouldFilter) {
    return true;
  }

  return !!maps.sizesSupported[size];
}
/**
 * Resolves the unique set of the union of all sizes and labels that are active from a SizeConfig.mediaQuery match
 * @param {Array<string>} labels Labels specified on adUnit or bidder
 * @param {boolean} labelAll if true, all labels must match to be enabled
 * @param {Array<string>} activeLabels Labels passed in through requestBids
 * @param {object} mediaTypes A mediaTypes object describing the various media types (banner, video, native)
 * @param {Array<Array<number>>} sizes Sizes specified on adUnit (deprecated)
 * @param {Array<SizeConfig>} configs
 * @returns {{labels: Array<string>, sizes: Array<Array<number>>}}
 */

function resolveStatus() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$labels = _ref.labels,
      labels = _ref$labels === void 0 ? [] : _ref$labels,
      _ref$labelAll = _ref.labelAll,
      labelAll = _ref$labelAll === void 0 ? false : _ref$labelAll,
      _ref$activeLabels = _ref.activeLabels,
      activeLabels = _ref$activeLabels === void 0 ? [] : _ref$activeLabels;

  var mediaTypes = arguments.length > 1 ? arguments[1] : undefined;
  var sizes = arguments.length > 2 ? arguments[2] : undefined;
  var configs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isPlainObject"])(mediaTypes)) {
    // add support for deprecated adUnit.sizes by creating correct banner mediaTypes if they don't already exist
    if (sizes) {
      mediaTypes = {
        banner: {
          sizes: sizes
        }
      };
    } else {
      mediaTypes = {};
    }
  } else {
    mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(mediaTypes);
  }

  var oldSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes');

  if (maps.shouldFilter && oldSizes) {
    mediaTypes.banner.sizes = oldSizes.filter(function (size) {
      return maps.sizesSupported[size];
    });
  }

  var allMediaTypes = Object.keys(mediaTypes);
  var results = {
    active: allMediaTypes.every(function (type) {
      return type !== 'banner';
    }) || allMediaTypes.some(function (type) {
      return type === 'banner';
    }) && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes.length') > 0 && (labels.length === 0 || !labelAll && (labels.some(function (label) {
      return maps.labels[label];
    }) || labels.some(function (label) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(activeLabels, label);
    })) || labelAll && labels.reduce(function (result, label) {
      return !result ? result : maps.labels[label] || __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(activeLabels, label);
    }, true)),
    mediaTypes: mediaTypes
  };

  if (oldSizes && oldSizes.length !== mediaTypes.banner.sizes.length) {
    results.filterResults = {
      before: oldSizes,
      after: mediaTypes.banner.sizes
    };
  }

  return results;
}

function evaluateSizeConfig(configs) {
  return configs.reduce(function (results, config) {
    if (_typeof(config) === 'object' && typeof config.mediaQuery === 'string' && config.mediaQuery.length > 0) {
      var ruleMatch = false;

      try {
        ruleMatch = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getWindowTop"])().matchMedia(config.mediaQuery).matches;
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Unfriendly iFrame blocks sizeConfig from being correctly evaluated');
        ruleMatch = matchMedia(config.mediaQuery).matches;
      }

      if (ruleMatch) {
        if (Array.isArray(config.sizesSupported)) {
          results.shouldFilter = true;
        }

        ['labels', 'sizesSupported'].forEach(function (type) {
          return (config[type] || []).forEach(function (thing) {
            return results[type][thing] = true;
          });
        });
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('sizeConfig rule missing required property "mediaQuery"');
    }

    return results;
  }, {
    labels: {},
    sizesSupported: {},
    shouldFilter: false
  });
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = store;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCacheUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__ = __webpack_require__(18);
/**
 * This module interacts with the server used to cache video ad content to be restored later.
 * At a high level, the expected workflow goes like this:
 *
 *   - Request video ads from Bidders
 *   - Generate IDs for each valid bid, and cache the key/value pair on the server.
 *   - Return these IDs so that publishers can use them to fetch the bids later.
 *
 * This trickery helps integrate with ad servers, which set character limits on request params.
 */



/**
 * @typedef {object} CacheableUrlBid
 * @property {string} vastUrl A URL which loads some valid VAST XML.
 */

/**
 * @typedef {object} CacheablePayloadBid
 * @property {string} vastXml Some VAST XML which loads an ad in a video player.
 */

/**
 * A CacheableBid describes the types which the videoCache can store.
 *
 * @typedef {CacheableUrlBid|CacheablePayloadBid} CacheableBid
 */

/**
 * Function which wraps a URI that serves VAST XML, so that it can be loaded.
 *
 * @param {string} uri The URI where the VAST content can be found.
 * @param {string} impUrl An impression tracker URL for the delivery of the video ad
 * @return A VAST URL which loads XML from the given URI.
 */

function wrapURI(uri, impUrl) {
  // Technically, this is vulnerable to cross-script injection by sketchy vastUrl bids.
  // We could make sure it's a valid URI... but since we're loading VAST XML from the
  // URL they provide anyway, that's probably not a big deal.
  var vastImp = impUrl ? "<![CDATA[".concat(impUrl, "]]>") : "";
  return "<VAST version=\"3.0\">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[".concat(uri, "]]></VASTAdTagURI>\n        <Impression>").concat(vastImp, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>");
}
/**
 * Wraps a bid in the format expected by the prebid-server endpoints, or returns null if
 * the bid can't be converted cleanly.
 *
 * @param {CacheableBid} bid
 * @param index
 */


function toStorageRequest(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl, bid.vastImpUrl);
  var auction = index.getAuction(bid);
  var payload = {
    type: 'xml',
    value: vastValue,
    ttlseconds: Number(bid.ttl)
  };

  if (__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.vasttrack')) {
    payload.bidder = bid.bidder;
    payload.bidid = bid.requestId;
    payload.aid = bid.auctionId;
  }

  if (auction != null) {
    payload.timestamp = auction.getAuctionStart();
  }

  if (typeof bid.customCacheKey === 'string' && bid.customCacheKey !== '') {
    payload.key = bid.customCacheKey;
  }

  return payload;
}
/**
 * A function which should be called with the results of the storage operation.
 *
 * @callback videoCacheStoreCallback
 *
 * @param {Error} [error] The error, if one occurred.
 * @param {?string[]} uuids An array of unique IDs. The array will have one element for each bid we were asked
 *   to store. It may include null elements if some of the bids were malformed, or an error occurred.
 *   Each non-null element in this array is a valid input into the retrieve function, which will fetch
 *   some VAST XML which can be used to render this bid's ad.
 */

/**
 * A function which bridges the APIs between the videoCacheStoreCallback and our ajax function's API.
 *
 * @param {videoCacheStoreCallback} done A callback to the "store" function.
 * @return {Function} A callback which interprets the cache server's responses, and makes up the right
 *   arguments for our callback.
 */


function shimStorageCallback(done) {
  return {
    success: function success(responseBody) {
      var ids;

      try {
        ids = JSON.parse(responseBody).responses;
      } catch (e) {
        done(e, []);
        return;
      }

      if (ids) {
        done(null, ids);
      } else {
        done(new Error("The cache server didn't respond with a responses property."), []);
      }
    },
    error: function error(statusText, responseBody) {
      done(new Error("Error storing video ad in the cache: ".concat(statusText, ": ").concat(JSON.stringify(responseBody))), []);
    }
  };
}
/**
 * If the given bid is for a Video ad, generate a unique ID and cache it somewhere server-side.
 *
 * @param {CacheableBid[]} bids A list of bid objects which should be cached.
 * @param {videoCacheStoreCallback} [done] An optional callback which should be executed after
 * the data has been stored in the cache.
 */


function store(bids, done) {
  var requestData = {
    puts: bids.map(toStorageRequest)
  };
  Object(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* ajax */])(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.url'), shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}
function getCacheUrl(id) {
  return "".concat(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('cache.url'), "?uuid=").concat(id);
}

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emitAdRenderFail;
/* harmony export (immutable) */ __webpack_exports__["b"] = emitAdRenderSucceeded;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_json__);



var _CONSTANTS$EVENTS = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED,
    AD_RENDER_SUCCEEDED = _CONSTANTS$EVENTS.AD_RENDER_SUCCEEDED;
/**
 * Emit the AD_RENDER_FAILED event.
 *
 * @param reason one of the values in CONSTANTS.AD_RENDER_FAILED_REASON
 * @param message failure description
 * @param bid? bid response object that failed to render
 * @param id? adId that failed to render
 */

function emitAdRenderFail(_ref) {
  var reason = _ref.reason,
      message = _ref.message,
      bid = _ref.bid,
      id = _ref.id;
  var data = {
    reason: reason,
    message: message
  };
  if (bid) data.bid = bid;
  if (id) data.adId = id;
  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(message);
  __WEBPACK_IMPORTED_MODULE_1__events_js___default.a.emit(AD_RENDER_FAILED, data);
}
/**
 * Emit the AD_RENDER_SUCCEEDED event.
 *
 * @param doc document object that was used to `.write` the ad. Should be `null` if unavailable (e.g. for documents in
 * a cross-origin frame).
 * @param bid bid response object for the ad that was rendered
 * @param id adId that was rendered.
 */

function emitAdRenderSucceeded(_ref2) {
  var doc = _ref2.doc,
      bid = _ref2.bid,
      id = _ref2.id;
  var data = {
    doc: doc
  };
  if (bid) data.bid = bid;
  if (id) data.adId = id;
  __WEBPACK_IMPORTED_MODULE_1__events_js___default.a.emit(AD_RENDER_SUCCEEDED, data);
}

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addBidResponseBound */
/* unused harmony export addBidderRequestsBound */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onEnableOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onDisableOverrides; });
/* unused harmony export enableOverrides */
/* unused harmony export disableOverrides */
/* unused harmony export bidExcluded */
/* unused harmony export bidderExcluded */
/* unused harmony export applyBidOverrides */
/* unused harmony export addBidResponseHook */
/* unused harmony export addBidderRequestsHook */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDebuggingConfig; });
/* unused harmony export getConfig */
/* harmony export (immutable) */ __webpack_exports__["d"] = sessionLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_js__ = __webpack_require__(0);





var _prefixLog = Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["prefixLog"])('DEBUG:'),
    logWarn = _prefixLog.logWarn,
    logMessage = _prefixLog.logMessage;

var OVERRIDE_KEY = "pbjs:debugging";
var addBidResponseBound;
var addBidderRequestsBound;
var onEnableOverrides = [function (overrides) {
  removeHooks();
  addHooks(overrides);
}];
var onDisableOverrides = [removeHooks];

function addHooks(overrides) {
  addBidResponseBound = addBidResponseHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["c" /* addBidResponse */].before(addBidResponseBound, 5);
  addBidderRequestsBound = addBidderRequestsHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["e" /* addBidderRequests */].before(addBidderRequestsBound, 5);
}

function removeHooks() {
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["c" /* addBidResponse */].getHooks({
    hook: addBidResponseBound
  }).remove();
  __WEBPACK_IMPORTED_MODULE_1__auction_js__["e" /* addBidderRequests */].getHooks({
    hook: addBidderRequestsBound
  }).remove();
}

function enableOverrides(overrides) {
  var fromSession = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].setConfig({
    'debug': true
  });
  onEnableOverrides.forEach(function (fn) {
    return fn(overrides);
  });
  logMessage("bidder overrides enabled".concat(fromSession ? ' from session' : ''));
}
function disableOverrides() {
  onDisableOverrides.forEach(function (fn) {
    return fn();
  });
  logMessage('bidder overrides disabled');
}
/**
 * @param {{bidder:string, adUnitCode:string}} overrideObj
 * @param {string} bidderCode
 * @param {string} adUnitCode
 * @returns {boolean}
 */

function bidExcluded(overrideObj, bidderCode, adUnitCode) {
  if (overrideObj.bidder && overrideObj.bidder !== bidderCode) {
    return true;
  }

  if (overrideObj.adUnitCode && overrideObj.adUnitCode !== adUnitCode) {
    return true;
  }

  return false;
}
/**
 * @param {string[]} bidders
 * @param {string} bidderCode
 * @returns {boolean}
 */

function bidderExcluded(bidders, bidderCode) {
  return Array.isArray(bidders) && bidders.indexOf(bidderCode) === -1;
}
/**
 * @param {Object} overrideObj
 * @param {Object} bidObj
 * @param {Object} bidType
 * @returns {Object} bidObj with overridden properties
 */

function applyBidOverrides(overrideObj, bidObj, bidType) {
  return Object.keys(overrideObj).filter(function (key) {
    return ['adUnitCode', 'bidder'].indexOf(key) === -1;
  }).reduce(function (result, key) {
    logMessage("bidder overrides changed '".concat(result.adUnitCode, "/").concat(result.bidderCode, "' ").concat(bidType, ".").concat(key, " from '").concat(result[key], ".js' to '").concat(overrideObj[key], "'"));
    result[key] = overrideObj[key];
    result.isDebug = true;
    return result;
  }, bidObj);
}
function addBidResponseHook(next, adUnitCode, bid) {
  var overrides = this;

  if (bidderExcluded(overrides.bidders, bid.bidderCode)) {
    logWarn("bidder '".concat(bid.bidderCode, "' excluded from auction by bidder overrides"));
    return;
  }

  if (Array.isArray(overrides.bids)) {
    overrides.bids.forEach(function (overrideBid) {
      if (!bidExcluded(overrideBid, bid.bidderCode, adUnitCode)) {
        applyBidOverrides(overrideBid, bid, 'bidder');
      }
    });
  }

  next(adUnitCode, bid);
}
function addBidderRequestsHook(next, bidderRequests) {
  var overrides = this;
  var includedBidderRequests = bidderRequests.filter(function (bidderRequest) {
    if (bidderExcluded(overrides.bidders, bidderRequest.bidderCode)) {
      logWarn("bidRequest '".concat(bidderRequest.bidderCode, "' excluded from auction by bidder overrides"));
      return false;
    }

    return true;
  });

  if (Array.isArray(overrides.bidRequests)) {
    includedBidderRequests.forEach(function (bidderRequest) {
      overrides.bidRequests.forEach(function (overrideBid) {
        bidderRequest.bids.forEach(function (bid) {
          if (!bidExcluded(overrideBid, bidderRequest.bidderCode, bid.adUnitCode)) {
            applyBidOverrides(overrideBid, bid, 'bidRequest');
          }
        });
      });
    });
  }

  next(includedBidderRequests);
}
var saveDebuggingConfig = Object(__WEBPACK_IMPORTED_MODULE_2__hook_js__["b" /* hook */])('sync', function (debugConfig) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$sessionStorage = _ref.sessionStorage,
      sessionStorage = _ref$sessionStorage === void 0 ? window.sessionStorage : _ref$sessionStorage;

  if (!debugConfig.enabled) {
    try {
      sessionStorage.removeItem(OVERRIDE_KEY);
    } catch (e) {}
  } else {
    try {
      sessionStorage.setItem(OVERRIDE_KEY, JSON.stringify(debugConfig));
    } catch (e) {}
  }
});
function getConfig(debugging) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$sessionStorage = _ref2.sessionStorage,
      sessionStorage = _ref2$sessionStorage === void 0 ? window.sessionStorage : _ref2$sessionStorage;

  saveDebuggingConfig(debugging, {
    sessionStorage: sessionStorage
  });

  if (!debugging.enabled) {
    disableOverrides();
  } else {
    enableOverrides(debugging);
  }
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debugging', function (_ref3) {
  var debugging = _ref3.debugging;
  return getConfig(debugging);
});
function sessionLoader(storage) {
  var overrides;

  try {
    storage = storage || window.sessionStorage;
    overrides = JSON.parse(storage.getItem(OVERRIDE_KEY));
  } catch (e) {}

  if (overrides) {
    enableOverrides(overrides, true);
  }
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var entryUnbind = __webpack_require__(56);

module.exports = entryUnbind('Array', 'find');


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(109);

module.exports = parent;


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $find = __webpack_require__(64).find;
var addToUnscopables = __webpack_require__(55);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(34);
var propertyIsEnumerableModule = __webpack_require__(112);
var createPropertyDescriptor = __webpack_require__(44);
var toIndexedObject = __webpack_require__(50);
var toPrimitive = __webpack_require__(63);
var has = __webpack_require__(31);
var IE8_DOM_DEFINE = __webpack_require__(86);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var isArray = __webpack_require__(115);
var wellKnownSymbol = __webpack_require__(23);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var createNonEnumerableProperty = __webpack_require__(33);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var userAgent = __webpack_require__(118);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(26);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(89);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(120);

module.exports = parent;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var entryUnbind = __webpack_require__(56);

module.exports = entryUnbind('Array', 'includes');


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $includes = __webpack_require__(90).includes;
var addToUnscopables = __webpack_require__(55);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
__webpack_require__(139);
__webpack_require__(100);
__webpack_require__(141);
var path = __webpack_require__(45);

module.exports = path.Set;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(125);
var collectionStrong = __webpack_require__(130);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var global = __webpack_require__(27);
var InternalMetadataModule = __webpack_require__(92);
var fails = __webpack_require__(29);
var createNonEnumerableProperty = __webpack_require__(33);
var iterate = __webpack_require__(22);
var anInstance = __webpack_require__(69);
var isObject = __webpack_require__(30);
var setToStringTag = __webpack_require__(60);
var defineProperty = __webpack_require__(35).f;
var forEach = __webpack_require__(64).forEach;
var DESCRIPTORS = __webpack_require__(34);
var InternalStateModule = __webpack_require__(46);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || typeof NativeConstructor != 'function'
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Constructor.prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var classof = __webpack_require__(59);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var inspectSource = __webpack_require__(129);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(66);

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;
/* harmony export (immutable) */ __webpack_exports__["c"] = isRendererRequired;
/* harmony export (immutable) */ __webpack_exports__["b"] = executeRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adloader_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__);



var moduleCode = 'outstream';
/**
 * @typedef {object} Renderer
 *
 * A Renderer stores some functions which are used to render a particular Bid.
 * These are used in Outstream Video Bids, returned on the Bid by the adapter, and will
 * be used to render that bid unless the Publisher overrides them.
 */

function Renderer(options) {
  var _this = this;

  var url = options.url,
      config = options.config,
      id = options.id,
      callback = options.callback,
      loaded = options.loaded,
      adUnitCode = options.adUnitCode;
  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id; // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadExternalScript, at which point the the command
  // queue will be processed

  this.loaded = loaded;
  this.cmd = [];

  this.push = function (func) {
    if (typeof func !== 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Commands given to Renderer.push must be wrapped in a function');
      return;
    }

    _this.loaded ? func.call() : _this.cmd.push(func);
  }; // bidders may override this with the `callback` property given to `install`


  this.callback = callback || function () {
    _this.loaded = true;

    _this.process();
  }; // use a function, not an arrow, in order to be able to pass "arguments" through


  this.render = function () {
    var _this2 = this;

    var renderArgs = arguments;

    var runRender = function runRender() {
      if (_this2._render) {
        _this2._render.apply(_this2, renderArgs);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("No render function was provided, please use .setRender on the renderer");
      }
    };

    if (!isRendererPreferredFromAdUnit(adUnitCode)) {
      // we expect to load a renderer url once only so cache the request to load script
      this.cmd.unshift(runRender); // should render run first ?

      Object(__WEBPACK_IMPORTED_MODULE_0__adloader_js__["a" /* loadExternalScript */])(url, moduleCode, this.callback);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(adUnitCode));
      runRender();
    }
  }.bind(this); // bind the function to this object to avoid 'this' errors

}

Renderer.install = function (_ref) {
  var url = _ref.url,
      config = _ref.config,
      id = _ref.id,
      callback = _ref.callback,
      loaded = _ref.loaded,
      adUnitCode = _ref.adUnitCode;
  return new Renderer({
    url: url,
    config: config,
    id: id,
    callback: callback,
    loaded: loaded,
    adUnitCode: adUnitCode
  });
};

Renderer.prototype.getConfig = function () {
  return this.config;
};

Renderer.prototype.setRender = function (fn) {
  this._render = fn;
};

Renderer.prototype.setEventHandlers = function (handlers) {
  this.handlers = handlers;
};

Renderer.prototype.handleVideoEvent = function (_ref2) {
  var id = _ref2.id,
      eventName = _ref2.eventName;

  if (typeof this.handlers[eventName] === 'function') {
    this.handlers[eventName]();
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])("Prebid Renderer event for id ".concat(id, " type ").concat(eventName));
};
/*
 * Calls functions that were pushed to the command queue before the
 * renderer was loaded by `loadExternalScript`
 */


Renderer.prototype.process = function () {
  while (this.cmd.length > 0) {
    try {
      this.cmd.shift().call();
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing Renderer command: ', error);
    }
  }
};
/**
 * Checks whether creative rendering should be done by Renderer or not.
 * @param {Object} renderer Renderer object installed by adapter
 * @returns {Boolean}
 */


function isRendererRequired(renderer) {
  return !!(renderer && renderer.url);
}
/**
 * Render the bid returned by the adapter
 * @param {Object} renderer Renderer object installed by adapter
 * @param {Object} bid Bid response
 */

function executeRenderer(renderer, bid) {
  renderer.render(bid);
}

function isRendererPreferredFromAdUnit(adUnitCode) {
  var adUnits = pbjs.adUnits;
  var adUnit = __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(adUnits, function (adUnit) {
    return adUnit.code === adUnitCode;
  });

  if (!adUnit) {
    return false;
  } // renderer defined at adUnit level


  var adUnitRenderer = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'renderer');
  var hasValidAdUnitRenderer = !!(adUnitRenderer && adUnitRenderer.url && adUnitRenderer.render); // renderer defined at adUnit.mediaTypes level

  var mediaTypeRenderer = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.renderer');
  var hasValidMediaTypeRenderer = !!(mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render);
  return !!(hasValidAdUnitRenderer && !(adUnitRenderer.backupOnly === true) || hasValidMediaTypeRenderer && !(mediaTypeRenderer.backupOnly === true));
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(35).f;
var create = __webpack_require__(71);
var redefineAll = __webpack_require__(96);
var bind = __webpack_require__(25);
var anInstance = __webpack_require__(69);
var iterate = __webpack_require__(22);
var defineIterator = __webpack_require__(73);
var setSpecies = __webpack_require__(138);
var DESCRIPTORS = __webpack_require__(34);
var fastKey = __webpack_require__(92).fastKey;
var InternalStateModule = __webpack_require__(46);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(34);
var definePropertyModule = __webpack_require__(35);
var anObject = __webpack_require__(17);
var objectKeys = __webpack_require__(132);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(133);
var enumBugKeys = __webpack_require__(95);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(31);
var toIndexedObject = __webpack_require__(50);
var indexOf = __webpack_require__(90).indexOf;
var hiddenKeys = __webpack_require__(57);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(26);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(17);
var aPossiblePrototype = __webpack_require__(137);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(26);
var definePropertyModule = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(23);
var DESCRIPTORS = __webpack_require__(34);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGlobal;
// if $$PREBID_GLOBAL$$ already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.pbjs = window.pbjs || {};
window.pbjs.cmd = window.pbjs.cmd || [];
window.pbjs.que = window.pbjs.que || []; // create a pbjs global pointer

window._pbjsGlobals = window._pbjsGlobals || [];

window._pbjsGlobals.push("pbjs");

function getGlobal() {
  return window.pbjs;
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);
var requireObjectCoercible = __webpack_require__(52);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var DOMIterables = __webpack_require__(142);
var global = __webpack_require__(27);
var classof = __webpack_require__(59);
var createNonEnumerableProperty = __webpack_require__(33);
var Iterators = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(23);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var from = __webpack_require__(144);

// `Set.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
$({ target: 'Set', stat: true }, {
  from: from
});


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var aFunction = __webpack_require__(24);
var bind = __webpack_require__(25);
var iterate = __webpack_require__(22);

module.exports = function from(source /* , mapFn, thisArg */) {
  var length = arguments.length;
  var mapFn = length > 1 ? arguments[1] : undefined;
  var mapping, array, n, boundFunction;
  aFunction(this);
  mapping = mapFn !== undefined;
  if (mapping) aFunction(mapFn);
  if (source == undefined) return new this();
  array = [];
  if (mapping) {
    n = 0;
    boundFunction = bind(mapFn, length > 2 ? arguments[2] : undefined, 2);
    iterate(source, function (nextItem) {
      array.push(boundFunction(nextItem, n++));
    });
  } else {
    iterate(source, array.push, { that: array });
  }
  return new this(array);
};


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var of = __webpack_require__(146);

// `Set.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
$({ target: 'Set', stat: true }, {
  of: of
});


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
module.exports = function of() {
  var length = arguments.length;
  var A = new Array(length);
  while (length--) A[length] = arguments[length];
  return new this(A);
};


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var collectionAddAll = __webpack_require__(148);

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  addAll: function addAll(/* ...elements */) {
    return collectionAddAll.apply(this, arguments);
  }
});


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);

// https://github.com/tc39/collection-methods
module.exports = function (/* ...elements */) {
  var set = anObject(this);
  var adder = aFunction(set.add);
  for (var k = 0, len = arguments.length; k < len; k++) {
    adder.call(set, arguments[k]);
  }
  return set;
};


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var collectionDeleteAll = __webpack_require__(150);

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);

// https://github.com/tc39/collection-methods
module.exports = function (/* ...elements */) {
  var collection = anObject(this);
  var remover = aFunction(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = remover.call(collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var bind = __webpack_require__(25);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate(iterator, function (value, stop) {
      if (!boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var speciesConstructor = __webpack_require__(41);
var iterate = __webpack_require__(22);

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  difference: function difference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction(newSet['delete']);
    iterate(iterable, function (value) {
      remover.call(newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var bind = __webpack_require__(25);
var speciesConstructor = __webpack_require__(41);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction(newSet.add);
    iterate(iterator, function (value) {
      if (boundFunction(value, value, set)) adder.call(newSet, value);
    }, { IS_ITERATOR: true });
    return newSet;
  }
});


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var bind = __webpack_require__(25);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop(value);
    }, { IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var speciesConstructor = __webpack_require__(41);
var iterate = __webpack_require__(22);

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  intersection: function intersection(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var hasCheck = aFunction(set.has);
    var adder = aFunction(newSet.add);
    iterate(iterable, function (value) {
      if (hasCheck.call(set, value)) adder.call(newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var iterate = __webpack_require__(22);

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isDisjointFrom: function isDisjointFrom(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction(set.has);
    return !iterate(iterable, function (value, stop) {
      if (hasCheck.call(set, value) === true) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var getIterator = __webpack_require__(74);
var iterate = __webpack_require__(22);

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isSubsetOf: function isSubsetOf(iterable) {
    var iterator = getIterator(this);
    var otherSet = anObject(iterable);
    var hasCheck = otherSet.has;
    if (typeof hasCheck != 'function') {
      otherSet = new (getBuiltIn('Set'))(iterable);
      hasCheck = aFunction(otherSet.has);
    }
    return !iterate(iterator, function (value, stop) {
      if (hasCheck.call(otherSet, value) === false) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var iterate = __webpack_require__(22);

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isSupersetOf: function isSupersetOf(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction(set.has);
    return !iterate(iterable, function (value, stop) {
      if (hasCheck.call(set, value) === false) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  join: function join(separator) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var sep = separator === undefined ? ',' : String(separator);
    var result = [];
    iterate(iterator, result.push, { that: result, IS_ITERATOR: true });
    return result.join(sep);
  }
});


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(27);
var getOwnPropertyDescriptor = __webpack_require__(111).f;
var isForced = __webpack_require__(113);
var path = __webpack_require__(45);
var bind = __webpack_require__(25);
var createNonEnumerableProperty = __webpack_require__(33);
var has = __webpack_require__(31);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var bind = __webpack_require__(25);
var speciesConstructor = __webpack_require__(41);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction(newSet.add);
    iterate(iterator, function (value) {
      adder.call(newSet, boundFunction(value, value, set));
    }, { IS_ITERATOR: true });
    return newSet;
  }
});


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aFunction(callbackfn);
    iterate(iterator, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    }, { IS_ITERATOR: true });
    if (noInitial) throw TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var anObject = __webpack_require__(17);
var bind = __webpack_require__(25);
var getSetIterator = __webpack_require__(38);
var iterate = __webpack_require__(22);

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var speciesConstructor = __webpack_require__(41);
var iterate = __webpack_require__(22);

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  symmetricDifference: function symmetricDifference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction(newSet['delete']);
    var adder = aFunction(newSet.add);
    iterate(iterable, function (value) {
      remover.call(newSet, value) || adder.call(newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(19);
var getBuiltIn = __webpack_require__(26);
var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var speciesConstructor = __webpack_require__(41);
var iterate = __webpack_require__(22);

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  union: function union(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    iterate(iterable, aFunction(newSet.add), { that: newSet });
    return newSet;
  }
});


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
__webpack_require__(166);
var path = __webpack_require__(45);

module.exports = path.Array.from;


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var from = __webpack_require__(167);
var checkCorrectnessOfIteration = __webpack_require__(170);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(25);
var toObject = __webpack_require__(53);
var callWithSafeIterationClosing = __webpack_require__(168);
var isArrayIteratorMethod = __webpack_require__(93);
var toLength = __webpack_require__(54);
var createProperty = __webpack_require__(169);
var getIteratorMethod = __webpack_require__(58);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var iteratorClose = __webpack_require__(94);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(63);
var definePropertyModule = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(44);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(23);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dlv;
function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x;
	for (; i < l; ++i) {
		x = t[keys[i]];
		t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i+1].indexOf('.') || !(+keys[i+1] > -1)) ? {} : []));
	}
});


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

/*
* @license MIT
* Fun Hooks v0.9.10
* (c) @snapwich
*/
create.SYNC = 1;
create.ASYNC = 2;
create.QUEUE = 4;

var packageName = "fun-hooks";

function hasProxy() {
  return !!(typeof Proxy === "function" && Proxy.revocable);
}

var defaults = Object.freeze({
  useProxy: true,
  ready: 0
});

var hookableMap = new WeakMap();

// detect incorrectly implemented reduce and if found use polyfill
// https://github.com/prebid/Prebid.js/issues/3576
// polyfill from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var reduce =
  [1]
    .reduce(function(a, b, c) {
      return [a, b, c];
    }, 2)
    .toString() === "2,1,0"
    ? Array.prototype.reduce
    : function(callback, initial) {
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (initial) {
          value = initial;
        } else {
          while (k < len && !(k in o)) {
            k++;
          }
          value = o[k++];
        }
        while (k < len) {
          if (k in o) {
            value = callback(value, o[k], k, o);
          }
          k++;
        }
        return value;
      };

function rest(args, skip) {
  return Array.prototype.slice.call(args, skip);
}

var assign =
  Object.assign ||
  function assign(target) {
    return reduce.call(
      rest(arguments, 1),
      function(target, obj) {
        if (obj) {
          Object.keys(obj).forEach(function(prop) {
            target[prop] = obj[prop];
          });
        }
        return target;
      },
      target
    );
  };

function runAll(queue) {
  var queued;
  // eslint-disable-next-line no-cond-assign
  while ((queued = queue.shift())) {
    queued();
  }
}

function create(config) {
  var hooks = {};
  var postReady = [];

  config = assign({}, defaults, config);

  function dispatch(arg1, arg2) {
    if (typeof arg1 === "function") {
      return hookFn.call(null, "sync", arg1, arg2);
    } else if (typeof arg1 === "string" && typeof arg2 === "function") {
      return hookFn.apply(null, arguments);
    } else if (typeof arg1 === "object") {
      return hookObj.apply(null, arguments);
    }
  }

  var ready;
  if (config.ready) {
    dispatch.ready = function() {
      ready = true;
      runAll(postReady);
    };
  } else {
    ready = true;
  }

  function hookObj(obj, props, objName) {
    var walk = true;
    if (typeof props === "undefined") {
      props = Object.getOwnPropertyNames(obj);
      walk = false;
    }
    var objHooks = {};
    var doNotHook = ["constructor"];
    do {
      props = props.filter(function(prop) {
        return (
          typeof obj[prop] === "function" &&
          !(doNotHook.indexOf(prop) !== -1) &&
          !prop.match(/^_/)
        );
      });
      props.forEach(function(prop) {
        var parts = prop.split(":");
        var name = parts[0];
        var type = parts[1] || "sync";
        if (!objHooks[name]) {
          var fn = obj[name];
          objHooks[name] = obj[name] = hookFn(
            type,
            fn,
            objName ? [objName, name] : undefined
          );
        }
      });
      obj = Object.getPrototypeOf(obj);
    } while (walk && obj);
    return objHooks;
  }

  /**
   * Navigates a string path to return a hookable function.  If not found, creates a placeholder for hooks.
   * @param {(Array<string> | string)} path
   */
  function get(path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return reduce.call(
      parts,
      function(memo, part, i) {
        var item = memo[part];
        var installed = false;
        if (item) {
          return item;
        } else if (i === parts.length - 1) {
          if (!ready) {
            postReady.push(function() {
              if (!installed) {
                // eslint-disable-next-line no-console
                console.warn(
                  packageName +
                    ": referenced '" +
                    path +
                    "' but it was never created"
                );
              }
            });
          }
          return (memo[part] = newHookable(function(fn) {
            memo[part] = fn;
            installed = true;
          }));
        }
        return (memo[part] = {});
      },
      hooks
    );
  }

  function newHookable(onInstall) {
    var before = [];
    var after = [];
    var generateTrap = function() {};

    var api = {
      before: function(hook, priority) {
        return add.call(this, before, "before", hook, priority);
      },
      after: function(hook, priority) {
        return add.call(this, after, "after", hook, priority);
      },
      getHooks: function(match) {
        var hooks = before.concat(after);
        if (typeof match === "object") {
          hooks = hooks.filter(function(entry) {
            return Object.keys(match).every(function(prop) {
              return entry[prop] === match[prop];
            });
          });
        }
        try {
          assign(hooks, {
            remove: function() {
              hooks.forEach(function(entry) {
                entry.remove();
              });
              return this;
            }
          });
        } catch (e) {
          console.error(
            "error adding `remove` to array, did you modify Array.prototype?"
          );
        }
        return hooks;
      },
      removeAll: function() {
        return this.getHooks().remove();
      }
    };

    var meta = {
      install: function(type, fn, generate) {
        this.type = type;
        generateTrap = generate;
        generate(before, after);
        onInstall && onInstall(fn);
      }
    };

    // store meta data related to hookable. use `api.after` since `api` reference is not available on our proxy.
    hookableMap.set(api.after, meta);

    return api;

    function add(store, type, hook, priority) {
      var entry = {
        hook: hook,
        type: type,
        priority: priority || 10,
        remove: function() {
          var index = store.indexOf(entry);
          if (index !== -1) {
            store.splice(index, 1);
            generateTrap(before, after);
          }
        }
      };
      store.push(entry);
      store.sort(function(a, b) {
        return b.priority - a.priority;
      });
      generateTrap(before, after);
      return this;
    }
  }

  function hookFn(type, fn, name) {
    // check if function has already been wrapped
    var meta = fn.after && hookableMap.get(fn.after);
    if (meta) {
      if (meta.type !== type) {
        throw packageName + ": recreated hookable with different type";
      } else {
        return fn;
      }
    }

    var hookable = name ? get(name) : newHookable();

    var trap;
    var hookedFn;
    var handlers = {
      get: function(target, prop) {
        return hookable[prop] || Reflect.get.apply(Reflect, arguments);
      }
    };

    if (!ready) {
      postReady.push(setTrap);
    }

    if (config.useProxy && hasProxy()) {
      hookedFn = new Proxy(fn, handlers);
    } else {
      hookedFn = function() {
        return handlers.apply
          ? handlers.apply(fn, this, rest(arguments))
          : fn.apply(this, arguments);
      };
      assign(hookedFn, hookable);
    }

    hookableMap.get(hookedFn.after).install(type, hookedFn, generateTrap);

    return hookedFn;

    // eslint-disable-next-line no-redeclare
    function generateTrap(before, after) {
      var order = [];
      var targetIndex;
      if (before.length || after.length) {
        before.forEach(addToOrder);
        // placeholder for target function wrapper
        targetIndex = order.push(undefined) - 1;
        after.forEach(addToOrder);
        trap = function(target, thisArg, args) {
          var curr = 0;
          var result;
          var callback =
            type === "async" &&
            typeof args[args.length - 1] === "function" &&
            args.pop();
          function bail(value) {
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          function next(value) {
            if (order[curr]) {
              var args = rest(arguments);
              next.bail = bail;
              args.unshift(next);
              return order[curr++].apply(thisArg, args);
            }
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          order[targetIndex] = function() {
            var args = rest(arguments, 1);
            if (type === "async" && callback) {
              delete next.bail;
              args.push(next);
            }
            var result = target.apply(thisArg, args);
            if (type === "sync") {
              next(result);
            }
          };
          next.apply(null, args);
          return result;
        };
      } else {
        trap = undefined;
      }
      setTrap();

      function addToOrder(entry) {
        order.push(entry.hook);
      }
    }

    function setTrap() {
      if (
        ready ||
        (type === "sync" && !(config.ready & create.SYNC)) ||
        (type === "async" && !(config.ready & create.ASYNC))
      ) {
        handlers.apply = trap;
      } else if (type === "sync" || !(config.ready & create.QUEUE)) {
        handlers.apply = function() {
          throw packageName + ": hooked function not ready";
        };
      } else {
        handlers.apply = function() {
          var args = arguments;
          postReady.push(function() {
            hookedFn.apply(args[1], args[2]);
          });
        };
      }
    }
  }

  dispatch.get = get;
  return dispatch;
}

/* global module */
module.exports = create;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AuctionIndex;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Retrieves request-related bid data.
 * All methods are designed to work with Bid (response) objects returned by bid adapters.
 */
function AuctionIndex(getAuctions) {
  _extends(this, {
    /**
     * @param auctionId
     * @returns {*} Auction instance for `auctionId`
     */
    getAuction: function getAuction(_ref) {
      var auctionId = _ref.auctionId;

      if (auctionId != null) {
        return getAuctions().find(function (auction) {
          return auction.getAuctionId() === auctionId;
        });
      }
    },

    /**
     * NOTE: you should prefer {@link #getMediaTypes} for looking up bid media types.
     * @param transactionId
     * @returns adUnit object for `transactionId`
     */
    getAdUnit: function getAdUnit(_ref2) {
      var transactionId = _ref2.transactionId;

      if (transactionId != null) {
        return getAuctions().flatMap(function (a) {
          return a.getAdUnits();
        }).find(function (au) {
          return au.transactionId === transactionId;
        });
      }
    },

    /**
     * @param transactionId
     * @param requestId?
     * @returns {*} mediaTypes object from bidRequest (through requestId) falling back to the adUnit (through transactionId).
     *
     * The bidRequest is given precedence because its mediaTypes can differ from the adUnit's (if bidder-specific labels are in use).
     * Bids that have no associated request do not have labels either, and use the adUnit's mediaTypes.
     */
    getMediaTypes: function getMediaTypes(_ref3) {
      var transactionId = _ref3.transactionId,
          requestId = _ref3.requestId;

      if (requestId != null) {
        var req = this.getBidRequest({
          requestId: requestId
        });

        if (req != null && (transactionId == null || req.transactionId === transactionId)) {
          return req.mediaTypes;
        }
      } else if (transactionId != null) {
        var au = this.getAdUnit({
          transactionId: transactionId
        });

        if (au != null) {
          return au.mediaTypes;
        }
      }
    },

    /**
     * @param requestId?
     * @param bidderRequestId?
     * @returns {*} bidderRequest that matches both requestId and bidderRequestId (if either or both are provided).
     *
     * NOTE: Bid responses are not guaranteed to have a corresponding request.
     */
    getBidderRequest: function getBidderRequest(_ref4) {
      var requestId = _ref4.requestId,
          bidderRequestId = _ref4.bidderRequestId;

      if (requestId != null || bidderRequestId != null) {
        var bers = getAuctions().flatMap(function (a) {
          return a.getBidRequests();
        });

        if (bidderRequestId != null) {
          bers = bers.filter(function (ber) {
            return ber.bidderRequestId === bidderRequestId;
          });
        }

        if (requestId == null) {
          return bers[0];
        } else {
          return bers.find(function (ber) {
            return ber.bids && ber.bids.find(function (br) {
              return br.bidId === requestId;
            }) != null;
          });
        }
      }
    },

    /**
     * @param requestId
     * @returns {*} bidRequest object for requestId
     *
     * NOTE: Bid responses are not guaranteed to have a corresponding request.
     */
    getBidRequest: function getBidRequest(_ref5) {
      var requestId = _ref5.requestId;

      if (requestId != null) {
        return getAuctions().flatMap(function (a) {
          return a.getBidRequests();
        }).flatMap(function (ber) {
          return ber.bids;
        }).find(function (br) {
          return br && br.bidId === requestId;
        });
      }
    }
  });
}

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export newAuctionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auctionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionIndex_js__ = __webpack_require__(175);
/**
 * AuctionManager modules is responsible for creating auction instances.
 * This module is the gateway for Prebid core to access auctions.
 * It stores all created instances of auction and can be used to get consolidated values from auction.
 */

/**
 * @typedef {Object} AuctionManager
 *
 * @property {function(): Array} getBidsRequested - returns consolidated bid requests
 * @property {function(): Array} getBidsReceived - returns consolidated bid received
 * @property {function(): Array} getAllBidsForAdUnitCode - returns consolidated bid received for a given adUnit
 * @property {function(): Array} getAdUnits - returns consolidated adUnits
 * @property {function(): Array} getAdUnitCodes - returns consolidated adUnitCodes
 * @property {function(): Object} createAuction - creates auction instance and stores it for future reference
 * @property {function(): Object} findBidByAdId - find bid received by adId. This function will be called by $$PREBID_GLOBAL$$.renderAd
 * @property {function(): Object} getStandardBidderAdServerTargeting - returns standard bidder targeting for all the adapters. Refer http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings for more details
 * @property {function(Object): void} addWinningBid - add a winning bid to an auction based on auctionId
 * @property {function(): void} clearAllAuctions - clear all auctions for testing
 */





var CONSTANTS = __webpack_require__(5);
/**
 * Creates new instance of auctionManager. There will only be one instance of auctionManager but
 * a factory is created to assist in testing.
 *
 * @returns {AuctionManager} auctionManagerInstance
 */


function newAuctionManager() {
  var _auctions = [];
  var auctionManager = {};

  auctionManager.addWinningBid = function (bid) {
    var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(_auctions, function (auction) {
      return auction.getAuctionId() === bid.auctionId;
    });

    if (auction) {
      bid.status = CONSTANTS.BID_STATUS.RENDERED;
      auction.addWinningBid(bid);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Auction not found when adding winning bid");
    }
  };

  auctionManager.getAllWinningBids = function () {
    return _auctions.map(function (auction) {
      return auction.getWinningBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsRequested = function () {
    return _auctions.map(function (auction) {
      return auction.getBidRequests();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getNoBids = function () {
    return _auctions.map(function (auction) {
      return auction.getNoBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsReceived = function () {
    return _auctions.map(function (auction) {
      if (auction.getAuctionStatus() === __WEBPACK_IMPORTED_MODULE_1__auction_js__["a" /* AUCTION_COMPLETED */]) {
        return auction.getBidsReceived();
      }
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (bid) {
      return bid;
    });
  };

  auctionManager.getAllBidsForAdUnitCode = function (adUnitCode) {
    return _auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (bid) {
      return bid && bid.adUnitCode === adUnitCode;
    });
  };

  auctionManager.getAdUnits = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnits();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getAdUnitCodes = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnitCodes();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
  };

  auctionManager.createAuction = function (_ref) {
    var adUnits = _ref.adUnits,
        adUnitCodes = _ref.adUnitCodes,
        callback = _ref.callback,
        cbTimeout = _ref.cbTimeout,
        labels = _ref.labels,
        auctionId = _ref.auctionId;
    var auction = Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["k" /* newAuction */])({
      adUnits: adUnits,
      adUnitCodes: adUnitCodes,
      callback: callback,
      cbTimeout: cbTimeout,
      labels: labels,
      auctionId: auctionId
    });

    _addAuction(auction);

    return auction;
  };

  auctionManager.findBidByAdId = function (adId) {
    return __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(_auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []), function (bid) {
      return bid.adId === adId;
    });
  };

  auctionManager.getStandardBidderAdServerTargeting = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["j" /* getStandardBidderSettings */])()[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  };

  auctionManager.setStatusForBids = function (adId, status) {
    var bid = auctionManager.findBidByAdId(adId);
    if (bid) bid.status = status;

    if (bid && status === CONSTANTS.BID_STATUS.BID_TARGETING_SET) {
      var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_find_js___default()(_auctions, function (auction) {
        return auction.getAuctionId() === bid.auctionId;
      });
      if (auction) auction.setBidTargeting(bid);
    }
  };

  auctionManager.getLastAuctionId = function () {
    return _auctions.length && _auctions[_auctions.length - 1].getAuctionId();
  };

  auctionManager.clearAllAuctions = function () {
    _auctions.length = 0;
  };

  function _addAuction(auction) {
    _auctions.push(auction);
  }

  auctionManager.index = new __WEBPACK_IMPORTED_MODULE_3__auctionIndex_js__["a" /* AuctionIndex */](function () {
    return _auctions;
  });
  return auctionManager;
}
var auctionManager = newAuctionManager();

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADPOD; });
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 * @typedef {('adpod')} VideoContext
 */

/** @type MediaType */
var NATIVE = 'native';
/** @type MediaType */

var VIDEO = 'video';
/** @type MediaType */

var BANNER = 'banner';
/** @type VideoContext */

var ADPOD = 'adpod';

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OUTSTREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INSTREAM; });
/* unused harmony export videoAdUnit */
/* unused harmony export videoBidder */
/* unused harmony export hasNonVideoBidder */
/* harmony export (immutable) */ __webpack_exports__["d"] = isValidVideoBid;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkVideoBidSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapterManager_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__ = __webpack_require__(18);






var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';
var INSTREAM = 'instream';
/**
 * Helper functions for working with video-enabled adUnits
 */

var videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = function videoBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_array_includes_js___default()(__WEBPACK_IMPORTED_MODULE_0__adapterManager_js__["default"].videoAdapters, bid.bidder);
};
var hasNonVideoBidder = function hasNonVideoBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !videoBidder(bid);
  }).length;
};
/**
 * @typedef {object} VideoBid
 * @property {string} adId id of the bid
 */

/**
 * Validate that the assets required for video context are present on the bid
 * @param {VideoBid} bid Video bid to validate
 * @param index
 * @return {Boolean} If object is valid
 */

function isValidVideoBid(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(index.getMediaTypes(bid), 'video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(videoMediaType, 'context');
  var adUnit = index.getAdUnit(bid); // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content

  return checkVideoBidSetup(bid, adUnit, videoMediaType, context);
}
var checkVideoBidSetup = Object(__WEBPACK_IMPORTED_MODULE_4__hook_js__["b" /* hook */])('sync', function (bid, adUnit, videoMediaType, context) {
  if (videoMediaType && context !== OUTSTREAM) {
    // xml-only video bids require a prebid cache url
    if (!__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      return false;
    }

    return !!(bid.vastUrl || bid.vastXml);
  } // outstream bids require a renderer on the bid or pub-defined on adunit


  if (context === OUTSTREAM) {
    return !!(bid.renderer || adUnit && adUnit.renderer || videoMediaType.renderer);
  }

  return true;
}, 'checkVideoBidSetup');

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detectReferer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRefererInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/**
 * The referer detection module attempts to gather referer information from the current page that prebid.js resides in.
 * The information that it tries to collect includes:
 * The detected top url in the nav bar,
 * Whether it was able to reach the top most window (if for example it was embedded in several iframes),
 * The number of iframes it was embedded in if applicable (by default max ten iframes),
 * A list of the domains of each embedded window if applicable.
 * Canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
 */


/**
 * @param {Window} win Window
 * @returns {Function}
 */

function detectReferer(win) {
  /**
   * This function would return a read-only array of hostnames for all the parent frames.
   * win.location.ancestorOrigins is only supported in webkit browsers. For non-webkit browsers it will return undefined.
   *
   * @param {Window} win Window object
   * @returns {(undefined|Array)} Ancestor origins or undefined
   */
  function getAncestorOrigins(win) {
    try {
      if (!win.location.ancestorOrigins) {
        return;
      }

      return win.location.ancestorOrigins;
    } catch (e) {// Ignore error
    }
  }
  /**
   * This function returns canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   *
   * @param {Object} doc document
   * @returns {string|null}
   */


  function getCanonicalUrl(doc) {
    var pageURL = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('pageUrl');
    if (pageURL) return pageURL;

    try {
      var element = doc.querySelector("link[rel='canonical']");

      if (element !== null) {
        return element.href;
      }
    } catch (e) {// Ignore error
    }

    return null;
  }
  /**
   * Referer info
   * @typedef {Object} refererInfo
   * @property {string} referer detected top url
   * @property {boolean} reachedTop whether prebid was able to walk upto top window or not
   * @property {number} numIframes number of iframes
   * @property {string} stack comma separated urls of all origins
   * @property {string} canonicalUrl canonical URL refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   */

  /**
   * Walk up the windows to get the origin stack and best available referrer, canonical URL, etc.
   *
   * @returns {refererInfo}
   */


  function refererInfo() {
    var stack = [];
    var ancestors = getAncestorOrigins(win);
    var maxNestedIframes = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('maxNestedIframes');
    var currentWindow;
    var bestReferrer;
    var bestCanonicalUrl;
    var reachedTop = false;
    var level = 0;
    var valuesFromAmp = false;
    var inAmpFrame = false;

    do {
      var previousWindow = currentWindow;
      var wasInAmpFrame = inAmpFrame;
      var currentLocation = void 0;
      var crossOrigin = false;
      var foundReferrer = null;
      inAmpFrame = false;
      currentWindow = currentWindow ? currentWindow.parent : win;

      try {
        currentLocation = currentWindow.location.href || null;
      } catch (e) {
        crossOrigin = true;
      }

      if (crossOrigin) {
        if (wasInAmpFrame) {
          var context = previousWindow.context;

          try {
            foundReferrer = context.sourceUrl;
            bestReferrer = foundReferrer;
            valuesFromAmp = true;

            if (currentWindow === win.top) {
              reachedTop = true;
            }

            if (context.canonicalUrl) {
              bestCanonicalUrl = context.canonicalUrl;
            }
          } catch (e) {
            /* Do nothing */
          }
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Trying to access cross domain iframe. Continuing without referrer and location');

          try {
            var referrer = previousWindow.document.referrer;

            if (referrer) {
              foundReferrer = referrer;

              if (currentWindow === win.top) {
                reachedTop = true;
              }
            }
          } catch (e) {
            /* Do nothing */
          }

          if (!foundReferrer && ancestors && ancestors[level - 1]) {
            foundReferrer = ancestors[level - 1];
          }

          if (foundReferrer && !valuesFromAmp) {
            bestReferrer = foundReferrer;
          }
        }
      } else {
        if (currentLocation) {
          foundReferrer = currentLocation;
          bestReferrer = foundReferrer;
          valuesFromAmp = false;

          if (currentWindow === win.top) {
            reachedTop = true;
            var canonicalUrl = getCanonicalUrl(currentWindow.document);

            if (canonicalUrl) {
              bestCanonicalUrl = canonicalUrl;
            }
          }
        }

        if (currentWindow.context && currentWindow.context.sourceUrl) {
          inAmpFrame = true;
        }
      }

      stack.push(foundReferrer);
      level++;
    } while (currentWindow !== win.top && level < maxNestedIframes);

    stack.reverse();
    return {
      referer: bestReferrer || null,
      reachedTop: reachedTop,
      isAmp: valuesFromAmp,
      numIframes: level - 1,
      stack: stack,
      canonicalUrl: bestCanonicalUrl || null
    };
  }

  return refererInfo;
}
var getRefererInfo = detectReferer(window);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var isArrayIteratorMethod = __webpack_require__(93);
var toLength = __webpack_require__(54);
var bind = __webpack_require__(25);
var getIteratorMethod = __webpack_require__(58);
var iteratorClose = __webpack_require__(94);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(228);
var entryUnbind = __webpack_require__(56);

module.exports = entryUnbind('Array', 'findIndex');


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $findIndex = __webpack_require__(64).findIndex;
var addToUnscopables = __webpack_require__(55);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var shared = __webpack_require__(88);
var has = __webpack_require__(31);
var uid = __webpack_require__(67);
var NATIVE_SYMBOL = __webpack_require__(89);
var USE_SYMBOL_AS_UID = __webpack_require__(119);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listenMessagesFromCreative;
/* unused harmony export getReplier */
/* unused harmony export receiveMessage */
/* unused harmony export _sendAdToCreative */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Renderer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adRendering_js__ = __webpack_require__(104);
/* Secure Creatives
  Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
   access to a publisher page from creative payloads.
 */










var BID_WON = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.BID_WON;
var STALE_RENDER = __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.STALE_RENDER;
var HANDLER_MAP = {
  'Prebid Request': handleRenderRequest,
  'Prebid Native': handleNativeRequest,
  'Prebid Event': handleEventRequest
};
function listenMessagesFromCreative() {
  window.addEventListener('message', receiveMessage, false);
}
function getReplier(ev) {
  if (ev.origin == null && ev.ports.length === 0) {
    return function () {
      var msg = 'Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870';
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])(msg);
      throw new Error(msg);
    };
  } else if (ev.ports.length > 0) {
    return function (message) {
      ev.ports[0].postMessage(JSON.stringify(message));
    };
  } else {
    return function (message) {
      ev.source.postMessage(JSON.stringify(message), ev.origin);
    };
  }
}
function receiveMessage(ev) {
  var key = ev.message ? 'message' : 'data';
  var data = {};

  try {
    data = JSON.parse(ev[key]);
  } catch (e) {
    return;
  }

  if (data && data.adId && data.message) {
    var adObject = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(__WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].getBidsReceived(), function (bid) {
      return bid.adId === data.adId;
    });

    if (HANDLER_MAP.hasOwnProperty(data.message)) {
      HANDLER_MAP[data.message](getReplier(ev), data, adObject);
    }
  }
}

function handleRenderRequest(reply, data, adObject) {
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_9__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
      message: "Cannot find ad '".concat(data.adId, "' for cross-origin render request"),
      id: data.adId
    });
    return;
  }

  if (adObject.status === __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.BID_STATUS.RENDERED) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Ad id ".concat(adObject.adId, " has been rendered before"));
    __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(STALE_RENDER, adObject);

    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["deepAccess"])(__WEBPACK_IMPORTED_MODULE_8__config_js__["b" /* config */].getConfig('auctionOptions'), 'suppressStaleRender')) {
      return;
    }
  }

  try {
    _sendAdToCreative(adObject, reply);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_9__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.AD_RENDER_FAILED_REASON.EXCEPTION,
      message: e.message,
      id: data.adId,
      bid: adObject
    });
    return;
  } // save winning bids


  __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
  __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
}

function handleNativeRequest(reply, data, adObject) {
  // handle this script from native template in an ad server
  // window.parent.postMessage(JSON.stringify({
  //   message: 'Prebid Native',
  //   adId: '%%PATTERN:hb_adid%%'
  // }), '*');
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }

  switch (data.action) {
    case 'assetRequest':
      reply(Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["e" /* getAssetMessage */])(data, adObject));
      break;

    case 'allAssetRequest':
      reply(Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["d" /* getAllAssetsMessage */])(data, adObject));
      break;

    case 'resizeNativeHeight':
      adObject.height = data.height;
      adObject.width = data.width;
      resizeRemoteCreative(adObject);
      break;

    default:
      var trackerType = Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["c" /* fireNativeTrackers */])(data, adObject);

      if (trackerType === 'click') {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
  }
}

function handleEventRequest(reply, data, adObject) {
  if (adObject == null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Cannot find ad '".concat(data.adId, "' for x-origin event request"));
    return;
  }

  if (adObject.status !== __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.BID_STATUS.RENDERED) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Received x-origin event request without corresponding render request for ad '".concat(data.adId, "'"));
    return;
  }

  switch (data.event) {
    case __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.AD_RENDER_FAILED:
      Object(__WEBPACK_IMPORTED_MODULE_9__adRendering_js__["a" /* emitAdRenderFail */])({
        bid: adObject,
        id: data.adId,
        reason: data.info.reason,
        message: data.info.message
      });
      break;

    case __WEBPACK_IMPORTED_MODULE_2__constants_json___default.a.EVENTS.AD_RENDER_SUCCEEDED:
      Object(__WEBPACK_IMPORTED_MODULE_9__adRendering_js__["b" /* emitAdRenderSucceeded */])({
        doc: null,
        bid: adObject,
        id: data.adId
      });
      break;

    default:
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logError"])("Received x-origin event request for unsupported event: '".concat(data.event, "' (adId: '").concat(data.adId, "')"));
  }
}

function _sendAdToCreative(adObject, reply) {
  var adId = adObject.adId,
      ad = adObject.ad,
      adUrl = adObject.adUrl,
      width = adObject.width,
      height = adObject.height,
      renderer = adObject.renderer,
      cpm = adObject.cpm; // rendering for outstream safeframe

  if (Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["b" /* executeRenderer */])(renderer, adObject);
  } else if (adId) {
    resizeRemoteCreative(adObject);
    reply({
      message: 'Prebid Response',
      ad: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(ad, cpm),
      adUrl: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(adUrl, cpm),
      adId: adId,
      width: width,
      height: height
    });
  }
}

function resizeRemoteCreative(_ref) {
  var adId = _ref.adId,
      adUnitCode = _ref.adUnitCode,
      width = _ref.width,
      height = _ref.height;
  // resize both container div + iframe
  ['div', 'iframe'].forEach(function (elmType) {
    // not select element that gets removed after dfp render
    var element = getElementByAdUnit(elmType + ':not([style*="display: none"])');

    if (element) {
      var elementStyle = element.style;
      elementStyle.width = width + 'px';
      elementStyle.height = height + 'px';
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Unable to locate matching page element for adUnitCode ".concat(adUnitCode, ".  Can't resize it to ad's dimensions.  Please review setup."));
    }
  });

  function getElementByAdUnit(elmType) {
    var id = getElementIdBasedOnAdServer(adId, adUnitCode);
    var parentDivEle = document.getElementById(id);
    return parentDivEle && parentDivEle.querySelector(elmType);
  }

  function getElementIdBasedOnAdServer(adId, adUnitCode) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["isGptPubadsDefined"])()) {
      return getDfpElementId(adId);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["isApnGetTagDefined"])()) {
      return getAstElementId(adUnitCode);
    } else {
      return adUnitCode;
    }
  }

  function getDfpElementId(adId) {
    var slot = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(window.googletag.pubads().getSlots(), function (slot) {
      return __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(slot.getTargetingKeys(), function (key) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(slot.getTargeting(key), adId);
      });
    });
    return slot ? slot.getSlotElementId() : null;
  }

  function getAstElementId(adUnitCode) {
    var astTag = window.apntag.getTag(adUnitCode);
    return astTag && astTag.targetId;
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(24);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(45);
var global = __webpack_require__(27);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUCTION_STARTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUCTION_IN_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUCTION_COMPLETED; });
/* harmony export (immutable) */ __webpack_exports__["k"] = newAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _addBidResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addBidderRequests; });
/* unused harmony export bidsBackCallback */
/* unused harmony export auctionCallbacks */
/* harmony export (immutable) */ __webpack_exports__["g"] = doCallbacksIfTimedout;
/* harmony export (immutable) */ __webpack_exports__["d"] = addBidToAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return callPrebidCache; });
/* unused harmony export getMediaTypeGranularity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPriceGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPriceByGranularity; });
/* unused harmony export getAdvertiserDomain */
/* harmony export (immutable) */ __webpack_exports__["j"] = getStandardBidderSettings;
/* unused harmony export getKeyValueTargetingPairs */
/* unused harmony export adjustBids */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoCache_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Renderer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userSync_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__video_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__ = __webpack_require__(42);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Module for auction instances.
 *
 * In Prebid 0.x, $$PREBID_GLOBAL$$ had _bidsRequested and _bidsReceived as public properties.
 * Starting 1.0, Prebid will support concurrent auctions. Each auction instance will store private properties, bidsRequested and bidsReceived.
 *
 * AuctionManager will create instance of auction and will store all the auctions.
 *
 */

/**
  * @typedef {Object} AdUnit An object containing the adUnit configuration.
  *
  * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
  *   one as is used in the call to registerBidAdapter
  * @property {Array.<size>} sizes A list of size for adUnit.
  * @property {object} params Any bidder-specific params which the publisher used in their bid request.
  *   This is guaranteed to have passed the spec.areParamsValid() test.
  */

/**
 * @typedef {Array.<number>} size
 */

/**
 * @typedef {Array.<string>} AdUnitCode
 */

/**
 * @typedef {Object} BidderRequest
 *
 * @property {string} bidderCode - adUnit bidder
 * @property {number} auctionId - random UUID
 * @property {string} bidderRequestId - random string, unique key set on all bidRequest.bids[]
 * @property {Array.<Bid>} bids
 * @property {number} auctionStart - Date.now() at auction start
 * @property {number} timeout - callback timeout
 * @property {refererInfo} refererInfo - referer info object
 * @property {string} [tid] - random UUID (used for s2s)
 * @property {string} [src] - s2s or client (used for s2s)
 */

/**
 * @typedef {Object} BidReceived
 * //TODO add all properties
 */

/**
 * @typedef {Object} Auction
 *
 * @property {function(): string} getAuctionStatus - returns the auction status which can be any one of 'started', 'in progress' or 'completed'
 * @property {function(): AdUnit[]} getAdUnits - return the adUnits for this auction instance
 * @property {function(): AdUnitCode[]} getAdUnitCodes - return the adUnitCodes for this auction instance
 * @property {function(): BidRequest[]} getBidRequests - get all bid requests for this auction instance
 * @property {function(): BidReceived[]} getBidsReceived - get all bid received for this auction instance
 * @property {function(): void} startAuctionTimer - sets the bidsBackHandler callback and starts the timer for auction
 * @property {function(): void} callBids - sends requests to all adapters for bids
 */














var syncUsers = __WEBPACK_IMPORTED_MODULE_6__userSync_js__["a" /* userSync */].syncUsers;

var adapterManager = __webpack_require__(9).default;

var events = __webpack_require__(10);

var CONSTANTS = __webpack_require__(5);

var AUCTION_STARTED = 'started';
var AUCTION_IN_PROGRESS = 'inProgress';
var AUCTION_COMPLETED = 'completed'; // register event for bid adjustment

events.on(CONSTANTS.EVENTS.BID_ADJUSTMENT, function (bid) {
  adjustBids(bid);
});
var MAX_REQUESTS_PER_ORIGIN = 4;
var outstandingRequests = {};
var sourceInfo = {};
var queuedCalls = [];
/**
  * Creates new auction instance
  *
  * @param {Object} requestConfig
  * @param {AdUnit} requestConfig.adUnits
  * @param {AdUnitCode} requestConfig.adUnitCodes
  * @param {function():void} requestConfig.callback
  * @param {number} requestConfig.cbTimeout
  * @param {Array.<string>} requestConfig.labels
  * @param {string} requestConfig.auctionId
  *
  * @returns {Auction} auction instance
  */

function newAuction(_ref) {
  var adUnits = _ref.adUnits,
      adUnitCodes = _ref.adUnitCodes,
      callback = _ref.callback,
      cbTimeout = _ref.cbTimeout,
      labels = _ref.labels,
      auctionId = _ref.auctionId;
  var _adUnits = adUnits;
  var _labels = labels;
  var _adUnitCodes = adUnitCodes;
  var _bidderRequests = [];
  var _bidsReceived = [];
  var _noBids = [];

  var _auctionStart;

  var _auctionEnd;

  var _auctionId = auctionId || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();

  var _auctionStatus;

  var _callback = callback;

  var _timer;

  var _timeout = cbTimeout;
  var _winningBids = [];

  var _timelyBidders = new Set();

  function addBidRequests(bidderRequests) {
    _bidderRequests = _bidderRequests.concat(bidderRequests);
  }

  function addBidReceived(bidsReceived) {
    _bidsReceived = _bidsReceived.concat(bidsReceived);
  }

  function addNoBid(noBid) {
    _noBids = _noBids.concat(noBid);
  }

  function getProperties() {
    return {
      auctionId: _auctionId,
      timestamp: _auctionStart,
      auctionEnd: _auctionEnd,
      auctionStatus: _auctionStatus,
      adUnits: _adUnits,
      adUnitCodes: _adUnitCodes,
      labels: _labels,
      bidderRequests: _bidderRequests,
      noBids: _noBids,
      bidsReceived: _bidsReceived,
      winningBids: _winningBids,
      timeout: _timeout
    };
  }

  function startAuctionTimer() {
    var timedOut = true;
    var timeoutCallback = executeCallback.bind(null, timedOut);
    var timer = setTimeout(timeoutCallback, _timeout);
    _timer = timer;
  }

  function executeCallback(timedOut, cleartimer) {
    // clear timer when done calls executeCallback
    if (cleartimer) {
      clearTimeout(_timer);
    }

    if (_auctionEnd === undefined) {
      var timedOutBidders = [];

      if (timedOut) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Auction ".concat(_auctionId, " timedOut"));
        timedOutBidders = getTimedOutBids(_bidderRequests, _timelyBidders);

        if (timedOutBidders.length) {
          events.emit(CONSTANTS.EVENTS.BID_TIMEOUT, timedOutBidders);
        }
      }

      _auctionStatus = AUCTION_COMPLETED;
      _auctionEnd = Date.now();
      events.emit(CONSTANTS.EVENTS.AUCTION_END, getProperties());
      bidsBackCallback(_adUnits, function () {
        try {
          if (_callback != null) {
            var _adUnitCodes2 = _adUnitCodes;

            var bids = _bidsReceived.filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(__WEBPACK_IMPORTED_MODULE_0__utils_js__["adUnitsFilter"], this, _adUnitCodes2)).reduce(groupByPlacement, {});

            _callback.apply(pbjs, [bids, timedOut, _auctionId]);

            _callback = null;
          }
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error executing bidsBackHandler', null, e);
        } finally {
          // Calling timed out bidders
          if (timedOutBidders.length) {
            adapterManager.callTimedOutBidders(adUnits, timedOutBidders, _timeout);
          } // Only automatically sync if the publisher has not chosen to "enableOverride"


          var userSyncConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('userSync') || {};

          if (!userSyncConfig.enableOverride) {
            // Delay the auto sync by the config delay
            syncUsers(userSyncConfig.syncDelay);
          }
        }
      });
    }
  }

  function auctionDone() {
    __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].resetBidder(); // when all bidders have called done callback atleast once it means auction is complete

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Bids Received for Auction with id: ".concat(_auctionId), _bidsReceived);
    _auctionStatus = AUCTION_COMPLETED;
    executeCallback(false, true);
  }

  function onTimelyResponse(bidderCode) {
    _timelyBidders.add(bidderCode);
  }

  function callBids() {
    _auctionStatus = AUCTION_STARTED;
    _auctionStart = Date.now();
    var bidRequests = adapterManager.makeBidRequests(_adUnits, _auctionStart, _auctionId, _timeout, _labels);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Bids Requested for Auction with id: ".concat(_auctionId), bidRequests);

    if (bidRequests.length < 1) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('No valid bid requests returned for auction');
      auctionDone();
    } else {
      addBidderRequests.call({
        dispatch: addBidderRequestsCallback,
        context: this
      }, bidRequests);
    }
  }
  /**
   * callback executed after addBidderRequests completes
   * @param {BidRequest[]} bidRequests
   */


  function addBidderRequestsCallback(bidRequests) {
    var _this = this;

    bidRequests.forEach(function (bidRequest) {
      addBidRequests(bidRequest);
    });
    var requests = {};
    var call = {
      bidRequests: bidRequests,
      run: function run() {
        startAuctionTimer();
        _auctionStatus = AUCTION_IN_PROGRESS;
        events.emit(CONSTANTS.EVENTS.AUCTION_INIT, getProperties());
        var callbacks = auctionCallbacks(auctionDone, _this);
        adapterManager.callBids(_adUnits, bidRequests, callbacks.addBidResponse, callbacks.adapterDone, {
          request: function request(source, origin) {
            increment(outstandingRequests, origin);
            increment(requests, source);

            if (!sourceInfo[source]) {
              sourceInfo[source] = {
                SRA: true,
                origin: origin
              };
            }

            if (requests[source] > 1) {
              sourceInfo[source].SRA = false;
            }
          },
          done: function done(origin) {
            outstandingRequests[origin]--;

            if (queuedCalls[0]) {
              if (runIfOriginHasCapacity(queuedCalls[0])) {
                queuedCalls.shift();
              }
            }
          }
        }, _timeout, onTimelyResponse);
      }
    };

    if (!runIfOriginHasCapacity(call)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('queueing auction due to limited endpoint capacity');
      queuedCalls.push(call);
    }

    function runIfOriginHasCapacity(call) {
      var hasCapacity = true;
      var maxRequests = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('maxRequestsPerOrigin') || MAX_REQUESTS_PER_ORIGIN;
      call.bidRequests.some(function (bidRequest) {
        var requests = 1;
        var source = typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC ? 's2s' : bidRequest.bidderCode; // if we have no previous info on this source just let them through

        if (sourceInfo[source]) {
          if (sourceInfo[source].SRA === false) {
            // some bidders might use more than the MAX_REQUESTS_PER_ORIGIN in a single auction.  In those cases
            // set their request count to MAX_REQUESTS_PER_ORIGIN so the auction isn't permanently queued waiting
            // for capacity for that bidder
            requests = Math.min(bidRequest.bids.length, maxRequests);
          }

          if (outstandingRequests[sourceInfo[source].origin] + requests > maxRequests) {
            hasCapacity = false;
          }
        } // return only used for terminating this .some() iteration early if it is determined we don't have capacity


        return !hasCapacity;
      });

      if (hasCapacity) {
        call.run();
      }

      return hasCapacity;
    }

    function increment(obj, prop) {
      if (typeof obj[prop] === 'undefined') {
        obj[prop] = 1;
      } else {
        obj[prop]++;
      }
    }
  }

  function addWinningBid(winningBid) {
    _winningBids = _winningBids.concat(winningBid);
    adapterManager.callBidWonBidder(winningBid.bidder, winningBid, adUnits);
  }

  function setBidTargeting(bid) {
    adapterManager.callSetTargetingBidder(bid.bidder, bid);
  }

  return {
    addBidReceived: addBidReceived,
    addNoBid: addNoBid,
    executeCallback: executeCallback,
    callBids: callBids,
    addWinningBid: addWinningBid,
    setBidTargeting: setBidTargeting,
    getWinningBids: function getWinningBids() {
      return _winningBids;
    },
    getAuctionStart: function getAuctionStart() {
      return _auctionStart;
    },
    getTimeout: function getTimeout() {
      return _timeout;
    },
    getAuctionId: function getAuctionId() {
      return _auctionId;
    },
    getAuctionStatus: function getAuctionStatus() {
      return _auctionStatus;
    },
    getAdUnits: function getAdUnits() {
      return _adUnits;
    },
    getAdUnitCodes: function getAdUnitCodes() {
      return _adUnitCodes;
    },
    getBidRequests: function getBidRequests() {
      return _bidderRequests;
    },
    getBidsReceived: function getBidsReceived() {
      return _bidsReceived;
    },
    getNoBids: function getNoBids() {
      return _noBids;
    }
  };
}

var _addBidResponse = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (adUnitCode, bid) {
  this.dispatch.call(null, adUnitCode, bid);
}, 'addBidResponse');


var addBidderRequests = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (bidderRequests) {
  this.dispatch.call(this.context, bidderRequests);
}, 'addBidderRequests');
var bidsBackCallback = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (adUnits, callback) {
  if (callback) {
    callback();
  }
}, 'bidsBackCallback');
function auctionCallbacks(auctionDone, auctionInstance) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  var outstandingBidsAdded = 0;
  var allAdapterCalledDone = false;
  var bidderRequestsDone = new Set();
  var bidResponseMap = {};
  var ready = {};

  function waitFor(requestId, result) {
    if (ready[requestId] == null) {
      ready[requestId] = Promise.resolve();
    }

    ready[requestId] = ready[requestId].then(function () {
      return Promise.resolve(result).catch(function () {});
    });
  }

  function guard(bidderRequest, fn) {
    var timeout = bidderRequest.timeout;

    if (timeout == null || timeout > auctionInstance.getTimeout()) {
      timeout = auctionInstance.getTimeout();
    }

    var timeRemaining = auctionInstance.getAuctionStart() + timeout - Date.now();
    var wait = ready[bidderRequest.bidderRequestId];
    var orphanWait = ready['']; // also wait for "orphan" responses that are not associated with any request

    if ((wait != null || orphanWait != null) && timeRemaining > 0) {
      Promise.race([new Promise(function (resolve) {
        return setTimeout(resolve, timeRemaining);
      }), Promise.resolve(orphanWait).then(function () {
        return wait;
      })]).then(fn);
    } else {
      fn();
    }
  }

  function afterBidAdded() {
    outstandingBidsAdded--;

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  function handleBidResponse(adUnitCode, bid) {
    bidResponseMap[bid.requestId] = true;
    outstandingBidsAdded++;
    var auctionId = auctionInstance.getAuctionId();
    var bidResponse = getPreparedBidForAuction({
      adUnitCode: adUnitCode,
      bid: bid,
      auctionId: auctionId
    });

    if (bidResponse.mediaType === 'video') {
      tryAddVideoBid(auctionInstance, bidResponse, afterBidAdded);
    } else {
      addBidToAuction(auctionInstance, bidResponse);
      afterBidAdded();
    }
  }

  function _adapterDone() {
    var bidderRequest = this;
    var bidderRequests = auctionInstance.getBidRequests();
    var auctionOptionsConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('auctionOptions');
    bidderRequestsDone.add(bidderRequest);

    if (auctionOptionsConfig && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isEmpty"])(auctionOptionsConfig)) {
      var secondaryBidders = auctionOptionsConfig.secondaryBidders;

      if (secondaryBidders && !bidderRequests.every(function (bidder) {
        return __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(secondaryBidders, bidder.bidderCode);
      })) {
        bidderRequests = bidderRequests.filter(function (request) {
          return !__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(secondaryBidders, request.bidderCode);
        });
      }
    }

    allAdapterCalledDone = bidderRequests.every(function (bidderRequest) {
      return bidderRequestsDone.has(bidderRequest);
    });
    bidderRequest.bids.forEach(function (bid) {
      if (!bidResponseMap[bid.bidId]) {
        auctionInstance.addNoBid(bid);
        events.emit(CONSTANTS.EVENTS.NO_BID, bid);
      }
    });

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  return {
    addBidResponse: function addBidResponse(adUnit, bid) {
      var bidderRequest = index.getBidderRequest(bid);
      waitFor(bidderRequest && bidderRequest.bidderRequestId || '', _addBidResponse.call({
        dispatch: handleBidResponse
      }, adUnit, bid));
    },
    adapterDone: function adapterDone() {
      guard(this, _adapterDone.bind(this));
    }
  };
}
function doCallbacksIfTimedout(auctionInstance, bidResponse) {
  if (bidResponse.timeToRespond > auctionInstance.getTimeout() + __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('timeoutBuffer')) {
    auctionInstance.executeCallback(true);
  }
} // Add a bid to the auction.

function addBidToAuction(auctionInstance, bidResponse) {
  setupBidTargeting(bidResponse);
  events.emit(CONSTANTS.EVENTS.BID_RESPONSE, bidResponse);
  auctionInstance.addBidReceived(bidResponse);
  doCallbacksIfTimedout(auctionInstance, bidResponse);
} // Video bids may fail if the cache is down, or there's trouble on the network.

function tryAddVideoBid(auctionInstance, bidResponse, afterBidAdded) {
  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref3$index = _ref3.index,
      index = _ref3$index === void 0 ? __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__["a" /* auctionManager */].index : _ref3$index;

  var addBid = true;
  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(index.getMediaTypes({
    requestId: bidResponse.originalRequestId || bidResponse.requestId,
    transactionId: bidResponse.transactionId
  }), 'video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(videoMediaType, 'context');

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && context !== __WEBPACK_IMPORTED_MODULE_10__video_js__["b" /* OUTSTREAM */]) {
    if (!bidResponse.videoCacheKey || __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.ignoreBidderCacheKey')) {
      addBid = false;
      callPrebidCache(auctionInstance, bidResponse, afterBidAdded, videoMediaType);
    } else if (!bidResponse.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('videoCacheKey specified but not required vastUrl for video bid');
      addBid = false;
    }
  }

  if (addBid) {
    addBidToAuction(auctionInstance, bidResponse);
    afterBidAdded();
  }
}

var callPrebidCache = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (auctionInstance, bidResponse, afterBidAdded, videoMediaType) {
  Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["b" /* store */])([bidResponse], function (error, cacheIds) {
    if (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Failed to save to the video cache: ".concat(error, ". Video bid must be discarded."));
      doCallbacksIfTimedout(auctionInstance, bidResponse);
    } else {
      if (cacheIds[0].uuid === '') {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.");
        doCallbacksIfTimedout(auctionInstance, bidResponse);
      } else {
        bidResponse.videoCacheKey = cacheIds[0].uuid;

        if (!bidResponse.vastUrl) {
          bidResponse.vastUrl = Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["a" /* getCacheUrl */])(bidResponse.videoCacheKey);
        }

        addBidToAuction(auctionInstance, bidResponse);
        afterBidAdded();
      }
    }
  });
}, 'callPrebidCache'); // Postprocess the bids so that all the universal properties exist, no matter which bidder they came from.
// This should be called before addBidToAuction().

function getPreparedBidForAuction(_ref4) {
  var adUnitCode = _ref4.adUnitCode,
      bid = _ref4.bid,
      auctionId = _ref4.auctionId;

  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$index = _ref5.index,
      index = _ref5$index === void 0 ? __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__["a" /* auctionManager */].index : _ref5$index;

  var bidderRequest = index.getBidderRequest(bid);
  var start = bidderRequest && bidderRequest.start || bid.requestTimestamp;

  var bidObject = _extends({}, bid, {
    auctionId: auctionId,
    responseTimestamp: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(),
    requestTimestamp: start,
    cpm: parseFloat(bid.cpm) || 0,
    bidder: bid.bidderCode,
    adUnitCode: adUnitCode
  });

  bidObject.timeToRespond = bidObject.responseTimestamp - bidObject.requestTimestamp; // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.

  events.emit(CONSTANTS.EVENTS.BID_ADJUSTMENT, bidObject); // a publisher-defined renderer can be used to render bids

  var adUnitRenderer = index.getAdUnit(bidObject).renderer; // a publisher can also define a renderer for a mediaType

  var bidObjectMediaType = bidObject.mediaType;
  var mediaTypes = index.getMediaTypes(bidObject);
  var bidMediaType = mediaTypes && mediaTypes[bidObjectMediaType];
  var mediaTypeRenderer = bidMediaType && bidMediaType.renderer;
  var renderer = null; // the renderer for the mediaType takes precendence

  if (mediaTypeRenderer && mediaTypeRenderer.url && mediaTypeRenderer.render && !(mediaTypeRenderer.backupOnly === true && bid.renderer)) {
    renderer = mediaTypeRenderer;
  } else if (adUnitRenderer && adUnitRenderer.url && adUnitRenderer.render && !(adUnitRenderer.backupOnly === true && bid.renderer)) {
    renderer = adUnitRenderer;
  }

  if (renderer) {
    bidObject.renderer = __WEBPACK_IMPORTED_MODULE_4__Renderer_js__["a" /* Renderer */].install({
      url: renderer.url
    });
    bidObject.renderer.setRender(renderer.render);
  } // Use the config value 'mediaTypeGranularity' if it has been defined for mediaType, else use 'customPriceBucket'


  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, mediaTypes, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var priceStringsObj = Object(__WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__["a" /* getPriceBucketString */])(bidObject.cpm, _typeof(mediaTypeGranularity) === 'object' ? mediaTypeGranularity : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('customPriceBucket'), __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('currency.granularityMultiplier'));
  bidObject.pbLg = priceStringsObj.low;
  bidObject.pbMg = priceStringsObj.med;
  bidObject.pbHg = priceStringsObj.high;
  bidObject.pbAg = priceStringsObj.auto;
  bidObject.pbDg = priceStringsObj.dense;
  bidObject.pbCg = priceStringsObj.custom;
  return bidObject;
}

function setupBidTargeting(bidObject) {
  var keyValues;
  var cpmCheck = __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].get(bidObject.bidderCode, 'allowZeroCpmBids') === true ? bidObject.cpm >= 0 : bidObject.cpm > 0;

  if (bidObject.bidderCode && (cpmCheck || bidObject.dealId)) {
    keyValues = getKeyValueTargetingPairs(bidObject.bidderCode, bidObject);
  } // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs


  bidObject.adserverTargeting = _extends(bidObject.adserverTargeting || {}, keyValues);
}
/**
 * @param {MediaType} mediaType
 * @param mediaTypes media types map from adUnit
 * @param {MediaTypePriceGranularity} [mediaTypePriceGranularity]
 * @returns {(Object|string|undefined)}
 */


function getMediaTypeGranularity(mediaType, mediaTypes, mediaTypePriceGranularity) {
  if (mediaType && mediaTypePriceGranularity) {
    if (mediaType === __WEBPACK_IMPORTED_MODULE_11__mediaTypes_js__["d" /* VIDEO */]) {
      var context = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, "".concat(__WEBPACK_IMPORTED_MODULE_11__mediaTypes_js__["d" /* VIDEO */], ".context"), 'instream');

      if (mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_11__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)]) {
        return mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_11__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)];
      }
    }

    return mediaTypePriceGranularity[mediaType];
  }
}
/**
 * This function returns the price granularity defined. It can be either publisher defined or default value
 * @param bid bid response object
 * @param index
 * @returns {string} granularity
 */

var getPriceGranularity = function getPriceGranularity(bid) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$index = _ref6.index,
      index = _ref6$index === void 0 ? __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__["a" /* auctionManager */].index : _ref6$index;

  // Use the config value 'mediaTypeGranularity' if it has been set for mediaType, else use 'priceGranularity'
  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, index.getMediaTypes(bid), __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var granularity = typeof bid.mediaType === 'string' && mediaTypeGranularity ? typeof mediaTypeGranularity === 'string' ? mediaTypeGranularity : 'custom' : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('priceGranularity');
  return granularity;
};
/**
 * This function returns a function to get bid price by price granularity
 * @param {string} granularity
 * @returns {function}
 */

var getPriceByGranularity = function getPriceByGranularity(granularity) {
  return function (bid) {
    var bidGranularity = granularity || getPriceGranularity(bid);

    if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.AUTO) {
      return bid.pbAg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.DENSE) {
      return bid.pbDg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.LOW) {
      return bid.pbLg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.MEDIUM) {
      return bid.pbMg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.HIGH) {
      return bid.pbHg;
    } else if (bidGranularity === CONSTANTS.GRANULARITY_OPTIONS.CUSTOM) {
      return bid.pbCg;
    }
  };
};
/**
 * This function returns a function to get first advertiser domain from bid response meta
 * @returns {function}
 */

var getAdvertiserDomain = function getAdvertiserDomain() {
  return function (bid) {
    return bid.meta && bid.meta.advertiserDomains && bid.meta.advertiserDomains.length > 0 ? bid.meta.advertiserDomains[0] : '';
  };
}; // factory for key value objs

function createKeyVal(key, value) {
  return {
    key: key,
    val: typeof value === 'function' ? function (bidResponse, bidReq) {
      return value(bidResponse, bidReq);
    } : function (bidResponse) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getValue"])(bidResponse, value);
    }
  };
}

function defaultAdserverTargeting() {
  var TARGETING_KEYS = CONSTANTS.TARGETING_KEYS;
  return [createKeyVal(TARGETING_KEYS.BIDDER, 'bidderCode'), createKeyVal(TARGETING_KEYS.AD_ID, 'adId'), createKeyVal(TARGETING_KEYS.PRICE_BUCKET, getPriceByGranularity()), createKeyVal(TARGETING_KEYS.SIZE, 'size'), createKeyVal(TARGETING_KEYS.DEAL, 'dealId'), createKeyVal(TARGETING_KEYS.SOURCE, 'source'), createKeyVal(TARGETING_KEYS.FORMAT, 'mediaType'), createKeyVal(TARGETING_KEYS.ADOMAIN, getAdvertiserDomain())];
}
/**
 * @param {string} mediaType
 * @param {string} bidderCode
 * @param {BidRequest} bidReq
 * @returns {*}
 */


function getStandardBidderSettings(mediaType, bidderCode) {
  var TARGETING_KEYS = CONSTANTS.TARGETING_KEYS;

  var standardSettings = _extends({}, __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].settingsFor(null));

  if (!standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = defaultAdserverTargeting();
  }

  if (mediaType === 'video') {
    var adserverTargeting = standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING].slice();
    standardSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = adserverTargeting; // Adding hb_uuid + hb_cache_id

    [TARGETING_KEYS.UUID, TARGETING_KEYS.CACHE_ID].forEach(function (targetingKeyVal) {
      if (typeof __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(adserverTargeting, function (kvPair) {
        return kvPair.key === targetingKeyVal;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(targetingKeyVal, 'videoCacheKey'));
      }
    }); // Adding hb_cache_host

    if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && (!bidderCode || __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].get(bidderCode, 'sendStandardTargeting') !== false)) {
      var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["parseUrl"])(__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url'));

      if (typeof __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(adserverTargeting, function (targetingKeyVal) {
        return targetingKeyVal.key === TARGETING_KEYS.CACHE_HOST;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(TARGETING_KEYS.CACHE_HOST, function (bidResponse) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bidResponse, "adserverTargeting.".concat(TARGETING_KEYS.CACHE_HOST)) ? bidResponse.adserverTargeting[TARGETING_KEYS.CACHE_HOST] : urlInfo.hostname;
        }));
      }
    }
  }

  return standardSettings;
}
function getKeyValueTargetingPairs(bidderCode, custBidObj) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref7$index = _ref7.index,
      index = _ref7$index === void 0 ? __WEBPACK_IMPORTED_MODULE_12__auctionManager_js__["a" /* auctionManager */].index : _ref7$index;

  if (!custBidObj) {
    return {};
  }

  var bidRequest = index.getBidRequest(custBidObj);
  var keyValues = {}; // 1) set the keys from "standard" setting or from prebid defaults
  // initialize default if not set

  var standardSettings = getStandardBidderSettings(custBidObj.mediaType, bidderCode);
  setKeys(keyValues, standardSettings, custBidObj, bidRequest); // 2) set keys from specific bidder setting override if they exist

  if (bidderCode && __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].getOwn(bidderCode, CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING)) {
    setKeys(keyValues, __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].ownSettingsFor(bidderCode), custBidObj, bidRequest);
    custBidObj.sendStandardTargeting = __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].get(bidderCode, 'sendStandardTargeting');
  } // set native key value targeting


  if (custBidObj['native']) {
    keyValues = _extends({}, keyValues, Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["f" /* getNativeTargeting */])(custBidObj));
  }

  return keyValues;
}

function setKeys(keyValues, bidderSettings, custBidObj, bidReq) {
  var targeting = bidderSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["_each"])(targeting, function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;

    if (keyValues[key]) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('The key: ' + key + ' is being overwritten');
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(value)) {
      try {
        value = value(custBidObj, bidReq);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidmanager', 'ERROR', e);
      }
    }

    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === CONSTANTS.TARGETING_KEYS.DEAL) && ( // hb_deal is suppressed automatically if not set
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isEmptyStr"])(value) || value === null || value === undefined)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  });

  return keyValues;
}

function adjustBids(bid) {
  var code = bid.bidderCode;
  var bidPriceAdjusted = bid.cpm;
  var bidCpmAdjustment = __WEBPACK_IMPORTED_MODULE_13__bidderSettings_js__["a" /* bidderSettings */].get(code || null, 'bidCpmAdjustment');

  if (bidCpmAdjustment && typeof bidCpmAdjustment === 'function') {
    try {
      bidPriceAdjusted = bidCpmAdjustment(bid.cpm, _extends({}, bid));
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error during bid adjustment', 'bidmanager.js', e);
    }
  }

  if (bidPriceAdjusted >= 0) {
    bid.cpm = bidPriceAdjusted;
  }
}
/**
 * groupByPlacement is a reduce function that converts an array of Bid objects
 * to an object with placement codes as keys, with each key representing an object
 * with an array of `Bid` objects for that placement
 * @returns {*} as { [adUnitCode]: { bids: [Bid, Bid, Bid] } }
 */

function groupByPlacement(bidsByPlacement, bid) {
  if (!bidsByPlacement[bid.adUnitCode]) {
    bidsByPlacement[bid.adUnitCode] = {
      bids: []
    };
  }

  bidsByPlacement[bid.adUnitCode].bids.push(bid);
  return bidsByPlacement;
}
/**
 * Returns a list of bids that we haven't received a response yet where the bidder did not call done
 * @param {BidRequest[]} bidderRequests List of bids requested for auction instance
 * @param {Set} timelyBidders Set of bidders which responded in time
 *
 * @typedef {Object} TimedOutBid
 * @property {string} bidId The id representing the bid
 * @property {string} bidder The string name of the bidder
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page
 * @property {string} auctionId The id representing the auction
 *
 * @return {Array<TimedOutBid>} List of bids that Prebid hasn't received a response for
 */


function getTimedOutBids(bidderRequests, timelyBidders) {
  var timedOutBids = bidderRequests.map(function (bid) {
    return (bid.bids || []).filter(function (bid) {
      return !timelyBidders.has(bid.bidder);
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).map(function (bid) {
    return {
      bidId: bid.bidId,
      bidder: bid.bidder,
      adUnitCode: bid.adUnitCode,
      auctionId: bid.auctionId
    };
  });
  return timedOutBids;
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RANDOM; });
/* unused harmony export newConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_set__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_js__ = __webpack_require__(0);
var _excluded = ["fpd"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Module for getting and setting Prebid configuration.
*/

/**
 * @typedef {Object} MediaTypePriceGranularity
 *
 * @property {(string|Object)} [banner]
 * @property {(string|Object)} [native]
 * @property {(string|Object)} [video]
 * @property {(string|Object)} [video-instream]
 * @property {(string|Object)} [video-outstream]
 */






var from = __webpack_require__(75);

var CONSTANTS = __webpack_require__(5);

var DEFAULT_DEBUG = Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["getParameterByName"])(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_ENABLE_SEND_ALL_BIDS = true;
var DEFAULT_DISABLE_AJAX_TIMEOUT = false;
var DEFAULT_BID_CACHE = false;
var DEFAULT_DEVICE_ACCESS = true;
var DEFAULT_MAX_NESTED_IFRAMES = 10;
var DEFAULT_TIMEOUTBUFFER = 400;
var RANDOM = 'random';
var FIXED = 'fixed';
var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;
var DEFAULT_BIDDER_SEQUENCE = RANDOM;
var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};
var ALL_TOPICS = '*';
/**
 * @typedef {object} PrebidConfig
 *
 * @property {string} cache.url Set a url if we should use prebid-cache to store video bids before adding
 *   bids to the auction. **NOTE** This must be set if you want to use the dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];
  var defaults;
  var config;
  var bidderConfig;
  var currBidder = null;

  function resetConfig() {
    defaults = {};
    var newConfig = {
      // `debug` is equivalent to legacy `pbjs.logging` property
      _debug: DEFAULT_DEBUG,

      get debug() {
        return this._debug;
      },

      set debug(val) {
        this._debug = val;
      },

      // default timeout for all bids
      _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,

      get bidderTimeout() {
        return this._bidderTimeout;
      },

      set bidderTimeout(val) {
        this._bidderTimeout = val;
      },

      // domain where prebid is running for cross domain iframe communication
      _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,

      get publisherDomain() {
        return this._publisherDomain;
      },

      set publisherDomain(val) {
        this._publisherDomain = val;
      },

      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,

      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(val)) {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logMessage"])('Using custom price granularity');
          }
        }
      },

      get priceGranularity() {
        return this._priceGranularity;
      },

      _customPriceBucket: {},

      get customPriceBucket() {
        return this._customPriceBucket;
      },

      /**
       * mediaTypePriceGranularity
       * @type {MediaTypePriceGranularity}
       */
      _mediaTypePriceGranularity: {},

      get mediaTypePriceGranularity() {
        return this._mediaTypePriceGranularity;
      },

      set mediaTypePriceGranularity(val) {
        var _this = this;

        this._mediaTypePriceGranularity = Object.keys(val).reduce(function (aggregate, item) {
          if (validatePriceGranularity(val[item])) {
            if (typeof val === 'string') {
              aggregate[item] = hasGranularity(val[item]) ? val[item] : _this._priceGranularity;
            } else if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(val)) {
              aggregate[item] = val[item];
              Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logMessage"])("Using custom price granularity for ".concat(item));
            }
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Invalid price granularity for media type: ".concat(item));
          }

          return aggregate;
        }, {});
      },

      _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,

      get enableSendAllBids() {
        return this._sendAllBids;
      },

      set enableSendAllBids(val) {
        this._sendAllBids = val;
      },

      _useBidCache: DEFAULT_BID_CACHE,

      get useBidCache() {
        return this._useBidCache;
      },

      set useBidCache(val) {
        this._useBidCache = val;
      },

      /**
       * deviceAccess set to false will disable setCookie, getCookie, hasLocalStorage
       * @type {boolean}
       */
      _deviceAccess: DEFAULT_DEVICE_ACCESS,

      get deviceAccess() {
        return this._deviceAccess;
      },

      set deviceAccess(val) {
        this._deviceAccess = val;
      },

      _bidderSequence: DEFAULT_BIDDER_SEQUENCE,

      get bidderSequence() {
        return this._bidderSequence;
      },

      set bidderSequence(val) {
        if (VALID_ORDERS[val]) {
          this._bidderSequence = val;
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
        }
      },

      // timeout buffer to adjust for bidder CDN latency
      _timeoutBuffer: DEFAULT_TIMEOUTBUFFER,

      get timeoutBuffer() {
        return this._timeoutBuffer;
      },

      set timeoutBuffer(val) {
        this._timeoutBuffer = val;
      },

      _disableAjaxTimeout: DEFAULT_DISABLE_AJAX_TIMEOUT,

      get disableAjaxTimeout() {
        return this._disableAjaxTimeout;
      },

      set disableAjaxTimeout(val) {
        this._disableAjaxTimeout = val;
      },

      // default max nested iframes for referer detection
      _maxNestedIframes: DEFAULT_MAX_NESTED_IFRAMES,

      get maxNestedIframes() {
        return this._maxNestedIframes;
      },

      set maxNestedIframes(val) {
        this._maxNestedIframes = val;
      },

      _auctionOptions: {},

      get auctionOptions() {
        return this._auctionOptions;
      },

      set auctionOptions(val) {
        if (validateauctionOptions(val)) {
          this._auctionOptions = val;
        }
      }

    };

    if (config) {
      callSubscribers(Object.keys(config).reduce(function (memo, topic) {
        if (config[topic] !== newConfig[topic]) {
          memo[topic] = newConfig[topic] || {};
        }

        return memo;
      }, {}));
    }

    config = newConfig;
    bidderConfig = {};

    function hasGranularity(val) {
      return __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_find_js___default()(Object.keys(GRANULARITY_OPTIONS), function (option) {
        return val === GRANULARITY_OPTIONS[option];
      });
    }

    function validatePriceGranularity(val) {
      if (!val) {
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }

      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(val)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__["b" /* isValidPriceConfig */])(val)) {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }

      return true;
    }

    function validateauctionOptions(val) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(val)) {
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])('Auction Options must be an object');
        return false;
      }

      for (var _i = 0, _Object$keys = Object.keys(val); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];

        if (k !== 'secondaryBidders' && k !== 'suppressStaleRender') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Auction Options given an incorrect param: ".concat(k));
          return false;
        }

        if (k === 'secondaryBidders') {
          if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isArray"])(val[k])) {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Auction Options ".concat(k, " must be of type Array"));
            return false;
          } else if (!val[k].every(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isStr"])) {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Auction Options ".concat(k, " must be only string"));
            return false;
          }
        } else if (k === 'suppressStaleRender') {
          if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isBoolean"])(val[k])) {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])("Auction Options ".concat(k, " must be of type boolean"));
            return false;
          }
        }
      }

      return true;
    }
  }
  /**
   * Returns base config with bidder overrides (if there is currently a bidder)
   * @private
   */


  function _getConfig() {
    if (currBidder && bidderConfig && Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(bidderConfig[currBidder])) {
      var currBidderConfig = bidderConfig[currBidder];
      var configTopicSet = new __WEBPACK_IMPORTED_MODULE_3_core_js_pure_features_set___default.a(Object.keys(config).concat(Object.keys(currBidderConfig)));
      return from(configTopicSet).reduce(function (memo, topic) {
        if (typeof currBidderConfig[topic] === 'undefined') {
          memo[topic] = config[topic];
        } else if (typeof config[topic] === 'undefined') {
          memo[topic] = currBidderConfig[topic];
        } else {
          if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(currBidderConfig[topic])) {
            memo[topic] = Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])({}, config[topic], currBidderConfig[topic]);
          } else {
            memo[topic] = currBidderConfig[topic];
          }
        }

        return memo;
      }, {});
    }

    return _extends({}, config);
  }
  /*
   * Returns the configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   *
   * The object returned is a deepClone of the `config` property.
   */


  function readConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      var configClone = Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["deepClone"])(_getConfig());
      return option ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["deepAccess"])(configClone, option) : configClone;
    }

    return subscribe.apply(void 0, arguments);
  }
  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */


  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["deepAccess"])(_getConfig(), option) : _getConfig();
    }

    return subscribe.apply(void 0, arguments);
  }
  /**
   * Internal API for modules (such as prebid-server) that might need access to all bidder config
   */


  function getBidderConfig() {
    return bidderConfig;
  }
  /**
   * Returns backwards compatible FPD data for modules
   */


  function getLegacyFpd(obj) {
    if (_typeof(obj) !== 'object') return;
    var duplicate = {};
    Object.keys(obj).forEach(function (type) {
      var prop = type === 'site' ? 'context' : type;
      duplicate[prop] = prop === 'context' || prop === 'user' ? Object.keys(obj[type]).filter(function (key) {
        return key !== 'data';
      }).reduce(function (result, key) {
        if (key === 'ext') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(result, obj[type][key]);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(result, _defineProperty({}, key, obj[type][key]));
        }

        return result;
      }, {}) : obj[type];
    });
    return duplicate;
  }
  /**
   * Returns backwards compatible FPD data for modules
   */


  function getLegacyImpFpd(obj) {
    if (_typeof(obj) !== 'object') return;
    var duplicate = {};

    if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["deepAccess"])(obj, 'ext.data')) {
      Object.keys(obj.ext.data).forEach(function (key) {
        if (key === 'pbadslot') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
            context: {
              pbAdSlot: obj.ext.data[key]
            }
          });
        } else if (key === 'adserver') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
            context: {
              adServer: obj.ext.data[key]
            }
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
            context: {
              data: _defineProperty({}, key, obj.ext.data[key])
            }
          });
        }
      });
    }

    return duplicate;
  }
  /**
   * Copy FPD over to OpenRTB standard format in config
   */


  function convertFpd(opt) {
    var duplicate = {};
    Object.keys(opt).forEach(function (type) {
      var prop = type === 'context' ? 'site' : type;
      duplicate[prop] = prop === 'site' || prop === 'user' ? Object.keys(opt[type]).reduce(function (result, key) {
        if (key === 'data') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(result, {
            ext: {
              data: opt[type][key]
            }
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(result, _defineProperty({}, key, opt[type][key]));
        }

        return result;
      }, {}) : opt[type];
    });
    return duplicate;
  }
  /**
   * Copy Impression FPD over to OpenRTB standard format in config
   * Only accepts bid level context.data values with pbAdSlot and adServer exceptions
   */


  function convertImpFpd(opt) {
    var duplicate = {};
    Object.keys(opt).filter(function (prop) {
      return prop === 'context';
    }).forEach(function (type) {
      Object.keys(opt[type]).forEach(function (key) {
        if (key === 'data') {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
            ext: {
              data: opt[type][key]
            }
          });
        } else {
          if (_typeof(opt[type][key]) === 'object' && !Array.isArray(opt[type][key])) {
            Object.keys(opt[type][key]).forEach(function (data) {
              Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
                ext: {
                  data: _defineProperty({}, key.toLowerCase(), _defineProperty({}, data.toLowerCase(), opt[type][key][data]))
                }
              });
            });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(duplicate, {
              ext: {
                data: _defineProperty({}, key.toLowerCase(), opt[type][key])
              }
            });
          }
        }
      });
    });
    return duplicate;
  }
  /**
   * Copy FPD over to OpenRTB standard format in each adunit
   */


  function convertAdUnitFpd(arr) {
    var convert = [];
    arr.forEach(function (adunit) {
      if (adunit.fpd) {
        adunit['ortb2Imp'] ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(adunit['ortb2Imp'], convertImpFpd(adunit.fpd)) : adunit['ortb2Imp'] = convertImpFpd(adunit.fpd);
        convert.push(function (_ref) {
          var fpd = _ref.fpd,
              duplicate = _objectWithoutProperties(_ref, _excluded);

          return duplicate;
        }(adunit));
      } else {
        convert.push(adunit);
      }
    });
    return convert;
  }
  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */


  function setConfig(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(options)) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach(function (topic) {
      var prop = topic === 'fpd' ? 'ortb2' : topic;
      var option = topic === 'fpd' ? convertFpd(options[topic]) : options[topic];

      if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(defaults[prop]) && Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(option)) {
        option = _extends({}, defaults[prop], option);
      }

      topicalConfig[prop] = config[prop] = option;
    });
    callSubscribers(topicalConfig);
  }
  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */


  function setDefaults(options) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(defaults)) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('defaults must be an object');
      return;
    }

    _extends(defaults, options); // Add default values to config as well


    _extends(config, options);
  }
  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */


  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('listener must be a function');
      return;
    }

    var nl = {
      topic: topic,
      callback: callback
    };
    listeners.push(nl); // save and call this function to remove the listener

    return function unsubscribe() {
      listeners.splice(listeners.indexOf(nl), 1);
    };
  }
  /*
   * Calls listeners that were added by the `subscribe` function
   */


  function callSubscribers(options) {
    var TOPICS = Object.keys(options); // call subscribers of a specific topic, passing only that configuration

    listeners.filter(function (listener) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(TOPICS, listener.topic);
    }).forEach(function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    }); // call subscribers that didn't give a topic, passing everything that was set

    listeners.filter(function (listener) {
      return listener.topic === ALL_TOPICS;
    }).forEach(function (listener) {
      return listener.callback(options);
    });
  }

  function setBidderConfig(config) {
    var mergeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    try {
      check(config);
      config.bidders.forEach(function (bidder) {
        if (!bidderConfig[bidder]) {
          bidderConfig[bidder] = {};
        }

        Object.keys(config.config).forEach(function (topic) {
          var prop = topic === 'fpd' ? 'ortb2' : topic;
          var option = topic === 'fpd' ? convertFpd(config.config[topic]) : config.config[topic];

          if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(option)) {
            var func = mergeFlag ? __WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"] : Object.assign;
            bidderConfig[bidder][prop] = func({}, bidderConfig[bidder][prop] || {}, option);
          } else {
            bidderConfig[bidder][prop] = option;
          }
        });
      });
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])(e);
    }

    function check(obj) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(obj)) {
        throw 'setBidderConfig bidder options must be an object';
      }

      if (!(Array.isArray(obj.bidders) && obj.bidders.length)) {
        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
      }

      if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(obj.config)) {
        throw 'setBidderConfig bidder options must contain a config object';
      }
    }
  }

  function mergeConfig(obj) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["isPlainObject"])(obj)) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logError"])('mergeConfig input must be an object');
      return;
    }

    var mergedConfig = Object.keys(obj).reduce(function (accum, key) {
      var prevConf = _getConfig(key)[key] || {};
      accum[key] = Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])(prevConf, obj[key]);
      return accum;
    }, {});
    setConfig(_objectSpread({}, mergedConfig));
    return mergedConfig;
  }

  function mergeBidderConfig(obj) {
    return setBidderConfig(obj, true);
  }
  /**
   * Internal functions for core to execute some synchronous code while having an active bidder set.
   */


  function runWithBidder(bidder, fn) {
    currBidder = bidder;

    try {
      return fn();
    } finally {
      resetBidder();
    }
  }

  function callbackWithBidder(bidder) {
    return function (cb) {
      return function () {
        if (typeof cb === 'function') {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return runWithBidder(bidder, __WEBPACK_IMPORTED_MODULE_4__utils_js__["bind"].call.apply(__WEBPACK_IMPORTED_MODULE_4__utils_js__["bind"], [cb, this].concat(args)));
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["logWarn"])('config.callbackWithBidder callback is not a function');
        }
      };
    };
  }

  function getCurrentBidder() {
    return currBidder;
  }

  function resetBidder() {
    currBidder = null;
  }

  resetConfig();
  return {
    getCurrentBidder: getCurrentBidder,
    resetBidder: resetBidder,
    getConfig: getConfig,
    readConfig: readConfig,
    setConfig: setConfig,
    mergeConfig: mergeConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig,
    runWithBidder: runWithBidder,
    callbackWithBidder: callbackWithBidder,
    setBidderConfig: setBidderConfig,
    getBidderConfig: getBidderConfig,
    mergeBidderConfig: mergeBidderConfig,
    convertAdUnitFpd: convertAdUnitFpd,
    getLegacyFpd: getLegacyFpd,
    getLegacyImpFpd: getLegacyImpFpd
  };
}
var config = newConfig();

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(53);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadExternalScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var _requestCache = {}; // The below list contains modules or vendors whom Prebid allows to load external JS.

var _approvedLoadExternalJSList = ['adloox', 'criteo', 'outstream', 'adagio', 'browsi', 'brandmetrics', 'justtag'];
/**
 * Loads external javascript. Can only be used if external JS is approved by Prebid. See https://github.com/prebid/prebid-js-external-js-template#policy
 * Each unique URL will be loaded at most 1 time.
 * @param {string} url the url to load
 * @param {string} moduleCode bidderCode or module code of the module requesting this resource
 * @param {function} [callback] callback function to be called after the script is loaded.
 */

function loadExternalScript(url, moduleCode, callback) {
  if (!moduleCode || !url) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('cannot load external script without url and moduleCode');
    return;
  }

  if (!__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_includes_js___default()(_approvedLoadExternalJSList, moduleCode)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("".concat(moduleCode, " not whitelisted for loading external JavaScript"));
    return;
  } // only load each asset once


  if (_requestCache[url]) {
    if (callback && typeof callback === 'function') {
      if (_requestCache[url].loaded) {
        // invokeCallbacks immediately
        callback();
      } else {
        // queue the callback
        _requestCache[url].callbacks.push(callback);
      }
    }

    return _requestCache[url].tag;
  }

  _requestCache[url] = {
    loaded: false,
    tag: null,
    callbacks: []
  };

  if (callback && typeof callback === 'function') {
    _requestCache[url].callbacks.push(callback);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("module ".concat(moduleCode, " is loading external JavaScript"));
  return requestResource(url, function () {
    _requestCache[url].loaded = true;

    try {
      for (var i = 0; i < _requestCache[url].callbacks.length; i++) {
        _requestCache[url].callbacks[i]();
      }
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error executing callback', 'adloader.js:loadExternalScript', e);
    }
  });

  function requestResource(tagSrc, callback) {
    var jptScript = document.createElement('script');
    jptScript.type = 'text/javascript';
    jptScript.async = true;
    _requestCache[url].tag = jptScript;

    if (jptScript.readyState) {
      jptScript.onreadystatechange = function () {
        if (jptScript.readyState === 'loaded' || jptScript.readyState === 'complete') {
          jptScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jptScript.onload = function () {
        callback();
      };
    }

    jptScript.src = tagSrc; // add the new script tag to the page

    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(jptScript);
    return jptScript;
  }
}
;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(34);
var definePropertyModule = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(44);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(34);
var IE8_DOM_DEFINE = __webpack_require__(86);
var anObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(63);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(19);
var getIterator = __webpack_require__(74);

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line es/no-set -- safe
  return Set.prototype.values.call(it);
};


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TARGETING_KEYS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHighestCpmBidsFromBidPool; });
/* harmony export (immutable) */ __webpack_exports__["c"] = sortByDealAndPriceBucketOrCpm;
/* unused harmony export newTargeting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return targeting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionManager_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bidderSettings_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_find_js__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var CONSTANTS = __webpack_require__(5);

var pbTargetingKeys = [];
var MAX_DFP_KEYLENGTH = 20;
var TTL_BUFFER = 1000;
var CFG_ALLOW_TARGETING_KEYS = "targetingControls.allowTargetingKeys";
var CFG_ADD_TARGETING_KEYS = "targetingControls.addTargetingKeys";
var TARGETING_KEY_CONFIGURATION_ERROR_MSG = "Only one of \"".concat(CFG_ALLOW_TARGETING_KEYS, "\" or \"").concat(CFG_ADD_TARGETING_KEYS, "\" can be set");
var TARGETING_KEYS = Object.keys(CONSTANTS.TARGETING_KEYS).map(function (key) {
  return CONSTANTS.TARGETING_KEYS[key];
}); // return unexpired bids

var isBidNotExpired = function isBidNotExpired(bid) {
  return bid.responseTimestamp + bid.ttl * 1000 - TTL_BUFFER > Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
}; // return bids whose status is not set. Winning bids can only have a status of `rendered`.


var isUnusedBid = function isUnusedBid(bid) {
  return bid && (bid.status && !__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()([CONSTANTS.BID_STATUS.RENDERED], bid.status) || !bid.status);
};

var filters = {
  isBidNotExpired: isBidNotExpired,
  isUnusedBid: isUnusedBid
}; // If two bids are found for same adUnitCode, we will use the highest one to take part in auction
// This can happen in case of concurrent auctions
// If adUnitBidLimit is set above 0 return top N number of bids

var getHighestCpmBidsFromBidPool = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (bidsReceived, highestCpmCallback) {
  var adUnitBidLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hasModified = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!hasModified) {
    var bids = [];
    var dealPrioritization = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.dealPrioritization'); // bucket by adUnitcode

    var buckets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(bidsReceived, 'adUnitCode'); // filter top bid for each bucket by bidder

    Object.keys(buckets).forEach(function (bucketKey) {
      var bucketBids = [];
      var bidsByBidder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(buckets[bucketKey], 'bidderCode');
      Object.keys(bidsByBidder).forEach(function (key) {
        return bucketBids.push(bidsByBidder[key].reduce(highestCpmCallback));
      }); // if adUnitBidLimit is set, pass top N number bids

      if (adUnitBidLimit > 0) {
        bucketBids = dealPrioritization ? bucketBids.sort(sortByDealAndPriceBucketOrCpm(true)) : bucketBids.sort(function (a, b) {
          return b.cpm - a.cpm;
        });
        bids.push.apply(bids, _toConsumableArray(bucketBids.slice(0, adUnitBidLimit)));
      } else {
        bids.push.apply(bids, _toConsumableArray(bucketBids));
      }
    });
    return bids;
  }

  return bidsReceived;
});
/**
* A descending sort function that will sort the list of objects based on the following two dimensions:
*  - bids with a deal are sorted before bids w/o a deal
*  - then sort bids in each grouping based on the hb_pb value
* eg: the following list of bids would be sorted like:
*  [{
*    "hb_adid": "vwx",
*    "hb_pb": "28",
*    "hb_deal": "7747"
*  }, {
*    "hb_adid": "jkl",
*    "hb_pb": "10",
*    "hb_deal": "9234"
*  }, {
*    "hb_adid": "stu",
*    "hb_pb": "50"
*  }, {
*    "hb_adid": "def",
*    "hb_pb": "2"
*  }]
*/

function sortByDealAndPriceBucketOrCpm() {
  var useCpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (a, b) {
    if (a.adserverTargeting.hb_deal !== undefined && b.adserverTargeting.hb_deal === undefined) {
      return -1;
    }

    if (a.adserverTargeting.hb_deal === undefined && b.adserverTargeting.hb_deal !== undefined) {
      return 1;
    } // assuming both values either have a deal or don't have a deal - sort by the hb_pb param


    if (useCpm) {
      return b.cpm - a.cpm;
    }

    return b.adserverTargeting.hb_pb - a.adserverTargeting.hb_pb;
  };
}
/**
 * @typedef {Object.<string,string>} targeting
 * @property {string} targeting_key
 */

/**
 * @typedef {Object.<string,Object.<string,string[]>[]>[]} targetingArray
 */

function newTargeting(auctionManager) {
  var targeting = {};
  var latestAuctionForAdUnit = {};

  targeting.setLatestAuctionForAdUnit = function (adUnitCode, auctionId) {
    latestAuctionForAdUnit[adUnitCode] = auctionId;
  };

  targeting.resetPresetTargeting = function (adUnitCode, customSlotMatching) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isGptPubadsDefined"])()) {
      var adUnitCodes = getAdUnitCodes(adUnitCode);
      var adUnits = auctionManager.getAdUnits().filter(function (adUnit) {
        return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(adUnitCodes, adUnit.code);
      });
      var unsetKeys = pbTargetingKeys.reduce(function (reducer, key) {
        reducer[key] = null;
        return reducer;
      }, {});
      window.googletag.pubads().getSlots().forEach(function (slot) {
        var customSlotMatchingFunc = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(customSlotMatching) && customSlotMatching(slot); // reset only registered adunits

        adUnits.forEach(function (unit) {
          if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId() || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(customSlotMatchingFunc) && customSlotMatchingFunc(unit.code)) {
            slot.updateTargetingFromMap(unsetKeys);
          }
        });
      });
    }
  };

  targeting.resetPresetTargetingAST = function (adUnitCode) {
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    adUnitCodes.forEach(function (unit) {
      var astTag = window.apntag.getTag(unit);

      if (astTag && astTag.keywords) {
        var currentKeywords = Object.keys(astTag.keywords);
        var newKeywords = {};
        currentKeywords.forEach(function (key) {
          if (!__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(pbTargetingKeys, key.toLowerCase())) {
            newKeywords[key] = astTag.keywords[key];
          }
        });
        window.apntag.modifyTag(unit, {
          keywords: newKeywords
        });
      }
    });
  };
  /**
   * checks if bid has targeting set and belongs based on matching ad unit codes
   * @return {boolean} true or false
   */


  function bidShouldBeAddedToTargeting(bid, adUnitCodes) {
    return bid.adserverTargeting && adUnitCodes && (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(adUnitCodes) && __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(adUnitCodes, bid.adUnitCode) || typeof adUnitCodes === 'string' && bid.adUnitCode === adUnitCodes);
  }

  ;
  /**
   * Returns targeting for any bids which have deals if alwaysIncludeDeals === true
   */

  function getDealBids(adUnitCodes, bidsReceived) {
    if (__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.alwaysIncludeDeals') === true) {
      var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]); // we only want the top bid from bidders who have multiple entries per ad unit code

      var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]); // populate targeting keys for the remaining bids if they have a dealId

      return bids.map(function (bid) {
        if (bid.dealId && bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
          return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
            return typeof bid.adserverTargeting[key] !== 'undefined';
          })));
        }
      }).filter(function (bid) {
        return bid;
      }); // removes empty elements in array
    }

    return [];
  }

  ;
  /**
   * Returns filtered ad server targeting for custom and allowed keys.
   * @param {targetingArray} targeting
   * @param {string[]} allowedKeys
   * @return {targetingArray} filtered targeting
   */

  function getAllowedTargetingKeyValues(targeting, allowedKeys) {
    var defaultKeyring = _extends({}, CONSTANTS.TARGETING_KEYS, CONSTANTS.NATIVE_KEYS);

    var defaultKeys = Object.keys(defaultKeyring);
    var keyDispositions = {};
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("allowTargetingKeys - allowed keys [ ".concat(allowedKeys.map(function (k) {
      return defaultKeyring[k];
    }).join(', '), " ]"));
    targeting.map(function (adUnit) {
      var adUnitCode = Object.keys(adUnit)[0];
      var keyring = adUnit[adUnitCode];
      var keys = keyring.filter(function (kvPair) {
        var key = Object.keys(kvPair)[0]; // check if key is in default keys, if not, it's custom, we won't remove it.

        var isCustom = defaultKeys.filter(function (defaultKey) {
          return key.indexOf(defaultKeyring[defaultKey]) === 0;
        }).length === 0; // check if key explicitly allowed, if not, we'll remove it.

        var found = isCustom || __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_find_js___default()(allowedKeys, function (allowedKey) {
          var allowedKeyName = defaultKeyring[allowedKey]; // we're looking to see if the key exactly starts with one of our default keys.
          // (which hopefully means it's not custom)

          var found = key.indexOf(allowedKeyName) === 0;
          return found;
        });
        keyDispositions[key] = !found;
        return found;
      });
      adUnit[adUnitCode] = keys;
    });
    var removedKeys = Object.keys(keyDispositions).filter(function (d) {
      return keyDispositions[d];
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("allowTargetingKeys - removed keys [ ".concat(removedKeys.join(', '), " ]")); // remove any empty targeting objects, as they're unnecessary.

    var filteredTargeting = targeting.filter(function (adUnit) {
      var adUnitCode = Object.keys(adUnit)[0];
      var keyring = adUnit[adUnitCode];
      return keyring.length > 0;
    });
    return filteredTargeting;
  }
  /**
   * Returns all ad server targeting for all ad units.
   * @param {string=} adUnitCode
   * @return {Object.<string,targeting>} targeting
   */


  targeting.getAllTargeting = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode); // Get targeting for the winning bid. Add targeting for any bids that have
    // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.

    var targeting = getWinningBidTargeting(adUnitCodes, bidsReceived).concat(getCustomBidTargeting(adUnitCodes, bidsReceived)).concat(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes, bidsReceived) : getDealBids(adUnitCodes, bidsReceived)).concat(getAdUnitTargeting(adUnitCodes)); // store a reference of the targeting keys

    targeting.map(function (adUnitCode) {
      Object.keys(adUnitCode).map(function (key) {
        adUnitCode[key].map(function (targetKey) {
          if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
            pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
          }
        });
      });
    });
    var defaultKeys = Object.keys(_extends({}, CONSTANTS.DEFAULT_TARGETING_KEYS, CONSTANTS.NATIVE_KEYS));
    var allowedKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig(CFG_ALLOW_TARGETING_KEYS);
    var addedKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig(CFG_ADD_TARGETING_KEYS);

    if (addedKeys != null && allowedKeys != null) {
      throw new Error(TARGETING_KEY_CONFIGURATION_ERROR_MSG);
    } else if (addedKeys != null) {
      allowedKeys = defaultKeys.concat(addedKeys);
    } else {
      allowedKeys = allowedKeys || defaultKeys;
    }

    if (Array.isArray(allowedKeys) && allowedKeys.length > 0) {
      targeting = getAllowedTargetingKeyValues(targeting, allowedKeys);
    }

    targeting = flattenTargeting(targeting);
    var auctionKeysThreshold = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.auctionKeyMaxChars');

    if (auctionKeysThreshold) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(auctionKeysThreshold, " characters.  Running checks on auction keys..."));
      targeting = filterTargetingKeys(targeting, auctionKeysThreshold);
    } // make sure at least there is a entry per adUnit code in the targetingSet so receivers of SET_TARGETING call's can know what ad units are being invoked


    adUnitCodes.forEach(function (code) {
      if (!targeting[code]) {
        targeting[code] = {};
      }
    });
    return targeting;
  }; // warn about conflicting configuration


  __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls', function (config) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(config, CFG_ALLOW_TARGETING_KEYS) != null && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(config, CFG_ADD_TARGETING_KEYS) != null) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(TARGETING_KEY_CONFIGURATION_ERROR_MSG);
    }
  }); // create an encoded string variant based on the keypairs of the provided object
  //  - note this will encode the characters between the keys (ie = and &)

  function convertKeysToQueryForm(keyMap) {
    return Object.keys(keyMap).reduce(function (queryString, key) {
      var encodedKeyPair = "".concat(key, "%3d").concat(encodeURIComponent(keyMap[key]), "%26");
      return queryString += encodedKeyPair;
    }, '');
  }

  function filterTargetingKeys(targeting, auctionKeysThreshold) {
    // read each targeting.adUnit object and sort the adUnits into a list of adUnitCodes based on priorization setting (eg CPM)
    var targetingCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(targeting);
    var targetingMap = Object.keys(targetingCopy).map(function (adUnitCode) {
      return {
        adUnitCode: adUnitCode,
        adserverTargeting: targetingCopy[adUnitCode]
      };
    }).sort(sortByDealAndPriceBucketOrCpm()); // iterate through the targeting based on above list and transform the keys into the query-equivalent and count characters

    return targetingMap.reduce(function (accMap, currMap, index, arr) {
      var adUnitQueryString = convertKeysToQueryForm(currMap.adserverTargeting); // for the last adUnit - trim last encoded ampersand from the converted query string

      if (index + 1 === arr.length) {
        adUnitQueryString = adUnitQueryString.slice(0, -3);
      } // if under running threshold add to result


      var code = currMap.adUnitCode;
      var querySize = adUnitQueryString.length;

      if (querySize <= auctionKeysThreshold) {
        auctionKeysThreshold -= querySize;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("AdUnit '".concat(code, "' auction keys comprised of ").concat(querySize, " characters.  Deducted from running threshold; new limit is ").concat(auctionKeysThreshold), targetingCopy[code]);
        accMap[code] = targetingCopy[code];
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("The following keys for adUnitCode '".concat(code, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(querySize, ", the current allotted amount was ").concat(auctionKeysThreshold, ".\n"), targetingCopy[code]);
      }

      if (index + 1 === arr.length && Object.keys(accMap).length === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.');
      }

      return accMap;
    }, {});
  }
  /**
   * Converts targeting array and flattens to make it easily iteratable
   * e.g: Sample input to this function
   * ```
   * [
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder": ["appnexusAst"]}]
   *    },
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder_appnexusAs": ["appnexusAst", "other"]}]
   *    }
   * ]
   * ```
   * Resulting array
   * ```
   * {
   *  "div-gpt-ad-1460505748561-0": {
   *    "hb_bidder": "appnexusAst",
   *    "hb_bidder_appnexusAs": "appnexusAst,other"
   *  }
   * }
   * ```
   *
   * @param {targetingArray}  targeting
   * @return {Object.<string,targeting>}  targeting
   */


  function flattenTargeting(targeting) {
    var targetingObj = targeting.map(function (targeting) {
      return _defineProperty({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map(function (target) {
        return _defineProperty({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(','));
      }).reduce(function (p, c) {
        return _extends(c, p);
      }, {}));
    }).reduce(function (accumulator, targeting) {
      var key = Object.keys(targeting)[0];
      accumulator[key] = _extends({}, accumulator[key], targeting[key]);
      return accumulator;
    }, {});
    return targetingObj;
  }
  /**
   * Sets targeting for DFP
   * @param {Object.<string,Object.<string,string>>} targetingConfig
   */


  targeting.setTargetingForGPT = function (targetingConfig, customSlotMatching) {
    window.googletag.pubads().getSlots().forEach(function (slot) {
      Object.keys(targetingConfig).filter(customSlotMatching ? customSlotMatching(slot) : Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isAdUnitCodeMatchingSlot"])(slot)).forEach(function (targetId) {
        Object.keys(targetingConfig[targetId]).forEach(function (key) {
          var value = targetingConfig[targetId][key];

          if (typeof value === 'string' && value.indexOf(',') !== -1) {
            // due to the check the array will be formed only if string has ',' else plain string will be assigned as value
            value = value.split(',');
          }

          targetingConfig[targetId][key] = value;
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Attempting to set targeting-map for slot: ".concat(slot.getSlotElementId(), " with targeting-map:"), targetingConfig[targetId]);
        slot.updateTargetingFromMap(targetingConfig[targetId]);
      });
    });
  };
  /**
   * normlizes input to a `adUnit.code` array
   * @param  {(string|string[])} adUnitCode [description]
   * @return {string[]}     AdUnit code array
   */


  function getAdUnitCodes(adUnitCode) {
    if (typeof adUnitCode === 'string') {
      return [adUnitCode];
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(adUnitCode)) {
      return adUnitCode;
    }

    return auctionManager.getAdUnitCodes() || [];
  }

  function getBidsReceived() {
    var bidsReceived = auctionManager.getBidsReceived();

    if (!__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('useBidCache')) {
      // don't use bid cache (i.e. filter out bids not in the latest auction)
      bidsReceived = bidsReceived.filter(function (bid) {
        return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId;
      });
    } else {
      // if custom bid cache filter function exists, run for each bid from
      // previous auctions. If it returns true, include bid in bid pool
      var filterFunction = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('bidCacheFilterFunction');

      if (typeof filterFunction === 'function') {
        bidsReceived = bidsReceived.filter(function (bid) {
          return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId || !!filterFunction(bid);
        });
      }
    }

    bidsReceived = bidsReceived.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'video.context') !== __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__["a" /* ADPOD */];
    }).filter(function (bid) {
      return bid.mediaType !== 'banner' || Object(__WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__["c" /* sizeSupported */])([bid.width, bid.height]);
    }).filter(filters.isUnusedBid).filter(filters.isBidNotExpired);
    return getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getOldestHighestCpmBid"]);
  }
  /**
   * Returns top bids for a given adUnit or set of adUnits.
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * @return {[type]}            [description]
   */


  targeting.getWinningBids = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    return bidsReceived.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(adUnitCodes, bid.adUnitCode);
    }).filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_7__bidderSettings_js__["a" /* bidderSettings */].get(bid.bidderCode, 'allowZeroCpmBids') === true ? bid.cpm >= 0 : bid.cpm > 0;
    }).map(function (bid) {
      return bid.adUnitCode;
    }).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]).map(function (adUnitCode) {
      return bidsReceived.filter(function (bid) {
        return bid.adUnitCode === adUnitCode ? bid : null;
      }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]);
    });
  };
  /**
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * Sets targeting for AST
   */


  targeting.setTargetingForAst = function (adUnitCodes) {
    var astTargeting = targeting.getAllTargeting(adUnitCodes);

    try {
      targeting.resetPresetTargetingAST(adUnitCodes);
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('unable to reset targeting for AST' + e);
    }

    Object.keys(astTargeting).forEach(function (targetId) {
      return Object.keys(astTargeting[targetId]).forEach(function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Attempting to set targeting for targetId: ".concat(targetId, " key: ").concat(key, " value: ").concat(astTargeting[targetId][key])); // setKeywords supports string and array as value

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(astTargeting[targetId][key]) || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(astTargeting[targetId][key])) {
          var keywordsObj = {};
          var regex = /pt[0-9]/;

          if (key.search(regex) < 0) {
            keywordsObj[key.toUpperCase()] = astTargeting[targetId][key];
          } else {
            // pt${n} keys should not be uppercased
            keywordsObj[key] = astTargeting[targetId][key];
          }

          window.apntag.setKeywords(targetId, keywordsObj, {
            overrideKeyValue: true
          });
        }
      });
    });
  };
  /**
   * Get targeting key value pairs for winning bid.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   winning bids targeting
   */


  function getWinningBidTargeting(adUnitCodes, bidsReceived) {
    var winners = targeting.getWinningBids(adUnitCodes, bidsReceived);
    var standardKeys = getStandardKeys();
    winners = winners.map(function (winner) {
      return _defineProperty({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter(function (key) {
        return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
      }).reduce(function (acc, key) {
        var targetingValue = [winner.adserverTargeting[key]];

        var targeting = _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), targetingValue);

        if (key === CONSTANTS.TARGETING_KEYS.DEAL) {
          var bidderCodeTargetingKey = "".concat(key, "_").concat(winner.bidderCode).substring(0, MAX_DFP_KEYLENGTH);

          var bidderCodeTargeting = _defineProperty({}, bidderCodeTargetingKey, targetingValue);

          return [].concat(_toConsumableArray(acc), [targeting, bidderCodeTargeting]);
        }

        return [].concat(_toConsumableArray(acc), [targeting]);
      }, []));
    });
    return winners;
  }

  function getStandardKeys() {
    return auctionManager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
    .map(function (targeting) {
      return targeting.key;
    }).concat(TARGETING_KEYS).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]); // standard keys defined in the library.
  }
  /**
   * Merge custom adserverTargeting with same key name for same adUnitCode.
   * e.g: Appnexus defining custom keyvalue pair foo:bar and Rubicon defining custom keyvalue pair foo:baz will be merged to foo: ['bar','baz']
   *
   * @param {Object[]} acc Accumulator for reducer. It will store updated bidResponse objects
   * @param {Object} bid BidResponse
   * @param {number} index current index
   * @param {Array} arr original array
   */


  function mergeAdServerTargeting(acc, bid, index, arr) {
    function concatTargetingValue(key) {
      return function (currentBidElement) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(currentBidElement.adserverTargeting[key])) {
          currentBidElement.adserverTargeting[key] = [currentBidElement.adserverTargeting[key]];
        }

        currentBidElement.adserverTargeting[key] = currentBidElement.adserverTargeting[key].concat(bid.adserverTargeting[key]).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
        delete bid.adserverTargeting[key];
      };
    }

    function hasSameAdunitCodeAndKey(key) {
      return function (currentBidElement) {
        return currentBidElement.adUnitCode === bid.adUnitCode && currentBidElement.adserverTargeting[key];
      };
    }

    Object.keys(bid.adserverTargeting).filter(getCustomKeys()).forEach(function (key) {
      if (acc.length) {
        acc.filter(hasSameAdunitCodeAndKey(key)).forEach(concatTargetingValue(key));
      }
    });
    acc.push(bid);
    return acc;
  }

  function getCustomKeys() {
    var standardKeys = getStandardKeys().concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    return function (key) {
      return standardKeys.indexOf(key) === -1;
    };
  }

  function truncateCustomKeys(bid) {
    return _defineProperty({}, bid.adUnitCode, Object.keys(bid.adserverTargeting) // Get only the non-standard keys of the losing bids, since we
    // don't want to override the standard keys of the winning bid.
    .filter(getCustomKeys()).map(function (key) {
      return _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    }));
  }
  /**
   * Get custom targeting key value pairs for bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   bids with custom targeting defined in bidderSettings
   */


  function getCustomBidTargeting(adUnitCodes, bidsReceived) {
    return bidsReceived.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(adUnitCodes, bid.adUnitCode);
    }).map(function (bid) {
      return _extends({}, bid);
    }).reduce(mergeAdServerTargeting, []).map(truncateCustomKeys).filter(function (bid) {
      return bid;
    }); // removes empty elements in array;
  }
  /**
   * Get targeting key value pairs for non-winning bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   all non-winning bids targeting
   */


  function getBidLandscapeTargeting(adUnitCodes, bidsReceived) {
    var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    var adUnitBidLimit = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.bidLimit');
    var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"], adUnitBidLimit);
    var allowSendAllBidsTargetingKeys = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.allowSendAllBidsTargetingKeys');
    var allowedSendAllBidTargeting = allowSendAllBidsTargetingKeys ? allowSendAllBidsTargetingKeys.map(function (key) {
      return CONSTANTS.TARGETING_KEYS[key];
    }) : standardKeys; // populate targeting keys for the remaining bids

    return bids.map(function (bid) {
      if (bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
        return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
          return typeof bid.adserverTargeting[key] !== 'undefined' && allowedSendAllBidTargeting.indexOf(key) !== -1;
        })));
      }
    }).filter(function (bid) {
      return bid;
    }); // removes empty elements in array
  }

  function getTargetingMap(bid, keys) {
    return keys.map(function (key) {
      return _defineProperty({}, "".concat(key, "_").concat(bid.bidderCode).substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    });
  }

  function getAdUnitTargeting(adUnitCodes) {
    function getTargetingObj(adUnit) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING);
    }

    function getTargetingValues(adUnit) {
      var aut = getTargetingObj(adUnit);
      return Object.keys(aut).map(function (key) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(aut[key])) aut[key] = aut[key].split(',').map(function (s) {
          return s.trim();
        });
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(aut[key])) aut[key] = [aut[key]];
        return _defineProperty({}, key, aut[key]);
      });
    }

    return auctionManager.getAdUnits().filter(function (adUnit) {
      return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_includes_js___default()(adUnitCodes, adUnit.code) && getTargetingObj(adUnit);
    }).map(function (adUnit) {
      return _defineProperty({}, adUnit.code, getTargetingValues(adUnit));
    });
  }

  targeting.isApntagDefined = function () {
    if (window.apntag && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isFn"])(window.apntag.setKeywords)) {
      return true;
    }
  };

  return targeting;
}
var targeting = newTargeting(__WEBPACK_IMPORTED_MODULE_3__auctionManager_js__["a" /* auctionManager */]);

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(393);
var entryUnbind = __webpack_require__(56);

module.exports = entryUnbind('String', 'includes');


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var notARegExp = __webpack_require__(394);
var requireObjectCoercible = __webpack_require__(52);
var correctIsRegExpLogic = __webpack_require__(396);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(395);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var classof = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(23);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(23);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony export (immutable) */ __webpack_exports__["b"] = ajaxBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var XHR_DONE = 4;
/**
 * Simple IE9+ and cross-browser ajax request function
 * Note: x-domain requests in IE9 do not support the use of cookies
 *
 * @param url string url
 * @param callback {object | function} callback
 * @param data mixed data
 * @param options object
 */

var ajax = ajaxBuilder();
function ajaxBuilder() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      request = _ref.request,
      done = _ref.done;

  return function (url, callback, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      var x;
      var method = options.method || (data ? 'POST' : 'GET');
      var parser = document.createElement('a');
      parser.href = url;
      var callbacks = _typeof(callback) === 'object' && callback !== null ? callback : {
        success: function success() {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('xhr success');
        },
        error: function error(e) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('xhr error', null, e);
        }
      };

      if (typeof callback === 'function') {
        callbacks.success = callback;
      }

      x = new window.XMLHttpRequest();

      x.onreadystatechange = function () {
        if (x.readyState === XHR_DONE) {
          if (typeof done === 'function') {
            done(parser.origin);
          }

          var status = x.status;

          if (status >= 200 && status < 300 || status === 304) {
            callbacks.success(x.responseText, x);
          } else {
            callbacks.error(x.statusText, x);
          }
        }
      }; // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648


      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.ontimeout = function () {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('  xhr timeout after ', x.timeout, 'ms');
        };
      }

      if (method === 'GET' && data) {
        var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["parseUrl"])(url, options);

        _extends(urlInfo.search, data);

        url = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["buildUrl"])(urlInfo);
      }

      x.open(method, url, true); // IE needs timeout to be set after open - see #1410
      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648

      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.timeout = timeout;
      }

      if (options.withCredentials) {
        x.withCredentials = true;
      }

      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["_each"])(options.customHeaders, function (value, header) {
        x.setRequestHeader(header, value);
      });

      if (options.preflight) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      x.setRequestHeader('Content-Type', options.contentType || 'text/plain');

      if (typeof request === 'function') {
        request(parser.origin);
      }

      if (method === 'POST' && data) {
        x.send(data);
      } else {
        x.send();
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('xhr construction', error);
      _typeof(callback) === 'object' && callback !== null && callback.error(error);
    }
  };
}

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var aFunction = __webpack_require__(24);
var wellKnownSymbol = __webpack_require__(23);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScopedSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bidderSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prebidGlobal_js__ = __webpack_require__(14);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var CONSTANTS = __webpack_require__(5);

var _resolveScope = /*#__PURE__*/new WeakSet();

var ScopedSettings = /*#__PURE__*/function () {
  function ScopedSettings(getSettings, defaultScope) {
    _classCallCheck(this, ScopedSettings);

    _resolveScope.add(this);

    this.getSettings = getSettings;
    this.defaultScope = defaultScope;
  }
  /**
   * Get setting value at `path` under the given scope, falling back to the default scope if needed.
   * If `scope` is `null`, get the setting's default value.
   * @param scope {String|null}
   * @param path {String}
   * @returns {*}
   */


  _createClass(ScopedSettings, [{
    key: "get",
    value: function get(scope, path) {
      var value = this.getOwn(scope, path);

      if (typeof value === 'undefined') {
        value = this.getOwn(null, path);
      }

      return value;
    }
    /**
     * Get the setting value at `path` *without* falling back to the default value.
     * @param scope {String}
     * @param path {String}
     * @returns {*}
     */

  }, {
    key: "getOwn",
    value: function getOwn(scope, path) {
      scope = _classPrivateMethodGet(this, _resolveScope, _resolveScope2).call(this, scope);
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(this.getSettings(), "".concat(scope, ".").concat(path));
    }
    /**
     * @returns {string[]} all existing scopes except the default one.
     */

  }, {
    key: "getScopes",
    value: function getScopes() {
      var _this = this;

      return Object.keys(this.getSettings()).filter(function (scope) {
        return scope !== _this.defaultScope;
      });
    }
    /**
     * @returns all settings in the given scope, merged with the settings for the default scope.
     */

  }, {
    key: "settingsFor",
    value: function settingsFor(scope) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["mergeDeep"])({}, this.ownSettingsFor(null), this.ownSettingsFor(scope));
    }
    /**
     * @returns all settings in the given scope, *without* any of the default settings.
     */

  }, {
    key: "ownSettingsFor",
    value: function ownSettingsFor(scope) {
      scope = _classPrivateMethodGet(this, _resolveScope, _resolveScope2).call(this, scope);
      return this.getSettings()[scope] || {};
    }
  }]);

  return ScopedSettings;
}();

function _resolveScope2(scope) {
  if (scope == null) {
    return this.defaultScope;
  } else {
    return scope;
  }
}

var bidderSettings = new ScopedSettings(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__prebidGlobal_js__["a" /* getGlobal */])().bidderSettings || {};
}, CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);

/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */

function Bid(statusCode) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? 'client' : _ref$src,
      _ref$bidder = _ref.bidder,
      bidder = _ref$bidder === void 0 ? '' : _ref$bidder,
      bidId = _ref.bidId,
      transactionId = _ref.transactionId,
      auctionId = _ref.auctionId;

  var _bidSrc = src;

  var _statusCode = statusCode || 0;

  this.bidderCode = bidder;
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
  this.requestId = bidId;
  this.transactionId = transactionId;
  this.auctionId = auctionId;
  this.mediaType = 'banner';
  this.source = _bidSrc;

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';

      case 1:
        return 'Bid available';

      case 2:
        return 'Bid returned empty or error response';

      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  }; // returns the size of the bid creative. Concatenation of width and height by ‘x’.


  this.getSize = function () {
    return this.width + 'x' + this.height;
  };

  this.getIdentifiers = function () {
    return {
      src: this.source,
      bidder: this.bidderCode,
      bidId: this.requestId,
      transactionId: this.transactionId,
      auctionId: this.auctionId
    };
  };
} // Bid factory function.


function createBid(statusCode, identifiers) {
  return new Bid(statusCode, identifiers);
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(128);
var global = __webpack_require__(27);
var isObject = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(33);
var objectHas = __webpack_require__(31);
var shared = __webpack_require__(66);
var sharedKey = __webpack_require__(70);
var hiddenKeys = __webpack_require__(57);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nativeAdapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NATIVE_TARGETING_KEYS; });
/* unused harmony export processNativeAdUnitParams */
/* harmony export (immutable) */ __webpack_exports__["b"] = decorateAdUnitsWithNativeParams;
/* unused harmony export nativeAdUnit */
/* unused harmony export nativeBidder */
/* unused harmony export hasNonNativeBidder */
/* harmony export (immutable) */ __webpack_exports__["h"] = nativeBidIsValid;
/* harmony export (immutable) */ __webpack_exports__["c"] = fireNativeTrackers;
/* harmony export (immutable) */ __webpack_exports__["f"] = getNativeTargeting;
/* harmony export (immutable) */ __webpack_exports__["e"] = getAssetMessage;
/* harmony export (immutable) */ __webpack_exports__["d"] = getAllAssetsMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__ = __webpack_require__(18);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CONSTANTS = __webpack_require__(5);

var nativeAdapters = [];
var NATIVE_TARGETING_KEYS = Object.keys(CONSTANTS.NATIVE_KEYS).map(function (key) {
  return CONSTANTS.NATIVE_KEYS[key];
});
var IMAGE = {
  image: {
    required: true
  },
  title: {
    required: true
  },
  sponsoredBy: {
    required: true
  },
  clickUrl: {
    required: true
  },
  body: {
    required: false
  },
  icon: {
    required: false
  }
};
var SUPPORTED_TYPES = {
  image: IMAGE
};
/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */

function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    return SUPPORTED_TYPES[params.type];
  }

  return params;
}
function decorateAdUnitsWithNativeParams(adUnits) {
  adUnits.forEach(function (adUnit) {
    var nativeParams = adUnit.nativeParams || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'mediaTypes.native');

    if (nativeParams) {
      adUnit.nativeParams = processNativeAdUnitParams(nativeParams);
    }
  });
}
/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */

function typeIsSupported(type) {
  if (!(type && __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js___default()(Object.keys(SUPPORTED_TYPES), type))) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("".concat(type, " nativeParam is not supported"));
    return false;
  }

  return true;
}
/**
 * Helper functions for working with native-enabled adUnits
 * TODO: abstract this and the video helper functions into general
 * adunit validation helper functions
 */


var nativeAdUnit = function nativeAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === 'native';
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = function nativeBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js___default()(nativeAdapters, bid.bidder);
};
var hasNonNativeBidder = function hasNonNativeBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !nativeBidder(bid);
  }).length;
};
/**
 * Validate that the native assets on this bid contain all assets that were
 * marked as required in the adUnit configuration.
 * @param {Bid} bid Native bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function nativeBidIsValid(bid) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref$index;

  // all native bid responses must define a landing page url
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.clickUrl')) {
    return false;
  }

  var requestedAssets = index.getAdUnit(bid).nativeParams;

  if (!requestedAssets) {
    return true;
  }

  var requiredAssets = Object.keys(requestedAssets).filter(function (key) {
    return requestedAssets[key].required;
  });
  var returnedAssets = Object.keys(bid['native']).filter(function (key) {
    return bid['native'][key];
  });
  return requiredAssets.every(function (asset) {
    return __WEBPACK_IMPORTED_MODULE_1_core_js_pure_features_array_includes_js___default()(returnedAssets, asset);
  });
}
/*
 * Native responses may have associated impression or click trackers.
 * This retrieves the appropriate tracker urls for the given ad object and
 * fires them. As a native creatives may be in a cross-origin frame, it may be
 * necessary to invoke this function via postMessage. secureCreatives is
 * configured to fire this function when it receives a `message` of 'Prebid Native'
 * and an `adId` with the value of the `bid.adId`. When a message is posted with
 * these parameters, impression trackers are fired. To fire click trackers, the
 * message should contain an `action` set to 'click'.
 *
 * // Native creative template example usage
 * <a href="%%CLICK_URL_UNESC%%%%PATTERN:hb_native_linkurl%%"
 *    target="_blank"
 *    onclick="fireTrackers('click')">
 *    %%PATTERN:hb_native_title%%
 * </a>
 *
 * <script>
 *   function fireTrackers(action) {
 *     var message = {message: 'Prebid Native', adId: '%%PATTERN:hb_adid%%'};
 *     if (action === 'click') {message.action = 'click';} // fires click trackers
 *     window.parent.postMessage(JSON.stringify(message), '*');
 *   }
 *   fireTrackers(); // fires impressions when creative is loaded
 * </script>
 */

function fireNativeTrackers(message, adObject) {
  var trackers;

  if (message.action === 'click') {
    trackers = adObject['native'] && adObject['native'].clickTrackers;
  } else {
    trackers = adObject['native'] && adObject['native'].impressionTrackers;

    if (adObject['native'] && adObject['native'].javascriptTrackers) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["insertHtmlIntoIframe"])(adObject['native'].javascriptTrackers);
    }
  }

  (trackers || []).forEach(__WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"]);
  return message.action;
}
/**
 * Gets native targeting key-value pairs
 * @param {Object} bid
 * @return {Object} targeting
 */

function getNativeTargeting(bid) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? __WEBPACK_IMPORTED_MODULE_2__auctionManager_js__["a" /* auctionManager */].index : _ref2$index;

  var keyValues = {};
  var adUnit = index.getAdUnit(bid);

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.rendererUrl')) {
    bid['native']['rendererUrl'] = getAssetValue(adUnit.nativeParams['rendererUrl']);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.adTemplate')) {
    bid['native']['adTemplate'] = getAssetValue(adUnit.nativeParams['adTemplate']);
  }

  var globalSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.sendTargetingKeys") !== false;
  var nativeKeys = getNativeKeys(adUnit);

  var flatBidNativeKeys = _objectSpread(_objectSpread({}, bid.native), bid.native.ext);

  delete flatBidNativeKeys.ext;
  Object.keys(flatBidNativeKeys).forEach(function (asset) {
    var key = nativeKeys[asset];
    var value = getAssetValue(bid.native[asset]) || getAssetValue(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, "native.ext.".concat(asset)));

    if (asset === 'adTemplate' || !key || !value) {
      return;
    }

    var sendPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.".concat(asset, ".sendId"));

    if (typeof sendPlaceholder !== 'boolean') {
      sendPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.ext.".concat(asset, ".sendId"));
    }

    if (sendPlaceholder) {
      var placeholder = "".concat(key, ":").concat(bid.adId);
      value = placeholder;
    }

    var assetSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.".concat(asset, ".sendTargetingKeys"));

    if (typeof assetSendTargetingKeys !== 'boolean') {
      assetSendTargetingKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, "nativeParams.ext.".concat(asset, ".sendTargetingKeys"));
    }

    var sendTargeting = typeof assetSendTargetingKeys === 'boolean' ? assetSendTargetingKeys : globalSendTargetingKeys;

    if (sendTargeting) {
      keyValues[key] = value;
    }
  });
  return keyValues;
}
/**
 * Constructs a message object containing asset values for each of the
 * requested data keys.
 */

function getAssetMessage(data, adObject) {
  var message = {
    message: 'assetResponse',
    adId: data.adId,
    assets: []
  };

  if (adObject.native.hasOwnProperty('adTemplate')) {
    message.adTemplate = getAssetValue(adObject.native['adTemplate']);
  }

  if (adObject.native.hasOwnProperty('rendererUrl')) {
    message.rendererUrl = getAssetValue(adObject.native['rendererUrl']);
  }

  data.assets.forEach(function (asset) {
    var key = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getKeyByValue"])(CONSTANTS.NATIVE_KEYS, asset);
    var value = getAssetValue(adObject.native[key]);
    message.assets.push({
      key: key,
      value: value
    });
  });
  return message;
}
function getAllAssetsMessage(data, adObject) {
  var message = {
    message: 'assetResponse',
    adId: data.adId,
    assets: []
  };
  Object.keys(adObject.native).forEach(function (key, index) {
    if (key === 'adTemplate' && adObject.native[key]) {
      message.adTemplate = getAssetValue(adObject.native[key]);
    } else if (key === 'rendererUrl' && adObject.native[key]) {
      message.rendererUrl = getAssetValue(adObject.native[key]);
    } else if (key === 'ext') {
      Object.keys(adObject.native[key]).forEach(function (extKey) {
        if (adObject.native[key][extKey]) {
          var value = getAssetValue(adObject.native[key][extKey]);
          message.assets.push({
            key: extKey,
            value: value
          });
        }
      });
    } else if (adObject.native[key] && CONSTANTS.NATIVE_KEYS.hasOwnProperty(key)) {
      var value = getAssetValue(adObject.native[key]);
      message.assets.push({
        key: key,
        value: value
      });
    }
  });
  return message;
}
/**
 * Native assets can be a string or an object with a url prop. Returns the value
 * appropriate for sending in adserver targeting or placeholder replacement.
 */

function getAssetValue(value) {
  if (_typeof(value) === 'object' && value.url) {
    return value.url;
  }

  return value;
}

function getNativeKeys(adUnit) {
  var extraNativeKeys = {};

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'nativeParams.ext')) {
    Object.keys(adUnit.nativeParams.ext).forEach(function (extKey) {
      extraNativeKeys[extKey] = "hb_native_".concat(extKey);
    });
  }

  return _objectSpread(_objectSpread({}, CONSTANTS.NATIVE_KEYS), extraNativeKeys);
}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(478);
var path = __webpack_require__(45);

module.exports = path.URLSearchParams;


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(101);
var $ = __webpack_require__(16);
var getBuiltIn = __webpack_require__(26);
var USE_NATIVE_URL = __webpack_require__(479);
var redefine = __webpack_require__(72);
var redefineAll = __webpack_require__(96);
var setToStringTag = __webpack_require__(60);
var createIteratorConstructor = __webpack_require__(97);
var InternalStateModule = __webpack_require__(46);
var anInstance = __webpack_require__(69);
var hasOwn = __webpack_require__(31);
var bind = __webpack_require__(25);
var classof = __webpack_require__(59);
var anObject = __webpack_require__(17);
var isObject = __webpack_require__(30);
var create = __webpack_require__(71);
var createPropertyDescriptor = __webpack_require__(44);
var getIterator = __webpack_require__(74);
var getIteratorMethod = __webpack_require__(58);
var wellKnownSymbol = __webpack_require__(23);

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(23);
var IS_PURE = __webpack_require__(19);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPriceBucketString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isValidPriceConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'max': 3,
    'increment': 0.01
  }, {
    'max': 8,
    'increment': 0.05
  }, {
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.05
  }, {
    'max': 10,
    'increment': 0.1
  }, {
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cpmFloat = parseFloat(cpm);

  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';

  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }

  var cap = config.buckets.reduce(function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }

    return curr;
  }, {
    'max': 0
  });
  var bucketFloor = 0;
  var bucket = __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default()(config.buckets, function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;

      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }

      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucketFloor * granularityMultiplier) {
      bucket.min = bucketFloor;
      return bucket;
    } else {
      bucketFloor = bucket.max;
    }
  });

  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket, granularityMultiplier);
  }

  return cpmStr;
}

function isValidPriceConfig(config) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isEmpty"])(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }

  var isValid = true;
  config.buckets.forEach(function (bucket) {
    if (!bucket.max || !bucket.increment) {
      isValid = false;
    }
  });
  return isValid;
}

function getCpmTarget(cpm, bucket, granularityMultiplier) {
  var precision = typeof bucket.precision !== 'undefined' ? bucket.precision : _defaultPrecision;
  var increment = bucket.increment * granularityMultiplier;
  var bucketMin = bucket.min * granularityMultiplier; // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.

  var pow = Math.pow(10, precision + 2);
  var cpmToFloor = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget = Math.floor(cpmToFloor) * increment + bucketMin; // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}



/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"DEFAULT_TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"}}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(85);
var requireObjectCoercible = __webpack_require__(52);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(52);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(65);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(26);

module.exports = getBuiltIn;


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var Iterators = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(23);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var classofRaw = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(23);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(68);
var defineProperty = __webpack_require__(35).f;
var createNonEnumerableProperty = __webpack_require__(33);
var has = __webpack_require__(31);
var toString = __webpack_require__(127);
var wellKnownSymbol = __webpack_require__(23);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERSYNC_DEFAULT_CONFIG */
/* unused harmony export newUserSync */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storageManager_js__ = __webpack_require__(7);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var USERSYNC_DEFAULT_CONFIG = {
  syncEnabled: true,
  filterSettings: {
    image: {
      bidders: '*',
      filter: 'include'
    }
  },
  syncsPerBidder: 5,
  syncDelay: 3000,
  auctionDelay: 0
}; // Set userSync default values

__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].setDefaults({
  'userSync': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(USERSYNC_DEFAULT_CONFIG)
});
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__storageManager_js__["a" /* getCoreStorageManager */])('usersync');
/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */

function newUserSync(userSyncDependencies) {
  var publicApi = {}; // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults

  var queue = getDefaultQueue(); // Whether or not user syncs have been trigger on this page load for a specific bidder

  var hasFiredBidder = new Set(); // How many bids for each adapter

  var numAdapterBids = {}; // for now - default both to false in case filterSettings config is absent/misconfigured

  var permittedPixels = {
    image: true,
    iframe: false
  }; // Use what is in config by default

  var usConfig = userSyncDependencies.config; // Update if it's (re)set

  __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync', function (conf) {
    // Added this logic for https://github.com/prebid/Prebid.js/issues/4864
    // if userSync.filterSettings does not contain image/all configs, merge in default image config to ensure image pixels are fired
    if (conf.userSync) {
      var fs = conf.userSync.filterSettings;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isPlainObject"])(fs)) {
        if (!fs.image && !fs.all) {
          conf.userSync.filterSettings.image = {
            bidders: '*',
            filter: 'include'
          };
        }
      }
    }

    usConfig = _extends(usConfig, conf.userSync);
  });
  /**
   * @function getDefaultQueue
   * @summary Returns the default empty queue
   * @private
   * @return {object} A queue with no syncs
   */

  function getDefaultQueue() {
    return {
      image: [],
      iframe: []
    };
  }
  /**
   * @function fireSyncs
   * @summary Trigger all user syncs in the queue
   * @private
   */


  function fireSyncs() {
    if (!usConfig.syncEnabled || !userSyncDependencies.browserSupportsCookies) {
      return;
    }

    try {
      // Iframe syncs
      loadIframes(); // Image pixels

      fireImagePixels();
    } catch (e) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Error firing user syncs', e);
    } // Reset the user sync queue


    queue = getDefaultQueue();
  }

  function forEachFire(queue, fn) {
    // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"])(queue).forEach(function (sync) {
      fn(sync);
      hasFiredBidder.add(sync[0]);
    });
  }
  /**
   * @function fireImagePixels
   * @summary Loops through user sync pixels and fires each one
   * @private
   */


  function fireImagePixels() {
    if (!permittedPixels.image) {
      return;
    }

    forEachFire(queue.image, function (sync) {
      var _sync = _slicedToArray(sync, 2),
          bidderName = _sync[0],
          trackingPixelUrl = _sync[1];

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Invoking image pixel user sync for bidder: ".concat(bidderName)); // Create image object and add the src url

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"])(trackingPixelUrl);
    });
  }
  /**
   * @function loadIframes
   * @summary Loops through iframe syncs and loads an iframe element into the page
   * @private
   */


  function loadIframes() {
    if (!permittedPixels.iframe) {
      return;
    }

    forEachFire(queue.iframe, function (sync) {
      var _sync2 = _slicedToArray(sync, 2),
          bidderName = _sync2[0],
          iframeUrl = _sync2[1];

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("Invoking iframe user sync for bidder: ".concat(bidderName)); // Insert iframe into DOM

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["insertUserSyncIframe"])(iframeUrl); // for a bidder, if iframe sync is present then remove image pixel

      removeImagePixelsForBidder(queue, bidderName);
    });
  }

  function removeImagePixelsForBidder(queue, iframeSyncBidderName) {
    queue.image = queue.image.filter(function (imageSync) {
      var imageSyncBidderName = imageSync[0];
      return imageSyncBidderName !== iframeSyncBidderName;
    });
  }
  /**
   * @function incrementAdapterBids
   * @summary Increment the count of user syncs queue for the adapter
   * @private
   * @params {object} numAdapterBids The object contain counts for all adapters
   * @params {string} bidder The name of the bidder adding a sync
   * @returns {object} The updated version of numAdapterBids
   */


  function incrementAdapterBids(numAdapterBids, bidder) {
    if (!numAdapterBids[bidder]) {
      numAdapterBids[bidder] = 1;
    } else {
      numAdapterBids[bidder] += 1;
    }

    return numAdapterBids;
  }
  /**
   * @function registerSync
   * @summary Add sync for this bidder to a queue to be fired later
   * @public
   * @params {string} type The type of the sync including image, iframe
   * @params {string} bidder The name of the adapter. e.g. "rubicon"
   * @params {string} url Either the pixel url or iframe url depending on the type
    * @example <caption>Using Image Sync</caption>
   * // registerSync(type, adapter, pixelUrl)
   * userSync.registerSync('image', 'rubicon', 'http://example.com/pixel')
   */


  publicApi.registerSync = function (type, bidder, url) {
    if (hasFiredBidder.has(bidder)) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("already fired syncs for \"".concat(bidder, "\", ignoring registerSync call"));
    }

    if (!usConfig.syncEnabled || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(queue[type])) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("User sync type \"".concat(type, "\" not supported"));
    }

    if (!bidder) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Bidder is required for registering sync");
    }

    if (usConfig.syncsPerBidder !== 0 && Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Number of user syncs exceeded for \"".concat(bidder, "\""));
    }

    var canBidderRegisterSync = publicApi.canBidderRegisterSync(type, bidder);

    if (!canBidderRegisterSync) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Bidder \"".concat(bidder, "\" not permitted to register their \"").concat(type, "\" userSync pixels."));
    } // the bidder's pixel has passed all checks and is allowed to register


    queue[type].push([bidder, url]);
    numAdapterBids = incrementAdapterBids(numAdapterBids, bidder);
  };
  /**
   * @function shouldBidderBeBlocked
   * @summary Check filterSettings logic to determine if the bidder should be prevented from registering their userSync tracker
   * @private
   * @param {string} type The type of the sync; either image or iframe
   * @param {string} bidder The name of the adapter. e.g. "rubicon"
   * @returns {boolean} true => bidder is not allowed to register; false => bidder can register
    */


  function shouldBidderBeBlocked(type, bidder) {
    var filterConfig = usConfig.filterSettings; // apply the filter check if the config object is there (eg filterSettings.iframe exists) and if the config object is properly setup

    if (isFilterConfigValid(filterConfig, type)) {
      permittedPixels[type] = true;
      var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
      var biddersToFilter = activeConfig.bidders === '*' ? [bidder] : activeConfig.bidders;
      var filterType = activeConfig.filter || 'include'; // set default if undefined
      // return true if the bidder is either: not part of the include (ie outside the whitelist) or part of the exclude (ie inside the blacklist)

      var checkForFiltering = {
        'include': function include(bidders, bidder) {
          return !__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(bidders, bidder);
        },
        'exclude': function exclude(bidders, bidder) {
          return __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(bidders, bidder);
        }
      };
      return checkForFiltering[filterType](biddersToFilter, bidder);
    }

    return !permittedPixels[type];
  }
  /**
   * @function isFilterConfigValid
   * @summary Check if the filterSettings object in the userSync config is setup properly
   * @private
   * @param {object} filterConfig sub-config object taken from filterSettings
   * @param {string} type The type of the sync; either image or iframe
   * @returns {boolean} true => config is setup correctly, false => setup incorrectly or filterConfig[type] is not present
   */


  function isFilterConfigValid(filterConfig, type) {
    if (filterConfig.all && filterConfig[type]) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Detected presence of the \"filterSettings.all\" and \"filterSettings.".concat(type, "\" in userSync config.  You cannot mix \"all\" with \"iframe/image\" configs; they are mutually exclusive."));
      return false;
    }

    var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
    var activeConfigName = filterConfig.all ? 'all' : type; // if current pixel type isn't part of the config's logic, skip rest of the config checks...
    // we return false to skip subsequent filter checks in shouldBidderBeBlocked() function

    if (!activeConfig) {
      return false;
    }

    var filterField = activeConfig.filter;
    var biddersField = activeConfig.bidders;

    if (filterField && filterField !== 'include' && filterField !== 'exclude') {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("UserSync \"filterSettings.".concat(activeConfigName, ".filter\" setting '").concat(filterField, "' is not a valid option; use either 'include' or 'exclude'."));
      return false;
    }

    if (biddersField !== '*' && !(Array.isArray(biddersField) && biddersField.length > 0 && biddersField.every(function (bidderInList) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"])(bidderInList) && bidderInList !== '*';
    }))) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Detected an invalid setup in userSync \"filterSettings.".concat(activeConfigName, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."));
      return false;
    }

    return true;
  }
  /**
   * @function syncUsers
   * @summary Trigger all the user syncs based on publisher-defined timeout
   * @public
   * @params {int} timeout The delay in ms before syncing data - default 0
   */


  publicApi.syncUsers = function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (timeout) {
      return setTimeout(fireSyncs, Number(timeout));
    }

    fireSyncs();
  };
  /**
   * @function triggerUserSyncs
   * @summary A `syncUsers` wrapper for determining if enableOverride has been turned on
   * @public
   */


  publicApi.triggerUserSyncs = function () {
    if (usConfig.enableOverride) {
      publicApi.syncUsers();
    }
  };

  publicApi.canBidderRegisterSync = function (type, bidder) {
    if (usConfig.filterSettings) {
      if (shouldBidderBeBlocked(type, bidder)) {
        return false;
      }
    }

    return true;
  };

  return publicApi;
}
var browserSupportsCookies = !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isSafariBrowser"])() && storage.cookiesAreEnabled();
var userSync = newUserSync({
  config: __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync'),
  browserSupportsCookies: browserSupportsCookies
});
/**
 * @typedef {Object} UserSyncDependencies
 *
 * @property {UserSyncConfig} config
 * @property {boolean} browserSupportsCookies True if the current browser supports cookies, and false otherwise.
 */

/**
 * @typedef {Object} UserSyncConfig
 *
 * @property {boolean} enableOverride
 * @property {boolean} syncEnabled
 * @property {int} syncsPerBidder
 * @property {string[]} enabledBidders
 * @property {Object} filterSettings
 */

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerVideoSupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var prebid = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();
/**
 * This file defines the plugin points in prebid-core for AdServer-specific functionality.
 *
 * Its main job is to expose functions for AdServer modules to append functionality to the Prebid public API.
 * For a given Ad Server with name "adServerName", these functions will only change the API in the
 * $$PREBID_GLOBAL$$.adServers[adServerName] namespace.
 */

/**
 * @typedef {Object} CachedVideoBid
 *
 * @property {string} videoCacheId The ID which can be used to retrieve this video from prebid-server.
 *   This is the same ID given to the callback in the videoCache's store function.
 */

/**
 * @function VideoAdUrlBuilder
 *
 * @param {CachedVideoBid} bid The winning Bid which the ad server should show, assuming it beats out
 *   the competition.
 *
 * @param {Object} options Options required by the Ad Server to make a valid AdServer URL.
 *   This object will have different properties depending on the specific ad server supported.
 *   For more information, see the docs inside the ad server module you're supporting.
 *
 * @return {string} A URL which can be passed into the Video player to play an ad.
 */

/**
 * @typedef {Object} VideoSupport
 *
 * @function {VideoAdUrlBuilder} buildVideoAdUrl
 */

/**
 * Enable video support for the Ad Server.
 *
 * @property {string} name The identifying name for this adserver.
 * @property {VideoSupport} videoSupport An object with the functions needed to support video in Prebid.
 */

function registerVideoSupport(name, videoSupport) {
  prebid.adServers = prebid.adServers || {};
  prebid.adServers[name] = prebid.adServers[name] || {};
  Object.keys(videoSupport).forEach(function (key) {
    if (prebid.adServers[name][key]) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("Attempting to add an already registered function property ".concat(key, " for AdServer ").concat(name, "."));
      return;
    }

    prebid.adServers[name][key] = videoSupport[key];
  });
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(25);
var IndexedObject = __webpack_require__(85);
var toObject = __webpack_require__(53);
var toLength = __webpack_require__(54);
var arraySpeciesCreate = __webpack_require__(114);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var setGlobal = __webpack_require__(116);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(23);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return storageCallbacks; });
/* unused harmony export newStorageManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateStorageEnforcement; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getCoreStorageManager;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStorageManager;
/* unused harmony export resetData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js__);



var moduleTypeWhiteList = ['core', 'prebid-module'];
var storageCallbacks = [];
/**
 * Storage options
 * @typedef {Object} storageOptions
 * @property {Number=} gvlid - Vendor id
 * @property {string} moduleName - Module name
 * @property {string=} moduleType - Module type, value can be anyone of core or prebid-module
 */

/**
 * Returns list of storage related functions with gvlid, module name and module type in its scope.
 * All three argument are optional here. Below shows the usage of of these
 * - GVL Id: Pass GVL id if you are a vendor
 * - Module name: All modules need to pass module name
 * - Module type: Some modules may need these functions but are not vendor. e.g prebid core files in src and modules like currency.
 * @param {storageOptions} options
 */

function newStorageManager() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      gvlid = _ref.gvlid,
      moduleName = _ref.moduleName,
      moduleType = _ref.moduleType;

  function isValid(cb) {
    if (__WEBPACK_IMPORTED_MODULE_2_core_js_pure_features_array_includes_js___default()(moduleTypeWhiteList, moduleType)) {
      var result = {
        valid: true
      };
      return cb(result);
    } else {
      var value;
      var hookDetails = {
        hasEnforcementHook: false
      };
      validateStorageEnforcement(gvlid, moduleName, hookDetails, function (result) {
        if (result && result.hasEnforcementHook) {
          value = cb(result);
        } else {
          var _result = {
            hasEnforcementHook: false,
            valid: Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"])()
          };
          value = cb(_result);
        }
      });
      return value;
    }
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {string} [expires='']
   * @param {string} [sameSite='/']
   * @param {string} [domain] domain (e.g., 'example.com' or 'subdomain.example.com').
   * If not specified, defaults to the host portion of the current document location.
   * If a domain is specified, subdomains are always included.
   * Domain must match the domain of the JavaScript origin. Setting cookies to foreign domains will be silently ignored.
   */


  var setCookie = function setCookie(key, value, expires, sameSite, domain, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var domainPortion = domain && domain !== '' ? " ;domain=".concat(encodeURIComponent(domain)) : '';
        var expiresPortion = expires && expires !== '' ? " ;expires=".concat(expires) : '';
        var isNone = sameSite != null && sameSite.toLowerCase() == 'none';
        var secure = isNone ? '; Secure' : '';
        document.cookie = "".concat(key, "=").concat(encodeURIComponent(value)).concat(expiresPortion, "; path=/").concat(domainPortion).concat(sameSite ? "; SameSite=".concat(sameSite) : '').concat(secure);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} name
   * @returns {(string|null)}
   */


  var getCookie = function getCookie(name, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var m = window.document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]*)\\s*(;|$)');
        return m ? decodeURIComponent(m[2]) : null;
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var localStorageIsEnabled = function localStorageIsEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          localStorage.setItem('prebid.cookieTest', '1');
          return localStorage.getItem('prebid.cookieTest') === '1';
        } catch (error) {} finally {
          try {
            localStorage.removeItem('prebid.cookieTest');
          } catch (error) {}
        }
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var cookiesAreEnabled = function cookiesAreEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["checkCookieSupport"])()) {
          return true;
        }

        window.document.cookie = 'prebid.cookieTest';
        return window.document.cookie.indexOf('prebid.cookieTest') !== -1;
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @param {string} value
   */


  var setDataInLocalStorage = function setDataInLocalStorage(key, value, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        window.localStorage.setItem(key, value);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @returns {(string|null)}
   */


  var getDataFromLocalStorage = function getDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        return window.localStorage.getItem(key);
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   */


  var removeDataFromLocalStorage = function removeDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid && hasLocalStorage()) {
        window.localStorage.removeItem(key);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var hasLocalStorage = function hasLocalStorage(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          return !!window.localStorage;
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Local storage api disabled');
        }
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * Returns all cookie values from the jar whose names contain the `keyLike`
   * Needs to exist in `utils.js` as it follows the StorageHandler interface defined in live-connect-js. If that module were to be removed, this function can go as well.
   * @param {string} keyLike
   * @return {[]}
   */


  var findSimilarCookies = function findSimilarCookies(keyLike, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var all = [];

        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"])()) {
          var cookies = document.cookie.split(';');

          while (cookies.length) {
            var cookie = cookies.pop();
            var separatorIndex = cookie.indexOf('=');
            separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
            var cookieName = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));

            if (cookieName.indexOf(keyLike) >= 0) {
              all.push(decodeURIComponent(cookie.slice(separatorIndex + 1)));
            }
          }
        }

        return all;
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };

  return {
    setCookie: setCookie,
    getCookie: getCookie,
    localStorageIsEnabled: localStorageIsEnabled,
    cookiesAreEnabled: cookiesAreEnabled,
    setDataInLocalStorage: setDataInLocalStorage,
    getDataFromLocalStorage: getDataFromLocalStorage,
    removeDataFromLocalStorage: removeDataFromLocalStorage,
    hasLocalStorage: hasLocalStorage,
    findSimilarCookies: findSimilarCookies
  };
}
/**
 * This hook validates the storage enforcement if gdprEnforcement module is included
 */

var validateStorageEnforcement = Object(__WEBPACK_IMPORTED_MODULE_0__hook_js__["b" /* hook */])('async', function (gvlid, moduleName, hookDetails, callback) {
  callback(hookDetails);
}, 'validateStorageEnforcement');
/**
 * This function returns storage functions to access cookies and localstorage. This function will bypass the gdpr enforcement requirement. Prebid as a software needs to use storage in some scenarios and is not a vendor so GDPR enforcement rules does not apply on Prebid.
 * @param {string} moduleName Module name
 */

function getCoreStorageManager(moduleName) {
  return newStorageManager({
    moduleName: moduleName,
    moduleType: 'core'
  });
}
/**
 * Note: Core modules or Prebid modules like Currency, SizeMapping should use getCoreStorageManager
 * This function returns storage functions to access cookies and localstorage. Bidders and User id modules should import this and use it in their module if needed. GVL ID and Module name are optional param but gvl id is needed for when gdpr enforcement module is used.
 * @param {Number=} gvlid Vendor id
 * @param {string=} moduleName BidderCode or module name
 */

function getStorageManager(gvlid, moduleName) {
  return newStorageManager({
    gvlid: gvlid,
    moduleName: moduleName
  });
}
function resetData() {
  storageCallbacks = [];
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(88);
var uid = __webpack_require__(67);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var defineProperties = __webpack_require__(131);
var enumBugKeys = __webpack_require__(95);
var hiddenKeys = __webpack_require__(57);
var html = __webpack_require__(134);
var documentCreateElement = __webpack_require__(87);
var sharedKey = __webpack_require__(70);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(33);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var createIteratorConstructor = __webpack_require__(97);
var getPrototypeOf = __webpack_require__(99);
var setPrototypeOf = __webpack_require__(136);
var setToStringTag = __webpack_require__(60);
var createNonEnumerableProperty = __webpack_require__(33);
var redefine = __webpack_require__(72);
var wellKnownSymbol = __webpack_require__(23);
var IS_PURE = __webpack_require__(19);
var Iterators = __webpack_require__(40);
var IteratorsCore = __webpack_require__(98);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var getIteratorMethod = __webpack_require__(58);

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(165);

module.exports = parent;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adunitCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);

var adUnits = {};

function ensureAdUnit(adunit, bidderCode) {
  var adUnit = adUnits[adunit] = adUnits[adunit] || {
    bidders: {}
  };

  if (bidderCode) {
    return adUnit.bidders[bidderCode] = adUnit.bidders[bidderCode] || {};
  }

  return adUnit;
}

function incrementAdUnitCount(adunit, counter, bidderCode) {
  var adUnit = ensureAdUnit(adunit, bidderCode);
  adUnit[counter] = (adUnit[counter] || 0) + 1;
  return adUnit[counter];
}
/**
 * Increments and returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function incrementRequestsCounter(adunit) {
  return incrementAdUnitCount(adunit, 'requestsCounter');
}
/**
 * Increments and returns current Adunit requests counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderRequestsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'requestsCounter', bidderCode);
}
/**
 * Increments and returns current Adunit wins counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderWinsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'winsCounter', bidderCode);
}
/**
 * Returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function getRequestsCounter(adunit) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderRequestsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderWinsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".winsCounter")) || 0;
}
/**
 * A module which counts how many times an adunit was called
 * @module adunitCounter
 */


var adunitCounter = {
  incrementRequestsCounter: incrementRequestsCounter,
  incrementBidderRequestsCounter: incrementBidderRequestsCounter,
  incrementBidderWinsCounter: incrementBidderWinsCounter,
  getRequestsCounter: getRequestsCounter,
  getBidderRequestsCounter: getBidderRequestsCounter,
  getBidderWinsCounter: getBidderWinsCounter
};


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHook; });
/* harmony export (immutable) */ __webpack_exports__["d"] = setupBeforeHookFnOnce;
/* harmony export (immutable) */ __webpack_exports__["c"] = module;
/* harmony export (immutable) */ __webpack_exports__["e"] = submodule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var hook = __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default()({
  ready: __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.SYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.ASYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.QUEUE
});
var getHook = hook.get;
function setupBeforeHookFnOnce(baseFn, hookFn) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
  var result = baseFn.getHooks({
    hook: hookFn
  });

  if (result.length === 0) {
    baseFn.before(hookFn, priority);
  }
}
var submoduleInstallMap = {};
function module(name, install) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$postInstallAllow = _ref.postInstallAllowed,
      postInstallAllowed = _ref$postInstallAllow === void 0 ? false : _ref$postInstallAllow;

  hook('async', function (submodules) {
    submodules.forEach(function (args) {
      return install.apply(void 0, _toConsumableArray(args));
    });
    if (postInstallAllowed) submoduleInstallMap[name] = install;
  }, name)([]); // will be queued until hook.ready() called in pbjs.processQueue();
}
function submodule(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var install = submoduleInstallMap[name];
  if (install) return install.apply(void 0, args);
  getHook(name).before(function (next, modules) {
    modules.push(args);
    next(modules);
  });
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(227);

module.exports = parent;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adUnitSetupChecks", function() { return adUnitSetupChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAdUnitSetup", function() { return checkAdUnitSetup; });
/* harmony export (immutable) */ __webpack_exports__["executeCallbacks"] = executeCallbacks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userSync_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__targeting_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__debugging_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adUnits_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Renderer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bidfactory_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__storageManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adRendering_js__ = __webpack_require__(104);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module pbjs */















var pbjs = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();

var CONSTANTS = __webpack_require__(5);

var adapterManager = __webpack_require__(9).default;

var events = __webpack_require__(10);

var triggerUserSyncs = __WEBPACK_IMPORTED_MODULE_3__userSync_js__["a" /* userSync */].triggerUserSyncs;
/* private variables */

var _CONSTANTS$EVENTS = CONSTANTS.EVENTS,
    ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
    SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
    STALE_RENDER = _CONSTANTS$EVENTS.STALE_RENDER;
var _CONSTANTS$AD_RENDER_ = CONSTANTS.AD_RENDER_FAILED_REASON,
    PREVENT_WRITING_ON_MAIN_DOCUMENT = _CONSTANTS$AD_RENDER_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
    NO_AD = _CONSTANTS$AD_RENDER_.NO_AD,
    EXCEPTION = _CONSTANTS$AD_RENDER_.EXCEPTION,
    CANNOT_FIND_AD = _CONSTANTS$AD_RENDER_.CANNOT_FIND_AD,
    MISSING_DOC_OR_ADID = _CONSTANTS$AD_RENDER_.MISSING_DOC_OR_ADID;
var eventValidators = {
  bidWon: checkDefinedPlacement
}; // initialize existing debugging sessions if present

Object(__WEBPACK_IMPORTED_MODULE_8__debugging_js__["d" /* sessionLoader */])();
/* Public vars */

pbjs.bidderSettings = pbjs.bidderSettings || {}; // let the world know we are loaded

pbjs.libLoaded = true; // version auto generated from build

pbjs.version = "v6.13.0-pre";
Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Prebid.js v6.13.0-pre loaded");
pbjs.installedModules = pbjs.installedModules || []; // create adUnit array

pbjs.adUnits = pbjs.adUnits || []; // Allow publishers who enable user sync override to trigger their sync

pbjs.triggerUserSyncs = triggerUserSyncs;

function checkDefinedPlacement(id) {
  var adUnitCodes = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsRequested().map(function (bidSet) {
    return bidSet.bids.map(function (bid) {
      return bid.adUnitCode;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_1__utils_js__["flatten"]).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["contains"])(adUnitCodes, id)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The "' + id + '" placement is not defined.');
    return;
  }

  return true;
}

function setRenderSize(doc, width, height) {
  if (doc.defaultView && doc.defaultView.frameElement) {
    doc.defaultView.frameElement.width = width;
    doc.defaultView.frameElement.height = height;
  }
}

function validateSizes(sizes, targLength) {
  var cleanSizes = [];

  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(sizes) && (targLength ? sizes.length === targLength : sizes.length > 0)) {
    // check if an array of arrays or array of numbers
    if (sizes.every(function (sz) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sz, 2);
    })) {
      cleanSizes = sizes;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sizes, 2)) {
      cleanSizes.push(sizes);
    }
  }

  return cleanSizes;
}

function validateBannerMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var banner = validatedAdUnit.mediaTypes.banner;
  var bannerSizes = validateSizes(banner.sizes);

  if (bannerSizes.length > 0) {
    banner.sizes = bannerSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.banner.sizes

    validatedAdUnit.sizes = bannerSizes;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.');
    delete validatedAdUnit.mediaTypes.banner;
  }

  return validatedAdUnit;
}

function validateVideoMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var video = validatedAdUnit.mediaTypes.video;

  if (video.playerSize) {
    var tarPlayerSizeLen = typeof video.playerSize[0] === 'number' ? 2 : 1;
    var videoSizes = validateSizes(video.playerSize, tarPlayerSizeLen);

    if (videoSizes.length > 0) {
      if (tarPlayerSizeLen === 2) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.');
      }

      video.playerSize = videoSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.video.playerSize

      validatedAdUnit.sizes = videoSizes;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.');
      delete validatedAdUnit.mediaTypes.video.playerSize;
    }
  }

  return validatedAdUnit;
}

function validateNativeMediaType(adUnit) {
  var validatedAdUnit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(adUnit);
  var native = validatedAdUnit.mediaTypes.native;

  if (native.image && native.image.sizes && !Array.isArray(native.image.sizes)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.image.sizes;
  }

  if (native.image && native.image.aspect_ratios && !Array.isArray(native.image.aspect_ratios)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.');
    delete validatedAdUnit.mediaTypes.native.image.aspect_ratios;
  }

  if (native.icon && native.icon.sizes && !Array.isArray(native.icon.sizes)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.');
    delete validatedAdUnit.mediaTypes.native.icon.sizes;
  }

  return validatedAdUnit;
}

function validateAdUnitPos(adUnit, mediaType) {
  var pos = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, "mediaTypes.".concat(mediaType, ".pos"));

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isNumber"])(pos) || isNaN(pos) || !isFinite(pos)) {
    var warning = "Value of property 'pos' on ad unit ".concat(adUnit.code, " should be of type: Number");
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])(warning);
    events.emit(CONSTANTS.EVENTS.AUCTION_DEBUG, {
      type: 'WARNING',
      arguments: warning
    });
    delete adUnit.mediaTypes[mediaType].pos;
  }

  return adUnit;
}

var adUnitSetupChecks = {
  validateBannerMediaType: validateBannerMediaType,
  validateVideoMediaType: validateVideoMediaType,
  validateNativeMediaType: validateNativeMediaType,
  validateSizes: validateSizes
};
var checkAdUnitSetup = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (adUnits) {
  var validatedAdUnits = [];
  adUnits.forEach(function (adUnit) {
    var mediaTypes = adUnit.mediaTypes;
    var bids = adUnit.bids;
    var validatedBanner, validatedVideo, validatedNative;

    if (!bids || !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(bids)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Detected adUnit.code '".concat(adUnit.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
      return;
    }

    if (!mediaTypes || Object.keys(mediaTypes).length === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Detected adUnit.code '".concat(adUnit.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));
      return;
    }

    if (mediaTypes.banner) {
      validatedBanner = validateBannerMediaType(adUnit);
      if (mediaTypes.banner.hasOwnProperty('pos')) validatedBanner = validateAdUnitPos(validatedBanner, 'banner');
    }

    if (mediaTypes.video) {
      validatedVideo = validatedBanner ? validateVideoMediaType(validatedBanner) : validateVideoMediaType(adUnit);
      if (mediaTypes.video.hasOwnProperty('pos')) validatedVideo = validateAdUnitPos(validatedVideo, 'video');
    }

    if (mediaTypes.native) {
      validatedNative = validatedVideo ? validateNativeMediaType(validatedVideo) : validatedBanner ? validateNativeMediaType(validatedBanner) : validateNativeMediaType(adUnit);
    }

    var validatedAdUnit = _extends({}, validatedBanner, validatedVideo, validatedNative);

    validatedAdUnits.push(validatedAdUnit);
  });
  return validatedAdUnits;
}, 'checkAdUnitSetup'); /// ///////////////////////////////
//                              //
//    Start Public APIs         //
//                              //
/// ///////////////////////////////

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param  {string} [adunitCode] adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCodeStr
 * @return {Array}  returnObj return bids array
 */

pbjs.getAdserverTargetingForAdUnitCodeStr = function (adunitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments); // call to retrieve bids array

  if (adunitCode) {
    var res = pbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["transformAdServerTargetingObj"])(res);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getHighestUnusedBidResponseForAdUnitCode
 * @returns {Object}  returnObj return bid
 */


pbjs.getHighestUnusedBidResponseForAdUnitCode = function (adunitCode) {
  if (adunitCode) {
    var bid = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAllBidsForAdUnitCode(adunitCode).filter(__WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* filters */].isUnusedBid).filter(__WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* filters */].isBidNotExpired);
    return bid.length ? bid.reduce(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getHighestCpm"]) : {};
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCode
 * @returns {Object}  returnObj return bids
 */


pbjs.getAdserverTargetingForAdUnitCode = function (adUnitCode) {
  return pbjs.getAdserverTargeting(adUnitCode)[adUnitCode];
};
/**
 * returns all ad server targeting for all ad units
 * @return {Object} Map of adUnitCodes and targeting values []
 * @alias module:pbjs.getAdserverTargeting
 */


pbjs.getAdserverTargeting = function (adUnitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getAdserverTargeting", arguments);
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting(adUnitCode);
};

function getBids(type) {
  var responses = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */][type]().filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["bind"].call(__WEBPACK_IMPORTED_MODULE_1__utils_js__["adUnitsFilter"], this, __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAdUnitCodes())); // find the last auction id to get responses for most recent auction only

  var currentAuctionId = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getLastAuctionId();
  return responses.map(function (bid) {
    return bid.adUnitCode;
  }).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]).map(function (adUnitCode) {
    return responses.filter(function (bid) {
      return bid.auctionId === currentAuctionId && bid.adUnitCode === adUnitCode;
    });
  }).filter(function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  }).map(function (bids) {
    return _defineProperty({}, bids[0].adUnitCode, {
      bids: bids
    });
  }).reduce(function (a, b) {
    return _extends(a, b);
  }, {});
}
/**
 * This function returns the bids requests involved in an auction but not bid on
 * @alias module:pbjs.getNoBids
 * @return {Object}            map | object that contains the bidRequests
 */


pbjs.getNoBids = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getNoBids", arguments);
  return getBids('getNoBids');
};
/**
 * This function returns the bids requests involved in an auction but not bid on or the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getNoBidsForAdUnitCode
 * @return {Object}           bidResponse object
 */


pbjs.getNoBidsForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getNoBids().filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};
/**
 * This function returns the bid responses at the given moment.
 * @alias module:pbjs.getBidResponses
 * @return {Object}            map | object that contains the bidResponses
 */


pbjs.getBidResponses = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getBidResponses", arguments);
  return getBids('getBidsReceived');
};
/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */


pbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};
/**
 * Set query string targeting on one or more GPT ad units.
 * @param {(string|string[])} adUnit a single `adUnit.code` or multiple.
 * @param {function(object)} customSlotMatching gets a GoogleTag slot and returns a filter function for adUnitCode, so you can decide to match on either eg. return slot => { return adUnitCode => { return slot.getSlotElementId() === 'myFavoriteDivId'; } };
 * @alias module:pbjs.setTargetingForGPTAsync
 */


pbjs.setTargetingForGPTAsync = function (adUnit, customSlotMatching) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.setTargetingForGPTAsync", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isGptPubadsDefined"])()) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('window.googletag is not defined on the page');
    return;
  } // get our ad unit codes


  var targetingSet = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting(adUnit); // first reset any old targeting

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].resetPresetTargeting(adUnit, customSlotMatching); // now set new targeting keys

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setTargetingForGPT(targetingSet, customSlotMatching);
  Object.keys(targetingSet).forEach(function (adUnitCode) {
    Object.keys(targetingSet[adUnitCode]).forEach(function (targetingKey) {
      if (targetingKey === 'hb_adid') {
        __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].setStatusForBids(targetingSet[adUnitCode][targetingKey], CONSTANTS.BID_STATUS.BID_TARGETING_SET);
      }
    });
  }); // emit event

  events.emit(SET_TARGETING, targetingSet);
};
/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
 * @alias module:pbjs.setTargetingForAst
 */


pbjs.setTargetingForAst = function (adUnitCodes) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.setTargetingForAn", arguments);

  if (!__WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].isApntagDefined()) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('window.apntag is not defined on the page');
    return;
  }

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setTargetingForAst(adUnitCodes); // emit event

  events.emit(SET_TARGETING, __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getAllTargeting());
};
/**
 * This function will check for presence of given node in given parent. If not present - will inject it.
 * @param {Node} node node, whose existance is in question
 * @param {Document} doc document element do look in
 * @param {string} tagName tag name to look in
 */


function reinjectNodeIfRemoved(node, doc, tagName) {
  var injectionNode = doc.querySelector(tagName);

  if (!node.parentNode || node.parentNode !== injectionNode) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(node, doc, tagName);
  }
}
/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {Document} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */


pbjs.renderAd = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (doc, id, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.renderAd", arguments);
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('Calling renderAd with adId :' + id);

  if (doc && id) {
    try {
      // lookup ad by ad Id
      var bid = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].findBidByAdId(id);

      if (bid) {
        var shouldRender = true;

        if (bid && bid.status === CONSTANTS.BID_STATUS.RENDERED) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("Ad id ".concat(bid.adId, " has been rendered before"));
          events.emit(STALE_RENDER, bid);

          if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(__WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('auctionOptions'), 'suppressStaleRender')) {
            shouldRender = false;
          }
        }

        if (shouldRender) {
          // replace macros according to openRTB with price paid = bid.cpm
          bid.ad = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceAuctionPrice"])(bid.ad, bid.cpm);
          bid.adUrl = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceAuctionPrice"])(bid.adUrl, bid.cpm); // replacing clickthrough if submitted

          if (options && options.clickThrough) {
            var clickThrough = options.clickThrough;
            bid.ad = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceClickThrough"])(bid.ad, clickThrough);
            bid.adUrl = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["replaceClickThrough"])(bid.adUrl, clickThrough);
          } // save winning bids


          __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].addWinningBid(bid); // emit 'bid won' event here

          events.emit(BID_WON, bid);
          var height = bid.height,
              width = bid.width,
              ad = bid.ad,
              mediaType = bid.mediaType,
              adUrl = bid.adUrl,
              renderer = bid.renderer;
          var creativeComment = document.createComment("Creative ".concat(bid.creativeId, " served by ").concat(bid.bidder, " Prebid.js Header Bidding"));
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(creativeComment, doc, 'html');

          if (Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
            Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["b" /* executeRenderer */])(renderer, bid);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else if (doc === document && !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["inIframe"])() || mediaType === 'video') {
            var message = "Error trying to write ad. Ad render call ad id ".concat(id, " was prevented from writing to the main document.");
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
              reason: PREVENT_WRITING_ON_MAIN_DOCUMENT,
              message: message,
              bid: bid,
              id: id
            });
          } else if (ad) {
            // will check if browser is firefox and below version 67, if so execute special doc.open()
            // for details see: https://github.com/prebid/Prebid.js/pull/3524
            // TODO remove this browser specific code at later date (when Firefox < 67 usage is mostly gone)
            if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('firefox/') > -1) {
              var firefoxVerRegx = /firefox\/([\d\.]+)/;
              var firefoxVer = navigator.userAgent.toLowerCase().match(firefoxVerRegx)[1]; // grabs the text in the 1st matching group

              if (firefoxVer && parseInt(firefoxVer, 10) < 67) {
                doc.open('text/html', 'replace');
              }
            }

            doc.write(ad);
            doc.close();
            setRenderSize(doc, width, height);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["callBurl"])(bid);
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else if (adUrl) {
            var iframe = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["createInvisibleIframe"])();
            iframe.height = height;
            iframe.width = width;
            iframe.style.display = 'inline';
            iframe.style.overflow = 'hidden';
            iframe.src = adUrl;
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"])(iframe, doc, 'body');
            setRenderSize(doc, width, height);
            reinjectNodeIfRemoved(creativeComment, doc, 'html');
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["callBurl"])(bid);
            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["b" /* emitAdRenderSucceeded */])({
              doc: doc,
              bid: bid,
              id: id
            });
          } else {
            var _message = "Error trying to write ad. No ad for bid response id: ".concat(id);

            Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
              reason: NO_AD,
              message: _message,
              bid: bid,
              id: id
            });
          }
        }
      } else {
        var _message2 = "Error trying to write ad. Cannot find ad by given id : ".concat(id);

        Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
          reason: CANNOT_FIND_AD,
          message: _message2,
          id: id
        });
      }
    } catch (e) {
      var _message3 = "Error trying to write ad Id :".concat(id, " to the page:").concat(e.message);

      Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
        reason: EXCEPTION,
        message: _message3,
        id: id
      });
    }
  } else {
    var _message4 = "Error trying to write ad Id :".concat(id, " to the page. Missing document or adId");

    Object(__WEBPACK_IMPORTED_MODULE_14__adRendering_js__["a" /* emitAdRenderFail */])({
      reason: MISSING_DOC_OR_ADID,
      message: _message4,
      id: id
    });
  }
});
/**
 * Remove adUnit from the $$PREBID_GLOBAL$$ configuration, if there are no addUnitCode(s) it will remove all
 * @param  {string| Array} adUnitCode the adUnitCode(s) to remove
 * @alias module:pbjs.removeAdUnit
 */

pbjs.removeAdUnit = function (adUnitCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.removeAdUnit", arguments);

  if (!adUnitCode) {
    pbjs.adUnits = [];
    return;
  }

  var adUnitCodes;

  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnitCode)) {
    adUnitCodes = adUnitCode;
  } else {
    adUnitCodes = [adUnitCode];
  }

  adUnitCodes.forEach(function (adUnitCode) {
    for (var i = pbjs.adUnits.length - 1; i >= 0; i--) {
      if (pbjs.adUnits[i].code === adUnitCode) {
        pbjs.adUnits.splice(i, 1);
      }
    }
  });
};
/**
 * @param {Object} requestOptions
 * @param {function} requestOptions.bidsBackHandler
 * @param {number} requestOptions.timeout
 * @param {Array} requestOptions.adUnits
 * @param {Array} requestOptions.adUnitCodes
 * @param {Array} requestOptions.labels
 * @param {String} requestOptions.auctionId
 * @alias module:pbjs.requestBids
 */


pbjs.requestBids = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref2.bidsBackHandler,
      timeout = _ref2.timeout,
      adUnits = _ref2.adUnits,
      adUnitCodes = _ref2.adUnitCodes,
      labels = _ref2.labels,
      auctionId = _ref2.auctionId;

  events.emit(REQUEST_BIDS);
  var cbTimeout = timeout || __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('bidderTimeout');
  adUnits = adUnits && __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].convertAdUnitFpd(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnits) ? adUnits : [adUnits]) || pbjs.adUnits;
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.requestBids", arguments);
  var _s2sConfigs = [];
  var s2sBidders = [];
  __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('s2sConfig', function (config) {
    if (config && config.s2sConfig) {
      _s2sConfigs = Array.isArray(config.s2sConfig) ? config.s2sConfig : [config.s2sConfig];
    }
  });

  _s2sConfigs.forEach(function (s2sConfig) {
    s2sBidders.push.apply(s2sBidders, _toConsumableArray(s2sConfig.bidders));
  });

  adUnits = checkAdUnitSetup(adUnits);

  if (adUnitCodes && adUnitCodes.length) {
    // if specific adUnitCodes supplied filter adUnits for those codes
    adUnits = adUnits.filter(function (unit) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(adUnitCodes, unit.code);
    });
  } else {
    // otherwise derive adUnitCodes from adUnits
    adUnitCodes = adUnits && adUnits.map(function (unit) {
      return unit.code;
    });
  }
  /*
   * for a given adunit which supports a set of mediaTypes
   * and a given bidder which supports a set of mediaTypes
   * a bidder is eligible to participate on the adunit
   * if it supports at least one of the mediaTypes on the adunit
   */


  adUnits.forEach(function (adUnit) {
    // get the adunit's mediaTypes, defaulting to banner if mediaTypes isn't present
    var adUnitMediaTypes = Object.keys(adUnit.mediaTypes || {
      'banner': 'banner'
    }); // get the bidder's mediaTypes

    var allBidders = adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
    var bidderRegistry = adapterManager.bidderRegistry;
    var bidders = s2sBidders ? allBidders.filter(function (bidder) {
      return !__WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(s2sBidders, bidder);
    }) : allBidders;
    adUnit.transactionId = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["generateUUID"])();
    bidders.forEach(function (bidder) {
      var adapter = bidderRegistry[bidder];
      var spec = adapter && adapter.getSpec && adapter.getSpec(); // banner is default if not specified in spec

      var bidderMediaTypes = spec && spec.supportedMediaTypes || ['banner']; // check if the bidder's mediaTypes are not in the adUnit's mediaTypes

      var bidderEligible = adUnitMediaTypes.some(function (type) {
        return __WEBPACK_IMPORTED_MODULE_9_core_js_pure_features_array_includes_js___default()(bidderMediaTypes, type);
      });

      if (!bidderEligible) {
        // drop the bidder from the ad unit if it's not compatible
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["unsupportedBidderMessage"])(adUnit, bidder));
        adUnit.bids = adUnit.bids.filter(function (bid) {
          return bid.bidder !== bidder;
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementBidderRequestsCounter(adUnit.code, bidder);
      }
    });
    __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementRequestsCounter(adUnit.code);
  });

  if (!adUnits || adUnits.length === 0) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('No adUnits configured. No bids requested.');

    if (typeof bidsBackHandler === 'function') {
      // executeCallback, this will only be called in case of first request
      try {
        bidsBackHandler();
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error executing bidsBackHandler', null, e);
      }
    }

    return;
  }

  var auction = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].createAuction({
    adUnits: adUnits,
    adUnitCodes: adUnitCodes,
    callback: bidsBackHandler,
    cbTimeout: cbTimeout,
    labels: labels,
    auctionId: auctionId
  });
  var adUnitsLen = adUnits.length;

  if (adUnitsLen > 15) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Current auction ".concat(auction.getAuctionId(), " contains ").concat(adUnitsLen, " adUnits."), adUnits);
  }

  adUnitCodes.forEach(function (code) {
    return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].setLatestAuctionForAdUnit(code, auction.getAuctionId());
  });
  auction.callBids();
});
function executeCallbacks(fn, reqBidsConfigObj) {
  runAll(__WEBPACK_IMPORTED_MODULE_13__storageManager_js__["c" /* storageCallbacks */]);
  runAll(enableAnalyticsCallbacks);
  fn.call(this, reqBidsConfigObj);

  function runAll(queue) {
    var queued;

    while (queued = queue.shift()) {
      queued();
    }
  }
} // This hook will execute all storage callbacks which were registered before gdpr enforcement hook was added. Some bidders, user id modules use storage functions when module is parsed but gdpr enforcement hook is not added at that stage as setConfig callbacks are yet to be called. Hence for such calls we execute all the stored callbacks just before requestBids. At this hook point we will know for sure that gdprEnforcement module is added or not

pbjs.requestBids.before(executeCallbacks, 49);
/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */

pbjs.addAdUnits = function (adUnitArr) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.addAdUnits", arguments);
  pbjs.adUnits.push.apply(pbjs.adUnits, __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].convertAdUnitFpd(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArray"])(adUnitArr) ? adUnitArr : [adUnitArr])); // emit event

  events.emit(ADD_AD_UNITS);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to set on event
 * @param {string} id an identifier in the context of the event
 * @alias module:pbjs.onEvent
 *
 * This API call allows you to register a callback to handle a Prebid.js event.
 * An optional `id` parameter provides more finely-grained event callback registration.
 * This makes it possible to register callback events for a specific item in the
 * event context. For example, `bidWon` events will accept an `id` for ad unit code.
 * `bidWon` callbacks registered with an ad unit code id will be called when a bid
 * for that ad unit code wins the auction. Without an `id` this method registers the
 * callback for every `bidWon` event.
 *
 * Currently `bidWon` is the only event that accepts an `id` parameter.
 */


pbjs.onEvent = function (event, handler, id) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.onEvent", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isFn"])(handler)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }

  if (id && !eventValidators[event].call(null, id)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }

  events.on(event, handler, id);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `$$PREBID_GLOBAL$$.onEvent`)
 * @alias module:pbjs.offEvent
 */


pbjs.offEvent = function (event, handler, id) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.offEvent", arguments);

  if (id && !eventValidators[event].call(null, id)) {
    return;
  }

  events.off(event, handler, id);
};
/**
 * Return a copy of all events emitted
 *
 * @alias module:pbjs.getEvents
 */


pbjs.getEvents = function () {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.getEvents");
  return events.getEvents();
};
/*
 * Wrapper to register bidderAdapter externally (adapterManager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */


pbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.registerBidAdapter", arguments);

  try {
    adapterManager.registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error registering bidder adapter : ' + e.message);
  }
};
/**
 * Wrapper to register analyticsAdapter externally (adapterManager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */


pbjs.registerAnalyticsAdapter = function (options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.registerAnalyticsAdapter", arguments);

  try {
    adapterManager.registerAnalyticsAdapter(options);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error registering analytics adapter : ' + e.message);
  }
};
/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */


pbjs.createBid = function (statusCode) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.createBid", arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_12__bidfactory_js__["a" /* createBid */])(statusCode);
};
/**
 * Enable sending analytics data to the analytics provider of your
 * choice.
 *
 * For usage, see [Integrate with the Prebid Analytics
 * API](http://prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html).
 *
 * For a list of analytics adapters, see [Analytics for
 * Prebid](http://prebid.org/overview/analytics.html).
 * @param  {Object} config
 * @param {string} config.provider The name of the provider, e.g., `"ga"` for Google Analytics.
 * @param {Object} config.options The options for this particular analytics adapter.  This will likely vary between adapters.
 * @alias module:pbjs.enableAnalytics
 */
// Stores 'enableAnalytics' callbacks for later execution.


var enableAnalyticsCallbacks = [];
var enableAnalyticsCb = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (config) {
  if (config && !Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isEmpty"])(config)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.enableAnalytics for: ", config);
    adapterManager.enableAnalytics(config);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("pbjs.enableAnalytics should be called with option {}");
  }
}, 'enableAnalyticsCb');

pbjs.enableAnalytics = function (config) {
  enableAnalyticsCallbacks.push(enableAnalyticsCb.bind(this, config));
};
/**
 * @alias module:pbjs.aliasBidder
 */


pbjs.aliasBidder = function (bidderCode, alias, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logInfo"])("Invoking pbjs.aliasBidder", arguments);

  if (bidderCode && alias) {
    adapterManager.aliasBidAdapter(bidderCode, alias, options);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('bidderCode and alias must be passed as arguments', "pbjs.aliasBidder");
  }
};
/**
 * The bid response object returned by an external bidder adapter during the auction.
 * @typedef {Object} AdapterBidResponse
 * @property {string} pbAg Auto granularity price bucket; CPM <= 5 ? increment = 0.05 : CPM > 5 && CPM <= 10 ? increment = 0.10 : CPM > 10 && CPM <= 20 ? increment = 0.50 : CPM > 20 ? priceCap = 20.00.  Example: `"0.80"`.
 * @property {string} pbCg Custom price bucket.  For example setup, see {@link setPriceGranularity}.  Example: `"0.84"`.
 * @property {string} pbDg Dense granularity price bucket; CPM <= 3 ? increment = 0.01 : CPM > 3 && CPM <= 8 ? increment = 0.05 : CPM > 8 && CPM <= 20 ? increment = 0.50 : CPM > 20? priceCap = 20.00.  Example: `"0.84"`.
 * @property {string} pbLg Low granularity price bucket; $0.50 increment, capped at $5, floored to two decimal places.  Example: `"0.50"`.
 * @property {string} pbMg Medium granularity price bucket; $0.10 increment, capped at $20, floored to two decimal places.  Example: `"0.80"`.
 * @property {string} pbHg High granularity price bucket; $0.01 increment, capped at $20, floored to two decimal places.  Example: `"0.84"`.
 *
 * @property {string} bidder The string name of the bidder.  This *may* be the same as the `bidderCode`.  For For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 * @property {string} bidderCode The unique string that identifies this bidder.  For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 *
 * @property {string} requestId The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bid request.
 * @property {number} requestTimestamp The time at which the bid request was sent out, expressed in milliseconds.
 * @property {number} responseTimestamp The time at which the bid response was received, expressed in milliseconds.
 * @property {number} timeToRespond How long it took for the bidder to respond with this bid, expressed in milliseconds.
 *
 * @property {string} size The size of the ad creative, expressed in `"AxB"` format, where A and B are numbers of pixels.  Example: `"320x50"`.
 * @property {string} width The width of the ad creative in pixels.  Example: `"320"`.
 * @property {string} height The height of the ad creative in pixels.  Example: `"50"`.
 *
 * @property {string} ad The actual ad creative content, often HTML with CSS, JavaScript, and/or links to additional content.  Example: `"<div id='beacon_-YQbipJtdxmMCgEPHExLhmqzEm' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://aplus-...'/></div><iframe src=\"http://aax-us-east.amazon-adsystem.com/e/is/8dcfcd..." width=\"728\" height=\"90\" frameborder=\"0\" ...></iframe>",`.
 * @property {number} ad_id The ad ID of the creative, as understood by the bidder's system.  Used by the line item's [creative in the ad server](http://prebid.org/adops/send-all-bids-adops.html#step-3-add-a-creative).
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page.
 *
 * @property {string} statusMessage The status of the bid.  Allowed values: `"Bid available"` or `"Bid returned empty or error response"`.
 * @property {number} cpm The exact bid price from the bidder, expressed to the thousandths place.  Example: `"0.849"`.
 *
 * @property {Object} adserverTargeting An object whose values represent the ad server's targeting on the bid.
 * @property {string} adserverTargeting.hb_adid The ad ID of the creative, as understood by the ad server.
 * @property {string} adserverTargeting.hb_pb The price paid to show the creative, as logged in the ad server.
 * @property {string} adserverTargeting.hb_bidder The winning bidder whose ad creative will be served by the ad server.
 */

/**
 * Get all of the bids that have been rendered.  Useful for [troubleshooting your integration](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html).
 * @return {Array<AdapterBidResponse>} A list of bids that have been rendered.
 */


pbjs.getAllWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAllWinningBids();
};
/**
 * Get all of the bids that have won their respective auctions.
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
 */


pbjs.getAllPrebidWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.status === CONSTANTS.BID_STATUS.BID_TARGETING_SET;
  });
};
/**
 * Get array of highest cpm bids for all adUnits, or highest cpm bid
 * object for the given adUnit
 * @param {string} adUnitCode - optional ad unit code
 * @alias module:pbjs.getHighestCpmBids
 * @return {Array} array containing highest cpm bid object(s)
 */


pbjs.getHighestCpmBids = function (adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getWinningBids(adUnitCode);
};
/**
 * Mark the winning bid as used, should only be used in conjunction with video
 * @typedef {Object} MarkBidRequest
 * @property {string} adUnitCode The ad unit code
 * @property {string} adId The id representing the ad we want to mark
 *
 * @alias module:pbjs.markWinningBidAsUsed
 */


pbjs.markWinningBidAsUsed = function (markBidRequest) {
  var bids = [];

  if (markBidRequest.adUnitCode && markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId && bid.adUnitCode === markBidRequest.adUnitCode;
    });
  } else if (markBidRequest.adUnitCode) {
    bids = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["d" /* targeting */].getWinningBids(markBidRequest.adUnitCode);
  } else if (markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId;
    });
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.');
  }

  if (bids.length > 0) {
    bids[0].status = CONSTANTS.BID_STATUS.RENDERED;
  }
};
/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */


pbjs.getConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig;
pbjs.readConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].readConfig;
pbjs.mergeConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].mergeConfig;
pbjs.mergeBidderConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].mergeBidderConfig;
/**
 * Set Prebid config options.
 * (Added in version 0.27.0).
 *
 * `setConfig` is designed to allow for advanced configuration while
 * reducing the surface area of the public API.  For more information
 * about the move to `setConfig` (and the resulting deprecations of
 * some other public methods), see [the Prebid 1.0 public API
 * proposal](https://gist.github.com/mkendall07/51ee5f6b9f2df01a89162cf6de7fe5b6).
 *
 * #### Troubleshooting your configuration
 *
 * If you call `pbjs.setConfig` without an object, e.g.,
 *
 * `pbjs.setConfig('debug', 'true'))`
 *
 * then Prebid.js will print an error to the console that says:
 *
 * ```
 * ERROR: setConfig options must be an object
 * ```
 *
 * If you don't see that message, you can assume the config object is valid.
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 * @param {string} options.bidderSequence The order in which bidders are called.  Example: `pbjs.setConfig({ bidderSequence: "fixed" })`.  Allowed values: `"fixed"` (order defined in `adUnit.bids` array on page), `"random"`.
 * @param {boolean} options.debug Turn debug logging on/off. Example: `pbjs.setConfig({ debug: true })`.
 * @param {string} options.priceGranularity The bid price granularity to use.  Example: `pbjs.setConfig({ priceGranularity: "medium" })`. Allowed values: `"low"` ($0.50), `"medium"` ($0.10), `"high"` ($0.01), `"auto"` (sliding scale), `"dense"` (like `"auto"`, with smaller increments at lower CPMs), or a custom price bucket object, e.g., `{ "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]}`.
 * @param {boolean} options.enableSendAllBids Turn "send all bids" mode on/off.  Example: `pbjs.setConfig({ enableSendAllBids: true })`.
 * @param {number} options.bidderTimeout Set a global bidder timeout, in milliseconds.  Example: `pbjs.setConfig({ bidderTimeout: 3000 })`.  Note that it's still possible for a bid to get into the auction that responds after this timeout. This is due to how [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) works in JS: it queues the callback in the event loop in an approximate location that should execute after this time but it is not guaranteed.  For more information about the asynchronous event loop and `setTimeout`, see [How JavaScript Timers Work](https://johnresig.com/blog/how-javascript-timers-work/).
 * @param {string} options.publisherDomain The publisher's domain where Prebid is running, for cross-domain iFrame communication.  Example: `pbjs.setConfig({ publisherDomain: "https://www.theverge.com" })`.
 * @param {Object} options.s2sConfig The configuration object for [server-to-server header bidding](http://prebid.org/dev-docs/get-started-with-prebid-server.html).  Example:
 * @alias module:pbjs.setConfig
 * ```
 * pbjs.setConfig({
 *     s2sConfig: {
 *         accountId: '1',
 *         enabled: true,
 *         bidders: ['appnexus', 'pubmatic'],
 *         timeout: 1000,
 *         adapter: 'prebidServer',
 *         endpoint: 'https://prebid.adnxs.com/pbs/v1/auction'
 *     }
 * })
 * ```
 */

pbjs.setConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setConfig;
pbjs.setBidderConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setBidderConfig;
pbjs.que.push(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__["a" /* listenMessagesFromCreative */])();
});
/**
 * This queue lets users load Prebid asynchronously, but run functions the same way regardless of whether it gets loaded
 * before or after their script executes. For example, given the code:
 *
 * <script src="url/to/Prebid.js" async></script>
 * <script>
 *   var pbjs = pbjs || {};
 *   pbjs.cmd = pbjs.cmd || [];
 *   pbjs.cmd.push(functionToExecuteOncePrebidLoads);
 * </script>
 *
 * If the page's script runs before prebid loads, then their function gets added to the queue, and executed
 * by prebid once it's done loading. If it runs after prebid loads, then this monkey-patch causes their
 * function to execute immediately.
 *
 * @memberof pbjs
 * @param  {function} command A function which takes no arguments. This is guaranteed to run exactly once, and only after
 *                            the Prebid script has been fully loaded.
 * @alias module:pbjs.cmd.push
 */

pbjs.cmd.push = function (command) {
  if (typeof command === 'function') {
    try {
      command.call();
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing command :', e.message, e.stack);
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("Commands written into pbjs.cmd.push must be wrapped in a function");
  }
};

pbjs.que.push = pbjs.cmd.push;

function processQueue(queue) {
  queue.forEach(function (cmd) {
    if (typeof cmd.called === 'undefined') {
      try {
        cmd.call();
        cmd.called = true;
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])('Error processing command :', 'prebid.js', e);
      }
    }
  });
}
/**
 * @alias module:pbjs.processQueue
 */


pbjs.processQueue = function () {
  __WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */].ready();
  processQueue(pbjs.que);
  processQueue(pbjs.cmd);
};

/* harmony default export */ __webpack_exports__["default"] = (pbjs);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(392);

module.exports = parent;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Adapter;
function Adapter(code) {
  var bidderCode = code;

  function setBidderCode(code) {
    bidderCode = code;
  }

  function getBidderCode() {
    return bidderCode;
  }

  function callBids() {}

  return {
    callBids: callBids,
    setBidderCode: setBidderCode,
    getBidderCode: getBidderCode
  };
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(29);
var classof = __webpack_require__(51);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(34);
var fails = __webpack_require__(29);
var createElement = __webpack_require__(87);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var isObject = __webpack_require__(30);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(19);
var store = __webpack_require__(66);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(117);
var fails = __webpack_require__(29);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gdprDataHandler", function() { return gdprDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspDataHandler", function() { return uspDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coppaDataHandler", function() { return coppaDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientTestAdapters", function() { return clientTestAdapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allS2SBidders", function() { return allS2SBidders; });
/* harmony export (immutable) */ __webpack_exports__["getAllS2SBidders"] = getAllS2SBidders;
/* harmony export (immutable) */ __webpack_exports__["setS2STestingModule"] = setS2STestingModule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adUnits_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__refererDetection_js__ = __webpack_require__(21);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module adaptermanger */












var CONSTANTS = __webpack_require__(5);

var events = __webpack_require__(10);

var s2sTestingModule; // store s2sTesting module if it's loaded

var adapterManager = {};

var _bidderRegistry = adapterManager.bidderRegistry = {};

var _aliasRegistry = adapterManager.aliasRegistry = {};

var _s2sConfigs = [];
__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('s2sConfig', function (config) {
  if (config && config.s2sConfig) {
    _s2sConfigs = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(config.s2sConfig) ? config.s2sConfig : [config.s2sConfig];
  }
});
var _analyticsRegistry = {};
/**
 * @typedef {object} LabelDescriptor
 * @property {boolean} labelAll describes whether or not this object expects all labels to match, or any label to match
 * @property {Array<string>} labels the labels listed on the bidder or adUnit
 * @property {Array<string>} activeLabels the labels specified as being active by requestBids
 */

function getBids(_ref) {
  var bidderCode = _ref.bidderCode,
      auctionId = _ref.auctionId,
      bidderRequestId = _ref.bidderRequestId,
      adUnits = _ref.adUnits,
      labels = _ref.labels,
      src = _ref.src;
  return adUnits.reduce(function (result, adUnit) {
    var _resolveStatus = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["a" /* getLabels */])(adUnit, labels), adUnit.mediaTypes, adUnit.sizes),
        active = _resolveStatus.active,
        filteredMediaTypes = _resolveStatus.mediaTypes,
        filterResults = _resolveStatus.filterResults;

    if (!active) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Size mapping disabled adUnit \"".concat(adUnit.code, "\""));
    } else if (filterResults) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Size mapping filtered adUnit \"".concat(adUnit.code, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
    }

    if (active) {
      result.push(adUnit.bids.filter(function (bid) {
        return bid.bidder === bidderCode;
      }).reduce(function (bids, bid) {
        bid = _extends({}, bid, Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getDefinedParams"])(adUnit, ['nativeParams', 'ortb2Imp', 'mediaType', 'renderer', 'storedAuctionResponse']));

        var _resolveStatus2 = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["a" /* getLabels */])(bid, labels), filteredMediaTypes),
            active = _resolveStatus2.active,
            mediaTypes = _resolveStatus2.mediaTypes,
            filterResults = _resolveStatus2.filterResults;

        if (!active) {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Size mapping deactivated adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\""));
        } else if (filterResults) {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Size mapping filtered adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isValidMediaTypes"])(mediaTypes)) {
          bid = _extends({}, bid, {
            mediaTypes: mediaTypes
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("mediaTypes is not correctly configured for adunit ".concat(adUnit.code));
        }

        if (active) {
          bids.push(_extends({}, bid, {
            adUnitCode: adUnit.code,
            transactionId: adUnit.transactionId,
            sizes: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes') || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(mediaTypes, 'video.playerSize') || [],
            bidId: bid.bid_id || Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])(),
            bidderRequestId: bidderRequestId,
            auctionId: auctionId,
            src: src,
            bidRequestsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getRequestsCounter(adUnit.code),
            bidderRequestsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getBidderRequestsCounter(adUnit.code, bid.bidder),
            bidderWinsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getBidderWinsCounter(adUnit.code, bid.bidder)
          }));
        }

        return bids;
      }, []));
    }

    return result;
  }, []).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (val) {
    return val !== '';
  });
}

var hookedGetBids = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', getBids, 'getBids');

function getAdUnitCopyForPrebidServer(adUnits, s2sConfig) {
  var adaptersServerSide = s2sConfig.bidders;
  var adUnitsCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnits);
  adUnitsCopy.forEach(function (adUnit) {
    // filter out client side bids
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(adaptersServerSide, bid.bidder) && (!doingS2STesting(s2sConfig) || bid.finalSource !== s2sTestingModule.CLIENT);
    }).map(function (bid) {
      bid.bid_id = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
      return bid;
    });
  }); // don't send empty requests

  adUnitsCopy = adUnitsCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsCopy;
}

function getAdUnitCopyForClientAdapters(adUnits) {
  var adUnitsClientCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnits); // filter out s2s bids

  adUnitsClientCopy.forEach(function (adUnit) {
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return !clientTestAdapters.length || bid.finalSource !== s2sTestingModule.SERVER;
    });
  }); // don't send empty requests

  adUnitsClientCopy = adUnitsClientCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsClientCopy;
}

var gdprDataHandler = {
  consentData: null,
  setConsentData: function setConsentData(consentInfo) {
    gdprDataHandler.consentData = consentInfo;
  },
  getConsentData: function getConsentData() {
    return gdprDataHandler.consentData;
  }
};
var uspDataHandler = {
  consentData: null,
  setConsentData: function setConsentData(consentInfo) {
    uspDataHandler.consentData = consentInfo;
  },
  getConsentData: function getConsentData() {
    return uspDataHandler.consentData;
  }
};
var coppaDataHandler = {
  getCoppa: function getCoppa() {
    return !!__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('coppa');
  }
}; // export for testing

var clientTestAdapters = [];
var allS2SBidders = [];
function getAllS2SBidders() {
  adapterManager.s2STestingEnabled = false;

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (s2sConfig.bidders && s2sConfig.bidders.length) {
        allS2SBidders.push.apply(allS2SBidders, _toConsumableArray(s2sConfig.bidders));
      }
    }
  });
}
adapterManager.makeBidRequests = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (adUnits, auctionStart, auctionId, cbTimeout, labels) {
  /**
   * emit and pass adunits for external modification
   * @see {@link https://github.com/prebid/Prebid.js/issues/4149|Issue}
   */
  events.emit(CONSTANTS.EVENTS.BEFORE_REQUEST_BIDS, adUnits);
  Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["b" /* decorateAdUnitsWithNativeParams */])(adUnits);
  var bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidderCodes"])(adUnits);

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('bidderSequence') === __WEBPACK_IMPORTED_MODULE_5__config_js__["a" /* RANDOM */]) {
    bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"])(bidderCodes);
  }

  var refererInfo = Object(__WEBPACK_IMPORTED_MODULE_10__refererDetection_js__["a" /* getRefererInfo */])();
  var clientBidderCodes = bidderCodes;
  var bidRequests = [];

  if (allS2SBidders.length === 0) {
    getAllS2SBidders();
  }

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (doingS2STesting(s2sConfig)) {
        s2sTestingModule.calculateBidSources(s2sConfig);
        var bidderMap = s2sTestingModule.getSourceBidderMap(adUnits, allS2SBidders); // get all adapters doing client testing

        bidderMap[s2sTestingModule.CLIENT].forEach(function (bidder) {
          if (!__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(clientTestAdapters, bidder)) {
            clientTestAdapters.push(bidder);
          }
        });
      }
    }
  }); // don't call these client side (unless client request is needed for testing)


  clientBidderCodes = bidderCodes.filter(function (bidderCode) {
    return !__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(allS2SBidders, bidderCode) || __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(clientTestAdapters, bidderCode);
  }); // these are called on the s2s adapter

  var adaptersServerSide = allS2SBidders;

  var adUnitsContainServerRequests = function adUnitsContainServerRequests(adUnits, s2sConfig) {
    return Boolean(__WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(adUnits, function (adUnit) {
      return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(adUnit.bids, function (bid) {
        return (bid.bidSource || s2sConfig.bidderControl && s2sConfig.bidderControl[bid.bidder]) && bid.finalSource === s2sTestingModule.SERVER;
      });
    }));
  };

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && s2sConfig.enabled) {
      if (isTestingServerOnly(s2sConfig) && adUnitsContainServerRequests(adUnits, s2sConfig)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('testServerOnly: True.  All client requests will be suppressed.');
        clientBidderCodes.length = 0;
      }

      var adUnitsS2SCopy = getAdUnitCopyForPrebidServer(adUnits, s2sConfig); // uniquePbsTid is so we know which server to send which bids to during the callBids function

      var uniquePbsTid = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();
      adaptersServerSide.forEach(function (bidderCode) {
        var bidderRequestId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
        var bidderRequest = {
          bidderCode: bidderCode,
          auctionId: auctionId,
          bidderRequestId: bidderRequestId,
          uniquePbsTid: uniquePbsTid,
          bids: hookedGetBids({
            bidderCode: bidderCode,
            auctionId: auctionId,
            bidderRequestId: bidderRequestId,
            'adUnits': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnitsS2SCopy),
            labels: labels,
            src: CONSTANTS.S2S.SRC
          }),
          auctionStart: auctionStart,
          timeout: s2sConfig.timeout,
          src: CONSTANTS.S2S.SRC,
          refererInfo: refererInfo
        };

        if (bidderRequest.bids.length !== 0) {
          bidRequests.push(bidderRequest);
        }
      }); // update the s2sAdUnits object and remove all bids that didn't pass sizeConfig/label checks from getBids()
      // this is to keep consistency and only allow bids/adunits that passed the checks to go to pbs

      adUnitsS2SCopy.forEach(function (adUnitCopy) {
        var validBids = adUnitCopy.bids.filter(function (adUnitBid) {
          return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(bidRequests, function (request) {
            return __WEBPACK_IMPORTED_MODULE_8_core_js_pure_features_array_find_js___default()(request.bids, function (reqBid) {
              return reqBid.bidId === adUnitBid.bid_id;
            });
          });
        });
        adUnitCopy.bids = validBids;
      });
      bidRequests.forEach(function (request) {
        if (request.adUnitsS2SCopy === undefined) {
          request.adUnitsS2SCopy = adUnitsS2SCopy.filter(function (adUnitCopy) {
            return adUnitCopy.bids.length > 0;
          });
        }
      });
    }
  }); // client adapters


  var adUnitsClientCopy = getAdUnitCopyForClientAdapters(adUnits);
  clientBidderCodes.forEach(function (bidderCode) {
    var bidderRequestId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUniqueIdentifierStr"])();
    var bidderRequest = {
      bidderCode: bidderCode,
      auctionId: auctionId,
      bidderRequestId: bidderRequestId,
      bids: hookedGetBids({
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        'adUnits': Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(adUnitsClientCopy),
        labels: labels,
        src: 'client'
      }),
      auctionStart: auctionStart,
      timeout: cbTimeout,
      refererInfo: refererInfo
    };
    var adapter = _bidderRegistry[bidderCode];

    if (!adapter) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Trying to make a request for bidder that does not exist: ".concat(bidderCode));
    }

    if (adapter && bidderRequest.bids && bidderRequest.bids.length !== 0) {
      bidRequests.push(bidderRequest);
    }
  });

  if (gdprDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['gdprConsent'] = gdprDataHandler.getConsentData();
    });
  }

  if (uspDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['uspConsent'] = uspDataHandler.getConsentData();
    });
  }

  return bidRequests;
}, 'makeBidRequests');

adapterManager.callBids = function (adUnits, bidRequests, addBidResponse, doneCb, requestCallbacks, requestBidsTimeout, onTimelyResponse) {
  if (!bidRequests.length) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
    return;
  }

  var _bidRequests$reduce = bidRequests.reduce(function (partitions, bidRequest) {
    partitions[Number(typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC)].push(bidRequest);
    return partitions;
  }, [[], []]),
      _bidRequests$reduce2 = _slicedToArray(_bidRequests$reduce, 2),
      clientBidRequests = _bidRequests$reduce2[0],
      serverBidRequests = _bidRequests$reduce2[1];

  var uniqueServerBidRequests = [];
  serverBidRequests.forEach(function (serverBidRequest) {
    var index = -1;

    for (var i = 0; i < uniqueServerBidRequests.length; ++i) {
      if (serverBidRequest.uniquePbsTid === uniqueServerBidRequests[i].uniquePbsTid) {
        index = i;
        break;
      }
    }

    if (index <= -1) {
      uniqueServerBidRequests.push(serverBidRequest);
    }
  });
  var counter = 0; // $.source.tid MUST be a unique UUID and also THE SAME between all PBS Requests for a given Auction

  var sourceTid = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["generateUUID"])();

  _s2sConfigs.forEach(function (s2sConfig) {
    if (s2sConfig && uniqueServerBidRequests[counter] && __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(s2sConfig.bidders, uniqueServerBidRequests[counter].bidderCode)) {
      // s2s should get the same client side timeout as other client side requests.
      var s2sAjax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
        request: requestCallbacks.request.bind(null, 's2s'),
        done: requestCallbacks.done
      } : undefined);
      var adaptersServerSide = s2sConfig.bidders;
      var s2sAdapter = _bidderRegistry[s2sConfig.adapter];
      var uniquePbsTid = uniqueServerBidRequests[counter].uniquePbsTid;
      var adUnitsS2SCopy = uniqueServerBidRequests[counter].adUnitsS2SCopy;
      var uniqueServerRequests = serverBidRequests.filter(function (serverBidRequest) {
        return serverBidRequest.uniquePbsTid === uniquePbsTid;
      });

      if (s2sAdapter) {
        var s2sBidRequest = {
          tid: sourceTid,
          'ad_units': adUnitsS2SCopy,
          s2sConfig: s2sConfig
        };

        if (s2sBidRequest.ad_units.length) {
          var doneCbs = uniqueServerRequests.map(function (bidRequest) {
            bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
            return doneCb.bind(bidRequest);
          }); // only log adapters that actually have adUnit bids

          var allBidders = s2sBidRequest.ad_units.reduce(function (adapters, adUnit) {
            return adapters.concat((adUnit.bids || []).reduce(function (adapters, bid) {
              return adapters.concat(bid.bidder);
            }, []));
          }, []);
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("CALLING S2S HEADER BIDDERS ==== ".concat(adaptersServerSide.filter(function (adapter) {
            return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(allBidders, adapter);
          }).join(','))); // fire BID_REQUESTED event for each s2s bidRequest

          uniqueServerRequests.forEach(function (bidRequest) {
            // add the new sourceTid
            events.emit(CONSTANTS.EVENTS.BID_REQUESTED, _objectSpread(_objectSpread({}, bidRequest), {}, {
              tid: sourceTid
            }));
          }); // make bid requests

          s2sAdapter.callBids(s2sBidRequest, serverBidRequests, addBidResponse, function () {
            return doneCbs.forEach(function (done) {
              return done();
            });
          }, s2sAjax);
        }
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('missing ' + s2sConfig.adapter);
      }

      counter++;
    }
  }); // handle client adapter requests


  clientBidRequests.forEach(function (bidRequest) {
    bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(); // TODO : Do we check for bid in pool from here and skip calling adapter again ?

    var adapter = _bidderRegistry[bidRequest.bidderCode];
    __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidRequest.bidderCode, function () {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])("CALLING BIDDER");
      events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
    });
    var ajax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, bidRequest.bidderCode),
      done: requestCallbacks.done
    } : undefined);
    var adapterDone = doneCb.bind(bidRequest);

    try {
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidRequest.bidderCode, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(adapter.callBids, adapter, bidRequest, addBidResponse, adapterDone, ajax, onTimelyResponse, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].callbackWithBidder(bidRequest.bidderCode)));
    } catch (e) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("".concat(bidRequest.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
        e: e,
        bidRequest: bidRequest
      });
      adapterDone();
    }
  });
};

function doingS2STesting(s2sConfig) {
  return s2sConfig && s2sConfig.enabled && s2sConfig.testing && s2sTestingModule;
}

function isTestingServerOnly(s2sConfig) {
  return Boolean(doingS2STesting(s2sConfig) && s2sConfig.testServerOnly);
}

;

function getSupportedMediaTypes(bidderCode) {
  var supportedMediaTypes = [];
  if (__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(adapterManager.videoAdapters, bidderCode)) supportedMediaTypes.push('video');
  if (__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(__WEBPACK_IMPORTED_MODULE_2__native_js__["g" /* nativeAdapters */], bidderCode)) supportedMediaTypes.push('native');
  return supportedMediaTypes;
}

adapterManager.videoAdapters = []; // added by adapterLoader for now

adapterManager.registerBidAdapter = function (bidAdapter, bidderCode) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$supportedMediaT = _ref2.supportedMediaTypes,
      supportedMediaTypes = _ref2$supportedMediaT === void 0 ? [] : _ref2$supportedMediaT;

  if (bidAdapter && bidderCode) {
    if (typeof bidAdapter.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdapter;

      if (__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(supportedMediaTypes, 'video')) {
        adapterManager.videoAdapters.push(bidderCode);
      }

      if (__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(supportedMediaTypes, 'native')) {
        __WEBPACK_IMPORTED_MODULE_2__native_js__["g" /* nativeAdapters */].push(bidderCode);
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidAdapter or bidderCode not specified');
  }
};

adapterManager.aliasBidAdapter = function (bidderCode, alias, options) {
  var existingAlias = _bidderRegistry[alias];

  if (typeof existingAlias === 'undefined') {
    var bidAdapter = _bidderRegistry[bidderCode];

    if (typeof bidAdapter === 'undefined') {
      // check if alias is part of s2sConfig and allow them to register if so (as base bidder may be s2s-only)
      var nonS2SAlias = [];

      _s2sConfigs.forEach(function (s2sConfig) {
        if (s2sConfig.bidders && s2sConfig.bidders.length) {
          var s2sBidders = s2sConfig && s2sConfig.bidders;

          if (!(s2sConfig && __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(s2sBidders, alias))) {
            nonS2SAlias.push(bidderCode);
          } else {
            _aliasRegistry[alias] = bidderCode;
          }
        }
      });

      nonS2SAlias.forEach(function (bidderCode) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
      });
    } else {
      try {
        var newAdapter;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode); // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0

        if (bidAdapter.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdapter.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdapter.getSpec();
          var gvlid = options && options.gvlid;
          var skipPbsAliasing = options && options.skipPbsAliasing;
          newAdapter = Object(__WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__["newBidder"])(_extends({}, spec, {
            code: alias,
            gvlid: gvlid,
            skipPbsAliasing: skipPbsAliasing
          }));
          _aliasRegistry[alias] = bidderCode;
        }

        adapterManager.registerBidAdapter(newAdapter, alias, {
          supportedMediaTypes: supportedMediaTypes
        });
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])(bidderCode + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
      }
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"])('alias name "' + alias + '" has been already specified.');
  }
};

adapterManager.registerAnalyticsAdapter = function (_ref3) {
  var adapter = _ref3.adapter,
      code = _ref3.code,
      gvlid = _ref3.gvlid;

  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = {
        adapter: adapter,
        gvlid: gvlid
      };
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Prebid Error: Analytics adaptor error for analytics \"".concat(code, "\"\n        analytics adapter must implement an enableAnalytics() function"));
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};

adapterManager.enableAnalytics = function (config) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"])(config)) {
    config = [config];
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["_each"])(config, function (adapterConfig) {
    var adapter = _analyticsRegistry[adapterConfig.provider].adapter;

    if (adapter) {
      adapter.enableAnalytics(adapterConfig);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("Prebid Error: no analytics adapter found in registry for\n        ".concat(adapterConfig.provider, "."));
    }
  });
};

adapterManager.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
};

adapterManager.getAnalyticsAdapter = function (code) {
  return _analyticsRegistry[code];
}; // the s2sTesting module is injected when it's loaded rather than being imported
// importing it causes the packager to include it even when it's not explicitly included in the build


function setS2STestingModule(module) {
  s2sTestingModule = module;
}

function tryCallBidderMethod(bidder, method, param) {
  try {
    var adapter = _bidderRegistry[bidder];
    var spec = adapter.getSpec();

    if (spec && spec[method] && typeof spec[method] === 'function') {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Invoking ".concat(bidder, ".").concat(method));
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidder, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(spec[method], spec, param));
    }
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Error calling ".concat(method, " of ").concat(bidder));
  }
}

adapterManager.callTimedOutBidders = function (adUnits, timedOutBidders, cbTimeout) {
  timedOutBidders = timedOutBidders.map(function (timedOutBidder) {
    // Adding user configured params & timeout to timeout event data
    timedOutBidder.params = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUserConfiguredParams"])(adUnits, timedOutBidder.adUnitCode, timedOutBidder.bidder);
    timedOutBidder.timeout = cbTimeout;
    return timedOutBidder;
  });
  timedOutBidders = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(timedOutBidders, 'bidder');
  Object.keys(timedOutBidders).forEach(function (bidder) {
    tryCallBidderMethod(bidder, 'onTimeout', timedOutBidders[bidder]);
  });
};

adapterManager.callBidWonBidder = function (bidder, bid, adUnits) {
  // Adding user configured params to bidWon event data
  bid.params = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getUserConfiguredParams"])(adUnits, bid.adUnitCode, bid.bidder);
  __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].incrementBidderWinsCounter(bid.adUnitCode, bid.bidder);
  tryCallBidderMethod(bidder, 'onBidWon', bid);
};

adapterManager.callSetTargetingBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onSetTargeting', bid);
};

adapterManager.callBidViewableBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onBidViewable', bid);
};

adapterManager.callBidderError = function (bidder, error, bidderRequest) {
  var param = {
    error: error,
    bidderRequest: bidderRequest
  };
  tryCallBidderMethod(bidder, 'onBidderError', param);
};

/* harmony default export */ __webpack_exports__["default"] = (adapterManager);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(50);
var toLength = __webpack_require__(54);
var toAbsoluteIndex = __webpack_require__(122);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(123);
__webpack_require__(143);
__webpack_require__(145);
__webpack_require__(147);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);

module.exports = parent;


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(57);
var isObject = __webpack_require__(30);
var has = __webpack_require__(31);
var defineProperty = __webpack_require__(35).f;
var uid = __webpack_require__(67);
var FREEZING = __webpack_require__(126);

var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(23);
var Iterators = __webpack_require__(40);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(72);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(98).IteratorPrototype;
var create = __webpack_require__(71);
var createPropertyDescriptor = __webpack_require__(44);
var setToStringTag = __webpack_require__(60);
var Iterators = __webpack_require__(40);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(99);
var createNonEnumerableProperty = __webpack_require__(33);
var has = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(23);
var IS_PURE = __webpack_require__(19);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(31);
var toObject = __webpack_require__(53);
var sharedKey = __webpack_require__(70);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(135);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ })

/******/ });
pbjsChunk([360],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Renderer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_video_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_storageManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_bidderSettings_js__ = __webpack_require__(42);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var BIDDER_CODE = 'appnexus';
var URL = 'https://ib.adnxs.com/ut/v3/prebid';
var URL_SIMPLE = 'https://ib.adnxs-simple.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'minduration', 'maxduration', 'skippable', 'playback_method', 'frameworks', 'context', 'skipoffset'];
var VIDEO_RTB_TARGETING = ['minduration', 'maxduration', 'skip', 'skipafter', 'playbackmethod', 'api'];
var USER_PARAMS = ['age', 'externalUid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately

var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var VIDEO_MAPPING = {
  playback_method: {
    'unknown': 0,
    'auto_play_sound_on': 1,
    'auto_play_sound_off': 2,
    'click_to_play': 3,
    'mouse_over': 4,
    'auto_play_sound_unknown': 5
  },
  context: {
    'unknown': 0,
    'pre_roll': 1,
    'mid_roll': 2,
    'post_roll': 3,
    'outstream': 4,
    'in-banner': 5
  }
};
var NATIVE_MAPPING = {
  body: 'description',
  body2: 'desc2',
  cta: 'ctatext',
  image: {
    serverName: 'main_image',
    requiredParams: {
      required: true
    }
  },
  icon: {
    serverName: 'icon',
    requiredParams: {
      required: true
    }
  },
  sponsoredBy: 'sponsored_by',
  privacyLink: 'privacy_link',
  salePrice: 'saleprice',
  displayUrl: 'displayurl'
};
var SOURCE = 'pbjs';
var MAX_IMPS_PER_REQUEST = 15;
var mappingFileUrl = 'https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json';
var SCRIPT_TAG_START = '<script';
var VIEWABILITY_URL_START = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/;
var VIEWABILITY_FILE_NAME = 'trk.js';
var GVLID = 32;
var storage = Object(__WEBPACK_IMPORTED_MODULE_9__src_storageManager_js__["b" /* getStorageManager */])(GVLID, BIDDER_CODE);
var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  aliases: [{
    code: 'appnexusAst',
    gvlid: 32
  }, {
    code: 'brealtime'
  }, {
    code: 'emxdigital',
    gvlid: 183
  }, {
    code: 'pagescience'
  }, {
    code: 'defymedia'
  }, {
    code: 'gourmetads'
  }, {
    code: 'matomy'
  }, {
    code: 'featureforward'
  }, {
    code: 'oftmedia'
  }, {
    code: 'districtm',
    gvlid: 144
  }, {
    code: 'adasta'
  }, {
    code: 'beintoo',
    gvlid: 618
  }],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.member && bid.params.invCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var tags = bidRequests.map(bidToTag);
    var userObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasUserInfo);
    var userObj = {};

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      userObj = {
        'coppa': true
      };
    }

    if (userObjBid) {
      Object.keys(userObjBid.params.user).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(USER_PARAMS, param);
      }).forEach(function (param) {
        var uparam = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertCamelToUnderscore"])(param);

        if (param === 'segments' && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(userObjBid.params.user[param])) {
          var segs = [];
          userObjBid.params.user[param].forEach(function (val) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"])(val)) {
              segs.push({
                'id': val
              });
            } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(val)) {
              segs.push(val);
            }
          });
          userObj[uparam] = segs;
        } else if (param !== 'segments') {
          userObj[uparam] = userObjBid.params.user[param];
        }
      });
    }

    var appDeviceObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;

    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(APP_DEVICE_PARAMS, param);
      }).forEach(function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      });
    }

    var appIdObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasAppId);
    var appIdObj;

    if (appIdObjBid && appIdObjBid.params && appDeviceObjBid.params.app && appDeviceObjBid.params.app.id) {
      appIdObj = {
        appid: appIdObjBid.params.app.id
      };
    }

    var debugObj = {};
    var debugObjParams = {};
    var debugCookieName = 'apn_prebid_debug';
    var debugCookie = storage.getCookie(debugCookieName) || null;

    if (debugCookie) {
      try {
        debugObj = JSON.parse(debugCookie);
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      var debugBidRequest = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasDebug);

      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }

    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(DEBUG_PARAMS, param);
      }).forEach(function (param) {
        debugObjParams[param] = debugObj[param];
      });
    }

    var memberIdBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var schain = bidRequests[0].schain;
    var omidSupport = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasOmidSupport);
    var payload = {
      tags: _toConsumableArray(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "6.13.0-pre"
      },
      schain: schain
    };

    if (omidSupport) {
      payload['iab_support'] = {
        omidpn: 'Appnexus',
        omidpv: "6.13.0-pre"
      };
    }

    if (member > 0) {
      payload.member_id = member;
    }

    if (appDeviceObjBid) {
      payload.device = appDeviceObj;
    }

    if (appIdObjBid) {
      payload.app = appIdObj;
    }

    var auctionKeywords = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('appnexusAuctionKeywords');

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(auctionKeywords)) {
      var aucKeywords = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"])(auctionKeywords);

      if (aucKeywords.length > 0) {
        aucKeywords.forEach(deleteValues);
      }

      payload.keywords = aucKeywords;
    }

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
      payload.brand_category_uniqueness = true;
    }

    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }

    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };

      if (bidderRequest.gdprConsent.addtlConsent && bidderRequest.gdprConsent.addtlConsent.indexOf('~') !== -1) {
        var ac = bidderRequest.gdprConsent.addtlConsent; // pull only the ids from the string (after the ~) and convert them to an array of ints

        var acStr = ac.substring(ac.indexOf('~') + 1);
        payload.gdpr_consent.addtl_consent = acStr.split('.').map(function (id) {
          return parseInt(id, 10);
        });
      }
    }

    if (bidderRequest && bidderRequest.uspConsent) {
      payload.us_privacy = bidderRequest.uspConsent;
    }

    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.referer),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map(function (url) {
          return encodeURIComponent(url);
        }).join(',')
      };
      payload.referrer_detection = refererinfo;
    }

    var hasAdPodBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidRequests, hasAdPod);

    if (hasAdPodBid) {
      bidRequests.filter(hasAdPod).forEach(function (adPodBid) {
        var adPodTags = createAdPodRequest(tags, adPodBid); // don't need the original adpod placement because it's in adPodTags

        var nonPodTags = payload.tags.filter(function (tag) {
          return tag.uuid !== adPodBid.bidId;
        });
        payload.tags = [].concat(_toConsumableArray(nonPodTags), _toConsumableArray(adPodTags));
      });
    }

    if (bidRequests[0].userId) {
      var eids = [];
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.flocId.id"), 'chrome.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.criteoId"), 'criteo.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.netId"), 'netid.de', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.idl_env"), 'liveramp.com', null);
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.tdid"), 'adserver.org', 'TDID');
      addUserId(eids, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequests[0], "userId.uid2.id"), 'uidapi.com', 'UID2');

      if (eids.length) {
        payload.eids = eids;
      }
    }

    if (tags[0].publisher_id) {
      payload.publisher_id = tags[0].publisher_id;
    }

    var request = formatRequest(payload, bidderRequest);
    return request;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, _ref) {
    var _this = this;

    var bidderRequest = _ref.bidderRequest;
    serverResponse = serverResponse.body;
    var bids = [];

    if (!serverResponse || serverResponse.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (serverResponse && serverResponse.error) {
        errorMessage += ": ".concat(serverResponse.error);
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(errorMessage);
      return bids;
    }

    if (serverResponse.tags) {
      serverResponse.tags.forEach(function (serverBid) {
        var rtbBid = getRtbBid(serverBid);

        if (rtbBid) {
          var cpmCheck = __WEBPACK_IMPORTED_MODULE_10__src_bidderSettings_js__["a" /* bidderSettings */].get(bidderRequest.bidderCode, 'allowZeroCpmBids') === true ? rtbBid.cpm >= 0 : rtbBid.cpm > 0;

          if (cpmCheck && __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(_this.supportedMediaTypes, rtbBid.ad_type)) {
            var bid = newBid(serverBid, rtbBid, bidderRequest);
            bid.mediaType = parseMediaType(rtbBid);
            bids.push(bid);
          }
        }
      });
    }

    if (serverResponse.debug && serverResponse.debug.debug_info) {
      var debugHeader = 'AppNexus Debug Auction for Prebid\n\n';
      var debugText = debugHeader + serverResponse.debug.debug_info;
      debugText = debugText.replace(/(<td>|<th>)/gm, '\t') // Tables
      .replace(/(<\/td>|<\/th>)/gm, '\n') // Tables
      .replace(/^<br>/gm, '') // Remove leading <br>
      .replace(/(<br>\n|<br>)/gm, '\n') // <br>
      .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n') // Header H1
      .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n') // Headers
      .replace(/(<([^>]+)>)/igm, ''); // Remove any other tags

      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('https://console.appnexus.com/docs/understanding-the-debug-auction');
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])(debugText);
    }

    return bids;
  },

  /**
   * @typedef {Object} mappingFileInfo
   * @property {string} url  mapping file json url
   * @property {number} refreshInDays prebid stores mapping data in localstorage so you can return in how many days you want to update value stored in localstorage.
   * @property {string} localStorageKey unique key to store your mapping json in localstorage
   */

  /**
   * Returns mapping file info. This info will be used by bidderFactory to preload mapping file and store data in local storage
   * @returns {mappingFileInfo}
   */
  getMappingFileInfo: function getMappingFileInfo() {
    return {
      url: mappingFileUrl,
      refreshInDays: 2
    };
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent) {
    if (syncOptions.iframeEnabled && hasPurpose1Consent({
      gdprConsent: gdprConsent
    })) {
      return [{
        type: 'iframe',
        url: 'https://acdn.adnxs.com/dmp/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    params = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"])({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"],
      'publisherId': 'number'
    }, params);

    if (isOpenRtb) {
      params.use_pmt_rule = typeof params.usePaymentRule === 'boolean' ? params.usePaymentRule : false;

      if (params.usePaymentRule) {
        delete params.usePaymentRule;
      }

      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }

      Object.keys(params).forEach(function (paramKey) {
        var convertedKey = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertCamelToUnderscore"])(paramKey);

        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      });
    }

    return params;
  },

  /**
   * Add element selector to javascript tracker to improve native viewability
   * @param {Bid} bid
   */
  onBidWon: function onBidWon(bid) {
    if (bid.native) {
      reloadViewabilityScriptWithCorrectParameters(bid);
    }
  }
};

function isPopulatedArray(arr) {
  return !!(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(arr) && arr.length > 0);
}

function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}

function reloadViewabilityScriptWithCorrectParameters(bid) {
  var viewJsPayload = getAppnexusViewabilityScriptFromJsTrackers(bid.native.javascriptTrackers);

  if (viewJsPayload) {
    var prebidParams = 'pbjs_adid=' + bid.adId + ';pbjs_auc=' + bid.adUnitCode;
    var jsTrackerSrc = getViewabilityScriptUrlFromPayload(viewJsPayload);
    var newJsTrackerSrc = jsTrackerSrc.replace('dom_id=%native_dom_id%', prebidParams); // find iframe containing script tag

    var frameArray = document.getElementsByTagName('iframe'); // boolean var to modify only one script. That way if there are muliple scripts,
    // they won't all point to the same creative.

    var modifiedAScript = false; // first, loop on all ifames

    for (var i = 0; i < frameArray.length && !modifiedAScript; i++) {
      var currentFrame = frameArray[i];

      try {
        // IE-compatible, see https://stackoverflow.com/a/3999191/2112089
        var nestedDoc = currentFrame.contentDocument || currentFrame.contentWindow.document;

        if (nestedDoc) {
          // if the doc is present, we look for our jstracker
          var scriptArray = nestedDoc.getElementsByTagName('script');

          for (var j = 0; j < scriptArray.length && !modifiedAScript; j++) {
            var currentScript = scriptArray[j];

            if (currentScript.getAttribute('data-src') == jsTrackerSrc) {
              currentScript.setAttribute('src', newJsTrackerSrc);
              currentScript.setAttribute('data-src', '');

              if (currentScript.removeAttribute) {
                currentScript.removeAttribute('data-src');
              }

              modifiedAScript = true;
            }
          }
        }
      } catch (exception) {
        // trying to access a cross-domain iframe raises a SecurityError
        // this is expected and ignored
        if (!(exception instanceof DOMException && exception.name === 'SecurityError')) {
          // all other cases are raised again to be treated by the calling function
          throw exception;
        }
      }
    }
  }
}

function strIsAppnexusViewabilityScript(str) {
  var regexMatchUrlStart = str.match(VIEWABILITY_URL_START);
  var viewUrlStartInStr = regexMatchUrlStart != null && regexMatchUrlStart.length >= 1;
  var regexMatchFileName = str.match(VIEWABILITY_FILE_NAME);
  var fileNameInStr = regexMatchFileName != null && regexMatchFileName.length >= 1;
  return str.startsWith(SCRIPT_TAG_START) && fileNameInStr && viewUrlStartInStr;
}

function getAppnexusViewabilityScriptFromJsTrackers(jsTrackerArray) {
  var viewJsPayload;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(jsTrackerArray) && strIsAppnexusViewabilityScript(jsTrackerArray)) {
    viewJsPayload = jsTrackerArray;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(jsTrackerArray)) {
    for (var i = 0; i < jsTrackerArray.length; i++) {
      var currentJsTracker = jsTrackerArray[i];

      if (strIsAppnexusViewabilityScript(currentJsTracker)) {
        viewJsPayload = currentJsTracker;
      }
    }
  }

  return viewJsPayload;
}

function getViewabilityScriptUrlFromPayload(viewJsPayload) {
  // extracting the content of the src attribute
  // -> substring between src=" and "
  var indexOfFirstQuote = viewJsPayload.indexOf('src="') + 5; // offset of 5: the length of 'src=' + 1

  var indexOfSecondQuote = viewJsPayload.indexOf('"', indexOfFirstQuote);
  var jsTrackerSrc = viewJsPayload.substring(indexOfFirstQuote, indexOfSecondQuote);
  return jsTrackerSrc;
}

function hasPurpose1Consent(bidderRequest) {
  var result = true;

  if (bidderRequest && bidderRequest.gdprConsent) {
    if (bidderRequest.gdprConsent.gdprApplies && bidderRequest.gdprConsent.apiVersion === 2) {
      result = !!(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidderRequest.gdprConsent, 'vendorData.purpose.consents.1') === true);
    }
  }

  return result;
}

function formatRequest(payload, bidderRequest) {
  var request = [];
  var options = {
    withCredentials: true
  };
  var endpointUrl = URL;

  if (!hasPurpose1Consent(bidderRequest)) {
    endpointUrl = URL_SIMPLE;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getParameterByName"])('apn_test').toUpperCase() === 'TRUE' || __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('apn_test') === true) {
    options.customHeaders = {
      'X-Is-Test': 1
    };
  }

  if (payload.tags.length > MAX_IMPS_PER_REQUEST) {
    var clonedPayload = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepClone"])(payload);
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["chunk"])(payload.tags, MAX_IMPS_PER_REQUEST).forEach(function (tags) {
      clonedPayload.tags = tags;
      var payloadString = JSON.stringify(clonedPayload);
      request.push({
        method: 'POST',
        url: endpointUrl,
        data: payloadString,
        bidderRequest: bidderRequest,
        options: options
      });
    });
  } else {
    var payloadString = JSON.stringify(payload);
    request = {
      method: 'POST',
      url: endpointUrl,
      data: payloadString,
      bidderRequest: bidderRequest,
      options: options
    };
  }

  return request;
}

function newRenderer(adUnitCode, rtbBid) {
  var rendererOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var renderer = __WEBPACK_IMPORTED_MODULE_1__src_Renderer_js__["a" /* Renderer */].install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });

  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Prebid Error calling setRender on renderer', err);
  }

  renderer.setEventHandlers({
    impression: function impression() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"])('AppNexus outstream renderer video event');
      document.querySelector("#".concat(adUnitCode)).style.display = 'none';
    }
  });
  return renderer;
}
/**
 * Unpack the Server's Bid into a Prebid-compatible one.
 * @param serverBid
 * @param rtbBid
 * @param bidderRequest
 * @return Bid
 */


function newBid(serverBid, rtbBid, bidderRequest) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidRequest"])(serverBid.uuid, [bidderRequest]);
  var bid = {
    requestId: serverBid.uuid,
    cpm: rtbBid.cpm,
    creativeId: rtbBid.creative_id,
    dealId: rtbBid.deal_id,
    currency: 'USD',
    netRevenue: true,
    ttl: 300,
    adUnitCode: bidRequest.adUnitCode,
    appnexus: {
      buyerMemberId: rtbBid.buyer_member_id,
      dealPriority: rtbBid.deal_priority,
      dealCode: rtbBid.deal_code
    }
  }; // WE DON'T FULLY SUPPORT THIS ATM - future spot for adomain code; creating a stub for 5.0 compliance

  if (rtbBid.adomain) {
    bid.meta = _extends({}, bid.meta, {
      advertiserDomains: []
    });
  }

  if (rtbBid.advertiser_id) {
    bid.meta = _extends({}, bid.meta, {
      advertiserId: rtbBid.advertiser_id
    });
  } // temporary function; may remove at later date if/when adserver fully supports dchain


  function setupDChain(rtbBid) {
    var dchain = {
      ver: '1.0',
      complete: 0,
      nodes: [{
        bsid: rtbBid.buyer_member_id.toString()
      }]
    };
    return dchain;
  }

  if (rtbBid.buyer_member_id) {
    bid.meta = _extends({}, bid.meta, {
      dchain: setupDChain(rtbBid)
    });
  }

  if (rtbBid.brand_id) {
    bid.meta = _extends({}, bid.meta, {
      brandId: rtbBid.brand_id
    });
  }

  if (rtbBid.rtb.video) {
    // shared video properties used for all 3 contexts
    _extends(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    });

    var videoContext = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video.context');

    switch (videoContext) {
      case __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */]:
        var primaryCatId = Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["getIabSubCategory"])(bidRequest.bidder, rtbBid.brand_category_id);
        bid.meta = _extends({}, bid.meta, {
          primaryCatId: primaryCatId
        });
        var dealTier = rtbBid.deal_priority;
        bid.video = {
          context: __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */],
          durationSeconds: Math.floor(rtbBid.rtb.video.duration_ms / 1000),
          dealTier: dealTier
        };
        bid.vastUrl = rtbBid.rtb.video.asset_url;
        break;

      case __WEBPACK_IMPORTED_MODULE_8__src_video_js__["b" /* OUTSTREAM */]:
        bid.adResponse = serverBid;
        bid.adResponse.ad = bid.adResponse.ads[0];
        bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
        bid.vastXml = rtbBid.rtb.video.content;

        if (rtbBid.renderer_url) {
          var videoBid = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(bidderRequest.bids, function (bid) {
            return bid.bidId === serverBid.uuid;
          });
          var rendererOptions = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(videoBid, 'renderer.options');
          bid.renderer = newRenderer(bid.adUnitCode, rtbBid, rendererOptions);
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_8__src_video_js__["a" /* INSTREAM */]:
        bid.vastUrl = rtbBid.notify_url + '&redir=' + encodeURIComponent(rtbBid.rtb.video.asset_url);
        break;
    }
  } else if (rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]) {
    var nativeAd = rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]; // setting up the jsTracker:
    // we put it as a data-src attribute so that the tracker isn't called
    // until we have the adId (see onBidWon)

    var jsTrackerDisarmed = rtbBid.viewability.config.replace('src=', 'data-src=');
    var jsTrackers = nativeAd.javascript_trackers;

    if (jsTrackers == undefined) {
      jsTrackers = jsTrackerDisarmed;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(jsTrackers)) {
      jsTrackers = [jsTrackers, jsTrackerDisarmed];
    } else {
      jsTrackers.push(jsTrackerDisarmed);
    }

    bid[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
      title: nativeAd.title,
      body: nativeAd.desc,
      body2: nativeAd.desc2,
      cta: nativeAd.ctatext,
      rating: nativeAd.rating,
      sponsoredBy: nativeAd.sponsored,
      privacyLink: nativeAd.privacy_link,
      address: nativeAd.address,
      downloads: nativeAd.downloads,
      likes: nativeAd.likes,
      phone: nativeAd.phone,
      price: nativeAd.price,
      salePrice: nativeAd.saleprice,
      clickUrl: nativeAd.link.url,
      displayUrl: nativeAd.displayurl,
      clickTrackers: nativeAd.link.click_trackers,
      impressionTrackers: nativeAd.impression_trackers,
      javascriptTrackers: jsTrackers
    };

    if (nativeAd.main_img) {
      bid['native'].image = {
        url: nativeAd.main_img.url,
        height: nativeAd.main_img.height,
        width: nativeAd.main_img.width
      };
    }

    if (nativeAd.icon) {
      bid['native'].icon = {
        url: nativeAd.icon.url,
        height: nativeAd.icon.height,
        width: nativeAd.icon.width
      };
    }
  } else {
    _extends(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });

    try {
      if (rtbBid.rtb.trackers) {
        for (var i = 0; i < rtbBid.rtb.trackers[0].impression_urls.length; i++) {
          var url = rtbBid.rtb.trackers[0].impression_urls[i];
          var tracker = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["createTrackPixelHtml"])(url);
          bid.ad += tracker;
        }
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('Error appending tracking pixel', error);
    }
  }

  return bid;
}

function bidToTag(bid) {
  var tag = {};
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;

  if (bid.params.placementId) {
    tag.id = parseInt(bid.params.placementId, 10);
  } else {
    tag.code = bid.params.invCode;
  }

  tag.allow_smaller_sizes = bid.params.allowSmallerSizes || false;
  tag.use_pmt_rule = bid.params.usePaymentRule || false;
  tag.prebid = true;
  tag.disable_psa = true;
  var bidFloor = getBidFloor(bid);

  if (bidFloor) {
    tag.reserve = bidFloor;
  }

  if (bid.params.position) {
    tag.position = {
      'above': 1,
      'below': 2
    }[bid.params.position] || 0;
  }

  if (bid.params.trafficSourceCode) {
    tag.traffic_source_code = bid.params.trafficSourceCode;
  }

  if (bid.params.privateSizes) {
    tag.private_sizes = transformSizes(bid.params.privateSizes);
  }

  if (bid.params.supplyType) {
    tag.supply_type = bid.params.supplyType;
  }

  if (bid.params.pubClick) {
    tag.pubclick = bid.params.pubClick;
  }

  if (bid.params.extInvCode) {
    tag.ext_inv_code = bid.params.extInvCode;
  }

  if (bid.params.publisherId) {
    tag.publisher_id = parseInt(bid.params.publisherId, 10);
  }

  if (bid.params.externalImpId) {
    tag.external_imp_id = bid.params.externalImpId;
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(bid.params.keywords)) {
    var keywords = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["transformBidderParamKeywords"])(bid.params.keywords);

    if (keywords.length > 0) {
      keywords.forEach(deleteValues);
    }

    tag.keywords = keywords;
  }

  var gpid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'ortb2Imp.ext.data.pbadslot');

  if (gpid) {
    tag.gpid = gpid;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */] || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]))) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]);

    if (tag.sizes.length === 0) {
      tag.sizes = transformSizes([1, 1]);
    }

    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
        layouts: [nativeRequest]
      };
    }
  }

  var videoMediaType = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]));
  var context = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'mediaTypes.video.context');

  if (videoMediaType && context === 'adpod') {
    tag.hb_source = 7;
  } else {
    tag.hb_source = 1;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]);
  } // instream gets vastUrl, outstream gets vastXml


  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }

  if (bid.params.video) {
    tag.video = {}; // place any valid video params on the tag

    Object.keys(bid.params.video).filter(function (param) {
      return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(VIDEO_TARGETING, param);
    }).forEach(function (param) {
      switch (param) {
        case 'context':
        case 'playback_method':
          var type = bid.params.video[param];
          type = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(type) ? type[0] : type;
          tag.video[param] = VIDEO_MAPPING[param][type];
          break;
        // Deprecating tags[].video.frameworks in favor of tags[].video_frameworks

        case 'frameworks':
          break;

        default:
          tag.video[param] = bid.params.video[param];
      }
    });

    if (bid.params.video.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.video.frameworks)) {
      tag['video_frameworks'] = bid.params.video.frameworks;
    }
  } // use IAB ORTB values if the corresponding values weren't already set by bid.params.video


  if (videoMediaType) {
    tag.video = tag.video || {};
    Object.keys(videoMediaType).filter(function (param) {
      return __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(VIDEO_RTB_TARGETING, param);
    }).forEach(function (param) {
      switch (param) {
        case 'minduration':
        case 'maxduration':
          if (typeof tag.video[param] !== 'number') tag.video[param] = videoMediaType[param];
          break;

        case 'skip':
          if (typeof tag.video['skippable'] !== 'boolean') tag.video['skippable'] = videoMediaType[param] === 1;
          break;

        case 'skipafter':
          if (typeof tag.video['skipoffset'] !== 'number') tag.video['skippoffset'] = videoMediaType[param];
          break;

        case 'playbackmethod':
          if (typeof tag.video['playback_method'] !== 'number') {
            var type = videoMediaType[param];
            type = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(type) ? type[0] : type; // we only support iab's options 1-4 at this time.

            if (type >= 1 && type <= 4) {
              tag.video['playback_method'] = type;
            }
          }

          break;

        case 'api':
          if (!tag['video_frameworks'] && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(videoMediaType[param])) {
            // need to read thru array; remove 6 (we don't support it), swap 4 <> 5 if found (to match our adserver mapping for these specific values)
            var apiTmp = videoMediaType[param].map(function (val) {
              var v = val === 4 ? 5 : val === 5 ? 4 : val;

              if (v >= 1 && v <= 5) {
                return v;
              }
            }).filter(function (v) {
              return v;
            });
            tag['video_frameworks'] = apiTmp;
          }

          break;
      }
    });
  }

  if (bid.renderer) {
    tag.video = _extends({}, tag.video, {
      custom_renderer_present: true
    });
  }

  if (bid.params.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.frameworks)) {
    tag['banner_frameworks'] = bid.params.frameworks;
  }

  var adUnit = __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(__WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__["a" /* auctionManager */].getAdUnits(), function (au) {
    return bid.transactionId === au.transactionId;
  });

  if (adUnit && adUnit.mediaTypes && adUnit.mediaTypes.banner) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */]);
  }

  if (tag.ad_types.length === 0) {
    delete tag.ad_types;
  }

  return tag;
}
/* Turn bid request sizes into ut-compatible format */


function transformSizes(requestSizes) {
  var sizes = [];
  var sizeObj = {};

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(requestSizes) && requestSizes.length === 2 && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if (_typeof(requestSizes) === 'object') {
    for (var i = 0; i < requestSizes.length; i++) {
      var size = requestSizes[i];
      sizeObj = {};
      sizeObj.width = parseInt(size[0], 10);
      sizeObj.height = parseInt(size[1], 10);
      sizes.push(sizeObj);
    }
  }

  return sizes;
}

function hasUserInfo(bid) {
  return !!bid.params.user;
}

function hasMemberId(bid) {
  return !!parseInt(bid.params.member, 10);
}

function hasAppDeviceInfo(bid) {
  if (bid.params) {
    return !!bid.params.app;
  }
}

function hasAppId(bid) {
  if (bid.params && bid.params.app) {
    return !!bid.params.app.id;
  }

  return !!bid.params.app;
}

function hasDebug(bid) {
  return !!bid.debug;
}

function hasAdPod(bid) {
  return bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.context === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */];
}

function hasOmidSupport(bid) {
  var hasOmid = false;
  var bidderParams = bid.params;
  var videoParams = bid.params.video;

  if (bidderParams.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bidderParams.frameworks)) {
    hasOmid = __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(bid.params.frameworks, 6);
  }

  if (!hasOmid && videoParams && videoParams.frameworks && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(videoParams.frameworks)) {
    hasOmid = __WEBPACK_IMPORTED_MODULE_7_core_js_pure_features_array_includes_js___default()(bid.params.video.frameworks, 6);
  }

  return hasOmid;
}
/**
 * Expand an adpod placement into a set of request objects according to the
 * total adpod duration and the range of duration seconds. Sets minduration/
 * maxduration video property according to requireExactDuration configuration
 */


function createAdPodRequest(tags, adPodBid) {
  var _adPodBid$mediaTypes$ = adPodBid.mediaTypes.video,
      durationRangeSec = _adPodBid$mediaTypes$.durationRangeSec,
      requireExactDuration = _adPodBid$mediaTypes$.requireExactDuration;
  var numberOfPlacements = getAdPodPlacementNumber(adPodBid.mediaTypes.video);
  var maxDuration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getMaxValueFromArray"])(durationRangeSec);
  var tagToDuplicate = tags.filter(function (tag) {
    return tag.uuid === adPodBid.bidId;
  });
  var request = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["fill"].apply(void 0, _toConsumableArray(tagToDuplicate).concat([numberOfPlacements]));

  if (requireExactDuration) {
    var divider = Math.ceil(numberOfPlacements / durationRangeSec.length);
    var chunked = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["chunk"])(request, divider); // each configured duration is set as min/maxduration for a subset of requests

    durationRangeSec.forEach(function (duration, index) {
      chunked[index].map(function (tag) {
        setVideoProperty(tag, 'minduration', duration);
        setVideoProperty(tag, 'maxduration', duration);
      });
    });
  } else {
    // all maxdurations should be the same
    request.map(function (tag) {
      return setVideoProperty(tag, 'maxduration', maxDuration);
    });
  }

  return request;
}

function getAdPodPlacementNumber(videoParams) {
  var adPodDurationSec = videoParams.adPodDurationSec,
      durationRangeSec = videoParams.durationRangeSec,
      requireExactDuration = videoParams.requireExactDuration;
  var minAllowedDuration = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getMinValueFromArray"])(durationRangeSec);
  var numberOfPlacements = Math.floor(adPodDurationSec / minAllowedDuration);
  return requireExactDuration ? Math.max(numberOfPlacements, durationRangeSec.length) : numberOfPlacements;
}

function setVideoProperty(tag, key, value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(tag.video)) {
    tag.video = {};
  }

  tag.video[key] = value;
}

function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && __WEBPACK_IMPORTED_MODULE_6_core_js_pure_features_array_find_js___default()(tag.ads, function (ad) {
    return ad.rtb;
  });
}

function buildNativeRequest(params) {
  var request = {}; // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}

  Object.keys(params).forEach(function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key; // required params are always passed on request

    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = _extends({}, requiredParams, params[key]); // convert the sizes of image/icon assets to proper format (if needed)

    var isImageAsset = !!(requestKey === NATIVE_MAPPING.image.serverName || requestKey === NATIVE_MAPPING.icon.serverName);

    if (isImageAsset && request[requestKey].sizes) {
      var sizes = request[requestKey].sizes;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(sizes) || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(sizes) && sizes.length > 0 && sizes.every(function (sz) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArrayOfNums"])(sz);
      })) {
        request[requestKey].sizes = transformSizes(request[requestKey].sizes);
      }
    }

    if (requestKey === NATIVE_MAPPING.privacyLink) {
      request.privacy_supported = true;
    }
  });
  return request;
}
/**
 * This function hides google div container for outstream bids to remove unwanted space on page. Appnexus renderer creates a new iframe outside of google iframe to render the outstream creative.
 * @param {string} elementId element id
 */


function hidedfpContainer(elementId) {
  var el = document.getElementById(elementId).querySelectorAll("div[id^='google_ads']");

  if (el[0]) {
    el[0].style.setProperty('display', 'none');
  }
}

function hideSASIframe(elementId) {
  try {
    // find script tag with id 'sas_script'. This ensures it only works if you're using Smart Ad Server.
    var el = document.getElementById(elementId).querySelectorAll("script[id^='sas_script']");

    if (el[0].nextSibling && el[0].nextSibling.localName === 'iframe') {
      el[0].nextSibling.style.setProperty('display', 'none');
    }
  } catch (e) {// element not found!
  }
}

function outstreamRender(bid) {
  hidedfpContainer(bid.adUnitCode);
  hideSASIframe(bid.adUnitCode); // push to render queue because ANOutstreamVideo may not be loaded yet

  bid.renderer.push(function () {
    window.ANOutstreamVideo.renderAd({
      tagId: bid.adResponse.tag_id,
      sizes: [bid.getSize().split('x')],
      targetId: bid.adUnitCode,
      // target div id to render video
      uuid: bid.adResponse.uuid,
      adResponse: bid.adResponse,
      rendererOptions: bid.renderer.getConfig()
    }, handleOutstreamRendererEvents.bind(null, bid));
  });
}

function handleOutstreamRendererEvents(bid, id, eventName) {
  bid.renderer.handleVideoEvent({
    id: id,
    eventName: eventName
  });
}

function parseMediaType(rtbBid) {
  var adType = rtbBid.ad_type;

  if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */];
  } else if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */];
  } else {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */];
  }
}

function addUserId(eids, id, source, rti) {
  if (id) {
    if (rti) {
      eids.push({
        source: source,
        id: id,
        rti_partner: rti
      });
    } else {
      eids.push({
        source: source,
        id: id
      });
    }
  }

  return eids;
}

function getBidFloor(bid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(bid.getFloor)) {
    return bid.params.reserve ? bid.params.reserve : null;
  }

  var floor = bid.getFloor({
    currency: 'USD',
    mediaType: '*',
    size: '*'
  });

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(floor) && !isNaN(floor.floor) && floor.currency === 'USD') {
    return floor.floor;
  }

  return null;
}

Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('appnexusBidAdapter');

/***/ })

},[296]);
pbjsChunk([2],{

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(410);


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() { return ADAPTER_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() { return PROFILE_ID_PUBLISHERTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAST_BID_VERSION_CURRENT", function() { return FAST_BID_VERSION_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony export (immutable) */ __webpack_exports__["canFastBid"] = canFastBid;
/* harmony export (immutable) */ __webpack_exports__["getFastBidUrl"] = getFastBidUrl;
/* harmony export (immutable) */ __webpack_exports__["tryGetCriteoFastBid"] = tryGetCriteoFastBid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adloader_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







 // ref#2


var GVLID = 91;
var ADAPTER_VERSION = 34;
var BIDDER_CODE = 'criteo';
var CDB_ENDPOINT = 'https://bidder.criteo.com/cdb';
var PROFILE_ID_INLINE = 207;
var PROFILE_ID_PUBLISHERTAG = 185;
var storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__["b" /* getStorageManager */])(GVLID);
var LOG_PREFIX = 'Criteo: ';
/*
  If you don't want to use the FastBid adapter feature, you can lighten criteoBidAdapter size by :
  1. commenting the tryGetCriteoFastBid function inner content (see ref#1)
  2. removing the line 'verify' function import line (see ref#2)

  Unminified source code can be found in the privately shared repo: https://github.com/Prebid-org/prebid-js-external-js-criteo/blob/master/dist/prod.js
*/

var FAST_BID_VERSION_PLACEHOLDER = '%FAST_BID_VERSION%';
var FAST_BID_VERSION_CURRENT = 117;
var FAST_BID_VERSION_LATEST = 'latest';
var FAST_BID_VERSION_NONE = 'none';
var PUBLISHER_TAG_URL_TEMPLATE = 'https://static.criteo.net/js/ld/publishertag.prebid' + FAST_BID_VERSION_PLACEHOLDER + '.js';
var FAST_BID_PUBKEY_E = 65537;
var FAST_BID_PUBKEY_N = 'ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=';
/** @type {BidderSpec} */

var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]],

  /** f
   * @param {object} bid
   * @return {boolean}
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    // either one of zoneId or networkId should be set
    if (!(bid && bid.params && (bid.params.zoneId || bid.params.networkId))) {
      return false;
    } // video media types requires some mandatory params


    if (hasVideoMediaType(bid)) {
      if (!hasValidVideoMediaType(bid)) {
        return false;
      }
    }

    return true;
  },

  /**
   * @param {BidRequest[]} bidRequests
   * @param {*} bidderRequest
   * @return {ServerRequest}
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var url;
    var data;
    var fpd = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getLegacyFpd(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('ortb2')) || {};

    _extends(bidderRequest, {
      publisherExt: fpd.context,
      userExt: fpd.user,
      ceh: __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('criteo.ceh')
    }); // If publisher tag not already loaded try to get it from fast bid


    var fastBidVersion = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('criteo.fastBidVersion');
    var canLoadPublisherTag = canFastBid(fastBidVersion);

    if (!publisherTagAvailable() && canLoadPublisherTag) {
      window.Criteo = window.Criteo || {};
      window.Criteo.usePrebidEvents = false;
      tryGetCriteoFastBid();
      var fastBidUrl = getFastBidUrl(fastBidVersion); // Reload the PublisherTag after the timeout to ensure FastBid is up-to-date and tracking done properly

      setTimeout(function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adloader_js__["a" /* loadExternalScript */])(fastBidUrl, BIDDER_CODE);
      }, bidderRequest.timeout);
    }

    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, bidRequests, bidderRequest, "6.13.0-pre");
      url = adapter.buildCdbUrl();
      data = adapter.buildCdbRequest();
    } else {
      var context = buildContext(bidRequests, bidderRequest);
      url = buildCdbUrl(context);
      data = buildCdbRequest(context, bidRequests, bidderRequest);
    }

    if (data) {
      return {
        method: 'POST',
        url: url,
        data: data,
        bidRequests: bidRequests
      };
    }
  },

  /**
   * @param {*} response
   * @param {ServerRequest} request
   * @return {Bid[]}
   */
  interpretResponse: function interpretResponse(response, request) {
    var body = response.body || response;

    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(request);

      if (adapter) {
        return adapter.interpretResponse(body, request);
      }
    }

    var bids = [];

    if (body && body.slots && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(body.slots)) {
      body.slots.forEach(function (slot) {
        var bidRequest = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(request.bidRequests, function (b) {
          return b.adUnitCode === slot.impid && (!b.params.zoneId || parseInt(b.params.zoneId) === slot.zoneid);
        });
        var bidId = bidRequest.bidId;
        var bid = {
          requestId: bidId,
          adId: slot.bidId || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getUniqueIdentifierStr"])(),
          cpm: slot.cpm,
          currency: slot.currency,
          netRevenue: true,
          ttl: slot.ttl || 60,
          creativeId: slot.creativecode,
          width: slot.width,
          height: slot.height,
          dealId: slot.dealCode
        };

        if (slot.adomain) {
          bid.meta = _extends({}, bid.meta, {
            advertiserDomains: slot.adomain
          });
        }

        if (slot.native) {
          if (bidRequest.params.nativeCallback) {
            bid.ad = createNativeAd(bidId, slot.native, bidRequest.params.nativeCallback);
          } else {
            bid.native = createPrebidNativeAd(slot.native);
            bid.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */];
          }
        } else if (slot.video) {
          bid.vastUrl = slot.displayurl;
          bid.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */];
        } else {
          bid.ad = slot.creative;
        }

        bids.push(bid);
      });
    }

    return bids;
  },

  /**
   * @param {TimedOutBid} timeoutData
   */
  onTimeout: function onTimeout(timeoutData) {
    if (publisherTagAvailable() && Array.isArray(timeoutData)) {
      var auctionsIds = [];
      timeoutData.forEach(function (bid) {
        if (auctionsIds.indexOf(bid.auctionId) === -1) {
          auctionsIds.push(bid.auctionId); // eslint-disable-next-line no-undef

          var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(bid.auctionId);
          adapter.handleBidTimeout();
        }
      });
    }
  },

  /**
   * @param {Bid} bid
   */
  onBidWon: function onBidWon(bid) {
    if (publisherTagAvailable() && bid) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(bid.auctionId);
      adapter.handleBidWon(bid);
    }
  },

  /**
   * @param {Bid} bid
   */
  onSetTargeting: function onSetTargeting(bid) {
    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(bid.auctionId);
      adapter.handleSetTargeting(bid);
    }
  }
};
/**
 * @return {boolean}
 */

function publisherTagAvailable() {
  // eslint-disable-next-line no-undef
  return typeof Criteo !== 'undefined' && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
}
/**
 * @param {BidRequest[]} bidRequests
 * @param bidderRequest
 */


function buildContext(bidRequests, bidderRequest) {
  var referrer = '';

  if (bidderRequest && bidderRequest.refererInfo) {
    referrer = bidderRequest.refererInfo.referer;
  }

  var queryString = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(referrer).search;
  var context = {
    url: referrer,
    debug: queryString['pbt_debug'] === '1',
    noLog: queryString['pbt_nolog'] === '1',
    amp: false
  };
  bidRequests.forEach(function (bidRequest) {
    if (bidRequest.params.integrationMode === 'amp') {
      context.amp = true;
    }
  });
  return context;
}
/**
 * @param {CriteoContext} context
 * @return {string}
 */


function buildCdbUrl(context) {
  var url = CDB_ENDPOINT;
  url += '?profileId=' + PROFILE_ID_INLINE;
  url += '&av=' + String(ADAPTER_VERSION);
  url += '&wv=' + encodeURIComponent("6.13.0-pre");
  url += '&cb=' + String(Math.floor(Math.random() * 99999999999));

  if (context.amp) {
    url += '&im=1';
  }

  if (context.debug) {
    url += '&debug=1';
  }

  if (context.noLog) {
    url += '&nolog=1';
  }

  return url;
}

function checkNativeSendId(bidRequest) {
  return !(bidRequest.nativeParams && (bidRequest.nativeParams.image && (bidRequest.nativeParams.image.sendId !== true || bidRequest.nativeParams.image.sendTargetingKeys === true) || bidRequest.nativeParams.icon && (bidRequest.nativeParams.icon.sendId !== true || bidRequest.nativeParams.icon.sendTargetingKeys === true) || bidRequest.nativeParams.clickUrl && (bidRequest.nativeParams.clickUrl.sendId !== true || bidRequest.nativeParams.clickUrl.sendTargetingKeys === true) || bidRequest.nativeParams.displayUrl && (bidRequest.nativeParams.displayUrl.sendId !== true || bidRequest.nativeParams.displayUrl.sendTargetingKeys === true) || bidRequest.nativeParams.privacyLink && (bidRequest.nativeParams.privacyLink.sendId !== true || bidRequest.nativeParams.privacyLink.sendTargetingKeys === true) || bidRequest.nativeParams.privacyIcon && (bidRequest.nativeParams.privacyIcon.sendId !== true || bidRequest.nativeParams.privacyIcon.sendTargetingKeys === true)));
}
/**
 * @param {CriteoContext} context
 * @param {BidRequest[]} bidRequests
 * @param bidderRequest
 * @return {*}
 */


function buildCdbRequest(context, bidRequests, bidderRequest) {
  var networkId;
  var schain;
  var request = {
    publisher: {
      url: context.url,
      ext: bidderRequest.publisherExt
    },
    slots: bidRequests.map(function (bidRequest) {
      networkId = bidRequest.params.networkId || networkId;
      schain = bidRequest.schain || schain;
      var slot = {
        impid: bidRequest.adUnitCode,
        transactionid: bidRequest.transactionId,
        auctionId: bidRequest.auctionId
      };

      if (bidRequest.params.zoneId) {
        slot.zoneid = bidRequest.params.zoneId;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'ortb2Imp.ext')) {
        slot.ext = bidRequest.ortb2Imp.ext;
      }

      if (bidRequest.params.ext) {
        slot.ext = _extends({}, slot.ext, bidRequest.params.ext);
      }

      if (bidRequest.params.publisherSubId) {
        slot.publishersubid = bidRequest.params.publisherSubId;
      }

      if (bidRequest.params.nativeCallback || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]))) {
        slot.native = true;

        if (!checkNativeSendId(bidRequest)) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_PREFIX + 'all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)');
        }

        slot.sizes = parseSizes(retrieveBannerSizes(bidRequest), parseNativeSize);
      } else {
        slot.sizes = parseSizes(retrieveBannerSizes(bidRequest), parseSize);
      }

      if (hasVideoMediaType(bidRequest)) {
        var video = {
          playersizes: parseSizes(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video.playerSize'), parseSize),
          mimes: bidRequest.mediaTypes.video.mimes,
          protocols: bidRequest.mediaTypes.video.protocols,
          maxduration: bidRequest.mediaTypes.video.maxduration,
          api: bidRequest.mediaTypes.video.api,
          skip: bidRequest.mediaTypes.video.skip,
          placement: bidRequest.mediaTypes.video.placement,
          minduration: bidRequest.mediaTypes.video.minduration,
          playbackmethod: bidRequest.mediaTypes.video.playbackmethod,
          startdelay: bidRequest.mediaTypes.video.startdelay
        };
        var paramsVideo = bidRequest.params.video;

        if (paramsVideo !== undefined) {
          video.skip = video.skip || paramsVideo.skip || 0;
          video.placement = video.placement || paramsVideo.placement;
          video.minduration = video.minduration || paramsVideo.minduration;
          video.playbackmethod = video.playbackmethod || paramsVideo.playbackmethod;
          video.startdelay = video.startdelay || paramsVideo.startdelay || 0;
        }

        slot.video = video;
      }

      return slot;
    })
  };

  if (networkId) {
    request.publisher.networkid = networkId;
  }

  if (schain) {
    request.source = {
      ext: {
        schain: schain
      }
    };
  }

  ;
  request.user = {
    ext: bidderRequest.userExt
  };

  if (bidderRequest && bidderRequest.ceh) {
    request.user.ceh = bidderRequest.ceh;
  }

  if (bidderRequest && bidderRequest.gdprConsent) {
    request.gdprConsent = {};

    if (typeof bidderRequest.gdprConsent.gdprApplies !== 'undefined') {
      request.gdprConsent.gdprApplies = !!bidderRequest.gdprConsent.gdprApplies;
    }

    request.gdprConsent.version = bidderRequest.gdprConsent.apiVersion;

    if (typeof bidderRequest.gdprConsent.consentString !== 'undefined') {
      request.gdprConsent.consentData = bidderRequest.gdprConsent.consentString;
    }
  }

  if (bidderRequest && bidderRequest.uspConsent) {
    request.user.uspIab = bidderRequest.uspConsent;
  }

  return request;
}

function retrieveBannerSizes(bidRequest) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.banner.sizes') || bidRequest.sizes;
}

function parseSizes(sizes, parser) {
  if (Array.isArray(sizes[0])) {
    // is there several sizes ? (ie. [[728,90],[200,300]])
    return sizes.map(function (size) {
      return parser(size);
    });
  }

  return [parser(sizes)]; // or a single one ? (ie. [728,90])
}

function parseSize(size) {
  return size[0] + 'x' + size[1];
}

function parseNativeSize(size) {
  if (size[0] === undefined && size[1] === undefined) {
    return '2x2';
  }

  return size[0] + 'x' + size[1];
}

function hasVideoMediaType(bidRequest) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video') !== undefined;
}

function hasValidVideoMediaType(bidRequest) {
  var isValid = true;
  var requiredMediaTypesParams = ['mimes', 'playerSize', 'maxduration', 'protocols', 'api', 'skip', 'placement', 'playbackmethod'];
  requiredMediaTypesParams.forEach(function (param) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video.' + param) === undefined && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bidRequest, 'params.video.' + param) === undefined) {
      isValid = false;
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('Criteo Bid Adapter: mediaTypes.video.' + param + ' is required');
    }
  });

  if (isValid) {
    var videoPlacement = bidRequest.mediaTypes.video.placement || bidRequest.params.video.placement; // We do not support long form for now, also we have to check that context & placement are consistent

    if (bidRequest.mediaTypes.video.context == 'instream' && videoPlacement === 1) {
      return true;
    } else if (bidRequest.mediaTypes.video.context == 'outstream' && videoPlacement !== 1) {
      return true;
    }
  }

  return false;
}
/**
 * Create prebid compatible native ad with native payload
 * @param {*} payload
 * @returns prebid native ad assets
 */


function createPrebidNativeAd(payload) {
  return {
    sendTargetingKeys: false,
    // no key is added to KV by default
    title: payload.products[0].title,
    body: payload.products[0].description,
    sponsoredBy: payload.advertiser.description,
    icon: payload.advertiser.logo,
    image: payload.products[0].image,
    clickUrl: payload.products[0].click_url,
    privacyLink: payload.privacy.optout_click_url,
    privacyIcon: payload.privacy.optout_image_url,
    cta: payload.products[0].call_to_action,
    price: payload.products[0].price,
    impressionTrackers: payload.impression_pixels.map(function (pix) {
      return pix.url;
    })
  };
}
/**
 * @param {string} id
 * @param {*} payload
 * @param {*} callback
 * @return {string}
 */


function createNativeAd(id, payload, callback) {
  // Store the callback and payload in a global object to be later accessed from the creative
  var slotsName = 'criteo_prebid_native_slots';
  window[slotsName] = window[slotsName] || {};
  window[slotsName][id] = {
    callback: callback,
    payload: payload
  }; // The creative is in an iframe so we have to get the callback and payload
  // from the parent window (doesn't work with safeframes)

  return "\n<script type=\"text/javascript\">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.".concat(slotsName, ";\n  if(!slots){continue;}\n  var responseSlot = slots[\"").concat(id, "\"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>");
}

function canFastBid(fastBidVersion) {
  return fastBidVersion !== FAST_BID_VERSION_NONE;
}
function getFastBidUrl(fastBidVersion) {
  var version;

  if (fastBidVersion === FAST_BID_VERSION_LATEST) {
    version = '';
  } else if (fastBidVersion) {
    var majorVersion = String(fastBidVersion).split('.')[0];

    if (majorVersion < 102) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Specifying a Fastbid version which is not supporting version selection.');
    }

    version = '.' + fastBidVersion;
  } else {
    version = '.' + FAST_BID_VERSION_CURRENT;
  }

  return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, version);
}
function tryGetCriteoFastBid() {
  // begin ref#1
  try {
    var fastBidStorageKey = 'criteo_fast_bid';
    var hashPrefix = '// Hash: ';
    var fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);

    if (fastBidFromStorage !== null) {
      // The value stored must contain the file's encrypted hash as first line
      var firstLineEndPosition = fastBidFromStorage.indexOf('\n');
      var firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();

      if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('No hash found in FastBid');
        storage.removeDataFromLocalStorage(fastBidStorageKey);
      } else {
        // Remove the hash part from the locally stored value
        var publisherTagHash = firstLine.substr(hashPrefix.length);
        var publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);

        if (Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__["verify"])(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E)) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('Using Criteo FastBid');
          eval(publisherTag); // eslint-disable-line no-eval
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])('Invalid Criteo FastBid found');
          storage.removeDataFromLocalStorage(fastBidStorageKey);
        }
      }
    }
  } catch (e) {// Unable to get fast bid
  } // end ref#1

}
Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('criteoBidAdapter');

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsbnLite_1 = __webpack_require__(78);
var sha256_1 = __webpack_require__(79);
function verify(code, hash, nStrPubKey, ePubKey) {
    var x = new jsbnLite_1.BigInteger(jsbnLite_1.b64toHex(hash));
    var m = new jsbnLite_1.BigInteger(jsbnLite_1.b64toHex(nStrPubKey));
    var r = x.modPowInt(ePubKey, m);
    return jsbnLite_1.removeExtraSymbols(r.toHexString()) === sha256_1.Sha256.hash(code);
}
exports.verify = verify;


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Bits per digit
var dbits;
// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary & 0xffffff) == 0xefcafe);
var BigInteger = /** @class */ (function () {
    function BigInteger(a) {
        if (a !== null) {
            this.fromHexString(a);
        }
    }
    BigInteger.prototype.toHexString = function () {
        if (this.s < 0) {
            return "-" + this.negate().toHexString();
        }
        var k = 4;
        var km = (1 << k) - 1;
        var d;
        var m = false;
        var r = "";
        var i = this.t;
        var p = this.DB - (i * this.DB) % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = int2char(d);
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & ((1 << p) - 1)) << (k - p);
                    d |= this[--i] >> (p += this.DB - k);
                }
                else {
                    d = (this[i] >> (p -= k)) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if (d > 0) {
                    m = true;
                }
                if (m) {
                    r += int2char(d);
                }
            }
        }
        return m ? r : "0";
    };
    BigInteger.prototype.fromHexString = function (s) {
        if (s === null) {
            return;
        }
        var k = 4;
        this.t = 0;
        this.s = 0;
        var i = s.length;
        var mi = false;
        var sh = 0;
        while (--i >= 0) {
            var x = (k == 8) ? (+s[i]) & 0xff : intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-") {
                    mi = true;
                }
                continue;
            }
            mi = false;
            if (sh == 0) {
                this[this.t++] = x;
            }
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh));
            }
            else {
                this[this.t - 1] |= x << sh;
            }
            sh += k;
            if (sh >= this.DB) {
                sh -= this.DB;
            }
        }
        if (k == 8 && ((+s[0]) & 0x80) != 0) {
            this.s = -1;
            if (sh > 0) {
                this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
            }
        }
        this.clamp();
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    BigInteger.prototype.negate = function () {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
    };
    BigInteger.prototype.abs = function () {
        return (this.s < 0) ? this.negate() : this;
    };
    BigInteger.prototype.mod = function (a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            a.subTo(r, r);
        }
        return r;
    };
    BigInteger.prototype.copyTo = function (r) {
        for (var i = this.t - 1; i >= 0; --i) {
            r[i] = this[i];
        }
        r.t = this.t;
        r.s = this.s;
    };
    BigInteger.prototype.lShiftTo = function (n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB);
        var c = (this.s << bs) & this.DM;
        for (var i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = (this[i] >> cbs) | c;
            c = (this[i] & bm) << bs;
        }
        for (var i = ds - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
    };
    BigInteger.prototype.invDigit = function () {
        if (this.t < 1) {
            return 0;
        }
        var x = this[0];
        if ((x & 1) == 0) {
            return 0;
        }
        var y = x & 3; // y == 1/x mod 2^2
        y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
        y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
        y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
        // last step - calculate inverse mod DV directly;
        // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
        y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
        // we really want the negative inverse, and -DV < y < DV
        return (y > 0) ? this.DV - y : -y;
    };
    BigInteger.prototype.dlShiftTo = function (n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + n] = this[i];
        }
        for (i = n - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r.t = this.t + n;
        r.s = this.s;
    };
    BigInteger.prototype.squareTo = function (r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1;
            }
        }
        if (r.t > 0) {
            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        }
        r.s = 0;
        r.clamp();
    };
    BigInteger.prototype.multiplyTo = function (a, r) {
        var x = this.abs();
        var y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < y.t; ++i) {
            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        }
        r.s = 0;
        r.clamp();
        if (this.s != a.s) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    BigInteger.prototype.divRemTo = function (m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0) {
            return;
        }
        var pt = this.abs();
        if (pt.t < pm.t) {
            if (q != null) {
                q.fromHexString("0");
            }
            if (r != null) {
                this.copyTo(r);
            }
            return;
        }
        if (r == null) {
            r = nbi();
        }
        var y = nbi();
        var ts = this.s;
        var ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
        if (nsh > 0) {
            pm.lShiftTo(nsh, y);
            pt.lShiftTo(nsh, r);
        }
        else {
            pm.copyTo(y);
            pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) {
            return;
        }
        var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt;
        var d2 = (1 << this.F1) / yt;
        var e = 1 << this.F2;
        var i = r.t;
        var j = i - ys;
        var t = (q == null) ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y); // "negative" y so we can replace sub with am later
        while (y.t < ys) {
            y[y.t++] = 0;
        }
        while (--j >= 0) {
            // Estimate quotient digit
            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
                y.dlShiftTo(j, t);
                r.subTo(t, r);
                while (r[i] < --qd) {
                    r.subTo(t, r);
                }
            }
        }
        if (q != null) {
            r.drShiftTo(ys, q);
            if (ts != ms) {
                BigInteger.ZERO.subTo(q, q);
            }
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) {
            r.rShiftTo(nsh, r);
        } // Denormalize remainder
        if (ts < 0) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    BigInteger.prototype.rShiftTo = function (n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) {
            r[this.t - ds - 1] |= (this.s & bm) << cbs;
        }
        r.t = this.t - ds;
        r.clamp();
    };
    BigInteger.prototype.drShiftTo = function (n, r) {
        for (var i = n; i < this.t; ++i) {
            r[i - n] = this[i];
        }
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
    };
    BigInteger.prototype.subTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c -= a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c < -1) {
            r[i++] = this.DV + c;
        }
        else if (c > 0) {
            r[i++] = c;
        }
        r.t = i;
        r.clamp();
    };
    BigInteger.prototype.clamp = function () {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) {
            --this.t;
        }
    };
    BigInteger.prototype.modPowInt = function (e, m) {
        var z;
        if (e < 256 || m.isEven()) {
            z = new Classic(m);
        }
        else {
            z = new Montgomery(m);
        }
        return this.exp(e, z);
    };
    BigInteger.prototype.exp = function (e, z) {
        if (e > 0xffffffff || e < 1) {
            return BigInteger.ONE;
        }
        var r = nbi();
        var r2 = nbi();
        var g = z.convert(this);
        var i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
            z.sqrTo(r, r2);
            if ((e & (1 << i)) > 0) {
                z.mulTo(r2, g, r);
            }
            else {
                var t = r;
                r = r2;
                r2 = t;
            }
        }
        return z.revert(r);
    };
    BigInteger.prototype.isEven = function () {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
    };
    BigInteger.prototype.compareTo = function (a) {
        var r = this.s - a.s;
        if (r != 0) {
            return r;
        }
        var i = this.t;
        r = i - a.t;
        if (r != 0) {
            return (this.s < 0) ? -r : r;
        }
        while (--i >= 0) {
            if ((r = this[i] - a[i]) != 0) {
                return r;
            }
        }
        return 0;
    };
    BigInteger.prototype.am1 = function (i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 0x4000000);
            w[j++] = v & 0x3ffffff;
        }
        return c;
    };
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    BigInteger.prototype.am2 = function (i, x, w, j, c, n) {
        var xl = x & 0x7fff;
        var xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 0x7fff;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 0x3fffffff;
        }
        return c;
    };
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    BigInteger.prototype.am3 = function (i, x, w, j, c, n) {
        var xl = x & 0x3fff;
        var xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 0x3fff;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 0xfffffff;
        }
        return c;
    };
    return BigInteger;
}());
exports.BigInteger = BigInteger;
function nbi() { return new BigInteger(null); }
exports.nbi = nbi;
function nbits(x) {
    var r = 1;
    var t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}
exports.nbits = nbits;
var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
}
exports.intAt = intAt;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(n) {
    return BI_RM.charAt(n);
}
exports.int2char = int2char;
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
function b64toHex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3
    var slop = 0;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) == b64pad) {
            break;
        }
        var v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue;
        }
        if (k == 0) {
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if (k == 1) {
            ret += int2char((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if (k == 2) {
            ret += int2char(slop);
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += int2char((slop << 2) | (v >> 4));
            ret += int2char(v & 0xf);
            k = 0;
        }
    }
    if (k == 1) {
        ret += int2char(slop << 2);
    }
    return ret;
}
exports.b64toHex = b64toHex;
function removeExtraSymbols(s) {
    return s
        .replace(/^1f+00/, "")
        .replace("3031300d060960864801650304020105000420", "");
}
exports.removeExtraSymbols = removeExtraSymbols;
var Classic = /** @class */ (function () {
    function Classic(m) {
        this.m = m;
    }
    // Classic.prototype.convert = cConvert;
    Classic.prototype.convert = function (x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) {
            return x.mod(this.m);
        }
        else {
            return x;
        }
    };
    // Classic.prototype.revert = cRevert;
    Classic.prototype.revert = function (x) {
        return x;
    };
    // Classic.prototype.reduce = cReduce;
    Classic.prototype.reduce = function (x) {
        x.divRemTo(this.m, null, x);
    };
    // Classic.prototype.mulTo = cMulTo;
    Classic.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Classic.prototype.sqrTo = cSqrTo;
    Classic.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Classic;
}());
var Montgomery = /** @class */ (function () {
    function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << (m.DB - 15)) - 1;
        this.mt2 = 2 * m.t;
    }
    // Montgomery.prototype.convert = montConvert;
    // xR mod m
    Montgomery.prototype.convert = function (x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            this.m.subTo(r, r);
        }
        return r;
    };
    // Montgomery.prototype.revert = montRevert;
    // x/R mod m
    Montgomery.prototype.revert = function (x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    };
    // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)
    Montgomery.prototype.reduce = function (x) {
        while (x.t <= this.mt2) {
            // pad x so am has enough room later
            x[x.t++] = 0;
        }
        for (var i = 0; i < this.m.t; ++i) {
            // faster way of calculating u0 = x[i]*mp mod DV
            var j = x[i] & 0x7fff;
            var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
            // use am to combine the multiply-shift-add into one call
            j = i + this.m.t;
            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
            // propagate carry
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++;
            }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r
    Montgomery.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r
    Montgomery.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Montgomery;
}());
function nbv(i) {
    var r = nbi();
    r.fromHexString(i.toString());
    return r;
}
exports.nbv = nbv;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = BigInteger.prototype.am2;
    dbits = 30;
}
else if (j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = BigInteger.prototype.am1;
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = BigInteger.prototype.am3;
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sha256 = /** @class */ (function () {
    function Sha256() {
    }
    Sha256.hash = function (msg) {
        msg = Sha256.utf8Encode(msg || "");
        var K = [
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
            0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
            0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
            0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
            0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
            0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
            0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
        ];
        var H = [
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
        ];
        msg += String.fromCharCode(0x80);
        var l = msg.length / 4 + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);
        for (var i = 0; i < N; i++) {
            M[i] = new Array(16);
            for (var j = 0; j < 16; j++) {
                M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16)
                    | (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3) << 0);
            }
        }
        var lenHi = ((msg.length - 1) * 8) / Math.pow(2, 32);
        var lenLo = ((msg.length - 1) * 8) >>> 0;
        M[N - 1][14] = Math.floor(lenHi);
        M[N - 1][15] = lenLo;
        for (var i = 0; i < N; i++) {
            var W = new Array(64);
            for (var t = 0; t < 16; t++)
                W[t] = M[i][t];
            for (var t = 16; t < 64; t++) {
                W[t] = (Sha256.q1(W[t - 2]) + W[t - 7] + Sha256.q0(W[t - 15]) + W[t - 16]) >>> 0;
            }
            var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
            for (var t = 0; t < 64; t++) {
                var T1 = h + Sha256.z1(e) + Sha256.Ch(e, f, g) + K[t] + W[t];
                var T2 = Sha256.z0(a) + Sha256.Maj(a, b, c);
                h = g;
                g = f;
                f = e;
                e = (d + T1) >>> 0;
                d = c;
                c = b;
                b = a;
                a = (T1 + T2) >>> 0;
            }
            H[0] = (H[0] + a) >>> 0;
            H[1] = (H[1] + b) >>> 0;
            H[2] = (H[2] + c) >>> 0;
            H[3] = (H[3] + d) >>> 0;
            H[4] = (H[4] + e) >>> 0;
            H[5] = (H[5] + f) >>> 0;
            H[6] = (H[6] + g) >>> 0;
            H[7] = (H[7] + h) >>> 0;
        }
        var R = new Array(H.length);
        for (var h = 0; h < H.length; h++)
            R[h] = ('00000000' + H[h].toString(16)).slice(-8);
        return R.join('');
    };
    Sha256.utf8Encode = function (str) {
        try {
            return new TextEncoder().encode(str).reduce(function (prev, curr) { return prev + String.fromCharCode(curr); }, '');
        }
        catch (e) {
            return unescape(encodeURIComponent(str));
        }
    };
    Sha256.ROTR = function (n, x) {
        return (x >>> n) | (x << (32 - n));
    };
    Sha256.z0 = function (x) { return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x); };
    Sha256.z1 = function (x) { return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x); };
    Sha256.q0 = function (x) { return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ (x >>> 3); };
    Sha256.q1 = function (x) { return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ (x >>> 10); };
    Sha256.Ch = function (x, y, z) { return (x & y) ^ (~x & z); };
    Sha256.Maj = function (x, y, z) { return (x & y) ^ (x & z) ^ (y & z); };
    return Sha256;
}());
exports.Sha256 = Sha256;


/***/ })

},[409]);
pbjsChunk([314],{

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(412);


/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "criteoIdSubmodule", function() { return criteoIdSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_refererDetection_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_storageManager_js__ = __webpack_require__(7);
/**
 * This module adds Criteo Real Time User Sync to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/criteoIdSystem
 * @requires module:modules/userId
 */





var gvlid = 91;
var bidderCode = 'criteo';
var storage = Object(__WEBPACK_IMPORTED_MODULE_4__src_storageManager_js__["b" /* getStorageManager */])(gvlid, bidderCode);
var bididStorageKey = 'cto_bidid';
var bundleStorageKey = 'cto_bundle';
var cookiesMaxAge = 13 * 30 * 24 * 60 * 60 * 1000;
var pastDateString = new Date(0).toString();
var expirationString = new Date(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["timestamp"])() + cookiesMaxAge).toString();

function extractProtocolHost(url) {
  var returnOnlyHost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parsedUrl = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(url, {
    noDecodeWholeURL: true
  });
  return returnOnlyHost ? "".concat(parsedUrl.hostname) : "".concat(parsedUrl.protocol, "://").concat(parsedUrl.hostname).concat(parsedUrl.port ? ':' + parsedUrl.port : '', "/");
}

function getFromAllStorages(key) {
  return storage.getCookie(key) || storage.getDataFromLocalStorage(key);
}

function saveOnAllStorages(key, value, hostname) {
  if (key && value) {
    storage.setDataInLocalStorage(key, value);
    setCookieOnAllDomains(key, value, expirationString, hostname, true);
  }
}

function setCookieOnAllDomains(key, value, expiration, hostname, stopOnSuccess) {
  var subDomains = hostname.split('.');

  for (var i = 0; i < subDomains.length; ++i) {
    // Try to write the cookie on this subdomain (we want it to be stored only on the TLD+1)
    var domain = subDomains.slice(subDomains.length - i - 1, subDomains.length).join('.');

    try {
      storage.setCookie(key, value, expiration, null, '.' + domain);

      if (stopOnSuccess) {
        // Try to read the cookie to check if we wrote it
        var ck = storage.getCookie(key);

        if (ck && ck === value) {
          break;
        }
      }
    } catch (error) {}
  }
}

function deleteFromAllStorages(key, hostname) {
  setCookieOnAllDomains(key, '', pastDateString, hostname, true);
  storage.removeDataFromLocalStorage(key);
}

function getCriteoDataFromAllStorages() {
  return {
    bundle: getFromAllStorages(bundleStorageKey),
    bidId: getFromAllStorages(bididStorageKey)
  };
}

function buildCriteoUsersyncUrl(topUrl, domain, bundle, areCookiesWriteable, isLocalStorageWritable, isPublishertagPresent, gdprString) {
  var url = 'https://gum.criteo.com/sid/json?origin=prebid' + "".concat(topUrl ? '&topUrl=' + encodeURIComponent(topUrl) : '') + "".concat(domain ? '&domain=' + encodeURIComponent(domain) : '') + "".concat(bundle ? '&bundle=' + encodeURIComponent(bundle) : '') + "".concat(gdprString ? '&gdprString=' + encodeURIComponent(gdprString) : '') + "".concat(areCookiesWriteable ? '&cw=1' : '') + "".concat(isPublishertagPresent ? '&pbt=1' : '') + "".concat(isLocalStorageWritable ? '&lsw=1' : '');
  return url;
}

function callCriteoUserSync(parsedCriteoData, gdprString, callback) {
  var cw = storage.cookiesAreEnabled();
  var lsw = storage.localStorageIsEnabled();
  var topUrl = extractProtocolHost(Object(__WEBPACK_IMPORTED_MODULE_2__src_refererDetection_js__["a" /* getRefererInfo */])().referer);
  var domain = extractProtocolHost(document.location.href, true);
  var isPublishertagPresent = typeof criteo_pubtag !== 'undefined'; // eslint-disable-line camelcase

  var url = buildCriteoUsersyncUrl(topUrl, domain, parsedCriteoData.bundle, cw, lsw, isPublishertagPresent, gdprString);
  var callbacks = {
    success: function success(response) {
      var jsonResponse = JSON.parse(response);

      if (jsonResponse.acwsUrl) {
        var urlsToCall = typeof jsonResponse.acwsUrl === 'string' ? [jsonResponse.acwsUrl] : jsonResponse.acwsUrl;
        urlsToCall.forEach(function (url) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["triggerPixel"])(url);
        });
      } else if (jsonResponse.bundle) {
        saveOnAllStorages(bundleStorageKey, jsonResponse.bundle, domain);
      }

      if (jsonResponse.bidId) {
        saveOnAllStorages(bididStorageKey, jsonResponse.bidId, domain);
        var criteoId = {
          criteoId: jsonResponse.bidId
        };
        callback(criteoId);
      } else {
        deleteFromAllStorages(bididStorageKey, domain);
        callback();
      }
    },
    error: function error(_error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])("criteoIdSystem: unable to sync user id", _error);
      callback();
    }
  };
  Object(__WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */])(url, callbacks, undefined, {
    method: 'GET',
    contentType: 'application/json',
    withCredentials: true
  });
}
/** @type {Submodule} */


var criteoIdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: bidderCode,
  gvlid: gvlid,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @returns {{criteoId: string} | undefined}
   */
  decode: function decode(bidId) {
    return bidId;
  },

  /**
   * get the Criteo Id from local storages and initiate a new user sync
   * @function
   * @param {SubmoduleConfig} [config]
   * @param {ConsentData} [consentData]
   * @returns {{id: {criteoId: string} | undefined}}}
   */
  getId: function getId(config, consentData) {
    var hasGdprData = consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies;
    var gdprConsentString = hasGdprData ? consentData.consentString : undefined;
    var localData = getCriteoDataFromAllStorages();

    var result = function result(callback) {
      return callCriteoUserSync(localData, gdprConsentString, callback);
    };

    return {
      id: localData.bidId ? {
        criteoId: localData.bidId
      } : undefined,
      callback: result
    };
  }
};
Object(__WEBPACK_IMPORTED_MODULE_3__src_hook_js__["e" /* submodule */])('userId', criteoIdSubmodule);
window.pbjs.installedModules.push('criteoIdSystem');

/***/ })

},[411]);
pbjsChunk([55],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_AnalyticsAdapter_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_events_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_events_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var _CONSTANTS$EVENTS = __WEBPACK_IMPORTED_MODULE_1__src_constants_json___default.a.EVENTS,
    AUCTION_END = _CONSTANTS$EVENTS.AUCTION_END,
    TCF2_ENFORCEMENT = _CONSTANTS$EVENTS.TCF2_ENFORCEMENT,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    BID_VIEWABLE = _CONSTANTS$EVENTS.BID_VIEWABLE,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED;
var GVLID = 131;
var STANDARD_EVENTS_TO_TRACK = [AUCTION_END, TCF2_ENFORCEMENT, BID_WON]; // These events cause the buffered events to be sent over

var FLUSH_EVENTS = [TCF2_ENFORCEMENT, AUCTION_END, BID_WON, BID_VIEWABLE, AD_RENDER_FAILED];
var CONFIG_URL_PREFIX = 'https://api.id5-sync.com/analytics';
var TZ = new Date().getTimezoneOffset();
var PBJS_VERSION = pbjs.version;
var ID5_REDACTED = '__ID5_REDACTED__';
var isArray = Array.isArray;

var id5Analytics = _extends(Object(__WEBPACK_IMPORTED_MODULE_0__src_AnalyticsAdapter_js__["a" /* default */])({
  analyticsType: 'endpoint'
}), {
  // Keeps an array of events for each auction
  eventBuffer: {},
  eventsToTrack: STANDARD_EVENTS_TO_TRACK,
  track: function track(event) {
    var _this = id5Analytics;

    if (!event || !event.args) {
      return;
    }

    try {
      var auctionId = event.args.auctionId;
      _this.eventBuffer[auctionId] = _this.eventBuffer[auctionId] || []; // Collect events and send them in a batch when the auction ends

      var que = _this.eventBuffer[auctionId];
      que.push(_this.makeEvent(event.eventType, event.args));

      if (FLUSH_EVENTS.indexOf(event.eventType) >= 0) {
        // Auction ended. Send the batch of collected events
        _this.sendEvents(que); // From now on just send events to server side as they come


        que.push = function (pushedEvent) {
          return _this.sendEvents([pushedEvent]);
        };
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logError"])('id5Analytics: ERROR', error);

      _this.sendErrorEvent(error);
    }
  },
  sendEvents: function sendEvents(eventsToSend) {
    var _this = id5Analytics; // By giving some content this will be automatically a POST

    eventsToSend.forEach(function (event) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__src_ajax_js__["a" /* ajax */])(_this.options.ingestUrl, null, JSON.stringify(event));
    });
  },
  makeEvent: function makeEvent(event, payload) {
    var _this = id5Analytics;
    var filteredPayload = deepTransformingClone(payload, transformFnFromCleanupRules(event));
    return {
      source: 'pbjs',
      event: event,
      payload: filteredPayload,
      partnerId: _this.options.partnerId,
      meta: {
        sampling: _this.options.id5Sampling,
        pbjs: PBJS_VERSION,
        tz: TZ
      }
    };
  },
  sendErrorEvent: function sendErrorEvent(error) {
    var _this = id5Analytics;

    _this.sendEvents([_this.makeEvent('analyticsError', {
      message: error.message,
      stack: error.stack
    })]);
  },
  random: function random() {
    return Math.random();
  }
});

var ENABLE_FUNCTION = function ENABLE_FUNCTION(config) {
  var _this = id5Analytics;
  _this.options = config && config.options || {};
  var partnerId = _this.options.partnerId;

  if (typeof partnerId !== 'number') {
    Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logError"])('id5Analytics: partnerId in config.options must be a number representing the id5 partner ID');
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3__src_ajax_js__["a" /* ajax */])("".concat(CONFIG_URL_PREFIX, "/").concat(partnerId, "/pbjs"), function (result) {
    Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"])('id5Analytics: Received from configuration endpoint', result);
    var configFromServer = JSON.parse(result);
    var sampling = _this.options.id5Sampling = typeof configFromServer.sampling === 'number' ? configFromServer.sampling : 0;

    if (typeof configFromServer.ingestUrl !== 'string') {
      Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logError"])('id5Analytics: cannot find ingestUrl in config endpoint response; no analytics will be available');
      return;
    }

    _this.options.ingestUrl = configFromServer.ingestUrl; // 3-way fallback for which events to track: server > config > standard

    _this.eventsToTrack = configFromServer.eventsToTrack || _this.options.eventsToTrack || STANDARD_EVENTS_TO_TRACK;
    _this.eventsToTrack = isArray(_this.eventsToTrack) ? _this.eventsToTrack : STANDARD_EVENTS_TO_TRACK;
    Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"])('id5Analytics: Configuration is', _this.options);
    Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"])('id5Analytics: Tracking events', _this.eventsToTrack);

    if (sampling > 0 && _this.random() < 1 / sampling) {
      // Init the module only if we got lucky
      Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"])('id5Analytics: Selected by sampling. Starting up!'); // Clean start

      _this.eventBuffer = {}; // Replay all events until now

      if (!config.disablePastEventsProcessing) {
        __WEBPACK_IMPORTED_MODULE_5__src_events_js___default.a.getEvents().forEach(function (event) {
          if (event && _this.eventsToTrack.indexOf(event.eventType) >= 0) {
            _this.track(event);
          }
        });
      } // Merge in additional cleanup rules


      if (configFromServer.additionalCleanupRules) {
        var newRules = configFromServer.additionalCleanupRules;

        _this.eventsToTrack.forEach(function (key) {
          // Some protective checks in case we mess up server side
          if (isArray(newRules[key]) && newRules[key].every(function (eventRules) {
            return isArray(eventRules.match) && eventRules.apply in TRANSFORM_FUNCTIONS;
          })) {
            var _CLEANUP_RULES$key;

            Object(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"])('id5Analytics: merging additional cleanup rules for event ' + key);

            (_CLEANUP_RULES$key = CLEANUP_RULES[key]).push.apply(_CLEANUP_RULES$key, _toConsumableArray(newRules[key]));
          }
        });
      } // Register to the events of interest


      _this.handlers = {};

      _this.eventsToTrack.forEach(function (eventType) {
        var handler = _this.handlers[eventType] = function (args) {
          return _this.track({
            eventType: eventType,
            args: args
          });
        };

        __WEBPACK_IMPORTED_MODULE_5__src_events_js___default.a.on(eventType, handler);
      });
    }
  }); // Make only one init possible within a lifecycle

  _this.enableAnalytics = function () {};
};

id5Analytics.enableAnalytics = ENABLE_FUNCTION;

id5Analytics.disableAnalytics = function () {
  var _this = id5Analytics; // Un-register to the events of interest

  _this.eventsToTrack.forEach(function (eventType) {
    if (_this.handlers && _this.handlers[eventType]) {
      __WEBPACK_IMPORTED_MODULE_5__src_events_js___default.a.off(eventType, _this.handlers[eventType]);
    }
  }); // Make re-init possible. Work around the fact that past events cannot be forgotten


  _this.enableAnalytics = function (config) {
    config.disablePastEventsProcessing = true;
    ENABLE_FUNCTION(config);
  };
};

__WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["default"].registerAnalyticsAdapter({
  adapter: id5Analytics,
  code: 'id5Analytics',
  gvlid: GVLID
});
/* harmony default export */ __webpack_exports__["default"] = (id5Analytics);

function redact(obj, key) {
  obj[key] = ID5_REDACTED;
}

function erase(obj, key) {
  delete obj[key];
} // The transform function matches against a path and applies
// required transformation if match is found.


function deepTransformingClone(obj, transform) {
  var currentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var result = isArray(obj) ? [] : {};
  var recursable = _typeof(obj) === 'object' && obj !== null;

  if (recursable) {
    var keys = Object.keys(obj);

    if (keys.length > 0) {
      keys.forEach(function (key) {
        var newPath = currentPath.concat(key);
        result[key] = deepTransformingClone(obj[key], transform, newPath);
        transform(newPath, result, key);
      });
      return result;
    }
  }

  return obj;
} // Every set of rules is an object where "match" is an array and
// "apply" is the function to apply in case of match. The function to apply
// takes (obj, prop) and transforms property "prop" in object "obj".
// The "match" is an array of path parts. Each part is either a string or an array.
// In case of array, it represents alternatives which all would match.
// Special path part '*' matches any subproperty or array index.
// Prefixing a part with "!" makes it negative match (doesn't work with multiple alternatives)


var CLEANUP_RULES = {};
CLEANUP_RULES[AUCTION_END] = [{
  match: [['adUnits', 'bidderRequests'], '*', 'bids', '*', ['userId', 'crumbs'], '!id5id'],
  apply: 'redact'
}, {
  match: [['adUnits', 'bidderRequests'], '*', 'bids', '*', ['userId', 'crumbs'], 'id5id', 'uid'],
  apply: 'redact'
}, {
  match: [['adUnits', 'bidderRequests'], '*', 'bids', '*', 'userIdAsEids', '*', 'uids', '*', ['id', 'ext']],
  apply: 'redact'
}, {
  match: ['bidderRequests', '*', 'gdprConsent', 'vendorData'],
  apply: 'erase'
}, {
  match: ['bidsReceived', '*', ['ad', 'native']],
  apply: 'erase'
}, {
  match: ['noBids', '*', ['userId', 'crumbs'], '*'],
  apply: 'redact'
}, {
  match: ['noBids', '*', 'userIdAsEids', '*', 'uids', '*', ['id', 'ext']],
  apply: 'redact'
}];
CLEANUP_RULES[BID_WON] = [{
  match: [['ad', 'native']],
  apply: 'erase'
}];
var TRANSFORM_FUNCTIONS = {
  'redact': redact,
  'erase': erase
}; // Builds a rule function depending on the event type

function transformFnFromCleanupRules(eventType) {
  var rules = CLEANUP_RULES[eventType] || [];
  return function (path, obj, key) {
    for (var i = 0; i < rules.length; i++) {
      var match = true;
      var ruleMatcher = rules[i].match;
      var transformation = rules[i].apply;

      if (ruleMatcher.length !== path.length) {
        continue;
      }

      var _loop = function _loop(fragment) {
        var choices = makeSureArray(ruleMatcher[fragment]);
        match = !choices.every(function (choice) {
          return choice !== '*' && (choice.charAt(0) === '!' ? path[fragment] === choice.substring(1) : path[fragment] !== choice);
        });
      };

      for (var fragment = 0; fragment < ruleMatcher.length && match; fragment++) {
        _loop(fragment);
      }

      if (match) {
        var transformfn = TRANSFORM_FUNCTIONS[transformation];
        transformfn(obj, key);
        break;
      }
    }
  };
}

function makeSureArray(object) {
  return isArray(object) ? object : [object];
}

window.pbjs.installedModules.push('id5AnalyticsAdapter');

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AnalyticsAdapter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var events = __webpack_require__(10);

var _CONSTANTS$EVENTS = __WEBPACK_IMPORTED_MODULE_0__constants_json___default.a.EVENTS,
    AUCTION_INIT = _CONSTANTS$EVENTS.AUCTION_INIT,
    AUCTION_END = _CONSTANTS$EVENTS.AUCTION_END,
    REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
    BID_REQUESTED = _CONSTANTS$EVENTS.BID_REQUESTED,
    BID_TIMEOUT = _CONSTANTS$EVENTS.BID_TIMEOUT,
    BID_RESPONSE = _CONSTANTS$EVENTS.BID_RESPONSE,
    NO_BID = _CONSTANTS$EVENTS.NO_BID,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    BID_ADJUSTMENT = _CONSTANTS$EVENTS.BID_ADJUSTMENT,
    BIDDER_DONE = _CONSTANTS$EVENTS.BIDDER_DONE,
    SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED,
    AD_RENDER_SUCCEEDED = _CONSTANTS$EVENTS.AD_RENDER_SUCCEEDED,
    AUCTION_DEBUG = _CONSTANTS$EVENTS.AUCTION_DEBUG,
    ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS;
var ENDPOINT = 'endpoint';
var BUNDLE = 'bundle';
var _sampled = true;
function AnalyticsAdapter(_ref) {
  var url = _ref.url,
      analyticsType = _ref.analyticsType,
      global = _ref.global,
      handler = _ref.handler;
  var _queue = [];
  var _eventCount = 0;
  var _enableCheck = true;

  var _handlers;

  if (analyticsType === ENDPOINT || BUNDLE) {
    _emptyQueue();
  }

  return {
    track: _track,
    enqueue: _enqueue,
    enableAnalytics: _enable,
    disableAnalytics: _disable,
    getAdapterType: function getAdapterType() {
      return analyticsType;
    },
    getGlobal: function getGlobal() {
      return global;
    },
    getHandler: function getHandler() {
      return handler;
    },
    getUrl: function getUrl() {
      return url;
    }
  };

  function _track(_ref2) {
    var eventType = _ref2.eventType,
        args = _ref2.args;

    if (this.getAdapterType() === BUNDLE) {
      window[global](handler, eventType, args);
    }

    if (this.getAdapterType() === ENDPOINT) {
      _callEndpoint.apply(void 0, arguments);
    }
  }

  function _callEndpoint(_ref3) {
    var eventType = _ref3.eventType,
        args = _ref3.args,
        callback = _ref3.callback;
    Object(__WEBPACK_IMPORTED_MODULE_1__ajax_js__["a" /* ajax */])(url, callback, JSON.stringify({
      eventType: eventType,
      args: args
    }));
  }

  function _enqueue(_ref4) {
    var eventType = _ref4.eventType,
        args = _ref4.args;

    var _this = this;

    if (global && window[global] && eventType && args) {
      this.track({
        eventType: eventType,
        args: args
      });
    } else {
      _queue.push(function () {
        _eventCount++;

        _this.track({
          eventType: eventType,
          args: args
        });
      });
    }
  }

  function _enable(config) {
    var _this2 = this;

    var _this = this;

    if (_typeof(config) === 'object' && _typeof(config.options) === 'object') {
      _sampled = typeof config.options.sampling === 'undefined' || Math.random() < parseFloat(config.options.sampling);
    } else {
      _sampled = true;
    }

    if (_sampled) {
      var _handlers2;

      // first send all events fired before enableAnalytics called
      events.getEvents().forEach(function (event) {
        if (!event) {
          return;
        }

        var eventType = event.eventType,
            args = event.args;

        if (eventType !== BID_TIMEOUT) {
          _enqueue.call(_this, {
            eventType: eventType,
            args: args
          });
        }
      }); // Next register event listeners to send data immediately

      _handlers = (_handlers2 = {}, _defineProperty(_handlers2, REQUEST_BIDS, function (args) {
        return _this2.enqueue({
          eventType: REQUEST_BIDS,
          args: args
        });
      }), _defineProperty(_handlers2, BID_REQUESTED, function (args) {
        return _this2.enqueue({
          eventType: BID_REQUESTED,
          args: args
        });
      }), _defineProperty(_handlers2, BID_RESPONSE, function (args) {
        return _this2.enqueue({
          eventType: BID_RESPONSE,
          args: args
        });
      }), _defineProperty(_handlers2, NO_BID, function (args) {
        return _this2.enqueue({
          eventType: NO_BID,
          args: args
        });
      }), _defineProperty(_handlers2, BID_TIMEOUT, function (args) {
        return _this2.enqueue({
          eventType: BID_TIMEOUT,
          args: args
        });
      }), _defineProperty(_handlers2, BID_WON, function (args) {
        return _this2.enqueue({
          eventType: BID_WON,
          args: args
        });
      }), _defineProperty(_handlers2, BID_ADJUSTMENT, function (args) {
        return _this2.enqueue({
          eventType: BID_ADJUSTMENT,
          args: args
        });
      }), _defineProperty(_handlers2, BIDDER_DONE, function (args) {
        return _this2.enqueue({
          eventType: BIDDER_DONE,
          args: args
        });
      }), _defineProperty(_handlers2, SET_TARGETING, function (args) {
        return _this2.enqueue({
          eventType: SET_TARGETING,
          args: args
        });
      }), _defineProperty(_handlers2, AUCTION_END, function (args) {
        return _this2.enqueue({
          eventType: AUCTION_END,
          args: args
        });
      }), _defineProperty(_handlers2, AD_RENDER_FAILED, function (args) {
        return _this2.enqueue({
          eventType: AD_RENDER_FAILED,
          args: args
        });
      }), _defineProperty(_handlers2, AD_RENDER_SUCCEEDED, function (args) {
        return _this2.enqueue({
          eventType: AD_RENDER_SUCCEEDED,
          args: args
        });
      }), _defineProperty(_handlers2, AUCTION_DEBUG, function (args) {
        return _this2.enqueue({
          eventType: AUCTION_DEBUG,
          args: args
        });
      }), _defineProperty(_handlers2, ADD_AD_UNITS, function (args) {
        return _this2.enqueue({
          eventType: ADD_AD_UNITS,
          args: args
        });
      }), _defineProperty(_handlers2, AUCTION_INIT, function (args) {
        args.config = _typeof(config) === 'object' ? config.options || {} : {}; // enableAnaltyics configuration object

        _this2.enqueue({
          eventType: AUCTION_INIT,
          args: args
        });
      }), _handlers2);

      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["_each"])(_handlers, function (handler, event) {
        events.on(event, handler);
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logMessage"])("Analytics adapter for \"".concat(global, "\" disabled by sampling"));
    } // finally set this function to return log message, prevents multiple adapter listeners


    this._oldEnable = this.enableAnalytics;

    this.enableAnalytics = function _enable() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logMessage"])("Analytics adapter for \"".concat(global, "\" already enabled, unnecessary call to `enableAnalytics`."));
    };
  }

  function _disable() {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["_each"])(_handlers, function (handler, event) {
      events.off(event, handler);
    });

    this.enableAnalytics = this._oldEnable ? this._oldEnable : _enable;
  }

  function _emptyQueue() {
    if (_enableCheck) {
      for (var i = 0; i < _queue.length; i++) {
        _queue[i]();
      } // override push to execute the command immediately from now on


      _queue.push = function (fn) {
        fn();
      };

      _enableCheck = false;
    }

    Object(__WEBPACK_IMPORTED_MODULE_2__utils_js__["logMessage"])("event count sent to ".concat(global, ": ").concat(_eventCount));
  }
}

/***/ })

},[536]);
pbjsChunk([258],{

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID5_STORAGE_NAME", function() { return ID5_STORAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID5_PRIVACY_STORAGE_NAME", function() { return ID5_PRIVACY_STORAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id5IdSubmodule", function() { return id5IdSubmodule; });
/* harmony export (immutable) */ __webpack_exports__["expDaysStr"] = expDaysStr;
/* harmony export (immutable) */ __webpack_exports__["nbCacheName"] = nbCacheName;
/* harmony export (immutable) */ __webpack_exports__["storeNbInCache"] = storeNbInCache;
/* harmony export (immutable) */ __webpack_exports__["getNbFromCache"] = getNbFromCache;
/* harmony export (immutable) */ __webpack_exports__["getFromLocalStorage"] = getFromLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["storeInLocalStorage"] = storeInLocalStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_refererDetection_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_storageManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_adapterManager_js__ = __webpack_require__(9);
/**
 * This module adds ID5 to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/id5IdSystem
 * @requires module:modules/userId
 */






var MODULE_NAME = 'id5Id';
var GVLID = 131;
var NB_EXP_DAYS = 30;
var ID5_STORAGE_NAME = 'id5id';
var ID5_PRIVACY_STORAGE_NAME = "".concat(ID5_STORAGE_NAME, "_privacy");
var LOCAL_STORAGE = 'html5';
var LOG_PREFIX = 'User ID - ID5 submodule: '; // order the legacy cookie names in reverse priority order so the last
// cookie in the array is the most preferred to use

var LEGACY_COOKIE_NAMES = ['pbjs-id5id', 'id5id.1st', 'id5id'];
var storage = Object(__WEBPACK_IMPORTED_MODULE_4__src_storageManager_js__["b" /* getStorageManager */])(GVLID, MODULE_NAME);
/** @type {Submodule} */

var id5IdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'id5Id',

  /**
   * Vendor id of ID5
   * @type {Number}
   */
  gvlid: GVLID,

  /**
   * decode the stored id value for passing to bid requests
   * @function decode
   * @param {(Object|string)} value
   * @param {SubmoduleConfig|undefined} config
   * @returns {(Object|undefined)}
   */
  decode: function decode(value, config) {
    var universalUid;
    var linkType = 0;

    if (value && typeof value.universal_uid === 'string') {
      universalUid = value.universal_uid;
      linkType = value.link_type || linkType;
    } else {
      return undefined;
    }

    var responseObj = {
      id5id: {
        uid: universalUid,
        ext: {
          linkType: linkType
        }
      }
    };
    var abTestingResult = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(value, 'ab_testing.result');

    switch (abTestingResult) {
      case 'control':
        // A/B Testing is enabled and user is in the Control Group
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'A/B Testing - user is in the Control Group: ID5 ID is NOT exposed');
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(responseObj, 'id5id.ext.abTestingControlGroup', true);
        break;

      case 'error':
        // A/B Testing is enabled, but configured improperly, so skip A/B testing
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(LOG_PREFIX + 'A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1');
        break;

      case 'normal':
        // A/B Testing is enabled but user is not in the Control Group, so ID5 ID is shared
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'A/B Testing - user is NOT in the Control Group');
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(responseObj, 'id5id.ext.abTestingControlGroup', false);
        break;
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'Decoded ID', responseObj);
    return responseObj;
  },

  /**
   * performs action to obtain id and return a value in the callback's response argument
   * @function getId
   * @param {SubmoduleConfig} config
   * @param {ConsentData} consentData
   * @param {(Object|undefined)} cacheIdObj
   * @returns {IdResponse|undefined}
   */
  getId: function getId(config, consentData, cacheIdObj) {
    if (!hasRequiredConfig(config)) {
      return undefined;
    }

    var url = "https://id5-sync.com/g/v2/".concat(config.params.partner, ".json");
    var hasGdpr = consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies ? 1 : 0;
    var usp = __WEBPACK_IMPORTED_MODULE_5__src_adapterManager_js__["uspDataHandler"].getConsentData();
    var referer = Object(__WEBPACK_IMPORTED_MODULE_3__src_refererDetection_js__["a" /* getRefererInfo */])();
    var signature = cacheIdObj && cacheIdObj.signature ? cacheIdObj.signature : getLegacyCookieSignature();
    var data = {
      'partner': config.params.partner,
      'gdpr': hasGdpr,
      'nbPage': incrementNb(config.params.partner),
      'o': 'pbjs',
      'rf': referer.referer,
      'top': referer.reachedTop ? 1 : 0,
      'u': referer.stack[0] || window.location.href,
      'v': "6.13.0-pre"
    }; // pass in optional data, but only if populated

    if (hasGdpr && typeof consentData.consentString !== 'undefined' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(consentData.consentString) && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmptyStr"])(consentData.consentString)) {
      data.gdpr_consent = consentData.consentString;
    }

    if (typeof usp !== 'undefined' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"])(usp) && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmptyStr"])(usp)) {
      data.us_privacy = usp;
    }

    if (typeof signature !== 'undefined' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmptyStr"])(signature)) {
      data.s = signature;
    }

    if (typeof config.params.pd !== 'undefined' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmptyStr"])(config.params.pd)) {
      data.pd = config.params.pd;
    }

    if (typeof config.params.provider !== 'undefined' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmptyStr"])(config.params.provider)) {
      data.provider = config.params.provider;
    }

    var abTestingConfig = getAbTestingConfig(config);

    if (abTestingConfig.enabled === true) {
      data.ab_testing = {
        enabled: true,
        control_group_pct: abTestingConfig.controlGroupPct // The server validates

      };
    }

    var resp = function resp(callback) {
      var callbacks = {
        success: function success(response) {
          var responseObj;

          if (response) {
            try {
              responseObj = JSON.parse(response);
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'response received from the server', responseObj);
              resetNb(config.params.partner);

              if (responseObj.privacy) {
                storeInLocalStorage(ID5_PRIVACY_STORAGE_NAME, JSON.stringify(responseObj.privacy), NB_EXP_DAYS);
              } // TODO: remove after requiring publishers to use localstorage and
              // all publishers have upgraded


              if (config.storage.type === LOCAL_STORAGE) {
                removeLegacyCookies(config.params.partner);
              }
            } catch (error) {
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(LOG_PREFIX + error);
            }
          }

          callback(responseObj);
        },
        error: function error(_error) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(LOG_PREFIX + 'getId fetch encountered an error', _error);
          callback();
        }
      };
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'requesting an ID from the server', data);
      Object(__WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */])(url, callbacks, JSON.stringify(data), {
        method: 'POST',
        withCredentials: true
      });
    };

    return {
      callback: resp
    };
  },

  /**
   * Similar to Submodule#getId, this optional method returns response to for id that exists already.
   *  If IdResponse#id is defined, then it will be written to the current active storage even if it exists already.
   *  If IdResponse#callback is defined, then it'll called at the end of auction.
   *  It's permissible to return neither, one, or both fields.
   * @function extendId
   * @param {SubmoduleConfig} config
   * @param {ConsentData|undefined} consentData
   * @param {Object} cacheIdObj - existing id, if any
   * @return {(IdResponse|function(callback:function))} A response object that contains id and/or callback.
   */
  extendId: function extendId(config, consentData, cacheIdObj) {
    hasRequiredConfig(config);
    var partnerId = config && config.params && config.params.partner || 0;
    incrementNb(partnerId);
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'using cached ID', cacheIdObj);
    return cacheIdObj;
  }
};

function hasRequiredConfig(config) {
  if (!config || !config.params || !config.params.partner || typeof config.params.partner !== 'number') {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(LOG_PREFIX + 'partner required to be defined as a number');
    return false;
  }

  if (!config.storage || !config.storage.type || !config.storage.name) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(LOG_PREFIX + 'storage required to be set');
    return false;
  } // in a future release, we may return false if storage type or name are not set as required


  if (config.storage.type !== LOCAL_STORAGE) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_PREFIX + "storage type recommended to be '".concat(LOCAL_STORAGE, "'. In a future release this may become a strict requirement"));
  } // in a future release, we may return false if storage type or name are not set as required


  if (config.storage.name !== ID5_STORAGE_NAME) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_PREFIX + "storage name recommended to be '".concat(ID5_STORAGE_NAME, "'. In a future release this may become a strict requirement"));
  }

  return true;
}

function expDaysStr(expDays) {
  return new Date(Date.now() + 1000 * 60 * 60 * 24 * expDays).toUTCString();
}
function nbCacheName(partnerId) {
  return "".concat(ID5_STORAGE_NAME, "_").concat(partnerId, "_nb");
}
function storeNbInCache(partnerId, nb) {
  storeInLocalStorage(nbCacheName(partnerId), nb, NB_EXP_DAYS);
}
function getNbFromCache(partnerId) {
  var cacheNb = getFromLocalStorage(nbCacheName(partnerId));
  return cacheNb ? parseInt(cacheNb) : 0;
}

function incrementNb(partnerId) {
  var nb = getNbFromCache(partnerId) + 1;
  storeNbInCache(partnerId, nb);
  return nb;
}

function resetNb(partnerId) {
  storeNbInCache(partnerId, 0);
}

function getLegacyCookieSignature() {
  var legacyStoredValue;
  LEGACY_COOKIE_NAMES.forEach(function (cookie) {
    if (storage.getCookie(cookie)) {
      legacyStoredValue = JSON.parse(storage.getCookie(cookie)) || legacyStoredValue;
    }
  });
  return legacyStoredValue && legacyStoredValue.signature || '';
}
/**
 * Remove our legacy cookie values. Needed until we move all publishers
 * to html5 storage in a future release
 * @param {integer} partnerId
 */


function removeLegacyCookies(partnerId) {
  Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_PREFIX + 'removing legacy cookies');
  LEGACY_COOKIE_NAMES.forEach(function (cookie) {
    storage.setCookie("".concat(cookie), ' ', expDaysStr(-1));
    storage.setCookie("".concat(cookie, "_nb"), ' ', expDaysStr(-1));
    storage.setCookie("".concat(cookie, "_").concat(partnerId, "_nb"), ' ', expDaysStr(-1));
    storage.setCookie("".concat(cookie, "_last"), ' ', expDaysStr(-1));
  });
}
/**
 * This will make sure we check for expiration before accessing local storage
 * @param {string} key
 */


function getFromLocalStorage(key) {
  var storedValueExp = storage.getDataFromLocalStorage("".concat(key, "_exp")); // empty string means no expiration set

  if (storedValueExp === '') {
    return storage.getDataFromLocalStorage(key);
  } else if (storedValueExp) {
    if (new Date(storedValueExp).getTime() - Date.now() > 0) {
      return storage.getDataFromLocalStorage(key);
    }
  } // if we got here, then we have an expired item or we didn't set an
  // expiration initially somehow, so we need to remove the item from the
  // local storage


  storage.removeDataFromLocalStorage(key);
  return null;
}
/**
 * Ensure that we always set an expiration in local storage since
 * by default it's not required
 * @param {string} key
 * @param {any} value
 * @param {integer} expDays
 */

function storeInLocalStorage(key, value, expDays) {
  storage.setDataInLocalStorage("".concat(key, "_exp"), expDaysStr(expDays));
  storage.setDataInLocalStorage("".concat(key), value);
}
/**
 * gets the existing abTesting config or generates a default config with abTesting off
 *
 * @param {SubmoduleConfig|undefined} config
 * @returns {Object} an object which always contains at least the property "enabled"
 */

function getAbTestingConfig(config) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(config, 'params.abTesting', {
    enabled: false
  });
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_hook_js__["e" /* submodule */])('userId', id5IdSubmodule);
window.pbjs.installedModules.push('id5IdSystem');

/***/ })

},[538]);
pbjsChunk([257],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityLinkSubmodule", function() { return identityLinkSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(7);
/**
 * This module adds IdentityLink to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/identityLinkSubmodule
 * @requires module:modules/userId
 */




var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])();
/** @type {Submodule} */

var identityLinkSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'identityLink',

  /**
   * used to specify vendor id
   * @type {number}
   */
  gvlid: 97,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @returns {{idl_env:string}}
   */
  decode: function decode(value) {
    return {
      'idl_env': value
    };
  },

  /**
   * performs action to obtain id and return a value in the callback's response argument
   * @function
   * @param {ConsentData} [consentData]
   * @param {SubmoduleConfig} [config]
   * @returns {IdResponse|undefined}
   */
  getId: function getId(config, consentData) {
    var configParams = config && config.params || {};

    if (!configParams || typeof configParams.pid !== 'string') {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('identityLink: requires partner id to be defined');
      return;
    }

    var hasGdpr = consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies ? 1 : 0;
    var gdprConsentString = hasGdpr ? consentData.consentString : '';
    var tcfPolicyV2 = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](consentData, 'vendorData.tcfPolicyVersion') === 2; // use protocol relative urls for http or https

    if (hasGdpr && (!gdprConsentString || gdprConsentString === '')) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: Consent string is required to call envelope API.');
      return;
    }

    var url = "https://api.rlcdn.com/api/identity/envelope?pid=".concat(configParams.pid).concat(hasGdpr ? (tcfPolicyV2 ? '&ct=4&cv=' : '&ct=1&cv=') + gdprConsentString : '');
    var resp;

    resp = function resp(callback) {
      // Check ats during callback so it has a chance to initialise.
      // If ats library is available, use it to retrieve envelope. If not use standard third party endpoint
      if (window.ats) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: ATS exists!');
        window.ats.retrieveEnvelope(function (envelope) {
          if (envelope) {
            __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: An envelope can be retrieved from ATS!');
            setEnvelopeSource(true);
            callback(JSON.parse(envelope).envelope);
          } else {
            getEnvelope(url, callback, configParams);
          }
        });
      } else {
        getEnvelope(url, callback, configParams);
      }
    };

    return {
      callback: resp
    };
  }
}; // return envelope from third party endpoint

function getEnvelope(url, callback, configParams) {
  var callbacks = {
    success: function success(response) {
      var responseObj;

      if (response) {
        try {
          responseObj = JSON.parse(response);
        } catch (error) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"](error);
        }
      }

      callback(responseObj && responseObj.envelope ? responseObj.envelope : '');
    },
    error: function error(_error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]("identityLink: identityLink: ID fetch encountered an error", _error);
      callback();
    }
  };

  if (!configParams.notUse3P && !storage.getCookie('_lr_retry_request')) {
    setRetryCookie();
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('identityLink: A 3P retrieval is attempted!');
    setEnvelopeSource(false);
    Object(__WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */])(url, callbacks, undefined, {
      method: 'GET',
      withCredentials: true
    });
  }
}

function setRetryCookie() {
  var now = new Date();
  now.setTime(now.getTime() + 3600000);
  storage.setCookie('_lr_retry_request', 'true', now.toUTCString());
}

function setEnvelopeSource(src) {
  var now = new Date();
  now.setTime(now.getTime() + 2592000000);
  storage.setCookie('_lr_env_src_ats', src, now.toUTCString());
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_hook_js__["e" /* submodule */])('userId', identityLinkSubmodule);
window.pbjs.installedModules.push('identityLinkIdSystem');

/***/ })

},[543]);
pbjsChunk([247],{

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_PARTY_KEY", function() { return FIRST_PARTY_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (immutable) */ __webpack_exports__["readData"] = readData;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intentIqIdSubmodule", function() { return intentIqIdSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(7);
/**
 * This module adds IntentIqId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/intentIqIdSystem
 * @requires module:modules/userId
 */




var PCID_EXPIRY = 365;
var MODULE_NAME = 'intentIqId';
var FIRST_PARTY_KEY = '_iiq_fdata';
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])(undefined, MODULE_NAME);
var INVALID_ID = 'INVALID_ID';
/**
 * Generate standard UUID string
 * @return {string}
 */

function generateGUID() {
  var d = new Date().getTime();
  var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return guid;
}
/**
 * Read Intent IQ data from cookie or local storage
 * @param key
 * @return {string}
 */


function readData(key) {
  try {
    if (storage.hasLocalStorage()) {
      return storage.getDataFromLocalStorage(key);
    }

    if (storage.cookiesAreEnabled()) {
      return storage.getCookie(key);
    }
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(error);
  }
}
/**
 * Store Intent IQ data in either cookie or local storage
 * expiration date: 365 days
 * @param key
 * @param {string} value IntentIQ ID value to sintentIqIdSystem_spec.jstore
 */

function storeData(key, value) {
  try {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(MODULE_NAME + ': storing data: key=' + key + ' value=' + value);

    if (value) {
      if (storage.hasLocalStorage()) {
        storage.setDataInLocalStorage(key, value);
      }

      var expiresStr = new Date(Date.now() + PCID_EXPIRY * (60 * 60 * 24 * 1000)).toUTCString();

      if (storage.cookiesAreEnabled()) {
        storage.setCookie(key, value, expiresStr, 'LAX');
      }
    }
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(error);
  }
}
/**
 * Parse json if possible, else return null
 * @param data
 * @param {object|null}
 */


function tryParse(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(err);
    return null;
  }
}
/** @type {Submodule} */


var intentIqIdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: MODULE_NAME,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {{string}} value
   * @returns {{intentIqId: {string}}|undefined}
   */
  decode: function decode(value) {
    return value && value != '' && INVALID_ID != value ? {
      'intentIqId': value
    } : undefined;
  },

  /**
   * performs action to obtain id and return a value in the callback's response argument
   * @function
   * @param {SubmoduleConfig} [config]
   * @returns {IdResponse|undefined}
   */
  getId: function getId(config) {
    var configParams = config && config.params || {};

    if (!configParams || typeof configParams.partner !== 'number') {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])('User ID - intentIqId submodule requires a valid partner to be defined');
      return;
    } // Read Intent IQ 1st party id or generate it if none exists


    var firstPartyData = tryParse(readData(FIRST_PARTY_KEY));

    if (!firstPartyData || !firstPartyData.pcid) {
      var firstPartyId = generateGUID();
      firstPartyData = {
        'pcid': firstPartyId
      };
      storeData(FIRST_PARTY_KEY, JSON.stringify(firstPartyData));
    } // use protocol relative urls for http or https


    var url = "https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=39&mi=10&dpi=".concat(configParams.partner, "&pt=17&dpn=1");
    url += configParams.pcid ? '&pcid=' + encodeURIComponent(configParams.pcid) : '';
    url += configParams.pai ? '&pai=' + encodeURIComponent(configParams.pai) : '';
    url += firstPartyData.pcid ? '&iiqidtype=2&iiqpcid=' + encodeURIComponent(firstPartyData.pcid) : '';
    url += firstPartyData.pid ? '&pid=' + encodeURIComponent(firstPartyData.pid) : '';

    var resp = function resp(callback) {
      var callbacks = {
        success: function success(response) {
          var respJson = tryParse(response); // If response is a valid json and should save is true

          if (respJson && respJson.ls) {
            // Store pid field if found in response json
            if ('pid' in respJson) {
              firstPartyData.pid = respJson.pid;
              storeData(FIRST_PARTY_KEY, JSON.stringify(firstPartyData));
            } // If should save and data is empty, means we should save as INVALID_ID


            if (respJson.data == '') {
              respJson.data = INVALID_ID;
            }

            callback(respJson.data);
          } else {
            callback();
          }
        },
        error: function error(_error) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(MODULE_NAME + ': ID fetch encountered an error', _error);
          callback();
        }
      };
      Object(__WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */])(url, callbacks, undefined, {
        method: 'GET',
        withCredentials: true
      });
    };

    return {
      callback: resp
    };
  }
};
Object(__WEBPACK_IMPORTED_MODULE_2__src_hook_js__["e" /* submodule */])('userId', intentIqIdSubmodule);
window.pbjs.installedModules.push('intentIqIdSystem');

/***/ })

},[567]);
pbjsChunk([168],{

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(763);


/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["checkVideoPlacement"] = checkVideoPlacement;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Renderer_js__ = __webpack_require__(13);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var BIDDER_CODE = 'pubmatic';
var LOG_WARN_PREFIX = 'PubMatic: ';
var ENDPOINT = 'https://hbopenbid.pubmatic.com/translator?source=prebid-client';
var USER_SYNC_URL_IFRAME = 'https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=';
var USER_SYNC_URL_IMAGE = 'https://image8.pubmatic.com/AdServer/ImgSync?p=';
var DEFAULT_CURRENCY = 'USD';
var AUCTION_TYPE = 1;
var GROUPM_ALIAS = {
  code: 'groupm',
  gvlid: 98
};
var UNDEFINED = undefined;
var DEFAULT_WIDTH = 0;
var DEFAULT_HEIGHT = 0;
var PREBID_NATIVE_HELP_LINK = 'http://prebid.org/dev-docs/show-native-ads.html';
var PUBLICATION = 'pubmatic'; // Your publication on Blue Billywig, potentially with environment (e.g. publication.bbvms.com or publication.test.bbvms.com)

var RENDERER_URL = 'https://pubmatic.bbvms.com/r/'.concat('$RENDERER', '.js'); // URL of the renderer application

var MSG_VIDEO_PLACEMENT_MISSING = 'Video.Placement param missing';
var CUSTOM_PARAMS = {
  'kadpageurl': '',
  // Custom page url
  'gender': '',
  // User gender
  'yob': '',
  // User year of birth
  'lat': '',
  // User location - Latitude
  'lon': '',
  // User Location - Longitude
  'wiid': '',
  // OpenWrap Wrapper Impression ID
  'profId': '',
  // OpenWrap Legacy: Profile ID
  'verId': '' // OpenWrap Legacy: version ID

};
var DATA_TYPES = {
  'NUMBER': 'number',
  'STRING': 'string',
  'BOOLEAN': 'boolean',
  'ARRAY': 'array',
  'OBJECT': 'object'
};
var VIDEO_CUSTOM_PARAMS = {
  'mimes': DATA_TYPES.ARRAY,
  'minduration': DATA_TYPES.NUMBER,
  'maxduration': DATA_TYPES.NUMBER,
  'startdelay': DATA_TYPES.NUMBER,
  'playbackmethod': DATA_TYPES.ARRAY,
  'api': DATA_TYPES.ARRAY,
  'protocols': DATA_TYPES.ARRAY,
  'w': DATA_TYPES.NUMBER,
  'h': DATA_TYPES.NUMBER,
  'battr': DATA_TYPES.ARRAY,
  'linearity': DATA_TYPES.NUMBER,
  'placement': DATA_TYPES.NUMBER,
  'minbitrate': DATA_TYPES.NUMBER,
  'maxbitrate': DATA_TYPES.NUMBER,
  'skip': DATA_TYPES.NUMBER
};
var NATIVE_ASSETS = {
  'TITLE': {
    ID: 1,
    KEY: 'title',
    TYPE: 0
  },
  'IMAGE': {
    ID: 2,
    KEY: 'image',
    TYPE: 0
  },
  'ICON': {
    ID: 3,
    KEY: 'icon',
    TYPE: 0
  },
  'SPONSOREDBY': {
    ID: 4,
    KEY: 'sponsoredBy',
    TYPE: 1
  },
  // please note that type of SPONSORED is also 1
  'BODY': {
    ID: 5,
    KEY: 'body',
    TYPE: 2
  },
  // please note that type of DESC is also set to 2
  'CLICKURL': {
    ID: 6,
    KEY: 'clickUrl',
    TYPE: 0
  },
  'VIDEO': {
    ID: 7,
    KEY: 'video',
    TYPE: 0
  },
  'EXT': {
    ID: 8,
    KEY: 'ext',
    TYPE: 0
  },
  'DATA': {
    ID: 9,
    KEY: 'data',
    TYPE: 0
  },
  'LOGO': {
    ID: 10,
    KEY: 'logo',
    TYPE: 0
  },
  'SPONSORED': {
    ID: 11,
    KEY: 'sponsored',
    TYPE: 1
  },
  // please note that type of SPONSOREDBY is also set to 1
  'DESC': {
    ID: 12,
    KEY: 'data',
    TYPE: 2
  },
  // please note that type of BODY is also set to 2
  'RATING': {
    ID: 13,
    KEY: 'rating',
    TYPE: 3
  },
  'LIKES': {
    ID: 14,
    KEY: 'likes',
    TYPE: 4
  },
  'DOWNLOADS': {
    ID: 15,
    KEY: 'downloads',
    TYPE: 5
  },
  'PRICE': {
    ID: 16,
    KEY: 'price',
    TYPE: 6
  },
  'SALEPRICE': {
    ID: 17,
    KEY: 'saleprice',
    TYPE: 7
  },
  'PHONE': {
    ID: 18,
    KEY: 'phone',
    TYPE: 8
  },
  'ADDRESS': {
    ID: 19,
    KEY: 'address',
    TYPE: 9
  },
  'DESC2': {
    ID: 20,
    KEY: 'desc2',
    TYPE: 10
  },
  'DISPLAYURL': {
    ID: 21,
    KEY: 'displayurl',
    TYPE: 11
  },
  'CTA': {
    ID: 22,
    KEY: 'cta',
    TYPE: 12
  }
};
var NATIVE_ASSET_IMAGE_TYPE = {
  'ICON': 1,
  'LOGO': 2,
  'IMAGE': 3
}; // check if title, image can be added with mandatory field default values

var NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS = [{
  id: NATIVE_ASSETS.SPONSOREDBY.ID,
  required: true,
  data: {
    type: 1
  }
}, {
  id: NATIVE_ASSETS.TITLE.ID,
  required: true
}, {
  id: NATIVE_ASSETS.IMAGE.ID,
  required: true
}];
var NET_REVENUE = true;
var dealChannelValues = {
  1: 'PMP',
  5: 'PREF',
  6: 'PMPG'
};
var FLOC_FORMAT = {
  'EID': 1,
  'SEGMENT': 2
}; // BB stands for Blue BillyWig

var BB_RENDERER = {
  bootstrapPlayer: function bootstrapPlayer(bid) {
    var config = {
      code: bid.adUnitCode
    };
    if (bid.vastXml) config.vastXml = bid.vastXml;else if (bid.vastUrl) config.vastUrl = bid.vastUrl;

    if (!bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("".concat(LOG_WARN_PREFIX, ": No vastXml or vastUrl on bid, bailing..."));
      return;
    }

    var rendererId = BB_RENDERER.getRendererId(PUBLICATION, bid.rendererCode);
    var ele = document.getElementById(bid.adUnitCode); // NB convention

    var renderer;

    for (var rendererIndex = 0; rendererIndex < window.bluebillywig.renderers.length; rendererIndex++) {
      if (window.bluebillywig.renderers[rendererIndex]._id === rendererId) {
        renderer = window.bluebillywig.renderers[rendererIndex];
        break;
      }
    }

    if (renderer) renderer.bootstrap(config, ele);else Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("".concat(LOG_WARN_PREFIX, ": Couldn't find a renderer with ").concat(rendererId));
  },
  newRenderer: function newRenderer(rendererCode, adUnitCode) {
    var rendererUrl = RENDERER_URL.replace('$RENDERER', rendererCode);
    var renderer = __WEBPACK_IMPORTED_MODULE_4__src_Renderer_js__["a" /* Renderer */].install({
      url: rendererUrl,
      loaded: false,
      adUnitCode: adUnitCode
    });

    try {
      renderer.setRender(BB_RENDERER.outstreamRender);
    } catch (err) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("".concat(LOG_WARN_PREFIX, ": Error tying to setRender on renderer"), err);
    }

    return renderer;
  },
  outstreamRender: function outstreamRender(bid) {
    bid.renderer.push(function () {
      BB_RENDERER.bootstrapPlayer(bid);
    });
  },
  getRendererId: function getRendererId(pub, renderer) {
    return "".concat(pub, "-").concat(renderer); // NB convention!
  }
};
var MEDIATYPE = [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]];
var publisherId = 0;
var isInvalidNativeRequest = false;
var NATIVE_ASSET_ID_TO_KEY_MAP = {};
var NATIVE_ASSET_KEY_TO_ASSET_MAP = {}; // loading NATIVE_ASSET_ID_TO_KEY_MAP

Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(NATIVE_ASSETS, function (anAsset) {
  NATIVE_ASSET_ID_TO_KEY_MAP[anAsset.ID] = anAsset.KEY;
}); // loading NATIVE_ASSET_KEY_TO_ASSET_MAP


Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"])(NATIVE_ASSETS, function (anAsset) {
  NATIVE_ASSET_KEY_TO_ASSET_MAP[anAsset.KEY] = anAsset;
});

function _getDomainFromURL(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _parseSlotParam(paramName, paramValue) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(paramValue)) {
    paramValue && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Ignoring param key: ' + paramName + ', expects string-value, found ' + _typeof(paramValue));
    return UNDEFINED;
  }

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map(function (id) {
        return id.trim();
      }).join();

    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;

    case 'yob':
      return parseInt(paramValue) || UNDEFINED;

    default:
      return paramValue;
  }
}

function _cleanSlot(slotName) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(slotName)) {
    return slotName.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }

  if (slotName) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(BIDDER_CODE + ': adSlot must be a string. Ignoring adSlot');
  }

  return '';
}

function _parseAdSlot(bid) {
  bid.params.adUnit = '';
  bid.params.adUnitIndex = '0';
  bid.params.width = 0;
  bid.params.height = 0;
  bid.params.adSlot = _cleanSlot(bid.params.adSlot);
  var slot = bid.params.adSlot;
  var splits = slot.split(':');
  slot = splits[0];

  if (splits.length == 2) {
    bid.params.adUnitIndex = splits[1];
  } // check if size is mentioned in sizes array. in that case do not check for @ in adslot


  splits = slot.split('@');
  bid.params.adUnit = splits[0];

  if (splits.length > 1) {
    // i.e size is specified in adslot, so consider that and ignore sizes array
    splits = splits[1].split('x');

    if (splits.length != 2) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'AdSlot Error: adSlot not in required format');
      return;
    }

    bid.params.width = parseInt(splits[0], 10);
    bid.params.height = parseInt(splits[1], 10);
  } else if (bid.hasOwnProperty('mediaTypes') && bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]) && bid.mediaTypes.banner.hasOwnProperty('sizes')) {
    var i = 0;
    var sizeArray = [];

    for (; i < bid.mediaTypes.banner.sizes.length; i++) {
      if (bid.mediaTypes.banner.sizes[i].length === 2) {
        // sizes[i].length will not be 2 in case where size is set as fluid, we want to skip that entry
        sizeArray.push(bid.mediaTypes.banner.sizes[i]);
      }
    }

    bid.mediaTypes.banner.sizes = sizeArray;

    if (bid.mediaTypes.banner.sizes.length >= 1) {
      // set the first size in sizes array in bid.params.width and bid.params.height. These will be sent as primary size.
      // The rest of the sizes will be sent in format array.
      bid.params.width = bid.mediaTypes.banner.sizes[0][0];
      bid.params.height = bid.mediaTypes.banner.sizes[0][1];
      bid.mediaTypes.banner.sizes = bid.mediaTypes.banner.sizes.splice(1, bid.mediaTypes.banner.sizes.length - 1);
    }
  }
}

function _initConf(refererInfo) {
  return {
    pageURL: refererInfo && refererInfo.referer ? refererInfo.referer : window.location.href,
    refURL: window.document.referrer
  };
}

function _handleCustomParams(params, conf) {
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;

  for (key in CUSTOM_PARAMS) {
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key];

      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (_typeof(entry) === 'object') {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(value)) {
          conf[key] = value;
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Ignoring param : ' + key + ' with value : ' + CUSTOM_PARAMS[key] + ', expects string-value, found ' + _typeof(value));
        }
      }
    }
  }

  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [DEFAULT_CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
}

function _checkParamDataType(key, value, datatype) {
  var errMsg = 'Ignoring param key: ' + key + ', expects ' + datatype + ', found ' + _typeof(value);

  var functionToExecute;

  switch (datatype) {
    case DATA_TYPES.BOOLEAN:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isBoolean"];
      break;

    case DATA_TYPES.NUMBER:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"];
      break;

    case DATA_TYPES.STRING:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"];
      break;

    case DATA_TYPES.ARRAY:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"];
      break;
  }

  if (functionToExecute(value)) {
    return value;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + errMsg);
  return UNDEFINED;
}

function _commonNativeRequestObject(nativeAsset, params) {
  var key = nativeAsset.KEY;
  return {
    id: nativeAsset.ID,
    required: params[key].required ? 1 : 0,
    data: {
      type: nativeAsset.TYPE,
      len: params[key].len,
      ext: params[key].ext
    }
  };
}

function _createNativeRequest(params) {
  var nativeRequestObject = {
    assets: []
  };

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var assetObj = {};

      if (!(nativeRequestObject.assets && nativeRequestObject.assets.length > 0 && nativeRequestObject.assets.hasOwnProperty(key))) {
        switch (key) {
          case NATIVE_ASSETS.TITLE.KEY:
            if (params[key].len || params[key].length) {
              assetObj = {
                id: NATIVE_ASSETS.TITLE.ID,
                required: params[key].required ? 1 : 0,
                title: {
                  len: params[key].len || params[key].length,
                  ext: params[key].ext
                }
              };
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Title Length is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSETS.IMAGE.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.IMAGE.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.IMAGE,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED),
                  wmin: params[key].wmin || params[key].minimumWidth || (params[key].minsizes ? params[key].minsizes[0] : UNDEFINED),
                  hmin: params[key].hmin || params[key].minimumHeight || (params[key].minsizes ? params[key].minsizes[1] : UNDEFINED),
                  mimes: params[key].mimes,
                  ext: params[key].ext
                }
              };
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Image sizes is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSETS.ICON.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.ICON.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.ICON,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED)
                }
              };
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(params));
            }

            ;
            break;

          case NATIVE_ASSETS.VIDEO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.VIDEO.ID,
              required: params[key].required ? 1 : 0,
              video: {
                minduration: params[key].minduration,
                maxduration: params[key].maxduration,
                protocols: params[key].protocols,
                mimes: params[key].mimes,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSETS.EXT.KEY:
            assetObj = {
              id: NATIVE_ASSETS.EXT.ID,
              required: params[key].required ? 1 : 0
            };
            break;

          case NATIVE_ASSETS.LOGO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.LOGO.ID,
              required: params[key].required ? 1 : 0,
              img: {
                type: NATIVE_ASSET_IMAGE_TYPE.LOGO,
                w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED)
              }
            };
            break;

          case NATIVE_ASSETS.SPONSOREDBY.KEY:
          case NATIVE_ASSETS.BODY.KEY:
          case NATIVE_ASSETS.RATING.KEY:
          case NATIVE_ASSETS.LIKES.KEY:
          case NATIVE_ASSETS.DOWNLOADS.KEY:
          case NATIVE_ASSETS.PRICE.KEY:
          case NATIVE_ASSETS.SALEPRICE.KEY:
          case NATIVE_ASSETS.PHONE.KEY:
          case NATIVE_ASSETS.ADDRESS.KEY:
          case NATIVE_ASSETS.DESC2.KEY:
          case NATIVE_ASSETS.DISPLAYURL.KEY:
          case NATIVE_ASSETS.CTA.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSET_KEY_TO_ASSET_MAP[key], params);
            break;
        }
      }
    }

    if (assetObj && assetObj.id) {
      nativeRequestObject.assets[nativeRequestObject.assets.length] = assetObj;
    }
  }

  ; // for native image adtype prebid has to have few required assests i.e. title,sponsoredBy, image
  // if any of these are missing from the request then request will not be sent

  var requiredAssetCount = NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.length;
  var presentrequiredAssetCount = 0;
  NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.forEach(function (ele) {
    var lengthOfExistingAssets = nativeRequestObject.assets.length;

    for (var i = 0; i < lengthOfExistingAssets; i++) {
      if (ele.id == nativeRequestObject.assets[i].id) {
        presentrequiredAssetCount++;
        break;
      }
    }
  });

  if (requiredAssetCount == presentrequiredAssetCount) {
    isInvalidNativeRequest = false;
  } else {
    isInvalidNativeRequest = true;
  }

  return nativeRequestObject;
}

function _createBannerRequest(bid) {
  var sizes = bid.mediaTypes.banner.sizes;
  var format = [];
  var bannerObj;

  if (sizes !== UNDEFINED && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(sizes)) {
    bannerObj = {};

    if (!bid.params.width && !bid.params.height) {
      if (sizes.length === 0) {
        // i.e. since bid.params does not have width or height, and length of sizes is 0, need to ignore this banner imp
        bannerObj = UNDEFINED;
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: mediaTypes.banner.size missing for adunit: ' + bid.params.adUnit + '. Ignoring the banner impression in the adunit.');
        return bannerObj;
      } else {
        bannerObj.w = parseInt(sizes[0][0], 10);
        bannerObj.h = parseInt(sizes[0][1], 10);
        sizes = sizes.splice(1, sizes.length - 1);
      }
    } else {
      bannerObj.w = bid.params.width;
      bannerObj.h = bid.params.height;
    }

    if (sizes.length > 0) {
      format = [];
      sizes.forEach(function (size) {
        if (size.length > 1) {
          format.push({
            w: size[0],
            h: size[1]
          });
        }
      });

      if (format.length > 0) {
        bannerObj.format = format;
      }
    }

    bannerObj.pos = 0;
    bannerObj.topframe = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"])() ? 0 : 1;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: mediaTypes.banner.size missing for adunit: ' + bid.params.adUnit + '. Ignoring the banner impression in the adunit.');
    bannerObj = UNDEFINED;
  }

  return bannerObj;
}

function checkVideoPlacement(videoData, adUnitCode) {
  // Check for video.placement property. If property is missing display log message.
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(videoData, 'placement')) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(MSG_VIDEO_PLACEMENT_MISSING + ' for ' + adUnitCode);
  }

  ;
}

function _createVideoRequest(bid) {
  var videoData = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid.mediaTypes, 'video'), bid.params.video);
  var videoObj;

  if (videoData !== UNDEFINED) {
    videoObj = {};
    checkVideoPlacement(videoData, bid.adUnitCode);

    for (var key in VIDEO_CUSTOM_PARAMS) {
      if (videoData.hasOwnProperty(key)) {
        videoObj[key] = _checkParamDataType(key, videoData[key], VIDEO_CUSTOM_PARAMS[key]);
      }
    } // read playersize and assign to h and w.


    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = parseInt(bid.mediaTypes.video.playerSize[0][0], 10);
      videoObj.h = parseInt(bid.mediaTypes.video.playerSize[0][1], 10);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"])(bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = parseInt(bid.mediaTypes.video.playerSize[0], 10);
      videoObj.h = parseInt(bid.mediaTypes.video.playerSize[1], 10);
    }
  } else {
    videoObj = UNDEFINED;
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Video config params missing for adunit: ' + bid.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
  }

  return videoObj;
} // support for PMP deals


function _addPMPDealsInImpression(impObj, bid) {
  if (bid.params.deals) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.deals)) {
      bid.params.deals.forEach(function (dealId) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(dealId) && dealId.length > 3) {
          if (!impObj.pmp) {
            impObj.pmp = {
              private_auction: 0,
              deals: []
            };
          }

          impObj.pmp.deals.push({
            id: dealId
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: ' + dealId);
        }
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: bid.params.deals should be an array of strings.');
    }
  }
}

function _addDealCustomTargetings(imp, bid) {
  var dctr = '';
  var dctrLen;

  if (bid.params.dctr) {
    dctr = bid.params.dctr;

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(dctr) && dctr.length > 0) {
      var arr = dctr.split('|');
      dctr = '';
      arr.forEach(function (val) {
        dctr += val.length > 0 ? val.trim() + '|' : '';
      });
      dctrLen = dctr.length;

      if (dctr.substring(dctrLen, dctrLen - 1) === '|') {
        dctr = dctr.substring(0, dctrLen - 1);
      }

      imp.ext['key_val'] = dctr.trim();
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Ignoring param : dctr with value : ' + dctr + ', expects string-value, found empty or non-string value');
    }
  }
}

function _addJWPlayerSegmentData(imp, bid, isS2S) {
  var jwSegData = bid.rtd && bid.rtd.jwplayer && bid.rtd.jwplayer.targeting || undefined;
  var jwPlayerData = '';
  var jwMark = 'jw-';
  if (jwSegData === undefined || jwSegData === '' || !jwSegData.hasOwnProperty('segments')) return;
  var maxLength = jwSegData.segments.length;
  jwPlayerData += jwMark + 'id=' + jwSegData.content.id; // add the content id first

  for (var i = 0; i < maxLength; i++) {
    jwPlayerData += '|' + jwMark + jwSegData.segments[i] + '=1';
  }

  var ext;

  if (isS2S) {
    imp.dctr === undefined || imp.dctr.length == 0 ? imp.dctr = jwPlayerData : imp.dctr += '|' + jwPlayerData;
  } else {
    ext = imp.ext;
    ext && ext.key_val === undefined ? ext.key_val = jwPlayerData : ext.key_val += '|' + jwPlayerData;
  }
}

function _createImpressionObject(bid, conf) {
  var impObj = {};
  var bannerObj;
  var videoObj;
  var nativeObj = {};
  var sizes = bid.hasOwnProperty('sizes') ? bid.sizes : [];
  var mediaTypes = '';
  var format = [];
  impObj = {
    id: bid.bidId,
    tagid: bid.params.adUnit || undefined,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: 1,
    ext: {
      pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
    },
    bidfloorcur: bid.params.currency ? _parseSlotParam('currency', bid.params.currency) : DEFAULT_CURRENCY
  };

  _addPMPDealsInImpression(impObj, bid);

  _addDealCustomTargetings(impObj, bid);

  _addJWPlayerSegmentData(impObj, bid);

  if (bid.hasOwnProperty('mediaTypes')) {
    for (mediaTypes in bid.mediaTypes) {
      switch (mediaTypes) {
        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]:
          bannerObj = _createBannerRequest(bid);

          if (bannerObj !== UNDEFINED) {
            impObj.banner = bannerObj;
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]:
          nativeObj['request'] = JSON.stringify(_createNativeRequest(bid.nativeParams));

          if (!isInvalidNativeRequest) {
            impObj.native = nativeObj;
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Error in Native adunit ' + bid.params.adUnit + '. Ignoring the adunit. Refer to ' + PREBID_NATIVE_HELP_LINK + ' for more details.');
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]:
          videoObj = _createVideoRequest(bid);

          if (videoObj !== UNDEFINED) {
            impObj.video = videoObj;
          }

          break;
      }
    }
  } else {
    // mediaTypes is not present, so this is a banner only impression
    // this part of code is required for older testcases with no 'mediaTypes' to run succesfully.
    bannerObj = {
      pos: 0,
      w: bid.params.width,
      h: bid.params.height,
      topframe: Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"])() ? 0 : 1
    };

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(sizes) && sizes.length > 1) {
      sizes = sizes.splice(1, sizes.length - 1);
      sizes.forEach(function (size) {
        format.push({
          w: size[0],
          h: size[1]
        });
      });
      bannerObj.format = format;
    }

    impObj.banner = bannerObj;
  }

  _addImpressionFPD(impObj, bid);

  _addFloorFromFloorModule(impObj, bid);

  return impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]) || impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]) || impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]) ? impObj : UNDEFINED;
}

function _addImpressionFPD(imp, bid) {
  var ortb2 = _objectSpread({}, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'ortb2Imp.ext.data'));

  Object.keys(ortb2).forEach(function (prop) {
    /**
      * Prebid AdSlot
      * @type {(string|undefined)}
    */
    if (prop === 'pbadslot') {
      if (typeof ortb2[prop] === 'string' && ortb2[prop]) Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(imp, 'ext.data.pbadslot', ortb2[prop]);
    } else if (prop === 'adserver') {
      /**
       * Copy GAM AdUnit and Name to imp
       */
      ['name', 'adslot'].forEach(function (name) {
        /** @type {(string|undefined)} */
        var value = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(ortb2, "adserver.".concat(name));

        if (typeof value === 'string' && value) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(imp, "ext.data.adserver.".concat(name.toLowerCase()), value); // copy GAM ad unit id as imp[].ext.dfp_ad_unit_code

          if (name === 'adslot') {
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(imp, "ext.dfp_ad_unit_code", value);
          }
        }
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(imp, "ext.data.".concat(prop), ortb2[prop]);
    }
  });
}

function _addFloorFromFloorModule(impObj, bid) {
  var bidFloor = -1; // get lowest floor from floorModule

  if (typeof bid.getFloor === 'function' && !__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('pubmatic.disableFloors')) {
    [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]].forEach(function (mediaType) {
      if (impObj.hasOwnProperty(mediaType)) {
        var sizesArray = [];

        if (mediaType === 'banner') {
          if (impObj[mediaType].w && impObj[mediaType].h) {
            sizesArray.push([impObj[mediaType].w, impObj[mediaType].h]);
          }

          if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(impObj[mediaType].format)) {
            impObj[mediaType].format.forEach(function (size) {
              return sizesArray.push([size.w, size.h]);
            });
          }
        }

        if (sizesArray.length === 0) {
          sizesArray.push('*');
        }

        sizesArray.forEach(function (size) {
          var floorInfo = bid.getFloor({
            currency: impObj.bidfloorcur,
            mediaType: mediaType,
            size: size
          });
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX, 'floor from floor module returned for mediatype:', mediaType, ' and size:', size, ' is: currency', floorInfo.currency, 'floor', floorInfo.floor);

          if (_typeof(floorInfo) === 'object' && floorInfo.currency === impObj.bidfloorcur && !isNaN(parseInt(floorInfo.floor))) {
            var mediaTypeFloor = parseFloat(floorInfo.floor);
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX, 'floor from floor module:', mediaTypeFloor, 'previous floor value', bidFloor, 'Min:', Math.min(mediaTypeFloor, bidFloor));

            if (bidFloor === -1) {
              bidFloor = mediaTypeFloor;
            } else {
              bidFloor = Math.min(mediaTypeFloor, bidFloor);
            }

            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX, 'new floor value:', bidFloor);
          }
        });
      }
    });
  } // get highest from impObj.bidfllor and floor from floor module
  // as we are using Math.max, it is ok if we have not got any floor from floorModule, then value of bidFloor will be -1


  if (impObj.bidfloor) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX, 'floor from floor module:', bidFloor, 'impObj.bidfloor', impObj.bidfloor, 'Max:', Math.max(bidFloor, impObj.bidfloor));
    bidFloor = Math.max(bidFloor, impObj.bidfloor);
  } // assign value only if bidFloor is > 0


  impObj.bidfloor = !isNaN(bidFloor) && bidFloor > 0 ? bidFloor : UNDEFINED;
  Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX, 'new impObj.bidfloor value:', impObj.bidfloor);
}

function _getFlocId(validBidRequests, flocFormat) {
  var flocIdObject = null;
  var flocId = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(validBidRequests, '0.userId.flocId');

  if (flocId && flocId.id) {
    switch (flocFormat) {
      case FLOC_FORMAT.SEGMENT:
        flocIdObject = {
          id: 'FLOC',
          name: 'FLOC',
          ext: {
            ver: flocId.version
          },
          segment: [{
            id: flocId.id,
            name: 'chrome.com',
            value: flocId.id.toString()
          }]
        };
        break;

      case FLOC_FORMAT.EID:
      default:
        flocIdObject = {
          source: 'chrome.com',
          uids: [{
            atype: 1,
            id: flocId.id,
            ext: {
              ver: flocId.version
            }
          }]
        };
        break;
    }
  }

  return flocIdObject;
}

function _handleFlocId(payload, validBidRequests) {
  var flocObject = _getFlocId(validBidRequests, FLOC_FORMAT.SEGMENT);

  if (flocObject) {
    if (!payload.user) {
      payload.user = {};
    }

    if (!payload.user.data) {
      payload.user.data = [];
    }

    payload.user.data.push(flocObject);
  }
}

function _handleEids(payload, validBidRequests) {
  var bidUserIdAsEids = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(validBidRequests, '0.userIdAsEids');

  var flocObject = _getFlocId(validBidRequests, FLOC_FORMAT.EID);

  if (flocObject) {
    if (!bidUserIdAsEids) {
      bidUserIdAsEids = [];
    }

    bidUserIdAsEids.push(flocObject);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bidUserIdAsEids) && bidUserIdAsEids.length > 0) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'user.eids', bidUserIdAsEids);
  }
}

function _checkMediaType(bid, newBid) {
  // Create a regex here to check the strings
  if (bid.ext && bid.ext['bidtype'] != undefined) {
    newBid.mediaType = MEDIATYPE[bid.ext.bidtype];
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(LOG_WARN_PREFIX + 'bid.ext.bidtype does not exist, checking alternatively for mediaType');
    var adm = bid.adm;
    var admStr = '';
    var videoRegex = new RegExp(/VAST\s+version/);

    if (adm.indexOf('span class="PubAPIAd"') >= 0) {
      newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */];
    } else if (videoRegex.test(adm)) {
      newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */];
    } else {
      try {
        admStr = JSON.parse(adm.replace(/\\/g, ''));

        if (admStr && admStr.native) {
          newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */];
        }
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Cannot parse native reponse for ad response: ' + adm);
      }
    }
  }
}

function _parseNativeResponse(bid, newBid) {
  newBid.native = {};

  if (bid.hasOwnProperty('adm')) {
    var adm = '';

    try {
      adm = JSON.parse(bid.adm.replace(/\\/g, ''));
    } catch (ex) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: Cannot parse native reponse for ad response: ' + newBid.adm);
      return;
    }

    if (adm && adm.native && adm.native.assets && adm.native.assets.length > 0) {
      newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */];

      for (var i = 0, len = adm.native.assets.length; i < len; i++) {
        switch (adm.native.assets[i].id) {
          case NATIVE_ASSETS.TITLE.ID:
            newBid.native.title = adm.native.assets[i].title && adm.native.assets[i].title.text;
            break;

          case NATIVE_ASSETS.IMAGE.ID:
            newBid.native.image = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSETS.ICON.ID:
            newBid.native.icon = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSETS.SPONSOREDBY.ID:
          case NATIVE_ASSETS.BODY.ID:
          case NATIVE_ASSETS.LIKES.ID:
          case NATIVE_ASSETS.DOWNLOADS.ID:
          case NATIVE_ASSETS.PRICE:
          case NATIVE_ASSETS.SALEPRICE.ID:
          case NATIVE_ASSETS.PHONE.ID:
          case NATIVE_ASSETS.ADDRESS.ID:
          case NATIVE_ASSETS.DESC2.ID:
          case NATIVE_ASSETS.CTA.ID:
          case NATIVE_ASSETS.RATING.ID:
          case NATIVE_ASSETS.DISPLAYURL.ID:
            newBid.native[NATIVE_ASSET_ID_TO_KEY_MAP[adm.native.assets[i].id]] = adm.native.assets[i].data && adm.native.assets[i].data.value;
            break;
        }
      }

      newBid.native.clickUrl = adm.native.link && adm.native.link.url;
      newBid.native.clickTrackers = adm.native.link && adm.native.link.clicktrackers || [];
      newBid.native.impressionTrackers = adm.native.imptrackers || [];
      newBid.native.jstracker = adm.native.jstracker || [];

      if (!newBid.width) {
        newBid.width = DEFAULT_WIDTH;
      }

      if (!newBid.height) {
        newBid.height = DEFAULT_HEIGHT;
      }
    }
  }
}

function _blockedIabCategoriesValidation(payload, blockedIabCategories) {
  blockedIabCategories = blockedIabCategories.filter(function (category) {
    if (typeof category === 'string') {
      // only strings
      return true;
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'bcat: Each category should be a string, ignoring category: ' + category);
      return false;
    }
  }).map(function (category) {
    return category.trim();
  }) // trim all
  .filter(function (category, index, arr) {
    // more than 3 charaters length
    if (category.length > 3) {
      return arr.indexOf(category) === index; // unique value only
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ' + category);
    }
  });

  if (blockedIabCategories.length > 0) {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'bcat: Selected: ', blockedIabCategories);
    payload.bcat = blockedIabCategories;
  }
}

function _assignRenderer(newBid, request) {
  var bidParams, context, adUnitCode;

  if (request.bidderRequest && request.bidderRequest.bids) {
    for (var bidderRequestBidsIndex = 0; bidderRequestBidsIndex < request.bidderRequest.bids.length; bidderRequestBidsIndex++) {
      if (request.bidderRequest.bids[bidderRequestBidsIndex].bidId === newBid.requestId) {
        bidParams = request.bidderRequest.bids[bidderRequestBidsIndex].params;
        context = request.bidderRequest.bids[bidderRequestBidsIndex].mediaTypes[__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]].context;
        adUnitCode = request.bidderRequest.bids[bidderRequestBidsIndex].adUnitCode;
      }
    }

    if (context && context === 'outstream' && bidParams && bidParams.outstreamAU && adUnitCode) {
      newBid.rendererCode = bidParams.outstreamAU;
      newBid.renderer = BB_RENDERER.newRenderer(newBid.rendererCode, adUnitCode);
    }
  }
}

function isNonEmptyArray(test) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(test) === true) {
    if (test.length > 0) {
      return true;
    }
  }

  return false;
}

var spec = {
  code: BIDDER_CODE,
  gvlid: 76,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]],
  aliases: [GROUPM_ALIAS],

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && bid.params) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(bid.params.publisherId)) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      } // video ad validation


      if (bid.hasOwnProperty('mediaTypes') && bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */])) {
        // bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array
        var mediaTypesVideoMimes = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid.mediaTypes, 'video.mimes');
        var paramsVideoMimes = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(bid, 'params.video.mimes');

        if (isNonEmptyArray(mediaTypesVideoMimes) === false && isNonEmptyArray(paramsVideoMimes) === false) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(bid));
          return false;
        }

        if (!bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]].hasOwnProperty('context')) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])("".concat(LOG_WARN_PREFIX, ": no context specified in bid. Rejecting bid: "), bid);
          return false;
        }

        if (bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]].context === 'outstream' && !Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(bid.params.outstreamAU) && !bid.hasOwnProperty('renderer') && !bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]].hasOwnProperty('renderer')) {
          // we are here since outstream ad-unit is provided without outstreamAU and renderer
          // so it is not a valid video ad-unit
          // but it may be valid banner or native ad-unit
          // so if mediaType banner or Native is present then  we will remove media-type video and return true
          if (bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]) || bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */])) {
            delete bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]];
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])("".concat(LOG_WARN_PREFIX, ": for \"outstream\" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: "), bid);
            return true;
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])("".concat(LOG_WARN_PREFIX, ": for \"outstream\" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: "), bid);
            return false;
          }
        }
      }

      return true;
    }

    return false;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var refererInfo;

    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }

    var conf = _initConf(refererInfo);

    var payload = _createOrtbTemplate(conf);

    var bidCurrency = '';
    var dctrArr = [];
    var bid;
    var blockedIabCategories = [];
    validBidRequests.forEach(function (originalBid) {
      bid = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepClone"])(originalBid);
      bid.params.adSlot = bid.params.adSlot || '';

      _parseAdSlot(bid);

      if (bid.mediaTypes && bid.mediaTypes.hasOwnProperty('video') || bid.params.hasOwnProperty('video')) {// Nothing to do
      } else {
        // If we have a native mediaType configured alongside banner, its ok if the banner size is not set in width and height
        // The corresponding banner imp object will not be generated, but we still want the native object to be sent, hence the following check
        if (!(bid.hasOwnProperty('mediaTypes') && bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */])) && bid.params.width === 0 && bid.params.height === 0) {
          Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      }

      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;

      if (bidCurrency === '') {
        bidCurrency = bid.params.currency || UNDEFINED;
      } else if (bid.params.hasOwnProperty('currency') && bidCurrency !== bid.params.currency) {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"])(LOG_WARN_PREFIX + 'Currency specifier ignored. Only one currency permitted.');
      }

      bid.params.currency = bidCurrency; // check if dctr is added to more than 1 adunit

      if (bid.params.hasOwnProperty('dctr') && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(bid.params.dctr)) {
        dctrArr.push(bid.params.dctr);
      }

      if (bid.params.hasOwnProperty('bcat') && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(bid.params.bcat)) {
        blockedIabCategories = blockedIabCategories.concat(bid.params.bcat);
      }

      var impObj = _createImpressionObject(bid, conf);

      if (impObj) {
        payload.imp.push(impObj);
      }
    });

    if (payload.imp.length == 0) {
      return;
    }

    payload.site.publisher.id = conf.pubId.trim();
    publisherId = conf.pubId.trim();
    payload.ext.wrapper = {};
    payload.ext.wrapper.profile = parseInt(conf.profId) || UNDEFINED;
    payload.ext.wrapper.version = parseInt(conf.verId) || UNDEFINED;
    payload.ext.wrapper.wiid = conf.wiid || bidderRequest.auctionId; // eslint-disable-next-line no-undef

    payload.ext.wrapper.wv = "prebid_prebid_6.13.0-pre";
    payload.ext.wrapper.transactionId = conf.transactionId;
    payload.ext.wrapper.wp = 'pbjs';
    payload.user.gender = conf.gender ? conf.gender.trim() : UNDEFINED;
    payload.user.geo = {};
    payload.user.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.user.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.user.yob = _parseSlotParam('yob', conf.yob);
    payload.device.geo = payload.user.geo;
    payload.site.page = conf.kadpageurl.trim() || payload.site.page.trim();
    payload.site.domain = _getDomainFromURL(payload.site.page); // add the content object from config in request

    if (_typeof(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('content')) === 'object') {
      payload.site.content = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('content');
    } // merge the device from config.getConfig('device')


    if (_typeof(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('device')) === 'object') {
      payload.device = _extends(payload.device, __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('device'));
    } // passing transactionId in source.tid


    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'source.tid', conf.transactionId); // test bids

    if (window.location.href.indexOf('pubmaticTest=true') !== -1) {
      payload.test = 1;
    } // adding schain object


    if (validBidRequests[0].schain) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'source.ext.schain', validBidRequests[0].schain);
    } // Attaching GDPR Consent Params


    if (bidderRequest && bidderRequest.gdprConsent) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'user.ext.consent', bidderRequest.gdprConsent.consentString);
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'regs.ext.gdpr', bidderRequest.gdprConsent.gdprApplies ? 1 : 0);
    } // CCPA


    if (bidderRequest && bidderRequest.uspConsent) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'regs.ext.us_privacy', bidderRequest.uspConsent);
    } // coppa compliance


    if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"])(payload, 'regs.coppa', 1);
    }

    _handleEids(payload, validBidRequests);

    _blockedIabCategoriesValidation(payload, blockedIabCategories);

    _handleFlocId(payload, validBidRequests); // First Party Data


    var commonFpd = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('ortb2') || {};

    if (commonFpd.site) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(payload, {
        site: commonFpd.site
      });
    }

    if (commonFpd.user) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["mergeDeep"])(payload, {
        user: commonFpd.user
      });
    } // Note: Do not move this block up
    // if site object is set in Prebid config then we need to copy required fields from site into app and unset the site object


    if (_typeof(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('app')) === 'object') {
      payload.app = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('app'); // not copying domain from site as it is a derived value from page

      payload.app.publisher = payload.site.publisher;
      payload.app.ext = payload.site.ext || UNDEFINED; // We will also need to pass content object in app.content if app object is also set into the config;
      // BUT do not use content object from config if content object is present in app as app.content

      if (_typeof(payload.app.content) !== 'object') {
        payload.app.content = payload.site.content || UNDEFINED;
      }

      delete payload.site;
    }

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload),
      bidderRequest: bidderRequest
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} response A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(response, request) {
    var bidResponses = [];
    var respCur = DEFAULT_CURRENCY;
    var parsedRequest = JSON.parse(request.data);
    var parsedReferrer = parsedRequest.site && parsedRequest.site.ref ? parsedRequest.site.ref : '';

    try {
      if (response.body && response.body.seatbid && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(response.body.seatbid)) {
        // Supporting multiple bid responses for same adSize
        respCur = response.body.cur || respCur;
        response.body.seatbid.forEach(function (seatbidder) {
          seatbidder.bid && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"])(seatbidder.bid) && seatbidder.bid.forEach(function (bid) {
            var newBid = {
              requestId: bid.impid,
              cpm: (parseFloat(bid.price) || 0).toFixed(2),
              width: bid.w,
              height: bid.h,
              creativeId: bid.crid || bid.id,
              dealId: bid.dealid,
              currency: respCur,
              netRevenue: NET_REVENUE,
              ttl: 300,
              referrer: parsedReferrer,
              ad: bid.adm,
              pm_seat: seatbidder.seat || null,
              pm_dspid: bid.ext && bid.ext.dspid ? bid.ext.dspid : null,
              partnerImpId: bid.id || '' // partner impression Id

            };

            if (parsedRequest.imp && parsedRequest.imp.length > 0) {
              parsedRequest.imp.forEach(function (req) {
                if (bid.impid === req.id) {
                  _checkMediaType(bid, newBid);

                  switch (newBid.mediaType) {
                    case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]:
                      break;

                    case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]:
                      newBid.width = bid.hasOwnProperty('w') ? bid.w : req.video.w;
                      newBid.height = bid.hasOwnProperty('h') ? bid.h : req.video.h;
                      newBid.vastXml = bid.adm;

                      _assignRenderer(newBid, request);

                      break;

                    case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]:
                      _parseNativeResponse(bid, newBid);

                      break;
                  }
                }
              });
            }

            if (bid.ext && bid.ext.deal_channel) {
              newBid['dealChannel'] = dealChannelValues[bid.ext.deal_channel] || null;
            }

            newBid.meta = {};

            if (bid.ext && bid.ext.dspid) {
              newBid.meta.networkId = bid.ext.dspid;
            }

            if (bid.ext && bid.ext.advid) {
              newBid.meta.buyerId = bid.ext.advid;
            }

            if (bid.adomain && bid.adomain.length > 0) {
              newBid.meta.advertiserDomains = bid.adomain;
              newBid.meta.clickUrl = bid.adomain[0];
            } // adserverTargeting


            if (seatbidder.ext && seatbidder.ext.buyid) {
              newBid.adserverTargeting = {
                'hb_buyid_pubmatic': seatbidder.ext.buyid
              };
            }

            bidResponses.push(newBid);
          });
        });
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"])(error);
    }

    return bidResponses;
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    var syncurl = '' + publisherId; // Attaching GDPR Consent Params in UserSync url

    if (gdprConsent) {
      syncurl += '&gdpr=' + (gdprConsent.gdprApplies ? 1 : 0);
      syncurl += '&gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || '');
    } // CCPA


    if (uspConsent) {
      syncurl += '&us_privacy=' + encodeURIComponent(uspConsent);
    } // coppa compliance


    if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      syncurl += '&coppa=1';
    }

    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: USER_SYNC_URL_IFRAME + syncurl
      }];
    } else {
      return [{
        type: 'image',
        url: USER_SYNC_URL_IMAGE + syncurl
      }];
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb, adUnit, bidRequests) {
    _addJWPlayerSegmentData(params, adUnit.bids[0], true);

    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"])({
      'publisherId': 'string',
      'adSlot': 'string'
    }, params);
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);
window.pbjs.installedModules.push('pubmaticBidAdapter');

/***/ })

},[762]);
pbjsChunk([141],{

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(839);


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedIdSystemSubmodule", function() { return sharedIdSystemSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This module adds SharedId to the User ID module
 * The {@link module:modules/userId} module is required
 * @module modules/sharedIdSystem
 * @requires module:modules/userId
 */




var GVLID = 887;
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__src_storageManager_js__["b" /* getStorageManager */])(GVLID, 'pubCommonId');
var COOKIE = 'cookie';
var LOCAL_STORAGE = 'html5';
var OPTOUT_NAME = '_pubcid_optout';
var PUB_COMMON_ID = 'PublisherCommonId';
/**
 * Read a value either from cookie or local storage
 * @param {string} name Name of the item
 * @param {string} type storage type override
 * @returns {string|null} a string if item exists
 */

function readValue(name, type) {
  if (type === COOKIE) {
    return storage.getCookie(name);
  } else if (type === LOCAL_STORAGE) {
    if (storage.hasLocalStorage()) {
      var expValue = storage.getDataFromLocalStorage("".concat(name, "_exp"));

      if (!expValue) {
        return storage.getDataFromLocalStorage(name);
      } else if (new Date(expValue).getTime() - Date.now() > 0) {
        return storage.getDataFromLocalStorage(name);
      }
    }
  }
}

function getIdCallback(pubcid, pixelCallback) {
  return function (callback) {
    if (typeof pixelCallback === 'function') {
      pixelCallback();
    }

    callback(pubcid);
  };
}

function queuePixelCallback(pixelUrl) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var callback = arguments.length > 2 ? arguments[2] : undefined;

  if (!pixelUrl) {
    return;
  } // Use pubcid as a cache buster


  var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"])(pixelUrl);
  urlInfo.search.id = encodeURIComponent('pubcid:' + id);
  var targetUrl = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["buildUrl"])(urlInfo);
  return function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["triggerPixel"])(targetUrl);
  };
}

function hasOptedOut() {
  return !!(storage.cookiesAreEnabled() && readValue(OPTOUT_NAME, COOKIE) || storage.hasLocalStorage() && readValue(OPTOUT_NAME, LOCAL_STORAGE));
}

var sharedIdSystemSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: 'sharedId',
  aliasName: 'pubCommonId',

  /**
   * Vendor id of prebid
   * @type {Number}
   */
  gvlid: GVLID,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @param {SubmoduleConfig} config
   * @returns {{pubcid:string}}
   */
  decode: function decode(value, config) {
    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId decode: Has opted-out');
      return undefined;
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])(' Decoded value PubCommonId ' + value);
    var idObj = {
      'pubcid': value
    };
    return idObj;
  },

  /**
   * performs action to obtain id
   * @function
   * @param {SubmoduleConfig} [config] Config object with params and storage properties
   * @param {Object} consentData
   * @param {string} storedId Existing pubcommon id
   * @returns {IdResponse}
   */
  getId: function getId() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;
    var storedId = arguments.length > 2 ? arguments[2] : undefined;

    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: Has opted-out');
      return;
    }

    var coppa = __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["coppaDataHandler"].getCoppa();

    if (coppa) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
      return;
    }

    var _config$params = config.params;
    _config$params = _config$params === void 0 ? {} : _config$params;
    var _config$params$create = _config$params.create,
        create = _config$params$create === void 0 ? true : _config$params$create,
        pixelUrl = _config$params.pixelUrl;
    var newId = storedId;

    if (!newId) {
      try {
        if (_typeof(window[PUB_COMMON_ID]) === 'object') {
          // If the page includes its own pubcid module, then save a copy of id.
          newId = window[PUB_COMMON_ID].getId();
        }
      } catch (e) {}

      if (!newId) newId = create && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["hasDeviceAccess"])() ? Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["generateUUID"])() : undefined;
    }

    var pixelCallback = queuePixelCallback(pixelUrl, newId);
    return {
      id: newId,
      callback: getIdCallback(newId, pixelCallback)
    };
  },

  /**
   * performs action to extend an id.  There are generally two ways to extend the expiration time
   * of stored id: using pixelUrl or return the id and let main user id module write it again with
   * the new expiration time.
   *
   * PixelUrl, if defined, should point back to a first party domain endpoint.  On the server
   * side, there is either a plugin, or customized logic to read and write back the pubcid cookie.
   * The extendId function itself should return only the callback, and not the id itself to avoid
   * having the script-side overwriting server-side.  This applies to both pubcid and sharedid.
   *
   * On the other hand, if there is no pixelUrl, then the extendId should return storedId so that
   * its expiration time is updated.
   *
   * @function
   * @param {SubmoduleParams} [config]
   * @param {ConsentData|undefined} consentData
   * @param {Object} storedId existing id
   * @returns {IdResponse|undefined}
   */
  extendId: function extendId() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var consentData = arguments.length > 1 ? arguments[1] : undefined;
    var storedId = arguments.length > 2 ? arguments[2] : undefined;

    if (hasOptedOut()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: Has opted-out');
      return {
        id: undefined
      };
    }

    var coppa = __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["coppaDataHandler"].getCoppa();

    if (coppa) {
      Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"])('PubCommonId: IDs not provided for coppa requests, exiting PubCommonId');
      return;
    }

    var _config$params2 = config.params;
    _config$params2 = _config$params2 === void 0 ? {} : _config$params2;
    var _config$params2$exten = _config$params2.extend,
        extend = _config$params2$exten === void 0 ? false : _config$params2$exten,
        pixelUrl = _config$params2.pixelUrl;

    if (extend) {
      if (pixelUrl) {
        var callback = queuePixelCallback(pixelUrl, storedId);
        return {
          callback: callback
        };
      } else {
        return {
          id: storedId
        };
      }
    }
  },
  domainOverride: function domainOverride() {
    var domainElements = document.domain.split('.');
    var cookieName = "_gd".concat(Date.now());

    for (var i = 0, topDomain, testCookie; i < domainElements.length; i++) {
      var nextDomain = domainElements.slice(i).join('.'); // write test cookie

      storage.setCookie(cookieName, '1', undefined, undefined, nextDomain); // read test cookie to verify domain was valid

      testCookie = storage.getCookie(cookieName); // delete test cookie

      storage.setCookie(cookieName, '', 'Thu, 01 Jan 1970 00:00:01 GMT', undefined, nextDomain);

      if (testCookie === '1') {
        // cookie was written successfully using test domain so the topDomain is updated
        topDomain = nextDomain;
      } else {
        // cookie failed to write using test domain so exit by returning the topDomain
        return topDomain;
      }
    }
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_hook_js__["e" /* submodule */])('userId', sharedIdSystemSubmodule);
window.pbjs.installedModules.push('sharedIdSystem');

/***/ })

},[838]);
pbjsChunk([109],{

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(927);


/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid2IdSubmodule", function() { return uid2IdSubmodule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_storageManager_js__ = __webpack_require__(7);
/**
 * This module adds uid2 ID support to the User ID module
 * The {@link module:modules/userId} module is required.
 * @module modules/uid2IdSystem
 * @requires module:modules/userId
 */



var MODULE_NAME = 'uid2';
var GVLID = 887;
var LOG_PRE_FIX = 'UID2: ';
var ADVERTISING_COOKIE = '__uid2_advertising_token';

function readCookie() {
  return storage.cookiesAreEnabled() ? storage.getCookie(ADVERTISING_COOKIE) : null;
}

function readFromLocalStorage() {
  return storage.localStorageIsEnabled() ? storage.getDataFromLocalStorage(ADVERTISING_COOKIE) : null;
}

function getStorage() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__src_storageManager_js__["b" /* getStorageManager */])(GVLID, MODULE_NAME);
}

var storage = getStorage();

var _logInfo = createLogInfo(LOG_PRE_FIX);

function createLogInfo(prefix) {
  return function () {
    for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
      strings[_key] = arguments[_key];
    }

    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"].apply(void 0, [prefix + ' '].concat(strings));
  };
}
/**
 * Encode the id
 * @param value
 * @returns {string|*}
 */


function encodeId(value) {
  var result = {};

  if (value) {
    var bidIds = {
      id: value
    };
    result.uid2 = bidIds;

    _logInfo('Decoded value ' + JSON.stringify(result));

    return result;
  }

  return undefined;
}
/** @type {Submodule} */


var uid2IdSubmodule = {
  /**
   * used to link submodule with config
   * @type {string}
   */
  name: MODULE_NAME,

  /**
   * Vendor id of Prebid
   * @type {Number}
   */
  gvlid: GVLID,

  /**
   * decode the stored id value for passing to bid requests
   * @function
   * @param {string} value
   * @returns {{uid2:{ id: string }} or undefined if value doesn't exists
   */
  decode: function decode(value) {
    return value ? encodeId(value) : undefined;
  },

  /**
   * performs action to obtain id and return a value.
   * @function
   * @param {SubmoduleConfig} [config]
   * @param {ConsentData|undefined} consentData
   * @returns {uid2Id}
   */
  getId: function getId(config, consentData) {
    _logInfo('Creating UID 2.0');

    var value = readCookie() || readFromLocalStorage();

    _logInfo('The advertising token: ' + value);

    return {
      id: value
    };
  }
}; // Register submodule for userId

Object(__WEBPACK_IMPORTED_MODULE_1__src_hook_js__["e" /* submodule */])('userId', uid2IdSubmodule);
window.pbjs.installedModules.push('uid2IdSystem');

/***/ })

},[926]);
pbjsChunk([13],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createEidsArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildEidPermissions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
 // Each user-id sub-module is expected to mention respective config here

var USER_IDS_CONFIG = {
  // key-name : {config}
  // trustpid
  'trustpid': {
    source: 'trustpid.com',
    atype: 1,
    getValue: function getValue(data) {
      return data;
    }
  },
  // intentIqId
  'intentIqId': {
    source: 'intentiq.com',
    atype: 1
  },
  // naveggId
  'naveggId': {
    source: 'navegg.com',
    atype: 1
  },
  // justId
  'justId': {
    source: 'justtag.com',
    atype: 1
  },
  // pubCommonId
  'pubcid': {
    source: 'pubcid.org',
    atype: 1
  },
  // unifiedId
  'tdid': {
    source: 'adserver.org',
    atype: 1,
    getUidExt: function getUidExt() {
      return {
        rtiPartner: 'TDID'
      };
    }
  },
  // id5Id
  'id5id': {
    getValue: function getValue(data) {
      return data.uid;
    },
    source: 'id5-sync.com',
    atype: 1,
    getUidExt: function getUidExt(data) {
      if (data.ext) {
        return data.ext;
      }
    }
  },
  // parrableId
  'parrableId': {
    source: 'parrable.com',
    atype: 1,
    getValue: function getValue(parrableId) {
      if (parrableId.eid) {
        return parrableId.eid;
      }

      if (parrableId.ccpaOptout) {
        // If the EID was suppressed due to a non consenting ccpa optout then
        // we still wish to provide this as a reason to the adapters
        return '';
      }

      return null;
    },
    getUidExt: function getUidExt(parrableId) {
      var extendedData = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["pick"])(parrableId, ['ibaOptout', 'ccpaOptout']);

      if (Object.keys(extendedData).length) {
        return extendedData;
      }
    }
  },
  // identityLink
  'idl_env': {
    source: 'liveramp.com',
    atype: 3
  },
  // liveIntentId
  'lipb': {
    getValue: function getValue(data) {
      return data.lipbid;
    },
    source: 'liveintent.com',
    atype: 3,
    getEidExt: function getEidExt(data) {
      if (Array.isArray(data.segments) && data.segments.length) {
        return {
          segments: data.segments
        };
      }
    }
  },
  // britepoolId
  'britepoolid': {
    source: 'britepool.com',
    atype: 3
  },
  // dmdId
  'dmdId': {
    source: 'hcn.health',
    atype: 3
  },
  // lotamePanoramaId
  lotamePanoramaId: {
    source: 'crwdcntrl.net',
    atype: 1
  },
  // criteo
  'criteoId': {
    source: 'criteo.com',
    atype: 1
  },
  // merkleId
  'merkleId': {
    source: 'merkleinc.com',
    atype: 3,
    getValue: function getValue(data) {
      return data.id;
    },
    getUidExt: function getUidExt(data) {
      return data && data.keyID ? {
        keyID: data.keyID
      } : undefined;
    }
  },
  // NetId
  'netId': {
    source: 'netid.de',
    atype: 1
  },
  // zeotapIdPlus
  'IDP': {
    source: 'zeotap.com',
    atype: 1
  },
  // hadronId
  'hadronId': {
    source: 'audigent.com',
    atype: 1
  },
  // haloId (deprecated in 7.0, use hadronId)
  'haloId': {
    source: 'audigent.com',
    atype: 1
  },
  // quantcastId
  'quantcastId': {
    source: 'quantcast.com',
    atype: 1
  },
  // nextroll
  'nextrollId': {
    source: 'nextroll.com',
    atype: 1
  },
  // IDx
  'idx': {
    source: 'idx.lat',
    atype: 1
  },
  // Verizon Media ConnectID
  'connectid': {
    source: 'verizonmedia.com',
    atype: 3
  },
  // Neustar Fabrick
  'fabrickId': {
    source: 'neustar.biz',
    atype: 1
  },
  // MediaWallah OpenLink
  'mwOpenLinkId': {
    source: 'mediawallahscript.com',
    atype: 1
  },
  'tapadId': {
    source: 'tapad.com',
    atype: 1
  },
  // Novatiq Snowflake
  'novatiq': {
    getValue: function getValue(data) {
      return data.snowflake;
    },
    source: 'novatiq.com',
    atype: 1
  },
  'uid2': {
    source: 'uidapi.com',
    atype: 3,
    getValue: function getValue(data) {
      return data.id;
    }
  },
  // Akamai Data Activation Platform (DAP)
  'dapId': {
    source: 'akamai.com',
    atype: 1
  },
  'deepintentId': {
    source: 'deepintent.com',
    atype: 3
  },
  // Admixer Id
  'admixerId': {
    source: 'admixer.net',
    atype: 3
  },
  // Adtelligent Id
  'adtelligentId': {
    source: 'adtelligent.com',
    atype: 3
  },
  amxId: {
    source: 'amxrtb.com',
    atype: 1
  },
  'publinkId': {
    source: 'epsilon.com',
    atype: 3
  },
  'kpuid': {
    source: 'kpuid.com',
    atype: 3
  },
  'imuid': {
    source: 'intimatemerger.com',
    atype: 1
  },
  // Yahoo ConnectID
  'connectId': {
    source: 'yahoo.com',
    atype: 3
  },
  // Adquery ID
  'qid': {
    source: 'adquery.io',
    atype: 1
  }
}; // this function will create an eid object for the given UserId sub-module

function createEidObject(userIdData, subModuleKey) {
  var conf = USER_IDS_CONFIG[subModuleKey];

  if (conf && userIdData) {
    var eid = {};
    eid.source = conf['source'];
    var value = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getValue']) ? conf['getValue'](userIdData) : userIdData;

    if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"])(value)) {
      var uid = {
        id: value,
        atype: conf['atype']
      }; // getUidExt

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getUidExt'])) {
        var uidExt = conf['getUidExt'](userIdData);

        if (uidExt) {
          uid.ext = uidExt;
        }
      }

      eid.uids = [uid]; // getEidExt

      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"])(conf['getEidExt'])) {
        var eidExt = conf['getEidExt'](userIdData);

        if (eidExt) {
          eid.ext = eidExt;
        }
      }

      return eid;
    }
  }

  return null;
} // this function will generate eids array for all available IDs in bidRequest.userId
// this function will be called by userId module
// if any adapter does not want any particular userId to be passed then adapter can use Array.filter(e => e.source != 'tdid')


function createEidsArray(bidRequestUserId) {
  var eids = [];

  for (var subModuleKey in bidRequestUserId) {
    if (bidRequestUserId.hasOwnProperty(subModuleKey)) {
      if (subModuleKey === 'pubProvidedId') {
        eids = eids.concat(bidRequestUserId['pubProvidedId']);
      } else {
        var eid = createEidObject(bidRequestUserId[subModuleKey], subModuleKey);

        if (eid) {
          eids.push(eid);
        }
      }
    }
  }

  return eids;
}
/**
 * @param {SubmoduleContainer[]} submodules
 */

function buildEidPermissions(submodules) {
  var eidPermissions = [];
  submodules.filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).forEach(function (i) {
    Object.keys(i.idObj).forEach(function (key) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(i, 'config.bidders') && Array.isArray(i.config.bidders) && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"])(USER_IDS_CONFIG, key + '.source')) {
        eidPermissions.push({
          source: USER_IDS_CONFIG[key].source,
          bidders: i.config.bidders
        });
      }
    });
  });
  return eidPermissions;
}

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(939);


/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBJS_USER_ID_OPTOUT_NAME", function() { return PBJS_USER_ID_OPTOUT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreStorage", function() { return coreStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDelay", function() { return syncDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auctionDelay", function() { return auctionDelay; });
/* harmony export (immutable) */ __webpack_exports__["setSubmoduleRegistry"] = setSubmoduleRegistry;
/* harmony export (immutable) */ __webpack_exports__["setStoredValue"] = setStoredValue;
/* harmony export (immutable) */ __webpack_exports__["setStoredConsentData"] = setStoredConsentData;
/* harmony export (immutable) */ __webpack_exports__["findRootDomain"] = findRootDomain;
/* harmony export (immutable) */ __webpack_exports__["requestBidsHook"] = requestBidsHook;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGdprEnforcement", function() { return validateGdprEnforcement; });
/* harmony export (immutable) */ __webpack_exports__["attachIdSystem"] = attachIdSystem;
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_events_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_hook_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eids_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_pure_features_array_includes_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_pure_features_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_pure_features_array_includes_js__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This module adds User ID support to prebid.js
 * @module modules/userId
 */

/**
 * @interface Submodule
 */

/**
 * @function
 * @summary performs action to obtain id and return a value in the callback's response argument.
 *  If IdResponse#id is defined, then it will be written to the current active storage.
 *  If IdResponse#callback is defined, then it'll called at the end of auction.
 *  It's permissible to return neither, one, or both fields.
 * @name Submodule#getId
 * @param {SubmoduleConfig} config
 * @param {ConsentData|undefined} consentData
 * @param {(Object|undefined)} cacheIdObj
 * @return {(IdResponse|undefined)} A response object that contains id and/or callback.
 */

/**
 * @function
 * @summary Similar to Submodule#getId, this optional method returns response to for id that exists already.
 *  If IdResponse#id is defined, then it will be written to the current active storage even if it exists already.
 *  If IdResponse#callback is defined, then it'll called at the end of auction.
 *  It's permissible to return neither, one, or both fields.
 * @name Submodule#extendId
 * @param {SubmoduleConfig} config
 * @param {ConsentData|undefined} consentData
 * @param {Object} storedId - existing id, if any
 * @return {(IdResponse|function(callback:function))} A response object that contains id and/or callback.
 */

/**
 * @function
 * @summary decode a stored value for passing to bid requests
 * @name Submodule#decode
 * @param {Object|string} value
 * @param {SubmoduleConfig|undefined} config
 * @return {(Object|undefined)}
 */

/**
 * @property
 * @summary used to link submodule with config
 * @name Submodule#name
 * @type {string}
 */

/**
 * @property
 * @summary use a predefined domain override for cookies or provide your own
 * @name Submodule#domainOverride
 * @type {(undefined|function)}
 */

/**
 * @function
 * @summary Returns the root domain
 * @name Submodule#findRootDomain
 * @returns {string}
 */

/**
 * @typedef {Object} SubmoduleConfig
 * @property {string} name - the User ID submodule name (used to link submodule with config)
 * @property {(SubmoduleStorage|undefined)} storage - browser storage config
 * @property {(SubmoduleParams|undefined)} params - params config for use by the submodule.getId function
 * @property {(Object|undefined)} value - if not empty, this value is added to bid requests for access in adapters
 */

/**
 * @typedef {Object} SubmoduleStorage
 * @property {string} type - browser storage type (html5 or cookie)
 * @property {string} name - key name to use when saving/reading to local storage or cookies
 * @property {number} expires - time to live for browser storage in days
 * @property {(number|undefined)} refreshInSeconds - if not empty, this value defines the maximum time span in seconds before refreshing user ID stored in browser
 */

/**
 * @typedef {Object} LiveIntentCollectConfig
 * @property {(string|undefined)} fpiStorageStrategy - defines whether the first party identifiers that LiveConnect creates and updates are stored in a cookie jar, local storage, or not created at all
 * @property {(number|undefined)} fpiExpirationDays - the expiration time of an identifier created and updated by LiveConnect
 * @property {(string|undefined)} collectorUrl - defines where the LiveIntentId signal pixels are pointing to
 * @property {(string|undefined)} appId - the  unique identifier of the application in question
 */

/**
 * @typedef {Object} SubmoduleParams
 * @property {(string|undefined)} partner - partner url param value
 * @property {(string|undefined)} url - webservice request url used to load Id data
 * @property {(string|undefined)} pixelUrl - publisher pixel to extend/modify cookies
 * @property {(boolean|undefined)} create - create id if missing.  default is true.
 * @property {(boolean|undefined)} extend - extend expiration time on each access.  default is false.
 * @property {(string|undefined)} pid - placement id url param value
 * @property {(string|undefined)} publisherId - the unique identifier of the publisher in question
 * @property {(string|undefined)} ajaxTimeout - the number of milliseconds a resolution request can take before automatically being terminated
 * @property {(array|undefined)} identifiersToResolve - the identifiers from either ls|cookie to be attached to the getId query
 * @property {(LiveIntentCollectConfig|undefined)} liCollectConfig - the config for LiveIntent's collect requests
 * @property {(string|undefined)} pd - publisher provided data for reconciling ID5 IDs
 * @property {(string|undefined)} emailHash - if provided, the hashed email address of a user
 * @property {(string|undefined)} notUse3P - use to retrieve envelope from 3p endpoint
 */

/**
 * @typedef {Object} SubmoduleContainer
 * @property {Submodule} submodule
 * @property {SubmoduleConfig} config
 * @property {(Object|undefined)} idObj - cache decoded id value (this is copied to every adUnit bid)
 * @property {(function|undefined)} callback - holds reference to submodule.getId() result if it returned a function. Will be set to undefined after callback executes
 */

/**
 * @typedef {Object} ConsentData
 * @property {(string|undefined)} consentString
 * @property {(Object|undefined)} vendorData
 * @property {(boolean|undefined)} gdprApplies
 */

/**
 * @typedef {Object} IdResponse
 * @property {(Object|undefined)} id - id data
 * @property {(function|undefined)} callback - function that will return an id
 */

/**
  * @typedef {Object} RefreshUserIdsOptions
  * @property {(string[]|undefined)} submoduleNames - submodules to refresh
  */











var MODULE_NAME = 'User ID';
var COOKIE = 'cookie';
var LOCAL_STORAGE = 'html5';
var DEFAULT_SYNC_DELAY = 500;
var NO_AUCTION_DELAY = 0;
var CONSENT_DATA_COOKIE_STORAGE_CONFIG = {
  name: '_pbjs_userid_consent_data',
  expires: 30 // 30 days expiration, which should match how often consent is refreshed by CMPs

};
var PBJS_USER_ID_OPTOUT_NAME = '_pbjs_id_optout';
var coreStorage = Object(__WEBPACK_IMPORTED_MODULE_8__src_storageManager_js__["a" /* getCoreStorageManager */])('userid');
/** @type {string[]} */

var validStorageTypes = [];
/** @type {boolean} */

var addedUserIdHook = false;
/** @type {SubmoduleContainer[]} */

var submodules = [];
/** @type {SubmoduleContainer[]} */

var initializedSubmodules;
/** @type {SubmoduleConfig[]} */

var configRegistry = [];
/** @type {Submodule[]} */

var submoduleRegistry = [];
/** @type {(number|undefined)} */

var timeoutID;
/** @type {(number|undefined)} */

var syncDelay;
/** @type {(number|undefined)} */

var auctionDelay;
/** @type {(string|undefined)} */

var ppidSource;
/** @param {Submodule[]} submodules */

function setSubmoduleRegistry(submodules) {
  submoduleRegistry = submodules;
}
/**
 * @param {SubmoduleContainer} submodule
 * @param {(Object|string)} value
 */

function setStoredValue(submodule, value) {
  /**
   * @type {SubmoduleStorage}
   */
  var storage = submodule.config.storage;
  var domainOverride = typeof submodule.submodule.domainOverride === 'function' ? submodule.submodule.domainOverride() : null;

  try {
    var valueStr = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(value) ? JSON.stringify(value) : value;
    var expiresStr = new Date(Date.now() + storage.expires * (60 * 60 * 24 * 1000)).toUTCString();

    if (storage.type === COOKIE) {
      coreStorage.setCookie(storage.name, valueStr, expiresStr, 'Lax', domainOverride);

      if (typeof storage.refreshInSeconds === 'number') {
        coreStorage.setCookie("".concat(storage.name, "_last"), new Date().toUTCString(), expiresStr, 'Lax', domainOverride);
      }
    } else if (storage.type === LOCAL_STORAGE) {
      coreStorage.setDataInLocalStorage("".concat(storage.name, "_exp"), expiresStr);
      coreStorage.setDataInLocalStorage(storage.name, encodeURIComponent(valueStr));

      if (typeof storage.refreshInSeconds === 'number') {
        coreStorage.setDataInLocalStorage("".concat(storage.name, "_last"), new Date().toUTCString());
      }
    }
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(error);
  }
}

function setPrebidServerEidPermissions(initializedSubmodules) {
  var setEidPermissions = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["getPrebidInternal"])().setEidPermissions;

  if (typeof setEidPermissions === 'function' && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(initializedSubmodules)) {
    setEidPermissions(Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["a" /* buildEidPermissions */])(initializedSubmodules));
  }
}
/**
/**
 * @param {SubmoduleStorage} storage
 * @param {String|undefined} key optional key of the value
 * @returns {string}
 */


function getStoredValue(storage) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var storedKey = key ? "".concat(storage.name, "_").concat(key) : storage.name;
  var storedValue;

  try {
    if (storage.type === COOKIE) {
      storedValue = coreStorage.getCookie(storedKey);
    } else if (storage.type === LOCAL_STORAGE) {
      var storedValueExp = coreStorage.getDataFromLocalStorage("".concat(storage.name, "_exp")); // empty string means no expiration set

      if (storedValueExp === '') {
        storedValue = coreStorage.getDataFromLocalStorage(storedKey);
      } else if (storedValueExp) {
        if (new Date(storedValueExp).getTime() - Date.now() > 0) {
          storedValue = decodeURIComponent(coreStorage.getDataFromLocalStorage(storedKey));
        }
      }
    } // support storing a string or a stringified object


    if (typeof storedValue === 'string' && storedValue.trim().charAt(0) === '{') {
      storedValue = JSON.parse(storedValue);
    }
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(e);
  }

  return storedValue;
}
/**
 * makes an object that can be stored with only the keys we need to check.
 * excluding the vendorConsents object since the consentString is enough to know
 * if consent has changed without needing to have all the details in an object
 * @param consentData
 * @returns {{apiVersion: number, gdprApplies: boolean, consentString: string}}
 */


function makeStoredConsentDataHash(consentData) {
  var storedConsentData = {
    consentString: '',
    gdprApplies: false,
    apiVersion: 0
  };

  if (consentData) {
    storedConsentData.consentString = consentData.consentString;
    storedConsentData.gdprApplies = consentData.gdprApplies;
    storedConsentData.apiVersion = consentData.apiVersion;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["cyrb53Hash"])(JSON.stringify(storedConsentData));
}
/**
 * puts the current consent data into cookie storage
 * @param consentData
 */


function setStoredConsentData(consentData) {
  try {
    var expiresStr = new Date(Date.now() + CONSENT_DATA_COOKIE_STORAGE_CONFIG.expires * (60 * 60 * 24 * 1000)).toUTCString();
    coreStorage.setCookie(CONSENT_DATA_COOKIE_STORAGE_CONFIG.name, makeStoredConsentDataHash(consentData), expiresStr, 'Lax');
  } catch (error) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(error);
  }
}
/**
 * get the stored consent data from local storage, if any
 * @returns {string}
 */

function getStoredConsentData() {
  try {
    return coreStorage.getCookie(CONSENT_DATA_COOKIE_STORAGE_CONFIG.name);
  } catch (e) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logError"])(e);
  }
}
/**
 * test if the consent object stored locally matches the current consent data. if they
 * don't match or there is nothing stored locally, it means a refresh of the user id
 * submodule is needed
 * @param storedConsentData
 * @param consentData
 * @returns {boolean}
 */


function storedConsentDataMatchesConsentData(storedConsentData, consentData) {
  return typeof storedConsentData !== 'undefined' && storedConsentData !== null && storedConsentData === makeStoredConsentDataHash(consentData);
}
/**
 * test if consent module is present, applies, and is valid for local storage or cookies (purpose 1)
 * @param {ConsentData} consentData
 * @returns {boolean}
 */


function hasGDPRConsent(consentData) {
  if (consentData && typeof consentData.gdprApplies === 'boolean' && consentData.gdprApplies) {
    if (!consentData.consentString) {
      return false;
    }

    if (consentData.apiVersion === 1 && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(consentData, 'vendorData.purposeConsents.1') === false) {
      return false;
    }

    if (consentData.apiVersion === 2 && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(consentData, 'vendorData.purpose.consents.1') === false) {
      return false;
    }
  }

  return true;
}
/**
   * Find the root domain
   * @param {string|undefined} fullDomain
   * @return {string}
   */


function findRootDomain() {
  var fullDomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hostname;

  if (!coreStorage.cookiesAreEnabled()) {
    return fullDomain;
  }

  var domainParts = fullDomain.split('.');

  if (domainParts.length == 2) {
    return fullDomain;
  }

  var rootDomain;
  var continueSearching;
  var startIndex = -2;
  var TEST_COOKIE_NAME = "_rdc".concat(Date.now());
  var TEST_COOKIE_VALUE = 'writeable';

  do {
    rootDomain = domainParts.slice(startIndex).join('.');
    var expirationDate = new Date(Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["timestamp"])() + 10 * 1000).toUTCString(); // Write a test cookie

    coreStorage.setCookie(TEST_COOKIE_NAME, TEST_COOKIE_VALUE, expirationDate, 'Lax', rootDomain, undefined); // See if the write was successful

    var value = coreStorage.getCookie(TEST_COOKIE_NAME, undefined);

    if (value === TEST_COOKIE_VALUE) {
      continueSearching = false; // Delete our test cookie

      coreStorage.setCookie(TEST_COOKIE_NAME, '', 'Thu, 01 Jan 1970 00:00:01 GMT', undefined, rootDomain, undefined);
    } else {
      startIndex += -1;
      continueSearching = Math.abs(startIndex) <= domainParts.length;
    }
  } while (continueSearching);

  return rootDomain;
}
/**
 * @param {SubmoduleContainer[]} submodules
 * @param {function} cb - callback for after processing is done.
 */

function processSubmoduleCallbacks(submodules, cb) {
  var done = function done() {};

  if (cb) {
    done = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["delayExecution"])(function () {
      clearTimeout(timeoutID);
      cb();
    }, submodules.length);
  }

  submodules.forEach(function (submodule) {
    submodule.callback(function callbackCompleted(idObj) {
      // if valid, id data should be saved to cookie/html storage
      if (idObj) {
        if (submodule.config.storage) {
          setStoredValue(submodule, idObj);
        } // cache decoded value (this is copied to every adUnit bid)


        submodule.idObj = submodule.submodule.decode(idObj, submodule.config);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, ": ").concat(submodule.submodule.name, " - request id responded with an empty value"));
      }

      done();
    }); // clear callback, this prop is used to test if all submodule callbacks are complete below

    submodule.callback = undefined;
  });
}
/**
 * This function will create a combined object for all subModule Ids
 * @param {SubmoduleContainer[]} submodules
 */


function getCombinedSubmoduleIds(submodules) {
  if (!Array.isArray(submodules) || !submodules.length) {
    return {};
  }

  var combinedSubmoduleIds = submodules.filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).reduce(function (carry, i) {
    Object.keys(i.idObj).forEach(function (key) {
      carry[key] = i.idObj[key];
    });
    return carry;
  }, {});
  return combinedSubmoduleIds;
}
/**
 * This function will create a combined object for bidder with allowed subModule Ids
 * @param {SubmoduleContainer[]} submodules
 * @param {string} bidder
 */


function getCombinedSubmoduleIdsForBidder(submodules, bidder) {
  if (!Array.isArray(submodules) || !submodules.length || !bidder) {
    return {};
  }

  return submodules.filter(function (i) {
    return !i.config.bidders || !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(i.config.bidders) || __WEBPACK_IMPORTED_MODULE_10_core_js_pure_features_array_includes_js___default()(i.config.bidders, bidder);
  }).filter(function (i) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(i.idObj) && Object.keys(i.idObj).length;
  }).reduce(function (carry, i) {
    Object.keys(i.idObj).forEach(function (key) {
      carry[key] = i.idObj[key];
    });
    return carry;
  }, {});
}
/**
 * @param {AdUnit[]} adUnits
 * @param {SubmoduleContainer[]} submodules
 */


function addIdDataToAdUnitBids(adUnits, submodules) {
  if ([adUnits].some(function (i) {
    return !Array.isArray(i) || !i.length;
  })) {
    return;
  }

  adUnits.forEach(function (adUnit) {
    if (adUnit.bids && Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isArray"])(adUnit.bids)) {
      adUnit.bids.forEach(function (bid) {
        var combinedSubmoduleIds = getCombinedSubmoduleIdsForBidder(submodules, bid.bidder);

        if (Object.keys(combinedSubmoduleIds).length) {
          // create a User ID object on the bid,
          bid.userId = combinedSubmoduleIds;
          bid.userIdAsEids = Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["b" /* createEidsArray */])(combinedSubmoduleIds);
        }
      });
    }
  });
}
/**
 * This is a common function that will initialize subModules if not already done and it will also execute subModule callbacks
 */


function initializeSubmodulesAndExecuteCallbacks(continueAuction) {
  var delayed = false; // initialize submodules only when undefined

  if (typeof initializedSubmodules === 'undefined') {
    initializedSubmodules = initSubmodules(submodules, __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__["gdprDataHandler"].getConsentData());

    if (initializedSubmodules.length) {
      setPrebidServerEidPermissions(initializedSubmodules); // list of submodules that have callbacks that need to be executed

      var submodulesWithCallbacks = initializedSubmodules.filter(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isFn"])(item.callback);
      });

      if (submodulesWithCallbacks.length) {
        if (continueAuction && auctionDelay > 0) {
          // delay auction until ids are available
          delayed = true;
          var continued = false;

          var continueCallback = function continueCallback() {
            if (!continued) {
              continued = true;
              continueAuction();
            }
          };

          Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - auction delayed by ").concat(auctionDelay, " at most to fetch ids"));
          timeoutID = setTimeout(continueCallback, auctionDelay);
          processSubmoduleCallbacks(submodulesWithCallbacks, continueCallback);
        } else {
          // wait for auction complete before processing submodule callbacks
          __WEBPACK_IMPORTED_MODULE_2__src_events_js___default.a.on(__WEBPACK_IMPORTED_MODULE_5__src_constants_json___default.a.EVENTS.AUCTION_END, function auctionEndHandler() {
            __WEBPACK_IMPORTED_MODULE_2__src_events_js___default.a.off(__WEBPACK_IMPORTED_MODULE_5__src_constants_json___default.a.EVENTS.AUCTION_END, auctionEndHandler); // when syncDelay is zero, process callbacks now, otherwise delay process with a setTimeout

            if (syncDelay > 0) {
              setTimeout(function () {
                processSubmoduleCallbacks(submodulesWithCallbacks);
              }, syncDelay);
            } else {
              processSubmoduleCallbacks(submodulesWithCallbacks);
            }
          });
        }
      }
    }
  }

  if (continueAuction && !delayed) {
    continueAuction();
  }
}
/**
 * Hook is executed before adapters, but after consentManagement. Consent data is requied because
 * this module requires GDPR consent with Purpose #1 to save data locally.
 * The two main actions handled by the hook are:
 * 1. check gdpr consentData and handle submodule initialization.
 * 2. append user id data (loaded from cookied/html or from the getId method) to bids to be accessed in adapters.
 * @param {Object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */


function requestBidsHook(fn, reqBidsConfigObj) {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks(function () {
    // pass available user id data to bid adapters
    addIdDataToAdUnitBids(reqBidsConfigObj.adUnits || Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().adUnits, initializedSubmodules); // userSync.ppid should be one of the 'source' values in getUserIdsAsEids() eg pubcid.org or id5-sync.com

    var matchingUserId = ppidSource && (getUserIdsAsEids() || []).find(function (userID) {
      return userID.source === ppidSource;
    });

    if (matchingUserId && typeof Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["deepAccess"])(matchingUserId, 'uids.0.id') === 'string') {
      var ppidValue = matchingUserId.uids[0].id.replace(/[\W_]/g, '');

      if (ppidValue.length >= 32 && ppidValue.length <= 150) {
        if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isGptPubadsDefined"])()) {
          window.googletag.pubads().setPublisherProvidedId(ppidValue);
        } else {
          window.googletag = window.googletag || {};
          window.googletag.cmd = window.googletag.cmd || [];
          window.googletag.cmd.push(function () {
            window.googletag.pubads().setPublisherProvidedId(ppidValue);
          });
        }
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("User ID - Googletag Publisher Provided ID for ".concat(ppidSource, " is not between 32 and 150 characters - ").concat(ppidValue));
      }
    } // calling fn allows prebid to continue processing


    fn.call(this, reqBidsConfigObj);
  });
}
/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */

function getUserIds() {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks();
  return getCombinedSubmoduleIds(initializedSubmodules);
}
/**
 * This function will be exposed in global-name-space so that userIds stored by Prebid UserId module can be used by external codes as well.
 * Simple use case will be passing these UserIds to A9 wrapper solution
 */


function getUserIdsAsEids() {
  // initialize submodules only when undefined
  initializeSubmodulesAndExecuteCallbacks();
  return Object(__WEBPACK_IMPORTED_MODULE_7__eids_js__["b" /* createEidsArray */])(getCombinedSubmoduleIds(initializedSubmodules));
}
/**
 * This function will be exposed in global-name-space so that userIds for a source can be exposed
 * Sample use case is exposing this function to ESP
 */


function getEncryptedEidsForSource(source, encrypt, customFunction) {
  var eids = [];
  var eidsSignals = {};

  if (typeof customFunction === 'function') {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - Getting encrypted signal from custom function : ") + customFunction.name + "& source : " + source); // Publishers are expected to define a common function which will be proxy for signal function.

    var customSignals = customFunction(source);
    eidsSignals[source] = customSignals ? encryptSignals(customFunction(source)) : null; // by default encrypt using base64 to avoid JSON errors
  } else {
    // initialize signal with eids by default
    eids = Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getUserIdsAsEids();
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - Getting encrypted signal for eids : ") + JSON.stringify(eids));
    eids.forEach(function (eid) {
      eidsSignals[eid.source] = encrypt === true ? encryptSignals(eid) : eid.uids[0].id; // If encryption is enabled append version (1||) and encrypt entire object
    });
  }

  var promise = Promise.resolve(eidsSignals[source]);
  Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - Fetching encrypted eids: ") + eidsSignals[source]);
  return promise;
}

function encryptSignals(signals) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var encryptedSig = '';

  switch (version) {
    case 1:
      // Base64 Encryption
      encryptedSig = _typeof(signals) === 'object' ? window.btoa(JSON.stringify(signals)) : window.btoa(signals); // Test encryption. To be replaced with better algo

      break;

    default:
      break;
  }

  return "".concat(version, "||").concat(encryptedSig);
}

function registerSignalSources(gtag, signalSources, encrypt, customFunction) {
  gtag.encryptedSignalProviders = gtag.encryptedSignalProviders || [];
  signalSources.forEach(function (source) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - Registering signal provider: ") + source);
    gtag.encryptedSignalProviders.push({
      id: source,
      collectorFunction: function collectorFunction() {
        return Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getEncryptedEidsForSource(source, encrypt, customFunction);
      }
    });
  });
}
/**
* This function will be exposed in the global-name-space so that userIds can be refreshed after initialization.
* @param {RefreshUserIdsOptions} options
*/


function refreshUserIds(options, callback) {
  var submoduleNames = options ? options.submoduleNames : null;

  if (!submoduleNames) {
    submoduleNames = [];
  }

  initializeSubmodulesAndExecuteCallbacks(function () {
    var consentData = __WEBPACK_IMPORTED_MODULE_4__src_adapterManager_js__["gdprDataHandler"].getConsentData(); // gdpr consent with purpose one is required, otherwise exit immediately

    var _validateGdprEnforcem = validateGdprEnforcement(submodules, consentData),
        userIdModules = _validateGdprEnforcem.userIdModules,
        hasValidated = _validateGdprEnforcem.hasValidated;

    if (!hasValidated && !hasGDPRConsent(consentData)) {
      Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("".concat(MODULE_NAME, " - gdpr permission not valid for local storage or cookies, exit module"));
      return;
    } // we always want the latest consentData stored, even if we don't execute any submodules


    var storedConsentData = getStoredConsentData();
    setStoredConsentData(consentData);
    var callbackSubmodules = [];

    var _iterator = _createForOfIteratorHelper(userIdModules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var submodule = _step.value;

        if (submoduleNames.length > 0 && submoduleNames.indexOf(submodule.submodule.name) === -1) {
          continue;
        }

        Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - refreshing ").concat(submodule.submodule.name));
        populateSubmoduleId(submodule, consentData, storedConsentData, true);
        updateInitializedSubmodules(submodule);

        if (initializedSubmodules.length) {
          setPrebidServerEidPermissions(initializedSubmodules);
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isFn"])(submodule.callback)) {
          callbackSubmodules.push(submodule);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (callbackSubmodules.length > 0) {
      processSubmoduleCallbacks(callbackSubmodules);
    }

    if (callback) {
      callback();
    }
  });
}
/**
 * This hook returns updated list of submodules which are allowed to do get user id based on TCF 2 enforcement rules configured
 */


var validateGdprEnforcement = Object(__WEBPACK_IMPORTED_MODULE_6__src_hook_js__["b" /* hook */])('sync', function (submodules, consentData) {
  return {
    userIdModules: submodules,
    hasValidated: consentData && consentData.hasValidated
  };
}, 'validateGdprEnforcement');

function populateSubmoduleId(submodule, consentData, storedConsentData, forceRefresh) {
  // There are two submodule configuration types to handle: storage or value
  // 1. storage: retrieve user id data from cookie/html storage or with the submodule's getId method
  // 2. value: pass directly to bids
  if (submodule.config.storage) {
    var storedId = getStoredValue(submodule.config.storage);
    var response;
    var refreshNeeded = false;

    if (typeof submodule.config.storage.refreshInSeconds === 'number') {
      var storedDate = new Date(getStoredValue(submodule.config.storage, 'last'));
      refreshNeeded = storedDate && Date.now() - storedDate.getTime() > submodule.config.storage.refreshInSeconds * 1000;
    }

    if (!storedId || refreshNeeded || forceRefresh || !storedConsentDataMatchesConsentData(storedConsentData, consentData)) {
      // No id previously saved, or a refresh is needed, or consent has changed. Request a new id from the submodule.
      response = submodule.submodule.getId(submodule.config, consentData, storedId);
    } else if (typeof submodule.submodule.extendId === 'function') {
      // If the id exists already, give submodule a chance to decide additional actions that need to be taken
      response = submodule.submodule.extendId(submodule.config, consentData, storedId);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(response)) {
      if (response.id) {
        // A getId/extendId result assumed to be valid user id data, which should be saved to users local storage or cookies
        setStoredValue(submodule, response.id);
        storedId = response.id;
      }

      if (typeof response.callback === 'function') {
        // Save async callback to be invoked after auction
        submodule.callback = response.callback;
      }
    }

    if (storedId) {
      // cache decoded value (this is copied to every adUnit bid)
      submodule.idObj = submodule.submodule.decode(storedId, submodule.config);
    }
  } else if (submodule.config.value) {
    // cache decoded value (this is copied to every adUnit bid)
    submodule.idObj = submodule.config.value;
  } else {
    var _response = submodule.submodule.getId(submodule.config, consentData, undefined);

    if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(_response)) {
      if (typeof _response.callback === 'function') {
        submodule.callback = _response.callback;
      }

      if (_response.id) {
        submodule.idObj = submodule.submodule.decode(_response.id, submodule.config);
      }
    }
  }
}
/**
 * @param {SubmoduleContainer[]} submodules
 * @param {ConsentData} consentData
 * @returns {SubmoduleContainer[]} initialized submodules
 */


function initSubmodules(submodules, consentData) {
  // gdpr consent with purpose one is required, otherwise exit immediately
  var _validateGdprEnforcem2 = validateGdprEnforcement(submodules, consentData),
      userIdModules = _validateGdprEnforcem2.userIdModules,
      hasValidated = _validateGdprEnforcem2.hasValidated;

  if (!hasValidated && !hasGDPRConsent(consentData)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logWarn"])("".concat(MODULE_NAME, " - gdpr permission not valid for local storage or cookies, exit module"));
    return [];
  } // we always want the latest consentData stored, even if we don't execute any submodules


  var storedConsentData = getStoredConsentData();
  setStoredConsentData(consentData);
  return userIdModules.reduce(function (carry, submodule) {
    populateSubmoduleId(submodule, consentData, storedConsentData, false);
    carry.push(submodule);
    return carry;
  }, []);
}

function updateInitializedSubmodules(submodule) {
  var updated = false;

  for (var i = 0; i < initializedSubmodules.length; i++) {
    if (submodule.config.name.toLowerCase() === initializedSubmodules[i].config.name.toLowerCase()) {
      updated = true;
      initializedSubmodules[i] = submodule;
      break;
    }
  }

  if (!updated) {
    initializedSubmodules.push(submodule);
  }
}
/**
 * list of submodule configurations with valid 'storage' or 'value' obj definitions
 * * storage config: contains values for storing/retrieving User ID data in browser storage
 * * value config: object properties that are copied to bids (without saving to storage)
 * @param {SubmoduleConfig[]} configRegistry
 * @param {Submodule[]} submoduleRegistry
 * @param {string[]} activeStorageTypes
 * @returns {SubmoduleConfig[]}
 */


function getValidSubmoduleConfigs(configRegistry, submoduleRegistry, activeStorageTypes) {
  if (!Array.isArray(configRegistry)) {
    return [];
  }

  return configRegistry.reduce(function (carry, config) {
    // every submodule config obj must contain a valid 'name'
    if (!config || Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.name)) {
      return carry;
    } // Validate storage config contains 'type' and 'name' properties with non-empty string values
    // 'type' must be a value currently enabled in the browser


    if (config.storage && !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.storage.type) && !Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isEmptyStr"])(config.storage.name) && activeStorageTypes.indexOf(config.storage.type) !== -1) {
      carry.push(config);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isPlainObject"])(config.value)) {
      carry.push(config);
    } else if (!config.storage && !config.value) {
      carry.push(config);
    }

    return carry;
  }, []);
}
/**
 * update submodules by validating against existing configs and storage types
 */


function updateSubmodules() {
  var configs = getValidSubmoduleConfigs(configRegistry, submoduleRegistry, validStorageTypes);

  if (!configs.length) {
    return;
  } // do this to avoid reprocessing submodules


  var addedSubmodules = submoduleRegistry.filter(function (i) {
    return !__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default()(submodules, function (j) {
      return j.name === i.name;
    });
  }); // find submodule and the matching configuration, if found create and append a SubmoduleContainer

  submodules = addedSubmodules.map(function (i) {
    var submoduleConfig = __WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default()(configs, function (j) {
      return j.name && (j.name.toLowerCase() === i.name.toLowerCase() || i.aliasName && j.name.toLowerCase() === i.aliasName.toLowerCase());
    });
    if (submoduleConfig && i.name !== submoduleConfig.name) submoduleConfig.name = i.name;
    i.findRootDomain = findRootDomain;
    return submoduleConfig ? {
      submodule: i,
      config: submoduleConfig,
      callback: undefined,
      idObj: undefined
    } : null;
  }).filter(function (submodule) {
    return submodule !== null;
  });

  if (!addedUserIdHook && submodules.length) {
    // priority value 40 will load after consentManagement with a priority of 50
    Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().requestBids.before(requestBidsHook, 40);
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - usersync config updated for ").concat(submodules.length, " submodules: "), submodules.map(function (a) {
      return a.submodule.name;
    }));
    addedUserIdHook = true;
  }
}
/**
 * enable submodule in User ID
 * @param {Submodule} submodule
 */


function attachIdSystem(submodule) {
  if (!__WEBPACK_IMPORTED_MODULE_0_core_js_pure_features_array_find_js___default()(submoduleRegistry, function (i) {
    return i.name === submodule.name;
  })) {
    submoduleRegistry.push(submodule);
    updateSubmodules();
  }
}
/**
 * test browser support for storage config types (local storage or cookie), initializes submodules but consentManagement is required,
 * so a callback is added to fire after the consentManagement module.
 * @param {{getConfig:function}} config
 */

function init(config) {
  ppidSource = undefined;
  submodules = [];
  configRegistry = [];
  addedUserIdHook = false;
  initializedSubmodules = undefined; // list of browser enabled storage types

  validStorageTypes = [coreStorage.localStorageIsEnabled() ? LOCAL_STORAGE : null, coreStorage.cookiesAreEnabled() ? COOKIE : null].filter(function (i) {
    return i !== null;
  }); // exit immediately if opt out cookie or local storage keys exists.

  if (validStorageTypes.indexOf(COOKIE) !== -1 && coreStorage.getCookie(PBJS_USER_ID_OPTOUT_NAME)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - opt-out cookie found, exit module"));
    return;
  }

  if (validStorageTypes.indexOf(LOCAL_STORAGE) !== -1 && coreStorage.getDataFromLocalStorage(PBJS_USER_ID_OPTOUT_NAME)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["logInfo"])("".concat(MODULE_NAME, " - opt-out localStorage found, exit module"));
    return;
  } // listen for config userSyncs to be set


  config.getConfig('userSync', function (conf) {
    // Note: support for 'usersync' was dropped as part of Prebid.js 4.0
    var userSync = conf.userSync;
    ppidSource = userSync.ppid;

    if (userSync && userSync.userIds) {
      configRegistry = userSync.userIds;
      syncDelay = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isNumber"])(userSync.syncDelay) ? userSync.syncDelay : DEFAULT_SYNC_DELAY;
      auctionDelay = Object(__WEBPACK_IMPORTED_MODULE_9__src_utils_js__["isNumber"])(userSync.auctionDelay) ? userSync.auctionDelay : NO_AUCTION_DELAY;
      updateSubmodules();
    }
  }); // exposing getUserIds function in global-name-space so that userIds stored in Prebid can be used by external codes.

  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getUserIds = getUserIds;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getUserIdsAsEids = getUserIdsAsEids;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().getEncryptedEidsForSource = getEncryptedEidsForSource;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().registerSignalSources = registerSignalSources;
  Object(__WEBPACK_IMPORTED_MODULE_3__src_prebidGlobal_js__["a" /* getGlobal */])().refreshUserIds = refreshUserIds;
} // init config update listener to start the application

init(__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */]);
Object(__WEBPACK_IMPORTED_MODULE_6__src_hook_js__["c" /* module */])('userId', attachIdSystem);
window.pbjs.installedModules.push('userId');

/***/ })

},[938]);
pbjs.processQueue();