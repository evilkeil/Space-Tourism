/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/crew.css":
/*!*********************************!*\
  !*** ./src/assets/css/crew.css ***!
  \*********************************/
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

/***/ "./src/assets/images/crew/image-anousheh-ansari.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/crew/image-anousheh-ansari.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d647128496ddc638acd.png";

/***/ }),

/***/ "./src/assets/images/crew/image-douglas-hurley.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/crew/image-douglas-hurley.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7540fbb61923064f065e.png";

/***/ }),

/***/ "./src/assets/images/crew/image-mark-shuttleworth.png":
/*!************************************************************!*\
  !*** ./src/assets/images/crew/image-mark-shuttleworth.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc30f35b05fc0bc4ee47.png";

/***/ }),

/***/ "./src/assets/images/crew/image-victor-glover.png":
/*!********************************************************!*\
  !*** ./src/assets/images/crew/image-victor-glover.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a9a5424588b73ec61c2.png";

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
/*!*********************!*\
  !*** ./src/crew.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/typography.css */ "./src/assets/css/typography.css");
/* harmony import */ var _assets_css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/navbar.css */ "./src/assets/css/navbar.css");
/* harmony import */ var _assets_css_crew_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/crew.css */ "./src/assets/css/crew.css");
/* harmony import */ var _assets_images_crew_image_douglas_hurley_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/crew/image-douglas-hurley.png */ "./src/assets/images/crew/image-douglas-hurley.png");
/* harmony import */ var _assets_images_crew_image_mark_shuttleworth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/crew/image-mark-shuttleworth.png */ "./src/assets/images/crew/image-mark-shuttleworth.png");
/* harmony import */ var _assets_images_crew_image_victor_glover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/crew/image-victor-glover.png */ "./src/assets/images/crew/image-victor-glover.png");
/* harmony import */ var _assets_images_crew_image_anousheh_ansari_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/crew/image-anousheh-ansari.png */ "./src/assets/images/crew/image-anousheh-ansari.png");









const img = document.querySelector('[data-crew-img]');
const nav = document.querySelectorAll('.current-crew li');
const ul = document.querySelector('.current-crew');
const descriptions = document.querySelectorAll('.crew-description');

img.src = _assets_images_crew_image_douglas_hurley_png__WEBPACK_IMPORTED_MODULE_3__;

ul.addEventListener('click',(e)=>{
    const target= e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selectedId = target.dataset.selected ;
        removeVisibleClass(descriptions);
        addVisibleClass(selectedId,descriptions)
        removeSelectedClass(nav);
        addSelectedClass(nav,selectedId);
        addImage(selectedId);
        // console.log(selectedId)
    }
});

function removeVisibleClass(arr){
    arr.forEach(element => {
        element.classList.remove('visible')
    });
}

function addVisibleClass(selected,arr){
    arr.forEach(element=>{
        if(element.id === selected){
            element.classList.add('visible');
        }
    })
}

function removeSelectedClass(arr){
    arr.forEach(element=>{
        element.classList.remove('selected');
    })
}
function addSelectedClass(arr,selected){
    arr.forEach(element=>{
        if(element.dataset.selected === selected){
            element.classList.add('selected');
        }
    })
}

function addImage(selected){
    if(selected === "commander"){
        img.src = _assets_images_crew_image_douglas_hurley_png__WEBPACK_IMPORTED_MODULE_3__;
    }else if(selected === "specialist"){
        img.src = _assets_images_crew_image_mark_shuttleworth_png__WEBPACK_IMPORTED_MODULE_4__;
    }else if(selected === "pilot"){
        img.src = _assets_images_crew_image_victor_glover_png__WEBPACK_IMPORTED_MODULE_5__;
    }else if(selected === "engineer"){
        img.src = _assets_images_crew_image_anousheh_ansari_png__WEBPACK_IMPORTED_MODULE_6__;
    }
   
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ0o7QUFDRjs7QUFFdUM7QUFDSTtBQUNUO0FBQ0s7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUseUVBQVM7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlFQUFTO0FBQzNCLEtBQUs7QUFDTCxrQkFBa0IsNEVBQVU7QUFDNUIsS0FBSztBQUNMLGtCQUFrQix3RUFBSztBQUN2QixLQUFLO0FBQ0wsa0JBQWtCLDBFQUFRO0FBQzFCO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL2NyZXcuY3NzPzIwZGYiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL25hdmJhci5jc3M/YTE5NSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3M/YzBiYiIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2NyZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9jcmV3LmNzcyc7XG5cbmltcG9ydCBjb21tYW5kZXIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkucG5nJztcbmltcG9ydCBzcGVjaWFsaXN0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZyc7XG5pbXBvcnQgcGlsb3QgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtdmljdG9yLWdsb3Zlci5wbmcnO1xuaW1wb3J0IGVuZ2luZWVyIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmcnO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jcmV3LWltZ10nKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50LWNyZXcgbGknKTtcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY3JldycpO1xuY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZXctZGVzY3JpcHRpb24nKTtcblxuaW1nLnNyYyA9IGNvbW1hbmRlcjtcblxudWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGNvbnN0IHRhcmdldD0gZS50YXJnZXQ7XG4gICAgaWYoISh0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSkgcmV0dXJuO1xuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSB0YXJnZXQuZGF0YXNldC5zZWxlY3RlZCA7XG4gICAgICAgIHJlbW92ZVZpc2libGVDbGFzcyhkZXNjcmlwdGlvbnMpO1xuICAgICAgICBhZGRWaXNpYmxlQ2xhc3Moc2VsZWN0ZWRJZCxkZXNjcmlwdGlvbnMpXG4gICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MobmF2KTtcbiAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhuYXYsc2VsZWN0ZWRJZCk7XG4gICAgICAgIGFkZEltYWdlKHNlbGVjdGVkSWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVWaXNpYmxlQ2xhc3MoYXJyKXtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVmlzaWJsZUNsYXNzKHNlbGVjdGVkLGFycil7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBpZihlbGVtZW50LmlkID09PSBzZWxlY3RlZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkQ2xhc3MoYXJyKXtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KVxufVxuZnVuY3Rpb24gYWRkU2VsZWN0ZWRDbGFzcyhhcnIsc2VsZWN0ZWQpe1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgaWYoZWxlbWVudC5kYXRhc2V0LnNlbGVjdGVkID09PSBzZWxlY3RlZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRJbWFnZShzZWxlY3RlZCl7XG4gICAgaWYoc2VsZWN0ZWQgPT09IFwiY29tbWFuZGVyXCIpe1xuICAgICAgICBpbWcuc3JjID0gY29tbWFuZGVyO1xuICAgIH1lbHNlIGlmKHNlbGVjdGVkID09PSBcInNwZWNpYWxpc3RcIil7XG4gICAgICAgIGltZy5zcmMgPSBzcGVjaWFsaXN0O1xuICAgIH1lbHNlIGlmKHNlbGVjdGVkID09PSBcInBpbG90XCIpe1xuICAgICAgICBpbWcuc3JjID0gcGlsb3Q7XG4gICAgfWVsc2UgaWYoc2VsZWN0ZWQgPT09IFwiZW5naW5lZXJcIil7XG4gICAgICAgIGltZy5zcmMgPSBlbmdpbmVlcjtcbiAgICB9XG4gICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=