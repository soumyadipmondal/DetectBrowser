"use strict";
/* Goes in a separate interface file */
exports.__esModule = true;
exports.DetectBrowser = exports.Browser = void 0;
var Browser;
(function (Browser) {
    Browser["CHROME"] = "Chrome";
    Browser["FIREFOX"] = "Firefox";
    Browser["OPRERA"] = "Opera";
    Browser["OPR"] = "OPR";
    Browser["SAFARI"] = "Safari";
    Browser["IE"] = "MSIE";
    Browser["EDGE"] = "Edge";
    Browser["EDG"] = "Edg";
    Browser["TRIDENT"] = "rv";
})(Browser = exports.Browser || (exports.Browser = {}));
var DetectBrowser = /** @class */ (function () {
    function DetectBrowser() {
        var _this = this;
        this.differentialLoading = function () {
            for (var _i = 0, _a = _this.brwsrThreshold; _i < _a.length; _i++) {
                var brwsrDet = _a[_i];
                if (_this.ua.indexOf(brwsrDet.browser) > -1) {
                    _this.version = (_this.ua.indexOf(brwsrDet.browser + '/') > -1) ? +_this.ua.split(brwsrDet.browser + '/')[1].split('.')[0] : (_this.ua.indexOf(brwsrDet.browser + ':') > -1) ? +_this.ua.split(brwsrDet.browser + ':')[1].split('.')[0] : +_this.ua.split(brwsrDet.browser + ' ')[1].split('.')[0];
                    console.log(_this.version);
                    return (_this.version >= brwsrDet.thresholdVal) ? _this.flag = !_this.flag : _this.flag;
                }
            }
        };
        this.brwsrThreshold = [
            { browser: Browser.CHROME, thresholdVal: 61 },
            { browser: Browser.FIREFOX, thresholdVal: 60 },
            { browser: Browser.OPRERA, thresholdVal: 48 },
            { browser: Browser.OPR, thresholdVal: 48 },
            { browser: Browser.SAFARI, thresholdVal: 11 },
            { browser: Browser.IE, thresholdVal: 12 },
            { browser: Browser.TRIDENT, thresholdVal: 12 },
            { browser: Browser.EDGE, thresholdVal: 16 },
            { browser: Browser.EDG, thresholdVal: 16 }
        ];
        this.ua = window.navigator.userAgent;
        this.flag = false;
    }
    return DetectBrowser;
}());
exports.DetectBrowser = DetectBrowser;
var retVal = new DetectBrowser();
var retType = retVal.differentialLoading();
console.log(retType);
