/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css ***!
  \***********************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home/background-home-desktop.jpg */ "./src/assets/images/home/background-home-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home/background-home-tablet.jpg */ "./src/assets/images/home/background-home-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Barlow+Condensed&family=Bebas+Neue&family=Bellefair&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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

    /* font size variables */

    --heading-1-size:150px;
    --heading-2-size:100px;
    --heading-3-size:56px;
    --heading-4-size:32px;
    --heading-5-size:28px;

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
    overflow: hidden
   
    
}

/* #navbar{
    color: var(--main-color);
     margin-top: 48px;
     height: 80px;
     display: flex;
     align-items: center;
     justify-content: space-between;
    
} */


h1{
    font-family: 'Bellefair', serif;
    color: var(--main-color);
    font-size: var(--heading-1-size);
   
}

h4{
    font-family: 'Bellefair', serif;
    color: var(--miscellaneous-color); 
    font-size: var(--heading-4-size);
    
}

h5{
    font-family: 'Barlow Condensed', sans-serif;
    color: var(--secondary-color);
    font-size: var(--heading-5-size);
    letter-spacing: 4.75px;
}

.content-wrapper{
    /* border: 1px solid red; */
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30vh;
    margin-bottom: 10vh;
    justify-content: space-between;
    align-items: flex-end;
    height: 500px;
    position: relative;
    /* border: 1px solid red; */
}
.hero{
    
   width: max-content;
   margin-left: 300px;
   margin-bottom: 50px;
}


.trigger{
    width: var(--circle-radius);
    height: var(--circle-radius);
    z-index: 1;
    border-radius: 50%;
    background-color: #979797;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: calc( 274px/2); */
    margin-right: 18%;
    margin-bottom: 2%;
    
    
    
}
.trigger:hover{
    cursor: pointer;
}

.trigger:hover .btn{
    transform: scale(1.3);
    border: 50px solid #979797;

}
.trigger:hover .btn h4{
    transform: scale(0.77);
   

}
.btn{
    width: 274px;
    height: 274px;
    border-radius: 50%;
    background-color: var(--main-color);
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
}
.btn h4{
    transition: transform 0.3s ease-in-out;
}

.hero p{
    font-family:'Barlow Condensed', sans-serif ;
    font-size: 18px;
    line-height: 30px;
}

.home-content{
    width: 400px;
    margin-top: 0;
    margin-bottom: 10px;
}


/* layout for tablets */
@media (max-width:912px){
    body{
        background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center center / cover fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden; 
        overflow: hidden;
        
    }
    .content-wrapper{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 25vh; 
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        position: relative;   
    }
    .hero{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width:100%;
        margin-top: 15%;
        margin-left:0;
        
       
    }
    .home-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        text-align: center;
    }
    .trigger{
    
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0;
        margin-bottom: 15%;
        
        
        
    }   
}

/*mobile*/

