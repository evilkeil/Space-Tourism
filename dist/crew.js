/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/crew.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/crew.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/crew/background-crew-desktop.jpg */ "./src/assets/images/crew/background-crew-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/crew/background-crew-tablet.jpg */ "./src/assets/images/crew/background-crew-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/crew/background-crew-mobile.jpg */ "./src/assets/images/crew/background-crew-mobile.jpg"), __webpack_require__.b);
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
    justify-content: center;
    align-items: end;
    
   
}


.content{
    display: flex;
    width: 100vw;
    height: 50%;
    margin-bottom: 0;
    margin: 0;
    height: 90%;
    
   
}

.main-content{
    width: 35%;
    padding-top: 3%;
    display:flex;
    flex-direction: column;
    gap: 100px;
    margin-left: 10%;
    position: relative;
}
.crew-image{
    display: flex;
    align-items: flex-end;
    width: 30%;
}

.crew-image img{
    height: 95%;
}

.description-wrapper{
    flex:1; /*makes the element fill the rest of the container*/
    display: flex;
    flex-direction: column;
}

.crew-position{
    margin-bottom: 0;
    color: #979797;
    
}

.crew-name{
    margin-top: 15px;
    margin-bottom: 15px;
}
.crew-info{
width: 70%;
color: var(--secondary-color);
height: 200px;
}

.current-crew{
    list-style: none;
    display: flex;
    gap: 24px;
   /* position: absolute;
   left: 0px;
   bottom: 300px; */
   margin: 0;
   margin-top: 0;
   padding: 0;
}

.current-crew li{
    background-color: #979797;
    border-radius: 50%;
    width: 15px;
    height: 15px;
}
.current-crew li:hover{
    cursor: pointer;
}
.current-crew .selected{
    background-color: var(--main-color);

}

.crew-description{
    display: none;
}

.visible{
    display: block;
}

/* Responsive css */

/* layout for tablets */
@media (max-width:912px){
    body{
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        display: grid;
        justify-content: center;
        align-items: start;
    }
    .content{
        flex-direction: column;
        width: 70vw;
        margin-bottom: 0;
        margin: 0;
        height: 100%;
        /* justify-content: center;
        align-items: center; */
        
       
    }
    .main-content{
        width: 100%;
        padding: 0;
        /* border: 1px solid red; */
        gap: 5px;
        margin: 0;
        margin-top: 125px;
        position: inherit;
        
    }

    .crew-image{
        /* border: 1px solid blue; */
        width: 100%;
    }

    .header h4{
        margin: 0;
        padding: 0;
        position: absolute;
        top:90px;
        left: 0;
        font-size: 16px;
    }
    .crew-position{
        margin: 0;
        text-align: center;
        font-size: 24px;
    }
    .crew-name{
        text-align: center;
        font-size: 40px;
    }
    .crew-info{
        text-align: center;
        margin: 0;
        width: 100%;
        height: 10%;
        font-size: 16px;
    }
    .current-crew{
        justify-content: center;
        align-items: center;
        margin-top: 5px;
    }
    .crew-image{
        justify-content: center;
        align-items: center;
    }
    .current-crew li{
        width: 10px;
        height: 10px;
    }
}


/*mobile*/

