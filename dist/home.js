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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/navbar.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/navbar.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --bar-width:40px;
    --bar-height:5px;
    --hamburger-gap:4px;
    --foreground:white;
    --background:#0B0D17;
    --animation-timing:200ms ease-in-out;
    --hamburger-height:calc(var(--bar-height) *3 + var(--hamburger-gap) * 2);
}


#navbar {
    color: var(--main-color);
    margin-top: 48px; /* Add your desired margin-top value */
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(11, 13, 23, 0.4);
    z-index: 1000;
}
nav{
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.05);
    backdrop-filter: blur(8px); 
    -webkit-backdrop-filter: blur(8px);
    z-index: 1;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7;
    
}

nav a{
    text-decoration: none;
    color:var(--main-color);
}

nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 150px;
    margin-left: 170px;
   
}

nav li{
    
    width: 130px;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
nav li:hover{
    cursor: pointer;
    border-bottom:1px solid rgba(255,255,255,0.5);
}


.logo{
    
    margin-left: 48px;
    position: relative;
}

.logo::after{
    content: "";
    width: 500px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    position: absolute;
    top: 50%;
    margin-left: 80px;
    margin-right: 80px;
    z-index: 2;

}

.active{
    border-bottom: 1px solid var(--main-color);
}

.hamburger-menu,
#toggle{
    z-index: 3;
}

.hamburger-menu{
    display: none;
}


/* navbar for tablets */
@media (max-width:820px){
   
    #navbar {
        
        margin-top: 0;

    }
    nav{
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: rgba(255,255,255,0.05);
        backdrop-filter: blur(8px); 
        -webkit-backdrop-filter: blur(8px);
        z-index: 1;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px;
        letter-spacing: 2.7;
        
    }
    nav ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 25px;
        margin-left: 10px;
        margin-right: 10px;
       
    }
    nav li{
        width: fit-content;
        height: 80px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo::after{
        display: none;
    
    }
}


/* bigger tablets*/
@media (max-width:912px){
   
    #navbar {
        width: 100vw;
        margin-top: 0;

    }
    nav{
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: rgba(255,255,255,0.05);
        backdrop-filter: blur(8px); 
        -webkit-backdrop-filter: blur(8px);
        z-index: 1;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px;
        letter-spacing: 2.7;
        
        
    }
    nav ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 40px;
        margin-left: 15%;
        margin-right: 15%;
       
    }
    nav li{
        width: fit-content;
        height: 80px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo::after{
        display: none;
    
    }
}

