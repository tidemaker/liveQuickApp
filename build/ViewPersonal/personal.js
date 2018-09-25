/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/personal', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/personal',{ packagerName:'fa-toolkit', packagerVersion: '1.0.4-Stable.300'})

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "个人中心"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": "个人中心"
      }
    }
  ]
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".page-title-wrap": {
    "paddingTop": "50px",
    "paddingBottom": "80px",
    "justifyContent": "center"
  },
  ".page-title": {
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "paddingRight": "40px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "color": "#bbbbbb",
    "borderBottomWidth": "2px"
  },
  ".btn": {
    "height": "80px",
    "textAlign": "center",
    "borderRadius": "5px",
    "marginRight": "60px",
    "marginLeft": "60px",
    "marginBottom": "50px",
    "color": "#ffffff",
    "fontSize": "30px",
    "backgroundColor": "#0faeff"
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _personalApi = __webpack_require__(8);

var _personalApi2 = _interopRequireDefault(_personalApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  props: {},
  onInit: function onInit() {}
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能使函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

var fetch = $app_require$("@app-module/system.fetch");
var Fly = __webpack_require__(9);
var fly = new Fly(fetch);

/* harmony default export */ __webpack_exports__["default"] = ({

  /**个人中心数据接口 write your code.... */

  /**获取用户基本信息*/
  getUserBaseInfo(params) {
    console.log('获取用户信息');
    fly.post('/user/baseInfo', params).then(function (response) {
      console.log('已获取到用户信息');
      console.log(response);
    }).catch(function (error) {
      console.log('获取用户信息出错...');
      console.log(error);
    });
  }

});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
    type: function type(ob) {
        return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
    },
    isObject: function isObject(ob, real) {
        if (real) {
            return this.type(ob) === "object";
        } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
        }
    },
    isFormData: function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    encode: function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    },
    formatParams: function formatParams(data) {
        var str = "";
        var first = true;
        var that = this;
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != "object") {
            return data;
        }
        function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);
            if (type == "array") {
                sub.forEach(function (e, i) {
                    _encode(e, path + "%5B%5D");
                });
            } else if (type == "object") {
                for (var key in sub) {
                    if (path) {
                        _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                    } else {
                        _encode(sub[key], encode(key));
                    }
                }
            } else {
                if (!first) {
                    str += "&";
                }
                first = false;
                str += path + "=" + encode(sub);
            }
        }

        _encode(data, "");
        return str;
    },

    // Do not overwrite existing attributes
    merge: function merge(a, b) {
        for (var key in b) {
            if (!a.hasOwnProperty(key)) {
                a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                this.merge(a[key], b[key]);
            }
        }
        return a;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * author: wendu
 * email: 824783146@qq.com
 **/

var util = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

//EngineWrapper can help  generating  a  http engine quickly through a adapter
function EngineWrapper(adapter) {
    var AjaxEngine = function () {
        function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout
            this.responseURL = "";
            this.responseHeaders = {};
        }

        _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
                this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
        }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
                this.readyState = state;
                this._call("onreadystatechange");
            }
        }, {
            key: "open",
            value: function open(method, url) {
                this.method = method;
                if (!url) {
                    url = location.href;
                } else {
                    url = util.trim(url);
                    if (url.indexOf("http") !== 0) {
                        // Normalize the request url
                        if (isBrowser) {
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }
                }
                this.responseURL = url;
                this._changeReadyState(1);
            }
        }, {
            key: "send",
            value: function send(arg) {
                var _this = this;

                arg = arg || null;
                if (isBrowser) {
                    var cookie = document.cookie;
                    if (cookie) {
                        this.requestHeaders.cookie = cookie;
                    }
                }
                var self = this;
                if (adapter) {
                    var request = {
                        method: self.method,
                        url: self.responseURL,
                        headers: self.requestHeaders || {},
                        body: arg
                    };
                    util.merge(request, self._options || {});
                    if (request.method === "GET") {
                        request.body = null;
                    }
                    self._changeReadyState(3);
                    var timer;
                    self.timeout = self.timeout || 0;
                    if (self.timeout > 0) {
                        timer = setTimeout(function () {
                            if (self.readyState === 3) {
                                _this._call("onloadend");
                                self._changeReadyState(0);
                                self._call("ontimeout");
                            }
                        }, self.timeout);
                    }
                    request.timeout = self.timeout;
                    adapter(request, function (response) {

                        function getAndDelete(key) {
                            var t = response[key];
                            delete response[key];
                            return t;
                        }

                        // If the request has already timeout, return
                        if (self.readyState !== 3) return;
                        clearTimeout(timer);

                        // Make sure the type of status is integer
                        self.status = getAndDelete("statusCode") - 0;

                        var responseText = getAndDelete("responseText");
                        var statusMessage = getAndDelete("statusMessage");

                        // Network error, set the status code 0
                        if (!self.status) {
                            self.statusText = responseText;
                            self._call("onerror", { msg: statusMessage });
                        } else {
                            // Parsing the response headers to array in a object,  because
                            // there may be multiple values with the same header name
                            var responseHeaders = getAndDelete("headers");
                            var headers = {};
                            for (var field in responseHeaders) {
                                var value = responseHeaders[field];
                                var key = field.toLowerCase();
                                // Is array
                                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                                    headers[key] = value;
                                } else {
                                    headers[key] = headers[key] || [];
                                    headers[key].push(value);
                                }
                            }
                            var cookies = headers["set-cookie"];
                            if (isBrowser && cookies) {
                                cookies.forEach(function (e) {
                                    // Remove the http-Only property of the  cookie
                                    // so that JavaScript can operate it.
                                    document.cookie = e.replace(/;\s*httpOnly/ig, "");
                                });
                            }
                            self.responseHeaders = headers;
                            // Set the fields of engine from response
                            self.statusText = statusMessage || "";
                            self.response = self.responseText = responseText;
                            self._response = response;
                            self._changeReadyState(4);
                            self._call("onload");
                        }
                        self._call("onloadend");
                    });
                } else {
                    console.error("Ajax require adapter");
                }
            }
        }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
                this.requestHeaders[util.trim(key)] = value;
            }
        }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
                return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
        }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
                var str = "";
                for (var key in this.responseHeaders) {
                    str += key + ":" + this.getResponseHeader(key) + "\r\n";
                }
                return str || null;
            }
        }, {
            key: "abort",
            value: function abort(msg) {
                this._changeReadyState(0);
                this._call("onerror", { msg: msg });
                this._call("onloadend");
            }
        }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
                adapter = requestAdapter;
            }
        }]);

        return AjaxEngine;
    }();

    return AjaxEngine;
}

// learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = EngineWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

var Fly = function () {
    function Fly(engine) {
        _classCallCheck(this, Fly);

        this.engine = engine || XMLHttpRequest;

        this.default = this; //For typeScript

        /**
         * Add  lock/unlock API for interceptor.
         *
         * Once an request/response interceptor is locked, the incoming request/response
         * will be added to a queue before they enter the interceptor, they will not be
         * continued  until the interceptor is unlocked.
         *
         * @param [interceptor] either is interceptors.request or interceptors.response
         */
        function wrap(interceptor) {
            var resolve;
            var reject;

            function _clear() {
                interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
                lock: function lock() {
                    if (!resolve) {
                        interceptor.p = new Promise(function (_resolve, _reject) {
                            resolve = _resolve;
                            reject = _reject;
                        });
                    }
                },
                unlock: function unlock() {
                    if (resolve) {
                        resolve();
                        _clear();
                    }
                },
                clear: function clear() {
                    if (reject) {
                        reject("cancel");
                        _clear();
                    }
                }
            });
        }

        var interceptors = this.interceptors = {
            response: {
                use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                }
            },
            request: {
                use: function use(handler) {
                    this.handler = handler;
                }
            }
        };

        var irq = interceptors.request;
        var irp = interceptors.response;
        wrap(irp);
        wrap(irq);

        this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {},
            parseJson: true, // Convert response data to JSON object automatically.
            withCredentials: false
        };
    }

    _createClass(Fly, [{
        key: "request",
        value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
                if (utils.isObject(url)) {
                    options = url;
                    url = options.url;
                }
                options = options || {};
                options.headers = options.headers || {};

                function isPromise(p) {
                    // some  polyfill implementation of Promise may be not standard,
                    // so, we test by duck-typing
                    return p && p.then && p.catch;
                }

                /**
                 * If the request/response interceptor has been locked，
                 * the new request/response will enter a queue. otherwise, it will be performed directly.
                 * @param [promise] if the promise exist, means the interceptor is  locked.
                 * @param [callback]
                 */
                function enqueueIfLocked(promise, callback) {
                    if (promise) {
                        promise.then(function () {
                            callback();
                        });
                    } else {
                        callback();
                    }
                }

                // make the http request
                function makeRequest(options) {
                    data = options.body;
                    // Normalize the request url
                    url = utils.trim(options.url);
                    var baseUrl = utils.trim(options.baseURL || "");
                    if (!url && isBrowser && !baseUrl) url = location.href;
                    if (url.indexOf("http") !== 0) {
                        var isAbsolute = url[0] === "/";
                        if (!baseUrl && isBrowser) {
                            var arr = location.pathname.split("/");
                            arr.pop();
                            baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                        }
                        if (baseUrl[baseUrl.length - 1] !== "/") {
                            baseUrl += "/";
                        }
                        url = baseUrl + (isAbsolute ? url.substr(1) : url);
                        if (isBrowser) {

                            // Normalize the url which contains the ".." or ".", such as
                            // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }

                    var responseType = utils.trim(options.responseType || "");
                    var isGet = options.method === "GET";
                    var dataType = utils.type(data);
                    var params = options.params || {};

                    // merge url params when the method is "GET" (data is object)
                    if (isGet && dataType === "object") {
                        params = utils.merge(data, params);
                    }
                    // encode params to String
                    params = utils.formatParams(params);

                    // save url params
                    var _params = [];
                    if (params) {
                        _params.push(params);
                    }
                    // Add data to url params when the method is "GET" (data is String)
                    if (isGet && data && dataType === "string") {
                        _params.push(data);
                    }

                    // make the final url
                    if (_params.length > 0) {
                        url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                    }

                    engine.open(options.method, url);

                    // try catch for ie >=9
                    try {
                        engine.withCredentials = !!options.withCredentials;
                        engine.timeout = options.timeout || 0;
                        if (responseType !== "stream") {
                            engine.responseType = responseType;
                        }
                    } catch (e) {}

                    var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase];

                    // default content type
                    var _contentType = "application/x-www-form-urlencoded";
                    // If the request data is json object, transforming it  to json string,
                    // and set request content-type to "json". In browser,  the data will
                    // be sent as RequestBody instead of FormData
                    if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                        data = utils.formatParams(data);
                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                        _contentType = 'application/json;charset=utf-8';
                        data = JSON.stringify(data);
                    }
                    //If user doesn't set content-type, set default.
                    if (!customContentType) {
                        options.headers[contentType] = _contentType;
                    }

                    for (var k in options.headers) {
                        if (k === contentType && utils.isFormData(data)) {
                            // Delete the content-type, Let the browser set it
                            delete options.headers[k];
                        } else {
                            try {
                                // In browser environment, some header fields are readonly,
                                // write will cause the exception .
                                engine.setRequestHeader(k, options.headers[k]);
                            } catch (e) {}
                        }
                    }

                    function onresult(handler, data, type) {
                        enqueueIfLocked(responseInterceptor.p, function () {
                            if (handler) {
                                //如果失败，添加请求信息
                                if (type) {
                                    data.request = options;
                                }
                                var ret = handler.call(responseInterceptor, data, Promise);
                                data = ret === undefined ? data : ret;
                            }
                            if (!isPromise(data)) {
                                data = Promise[type === 0 ? "resolve" : "reject"](data);
                            }
                            data.then(function (d) {
                                resolve(d);
                            }).catch(function (e) {
                                reject(e);
                            });
                        });
                    }

                    function onerror(e) {
                        e.engine = engine;
                        onresult(responseInterceptor.onerror, e, -1);
                    }

                    function Err(msg, status) {
                        this.message = msg;
                        this.status = status;
                    }

                    engine.onload = function () {
                        // The xhr of IE9 has not response field
                        var response = engine.response || engine.responseText;
                        if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                        // Some third engine implementation may transform the response text to json object automatically,
                        // so we should test the type of response before transforming it
                        && !utils.isObject(response)) {
                            response = JSON.parse(response);
                        }

                        var headers = engine.responseHeaders;
                        // In browser
                        if (!headers) {
                            headers = {};
                            var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                            items.pop();
                            items.forEach(function (e) {
                                if (!e) return;
                                var key = e.split(":")[0];
                                headers[key] = engine.getResponseHeader(key);
                            });
                        }
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var data = { data: response, headers: headers, status: status, statusText: statusText };
                        // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                        utils.merge(data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                            data.engine = engine;
                            data.request = options;
                            onresult(responseInterceptor.handler, data, 0);
                        } else {
                            var e = new Err(statusText, status);
                            e.response = data;
                            onerror(e);
                        }
                    };

                    engine.onerror = function (e) {
                        onerror(new Err(e.msg || "Network Error", 0));
                    };

                    engine.ontimeout = function () {
                        onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options;
                    setTimeout(function () {
                        engine.send(isGet ? null : data);
                    }, 0);
                }

                enqueueIfLocked(requestInterceptor.p, function () {
                    utils.merge(options, _this.config);
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url = utils.trim(url || "");
                    options.method = options.method.toUpperCase();
                    options.url = url;
                    var ret = options;
                    if (requestInterceptorHandler) {
                        ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise(ret)) {
                        ret = Promise.resolve(ret);
                    }
                    ret.then(function (d) {
                        //if options continue
                        if (d === options) {
                            makeRequest(d);
                        } else {
                            resolve(d);
                        }
                    }, function (err) {
                        reject(err);
                    });
                });
            });
            promise.engine = engine;
            return promise;
        }
    }, {
        key: "all",
        value: function all(promises) {
            return Promise.all(promises);
        }
    }, {
        key: "spread",
        value: function spread(callback) {
            return function (arr) {
                return callback.apply(null, arr);
            };
        }
    }]);

    return Fly;
}();