@media (max-width: 480px){
    body{
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        
    }
    .header h4{
        width: 100vw;
        text-align: center;
    }
    .crew-position{
        margin-top: 50px;
        font-size: 16px;
    }
    .crew-name{
        font-size: 24px;
    }
    .crew-info{
        font-size: 15px;
    }

    .crew-image img{
        height: 350px;
        width: 250px;
    }
    .crew-image{
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .content{
        flex-direction: column-reverse;
        margin-top: 0;
        justify-content: center;
    }
    .main-content{
        margin-top: 0px;  
    }
    .description-wrapper{
        position: relative;
    }
    .current-crew{
        position: absolute;
        top: 0;
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/assets/css/crew.css"],"names":[],"mappings":"AAEA;;;;oCAIoC;;AAEpC;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;;IAEpB,gCAAgC;IAChC,yBAAyB;IACzB,6BAA6B;;IAE7B,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,cAAc;IACd,iFAAyF;IACzF,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;;;AAGpB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,SAAS;IACT,WAAW;;;AAGf;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,MAAM,EAAE,mDAAmD;IAC3D,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,cAAc;;AAElB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;AACA,UAAU;AACV,6BAA6B;AAC7B,aAAa;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;GACV;;mBAEgB;GAChB,SAAS;GACT,aAAa;GACb,UAAU;AACb;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,mCAAmC;;AAEvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA,mBAAmB;;AAEnB,uBAAuB;AACvB;IACI;QACI,yDAAgE;QAChE,aAAa;QACb,uBAAuB;QACvB,kBAAkB;IACtB;IACA;QACI,sBAAsB;QACtB,WAAW;QACX,gBAAgB;QAChB,SAAS;QACT,YAAY;QACZ;8BACsB;;;IAG1B;IACA;QACI,WAAW;QACX,UAAU;QACV,2BAA2B;QAC3B,QAAQ;QACR,SAAS;QACT,iBAAiB;QACjB,iBAAiB;;IAErB;;IAEA;QACI,4BAA4B;QAC5B,WAAW;IACf;;IAEA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;QAClB,QAAQ;QACR,OAAO;QACP,eAAe;IACnB;IACA;QACI,SAAS;QACT,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,kBAAkB;QAClB,SAAS;QACT,WAAW;QACX,WAAW;QACX,eAAe;IACnB;IACA;QACI,uBAAuB;QACvB,mBAAmB;QACnB,eAAe;IACnB;IACA;QACI,uBAAuB;QACvB,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,YAAY;IAChB;AACJ;;;AAGA,SAAS;;AAET;IACI;QACI,yDAAgE;;IAEpE;IACA;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;QACb,YAAY;IAChB;IACA;QACI,8CAA8C;IAClD;IACA;QACI,8BAA8B;QAC9B,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;QAClB,MAAM;QACN,WAAW;IACf;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Barlow+Condensed&family=Bebas+Neue&family=Bellefair&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');\n\n/* font-family: 'ADLaM Display', cursive;\nfont-family: 'Barlow Condensed', sans-serif;\nfont-family: 'Bebas Neue', sans-serif;\nfont-family: 'Bellefair', serif;\nfont-family: 'Roboto', sans-serif; */\n\n*,*::before,*::after{\n    box-sizing: border-box;\n}\n\n:root{\n    /* color variables */\n\n    --main-color:rgba(255, 255, 255);\n    --secondary-color:#D0D6F9;\n    --miscellaneous-color:#0B0D17;\n\n    /*other sizings */\n    --circle-radius:274px;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100dvh;\n    background: url(../images/crew/background-crew-desktop.jpg) no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color:var(--secondary-color);\n    position: relative;\n    overflow: hidden;\n    display: grid;\n    justify-content: center;\n    align-items: end;\n    \n   \n}\n\n\n.content{\n    display: flex;\n    width: 100vw;\n    height: 50%;\n    margin-bottom: 0;\n    margin: 0;\n    height: 90%;\n    \n   \n}\n\n.main-content{\n    width: 35%;\n    padding-top: 3%;\n    display:flex;\n    flex-direction: column;\n    gap: 100px;\n    margin-left: 10%;\n    position: relative;\n}\n.crew-image{\n    display: flex;\n    align-items: flex-end;\n    width: 30%;\n}\n\n.crew-image img{\n    height: 95%;\n}\n\n.description-wrapper{\n    flex:1; /*makes the element fill the rest of the container*/\n    display: flex;\n    flex-direction: column;\n}\n\n.crew-position{\n    margin-bottom: 0;\n    color: #979797;\n    \n}\n\n.crew-name{\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.crew-info{\nwidth: 70%;\ncolor: var(--secondary-color);\nheight: 200px;\n}\n\n.current-crew{\n    list-style: none;\n    display: flex;\n    gap: 24px;\n   /* position: absolute;\n   left: 0px;\n   bottom: 300px; */\n   margin: 0;\n   margin-top: 0;\n   padding: 0;\n}\n\n.current-crew li{\n    background-color: #979797;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n}\n.current-crew li:hover{\n    cursor: pointer;\n}\n.current-crew .selected{\n    background-color: var(--main-color);\n\n}\n\n.crew-description{\n    display: none;\n}\n\n.visible{\n    display: block;\n}\n\n/* Responsive css */\n\n/* layout for tablets */\n@media (max-width:912px){\n    body{\n        background-image: url(../images/crew/background-crew-tablet.jpg);\n        display: grid;\n        justify-content: center;\n        align-items: start;\n    }\n    .content{\n        flex-direction: column;\n        width: 70vw;\n        margin-bottom: 0;\n        margin: 0;\n        height: 100%;\n        /* justify-content: center;\n        align-items: center; */\n        \n       \n    }\n    .main-content{\n        width: 100%;\n        padding: 0;\n        /* border: 1px solid red; */\n        gap: 5px;\n        margin: 0;\n        margin-top: 125px;\n        position: inherit;\n        \n    }\n\n    .crew-image{\n        /* border: 1px solid blue; */\n        width: 100%;\n    }\n\n    .header h4{\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        top:90px;\n        left: 0;\n        font-size: 16px;\n    }\n    .crew-position{\n        margin: 0;\n        text-align: center;\n        font-size: 24px;\n    }\n    .crew-name{\n        text-align: center;\n        font-size: 40px;\n    }\n    .crew-info{\n        text-align: center;\n        margin: 0;\n        width: 100%;\n        height: 10%;\n        font-size: 16px;\n    }\n    .current-crew{\n        justify-content: center;\n        align-items: center;\n        margin-top: 5px;\n    }\n    .crew-image{\n        justify-content: center;\n        align-items: center;\n    }\n    .current-crew li{\n        width: 10px;\n        height: 10px;\n    }\n}\n\n\n/*mobile*/\n\n@media (max-width: 480px){\n    body{\n        background-image: url(../images/crew/background-crew-mobile.jpg);\n        \n    }\n    .header h4{\n        width: 100vw;\n        text-align: center;\n    }\n    .crew-position{\n        margin-top: 50px;\n        font-size: 16px;\n    }\n    .crew-name{\n        font-size: 24px;\n    }\n    .crew-info{\n        font-size: 15px;\n    }\n\n    .crew-image img{\n        height: 350px;\n        width: 250px;\n    }\n    .crew-image{\n        border-bottom: 1px solid rgba(255,255,255,0.2);\n    }\n    .content{\n        flex-direction: column-reverse;\n        margin-top: 0;\n        justify-content: center;\n    }\n    .main-content{\n        margin-top: 0px;  \n    }\n    .description-wrapper{\n        position: relative;\n    }\n    .current-crew{\n        position: absolute;\n        top: 0;\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/crew.css":
/*!*********************************!*\
  !*** ./src/assets/css/crew.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_crew_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./crew.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/crew.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_crew_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_crew_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_crew_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_crew_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/crew.js":
/*!*********************!*\
  !*** ./src/crew.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/assets/images/crew/background-crew-desktop.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/crew/background-crew-desktop.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88a3c692fd34eb311e04.jpg";

/***/ }),

/***/ "./src/assets/images/crew/background-crew-mobile.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/background-crew-mobile.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f0ed7f1557a2a3ebf68.jpg";

/***/ }),

