/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/destination.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/destination.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/destination/background-destination-desktop.jpg */ "./src/assets/images/destination/background-destination-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/destination/background-destination-tablet.jpg */ "./src/assets/images/destination/background-destination-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/destination/background-destination-mobile.jpg */ "./src/assets/images/destination/background-destination-mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Barlow+Condensed&family=Bebas+Neue&family=Bellefair&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* font-family: 'ADLaM Display', cursive;
font-family: 'Barlow Condensed', sans-serif;
font-family: 'Bebas Neue', sans-serif;
font-family: 'Bellefair', serif;
font-family: 'Roboto', sans-serif; */

*,*::before,*::after{
    box-sizing: border-box;
}

:root{
    /* color variables */

    --main-color:rgba(255, 255, 255);
    --secondary-color:#D0D6F9;
    --miscellaneous-color:#0B0D17;

    /*other sizings */
    --circle-radius:274px;
}

body{
    margin: 0;
    padding: 0;
    height: 100dvh;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color:var(--secondary-color);
    position: relative;
    overflow: hidden;
    display: grid;
    place-content: center;
    
   
}

.destination-content{
    width: 70vw;
    display: flex;
    /* justify-content: space-between; */
    justify-content: flex-end;
    gap: 12rem;
    align-items: center;
}

#destination-descriptions h2{
    margin: 1rem 0;
}
#destination-descriptions p{
    margin: 1rem 0 2rem;
}


.destination-img{
    width: 40%;
}
.destination-img h4{
    margin-top: 0;
}

.destination-main{
    width: 30%;
    height: 100%;
    margin-top: 10%;
    margin-right: 13%;
}
#destination-nav{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 10%;
    /* background-color: purple; */
}
#destination-nav ul{
    margin: 0;
    padding: 0;
    width: 50%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
    
}
#destination-nav li{
    height: 70%;
}

#destination-nav li:hover{
    cursor: pointer;
    border-bottom:1px solid rgba(255,255,255,0.5);
}

.description-main{
    position: relative;
    display: none;
}

.visible{
    display: block;
}

.data{
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.2);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sub-one{
    margin-top: 1rem;
}



/* Responsive css */



/* layout for tablets */
@media (max-width:912px){
    body{
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    }
    .destination-content{
        flex-direction: column;
        gap: 0;
        width: 100%;
        justify-content: center;
        align-items: center;
       
    }
    .destination-img h4{
        position: absolute;
        top: 100px;
        left: 15px;
    }
    .destination-img{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .destination-content img{
       width: 274px;
       height: 274px;
       margin-top: 100px;
       margin-bottom: 20px;
    }

    .destination-main{
        margin: 0;
        width: 50%;
       
    }
    .description-main h2,
    .description-main p {
        text-align: center;
    }

    #destination-nav{
        justify-content: center;
    }
}


/*mobile*/

