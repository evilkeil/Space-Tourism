/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/navbar.css":
/*!***********************************!*\
  !*** ./src/assets/css/navbar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/technology.css":
/*!***************************************!*\
  !*** ./src/assets/css/technology.css ***!
  \***************************************/
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

/***/ "./src/assets/images/technology/image-launch-vehicle-landscape.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/technology/image-launch-vehicle-landscape.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4281a59ff7186488fe6a.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-launch-vehicle-portrait.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/images/technology/image-launch-vehicle-portrait.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c758955a178bdcc3230.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-space-capsule-landscape.jpg":
/*!************************************************************************!*\
  !*** ./src/assets/images/technology/image-space-capsule-landscape.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d672da81d5ff3ada7301.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-space-capsule-portrait.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/images/technology/image-space-capsule-portrait.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd0ac138afef98c1666a.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-spaceport-landscape.jpg":
/*!********************************************************************!*\
  !*** ./src/assets/images/technology/image-spaceport-landscape.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f3ca5c05a3e87191ea7.jpg";

/***/ }),

/***/ "./src/assets/images/technology/image-spaceport-portrait.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/technology/image-spaceport-portrait.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85523db5de13057f36ea.jpg";

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
/*!***************************!*\
  !*** ./src/technology.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/typography.css */ "./src/assets/css/typography.css");
/* harmony import */ var _assets_css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/navbar.css */ "./src/assets/css/navbar.css");
/* harmony import */ var _assets_css_technology_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/technology.css */ "./src/assets/css/technology.css");
/* harmony import */ var _assets_images_technology_image_launch_vehicle_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/technology/image-launch-vehicle-portrait.jpg */ "./src/assets/images/technology/image-launch-vehicle-portrait.jpg");
/* harmony import */ var _assets_images_technology_image_launch_vehicle_landscape_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/technology/image-launch-vehicle-landscape.jpg */ "./src/assets/images/technology/image-launch-vehicle-landscape.jpg");
/* harmony import */ var _assets_images_technology_image_spaceport_portrait_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/technology/image-spaceport-portrait.jpg */ "./src/assets/images/technology/image-spaceport-portrait.jpg");
/* harmony import */ var _assets_images_technology_image_spaceport_landscape_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/technology/image-spaceport-landscape.jpg */ "./src/assets/images/technology/image-spaceport-landscape.jpg");
/* harmony import */ var _assets_images_technology_image_space_capsule_portrait_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/technology/image-space-capsule-portrait.jpg */ "./src/assets/images/technology/image-space-capsule-portrait.jpg");
/* harmony import */ var _assets_images_technology_image_space_capsule_landscape_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/technology/image-space-capsule-landscape.jpg */ "./src/assets/images/technology/image-space-capsule-landscape.jpg");




//vehicle



//spaceport 




//capsule





const img = document.querySelector('[data-tech-img-portrait]');
const imgLandscape = document.querySelector('[data-tech-img-landscape]');

const nav = document.querySelector('[data-tech-nav]');
const li = document.querySelectorAll('[data-tech-nav] li');
const text = document.querySelectorAll('.text');

const vehicle = {
    portrait:_assets_images_technology_image_launch_vehicle_portrait_jpg__WEBPACK_IMPORTED_MODULE_3__,
    landscape:_assets_images_technology_image_launch_vehicle_landscape_jpg__WEBPACK_IMPORTED_MODULE_4__
}
const space = {
    portrait:_assets_images_technology_image_spaceport_portrait_jpg__WEBPACK_IMPORTED_MODULE_5__,
    landscape:_assets_images_technology_image_spaceport_landscape_jpg__WEBPACK_IMPORTED_MODULE_6__
}
const capsule = {
    portrait:_assets_images_technology_image_space_capsule_portrait_jpg__WEBPACK_IMPORTED_MODULE_7__ ,
    landscape:_assets_images_technology_image_space_capsule_landscape_jpg__WEBPACK_IMPORTED_MODULE_8__
}


let currentImg = vehicle;

setSrc();


nav.addEventListener('click',(e)=>{
    const target = e.target;
    if(!(target.tagName.toLowerCase() === 'li')) return;
    else{
        const selectedId = target.textContent;
        removeSelectedClass(li);
        addSelectedClass(target);
        removeVisibleClass(text);
        addVisibleClass(selectedId,text);
        setImageNumber(selectedId);
        setSrc()
    }
    
});

function removeSelectedClass(array){
    array.forEach(element => {
        element.classList.remove('selected');
    });
}

function addSelectedClass(element){
    element.classList.add('selected');
}
function removeVisibleClass(arr){
    arr.forEach(element => {
        element.classList.remove('visible');
    })
}
function addVisibleClass(selectedId,arr){
    arr.forEach(element =>{
        if(element.id === selectedId){
            element.classList.add('visible');
        }
    })
}

function setImageNumber(n){
if(n === "1"){
    currentImg = vehicle
}else if (n === "2"){
    currentImg = space;
}else if (n === "3"){
    currentImg = capsule;
}
}

