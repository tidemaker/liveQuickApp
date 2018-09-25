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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {
        "index": "0"
      },
      "classList": [
        "tabs"
      ],
      "events": {
        "change": "changeTabactive"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "我创建的"
              },
              "classList": [
                "tab-text"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "我购买的"
              },
              "classList": [
                "tab-text"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "我的关注"
              },
              "classList": [
                "tab-text"
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-container"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "createTitle"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "../Common/images/mail.png",
                        "alt": ""
                      },
                      "classList": [
                        "mailClass"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "恭喜你获得免费试用，请点击新建直播"
                      }
                    },
                    {
                      "type": "input",
                      "attr": {
                        "type": "button",
                        "value": "+新建直播"
                      },
                      "classList": [
                        "createBtn"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "noData"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "../Common/images/noData.png"
                      },
                      "classList": [
                        "noDataImg"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-container"
              ],
              "children": [
                {
                  "type": "list",
                  "attr": {
                    "id": "list",
                    "scrollpage": function () {return this.scrollPage}
                  },
                  "classList": [
                    "list"
                  ],
                  "events": {
                    "scrollbottom": "scrollbottom",
                    "scrolltop": "scrolltop",
                    "scroll": "scroll"
                  },
                  "id": "list",
                  "children": [
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "listItem"
                      },
                      "classList": [
                        "classItem"
                      ],
                      "repeat": function () {return this.listData},
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "../Common/logo.png",
                            "alt": ""
                          },
                          "classList": [
                            "classImg"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "rightContent"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.title}
                              },
                              "classList": [
                                "classTitle"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.detail}
                              },
                              "classList": [
                                "classDetail"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.playTime}
                              },
                              "classList": [
                                "classStatus"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "list-item",
                      "attr": {
                        "type": "loadMore"
                      },
                      "classList": [
                        "load-more"
                      ],
                      "shown": function () {return this.loadMore},
                      "children": [
                        {
                          "type": "progress",
                          "attr": {
                            "type": "circular"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "加载更多"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-container"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  ".container .tabs": {
    "backgroundColor": "#ffffff",
    "height": "100%",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        }
      ]
    }
  },
  ".container .tabs .tab-bar": {
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        }
      ]
    }
  },
  ".container .tabs .tab-bar .tab-text": {
    "textAlign": "center",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "#CECECE",
    "borderRightColor": "#CECECE",
    "borderBottomColor": "#CECECE",
    "borderLeftColor": "#CECECE",
    "display": "flex",
    "width": "33%",
    "height": "100px",
    "zIndex": 10,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-text"
        }
      ]
    },
    "borderTopWidth:active": "0px",
    "borderRightWidth:active": "0px",
    "borderBottomWidth:active": "1px",
    "borderLeftWidth:active": "0px",
    "borderStyle:active": "solid",
    "borderTopColor:active": "#ffac30",
    "borderRightColor:active": "#ffac30",
    "borderBottomColor:active": "#ffac30",
    "borderLeftColor:active": "#ffac30"
  },
  ".container .tabs .tab-content": {
    "height": "100%",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container": {
    "display": "flex",
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .createTitle": {
    "width": "100%",
    "alignItems": "center",
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "createTitle"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .createTitle .mailClass": {
    "width": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "createTitle"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "mailClass"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .createTitle .createBtn": {
    "fontSize": "25px",
    "color": "#000000",
    "borderRadius": "0px",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "0px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "#FF0000",
    "borderRightColor": "#FF0000",
    "borderBottomColor": "#FF0000",
    "borderLeftColor": "#FF0000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "createTitle"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "createBtn"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .noData": {
    "width": "100%",
    "height": "80%",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "noData"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .noData .noDataImg": {
    "marginTop": "100px",
    "width": "500px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "noData"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "noDataImg"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .item-content": {
    "flexDirection": "column",
    "paddingBottom": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-content"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .list": {
    "width": "100%",
    "display": "flex",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .list .classItem": {
    "display": "flex",
    "alignItems": "center",
    "height": "300px",
    "paddingTop": "10px",
    "paddingRight": "0px",
    "paddingBottom": "10px",
    "paddingLeft": "0px",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "#CECECE",
    "borderRightColor": "#CECECE",
    "borderBottomColor": "#CECECE",
    "borderLeftColor": "#CECECE",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "classItem"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .list .classItem .classImg": {
    "height": "300px",
    "resizeMode": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "classItem"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "classImg"
        }
      ]
    }
  },
  ".container .tabs .tab-content .item-container .list .classItem .rightContent": {
    "display": "flex",
    "height": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "classItem"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rightContent"
        }
      ]
    }
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	data: {
		listData: [{ title: 'a', picUrl: '', detail: "dddd", playTime: '正在直播', guest: 10, price: 1 }],
		loadMore: null,
		scrollPage: false
	},
	onInit: function onInit() {},
	changeTabactive: function changeTabactive(e) {},
	scrollbottom: function scrollbottom() {},
	scrolltop: function scrolltop() {},
	scroll: function scroll(e) {}
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "首页内容"
      }
    }
  ]
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15)
__webpack_require__(16)
__webpack_require__(17)
var $app_template$ = __webpack_require__(18)
var $app_style$ = __webpack_require__(19)
var $app_script$ = __webpack_require__(20)

$app_define$('@app-component/main', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/main',{ packagerName:'fa-toolkit', packagerVersion: '1.0.4-Stable.300'})

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(3)
var $app_script$ = __webpack_require__(4)

$app_define$('@app-component/home-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
})


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(0)
var $app_style$ = __webpack_require__(1)
var $app_script$ = __webpack_require__(2)