/***/ "./src/assets/images/crew/background-crew-tablet.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/crew/background-crew-tablet.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d51cf61e98ce45eb61.jpg";

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
/******/ 			"crew": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["node_modules_css-loader_dist_runtime_getUrl_js-src_assets_css_navbar_css-src_assets_css_typog-bd7d36"], () => (__webpack_require__("./src/crew.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2Nzcy9jcmV3LmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvY3Jldy5jc3M/MjcxMiIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2NyZXcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctdGFibGV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jcmV3L2JhY2tncm91bmQtY3Jldy1tb2JpbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BRExhTStEaXNwbGF5JmZhbWlseT1CYXJsb3crQ29uZGVuc2VkJmZhbWlseT1CZWJhcytOZXVlJmZhbWlseT1CZWxsZWZhaXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xuZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbmZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIHNhbnMtc2VyaWY7XG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xuXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAvKiBjb2xvciB2YXJpYWJsZXMgKi9cblxuICAgIC0tbWFpbi1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiNEMEQ2Rjk7XG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XG5cbiAgICAvKm90aGVyIHNpemluZ3MgKi9cbiAgICAtLWNpcmNsZS1yYWRpdXM6Mjc0cHg7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDBkdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIFxuICAgXG59XG5cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgXG4gICBcbn1cblxuLm1haW4tY29udGVudHtcbiAgICB3aWR0aDogMzUlO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNyZXctaW1hZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmNyZXctaW1hZ2UgaW1ne1xuICAgIGhlaWdodDogOTUlO1xufVxuXG4uZGVzY3JpcHRpb24td3JhcHBlcntcbiAgICBmbGV4OjE7IC8qbWFrZXMgdGhlIGVsZW1lbnQgZmlsbCB0aGUgcmVzdCBvZiB0aGUgY29udGFpbmVyKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jcmV3LXBvc2l0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgXG59XG5cbi5jcmV3LW5hbWV7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNyZXctaW5mb3tcbndpZHRoOiA3MCU7XG5jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbmhlaWdodDogMjAwcHg7XG59XG5cbi5jdXJyZW50LWNyZXd7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjRweDtcbiAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDBweDtcbiAgIGJvdHRvbTogMzAwcHg7ICovXG4gICBtYXJnaW46IDA7XG4gICBtYXJnaW4tdG9wOiAwO1xuICAgcGFkZGluZzogMDtcbn1cblxuLmN1cnJlbnQtY3JldyBsaXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG4uY3VycmVudC1jcmV3IGxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXJyZW50LWNyZXcgLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuXG59XG5cbi5jcmV3LWRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aXNpYmxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBSZXNwb25zaXZlIGNzcyAqL1xuXG4vKiBsYXlvdXQgZm9yIHRhYmxldHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcbiAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICBcbiAgICAgICBcbiAgICB9XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuY3Jldy1pbWFnZXtcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmhlYWRlciBoNHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDo5MHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jcmV3LXBvc2l0aW9ue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuY3Jldy1uYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG4gICAgLmNyZXctaW5mb3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuY3VycmVudC1jcmV3e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICAuY3Jldy1pbWFnZXtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jdXJyZW50LWNyZXcgbGl7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG5cbi8qbW9iaWxlKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaGVhZGVyIGg0e1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNyZXctcG9zaXRpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNyZXctbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuY3Jldy1pbmZve1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgLmNyZXctaW1hZ2UgaW1ne1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuICAgIC5jcmV3LWltYWdle1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4OyAgXG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi13cmFwcGVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5jdXJyZW50LWNyZXd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9jcmV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7OztvQ0FJb0M7O0FBRXBDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9COztJQUVwQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDZCQUE2Qjs7SUFFN0IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLGlGQUF5RjtJQUN6Riw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7OztBQUdwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7OztBQUdmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE1BQU0sRUFBRSxtREFBbUQ7SUFDM0QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0dBQ1Y7O21CQUVnQjtHQUNoQixTQUFTO0dBQ1QsYUFBYTtHQUNiLFVBQVU7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxtQkFBbUI7O0FBRW5CLHVCQUF1QjtBQUN2QjtJQUNJO1FBQ0kseURBQWdFO1FBQ2hFLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsWUFBWTtRQUNaOzhCQUNzQjs7O0lBRzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixPQUFPO1FBQ1AsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksU0FBUztRQUNULGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSjs7O0FBR0EsU0FBUzs7QUFFVDtJQUNJO1FBQ0kseURBQWdFOztJQUVwRTtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksOENBQThDO0lBQ2xEO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQmZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUJlbGxlZmFpciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xcbmZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgc2Fucy1zZXJpZjtcXG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC8qIGNvbG9yIHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLW1haW4tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6I0QwRDZGOTtcXG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XFxuXFxuICAgIC8qb3RoZXIgc2l6aW5ncyAqL1xcbiAgICAtLWNpcmNsZS1yYWRpdXM6Mjc0cHg7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctZGVza3RvcC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgXFxuICAgXFxufVxcblxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgcGFkZGluZy10b3A6IDMlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNyZXctaW1hZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmNyZXctaW1hZ2UgaW1ne1xcbiAgICBoZWlnaHQ6IDk1JTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXJ7XFxuICAgIGZsZXg6MTsgLyptYWtlcyB0aGUgZWxlbWVudCBmaWxsIHRoZSByZXN0IG9mIHRoZSBjb250YWluZXIqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3Jldy1wb3NpdGlvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgY29sb3I6ICM5Nzk3OTc7XFxuICAgIFxcbn1cXG5cXG4uY3Jldy1uYW1le1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uY3Jldy1pbmZve1xcbndpZHRoOiA3MCU7XFxuY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmN1cnJlbnQtY3Jld3tcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBsZWZ0OiAwcHg7XFxuICAgYm90dG9tOiAzMDBweDsgKi9cXG4gICBtYXJnaW46IDA7XFxuICAgbWFyZ2luLXRvcDogMDtcXG4gICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY3VycmVudC1jcmV3IGxpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5jdXJyZW50LWNyZXcgbGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmN1cnJlbnQtY3JldyAuc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcblxcbn1cXG5cXG4uY3Jldy1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGNzcyAqL1xcblxcbi8qIGxheW91dCBmb3IgdGFibGV0cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvY3Jldy9iYWNrZ3JvdW5kLWNyZXctdGFibGV0LmpwZyk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIH1cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDcwdnc7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAgICAgXFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5tYWluLWNvbnRlbnR7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEyNXB4O1xcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY3Jldy1pbWFnZXtcXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIGg0e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDo5MHB4O1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAuY3Jldy1wb3NpdGlvbntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcbiAgICAuY3Jldy1uYW1le1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuICAgIC5jcmV3LWluZm97XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5jdXJyZW50LWNyZXd7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIH1cXG4gICAgLmNyZXctaW1hZ2V7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmN1cnJlbnQtY3JldyBsaXtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB9XFxufVxcblxcblxcbi8qbW9iaWxlKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9jcmV3L2JhY2tncm91bmQtY3Jldy1tb2JpbGUuanBnKTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5oZWFkZXIgaDR7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmNyZXctcG9zaXRpb257XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5jcmV3LW5hbWV7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG4gICAgLmNyZXctaW5mb3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAuY3Jldy1pbWFnZSBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuICAgIC5jcmV3LWltYWdle1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG4gICAgfVxcbiAgICAuY29udGVudHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubWFpbi1jb250ZW50e1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4OyAgXFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uLXdyYXBwZXJ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG4gICAgLmN1cnJlbnQtY3Jld3tcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3Jldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZXcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3MvdHlwb2dyYXBoeS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9jcmV3LmNzcyc7XG5cbmltcG9ydCBjb21tYW5kZXIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtZG91Z2xhcy1odXJsZXkucG5nJztcbmltcG9ydCBzcGVjaWFsaXN0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLW1hcmstc2h1dHRsZXdvcnRoLnBuZyc7XG5pbXBvcnQgcGlsb3QgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NyZXcvaW1hZ2UtdmljdG9yLWdsb3Zlci5wbmcnO1xuaW1wb3J0IGVuZ2luZWVyIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jcmV3L2ltYWdlLWFub3VzaGVoLWFuc2FyaS5wbmcnO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jcmV3LWltZ10nKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50LWNyZXcgbGknKTtcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY3JldycpO1xuY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZXctZGVzY3JpcHRpb24nKTtcblxuaW1nLnNyYyA9IGNvbW1hbmRlcjtcblxudWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGNvbnN0IHRhcmdldD0gZS50YXJnZXQ7XG4gICAgaWYoISh0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSkgcmV0dXJuO1xuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSB0YXJnZXQuZGF0YXNldC5zZWxlY3RlZCA7XG4gICAgICAgIHJlbW92ZVZpc2libGVDbGFzcyhkZXNjcmlwdGlvbnMpO1xuICAgICAgICBhZGRWaXNpYmxlQ2xhc3Moc2VsZWN0ZWRJZCxkZXNjcmlwdGlvbnMpXG4gICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MobmF2KTtcbiAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhuYXYsc2VsZWN0ZWRJZCk7XG4gICAgICAgIGFkZEltYWdlKHNlbGVjdGVkSWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZElkKVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVWaXNpYmxlQ2xhc3MoYXJyKXtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVmlzaWJsZUNsYXNzKHNlbGVjdGVkLGFycil7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBpZihlbGVtZW50LmlkID09PSBzZWxlY3RlZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkQ2xhc3MoYXJyKXtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KVxufVxuZnVuY3Rpb24gYWRkU2VsZWN0ZWRDbGFzcyhhcnIsc2VsZWN0ZWQpe1xuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgaWYoZWxlbWVudC5kYXRhc2V0LnNlbGVjdGVkID09PSBzZWxlY3RlZCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRJbWFnZShzZWxlY3RlZCl7XG4gICAgaWYoc2VsZWN0ZWQgPT09IFwiY29tbWFuZGVyXCIpe1xuICAgICAgICBpbWcuc3JjID0gY29tbWFuZGVyO1xuICAgIH1lbHNlIGlmKHNlbGVjdGVkID09PSBcInNwZWNpYWxpc3RcIil7XG4gICAgICAgIGltZy5zcmMgPSBzcGVjaWFsaXN0O1xuICAgIH1lbHNlIGlmKHNlbGVjdGVkID09PSBcInBpbG90XCIpe1xuICAgICAgICBpbWcuc3JjID0gcGlsb3Q7XG4gICAgfWVsc2UgaWYoc2VsZWN0ZWQgPT09IFwiZW5naW5lZXJcIil7XG4gICAgICAgIGltZy5zcmMgPSBlbmdpbmVlcjtcbiAgICB9XG4gICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjcmV3XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NwYWNlX3RvdXJpc21cIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3BhY2VfdG91cmlzbVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzLXNyY19hc3NldHNfY3NzX25hdmJhcl9jc3Mtc3JjX2Fzc2V0c19jc3NfdHlwb2ctYmQ3ZDM2XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NyZXcuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==