function setSrc() {
    
      img.src = currentImg.portrait; // Use portrait image for larger screens
      imgLandscape.src = currentImg.landscape; // Use landscape image for smaller screens
    
  }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5vbG9neS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNKO0FBQ0k7O0FBRXJDO0FBQzJGO0FBQ0U7O0FBRTdGOztBQUV3RjtBQUNFOztBQUUxRjs7QUFFMEY7QUFDRTs7O0FBRzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx3RkFBZTtBQUM1QixjQUFjLHlGQUFnQjtBQUM5QjtBQUNBO0FBQ0EsYUFBYSxtRkFBaUI7QUFDOUIsY0FBYyxvRkFBa0I7QUFDaEM7QUFDQTtBQUNBLGFBQWEsdUZBQWU7QUFDNUIsY0FBYyx3RkFBZ0I7QUFDOUI7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLCtDQUErQztBQUMvQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL25hdmJhci5jc3M/YTE5NSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvdGVjaG5vbG9neS5jc3M/N2E1OSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3M/YzBiYiIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL3RlY2hub2xvZ3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy90ZWNobm9sb2d5LmNzcyc7XG5cbi8vdmVoaWNsZVxuaW1wb3J0IHZlaGljbGVQb3J0cmFpdCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvdGVjaG5vbG9neS9pbWFnZS1sYXVuY2gtdmVoaWNsZS1wb3J0cmFpdC5qcGcnO1xuaW1wb3J0IHZlaGljbGVMYW5kc2NhcGUgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2UtbGF1bmNoLXZlaGljbGUtbGFuZHNjYXBlLmpwZyc7XG5cbi8vc3BhY2Vwb3J0IFxuXG5pbXBvcnQgc3BhY2VQb3J0UG9ydHJhaXQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2Vwb3J0LXBvcnRyYWl0LmpwZyc7XG5pbXBvcnQgc3BhY2VQb3J0TGFuZHNjYXBlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90ZWNobm9sb2d5L2ltYWdlLXNwYWNlcG9ydC1sYW5kc2NhcGUuanBnJztcblxuLy9jYXBzdWxlXG5cbmltcG9ydCBjYXBzdWxlUG9ydHJhaXQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1wb3J0cmFpdC5qcGcnO1xuaW1wb3J0IGNhcHN1bGVMYW5kc2NhcGUgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RlY2hub2xvZ3kvaW1hZ2Utc3BhY2UtY2Fwc3VsZS1sYW5kc2NhcGUuanBnJztcblxuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZWNoLWltZy1wb3J0cmFpdF0nKTtcbmNvbnN0IGltZ0xhbmRzY2FwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlY2gtaW1nLWxhbmRzY2FwZV0nKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVjaC1uYXZdJyk7XG5jb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRlY2gtbmF2XSBsaScpO1xuY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0Jyk7XG5cbmNvbnN0IHZlaGljbGUgPSB7XG4gICAgcG9ydHJhaXQ6dmVoaWNsZVBvcnRyYWl0LFxuICAgIGxhbmRzY2FwZTp2ZWhpY2xlTGFuZHNjYXBlXG59XG5jb25zdCBzcGFjZSA9IHtcbiAgICBwb3J0cmFpdDpzcGFjZVBvcnRQb3J0cmFpdCxcbiAgICBsYW5kc2NhcGU6c3BhY2VQb3J0TGFuZHNjYXBlXG59XG5jb25zdCBjYXBzdWxlID0ge1xuICAgIHBvcnRyYWl0OmNhcHN1bGVQb3J0cmFpdCAsXG4gICAgbGFuZHNjYXBlOmNhcHN1bGVMYW5kc2NhcGVcbn1cblxuXG5sZXQgY3VycmVudEltZyA9IHZlaGljbGU7XG5cbnNldFNyYygpO1xuXG5cbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYoISh0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSkgcmV0dXJuO1xuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MobGkpO1xuICAgICAgICBhZGRTZWxlY3RlZENsYXNzKHRhcmdldCk7XG4gICAgICAgIHJlbW92ZVZpc2libGVDbGFzcyh0ZXh0KTtcbiAgICAgICAgYWRkVmlzaWJsZUNsYXNzKHNlbGVjdGVkSWQsdGV4dCk7XG4gICAgICAgIHNldEltYWdlTnVtYmVyKHNlbGVjdGVkSWQpO1xuICAgICAgICBzZXRTcmMoKVxuICAgIH1cbiAgICBcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVTZWxlY3RlZENsYXNzKGFycmF5KXtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNlbGVjdGVkQ2xhc3MoZWxlbWVudCl7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVmlzaWJsZUNsYXNzKGFycil7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pXG59XG5mdW5jdGlvbiBhZGRWaXNpYmxlQ2xhc3Moc2VsZWN0ZWRJZCxhcnIpe1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT57XG4gICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHNlbGVjdGVkSWQpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXRJbWFnZU51bWJlcihuKXtcbmlmKG4gPT09IFwiMVwiKXtcbiAgICBjdXJyZW50SW1nID0gdmVoaWNsZVxufWVsc2UgaWYgKG4gPT09IFwiMlwiKXtcbiAgICBjdXJyZW50SW1nID0gc3BhY2U7XG59ZWxzZSBpZiAobiA9PT0gXCIzXCIpe1xuICAgIGN1cnJlbnRJbWcgPSBjYXBzdWxlO1xufVxufVxuXG5mdW5jdGlvbiBzZXRTcmMoKSB7XG4gICAgXG4gICAgICBpbWcuc3JjID0gY3VycmVudEltZy5wb3J0cmFpdDsgLy8gVXNlIHBvcnRyYWl0IGltYWdlIGZvciBsYXJnZXIgc2NyZWVuc1xuICAgICAgaW1nTGFuZHNjYXBlLnNyYyA9IGN1cnJlbnRJbWcubGFuZHNjYXBlOyAvLyBVc2UgbGFuZHNjYXBlIGltYWdlIGZvciBzbWFsbGVyIHNjcmVlbnNcbiAgICBcbiAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9