$app_define$('@app-component/live-broadcast-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/personal-page', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "group-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "group-content"
              ],
              "children": [
                {
                  "type": "home-page",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "group-content"
              ],
              "children": [
                {
                  "type": "live-broadcast-page",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "group-content"
              ],
              "children": [
                {
                  "type": "personal-page",
                  "attr": {}
                }
              ]
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "foot-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-icon"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "../Common/images/tab_home.svg"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "首页"
                  },
                  "classList": [
                    "tab-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-icon"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "../Common/images/tab_running.svg"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "我的直播"
                  },
                  "classList": [
                    "tab-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-icon"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "../Common/images/tab_user.svg"
                      }
                    }
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "个人中心"
                  },
                  "classList": [
                    "tab-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "height": "100%",
    "backgroundColor": "#F8F8FF",
    "flex": 1,
    "flexDirection": "column"
  },
  ".container .group-container": {
    "flex": 1,
    "flexDirection": "column",
    "lineHeight": "50px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "group-container"
        }
      ]
    }
  },
  ".container .group-container .group-content": {
    "flexDirection": "column",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "group-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "group-content"
        }
      ]
    }
  },
  ".container .foot-container": {
    "display": "flex",
    "width": "100%",
    "height": "120px",
    "backgroundColor": "#ffffff",
    "bottom": "0px",
    "left": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "foot-container"
        }
      ]
    }
  },
  ".container .foot-container .tab-item": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "foot-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        }
      ]
    }
  },
  ".container .foot-container .tab-item .tab-icon": {
    "width": "50px",
    "height": "50px",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "foot-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-icon"
        }
      ]
    }
  },
  ".container .foot-container .tab-item .tab-text": {
    "height": "80px",
    "lineHeight": "80px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "foot-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-text"
        }
      ]
    },
    "color:active": "#F8B700"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFZpZXdNYWluXFxtYWluLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDM1M2FiNzI0OGI1ZmU5MzFmZjliIiwid2VicGFjazovLy8uL3NyYy9WaWV3QnJvYWRjYXN0L2xpdmVCcm9hZGNhc3QudXg/MGQ4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld0Jyb2FkY2FzdC9saXZlQnJvYWRjYXN0LnV4PzU5YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdCcm9hZGNhc3QvbGl2ZUJyb2FkY2FzdC51eD9kMDIwIiwid2VicGFjazovLy8uL3NyYy9WaWV3SG9tZS9ob21lLnV4PzJiNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdIb21lL2hvbWUudXg/NDFmMCIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4PzAxYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eD83M2NkIiwid2VicGFjazovLy8uL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXg/ZGUzYyIsIndlYnBhY2s6Ly8vLi9mZXRjaC9wZXJzb25hbEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmx5aW8vZGlzdC9ucG0vaGFwLmpzIiwid2VicGFjazovLy8uL3NyYy9WaWV3TWFpbi9tYWluLnV4Iiwid2VicGFjazovLy8uL3NyYy9WaWV3SG9tZS9ob21lLnV4Iiwid2VicGFjazovLy8uL3NyYy9WaWV3QnJvYWRjYXN0L2xpdmVCcm9hZGNhc3QudXg/ODY2MiIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4Iiwid2VicGFjazovLy8uL3NyYy9WaWV3TWFpbi9tYWluLnV4P2Q4ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdNYWluL21haW4udXg/MzFiYyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld01haW4vbWFpbi51eD81ZDZmIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNTNhYjcyNDhiNWZlOTMxZmY5YiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0YWJzXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImluZGV4XCI6IFwiMFwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYnNcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogXCJjaGFuZ2VUYWJhY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1iYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5oiR5Yib5bu655qEXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaIkei0reS5sOeahFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmiJHnmoTlhbPms6hcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YWItdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItY29udGVudFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vQ29tbW9uL2ltYWdlcy9tYWlsLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWlsQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaBreWWnOS9oOiOt+W+l+WFjei0ueivleeUqO+8jOivt+eCueWHu+aWsOW7uuebtOaSrVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiK+aWsOW7uuebtOaSrVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZUJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJub0RhdGFcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIuLi9Db21tb24vaW1hZ2VzL25vRGF0YS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJub0RhdGFJbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNjcm9sbHBhZ2VcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNjcm9sbFBhZ2V9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImxpc3RcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzY3JvbGxib3R0b21cIjogXCJzY3JvbGxib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY3JvbGx0b3BcIjogXCJzY3JvbGx0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY3JvbGxcIjogXCJzY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdERhdGF9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vQ29tbW9uL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0Q29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmRldGFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NEZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGxheVRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibG9hZE1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkLW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubG9hZE1vcmV9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNpcmN1bGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLliqDovb3mm7TlpJpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9zcmMvVmlld0Jyb2FkY2FzdC9saXZlQnJvYWRjYXN0LnV4XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lciAudGFic1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFic1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWJhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFic1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWJhclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWJhciAudGFiLXRleHRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjQ0VDRUNFXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0NFQ0VDRVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjQ0VDRUNFXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjQ0VDRUNFXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwid2lkdGhcIjogXCIzMyVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1iYXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi10ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJib3JkZXJUb3BXaWR0aDphY3RpdmVcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGg6YWN0aXZlXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aDphY3RpdmVcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aDphY3RpdmVcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclN0eWxlOmFjdGl2ZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvcjphY3RpdmVcIjogXCIjZmZhYzMwXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yOmFjdGl2ZVwiOiBcIiNmZmFjMzBcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yOmFjdGl2ZVwiOiBcIiNmZmFjMzBcIixcbiAgICBcImJvcmRlckxlZnRDb2xvcjphY3RpdmVcIjogXCIjZmZhYzMwXCJcbiAgfSxcbiAgXCIuY29udGFpbmVyIC50YWJzIC50YWItY29udGVudFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFic1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250YWluZXIgLnRhYnMgLnRhYi1jb250ZW50IC5pdGVtLWNvbnRhaW5lclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1jb250ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWNvbnRlbnQgLml0ZW0tY29udGFpbmVyIC5jcmVhdGVUaXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1jb250ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY3JlYXRlVGl0bGVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250YWluZXIgLnRhYnMgLnRhYi1jb250ZW50IC5pdGVtLWNvbnRhaW5lciAuY3JlYXRlVGl0bGUgLm1haWxDbGFzc1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFic1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWNvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIml0ZW0tY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjcmVhdGVUaXRsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwibWFpbENsYXNzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuY29udGFpbmVyIC50YWJzIC50YWItY29udGVudCAuaXRlbS1jb250YWluZXIgLmNyZWF0ZVRpdGxlIC5jcmVhdGVCdG5cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIwcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNGRjAwMDBcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0ZGMDAwMFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWJzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNyZWF0ZVRpdGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjcmVhdGVCdG5cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250YWluZXIgLnRhYnMgLnRhYi1jb250ZW50IC5pdGVtLWNvbnRhaW5lciAubm9EYXRhXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODAlXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWJzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIm5vRGF0YVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWNvbnRlbnQgLml0ZW0tY29udGFpbmVyIC5ub0RhdGEgLm5vRGF0YUltZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMDBweFwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWJzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIm5vRGF0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwibm9EYXRhSW1nXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuY29udGFpbmVyIC50YWJzIC50YWItY29udGVudCAuaXRlbS1jb250YWluZXIgLml0ZW0tY29udGVudFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWJzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIml0ZW0tY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWNvbnRlbnQgLml0ZW0tY29udGFpbmVyIC5saXN0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1jb250ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwibGlzdFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWNvbnRlbnQgLml0ZW0tY29udGFpbmVyIC5saXN0IC5jbGFzc0l0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjMwMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNDRUNFQ0VcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjQ0VDRUNFXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNDRUNFQ0VcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNDRUNFQ0VcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFic1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWNvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcIml0ZW0tY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJsaXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjbGFzc0l0ZW1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250YWluZXIgLnRhYnMgLnRhYi1jb250ZW50IC5pdGVtLWNvbnRhaW5lciAubGlzdCAuY2xhc3NJdGVtIC5jbGFzc0ltZ1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMDBweFwiLFxuICAgIFwicmVzaXplTW9kZVwiOiBcImNvdmVyXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1jb250ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJpdGVtLWNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwibGlzdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY2xhc3NJdGVtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjbGFzc0ltZ1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAudGFicyAudGFiLWNvbnRlbnQgLml0ZW0tY29udGFpbmVyIC5saXN0IC5jbGFzc0l0ZW0gLnJpZ2h0Q29udGVudFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWJzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiaXRlbS1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImxpc3RcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNsYXNzSXRlbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwicmlnaHRDb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzovZGF0YS9wcm9ncmFtL2d1YW5naGUvcXVpY2thcHAvc3JjL1ZpZXdCcm9hZGNhc3QvbGl2ZUJyb2FkY2FzdC51eCFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/dHlwZT1zYXNzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6L2RhdGEvcHJvZ3JhbS9ndWFuZ2hlL3F1aWNrYXBwL3NyYy9WaWV3QnJvYWRjYXN0L2xpdmVCcm9hZGNhc3QudXghLi9zcmMvVmlld0Jyb2FkY2FzdC9saXZlQnJvYWRjYXN0LnV4XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0Jyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkYXRhOiB7XG5cdFx0bGlzdERhdGE6IFt7IHRpdGxlOiAnYScsIHBpY1VybDogJycsIGRldGFpbDogXCJkZGRkXCIsIHBsYXlUaW1lOiAn5q2j5Zyo55u05pKtJywgZ3Vlc3Q6IDEwLCBwcmljZTogMSB9XSxcblx0XHRsb2FkTW9yZTogbnVsbCxcblx0XHRzY3JvbGxQYWdlOiBmYWxzZVxuXHR9LFxuXHRvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHt9LFxuXHRjaGFuZ2VUYWJhY3RpdmU6IGZ1bmN0aW9uIGNoYW5nZVRhYmFjdGl2ZShlKSB7fSxcblx0c2Nyb2xsYm90dG9tOiBmdW5jdGlvbiBzY3JvbGxib3R0b20oKSB7fSxcblx0c2Nyb2xsdG9wOiBmdW5jdGlvbiBzY3JvbGx0b3AoKSB7fSxcblx0c2Nyb2xsOiBmdW5jdGlvbiBzY3JvbGwoZSkge31cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0cz1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZwbHVnaW5zPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NyYy9WaWV3QnJvYWRjYXN0L2xpdmVCcm9hZGNhc3QudXhcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIummlumhteWGheWuuVwiXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vc3JjL1ZpZXdIb21lL2hvbWUudXhcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczoge30sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge31cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfpobXpnaJWTeWvueixoeS4reWxnuaAp2RhdGHkuI3lj6/kuI5wdWJsaWMsIHByb3RlY3RlZCwgcHJpdmF0ZeWQjOaXtuWtmOWcqO+8jOivt+S9v+eUqHB1YmxpY+abv+S7o2RhdGHvvIEnKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2Fybign6aG16Z2iVk3lr7nosaHkuK3nmoTlsZ7mgKcnICsgYWNjICsgJ+eahOWAvOS4jeiDveS9v+WHveaVsO+8jOivt+S9v+eUqOWvueixoScpO1xuICAgIH1cbiAgfSk7XG59fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliP3ByZXNldHNbXT1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcHJlc2V0cz1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZwbHVnaW5zPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NyYy9WaWV3SG9tZS9ob21lLnV4XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogXCLkuKrkurrkuK3lv4NcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4quS6uuS4reW/g1wiXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eFxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnBhZ2UtdGl0bGUtd3JhcFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjgwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucGFnZS10aXRsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJjb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCJcbiAgfSxcbiAgXCIuYnRuXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjYwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzBmYWVmZlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6L2RhdGEvcHJvZ3JhbS9ndWFuZ2hlL3F1aWNrYXBwL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXghZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzovZGF0YS9wcm9ncmFtL2d1YW5naGUvcXVpY2thcHAvc3JjL1ZpZXdQZXJzb25hbC9wZXJzb25hbC51eCEuL3NyYy9WaWV3UGVyc29uYWwvcGVyc29uYWwudXhcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7J3VzZSBzdHJpY3QnO1xuXG52YXIgX3N5c3RlbSA9ICRhcHBfcmVxdWlyZSQoJ0BhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHQnKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3lzdGVtKTtcblxudmFyIF9wZXJzb25hbEFwaSA9IHJlcXVpcmUoJy4uLy4uL2ZldGNoL3BlcnNvbmFsQXBpJyk7XG5cbnZhciBfcGVyc29uYWxBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyc29uYWxBcGkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IHt9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHt9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcign6aG16Z2iVk3lr7nosaHkuK3lsZ7mgKdkYXRh5LiN5Y+v5LiOcHVibGljLCBwcm90ZWN0ZWQsIHByaXZhdGXlkIzml7blrZjlnKjvvIzor7fkvb/nlKhwdWJsaWPmm7/ku6NkYXRh77yBJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdolZN5a+56LGh5Lit55qE5bGe5oCnJyArIGFjYyArICfnmoTlgLzkuI3og73kvb/lh73mlbDvvIzor7fkvb/nlKjlr7nosaEnKTtcbiAgICB9XG4gIH0pO1xufX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYj9wcmVzZXRzW109ZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnByZXNldHM9ZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZW52JnBsdWdpbnNbXT1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmcGx1Z2lucz1lOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2pzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG52YXIgZmV0Y2ggPSAkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmZldGNoXCIpO1xudmFyIEZseSA9IHJlcXVpcmUoXCJmbHlpby9kaXN0L25wbS9oYXBcIik7XG52YXIgZmx5ID0gbmV3IEZseShmZXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvKirkuKrkurrkuK3lv4PmlbDmja7mjqXlj6Mgd3JpdGUgeW91ciBjb2RlLi4uLiAqL1xuXG4gIC8qKuiOt+WPlueUqOaIt+WfuuacrOS/oeaBryovXG4gIGdldFVzZXJCYXNlSW5mbyhwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi35L+h5oGvJyk7XG4gICAgZmx5LnBvc3QoJy91c2VyL2Jhc2VJbmZvJywgcGFyYW1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2coJ+W3suiOt+WPluWIsOeUqOaIt+S/oeaBrycpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+S/oeaBr+WHuumUmS4uLicpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mZXRjaC9wZXJzb25hbEFwaS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XHJcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXHJcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG5cdGVsc2Uge1xyXG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XHJcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XHJcblx0fVxyXG59KSh0aGlzLCBmdW5jdGlvbigpIHtcclxucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcclxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxyXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxyXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcclxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XHJcbi8qKioqKiovIFx0XHR9XHJcbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxyXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xyXG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcclxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXHJcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XHJcbi8qKioqKiovIFx0XHR9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXHJcbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcclxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXHJcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XHJcbi8qKioqKiovIFx0fVxyXG4vKioqKioqL1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcclxuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcclxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcclxuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcclxuLyoqKioqKi8gXHRcdFx0fSk7XHJcbi8qKioqKiovIFx0XHR9XHJcbi8qKioqKiovIFx0fTtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XHJcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XHJcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XHJcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XHJcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xyXG4vKioqKioqLyBcdH07XHJcbi8qKioqKiovXHJcbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xyXG4vKioqKioqL1xyXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcclxuLyoqKioqKi9cclxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcclxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcclxuLyoqKioqKi8gfSlcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqKioqKi8gKFtcclxuLyogMCAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHR5cGU6IGZ1bmN0aW9uIHR5cGUob2IpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIH0sXHJcbiAgICBpc09iamVjdDogZnVuY3Rpb24gaXNPYmplY3Qob2IsIHJlYWwpIHtcclxuICAgICAgICBpZiAocmVhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlKG9iKSA9PT0gXCJvYmplY3RcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb2IgJiYgKHR5cGVvZiBvYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2IpKSA9PT0gJ29iamVjdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzRm9ybURhdGE6IGZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgRm9ybURhdGE7XHJcbiAgICB9LFxyXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyU0MC9naSwgJ0AnKS5yZXBsYWNlKC8lM0EvZ2ksICc6JykucmVwbGFjZSgvJTI0L2csICckJykucmVwbGFjZSgvJTJDL2dpLCAnLCcpLnJlcGxhY2UoLyUyMC9nLCAnKycpLnJlcGxhY2UoLyU1Qi9naSwgJ1snKS5yZXBsYWNlKC8lNUQvZ2ksICddJyk7XHJcbiAgICB9LFxyXG4gICAgZm9ybWF0UGFyYW1zOiBmdW5jdGlvbiBmb3JtYXRQYXJhbXMoZGF0YSkge1xyXG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSAhPSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBfZW5jb2RlKHN1YiwgcGF0aCkge1xyXG4gICAgICAgICAgICB2YXIgZW5jb2RlID0gdGhhdC5lbmNvZGU7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gdGhhdC50eXBlKHN1Yik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFwiYXJyYXlcIikge1xyXG4gICAgICAgICAgICAgICAgc3ViLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZW5jb2RlKGUsIHBhdGggKyBcIiU1QiU1RFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lbmNvZGUoc3ViW2tleV0sIHBhdGggKyBcIiU1QlwiICsgZW5jb2RlKGtleSkgKyBcIiU1RFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZW5jb2RlKHN1YltrZXldLCBlbmNvZGUoa2V5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIiZcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gcGF0aCArIFwiPVwiICsgZW5jb2RlKHN1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9lbmNvZGUoZGF0YSwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRG8gbm90IG92ZXJ3cml0ZSBleGlzdGluZyBhdHRyaWJ1dGVzXHJcbiAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XHJcbiAgICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBhW2tleV0gPSBiW2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc09iamVjdChiW2tleV0sIDEpICYmIHRoaXMuaXNPYmplY3QoYVtrZXldLCAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZShhW2tleV0sIGJba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKioqLyB9KSxcclxuLyogMSAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5mdW5jdGlvbiBLRUVQKF8sY2Ipe2NiKCk7fVxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxuLypcclxuICogYXV0aG9yOiB3ZW5kdVxyXG4gKiBlbWFpbDogODI0NzgzMTQ2QHFxLmNvbVxyXG4gKiovXHJcblxyXG52YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4vL0VuZ2luZVdyYXBwZXIgY2FuIGhlbHAgIGdlbmVyYXRpbmcgIGEgIGh0dHAgZW5naW5lIHF1aWNrbHkgdGhyb3VnaCBhIGFkYXB0ZXJcclxuZnVuY3Rpb24gRW5naW5lV3JhcHBlcihhZGFwdGVyKSB7XHJcbiAgICB2YXIgQWpheEVuZ2luZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBamF4RW5naW5lKCkge1xyXG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheEVuZ2luZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IDA7IC8vIDAgc3RhbmRzIGZvciBubyB0aW1lb3V0XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VVUkwgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2NyZWF0ZUNsYXNzKEFqYXhFbmdpbmUsIFt7XHJcbiAgICAgICAgICAgIGtleTogXCJfY2FsbFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhbGwobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXSAmJiB0aGlzW25hbWVdLmFwcGx5KHRoaXMsIFtdLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6IFwiX2NoYW5nZVJlYWR5U3RhdGVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jaGFuZ2VSZWFkeVN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGwoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJvcGVuXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKG1ldGhvZCwgdXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gbG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXRpbC50cmltKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHJlcXVlc3QgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0LmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlVVJMID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlUmVhZHlTdGF0ZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiBcInNlbmRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoYXJnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGFyZyA9IGFyZyB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb2tpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXJzLmNvb2tpZSA9IGNvb2tpZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRhcHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHNlbGYubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHNlbGYucmVzcG9uc2VVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHNlbGYucmVxdWVzdEhlYWRlcnMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGFyZ1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5tZXJnZShyZXF1ZXN0LCBzZWxmLl9vcHRpb25zIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5ib2R5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2hhbmdlUmVhZHlTdGF0ZSgzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lb3V0ID0gc2VsZi50aW1lb3V0IHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudGltZW91dCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlYWR5U3RhdGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2FsbChcIm9ubG9hZGVuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jaGFuZ2VSZWFkeVN0YXRlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGwoXCJvbnRpbWVvdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QudGltZW91dCA9IHNlbGYudGltZW91dDtcclxuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyKHJlcXVlc3QsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QW5kRGVsZXRlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByZXNwb25zZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaGFzIGFscmVhZHkgdGltZW91dCwgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlYWR5U3RhdGUgIT09IDMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdHlwZSBvZiBzdGF0dXMgaXMgaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXR1cyA9IGdldEFuZERlbGV0ZShcInN0YXR1c0NvZGVcIikgLSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IGdldEFuZERlbGV0ZShcInJlc3BvbnNlVGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1c01lc3NhZ2UgPSBnZXRBbmREZWxldGUoXCJzdGF0dXNNZXNzYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV0d29yayBlcnJvciwgc2V0IHRoZSBzdGF0dXMgY29kZSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGwoXCJvbmVycm9yXCIsIHsgbXNnOiBzdGF0dXNNZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2luZyB0aGUgcmVzcG9uc2UgaGVhZGVycyB0byBhcnJheSBpbiBhIG9iamVjdCwgIGJlY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIG1heSBiZSBtdWx0aXBsZSB2YWx1ZXMgd2l0aCB0aGUgc2FtZSBoZWFkZXIgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9IGdldEFuZERlbGV0ZShcImhlYWRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZmllbGQgaW4gcmVzcG9uc2VIZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzcG9uc2VIZWFkZXJzW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZmllbGQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodmFsdWUpKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2tleV0gPSBoZWFkZXJzW2tleV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5XS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29va2llcyA9IGhlYWRlcnNbXCJzZXQtY29va2llXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBjb29raWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaHR0cC1Pbmx5IHByb3BlcnR5IG9mIHRoZSAgY29va2llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgSmF2YVNjcmlwdCBjYW4gb3BlcmF0ZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZS5yZXBsYWNlKC87XFxzKmh0dHBPbmx5L2lnLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzcG9uc2VIZWFkZXJzID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgZmllbGRzIG9mIGVuZ2luZSBmcm9tIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzdGF0dXNNZXNzYWdlIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc3BvbnNlID0gc2VsZi5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2hhbmdlUmVhZHlTdGF0ZSg0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGwoXCJvbmxvYWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbChcIm9ubG9hZGVuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFqYXggcmVxdWlyZSBhZGFwdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6IFwic2V0UmVxdWVzdEhlYWRlclwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXJzW3V0aWwudHJpbShrZXkpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6IFwiZ2V0UmVzcG9uc2VIZWFkZXJcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnJlc3BvbnNlSGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gfHwgXCJcIikudG9TdHJpbmcoKSB8fCBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6IFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnJlc3BvbnNlSGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBrZXkgKyBcIjpcIiArIHRoaXMuZ2V0UmVzcG9uc2VIZWFkZXIoa2V5KSArIFwiXFxyXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyIHx8IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogXCJhYm9ydFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQobXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VSZWFkeVN0YXRlKDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbChcIm9uZXJyb3JcIiwgeyBtc2c6IG1zZyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGwoXCJvbmxvYWRlbmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAga2V5OiBcInNldEFkYXB0ZXJcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFkYXB0ZXIocmVxdWVzdEFkYXB0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSByZXF1ZXN0QWRhcHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEFqYXhFbmdpbmU7XHJcbiAgICB9KCk7XHJcblxyXG4gICAgcmV0dXJuIEFqYXhFbmdpbmU7XHJcbn1cclxuXHJcbi8vIGxlYXJuIG1vcmUgYWJvdXQga2VlcC1sb2FkZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZW5kdXgva2VlcC1sb2FkZXJcclxuO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZVdyYXBwZXI7XHJcblxyXG4vKioqLyB9KSxcclxuLyogMiAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5mdW5jdGlvbiBLRUVQKF8sY2Ipe2NiKCk7fVxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbnZhciBGbHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGbHkoZW5naW5lKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZseSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lIHx8IFhNTEh0dHBSZXF1ZXN0O1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzOyAvL0ZvciB0eXBlU2NyaXB0XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCAgbG9jay91bmxvY2sgQVBJIGZvciBpbnRlcmNlcHRvci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIE9uY2UgYW4gcmVxdWVzdC9yZXNwb25zZSBpbnRlcmNlcHRvciBpcyBsb2NrZWQsIHRoZSBpbmNvbWluZyByZXF1ZXN0L3Jlc3BvbnNlXHJcbiAgICAgICAgICogd2lsbCBiZSBhZGRlZCB0byBhIHF1ZXVlIGJlZm9yZSB0aGV5IGVudGVyIHRoZSBpbnRlcmNlcHRvciwgdGhleSB3aWxsIG5vdCBiZVxyXG4gICAgICAgICAqIGNvbnRpbnVlZCAgdW50aWwgdGhlIGludGVyY2VwdG9yIGlzIHVubG9ja2VkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIFtpbnRlcmNlcHRvcl0gZWl0aGVyIGlzIGludGVyY2VwdG9ycy5yZXF1ZXN0IG9yIGludGVyY2VwdG9ycy5yZXNwb25zZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHdyYXAoaW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgdmFyIHJlc29sdmU7XHJcbiAgICAgICAgICAgIHZhciByZWplY3Q7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBfY2xlYXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmNlcHRvci5wID0gcmVzb2x2ZSA9IHJlamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLm1lcmdlKGludGVyY2VwdG9yLCB7XHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmdW5jdGlvbiBsb2NrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmNlcHRvci5wID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlLCBfcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gX3Jlc29sdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QgPSBfcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5sb2NrOiBmdW5jdGlvbiB1bmxvY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiY2FuY2VsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGludGVyY2VwdG9ycyA9IHRoaXMuaW50ZXJjZXB0b3JzID0ge1xyXG4gICAgICAgICAgICByZXNwb25zZToge1xyXG4gICAgICAgICAgICAgICAgdXNlOiBmdW5jdGlvbiB1c2UoaGFuZGxlciwgb25lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yID0gb25lcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgdXNlOiBmdW5jdGlvbiB1c2UoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgaXJxID0gaW50ZXJjZXB0b3JzLnJlcXVlc3Q7XHJcbiAgICAgICAgdmFyIGlycCA9IGludGVyY2VwdG9ycy5yZXNwb25zZTtcclxuICAgICAgICB3cmFwKGlycCk7XHJcbiAgICAgICAgd3JhcChpcnEpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBiYXNlVVJMOiBcIlwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcclxuICAgICAgICAgICAgdGltZW91dDogMCxcclxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgICAgICAgcGFyc2VKc29uOiB0cnVlLCAvLyBDb252ZXJ0IHJlc3BvbnNlIGRhdGEgdG8gSlNPTiBvYmplY3QgYXV0b21hdGljYWxseS5cclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKEZseSwgW3tcclxuICAgICAgICBrZXk6IFwicmVxdWVzdFwiLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0KHVybCwgZGF0YSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVuZ2luZSA9IG5ldyB0aGlzLmVuZ2luZSgpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSBcIkNvbnRlbnQtVHlwZVwiO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudFR5cGVMb3dlckNhc2UgPSBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJjZXB0b3JzID0gdGhpcy5pbnRlcmNlcHRvcnM7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW50ZXJjZXB0b3IgPSBpbnRlcmNlcHRvcnMucmVxdWVzdDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlSW50ZXJjZXB0b3IgPSBpbnRlcmNlcHRvcnMucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW50ZXJjZXB0b3JIYW5kbGVyID0gcmVxdWVzdEludGVyY2VwdG9yLmhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNQcm9taXNlKHApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzb21lICBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlIG1heSBiZSBub3Qgc3RhbmRhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28sIHdlIHRlc3QgYnkgZHVjay10eXBpbmdcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCAmJiBwLnRoZW4gJiYgcC5jYXRjaDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIElmIHRoZSByZXF1ZXN0L3Jlc3BvbnNlIGludGVyY2VwdG9yIGhhcyBiZWVuIGxvY2tlZO+8jFxyXG4gICAgICAgICAgICAgICAgICogdGhlIG5ldyByZXF1ZXN0L3Jlc3BvbnNlIHdpbGwgZW50ZXIgYSBxdWV1ZS4gb3RoZXJ3aXNlLCBpdCB3aWxsIGJlIHBlcmZvcm1lZCBkaXJlY3RseS5cclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBbcHJvbWlzZV0gaWYgdGhlIHByb21pc2UgZXhpc3QsIG1lYW5zIHRoZSBpbnRlcmNlcHRvciBpcyAgbG9ja2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIFtjYWxsYmFja11cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZW5xdWV1ZUlmTG9ja2VkKHByb21pc2UsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIGh0dHAgcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWFrZVJlcXVlc3Qob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBvcHRpb25zLmJvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsaXplIHRoZSByZXF1ZXN0IHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHV0aWxzLnRyaW0ob3B0aW9ucy51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlVXJsID0gdXRpbHMudHJpbShvcHRpb25zLmJhc2VVUkwgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwgJiYgaXNCcm93c2VyICYmICFiYXNlVXJsKSB1cmwgPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWJzb2x1dGUgPSB1cmxbMF0gPT09IFwiL1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VVcmwgJiYgaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCArIChpc0Fic29sdXRlID8gXCJcIiA6IGFyci5qb2luKFwiL1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VVcmxbYmFzZVVybC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VVcmwgKz0gXCIvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gYmFzZVVybCArIChpc0Fic29sdXRlID8gdXJsLnN1YnN0cigxKSA6IHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHVybCB3aGljaCBjb250YWlucyB0aGUgXCIuLlwiIG9yIFwiLlwiLCBzdWNoIGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHA6Ly94eC5jb20vYWEvYmIvLi4vLi4veHhcIiB0byBcImh0dHA6Ly94eC5jb20veHhcIiAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdC5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VUeXBlID0gdXRpbHMudHJpbShvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNHZXQgPSBvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSB1dGlscy50eXBlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBvcHRpb25zLnBhcmFtcyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2UgdXJsIHBhcmFtcyB3aGVuIHRoZSBtZXRob2QgaXMgXCJHRVRcIiAoZGF0YSBpcyBvYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzR2V0ICYmIGRhdGFUeXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHV0aWxzLm1lcmdlKGRhdGEsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVuY29kZSBwYXJhbXMgdG8gU3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdXRpbHMuZm9ybWF0UGFyYW1zKHBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdXJsIHBhcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGFyYW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGFyYW1zLnB1c2gocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGRhdGEgdG8gdXJsIHBhcmFtcyB3aGVuIHRoZSBtZXRob2QgaXMgXCJHRVRcIiAoZGF0YSBpcyBTdHJpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzR2V0ICYmIGRhdGEgJiYgZGF0YVR5cGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhcmFtcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgZmluYWwgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiKSArIF9wYXJhbXMuam9pbihcIiZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IGNhdGNoIGZvciBpZSA+PTlcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gXCJzdHJlYW1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXN0b21Db250ZW50VHlwZSA9IG9wdGlvbnMuaGVhZGVyc1tjb250ZW50VHlwZV0gfHwgb3B0aW9ucy5oZWFkZXJzW2NvbnRlbnRUeXBlTG93ZXJDYXNlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBjb250ZW50IHR5cGVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2NvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBkYXRhIGlzIGpzb24gb2JqZWN0LCB0cmFuc2Zvcm1pbmcgaXQgIHRvIGpzb24gc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBzZXQgcmVxdWVzdCBjb250ZW50LXR5cGUgdG8gXCJqc29uXCIuIEluIGJyb3dzZXIsICB0aGUgZGF0YSB3aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgc2VudCBhcyBSZXF1ZXN0Qm9keSBpbnN0ZWFkIG9mIEZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLnRyaW0oKGN1c3RvbUNvbnRlbnRUeXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkpID09PSBfY29udGVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHV0aWxzLmZvcm1hdFBhcmFtcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF1dGlscy5pc0Zvcm1EYXRhKGRhdGEpICYmIFtcIm9iamVjdFwiLCBcImFycmF5XCJdLmluZGV4T2YodXRpbHMudHlwZShkYXRhKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgdXNlciBkb2Vzbid0IHNldCBjb250ZW50LXR5cGUsIHNldCBkZWZhdWx0LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VzdG9tQ29udGVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW2NvbnRlbnRUeXBlXSA9IF9jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09PSBjb250ZW50VHlwZSAmJiB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIGNvbnRlbnQtdHlwZSwgTGV0IHRoZSBicm93c2VyIHNldCBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1trXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gYnJvd3NlciBlbnZpcm9ubWVudCwgc29tZSBoZWFkZXIgZmllbGRzIGFyZSByZWFkb25seSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3cml0ZSB3aWxsIGNhdXNlIHRoZSBleGNlcHRpb24gLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbnJlc3VsdChoYW5kbGVyLCBkYXRhLCB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVJZkxvY2tlZChyZXNwb25zZUludGVyY2VwdG9yLnAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzlpLHotKXvvIzmt7vliqDor7fmsYLkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlcXVlc3QgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gaGFuZGxlci5jYWxsKHJlc3BvbnNlSW50ZXJjZXB0b3IsIGRhdGEsIFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXQgPT09IHVuZGVmaW5lZCA/IGRhdGEgOiByZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBQcm9taXNlW3R5cGUgPT09IDAgPyBcInJlc29sdmVcIiA6IFwicmVqZWN0XCJdKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50aGVuKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gb25lcnJvcihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnJlc3VsdChyZXNwb25zZUludGVyY2VwdG9yLm9uZXJyb3IsIGUsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIEVycihtc2csIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHhociBvZiBJRTkgaGFzIG5vdCByZXNwb25zZSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlbmdpbmUucmVzcG9uc2UgfHwgZW5naW5lLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIG9wdGlvbnMucGFyc2VKc29uICYmIChlbmdpbmUuZ2V0UmVzcG9uc2VIZWFkZXIoY29udGVudFR5cGUpIHx8IFwiXCIpLmluZGV4T2YoXCJqc29uXCIpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb21lIHRoaXJkIGVuZ2luZSBpbXBsZW1lbnRhdGlvbiBtYXkgdHJhbnNmb3JtIHRoZSByZXNwb25zZSB0ZXh0IHRvIGpzb24gb2JqZWN0IGF1dG9tYXRpY2FsbHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCB0ZXN0IHRoZSB0eXBlIG9mIHJlc3BvbnNlIGJlZm9yZSB0cmFuc2Zvcm1pbmcgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIXV0aWxzLmlzT2JqZWN0KHJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBlbmdpbmUucmVzcG9uc2VIZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBicm93c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gKGVuZ2luZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCBcIlwiKS5zcGxpdChcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBlLnNwbGl0KFwiOlwiKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2tleV0gPSBlbmdpbmUuZ2V0UmVzcG9uc2VIZWFkZXIoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSBlbmdpbmUuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9IGVuZ2luZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHsgZGF0YTogcmVzcG9uc2UsIGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogc3RhdHVzLCBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBfcmVzcG9uc2UgZmlsZWQgb2YgZW5naW5lIGlzIHNldCBpbiAgYWRhcHRlciB3aGljaCBiZSBjYWxsZWQgaW4gZW5naW5lLXdyYXBwZXIuanNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubWVyZ2UoZGF0YSwgZW5naW5lLl9yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlcXVlc3QgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25yZXN1bHQocmVzcG9uc2VJbnRlcmNlcHRvci5oYW5kbGVyLCBkYXRhLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycihzdGF0dXNUZXh0LCBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXNwb25zZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVycm9yKG5ldyBFcnIoZS5tc2cgfHwgXCJOZXR3b3JrIEVycm9yXCIsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVycm9yKG5ldyBFcnIoXCJ0aW1lb3V0IFsgXCIgKyBlbmdpbmUudGltZW91dCArIFwibXMgXVwiLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUuc2VuZChpc0dldCA/IG51bGwgOiBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbnF1ZXVlSWZMb2NrZWQocmVxdWVzdEludGVyY2VwdG9yLnAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5tZXJnZShvcHRpb25zLCBfdGhpcy5jb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbY29udGVudFR5cGVdID0gaGVhZGVyc1tjb250ZW50VHlwZV0gfHwgaGVhZGVyc1tjb250ZW50VHlwZUxvd2VyQ2FzZV0gfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgaGVhZGVyc1tjb250ZW50VHlwZUxvd2VyQ2FzZV07XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gZGF0YSB8fCBvcHRpb25zLmJvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXRpbHMudHJpbSh1cmwgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0SW50ZXJjZXB0b3JIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJlcXVlc3RJbnRlcmNlcHRvckhhbmRsZXIuY2FsbChyZXF1ZXN0SW50ZXJjZXB0b3IsIG9wdGlvbnMsIFByb21pc2UpIHx8IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQcm9taXNlKHJldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldC50aGVuKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgb3B0aW9ucyBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PT0gb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVJlcXVlc3QoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvbWlzZS5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwiYWxsXCIsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwic3ByZWFkXCIsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBGbHk7XHJcbn0oKTtcclxuXHJcbi8vRm9yIHR5cGVTY3JpcHRcclxuXHJcblxyXG5GbHkuZGVmYXVsdCA9IEZseTtcclxuXHJcbltcImdldFwiLCBcInBvc3RcIiwgXCJwdXRcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgRmx5LnByb3RvdHlwZVtlXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBkYXRhLCB1dGlscy5tZXJnZSh7IG1ldGhvZDogZSB9LCBvcHRpb24pKTtcclxuICAgIH07XHJcbn0pO1xyXG4gICAgICAgIFtcImxvY2tcIiwgXCJ1bmxvY2tcIiwgXCJjbGVhclwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIEZseS5wcm90b3R5cGVbZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0W2VdKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbi8vIExlYXJuIG1vcmUgYWJvdXQga2VlcC1sb2FkZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZW5kdXgva2VlcC1sb2FkZXJcclxuO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEZseTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiAzICovLFxyXG4vKiA0ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcclxuXHJcbi8vaGFwIGFkYXB0ZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZmV0Y2gpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2VDYWxsYmFjaykge1xyXG4gICAgICAgIHJlcXVlc3QuZGF0YSA9IHJlcXVlc3QuYm9keTtcclxuICAgICAgICByZXF1ZXN0LmhlYWRlciA9IHJlcXVlc3QuaGVhZGVycztcclxuICAgICAgICByZXF1ZXN0LmNvbXBsZXRlID0gZnVuY3Rpb24gKHJldCkge1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiByZXQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihyZXQpKSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOiByZXRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2VDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXQuY29kZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0OiByZXQuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJldC5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogcmV0Lm1zZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoLmZldGNoKHJlcXVlc3QpO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKiovIH0pLFxyXG4vKiA1ICovLFxyXG4vKiA2ICovLFxyXG4vKiA3ICovLFxyXG4vKiA4ICovLFxyXG4vKiA5ICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbi8vcXVpY2sgYXBwIGVudHJ5XHJcbnZhciBGbHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xyXG52YXIgRW5naW5lV3JhcHBlciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcbnZhciBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZmV0Y2gpIHtcclxuICAgIHZhciBoYXBFbmdpbmUgPSBFbmdpbmVXcmFwcGVyKGFkYXB0ZXIoZmV0Y2gpKTtcclxuICAgIHJldHVybiBuZXcgRmx5KGhhcEVuZ2luZSk7XHJcbn07XHJcblxyXG4vKioqLyB9KVxyXG4vKioqKioqLyBdKTtcclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmx5aW8vZGlzdC9ucG0vaGFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwicmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxsb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi4vVmlld0hvbWUvaG9tZS51eD9uYW1lPWhvbWUtcGFnZVwiKVxucmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxsb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi4vVmlld0Jyb2FkY2FzdC9saXZlQnJvYWRjYXN0LnV4P25hbWU9bGl2ZS1icm9hZGNhc3QtcGFnZVwiKVxucmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxsb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi4vVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4P25hbWU9cGVyc29uYWwtcGFnZVwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXRlbXBsYXRlLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vbWFpbi51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1nOlxcXFxkYXRhXFxcXHByb2dyYW1cXFxcZ3VhbmdoZVxcXFxxdWlja2FwcFxcXFxzcmNcXFxcVmlld01haW5cXFxcbWFpbi51eCFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXHNhc3MtbG9hZGVyP3R5cGU9c2FzcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1nOlxcXFxkYXRhXFxcXHByb2dyYW1cXFxcZ3VhbmdoZVxcXFxxdWlja2FwcFxcXFxzcmNcXFxcVmlld01haW5cXFxcbWFpbi51eCEuL21haW4udXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXNjcmlwdC1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lbnYmcHJlc2V0cz1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zPWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL21haW4udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9tYWluJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9tYWluJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzEuMC40LVN0YWJsZS4zMDAnfSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9WaWV3TWFpbi9tYWluLnV4XG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9ob21lLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1zY3JpcHQtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtYWNjZXNzLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnByZXNldHM9ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2lucz1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9ob21lLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaG9tZS1wYWdlJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL3NyYy9WaWV3SG9tZS9ob21lLnV4P25hbWU9aG9tZS1wYWdlXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtdGVtcGxhdGUtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9saXZlQnJvYWRjYXN0LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6XFxcXGRhdGFcXFxccHJvZ3JhbVxcXFxndWFuZ2hlXFxcXHF1aWNrYXBwXFxcXHNyY1xcXFxWaWV3QnJvYWRjYXN0XFxcXGxpdmVCcm9hZGNhc3QudXghZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlcj90eXBlPXNhc3MhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzpcXFxcZGF0YVxcXFxwcm9ncmFtXFxcXGd1YW5naGVcXFxccXVpY2thcHBcXFxcc3JjXFxcXFZpZXdCcm9hZGNhc3RcXFxcbGl2ZUJyb2FkY2FzdC51eCEuL2xpdmVCcm9hZGNhc3QudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXNjcmlwdC1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lbnYmcHJlc2V0cz1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lbnYmcGx1Z2luc1tdPWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zPWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2xpdmVCcm9hZGNhc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9saXZlLWJyb2FkY2FzdC1wYWdlJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vc3JjL1ZpZXdCcm9hZGNhc3QvbGl2ZUJyb2FkY2FzdC51eD9uYW1lPWxpdmUtYnJvYWRjYXN0LXBhZ2Vcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtanNvbi1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS10ZW1wbGF0ZS1sb2FkZXIuanMhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3BlcnNvbmFsLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWpzb24tbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6XFxcXGRhdGFcXFxccHJvZ3JhbVxcXFxndWFuZ2hlXFxcXHF1aWNrYXBwXFxcXHNyY1xcXFxWaWV3UGVyc29uYWxcXFxccGVyc29uYWwudXghZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzpcXFxcZGF0YVxcXFxwcm9ncmFtXFxcXGd1YW5naGVcXFxccXVpY2thcHBcXFxcc3JjXFxcXFZpZXdQZXJzb25hbFxcXFxwZXJzb25hbC51eCEuL3BlcnNvbmFsLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1zY3JpcHQtbG9hZGVyLmpzIWU6XFxcXHdvcmtTb2Z0XFxcXHF1aWNrQXBwX2h1YXdlaVxcXFxpbnNcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtYWNjZXNzLWxvYWRlci5qcyFlOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnByZXNldHM9ZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZW52JnBsdWdpbnNbXT1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2lucz1lOlxcXFx3b3JrU29mdFxcXFxxdWlja0FwcF9odWF3ZWlcXFxcaW5zXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhZTpcXFxcd29ya1NvZnRcXFxccXVpY2tBcHBfaHVhd2VpXFxcXGluc1xcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9wZXJzb25hbC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3BlcnNvbmFsLXBhZ2UnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9zcmMvVmlld1BlcnNvbmFsL3BlcnNvbmFsLnV4P25hbWU9cGVyc29uYWwtcGFnZVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYnNcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWNvbnRlbnRcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJncm91cC1jb250YWluZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImdyb3VwLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJob21lLXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZ3JvdXAtY29udGVudFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpdmUtYnJvYWRjYXN0LXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZ3JvdXAtY29udGVudFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBlcnNvbmFsLXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1iYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJmb290LWNvbnRhaW5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGFiLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWItaWNvblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi4uL0NvbW1vbi9pbWFnZXMvdGFiX2hvbWUuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpppbpobVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWItdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YWItaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRhYi1pY29uXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vQ29tbW9uL2ltYWdlcy90YWJfcnVubmluZy5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaIkeeahOebtOaSrVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRhYi1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLWljb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIuLi9Db21tb24vaW1hZ2VzL3RhYl91c2VyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Liq5Lq65Lit5b+DXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3NyYy9WaWV3TWFpbi9tYWluLnV4XG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGOEY4RkZcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250YWluZXIgLmdyb3VwLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImdyb3VwLWNvbnRhaW5lclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwiLmNvbnRhaW5lciAuZ3JvdXAtY29udGFpbmVyIC5ncm91cC1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiZ3JvdXAtY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJncm91cC1jb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuY29udGFpbmVyIC5mb290LWNvbnRhaW5lclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJjb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImZvb3QtY29udGFpbmVyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuY29udGFpbmVyIC5mb290LWNvbnRhaW5lciAudGFiLWl0ZW1cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJmb290LWNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWl0ZW1cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5jb250YWluZXIgLmZvb3QtY29udGFpbmVyIC50YWItaXRlbSAudGFiLWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJmb290LWNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwidGFiLWl0ZW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1pY29uXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuY29udGFpbmVyIC5mb290LWNvbnRhaW5lciAudGFiLWl0ZW0gLnRhYi10ZXh0XCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiZm9vdC1jb250YWluZXJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInRhYi1pdGVtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJ0YWItdGV4dFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiY29sb3I6YWN0aXZlXCI6IFwiI0Y4QjcwMFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWc6L2RhdGEvcHJvZ3JhbS9ndWFuZ2hlL3F1aWNrYXBwL3NyYy9WaWV3TWFpbi9tYWluLnV4IWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz90eXBlPXNhc3MhZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZzovZGF0YS9wcm9ncmFtL2d1YW5naGUvcXVpY2thcHAvc3JjL1ZpZXdNYWluL21haW4udXghLi9zcmMvVmlld01haW4vbWFpbi51eFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpeyd1c2Ugc3RyaWN0JztcblxudmFyIF9zeXN0ZW0gPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyJyk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5c3RlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczoge30sXG5cbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ+mhtemdolZN5a+56LGh5Lit5bGe5oCnZGF0YeS4jeWPr+S4jnB1YmxpYywgcHJvdGVjdGVkLCBwcml2YXRl5ZCM5pe25a2Y5Zyo77yM6K+35L2/55SocHVibGlj5pu/5LujZGF0Ye+8gScpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCfpobXpnaJWTeWvueixoeS4reeahOWxnuaApycgKyBhY2MgKyAn55qE5YC85LiN6IO95L2/5Ye95pWw77yM6K+35L2/55So5a+56LGhJyk7XG4gICAgfVxuICB9KTtcbn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyFlOi93b3JrU29mdC9xdWlja0FwcF9odWF3ZWkvaW5zL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWI/cHJlc2V0c1tdPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwcmVzZXRzPWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVudiZwbHVnaW5zW109ZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJnBsdWdpbnM9ZTovd29ya1NvZnQvcXVpY2tBcHBfaHVhd2VpL2lucy9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9qc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIWU6L3dvcmtTb2Z0L3F1aWNrQXBwX2h1YXdlaS9pbnMvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc3JjL1ZpZXdNYWluL21haW4udXhcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1eEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==