//For typeScript


Fly.default = Fly;

["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
    Fly.prototype[e] = function (url, data, option) {
        return this.request(url, data, utils.merge({ method: e }, option));
    };
});
        ["lock", "unlock", "clear"].forEach(function (e) {
            Fly.prototype[e] = function () {
                this.interceptors.request[e]();
            };
        });
// Learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = Fly;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//hap adapter
module.exports = function (fetch) {
    return function (request, responseCallback) {
        request.data = request.body;
        request.header = request.headers;
        request.complete = function (ret) {
            if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== "object") {
                ret = {
                    code: 0,
                    msg: ret
                };
            }
            responseCallback({
                statusCode: ret.code || 0,
                responseText: ret.data,
                headers: ret.headers,
                statusMessage: ret.msg
            });
        };
        fetch.fetch(request);
    };
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//quick app entry
var Fly = __webpack_require__(2);
var EngineWrapper = __webpack_require__(1);
var adapter = __webpack_require__(4);
module.exports = function (fetch) {
    var hapEngine = EngineWrapper(adapter(fetch));
    return new Fly(hapEngine);
};

/***/ })
/******/ ]);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFZpZXdQZXJzb25hbFxccGVyc29uYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDZjMWEzMzg4OTc1M2IxOGYzODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4PzAxYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eD83M2NkIiwid2VicGFjazovLy8uL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXg/ZGUzYyIsIndlYnBhY2s6Ly8vLi9mZXRjaC9wZXJzb25hbEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmx5aW8vZGlzdC9ucG0vaGFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNmMxYTMzODg5NzUzYjE4ZjM4OCIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtanNvbi1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS10ZW1wbGF0ZS1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3BlcnNvbmFsLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6XFxcXGRhdGFcXFxccHJvZ3JhbVxcXFxndWFuZ2hlXFxcXHF1aWNrYXBwXFxcXHNyY1xcXFxWaWV3UGVyc29uYWxcXFxccGVyc29uYWwudXghZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzpcXFxcZGF0YVxcXFxwcm9ncmFtXFxcXGd1YW5naGVcXFxccXVpY2thcHBcXFxcc3JjXFxcXFZpZXdQZXJzb25hbFxcXFxwZXJzb25hbC51eCEuL3BlcnNvbmFsLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1zY3JpcHQtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtYWNjZXNzLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnByZXNldHM9ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2lucz1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9wZXJzb25hbC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3BlcnNvbmFsJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9wZXJzb25hbCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcxLjAuNC1TdGFibGUuMzAwJ30pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4XG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4quS6uuS4reW/g1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IFwi5Liq5Lq65Lit5b+DXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIucGFnZS10aXRsZS13cmFwXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiODBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5wYWdlLXRpdGxlXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImNvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIlxuICB9LFxuICBcIi5idG5cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMGZhZWZmXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzovZGF0YS9wcm9ncmFtL2d1YW5naGUvcXVpY2thcHAvc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eCFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1nOi9kYXRhL3Byb2dyYW0vZ3VhbmdoZS9xdWlja2FwcC9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4IS4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXsndXNlIHN0cmljdCc7XG5cbnZhciBfc3lzdGVtID0gJGFwcF9yZXF1aXJlJCgnQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdCcpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeXN0ZW0pO1xuXG52YXIgX3BlcnNvbmFsQXBpID0gcmVxdWlyZSgnLi4vLi4vZmV0Y2gvcGVyc29uYWxBcGknKTtcblxudmFyIF9wZXJzb25hbEFwaTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJzb25hbEFwaSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczoge30sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge31cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0cz1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZwbHVnaW5zPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbnZhciBmZXRjaCA9ICRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIik7XG52YXIgRmx5ID0gcmVxdWlyZShcImZseWlvL2Rpc3QvbnBtL2hhcFwiKTtcbnZhciBmbHkgPSBuZXcgRmx5KGZldGNoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8qKuS4quS6uuS4reW/g+aVsOaNruaOpeWPoyB3cml0ZSB5b3VyIGNvZGUuLi4uICovXG5cbiAgLyoq6I635Y+W55So5oi35Z+65pys5L+h5oGvKi9cbiAgZ2V0VXNlckJhc2VJbmZvKHBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfkv6Hmga8nKTtcbiAgICBmbHkucG9zdCgnL3VzZXIvYmFzZUluZm8nLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygn5bey6I635Y+W5Yiw55So5oi35L+h5oGvJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi35L+h5oGv5Ye66ZSZLi4uJyk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZldGNoL3BlcnNvbmFsQXBpLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XHJcblx0ZWxzZSB7XHJcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcclxuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcclxuXHR9XHJcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xyXG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxyXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcclxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXHJcbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXHJcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xyXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcclxuLyoqKioqKi8gXHRcdH1cclxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXHJcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XHJcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxyXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcclxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cclxuLyoqKioqKi8gXHRcdH07XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxyXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcclxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcclxuLyoqKioqKi8gXHR9XHJcbi8qKioqKiovXHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xyXG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xyXG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xyXG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxyXG4vKioqKioqLyBcdFx0XHR9KTtcclxuLyoqKioqKi8gXHRcdH1cclxuLyoqKioqKi8gXHR9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cclxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcclxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcclxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcclxuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XHJcbi8qKioqKiovIFx0fTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xyXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xyXG4vKioqKioqLyB9KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyAoW1xyXG4vKiAwICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgdHlwZTogZnVuY3Rpb24gdHlwZShvYikge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2IpLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfSxcclxuICAgIGlzT2JqZWN0OiBmdW5jdGlvbiBpc09iamVjdChvYiwgcmVhbCkge1xyXG4gICAgICAgIGlmIChyZWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUob2IpID09PSBcIm9iamVjdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYiAmJiAodHlwZW9mIG9iID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYikpID09PSAnb2JqZWN0JztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNGb3JtRGF0YTogZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YTtcclxuICAgIH0sXHJcbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csICcnKTtcclxuICAgIH0sXHJcbiAgICBlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcclxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkucmVwbGFjZSgvJTQwL2dpLCAnQCcpLnJlcGxhY2UoLyUzQS9naSwgJzonKS5yZXBsYWNlKC8lMjQvZywgJyQnKS5yZXBsYWNlKC8lMkMvZ2ksICcsJykucmVwbGFjZSgvJTIwL2csICcrJykucmVwbGFjZSgvJTVCL2dpLCAnWycpLnJlcGxhY2UoLyU1RC9naSwgJ10nKTtcclxuICAgIH0sXHJcbiAgICBmb3JtYXRQYXJhbXM6IGZ1bmN0aW9uIGZvcm1hdFBhcmFtcyhkYXRhKSB7XHJcbiAgICAgICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpICE9IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIF9lbmNvZGUoc3ViLCBwYXRoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbmNvZGUgPSB0aGF0LmVuY29kZTtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGF0LnR5cGUoc3ViKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJhcnJheVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWIuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9lbmNvZGUoZSwgcGF0aCArIFwiJTVCJTVEXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2VuY29kZShzdWJba2V5XSwgcGF0aCArIFwiJTVCXCIgKyBlbmNvZGUoa2V5KSArIFwiJTVEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lbmNvZGUoc3ViW2tleV0sIGVuY29kZShrZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiJlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBwYXRoICsgXCI9XCIgKyBlbmNvZGUoc3ViKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2VuY29kZShkYXRhLCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBEbyBub3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGF0dHJpYnV0ZXNcclxuICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcclxuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGFba2V5XSA9IGJba2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzT2JqZWN0KGJba2V5XSwgMSkgJiYgdGhpcy5pc09iamVjdChhW2tleV0sIDEpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lcmdlKGFba2V5XSwgYltrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAxICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcbmZ1bmN0aW9uIEtFRVAoXyxjYil7Y2IoKTt9XHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xyXG5cclxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG4vKlxyXG4gKiBhdXRob3I6IHdlbmR1XHJcbiAqIGVtYWlsOiA4MjQ3ODMxNDZAcXEuY29tXHJcbiAqKi9cclxuXHJcbnZhciB1dGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbi8vRW5naW5lV3JhcHBlciBjYW4gaGVscCAgZ2VuZXJhdGluZyAgYSAgaHR0cCBlbmdpbmUgcXVpY2tseSB0aHJvdWdoIGEgYWRhcHRlclxyXG5mdW5jdGlvbiBFbmdpbmVXcmFwcGVyKGFkYXB0ZXIpIHtcclxuICAgIHZhciBBamF4RW5naW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFqYXhFbmdpbmUoKSB7XHJcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBamF4RW5naW5lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gMDsgLy8gMCBzdGFuZHMgZm9yIG5vIHRpbWVvdXRcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZVVSTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VIZWFkZXJzID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfY3JlYXRlQ2xhc3MoQWpheEVuZ2luZSwgW3tcclxuICAgICAgICAgICAga2V5OiBcIl9jYWxsXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FsbChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW25hbWVdICYmIHRoaXNbbmFtZV0uYXBwbHkodGhpcywgW10uc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJfY2hhbmdlUmVhZHlTdGF0ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NoYW5nZVJlYWR5U3RhdGUoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiBcIm9wZW5cIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4obWV0aG9kLCB1cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1dGlsLnRyaW0odXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgcmVxdWVzdCB1cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHQuaHJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VVUkwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VSZWFkeVN0YXRlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6IFwic2VuZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChhcmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJnID0gYXJnIHx8IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29va2llKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEhlYWRlcnMuY29va2llID0gY29va2llO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmIChhZGFwdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogc2VsZi5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VsZi5yZXNwb25zZVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc2VsZi5yZXF1ZXN0SGVhZGVycyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYXJnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB1dGlsLm1lcmdlKHJlcXVlc3QsIHNlbGYuX29wdGlvbnMgfHwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jaGFuZ2VSZWFkeVN0YXRlKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lcjtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXQgPSBzZWxmLnRpbWVvdXQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lb3V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucmVhZHlTdGF0ZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9jYWxsKFwib25sb2FkZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NoYW5nZVJlYWR5U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbChcIm9udGltZW91dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC50aW1lb3V0ID0gc2VsZi50aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIocmVxdWVzdCwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRBbmREZWxldGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzcG9uc2Vba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBoYXMgYWxyZWFkeSB0aW1lb3V0LCByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucmVhZHlTdGF0ZSAhPT0gMykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0eXBlIG9mIHN0YXR1cyBpcyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdHVzID0gZ2V0QW5kRGVsZXRlKFwic3RhdHVzQ29kZVwiKSAtIDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gZ2V0QW5kRGVsZXRlKFwicmVzcG9uc2VUZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IGdldEFuZERlbGV0ZShcInN0YXR1c01lc3NhZ2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXR3b3JrIGVycm9yLCBzZXQgdGhlIHN0YXR1cyBjb2RlIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbChcIm9uZXJyb3JcIiwgeyBtc2c6IHN0YXR1c01lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzaW5nIHRoZSByZXNwb25zZSBoZWFkZXJzIHRvIGFycmF5IGluIGEgb2JqZWN0LCAgYmVjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUgbWF5IGJlIG11bHRpcGxlIHZhbHVlcyB3aXRoIHRoZSBzYW1lIGhlYWRlciBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gZ2V0QW5kRGVsZXRlKFwiaGVhZGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiByZXNwb25zZUhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXNwb25zZUhlYWRlcnNbZmllbGRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBmaWVsZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElzIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih2YWx1ZSkpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5XSA9IGhlYWRlcnNba2V5XSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trZXldLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb29raWVzID0gaGVhZGVyc1tcInNldC1jb29raWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIGNvb2tpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBodHRwLU9ubHkgcHJvcGVydHkgb2YgdGhlICBjb29raWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gdGhhdCBKYXZhU2NyaXB0IGNhbiBvcGVyYXRlIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlLnJlcGxhY2UoLztcXHMqaHR0cE9ubHkvaWcsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNwb25zZUhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBmaWVsZHMgb2YgZW5naW5lIGZyb20gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHN0YXR1c01lc3NhZ2UgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzcG9uc2UgPSBzZWxmLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jaGFuZ2VSZWFkeVN0YXRlKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbChcIm9ubG9hZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsKFwib25sb2FkZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQWpheCByZXF1aXJlIGFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJzZXRSZXF1ZXN0SGVhZGVyXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdEhlYWRlcnNbdXRpbC50cmltKGtleSldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJnZXRSZXNwb25zZUhlYWRlclwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXIoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMucmVzcG9uc2VIZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSB8fCBcIlwiKS50b1N0cmluZygpIHx8IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJnZXRBbGxSZXNwb25zZUhlYWRlcnNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbFJlc3BvbnNlSGVhZGVycygpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucmVzcG9uc2VIZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGtleSArIFwiOlwiICsgdGhpcy5nZXRSZXNwb25zZUhlYWRlcihrZXkpICsgXCJcXHJcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIgfHwgbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiBcImFib3J0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydChtc2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVJlYWR5U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKFwib25lcnJvclwiLCB7IG1zZzogbXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbChcIm9ubG9hZGVuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICBrZXk6IFwic2V0QWRhcHRlclwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QWRhcHRlcihyZXF1ZXN0QWRhcHRlcikge1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHJlcXVlc3RBZGFwdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gQWpheEVuZ2luZTtcclxuICAgIH0oKTtcclxuXHJcbiAgICByZXR1cm4gQWpheEVuZ2luZTtcclxufVxyXG5cclxuLy8gbGVhcm4gbW9yZSBhYm91dCBrZWVwLWxvYWRlcjogaHR0cHM6Ly9naXRodWIuY29tL3dlbmR1eC9rZWVwLWxvYWRlclxyXG47XHJcbm1vZHVsZS5leHBvcnRzID0gRW5naW5lV3JhcHBlcjtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAyICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcbmZ1bmN0aW9uIEtFRVAoXyxjYil7Y2IoKTt9XHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxudmFyIEZseSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZseShlbmdpbmUpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx5KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmUgfHwgWE1MSHR0cFJlcXVlc3Q7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXM7IC8vRm9yIHR5cGVTY3JpcHRcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkICBsb2NrL3VubG9jayBBUEkgZm9yIGludGVyY2VwdG9yLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogT25jZSBhbiByZXF1ZXN0L3Jlc3BvbnNlIGludGVyY2VwdG9yIGlzIGxvY2tlZCwgdGhlIGluY29taW5nIHJlcXVlc3QvcmVzcG9uc2VcclxuICAgICAgICAgKiB3aWxsIGJlIGFkZGVkIHRvIGEgcXVldWUgYmVmb3JlIHRoZXkgZW50ZXIgdGhlIGludGVyY2VwdG9yLCB0aGV5IHdpbGwgbm90IGJlXHJcbiAgICAgICAgICogY29udGludWVkICB1bnRpbCB0aGUgaW50ZXJjZXB0b3IgaXMgdW5sb2NrZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gW2ludGVyY2VwdG9yXSBlaXRoZXIgaXMgaW50ZXJjZXB0b3JzLnJlcXVlc3Qgb3IgaW50ZXJjZXB0b3JzLnJlc3BvbnNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gd3JhcChpbnRlcmNlcHRvcikge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZTtcclxuICAgICAgICAgICAgdmFyIHJlamVjdDtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jbGVhcigpIHtcclxuICAgICAgICAgICAgICAgIGludGVyY2VwdG9yLnAgPSByZXNvbHZlID0gcmVqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMubWVyZ2UoaW50ZXJjZXB0b3IsIHtcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZ1bmN0aW9uIGxvY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyY2VwdG9yLnAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUsIF9yZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IF9yZWplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bmxvY2s6IGZ1bmN0aW9uIHVubG9jaygpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJjYW5jZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW50ZXJjZXB0b3JzID0gdGhpcy5pbnRlcmNlcHRvcnMgPSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2U6IGZ1bmN0aW9uIHVzZShoYW5kbGVyLCBvbmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IgPSBvbmVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICB1c2U6IGZ1bmN0aW9uIHVzZShoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBpcnEgPSBpbnRlcmNlcHRvcnMucmVxdWVzdDtcclxuICAgICAgICB2YXIgaXJwID0gaW50ZXJjZXB0b3JzLnJlc3BvbnNlO1xyXG4gICAgICAgIHdyYXAoaXJwKTtcclxuICAgICAgICB3cmFwKGlycSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGJhc2VVUkw6IFwiXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxyXG4gICAgICAgICAgICBwYXJzZUpzb246IHRydWUsIC8vIENvbnZlcnQgcmVzcG9uc2UgZGF0YSB0byBKU09OIG9iamVjdCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2xhc3MoRmx5LCBbe1xyXG4gICAgICAgIGtleTogXCJyZXF1ZXN0XCIsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgZW5naW5lID0gbmV3IHRoaXMuZW5naW5lKCk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IFwiQ29udGVudC1UeXBlXCI7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZUxvd2VyQ2FzZSA9IGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSB0aGlzLmludGVyY2VwdG9ycztcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvciA9IGludGVyY2VwdG9ycy5yZXF1ZXN0O1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VJbnRlcmNlcHRvciA9IGludGVyY2VwdG9ycy5yZXNwb25zZTtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckhhbmRsZXIgPSByZXF1ZXN0SW50ZXJjZXB0b3IuaGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gb3B0aW9ucy51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc1Byb21pc2UocCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgIHBvbHlmaWxsIGltcGxlbWVudGF0aW9uIG9mIFByb21pc2UgbWF5IGJlIG5vdCBzdGFuZGFyZCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbywgd2UgdGVzdCBieSBkdWNrLXR5cGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwICYmIHAudGhlbiAmJiBwLmNhdGNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSWYgdGhlIHJlcXVlc3QvcmVzcG9uc2UgaW50ZXJjZXB0b3IgaGFzIGJlZW4gbG9ja2Vk77yMXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgbmV3IHJlcXVlc3QvcmVzcG9uc2Ugd2lsbCBlbnRlciBhIHF1ZXVlLiBvdGhlcndpc2UsIGl0IHdpbGwgYmUgcGVyZm9ybWVkIGRpcmVjdGx5LlxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIFtwcm9taXNlXSBpZiB0aGUgcHJvbWlzZSBleGlzdCwgbWVhbnMgdGhlIGludGVyY2VwdG9yIGlzICBsb2NrZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gW2NhbGxiYWNrXVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlbnF1ZXVlSWZMb2NrZWQocHJvbWlzZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgaHR0cCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtYWtlUmVxdWVzdChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG9wdGlvbnMuYm9keTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHJlcXVlc3QgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXRpbHMudHJpbShvcHRpb25zLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSB1dGlscy50cmltKG9wdGlvbnMuYmFzZVVSTCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXVybCAmJiBpc0Jyb3dzZXIgJiYgIWJhc2VVcmwpIHVybCA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBYnNvbHV0ZSA9IHVybFswXSA9PT0gXCIvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZVVybCAmJiBpc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgKGlzQWJzb2x1dGUgPyBcIlwiIDogYXJyLmpvaW4oXCIvXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZVVybFtiYXNlVXJsLmxlbmd0aCAtIDFdICE9PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVVybCArPSBcIi9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBiYXNlVXJsICsgKGlzQWJzb2x1dGUgPyB1cmwuc3Vic3RyKDEpIDogdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgdXJsIHdoaWNoIGNvbnRhaW5zIHRoZSBcIi4uXCIgb3IgXCIuXCIsIHN1Y2ggYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cDovL3h4LmNvbS9hYS9iYi8uLi8uLi94eFwiIHRvIFwiaHR0cDovL3h4LmNvbS94eFwiIC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0LmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZVR5cGUgPSB1dGlscy50cmltKG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0dldCA9IG9wdGlvbnMubWV0aG9kID09PSBcIkdFVFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHV0aWxzLnR5cGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG9wdGlvbnMucGFyYW1zIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZXJnZSB1cmwgcGFyYW1zIHdoZW4gdGhlIG1ldGhvZCBpcyBcIkdFVFwiIChkYXRhIGlzIG9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNHZXQgJiYgZGF0YVR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdXRpbHMubWVyZ2UoZGF0YSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5jb2RlIHBhcmFtcyB0byBTdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB1dGlscy5mb3JtYXRQYXJhbXMocGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB1cmwgcGFyYW1zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXJhbXMucHVzaChwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZGF0YSB0byB1cmwgcGFyYW1zIHdoZW4gdGhlIG1ldGhvZCBpcyBcIkdFVFwiIChkYXRhIGlzIFN0cmluZylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNHZXQgJiYgZGF0YSAmJiBkYXRhVHlwZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGFyYW1zLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSBmaW5hbCB1cmxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3BhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgX3BhcmFtcy5qb2luKFwiJlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgY2F0Y2ggZm9yIGllID49OVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUudGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlICE9PSBcInN0cmVhbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbUNvbnRlbnRUeXBlID0gb3B0aW9ucy5oZWFkZXJzW2NvbnRlbnRUeXBlXSB8fCBvcHRpb25zLmhlYWRlcnNbY29udGVudFR5cGVMb3dlckNhc2VdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGNvbnRlbnQgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfY29udGVudFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGRhdGEgaXMganNvbiBvYmplY3QsIHRyYW5zZm9ybWluZyBpdCAgdG8ganNvbiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHNldCByZXF1ZXN0IGNvbnRlbnQtdHlwZSB0byBcImpzb25cIi4gSW4gYnJvd3NlciwgIHRoZSBkYXRhIHdpbGxcclxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBzZW50IGFzIFJlcXVlc3RCb2R5IGluc3RlYWQgb2YgRm9ybURhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMudHJpbSgoY3VzdG9tQ29udGVudFR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSkgPT09IF9jb250ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdXRpbHMuZm9ybWF0UGFyYW1zKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzRm9ybURhdGEoZGF0YSkgJiYgW1wib2JqZWN0XCIsIFwiYXJyYXlcIl0uaW5kZXhPZih1dGlscy50eXBlKGRhdGEpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9JZiB1c2VyIGRvZXNuJ3Qgc2V0IGNvbnRlbnQtdHlwZSwgc2V0IGRlZmF1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXN0b21Db250ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbY29udGVudFR5cGVdID0gX2NvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT09IGNvbnRlbnRUeXBlICYmIHV0aWxzLmlzRm9ybURhdGEoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgY29udGVudC10eXBlLCBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBicm93c2VyIGVudmlyb25tZW50LCBzb21lIGhlYWRlciBmaWVsZHMgYXJlIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdyaXRlIHdpbGwgY2F1c2UgdGhlIGV4Y2VwdGlvbiAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9ucmVzdWx0KGhhbmRsZXIsIGRhdGEsIHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5xdWV1ZUlmTG9ja2VkKHJlc3BvbnNlSW50ZXJjZXB0b3IucCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenOWksei0pe+8jOa3u+WKoOivt+axguS/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVxdWVzdCA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSBoYW5kbGVyLmNhbGwocmVzcG9uc2VJbnRlcmNlcHRvciwgZGF0YSwgUHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJldCA9PT0gdW5kZWZpbmVkID8gZGF0YSA6IHJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm9taXNlKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFByb21pc2VbdHlwZSA9PT0gMCA/IFwicmVzb2x2ZVwiIDogXCJyZWplY3RcIl0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRoZW4oZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmVycm9yKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ucmVzdWx0KHJlc3BvbnNlSW50ZXJjZXB0b3Iub25lcnJvciwgZSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRXJyKG1zZywgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgeGhyIG9mIElFOSBoYXMgbm90IHJlc3BvbnNlIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVuZ2luZS5yZXNwb25zZSB8fCBlbmdpbmUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgb3B0aW9ucy5wYXJzZUpzb24gJiYgKGVuZ2luZS5nZXRSZXNwb25zZUhlYWRlcihjb250ZW50VHlwZSkgfHwgXCJcIikuaW5kZXhPZihcImpzb25cIikgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgdGhpcmQgZW5naW5lIGltcGxlbWVudGF0aW9uIG1heSB0cmFuc2Zvcm0gdGhlIHJlc3BvbnNlIHRleHQgdG8ganNvbiBvYmplY3QgYXV0b21hdGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHRlc3QgdGhlIHR5cGUgb2YgcmVzcG9uc2UgYmVmb3JlIHRyYW5zZm9ybWluZyBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhdXRpbHMuaXNPYmplY3QocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IGVuZ2luZS5yZXNwb25zZUhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGJyb3dzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSAoZW5naW5lLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8IFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGUuc3BsaXQoXCI6XCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5XSA9IGVuZ2luZS5nZXRSZXNwb25zZUhlYWRlcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IGVuZ2luZS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0gZW5naW5lLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0geyBkYXRhOiByZXNwb25zZSwgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBzdGF0dXMsIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIF9yZXNwb25zZSBmaWxlZCBvZiBlbmdpbmUgaXMgc2V0IGluICBhZGFwdGVyIHdoaWNoIGJlIGNhbGxlZCBpbiBlbmdpbmUtd3JhcHBlci5qc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5tZXJnZShkYXRhLCBlbmdpbmUuX3Jlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVxdWVzdCA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbnJlc3VsdChyZXNwb25zZUludGVyY2VwdG9yLmhhbmRsZXIsIGRhdGEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyKHN0YXR1c1RleHQsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZXJyb3IobmV3IEVycihlLm1zZyB8fCBcIk5ldHdvcmsgRXJyb3JcIiwgMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZXJyb3IobmV3IEVycihcInRpbWVvdXQgWyBcIiArIGVuZ2luZS50aW1lb3V0ICsgXCJtcyBdXCIsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZW5kKGlzR2V0ID8gbnVsbCA6IGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVucXVldWVJZkxvY2tlZChyZXF1ZXN0SW50ZXJjZXB0b3IucCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLm1lcmdlKG9wdGlvbnMsIF90aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tjb250ZW50VHlwZV0gPSBoZWFkZXJzW2NvbnRlbnRUeXBlXSB8fCBoZWFkZXJzW2NvbnRlbnRUeXBlTG93ZXJDYXNlXSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2NvbnRlbnRUeXBlTG93ZXJDYXNlXTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBkYXRhIHx8IG9wdGlvbnMuYm9keTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1dGlscy50cmltKHVybCB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldCA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RJbnRlcmNlcHRvckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmVxdWVzdEludGVyY2VwdG9ySGFuZGxlci5jYWxsKHJlcXVlc3RJbnRlcmNlcHRvciwgb3B0aW9ucywgUHJvbWlzZSkgfHwgb3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1Byb21pc2UocmV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBQcm9taXNlLnJlc29sdmUocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4oZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBvcHRpb25zIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkID09PSBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlUmVxdWVzdChkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcm9taXNlLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogXCJhbGxcIixcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogXCJzcHJlYWRcIixcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIEZseTtcclxufSgpO1xyXG5cclxuLy9Gb3IgdHlwZVNjcmlwdFxyXG5cclxuXHJcbkZseS5kZWZhdWx0ID0gRmx5O1xyXG5cclxuW1wiZ2V0XCIsIFwicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBGbHkucHJvdG90eXBlW2VdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgb3B0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIGRhdGEsIHV0aWxzLm1lcmdlKHsgbWV0aG9kOiBlIH0sIG9wdGlvbikpO1xyXG4gICAgfTtcclxufSk7XHJcbiAgICAgICAgW1wibG9ja1wiLCBcInVubG9ja1wiLCBcImNsZWFyXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgRmx5LnByb3RvdHlwZVtlXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3RbZV0oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuLy8gTGVhcm4gbW9yZSBhYm91dCBrZWVwLWxvYWRlcjogaHR0cHM6Ly9naXRodWIuY29tL3dlbmR1eC9rZWVwLWxvYWRlclxyXG47XHJcbm1vZHVsZS5leHBvcnRzID0gRmx5O1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDMgKi8sXHJcbi8qIDQgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xyXG5cclxuLy9oYXAgYWRhcHRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmZXRjaCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmVxdWVzdC5kYXRhID0gcmVxdWVzdC5ib2R5O1xyXG4gICAgICAgIHJlcXVlc3QuaGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzO1xyXG4gICAgICAgIHJlcXVlc3QuY29tcGxldGUgPSBmdW5jdGlvbiAocmV0KSB7XHJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHJldCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHJldCkpICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6IHJldFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZUNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJldC5jb2RlIHx8IDAsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVRleHQ6IHJldC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmV0LmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiByZXQubXNnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2guZmV0Y2gocmVxdWVzdCk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDUgKi8sXHJcbi8qIDYgKi8sXHJcbi8qIDcgKi8sXHJcbi8qIDggKi8sXHJcbi8qIDkgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy9xdWljayBhcHAgZW50cnlcclxudmFyIEZseSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XHJcbnZhciBFbmdpbmVXcmFwcGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcclxudmFyIGFkYXB0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmZXRjaCkge1xyXG4gICAgdmFyIGhhcEVuZ2luZSA9IEVuZ2luZVdyYXBwZXIoYWRhcHRlcihmZXRjaCkpO1xyXG4gICAgcmV0dXJuIG5ldyBGbHkoaGFwRW5naW5lKTtcclxufTtcclxuXHJcbi8qKiovIH0pXHJcbi8qKioqKiovIF0pO1xyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbHlpby9kaXN0L25wbS9oYXAuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==