@media (max-width: 480px){
    body{
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___})
    }
    .destination-img{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .destination-img h4{
        position: inherit;
        margin-bottom: 0;
    }
    .destination-content img{
        margin-top: 0;
        transform: scale(0.8);
    }
    .destination-content{
        margin-top: 120px;
       
    }

    .destination-main{
        width: 100%;
    }
    .data{
        flex-direction: column;
        margin-top: 0;
        padding-top: 0;
    }
    .distance,
    .time{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .sub-one{
        margin-top: 0.5rem;
    }
 
}

/*tiny mobile*/

@media (max-width: 320px){
    #destination-nav ul{
        width: 90%;
    }
    .destination-img h4{
        text-align: center;
    }
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/destination.css"],"names":[],"mappings":"AAEA;;;;oCAIoC;;AAEpC;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;;IAEpB,gCAAgC;IAChC,yBAAyB;IACzB,6BAA6B;;IAE7B,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,cAAc;IACd,iFAAuG;IACvG,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,qBAAqB;;;AAGzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,yBAAyB;IACzB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,mBAAmB;AACvB;;;AAGA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,8BAA8B;AAClC;AACA;IACI,SAAS;IACT,UAAU;IACV,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,uBAAuB;;AAE3B;AACA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,2CAA2C;;IAE3C,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;;AAIA,mBAAmB;;;;AAInB,uBAAuB;AACvB;IACI;QACI,yDAA8E;IAClF;IACA;QACI,sBAAsB;QACtB,MAAM;QACN,WAAW;QACX,uBAAuB;QACvB,mBAAmB;;IAEvB;IACA;QACI,kBAAkB;QAClB,UAAU;QACV,UAAU;IACd;IACA;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;OACG,YAAY;OACZ,aAAa;OACb,iBAAiB;OACjB,mBAAmB;IACtB;;IAEA;QACI,SAAS;QACT,UAAU;;IAEd;IACA;;QAEI,kBAAkB;IACtB;;IAEA;QACI,uBAAuB;IAC3B;AACJ;;;AAGA,SAAS;;AAET;IACI;QACI;IACJ;IACA;QACI,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;;IAEA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;IACA;QACI,aAAa;QACb,qBAAqB;IACzB;IACA;QACI,iBAAiB;;IAErB;;IAEA;QACI,WAAW;IACf;IACA;QACI,sBAAsB;QACtB,aAAa;QACb,cAAc;IAClB;IACA;;QAEI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,kBAAkB;IACtB;;AAEJ;;AAEA,cAAc;;AAEd;IACI;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Barlow+Condensed&family=Bebas+Neue&family=Bellefair&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');\n\n/* font-family: 'ADLaM Display', cursive;\nfont-family: 'Barlow Condensed', sans-serif;\nfont-family: 'Bebas Neue', sans-serif;\nfont-family: 'Bellefair', serif;\nfont-family: 'Roboto', sans-serif; */\n\n*,*::before,*::after{\n    box-sizing: border-box;\n}\n\n:root{\n    /* color variables */\n\n    --main-color:rgba(255, 255, 255);\n    --secondary-color:#D0D6F9;\n    --miscellaneous-color:#0B0D17;\n\n    /*other sizings */\n    --circle-radius:274px;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100dvh;\n    background: url(../images/destination/background-destination-desktop.jpg) no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color:var(--secondary-color);\n    position: relative;\n    overflow: hidden;\n    display: grid;\n    place-content: center;\n    \n   \n}\n\n.destination-content{\n    width: 70vw;\n    display: flex;\n    /* justify-content: space-between; */\n    justify-content: flex-end;\n    gap: 12rem;\n    align-items: center;\n}\n\n#destination-descriptions h2{\n    margin: 1rem 0;\n}\n#destination-descriptions p{\n    margin: 1rem 0 2rem;\n}\n\n\n.destination-img{\n    width: 40%;\n}\n.destination-img h4{\n    margin-top: 0;\n}\n\n.destination-main{\n    width: 30%;\n    height: 100%;\n    margin-top: 10%;\n    margin-right: 13%;\n}\n#destination-nav{\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: 10%;\n    /* background-color: purple; */\n}\n#destination-nav ul{\n    margin: 0;\n    padding: 0;\n    width: 50%;\n    height: 100%;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n    align-items: flex-start;\n    \n}\n#destination-nav li{\n    height: 70%;\n}\n\n#destination-nav li:hover{\n    cursor: pointer;\n    border-bottom:1px solid rgba(255,255,255,0.5);\n}\n\n.description-main{\n    position: relative;\n    display: none;\n}\n\n.visible{\n    display: block;\n}\n\n.data{\n    margin-top: 1rem;\n    padding-top: 2rem;\n    border-top: 1px solid rgba(255,255,255,0.2);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sub-one{\n    margin-top: 1rem;\n}\n\n\n\n/* Responsive css */\n\n\n\n/* layout for tablets */\n@media (max-width:912px){\n    body{\n        background-image: url(../images/destination/background-destination-tablet.jpg);\n    }\n    .destination-content{\n        flex-direction: column;\n        gap: 0;\n        width: 100%;\n        justify-content: center;\n        align-items: center;\n       \n    }\n    .destination-img h4{\n        position: absolute;\n        top: 100px;\n        left: 15px;\n    }\n    .destination-img{\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .destination-content img{\n       width: 274px;\n       height: 274px;\n       margin-top: 100px;\n       margin-bottom: 20px;\n    }\n\n    .destination-main{\n        margin: 0;\n        width: 50%;\n       \n    }\n    .description-main h2,\n    .description-main p {\n        text-align: center;\n    }\n\n    #destination-nav{\n        justify-content: center;\n    }\n}\n\n\n/*mobile*/\n\n@media (max-width: 480px){\n    body{\n        background-image: url(../images/destination/background-destination-mobile.jpg)\n    }\n    .destination-img{\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .destination-img h4{\n        position: inherit;\n        margin-bottom: 0;\n    }\n    .destination-content img{\n        margin-top: 0;\n        transform: scale(0.8);\n    }\n    .destination-content{\n        margin-top: 120px;\n       \n    }\n\n    .destination-main{\n        width: 100%;\n    }\n    .data{\n        flex-direction: column;\n        margin-top: 0;\n        padding-top: 0;\n    }\n    .distance,\n    .time{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n    .sub-one{\n        margin-top: 0.5rem;\n    }\n \n}\n\n/*tiny mobile*/\n\n@media (max-width: 320px){\n    #destination-nav ul{\n        width: 90%;\n    }\n    .destination-img h4{\n        text-align: center;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/destination.css":
/*!****************************************!*\
  !*** ./src/assets/css/destination.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_destination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./destination.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/destination.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_destination_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_destination_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_destination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_destination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/destination.js":
/*!****************************!*\
  !*** ./src/destination.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/assets/images/destination/background-destination-desktop.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-desktop.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "468b922c69bf5499b4bc.jpg";

/***/ }),