@media (max-width: 480px){
    .trigger{
        width: calc(var(--circle-radius)/1.5);
        height: calc(var(--circle-radius)/1.5);
    }

    .btn{
        width: calc(var(--circle-radius)/1.5);
        height: calc(var(--circle-radius)/1.5);
    }

    .hero h1{
        
        font-size: calc(var(--heading-1-size)/1.5);
       
    }
    .hero h4{ 
        font-size: calc(var(--heading-4-size)/1.2);
        
    }

    .hero p{
        font-size: 17px;
        line-height: 25px;
    }

   .content-wrapper{
    width: fit-content;
   }
    

}`, "",{"version":3,"sources":["webpack://./src/assets/css/home.css"],"names":[],"mappings":"AAEA;;;;oCAIoC;;AAEpC;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;;IAEpB,gCAAgC;IAChC,yBAAyB;IACzB,6BAA6B;;IAE7B,wBAAwB;;IAExB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;;IAErB,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,SAAS;IACT,UAAU;IACV,cAAc;IACd,iFAAyF;IACzF,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB;;;AAGJ;;AAEA;;;;;;;;GAQG;;;AAGH;IACI,+BAA+B;IAC/B,wBAAwB;IACxB,gCAAgC;;AAEpC;;AAEA;IACI,+BAA+B;IAC/B,iCAAiC;IACjC,gCAAgC;;AAEpC;;AAEA;IACI,2CAA2C;IAC3C,6BAA6B;IAC7B,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;IACb,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;;GAEG,kBAAkB;GAClB,kBAAkB;GAClB,mBAAmB;AACtB;;;AAGA;IACI,2BAA2B;IAC3B,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,iBAAiB;IACjB,iBAAiB;;;;AAIrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,0BAA0B;;AAE9B;AACA;IACI,sBAAsB;;;AAG1B;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;AAC1C;AACA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2CAA2C;IAC3C,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;;AAGA,uBAAuB;AACvB;IACI;QACI,yFAAgG;QAChG,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,kBAAkB;QAClB,gBAAgB;;IAEpB;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,UAAU;QACV,gBAAgB;QAChB,iBAAiB;QACjB,gBAAgB;QAChB,8BAA8B;QAC9B,mBAAmB;QACnB,mBAAmB;QACnB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,sBAAsB;QACtB,UAAU;QACV,eAAe;QACf,aAAa;;;IAGjB;IACA;QACI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,UAAU;QACV,SAAS;QACT,kBAAkB;IACtB;IACA;;QAEI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,eAAe;QACf,kBAAkB;;;;IAItB;AACJ;;AAEA,SAAS;;AAET;IACI;QACI,qCAAqC;QACrC,sCAAsC;IAC1C;;IAEA;QACI,qCAAqC;QACrC,sCAAsC;IAC1C;;IAEA;;QAEI,0CAA0C;;IAE9C;IACA;QACI,0CAA0C;;IAE9C;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;GAED;IACC,kBAAkB;GACnB;;;AAGH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Barlow+Condensed&family=Bebas+Neue&family=Bellefair&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');\n\n/* font-family: 'ADLaM Display', cursive;\nfont-family: 'Barlow Condensed', sans-serif;\nfont-family: 'Bebas Neue', sans-serif;\nfont-family: 'Bellefair', serif;\nfont-family: 'Roboto', sans-serif; */\n\n*,*::before,*::after{\n    box-sizing: border-box;\n}\n\n:root{\n    /* color variables */\n\n    --main-color:rgba(255, 255, 255);\n    --secondary-color:#D0D6F9;\n    --miscellaneous-color:#0B0D17;\n\n    /* font size variables */\n\n    --heading-1-size:150px;\n    --heading-2-size:100px;\n    --heading-3-size:56px;\n    --heading-4-size:32px;\n    --heading-5-size:28px;\n\n    /*other sizings */\n    --circle-radius:274px;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100dvh;\n    background: url(../images/home/background-home-desktop.jpg) no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color:var(--secondary-color);\n    position: relative;\n    overflow: hidden\n   \n    \n}\n\n/* #navbar{\n    color: var(--main-color);\n     margin-top: 48px;\n     height: 80px;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n    \n} */\n\n\nh1{\n    font-family: 'Bellefair', serif;\n    color: var(--main-color);\n    font-size: var(--heading-1-size);\n   \n}\n\nh4{\n    font-family: 'Bellefair', serif;\n    color: var(--miscellaneous-color); \n    font-size: var(--heading-4-size);\n    \n}\n\nh5{\n    font-family: 'Barlow Condensed', sans-serif;\n    color: var(--secondary-color);\n    font-size: var(--heading-5-size);\n    letter-spacing: 4.75px;\n}\n\n.content-wrapper{\n    /* border: 1px solid red; */\n    display: flex;\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 30vh;\n    margin-bottom: 10vh;\n    justify-content: space-between;\n    align-items: flex-end;\n    height: 500px;\n    position: relative;\n    /* border: 1px solid red; */\n}\n.hero{\n    \n   width: max-content;\n   margin-left: 300px;\n   margin-bottom: 50px;\n}\n\n\n.trigger{\n    width: var(--circle-radius);\n    height: var(--circle-radius);\n    z-index: 1;\n    border-radius: 50%;\n    background-color: #979797;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* margin-right: calc( 274px/2); */\n    margin-right: 18%;\n    margin-bottom: 2%;\n    \n    \n    \n}\n.trigger:hover{\n    cursor: pointer;\n}\n\n.trigger:hover .btn{\n    transform: scale(1.3);\n    border: 50px solid #979797;\n\n}\n.trigger:hover .btn h4{\n    transform: scale(0.77);\n   \n\n}\n.btn{\n    width: 274px;\n    height: 274px;\n    border-radius: 50%;\n    background-color: var(--main-color);\n    z-index: 2;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: transform 0.3s ease-in-out;\n}\n.btn h4{\n    transition: transform 0.3s ease-in-out;\n}\n\n.hero p{\n    font-family:'Barlow Condensed', sans-serif ;\n    font-size: 18px;\n    line-height: 30px;\n}\n\n.home-content{\n    width: 400px;\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n\n/* layout for tablets */\n@media (max-width:912px){\n    body{\n        background: url(../images/home/background-home-tablet.jpg) no-repeat center center / cover fixed;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow-x: hidden; \n        overflow: hidden;\n        \n    }\n    .content-wrapper{\n        display: flex;\n        flex-direction: column;\n        width: 80%;\n        margin-left: 10%;\n        margin-right: 10%;\n        margin-top: 25vh; \n        justify-content: space-between;\n        align-items: center;\n        height: fit-content;\n        position: relative;   \n    }\n    .hero{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        width:100%;\n        margin-top: 15%;\n        margin-left:0;\n        \n       \n    }\n    .home-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 0;\n        margin: 0;\n        text-align: center;\n    }\n    .trigger{\n    \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 0;\n        margin-bottom: 15%;\n        \n        \n        \n    }   \n}\n\n/*mobile*/\n\n@media (max-width: 480px){\n    .trigger{\n        width: calc(var(--circle-radius)/1.5);\n        height: calc(var(--circle-radius)/1.5);\n    }\n\n    .btn{\n        width: calc(var(--circle-radius)/1.5);\n        height: calc(var(--circle-radius)/1.5);\n    }\n\n    .hero h1{\n        \n        font-size: calc(var(--heading-1-size)/1.5);\n       \n    }\n    .hero h4{ \n        font-size: calc(var(--heading-4-size)/1.2);\n        \n    }\n\n    .hero p{\n        font-size: 17px;\n        line-height: 25px;\n    }\n\n   .content-wrapper{\n    width: fit-content;\n   }\n    \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/navbar.css */ "./src/assets/css/navbar.css");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/home.css */ "./src/assets/css/home.css");
// import json from './assets/data/data.json';


//  import './assets/css/home.css';
 
 

/***/ }),

/***/ "./src/assets/images/home/background-home-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/home/background-home-desktop.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdf3864ecbfdf20e8c3b.jpg";

/***/ }),

/***/ "./src/assets/images/home/background-home-tablet.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/home/background-home-tablet.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc9efcc3281fa6801077.jpg";

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["node_modules_css-loader_dist_runtime_getUrl_js-src_assets_css_navbar_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2Nzcy9ob21lLmNzcz83NDg0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QURMYU0rRGlzcGxheSZmYW1pbHk9QmFybG93K0NvbmRlbnNlZCZmYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9QmVsbGVmYWlyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xuZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbmZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIHNhbnMtc2VyaWY7XG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xuXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAvKiBjb2xvciB2YXJpYWJsZXMgKi9cblxuICAgIC0tbWFpbi1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiNEMEQ2Rjk7XG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XG5cbiAgICAvKiBmb250IHNpemUgdmFyaWFibGVzICovXG5cbiAgICAtLWhlYWRpbmctMS1zaXplOjE1MHB4O1xuICAgIC0taGVhZGluZy0yLXNpemU6MTAwcHg7XG4gICAgLS1oZWFkaW5nLTMtc2l6ZTo1NnB4O1xuICAgIC0taGVhZGluZy00LXNpemU6MzJweDtcbiAgICAtLWhlYWRpbmctNS1zaXplOjI4cHg7XG5cbiAgICAvKm90aGVyIHNpemluZ3MgKi9cbiAgICAtLWNpcmNsZS1yYWRpdXM6Mjc0cHg7XG59XG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gICBcbiAgICBcbn1cblxuLyogI25hdmJhcntcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgIGhlaWdodDogODBweDtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxufSAqL1xuXG5cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy0xLXNpemUpO1xuICAgXG59XG5cbmg0e1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLW1pc2NlbGxhbmVvdXMtY29sb3IpOyBcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNC1zaXplKTtcbiAgICBcbn1cblxuaDV7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNS1zaXplKTtcbiAgICBsZXR0ZXItc3BhY2luZzogNC43NXB4O1xufVxuXG4uY29udGVudC13cmFwcGVye1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG4uaGVyb3tcbiAgICBcbiAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cblxuLnRyaWdnZXJ7XG4gICAgd2lkdGg6IHZhcigtLWNpcmNsZS1yYWRpdXMpO1xuICAgIGhlaWdodDogdmFyKC0tY2lyY2xlLXJhZGl1cyk7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKCAyNzRweC8yKTsgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDE4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBcbiAgICBcbiAgICBcbn1cbi50cmlnZ2VyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRyaWdnZXI6aG92ZXIgLmJ0bntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgYm9yZGVyOiA1MHB4IHNvbGlkICM5Nzk3OTc7XG5cbn1cbi50cmlnZ2VyOmhvdmVyIC5idG4gaDR7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcbiAgIFxuXG59XG4uYnRue1xuICAgIHdpZHRoOiAyNzRweDtcbiAgICBoZWlnaHQ6IDI3NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYnRuIGg0e1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGVybyBwe1xuICAgIGZvbnQtZmFtaWx5OidCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZiA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaG9tZS1jb250ZW50e1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuLyogbGF5b3V0IGZvciB0YWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDo5MTJweCl7XG4gICAgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBcbiAgICB9XG4gICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1dmg7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcbiAgICB9XG4gICAgLmhlcm97XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICAuaG9tZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudHJpZ2dlcntcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0gICBcbn1cblxuLyptb2JpbGUqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xuICAgIC50cmlnZ2Vye1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICB9XG5cbiAgICAuaGVybyBoMXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1oZWFkaW5nLTEtc2l6ZSkvMS41KTtcbiAgICAgICBcbiAgICB9XG4gICAgLmhlcm8gaDR7IFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy00LXNpemUpLzEuMik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5oZXJvIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAuY29udGVudC13cmFwcGVye1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgIH1cbiAgICBcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7b0NBSW9DOztBQUVwQztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjs7SUFFcEIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7O0lBRTdCLHdCQUF3Qjs7SUFFeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjs7SUFFckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsaUZBQXlGO0lBQ3pGLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCOzs7QUFHSjs7QUFFQTs7Ozs7Ozs7R0FRRzs7O0FBR0g7SUFDSSwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBOztHQUVHLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0FBQ3RCOzs7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQkFBaUI7Ozs7QUFJckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCOztBQUU5QjtBQUNBO0lBQ0ksc0JBQXNCOzs7QUFHMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsdUJBQXVCO0FBQ3ZCO0lBQ0k7UUFDSSx5RkFBZ0c7UUFDaEcsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjs7SUFFcEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixlQUFlO1FBQ2YsYUFBYTs7O0lBR2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixVQUFVO1FBQ1YsU0FBUztRQUNULGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7Ozs7SUFJdEI7QUFDSjs7QUFFQSxTQUFTOztBQUVUO0lBQ0k7UUFDSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQzs7SUFFQTs7UUFFSSwwQ0FBMEM7O0lBRTlDO0lBQ0E7UUFDSSwwQ0FBMEM7O0lBRTlDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7R0FFRDtJQUNDLGtCQUFrQjtHQUNuQjs7O0FBR0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QURMYU0rRGlzcGxheSZmYW1pbHk9QmFybG93K0NvbmRlbnNlZCZmYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9QmVsbGVmYWlyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGZvbnQtZmFtaWx5OiAnQURMYU0gRGlzcGxheScsIGN1cnNpdmU7XFxuZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG5mb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBzYW5zLXNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xcblxcbiosKjo6YmVmb3JlLCo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLyogY29sb3IgdmFyaWFibGVzICovXFxuXFxuICAgIC0tbWFpbi1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjojRDBENkY5O1xcbiAgICAtLW1pc2NlbGxhbmVvdXMtY29sb3I6IzBCMEQxNztcXG5cXG4gICAgLyogZm9udCBzaXplIHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLWhlYWRpbmctMS1zaXplOjE1MHB4O1xcbiAgICAtLWhlYWRpbmctMi1zaXplOjEwMHB4O1xcbiAgICAtLWhlYWRpbmctMy1zaXplOjU2cHg7XFxuICAgIC0taGVhZGluZy00LXNpemU6MzJweDtcXG4gICAgLS1oZWFkaW5nLTUtc2l6ZToyOHB4O1xcblxcbiAgICAvKm90aGVyIHNpemluZ3MgKi9cXG4gICAgLS1jaXJjbGUtcmFkaXVzOjI3NHB4O1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLWRlc2t0b3AuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgIFxcbiAgICBcXG59XFxuXFxuLyogI25hdmJhcntcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICAgbWFyZ2luLXRvcDogNDhweDtcXG4gICAgIGhlaWdodDogODBweDtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59ICovXFxuXFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTEtc2l6ZSk7XFxuICAgXFxufVxcblxcbmg0e1xcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbWlzY2VsbGFuZW91cy1jb2xvcik7IFxcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNC1zaXplKTtcXG4gICAgXFxufVxcblxcbmg1e1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTUtc2l6ZSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0Ljc1cHg7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXJ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuLmhlcm97XFxuICAgIFxcbiAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICBtYXJnaW4tbGVmdDogMzAwcHg7XFxuICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuXFxuLnRyaWdnZXJ7XFxuICAgIHdpZHRoOiB2YXIoLS1jaXJjbGUtcmFkaXVzKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jaXJjbGUtcmFkaXVzKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKCAyNzRweC8yKTsgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAxOCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG4udHJpZ2dlcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udHJpZ2dlcjpob3ZlciAuYnRue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIGJvcmRlcjogNTBweCBzb2xpZCAjOTc5Nzk3O1xcblxcbn1cXG4udHJpZ2dlcjpob3ZlciAuYnRuIGg0e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzcpO1xcbiAgIFxcblxcbn1cXG4uYnRue1xcbiAgICB3aWR0aDogMjc0cHg7XFxuICAgIGhlaWdodDogMjc0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuIGg0e1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlcm8gcHtcXG4gICAgZm9udC1mYW1pbHk6J0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmIDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmhvbWUtY29udGVudHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBsYXlvdXQgZm9yIHRhYmxldHMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo5MTJweCl7XFxuICAgIGJvZHl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLXRhYmxldC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY29udGVudC13cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjV2aDsgXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcXG4gICAgfVxcbiAgICAuaGVyb3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjA7XFxuICAgICAgICBcXG4gICAgICAgXFxuICAgIH1cXG4gICAgLmhvbWUtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudHJpZ2dlcntcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9ICAgXFxufVxcblxcbi8qbW9iaWxlKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xcbiAgICAudHJpZ2dlcntcXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcXG4gICAgfVxcblxcbiAgICAuYnRue1xcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGgxe1xcbiAgICAgICAgXFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy0xLXNpemUpLzEuNSk7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5oZXJvIGg0eyBcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1oZWFkaW5nLTQtc2l6ZSkvMS4yKTtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5oZXJvIHB7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgIC5jb250ZW50LXdyYXBwZXJ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICB9XFxuICAgIFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIGltcG9ydCBqc29uIGZyb20gJy4vYXNzZXRzL2RhdGEvZGF0YS5qc29uJztcblxuXG4vLyAgaW1wb3J0ICcuL2Fzc2V0cy9jc3MvaG9tZS5jc3MnO1xuIGltcG9ydCAnLi9hc3NldHMvY3NzL25hdmJhci5jc3MnO1xuIGltcG9ydCAnLi9hc3NldHMvY3NzL2hvbWUuY3NzJzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcGFjZV90b3VyaXNtXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3NwYWNlX3RvdXJpc21cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wibm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2dldFVybF9qcy1zcmNfYXNzZXRzX2Nzc19uYXZiYXJfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=