/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/destination.css":
/*!****************************************!*\
  !*** ./src/assets/css/destination.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/navbar.css":
/*!***********************************!*\
  !*** ./src/assets/css/navbar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/typography.css":
/*!***************************************!*\
  !*** ./src/assets/css/typography.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/destination/image-europa.png":
/*!********************************************************!*\
  !*** ./src/assets/images/destination/image-europa.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e95f7d0a16fe2ebf4c6.png";

/***/ }),

/***/ "./src/assets/images/destination/image-mars.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-mars.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b224c8663251270d79f.png";

/***/ }),

/***/ "./src/assets/images/destination/image-moon.png":
/*!******************************************************!*\
  !*** ./src/assets/images/destination/image-moon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d287d07182de3015952f.png";

/***/ }),

/***/ "./src/assets/images/destination/image-titan.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/destination/image-titan.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4b078f9ce17e686ae99.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/destination.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/typography.css */ "./src/assets/css/typography.css");
/* harmony import */ var _assets_css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/navbar.css */ "./src/assets/css/navbar.css");
/* harmony import */ var _assets_css_destination_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/destination.css */ "./src/assets/css/destination.css");
/* harmony import */ var _assets_images_destination_image_moon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/destination/image-moon.png */ "./src/assets/images/destination/image-moon.png");
/* harmony import */ var _assets_images_destination_image_mars_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/destination/image-mars.png */ "./src/assets/images/destination/image-mars.png");
/* harmony import */ var _assets_images_destination_image_titan_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/destination/image-titan.png */ "./src/assets/images/destination/image-titan.png");
/* harmony import */ var _assets_images_destination_image_europa_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/destination/image-europa.png */ "./src/assets/images/destination/image-europa.png");









const img = document.querySelector('[data-destination-image]');
const descriptions = document.querySelectorAll('.description-main'); //grab all the descriptions
const nav = document.querySelector('[data-destination-nav]'); //grab the destination nav
const destinations = document.querySelectorAll('[data-destination-ul] li')

img.src = _assets_images_destination_image_moon_png__WEBPACK_IMPORTED_MODULE_3__;

nav.addEventListener('click',(e)=>{
    const target = e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selected = target.textContent;
        removeActiveClass(destinations);
        addActiveClass(target);
        removeVisibilityClass(descriptions);
        addVisibilityClass(selected,descriptions);
        addImage(selected);
    }
})


function removeVisibilityClass(array){
    array.forEach(element => {
        element.classList.remove('visible');
    });
}

function addVisibilityClass(id,array){
    array.forEach(element=>{
        if(element.id === id){
            element.classList.add('visible')
        }
    });
}

function addImage(id){
    const temp = id.toLowerCase();
    if(temp === "moon"){
        img.src = _assets_images_destination_image_moon_png__WEBPACK_IMPORTED_MODULE_3__;
    }else if(temp === "mars"){
        img.src = _assets_images_destination_image_mars_png__WEBPACK_IMPORTED_MODULE_4__;
    }else if(temp === "titan"){
        img.src = _assets_images_destination_image_titan_png__WEBPACK_IMPORTED_MODULE_5__;
    }else if(temp === "europa"){
        img.src = _assets_images_destination_image_europa_png__WEBPACK_IMPORTED_MODULE_6__;
    }
   
}

function removeActiveClass(array){
    array.forEach(element=>{
        element.classList.remove('active');
    })
}

function addActiveClass(target){
    target.classList.add('active');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzdGluYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNKO0FBQ0s7O0FBRXdCO0FBQ0E7QUFDRTtBQUNFOztBQUVsRTtBQUNBLHFFQUFxRTtBQUNyRSw4REFBOEQ7QUFDOUQ7O0FBRUEsVUFBVSxzRUFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNFQUFJO0FBQ3RCLEtBQUs7QUFDTCxrQkFBa0Isc0VBQUk7QUFDdEIsS0FBSztBQUNMLGtCQUFrQix1RUFBSztBQUN2QixLQUFLO0FBQ0wsa0JBQWtCLHdFQUFNO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvZGVzdGluYXRpb24uY3NzPzczM2EiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL25hdmJhci5jc3M/YTE5NSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3M/YzBiYiIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Rlc3RpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9hc3NldHMvY3NzL3R5cG9ncmFwaHkuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvY3NzL25hdmJhci5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvZGVzdGluYXRpb24uY3NzJztcblxuaW1wb3J0IG1vb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ucG5nJztcbmltcG9ydCBtYXJzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tYXJzLnBuZyc7XG5pbXBvcnQgdGl0YW4gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLnBuZyc7XG5pbXBvcnQgZXVyb3BhIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nJztcblxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGVzdGluYXRpb24taW1hZ2VdJyk7XG5jb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24tbWFpbicpOyAvL2dyYWIgYWxsIHRoZSBkZXNjcmlwdGlvbnNcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlc3RpbmF0aW9uLW5hdl0nKTsgLy9ncmFiIHRoZSBkZXN0aW5hdGlvbiBuYXZcbmNvbnN0IGRlc3RpbmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlc3RpbmF0aW9uLXVsXSBsaScpXG5cbmltZy5zcmMgPSBtb29uO1xuXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmKCEodGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykpIHJldHVybjtcbiAgICBlbHNle1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoZGVzdGluYXRpb25zKTtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3ModGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlVmlzaWJpbGl0eUNsYXNzKGRlc2NyaXB0aW9ucyk7XG4gICAgICAgIGFkZFZpc2liaWxpdHlDbGFzcyhzZWxlY3RlZCxkZXNjcmlwdGlvbnMpO1xuICAgICAgICBhZGRJbWFnZShzZWxlY3RlZCk7XG4gICAgfVxufSlcblxuXG5mdW5jdGlvbiByZW1vdmVWaXNpYmlsaXR5Q2xhc3MoYXJyYXkpe1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRWaXNpYmlsaXR5Q2xhc3MoaWQsYXJyYXkpe1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBpZihlbGVtZW50LmlkID09PSBpZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEltYWdlKGlkKXtcbiAgICBjb25zdCB0ZW1wID0gaWQudG9Mb3dlckNhc2UoKTtcbiAgICBpZih0ZW1wID09PSBcIm1vb25cIil7XG4gICAgICAgIGltZy5zcmMgPSBtb29uO1xuICAgIH1lbHNlIGlmKHRlbXAgPT09IFwibWFyc1wiKXtcbiAgICAgICAgaW1nLnNyYyA9IG1hcnM7XG4gICAgfWVsc2UgaWYodGVtcCA9PT0gXCJ0aXRhblwiKXtcbiAgICAgICAgaW1nLnNyYyA9IHRpdGFuO1xuICAgIH1lbHNlIGlmKHRlbXAgPT09IFwiZXVyb3BhXCIpe1xuICAgICAgICBpbWcuc3JjID0gZXVyb3BhO1xuICAgIH1cbiAgIFxufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyhhcnJheSl7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3ModGFyZ2V0KXtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9