/***/ "./src/assets/images/destination/background-destination-mobile.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-mobile.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0131e27e751ead1a922.jpg";

/***/ }),

/***/ "./src/assets/images/destination/background-destination-tablet.jpg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/destination/background-destination-tablet.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f55d346d8b6cfd95ab7.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"destination": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkspace_tourism"] = self["webpackChunkspace_tourism"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["node_modules_css-loader_dist_runtime_getUrl_js-src_assets_css_navbar_css-src_assets_css_typog-bd7d36"], () => (__webpack_require__("./src/destination.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL2Rlc3RpbmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvZGVzdGluYXRpb24uY3NzPzQwMTAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZXN0aW5hdGlvbi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLWRlc2t0b3AuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Rlc3RpbmF0aW9uL2JhY2tncm91bmQtZGVzdGluYXRpb24tdGFibGV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kZXN0aW5hdGlvbi9iYWNrZ3JvdW5kLWRlc3RpbmF0aW9uLW1vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQmZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUJlbGxlZmFpciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGZvbnQtZmFtaWx5OiAnQURMYU0gRGlzcGxheScsIGN1cnNpdmU7XG5mb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgc2Fucy1zZXJpZjtcbmZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7ICovXG5cbiosKjo6YmVmb3JlLCo6OmFmdGVye1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuICAgIC8qIGNvbG9yIHZhcmlhYmxlcyAqL1xuXG4gICAgLS1tYWluLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6I0QwRDZGOTtcbiAgICAtLW1pc2NlbGxhbmVvdXMtY29sb3I6IzBCMEQxNztcblxuICAgIC8qb3RoZXIgc2l6aW5ncyAqL1xuICAgIC0tY2lyY2xlLXJhZGl1czoyNzRweDtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgIFxufVxuXG4uZGVzdGluYXRpb24tY29udGVudHtcbiAgICB3aWR0aDogNzB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMTJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Rlc3RpbmF0aW9uLWRlc2NyaXB0aW9ucyBoMntcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cbiNkZXN0aW5hdGlvbi1kZXNjcmlwdGlvbnMgcHtcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtO1xufVxuXG5cbi5kZXN0aW5hdGlvbi1pbWd7XG4gICAgd2lkdGg6IDQwJTtcbn1cbi5kZXN0aW5hdGlvbi1pbWcgaDR7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmRlc3RpbmF0aW9uLW1haW57XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTMlO1xufVxuI2Rlc3RpbmF0aW9uLW5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cbn1cbiNkZXN0aW5hdGlvbi1uYXYgdWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgXG59XG4jZGVzdGluYXRpb24tbmF2IGxpe1xuICAgIGhlaWdodDogNzAlO1xufVxuXG4jZGVzdGluYXRpb24tbmF2IGxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG5cbi5kZXNjcmlwdGlvbi1tYWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlzaWJsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRhdGF7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1Yi1vbmV7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuXG5cbi8qIFJlc3BvbnNpdmUgY3NzICovXG5cblxuXG4vKiBsYXlvdXQgZm9yIHRhYmxldHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcbiAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgfVxuICAgIC5kZXN0aW5hdGlvbi1jb250ZW50e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICBcbiAgICB9XG4gICAgLmRlc3RpbmF0aW9uLWltZyBoNHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAuZGVzdGluYXRpb24taW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5kZXN0aW5hdGlvbi1jb250ZW50IGltZ3tcbiAgICAgICB3aWR0aDogMjc0cHg7XG4gICAgICAgaGVpZ2h0OiAyNzRweDtcbiAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5kZXN0aW5hdGlvbi1tYWlue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgXG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi1tYWluIGgyLFxuICAgIC5kZXNjcmlwdGlvbi1tYWluIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2Rlc3RpbmF0aW9uLW5hdntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG5cbi8qbW9iaWxlKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSlcbiAgICB9XG4gICAgLmRlc3RpbmF0aW9uLWltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXN0aW5hdGlvbi1pbWcgaDR7XG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAuZGVzdGluYXRpb24tY29udGVudCBpbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB9XG4gICAgLmRlc3RpbmF0aW9uLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgIFxuICAgIH1cblxuICAgIC5kZXN0aW5hdGlvbi1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRhdGF7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAuZGlzdGFuY2UsXG4gICAgLnRpbWV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuc3ViLW9uZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cbiBcbn1cblxuLyp0aW55IG1vYmlsZSovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XG4gICAgI2Rlc3RpbmF0aW9uLW5hdiB1bHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmRlc3RpbmF0aW9uLWltZyBoNHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvZGVzdGluYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7O29DQUlvQzs7QUFFcEM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7O0lBRXBCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsNkJBQTZCOztJQUU3QixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsaUZBQXVHO0lBQ3ZHLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkNBQTJDOztJQUUzQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUlBLG1CQUFtQjs7OztBQUluQix1QkFBdUI7QUFDdkI7SUFDSTtRQUNJLHlEQUE4RTtJQUNsRjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLE1BQU07UUFDTixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLG1CQUFtQjs7SUFFdkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtPQUNHLFlBQVk7T0FDWixhQUFhO09BQ2IsaUJBQWlCO09BQ2pCLG1CQUFtQjtJQUN0Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVOztJQUVkO0lBQ0E7O1FBRUksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7OztBQUdBLFNBQVM7O0FBRVQ7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjs7QUFFQSxjQUFjOztBQUVkO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQmZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUJlbGxlZmFpciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xcbmZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgc2Fucy1zZXJpZjtcXG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC8qIGNvbG9yIHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLW1haW4tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6I0QwRDZGOTtcXG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XFxuXFxuICAgIC8qb3RoZXIgc2l6aW5ncyAqL1xcbiAgICAtLWNpcmNsZS1yYWRpdXM6Mjc0cHg7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvZGVzdGluYXRpb24vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1kZXNrdG9wLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgXFxufVxcblxcbi5kZXN0aW5hdGlvbi1jb250ZW50e1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDEycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGVzdGluYXRpb24tZGVzY3JpcHRpb25zIGgye1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuI2Rlc3RpbmF0aW9uLWRlc2NyaXB0aW9ucyBwe1xcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtO1xcbn1cXG5cXG5cXG4uZGVzdGluYXRpb24taW1ne1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG4uZGVzdGluYXRpb24taW1nIGg0e1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uZGVzdGluYXRpb24tbWFpbntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTMlO1xcbn1cXG4jZGVzdGluYXRpb24tbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxufVxcbiNkZXN0aW5hdGlvbi1uYXYgdWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIFxcbn1cXG4jZGVzdGluYXRpb24tbmF2IGxpe1xcbiAgICBoZWlnaHQ6IDcwJTtcXG59XFxuXFxuI2Rlc3RpbmF0aW9uLW5hdiBsaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1tYWlue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRhdGF7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWItb25le1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBSZXNwb25zaXZlIGNzcyAqL1xcblxcblxcblxcbi8qIGxheW91dCBmb3IgdGFibGV0cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGVzdGluYXRpb24vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi10YWJsZXQuanBnKTtcXG4gICAgfVxcbiAgICAuZGVzdGluYXRpb24tY29udGVudHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgLmRlc3RpbmF0aW9uLWltZyBoNHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAxNXB4O1xcbiAgICB9XFxuICAgIC5kZXN0aW5hdGlvbi1pbWd7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmRlc3RpbmF0aW9uLWNvbnRlbnQgaW1ne1xcbiAgICAgICB3aWR0aDogMjc0cHg7XFxuICAgICAgIGhlaWdodDogMjc0cHg7XFxuICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5kZXN0aW5hdGlvbi1tYWlue1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uLW1haW4gaDIsXFxuICAgIC5kZXNjcmlwdGlvbi1tYWluIHAge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNkZXN0aW5hdGlvbi1uYXZ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKm1vYmlsZSovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGVzdGluYXRpb24vYmFja2dyb3VuZC1kZXN0aW5hdGlvbi1tb2JpbGUuanBnKVxcbiAgICB9XFxuICAgIC5kZXN0aW5hdGlvbi1pbWd7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kZXN0aW5hdGlvbi1pbWcgaDR7XFxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG4gICAgLmRlc3RpbmF0aW9uLWNvbnRlbnQgaW1ne1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgfVxcbiAgICAuZGVzdGluYXRpb24tY29udGVudHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAuZGVzdGluYXRpb24tbWFpbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5kYXRhe1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgfVxcbiAgICAuZGlzdGFuY2UsXFxuICAgIC50aW1le1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnN1Yi1vbmV7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIH1cXG4gXFxufVxcblxcbi8qdGlueSBtb2JpbGUqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XFxuICAgICNkZXN0aW5hdGlvbi1uYXYgdWx7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgIC5kZXN0aW5hdGlvbi1pbWcgaDR7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXN0aW5hdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc3RpbmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9hc3NldHMvY3NzL3R5cG9ncmFwaHkuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvY3NzL25hdmJhci5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvZGVzdGluYXRpb24uY3NzJztcblxuaW1wb3J0IG1vb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLW1vb24ucG5nJztcbmltcG9ydCBtYXJzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1tYXJzLnBuZyc7XG5pbXBvcnQgdGl0YW4gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Rlc3RpbmF0aW9uL2ltYWdlLXRpdGFuLnBuZyc7XG5pbXBvcnQgZXVyb3BhIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kZXN0aW5hdGlvbi9pbWFnZS1ldXJvcGEucG5nJztcblxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGVzdGluYXRpb24taW1hZ2VdJyk7XG5jb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24tbWFpbicpOyAvL2dyYWIgYWxsIHRoZSBkZXNjcmlwdGlvbnNcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlc3RpbmF0aW9uLW5hdl0nKTsgLy9ncmFiIHRoZSBkZXN0aW5hdGlvbiBuYXZcbmNvbnN0IGRlc3RpbmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlc3RpbmF0aW9uLXVsXSBsaScpXG5cbmltZy5zcmMgPSBtb29uO1xuXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmKCEodGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykpIHJldHVybjtcbiAgICBlbHNle1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoZGVzdGluYXRpb25zKTtcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3ModGFyZ2V0KTtcbiAgICAgICAgcmVtb3ZlVmlzaWJpbGl0eUNsYXNzKGRlc2NyaXB0aW9ucyk7XG4gICAgICAgIGFkZFZpc2liaWxpdHlDbGFzcyhzZWxlY3RlZCxkZXNjcmlwdGlvbnMpO1xuICAgICAgICBhZGRJbWFnZShzZWxlY3RlZCk7XG4gICAgfVxufSlcblxuXG5mdW5jdGlvbiByZW1vdmVWaXNpYmlsaXR5Q2xhc3MoYXJyYXkpe1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRWaXNpYmlsaXR5Q2xhc3MoaWQsYXJyYXkpe1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBpZihlbGVtZW50LmlkID09PSBpZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEltYWdlKGlkKXtcbiAgICBjb25zdCB0ZW1wID0gaWQudG9Mb3dlckNhc2UoKTtcbiAgICBpZih0ZW1wID09PSBcIm1vb25cIil7XG4gICAgICAgIGltZy5zcmMgPSBtb29uO1xuICAgIH1lbHNlIGlmKHRlbXAgPT09IFwibWFyc1wiKXtcbiAgICAgICAgaW1nLnNyYyA9IG1hcnM7XG4gICAgfWVsc2UgaWYodGVtcCA9PT0gXCJ0aXRhblwiKXtcbiAgICAgICAgaW1nLnNyYyA9IHRpdGFuO1xuICAgIH1lbHNlIGlmKHRlbXAgPT09IFwiZXVyb3BhXCIpe1xuICAgICAgICBpbWcuc3JjID0gZXVyb3BhO1xuICAgIH1cbiAgIFxufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyhhcnJheSl7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3ModGFyZ2V0KXtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZGVzdGluYXRpb25cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3BhY2VfdG91cmlzbVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcGFjZV90b3VyaXNtXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcIm5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanMtc3JjX2Fzc2V0c19jc3NfbmF2YmFyX2Nzcy1zcmNfYXNzZXRzX2Nzc190eXBvZy1iZDdkMzZcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGVzdGluYXRpb24uanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==