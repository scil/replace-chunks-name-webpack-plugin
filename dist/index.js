/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./src/replace-chunks-name-webpack-plugin.ts ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WebpackReplaceChunksNamePlugin = (function () {
    function WebpackReplaceChunksNamePlugin(options) {
        this.replaceConfig = [];
        this.enable = true;
        if (!Array.isArray(options.replaces)) {
            throw new Error('options.replaces must be an array');
        }
        if (!options.replaces.every(function (item) {
            return item.pattern && item.replacement;
        })) {
            throw new Error('members must contain {pattern: string, replacement: string}');
        }
        this.replaceConfig = options.replaces;
        this.enable = options.enable;
    }
    WebpackReplaceChunksNamePlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.compilation.tap('replaceChunksName', function (compilation) {
            compilation.hooks.afterHash.tap('replaceChunksName', function () {
                if (_this.enable) {
                    compilation.chunks.forEach(function (item) {
                        // console.log(item.id, item.name);
                        if (item.name || item.id)
                            _this.replaceConfig.forEach(function (_a) {
                                var pattern = _a.pattern, replacement = _a.replacement;
                                item.name = (item.name || item.id).replace(pattern, replacement);
                            });
                    });
                }
            });
        });
    };
    return WebpackReplaceChunksNamePlugin;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebpackReplaceChunksNamePlugin);

module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=index.js.map