/* mobile */
@media (max-width: 480px) {
    .hamburger-menu{
        --x-width:calc(var(--hamburger-height) * 1.41421356237);
        display: flex;
        flex-direction: column;
        gap: var(--hamburger-gap);
        width: max-content;
        position: absolute;
        top: 25px;
        right: 10px;
        
    }
    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input{
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background: var(--foreground);
        border-radius: 9999px;
        transform-origin: left center;
        transition: opacity var(--animation-timing),width var(--animation-timing),rotate var(--animation-timing), translate var(--animation-timing);

    }

    .hamburger-menu input{
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu input:checked{
        opacity: 0;
        width: 0;
    }

    .hamburger-menu:has(input:checked)::before{
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height)/-2);
    }

    .hamburger-menu:has(input:checked)::after{
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height)/2);
    }

    nav {
        translate: 100%;
        transition:  translate var(--animation-timing);
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 60%;
        z-index: 1;
        
    }
    nav ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
        padding-top: 70%;
        margin: 0;
    }
    nav li {
        width: 100%;
        justify-content: flex-start;
    }

    .hamburger-menu:has(input:checked)+ nav{
        translate: 0;
    }
    .logo{
        margin-left:0 ;
    }
   
    #navbar{
        margin: 0;
        /* border: 1px solid red; */
    }
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/navbar.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,oCAAoC;IACpC,wEAAwE;AAC5E;;;AAGA;IACI,wBAAwB;IACxB,gBAAgB,EAAE,sCAAsC;IACxD,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,eAAe;IACf,MAAM;IACN,OAAO;IACP,uCAAuC;IACvC,aAAa;AACjB;AACA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,0BAA0B;IAC1B,kCAAkC;IAClC,UAAU;IACV,2CAA2C;IAC3C,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,kBAAkB;;AAEtB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,6CAA6C;AACjD;;;AAGA;;IAEI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8CAA8C;IAC9C,kBAAkB;IAClB,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;;AAEd;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;;AAGA,uBAAuB;AACvB;;IAEI;;QAEI,aAAa;;IAEjB;IACA;QACI,UAAU;QACV,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,wCAAwC;QACxC,0BAA0B;QAC1B,kCAAkC;QAClC,UAAU;QACV,2CAA2C;QAC3C,eAAe;QACf,mBAAmB;;IAEvB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,mBAAmB;QACnB,SAAS;QACT,iBAAiB;QACjB,kBAAkB;;IAEtB;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,aAAa;;IAEjB;AACJ;;;AAGA,kBAAkB;AAClB;;IAEI;QACI,YAAY;QACZ,aAAa;;IAEjB;IACA;QACI,UAAU;QACV,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,wCAAwC;QACxC,0BAA0B;QAC1B,kCAAkC;QAClC,UAAU;QACV,2CAA2C;QAC3C,eAAe;QACf,mBAAmB;;;IAGvB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,mBAAmB;QACnB,SAAS;QACT,gBAAgB;QAChB,iBAAiB;;IAErB;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,aAAa;;IAEjB;AACJ;;AAEA,WAAW;AACX;IACI;QACI,uDAAuD;QACvD,aAAa;QACb,sBAAsB;QACtB,yBAAyB;QACzB,kBAAkB;QAClB,kBAAkB;QAClB,SAAS;QACT,WAAW;;IAEf;IACA;;;QAGI,WAAW;QACX,uBAAuB;QACvB,yBAAyB;QACzB,6BAA6B;QAC7B,qBAAqB;QACrB,6BAA6B;QAC7B,2IAA2I;;IAE/I;;IAEA;QACI,gBAAgB;QAChB,UAAU;QACV,SAAS;QACT,aAAa;QACb,oBAAoB;IACxB;;IAEA;QACI,UAAU;QACV,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,qBAAqB;QACrB,uCAAuC;IAC3C;;IAEA;QACI,cAAc;QACd,qBAAqB;QACrB,sCAAsC;IAC1C;;IAEA;QACI,eAAe;QACf,8CAA8C;QAC9C,eAAe;QACf,MAAM;QACN,QAAQ;QACR,YAAY;QACZ,UAAU;QACV,UAAU;;IAEd;IACA;QACI,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,YAAY;QACZ,gBAAgB;QAChB,SAAS;IACb;IACA;QACI,WAAW;QACX,2BAA2B;IAC/B;;IAEA;QACI,YAAY;IAChB;IACA;QACI,cAAc;IAClB;;IAEA;QACI,SAAS;QACT,2BAA2B;IAC/B;AACJ","sourcesContent":[":root{\n    --bar-width:40px;\n    --bar-height:5px;\n    --hamburger-gap:4px;\n    --foreground:white;\n    --background:#0B0D17;\n    --animation-timing:200ms ease-in-out;\n    --hamburger-height:calc(var(--bar-height) *3 + var(--hamburger-gap) * 2);\n}\n\n\n#navbar {\n    color: var(--main-color);\n    margin-top: 48px; /* Add your desired margin-top value */\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(11, 13, 23, 0.4);\n    z-index: 1000;\n}\nnav{\n    width: 75%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background-color: rgba(255,255,255,0.05);\n    backdrop-filter: blur(8px); \n    -webkit-backdrop-filter: blur(8px);\n    z-index: 1;\n    font-family: 'Barlow Condensed', sans-serif;\n    font-size: 16px;\n    letter-spacing: 2.7;\n    \n}\n\nnav a{\n    text-decoration: none;\n    color:var(--main-color);\n}\n\nnav ul{\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 150px;\n    margin-left: 170px;\n   \n}\n\nnav li{\n    \n    width: 130px;\n    height: 80px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nnav li:hover{\n    cursor: pointer;\n    border-bottom:1px solid rgba(255,255,255,0.5);\n}\n\n\n.logo{\n    \n    margin-left: 48px;\n    position: relative;\n}\n\n.logo::after{\n    content: \"\";\n    width: 500px;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n    position: absolute;\n    top: 50%;\n    margin-left: 80px;\n    margin-right: 80px;\n    z-index: 2;\n\n}\n\n.active{\n    border-bottom: 1px solid var(--main-color);\n}\n\n.hamburger-menu,\n#toggle{\n    z-index: 3;\n}\n\n.hamburger-menu{\n    display: none;\n}\n\n\n/* navbar for tablets */\n@media (max-width:820px){\n   \n    #navbar {\n        \n        margin-top: 0;\n\n    }\n    nav{\n        width: 70%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        background-color: rgba(255,255,255,0.05);\n        backdrop-filter: blur(8px); \n        -webkit-backdrop-filter: blur(8px);\n        z-index: 1;\n        font-family: 'Barlow Condensed', sans-serif;\n        font-size: 16px;\n        letter-spacing: 2.7;\n        \n    }\n    nav ul{\n        list-style: none;\n        display: flex;\n        align-items: center;\n        gap: 25px;\n        margin-left: 10px;\n        margin-right: 10px;\n       \n    }\n    nav li{\n        width: fit-content;\n        height: 80px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .logo::after{\n        display: none;\n    \n    }\n}\n\n\n/* bigger tablets*/\n@media (max-width:912px){\n   \n    #navbar {\n        width: 100vw;\n        margin-top: 0;\n\n    }\n    nav{\n        width: 70%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        background-color: rgba(255,255,255,0.05);\n        backdrop-filter: blur(8px); \n        -webkit-backdrop-filter: blur(8px);\n        z-index: 1;\n        font-family: 'Barlow Condensed', sans-serif;\n        font-size: 16px;\n        letter-spacing: 2.7;\n        \n        \n    }\n    nav ul{\n        list-style: none;\n        display: flex;\n        align-items: center;\n        gap: 40px;\n        margin-left: 15%;\n        margin-right: 15%;\n       \n    }\n    nav li{\n        width: fit-content;\n        height: 80px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .logo::after{\n        display: none;\n    \n    }\n}\n\n/* mobile */\n@media (max-width: 480px) {\n    .hamburger-menu{\n        --x-width:calc(var(--hamburger-height) * 1.41421356237);\n        display: flex;\n        flex-direction: column;\n        gap: var(--hamburger-gap);\n        width: max-content;\n        position: absolute;\n        top: 25px;\n        right: 10px;\n        \n    }\n    .hamburger-menu::before,\n    .hamburger-menu::after,\n    .hamburger-menu input{\n        content: \"\";\n        width: var(--bar-width);\n        height: var(--bar-height);\n        background: var(--foreground);\n        border-radius: 9999px;\n        transform-origin: left center;\n        transition: opacity var(--animation-timing),width var(--animation-timing),rotate var(--animation-timing), translate var(--animation-timing);\n\n    }\n\n    .hamburger-menu input{\n        appearance: none;\n        padding: 0;\n        margin: 0;\n        outline: none;\n        pointer-events: none;\n    }\n\n    .hamburger-menu input:checked{\n        opacity: 0;\n        width: 0;\n    }\n\n    .hamburger-menu:has(input:checked)::before{\n        rotate: 45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/-2);\n    }\n\n    .hamburger-menu:has(input:checked)::after{\n        rotate: -45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/2);\n    }\n\n    nav {\n        translate: 100%;\n        transition:  translate var(--animation-timing);\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 60%;\n        z-index: 1;\n        \n    }\n    nav ul {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        height: 100%;\n        padding-top: 70%;\n        margin: 0;\n    }\n    nav li {\n        width: 100%;\n        justify-content: flex-start;\n    }\n\n    .hamburger-menu:has(input:checked)+ nav{\n        translate: 0;\n    }\n    .logo{\n        margin-left:0 ;\n    }\n   \n    #navbar{\n        margin: 0;\n        /* border: 1px solid red; */\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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

/***/ "./src/assets/css/navbar.css":
/*!***********************************!*\
  !*** ./src/assets/css/navbar.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			"home": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/navbar.css */ "./src/assets/css/navbar.css");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/home.css */ "./src/assets/css/home.css");
