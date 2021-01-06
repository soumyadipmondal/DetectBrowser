"use strict";
exports.__esModule = true;
exports.DetectBrowse = void 0;
var DetectBrowse = /** @class */ (function () {
    function DetectBrowse() {
    }
    DetectBrowse.prototype.differentiaLoading = function () {
        var _a;
        var Browser;
        (function (Browser) {
            Browser["CHROME"] = "Chrome";
            Browser["FIREFOX"] = "Firefox";
            Browser["OPRERA"] = "Opera";
            Browser["OPR"] = "OPR";
            Browser["SAFARI"] = "Safari";
            Browser["IE"] = "MSIE";
            Browser["EDGE"] = "Edg";
            Browser["TRIDENT"] = "Trident";
        })(Browser || (Browser = {}));
        var brwsrThresold = (_a = {},
            _a[Browser.CHROME] = '61',
            _a[Browser.FIREFOX] = '60',
            _a[Browser.OPRERA] = '48',
            _a[Browser.OPR] = '48',
            _a[Browser.SAFARI] = '11',
            _a[Browser.IE] = '11',
            _a[Browser.TRIDENT] = '8',
            _a[Browser.EDGE] = '16',
            _a);
        var ua = window.navigator.userAgent;
        var version = [];
        var flag = false;
        var _loop_1 = function (property) {
            if (ua.indexOf("" + property) > -1) {
                version.push(+ua.split(property + "/")[1].split('.')[0]);
                version.forEach(function (number) {
                    if (number >= +("" + brwsrThresold[property]))
                        flag = true;
                });
            }
        };
        for (var property in brwsrThresold) {
            _loop_1(property);
        }
        if (flag) {
            return true;
        }
        else {
            return false;
        }
    };
    return DetectBrowse;
}());
exports.DetectBrowse = DetectBrowse;
var retVal = new DetectBrowse();
var retType = retVal.differentiaLoading();
console.log(retType);