// import json from './assets/data/data.json';


//  import './assets/css/home.css';
 
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHVLQUE2RDtBQUN6Ryw0Q0FBNEMscUtBQTREO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc01BQXNNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDMVEseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyw2RkFBNkYsUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxR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WSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsS0FBSyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFB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eUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7O0FBR0E7QUFDQSxDQUFrQztBQUNsQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2Nzcy9uYXZiYXIuY3NzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS5jc3M/NzQ4NCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcz8yOTRmIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtZGVza3RvcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLWhvbWUtdGFibGV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QURMYU0rRGlzcGxheSZmYW1pbHk9QmFybG93K0NvbmRlbnNlZCZmYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9QmVsbGVmYWlyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xuZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbmZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIHNhbnMtc2VyaWY7XG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xuXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAvKiBjb2xvciB2YXJpYWJsZXMgKi9cblxuICAgIC0tbWFpbi1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiNEMEQ2Rjk7XG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XG5cbiAgICAvKiBmb250IHNpemUgdmFyaWFibGVzICovXG5cbiAgICAtLWhlYWRpbmctMS1zaXplOjE1MHB4O1xuICAgIC0taGVhZGluZy0yLXNpemU6MTAwcHg7XG4gICAgLS1oZWFkaW5nLTMtc2l6ZTo1NnB4O1xuICAgIC0taGVhZGluZy00LXNpemU6MzJweDtcbiAgICAtLWhlYWRpbmctNS1zaXplOjI4cHg7XG5cbiAgICAvKm90aGVyIHNpemluZ3MgKi9cbiAgICAtLWNpcmNsZS1yYWRpdXM6Mjc0cHg7XG59XG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gICBcbiAgICBcbn1cblxuLyogI25hdmJhcntcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgIGhlaWdodDogODBweDtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxufSAqL1xuXG5cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy0xLXNpemUpO1xuICAgXG59XG5cbmg0e1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLW1pc2NlbGxhbmVvdXMtY29sb3IpOyBcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNC1zaXplKTtcbiAgICBcbn1cblxuaDV7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNS1zaXplKTtcbiAgICBsZXR0ZXItc3BhY2luZzogNC43NXB4O1xufVxuXG4uY29udGVudC13cmFwcGVye1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG4uaGVyb3tcbiAgICBcbiAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cblxuLnRyaWdnZXJ7XG4gICAgd2lkdGg6IHZhcigtLWNpcmNsZS1yYWRpdXMpO1xuICAgIGhlaWdodDogdmFyKC0tY2lyY2xlLXJhZGl1cyk7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKCAyNzRweC8yKTsgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDE4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBcbiAgICBcbiAgICBcbn1cbi50cmlnZ2VyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRyaWdnZXI6aG92ZXIgLmJ0bntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgYm9yZGVyOiA1MHB4IHNvbGlkICM5Nzk3OTc7XG5cbn1cbi50cmlnZ2VyOmhvdmVyIC5idG4gaDR7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcbiAgIFxuXG59XG4uYnRue1xuICAgIHdpZHRoOiAyNzRweDtcbiAgICBoZWlnaHQ6IDI3NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYnRuIGg0e1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGVybyBwe1xuICAgIGZvbnQtZmFtaWx5OidCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZiA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaG9tZS1jb250ZW50e1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuLyogbGF5b3V0IGZvciB0YWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDo5MTJweCl7XG4gICAgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBcbiAgICB9XG4gICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1dmg7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcbiAgICB9XG4gICAgLmhlcm97XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICAuaG9tZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudHJpZ2dlcntcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0gICBcbn1cblxuLyptb2JpbGUqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xuICAgIC50cmlnZ2Vye1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICB9XG5cbiAgICAuaGVybyBoMXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1oZWFkaW5nLTEtc2l6ZSkvMS41KTtcbiAgICAgICBcbiAgICB9XG4gICAgLmhlcm8gaDR7IFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy00LXNpemUpLzEuMik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5oZXJvIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAuY29udGVudC13cmFwcGVye1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgIH1cbiAgICBcblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7b0NBSW9DOztBQUVwQztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjs7SUFFcEIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7O0lBRTdCLHdCQUF3Qjs7SUFFeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjs7SUFFckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsaUZBQXlGO0lBQ3pGLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCOzs7QUFHSjs7QUFFQTs7Ozs7Ozs7R0FRRzs7O0FBR0g7SUFDSSwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBOztHQUVHLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0FBQ3RCOzs7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQkFBaUI7Ozs7QUFJckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCOztBQUU5QjtBQUNBO0lBQ0ksc0JBQXNCOzs7QUFHMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsdUJBQXVCO0FBQ3ZCO0lBQ0k7UUFDSSx5RkFBZ0c7UUFDaEcsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjs7SUFFcEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixlQUFlO1FBQ2YsYUFBYTs7O0lBR2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixVQUFVO1FBQ1YsU0FBUztRQUNULGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7Ozs7SUFJdEI7QUFDSjs7QUFFQSxTQUFTOztBQUVUO0lBQ0k7UUFDSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQzs7SUFFQTs7UUFFSSwwQ0FBMEM7O0lBRTlDO0lBQ0E7UUFDSSwwQ0FBMEM7O0lBRTlDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7R0FFRDtJQUNDLGtCQUFrQjtHQUNuQjs7O0FBR0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QURMYU0rRGlzcGxheSZmYW1pbHk9QmFybG93K0NvbmRlbnNlZCZmYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9QmVsbGVmYWlyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGZvbnQtZmFtaWx5OiAnQURMYU0gRGlzcGxheScsIGN1cnNpdmU7XFxuZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG5mb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBzYW5zLXNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xcblxcbiosKjo6YmVmb3JlLCo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLyogY29sb3IgdmFyaWFibGVzICovXFxuXFxuICAgIC0tbWFpbi1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjojRDBENkY5O1xcbiAgICAtLW1pc2NlbGxhbmVvdXMtY29sb3I6IzBCMEQxNztcXG5cXG4gICAgLyogZm9udCBzaXplIHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLWhlYWRpbmctMS1zaXplOjE1MHB4O1xcbiAgICAtLWhlYWRpbmctMi1zaXplOjEwMHB4O1xcbiAgICAtLWhlYWRpbmctMy1zaXplOjU2cHg7XFxuICAgIC0taGVhZGluZy00LXNpemU6MzJweDtcXG4gICAgLS1oZWFkaW5nLTUtc2l6ZToyOHB4O1xcblxcbiAgICAvKm90aGVyIHNpemluZ3MgKi9cXG4gICAgLS1jaXJjbGUtcmFkaXVzOjI3NHB4O1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLWRlc2t0b3AuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgIFxcbiAgICBcXG59XFxuXFxuLyogI25hdmJhcntcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICAgbWFyZ2luLXRvcDogNDhweDtcXG4gICAgIGhlaWdodDogODBweDtcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59ICovXFxuXFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTEtc2l6ZSk7XFxuICAgXFxufVxcblxcbmg0e1xcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbWlzY2VsbGFuZW91cy1jb2xvcik7IFxcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctNC1zaXplKTtcXG4gICAgXFxufVxcblxcbmg1e1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTUtc2l6ZSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0Ljc1cHg7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXJ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuLmhlcm97XFxuICAgIFxcbiAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICBtYXJnaW4tbGVmdDogMzAwcHg7XFxuICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuXFxuLnRyaWdnZXJ7XFxuICAgIHdpZHRoOiB2YXIoLS1jaXJjbGUtcmFkaXVzKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jaXJjbGUtcmFkaXVzKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5Nzk3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiBjYWxjKCAyNzRweC8yKTsgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAxOCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG4udHJpZ2dlcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udHJpZ2dlcjpob3ZlciAuYnRue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIGJvcmRlcjogNTBweCBzb2xpZCAjOTc5Nzk3O1xcblxcbn1cXG4udHJpZ2dlcjpob3ZlciAuYnRuIGg0e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzcpO1xcbiAgIFxcblxcbn1cXG4uYnRue1xcbiAgICB3aWR0aDogMjc0cHg7XFxuICAgIGhlaWdodDogMjc0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuIGg0e1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlcm8gcHtcXG4gICAgZm9udC1mYW1pbHk6J0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmIDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmhvbWUtY29udGVudHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBsYXlvdXQgZm9yIHRhYmxldHMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo5MTJweCl7XFxuICAgIGJvZHl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLXRhYmxldC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAuY29udGVudC13cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjV2aDsgXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcXG4gICAgfVxcbiAgICAuaGVyb3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjA7XFxuICAgICAgICBcXG4gICAgICAgXFxuICAgIH1cXG4gICAgLmhvbWUtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudHJpZ2dlcntcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9ICAgXFxufVxcblxcbi8qbW9iaWxlKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xcbiAgICAudHJpZ2dlcntcXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcXG4gICAgfVxcblxcbiAgICAuYnRue1xcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGgxe1xcbiAgICAgICAgXFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy0xLXNpemUpLzEuNSk7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5oZXJvIGg0eyBcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1oZWFkaW5nLTQtc2l6ZSkvMS4yKTtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5oZXJvIHB7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgIC5jb250ZW50LXdyYXBwZXJ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICB9XFxuICAgIFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tYmFyLXdpZHRoOjQwcHg7XG4gICAgLS1iYXItaGVpZ2h0OjVweDtcbiAgICAtLWhhbWJ1cmdlci1nYXA6NHB4O1xuICAgIC0tZm9yZWdyb3VuZDp3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6IzBCMEQxNztcbiAgICAtLWFuaW1hdGlvbi10aW1pbmc6MjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgLS1oYW1idXJnZXItaGVpZ2h0OmNhbGModmFyKC0tYmFyLWhlaWdodCkgKjMgKyB2YXIoLS1oYW1idXJnZXItZ2FwKSAqIDIpO1xufVxuXG5cbiNuYXZiYXIge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiA0OHB4OyAvKiBBZGQgeW91ciBkZXNpcmVkIG1hcmdpbi10b3AgdmFsdWUgKi9cbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMTMsIDIzLCAwLjQpO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5uYXZ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7IFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi43O1xuICAgIFxufVxuXG5uYXYgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbm5hdiB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcbiAgIFxufVxuXG5uYXYgbGl7XG4gICAgXG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubmF2IGxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG5cblxuLmxvZ297XG4gICAgXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nbzo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgIHotaW5kZXg6IDI7XG5cbn1cblxuLmFjdGl2ZXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5oYW1idXJnZXItbWVudSxcbiN0b2dnbGV7XG4gICAgei1pbmRleDogMztcbn1cblxuLmhhbWJ1cmdlci1tZW51e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogbmF2YmFyIGZvciB0YWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDo4MjBweCl7XG4gICBcbiAgICAjbmF2YmFyIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICB9XG4gICAgbmF2e1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43O1xuICAgICAgICBcbiAgICB9XG4gICAgbmF2IHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgXG4gICAgfVxuICAgIG5hdiBsaXtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5sb2dvOjphZnRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICBcbiAgICB9XG59XG5cblxuLyogYmlnZ2VyIHRhYmxldHMqL1xuQG1lZGlhIChtYXgtd2lkdGg6OTEycHgpe1xuICAgXG4gICAgI25hdmJhciB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgIH1cbiAgICBuYXZ7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7IFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjc7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgbmF2IHVse1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgICAgIFxuICAgIH1cbiAgICBuYXYgbGl7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAubG9nbzo6YWZ0ZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgXG4gICAgfVxufVxuXG4vKiBtb2JpbGUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5oYW1idXJnZXItbWVudXtcbiAgICAgICAgLS14LXdpZHRoOmNhbGModmFyKC0taGFtYnVyZ2VyLWhlaWdodCkgKiAxLjQxNDIxMzU2MjM3KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiB2YXIoLS1oYW1idXJnZXItZ2FwKTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaGFtYnVyZ2VyLW1lbnU6OmJlZm9yZSxcbiAgICAuaGFtYnVyZ2VyLW1lbnU6OmFmdGVyLFxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IHZhcigtLWJhci13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tYmFyLWhlaWdodCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLHdpZHRoIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLHJvdGF0ZSB2YXIoLS1hbmltYXRpb24tdGltaW5nKSwgdHJhbnNsYXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xuXG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51IGlucHV0e1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dDpjaGVja2Vke1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpOjpiZWZvcmV7XG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XG4gICAgICAgIHdpZHRoOiB2YXIoLS14LXdpZHRoKTtcbiAgICAgICAgdHJhbnNsYXRlOiAwIGNhbGModmFyKC0tYmFyLWhlaWdodCkvLTIpO1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItbWVudTpoYXMoaW5wdXQ6Y2hlY2tlZCk6OmFmdGVye1xuICAgICAgICByb3RhdGU6IC00NWRlZztcbiAgICAgICAgd2lkdGg6IHZhcigtLXgtd2lkdGgpO1xuICAgICAgICB0cmFuc2xhdGU6IDAgY2FsYyh2YXIoLS1iYXItaGVpZ2h0KS8yKTtcbiAgICB9XG5cbiAgICBuYXYge1xuICAgICAgICB0cmFuc2xhdGU6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246ICB0cmFuc2xhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBcbiAgICB9XG4gICAgbmF2IHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgbmF2IGxpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpKyBuYXZ7XG4gICAgICAgIHRyYW5zbGF0ZTogMDtcbiAgICB9XG4gICAgLmxvZ297XG4gICAgICAgIG1hcmdpbi1sZWZ0OjAgO1xuICAgIH1cbiAgIFxuICAgICNuYXZiYXJ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHdFQUF3RTtBQUM1RTs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUUsc0NBQXNDO0lBQ3hELFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCOztB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QTJCO0lBQy9COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCwyQkFBMkI7SUFDL0I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1iYXItd2lkdGg6NDBweDtcXG4gICAgLS1iYXItaGVpZ2h0OjVweDtcXG4gICAgLS1oYW1idXJnZXItZ2FwOjRweDtcXG4gICAgLS1mb3JlZ3JvdW5kOndoaXRlO1xcbiAgICAtLWJhY2tncm91bmQ6IzBCMEQxNztcXG4gICAgLS1hbmltYXRpb24tdGltaW5nOjIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAtLWhhbWJ1cmdlci1oZWlnaHQ6Y2FsYyh2YXIoLS1iYXItaGVpZ2h0KSAqMyArIHZhcigtLWhhbWJ1cmdlci1nYXApICogMik7XFxufVxcblxcblxcbiNuYXZiYXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDQ4cHg7IC8qIEFkZCB5b3VyIGRlc2lyZWQgbWFyZ2luLXRvcCB2YWx1ZSAqL1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAxMywgMjMsIDAuNCk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcbm5hdntcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgXFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNztcXG4gICAgXFxufVxcblxcbm5hdiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5uYXYgdWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcXG4gICBcXG59XFxuXFxubmF2IGxpe1xcbiAgICBcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm5hdiBsaTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcblxcblxcbi5sb2dve1xcbiAgICBcXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ286OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xcbiAgICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSxcXG4jdG9nZ2xle1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi8qIG5hdmJhciBmb3IgdGFibGV0cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjgyMHB4KXtcXG4gICBcXG4gICAgI25hdmJhciB7XFxuICAgICAgICBcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuXFxuICAgIH1cXG4gICAgbmF2e1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjc7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBuYXYgdWx7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDI1cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgbmF2IGxpe1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubG9nbzo6YWZ0ZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBiaWdnZXIgdGFibGV0cyovXFxuQG1lZGlhIChtYXgtd2lkdGg6OTEycHgpe1xcbiAgIFxcbiAgICAjbmF2YmFyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuXFxuICAgIH1cXG4gICAgbmF2e1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjc7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIG5hdiB1bHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNDBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgbmF2IGxpe1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubG9nbzo6YWZ0ZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG4gICAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLmhhbWJ1cmdlci1tZW51e1xcbiAgICAgICAgLS14LXdpZHRoOmNhbGModmFyKC0taGFtYnVyZ2VyLWhlaWdodCkgKiAxLjQxNDIxMzU2MjM3KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1oYW1idXJnZXItZ2FwKTtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMjVweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlci1tZW51OjpiZWZvcmUsXFxuICAgIC5oYW1idXJnZXItbWVudTo6YWZ0ZXIsXFxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IHZhcigtLWJhci13aWR0aCk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWJhci1oZWlnaHQpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZm9yZWdyb3VuZCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyksd2lkdGggdmFyKC0tYW5pbWF0aW9uLXRpbWluZykscm90YXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLCB0cmFuc2xhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyk7XFxuXFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51IGlucHV0e1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51IGlucHV0OmNoZWNrZWR7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3Jle1xcbiAgICAgICAgcm90YXRlOiA0NWRlZztcXG4gICAgICAgIHdpZHRoOiB2YXIoLS14LXdpZHRoKTtcXG4gICAgICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLy0yKTtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpOjphZnRlcntcXG4gICAgICAgIHJvdGF0ZTogLTQ1ZGVnO1xcbiAgICAgICAgd2lkdGg6IHZhcigtLXgtd2lkdGgpO1xcbiAgICAgICAgdHJhbnNsYXRlOiAwIGNhbGModmFyKC0tYmFyLWhlaWdodCkvMik7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHRyYW5zbGF0ZTogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246ICB0cmFuc2xhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyk7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgbmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDcwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICBuYXYgbGkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKSsgbmF2e1xcbiAgICAgICAgdHJhbnNsYXRlOiAwO1xcbiAgICB9XFxuICAgIC5sb2dve1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6MCA7XFxuICAgIH1cXG4gICBcXG4gICAgI25hdmJhcntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImhvbWVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IGpzb24gZnJvbSAnLi9hc3NldHMvZGF0YS9kYXRhLmpzb24nO1xuXG5cbi8vICBpbXBvcnQgJy4vYXNzZXRzL2Nzcy9ob21lLmNzcyc7XG4gaW1wb3J0ICcuL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyc7XG4gaW1wb3J0ICcuL2Fzc2V0cy9jc3MvaG9tZS5jc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==