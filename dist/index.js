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
`, "",{"version":3,"sources":["webpack://./src/assets/css/navbar.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --bar-width:40px;\n    --bar-height:5px;\n    --hamburger-gap:4px;\n    --foreground:white;\n    --background:#0B0D17;\n    --animation-timing:200ms ease-in-out;\n    --hamburger-height:calc(var(--bar-height) *3 + var(--hamburger-gap) * 2);\n}\n\n\n#navbar {\n    color: var(--main-color);\n    margin-top: 48px; /* Add your desired margin-top value */\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(11, 13, 23, 0.4);\n    z-index: 1000;\n}\nnav{\n    width: 75%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    background-color: rgba(255,255,255,0.05);\n    backdrop-filter: blur(8px); \n    -webkit-backdrop-filter: blur(8px);\n    z-index: 1;\n    font-family: 'Barlow Condensed', sans-serif;\n    font-size: 16px;\n    letter-spacing: 2.7;\n    \n}\n\nnav a{\n    text-decoration: none;\n    color:var(--main-color);\n}\n\nnav ul{\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 150px;\n    margin-left: 170px;\n   \n}\n\nnav li{\n    \n    width: 130px;\n    height: 80px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nnav li:hover{\n    cursor: pointer;\n    border-bottom:1px solid rgba(255,255,255,0.5);\n}\n\n\n.logo{\n    \n    margin-left: 48px;\n    position: relative;\n}\n\n.logo::after{\n    content: \"\";\n    width: 500px;\n    border-bottom: 1px solid rgba(255,255,255,0.2);\n    position: absolute;\n    top: 50%;\n    margin-left: 80px;\n    margin-right: 80px;\n    z-index: 2;\n\n}\n\n.active{\n    border-bottom: 1px solid var(--main-color);\n}\n\n.hamburger-menu,\n#toggle{\n    z-index: 3;\n}\n\n.hamburger-menu{\n    display: none;\n}\n\n\n/* navbar for tablets */\n@media (max-width:820px){\n   \n    #navbar {\n        \n        margin-top: 0;\n\n    }\n    nav{\n        width: 70%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        background-color: rgba(255,255,255,0.05);\n        backdrop-filter: blur(8px); \n        -webkit-backdrop-filter: blur(8px);\n        z-index: 1;\n        font-family: 'Barlow Condensed', sans-serif;\n        font-size: 16px;\n        letter-spacing: 2.7;\n        \n    }\n    nav ul{\n        list-style: none;\n        display: flex;\n        align-items: center;\n        gap: 25px;\n        margin-left: 10px;\n        margin-right: 10px;\n       \n    }\n    nav li{\n        width: fit-content;\n        height: 80px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .logo::after{\n        display: none;\n    \n    }\n}\n\n\n/* bigger tablets*/\n@media (max-width:912px){\n   \n    #navbar {\n        width: 100vw;\n        margin-top: 0;\n\n    }\n    nav{\n        width: 70%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        background-color: rgba(255,255,255,0.05);\n        backdrop-filter: blur(8px); \n        -webkit-backdrop-filter: blur(8px);\n        z-index: 1;\n        font-family: 'Barlow Condensed', sans-serif;\n        font-size: 16px;\n        letter-spacing: 2.7;\n        \n        \n    }\n    nav ul{\n        list-style: none;\n        display: flex;\n        align-items: center;\n        gap: 40px;\n        margin-left: 15%;\n        margin-right: 15%;\n       \n    }\n    nav li{\n        width: fit-content;\n        height: 80px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .logo::after{\n        display: none;\n    \n    }\n}\n\n/* mobile */\n@media (max-width: 480px) {\n    .hamburger-menu{\n        --x-width:calc(var(--hamburger-height) * 1.41421356237);\n        display: flex;\n        flex-direction: column;\n        gap: var(--hamburger-gap);\n        width: max-content;\n        position: absolute;\n        top: 25px;\n        right: 10px;\n        \n    }\n    .hamburger-menu::before,\n    .hamburger-menu::after,\n    .hamburger-menu input{\n        content: \"\";\n        width: var(--bar-width);\n        height: var(--bar-height);\n        background: var(--foreground);\n        border-radius: 9999px;\n        transform-origin: left center;\n        transition: opacity var(--animation-timing),width var(--animation-timing),rotate var(--animation-timing), translate var(--animation-timing);\n\n    }\n\n    .hamburger-menu input{\n        appearance: none;\n        padding: 0;\n        margin: 0;\n        outline: none;\n        pointer-events: none;\n    }\n\n    .hamburger-menu input:checked{\n        opacity: 0;\n        width: 0;\n    }\n\n    .hamburger-menu:has(input:checked)::before{\n        rotate: 45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/-2);\n    }\n\n    .hamburger-menu:has(input:checked)::after{\n        rotate: -45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/2);\n    }\n\n    nav {\n        translate: 100%;\n        transition:  translate var(--animation-timing);\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 60%;\n        z-index: 1;\n        \n    }\n    nav ul {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        height: 100%;\n        padding-top: 70%;\n        margin: 0;\n    }\n    nav li {\n        width: 100%;\n        justify-content: flex-start;\n    }\n\n    .hamburger-menu:has(input:checked)+ nav{\n        translate: 0;\n    }\n    .logo{\n        margin-left:0 ;\n    }\n   \n    #navbar{\n        margin: 0;\n        /* border: 1px solid red; */\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSx5QkFBeUIsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLEtBQUssT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLCtCQUErQix1QkFBdUIsdUJBQXVCLDBCQUEwQix5QkFBeUIsMkJBQTJCLDJDQUEyQywrRUFBK0UsR0FBRyxlQUFlLCtCQUErQix3QkFBd0IsMERBQTBELG9CQUFvQiwwQkFBMEIscUNBQXFDLGtCQUFrQixzQkFBc0IsYUFBYSxjQUFjLDhDQUE4QyxvQkFBb0IsR0FBRyxNQUFNLGlCQUFpQixtQkFBbUIsb0JBQW9CLDBCQUEwQiwrQ0FBK0Msa0NBQWtDLHlDQUF5QyxpQkFBaUIsa0RBQWtELHNCQUFzQiwwQkFBMEIsU0FBUyxVQUFVLDRCQUE0Qiw4QkFBOEIsR0FBRyxXQUFXLHVCQUF1QixvQkFBb0IsMEJBQTBCLGlCQUFpQix5QkFBeUIsUUFBUSxXQUFXLHlCQUF5QixtQkFBbUIseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsZUFBZSxzQkFBc0Isb0RBQW9ELEdBQUcsWUFBWSw4QkFBOEIseUJBQXlCLEdBQUcsaUJBQWlCLG9CQUFvQixtQkFBbUIscURBQXFELHlCQUF5QixlQUFlLHdCQUF3Qix5QkFBeUIsaUJBQWlCLEtBQUssWUFBWSxpREFBaUQsR0FBRyw4QkFBOEIsaUJBQWlCLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLHlEQUF5RCxvQkFBb0Isa0NBQWtDLFNBQVMsVUFBVSxxQkFBcUIsdUJBQXVCLHdCQUF3Qiw4QkFBOEIsbURBQW1ELHNDQUFzQyw2Q0FBNkMscUJBQXFCLHNEQUFzRCwwQkFBMEIsOEJBQThCLGlCQUFpQixhQUFhLDJCQUEyQix3QkFBd0IsOEJBQThCLG9CQUFvQiw0QkFBNEIsNkJBQTZCLGdCQUFnQixhQUFhLDZCQUE2Qix1QkFBdUIsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLE9BQU8sbUJBQW1CLHdCQUF3QixhQUFhLEdBQUcsb0RBQW9ELG9CQUFvQix1QkFBdUIsd0JBQXdCLFNBQVMsVUFBVSxxQkFBcUIsdUJBQXVCLHdCQUF3Qiw4QkFBOEIsbURBQW1ELHNDQUFzQyw2Q0FBNkMscUJBQXFCLHNEQUFzRCwwQkFBMEIsOEJBQThCLDJCQUEyQixhQUFhLDJCQUEyQix3QkFBd0IsOEJBQThCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLGdCQUFnQixhQUFhLDZCQUE2Qix1QkFBdUIsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLE9BQU8sbUJBQW1CLHdCQUF3QixhQUFhLEdBQUcsNkNBQTZDLHNCQUFzQixrRUFBa0Usd0JBQXdCLGlDQUFpQyxvQ0FBb0MsNkJBQTZCLDZCQUE2QixvQkFBb0Isc0JBQXNCLGlCQUFpQix1RkFBdUYsd0JBQXdCLGtDQUFrQyxvQ0FBb0Msd0NBQXdDLGdDQUFnQyx3Q0FBd0Msc0pBQXNKLFNBQVMsOEJBQThCLDJCQUEyQixxQkFBcUIsb0JBQW9CLHdCQUF3QiwrQkFBK0IsT0FBTyxzQ0FBc0MscUJBQXFCLG1CQUFtQixPQUFPLG1EQUFtRCx3QkFBd0IsZ0NBQWdDLGtEQUFrRCxPQUFPLGtEQUFrRCx5QkFBeUIsZ0NBQWdDLGlEQUFpRCxPQUFPLGFBQWEsMEJBQTBCLHlEQUF5RCwwQkFBMEIsaUJBQWlCLG1CQUFtQix1QkFBdUIscUJBQXFCLHFCQUFxQixpQkFBaUIsY0FBYyx3QkFBd0IsaUNBQWlDLG9CQUFvQix1QkFBdUIsMkJBQTJCLG9CQUFvQixPQUFPLGNBQWMsc0JBQXNCLHNDQUFzQyxPQUFPLGdEQUFnRCx1QkFBdUIsT0FBTyxZQUFZLHlCQUF5QixPQUFPLG1CQUFtQixvQkFBb0Isb0NBQW9DLFNBQVMsR0FBRyxxQkFBcUI7QUFDM2lRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQUE7OztBQUdBO0FBQ0EsQ0FBa0M7QUFDbEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9zcmMvYXNzZXRzL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vc3JjL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzPzc0ODQiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9hc3NldHMvY3NzL25hdmJhci5jc3M/Mjk0ZiIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGFjZS10b3VyaXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NwYWNlLXRvdXJpc20vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3BhY2UtdG91cmlzbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLWRlc2t0b3AuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC1ob21lLXRhYmxldC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQmZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUJlbGxlZmFpciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogZm9udC1mYW1pbHk6ICdBRExhTSBEaXNwbGF5JywgY3Vyc2l2ZTtcbmZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5mb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBzYW5zLXNlcmlmO1xuZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cblxuKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG4gICAgLyogY29sb3IgdmFyaWFibGVzICovXG5cbiAgICAtLW1haW4tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1KTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjojRDBENkY5O1xuICAgIC0tbWlzY2VsbGFuZW91cy1jb2xvcjojMEIwRDE3O1xuXG4gICAgLyogZm9udCBzaXplIHZhcmlhYmxlcyAqL1xuXG4gICAgLS1oZWFkaW5nLTEtc2l6ZToxNTBweDtcbiAgICAtLWhlYWRpbmctMi1zaXplOjEwMHB4O1xuICAgIC0taGVhZGluZy0zLXNpemU6NTZweDtcbiAgICAtLWhlYWRpbmctNC1zaXplOjMycHg7XG4gICAgLS1oZWFkaW5nLTUtc2l6ZToyOHB4O1xuXG4gICAgLypvdGhlciBzaXppbmdzICovXG4gICAgLS1jaXJjbGUtcmFkaXVzOjI3NHB4O1xufVxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgXG4gICAgXG59XG5cbi8qICNuYXZiYXJ7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbn0gKi9cblxuXG5oMXtcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctMS1zaXplKTtcbiAgIFxufVxuXG5oNHtcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1taXNjZWxsYW5lb3VzLWNvbG9yKTsgXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTQtc2l6ZSk7XG4gICAgXG59XG5cbmg1e1xuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTUtc2l6ZSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDQuNzVweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlcntcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMzB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuLmhlcm97XG4gICAgXG4gICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5cbi50cmlnZ2Vye1xuICAgIHdpZHRoOiB2YXIoLS1jaXJjbGUtcmFkaXVzKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNpcmNsZS1yYWRpdXMpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qIG1hcmdpbi1yaWdodDogY2FsYyggMjc0cHgvMik7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAxOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgXG4gICAgXG4gICAgXG59XG4udHJpZ2dlcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmlnZ2VyOmhvdmVyIC5idG57XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIGJvcmRlcjogNTBweCBzb2xpZCAjOTc5Nzk3O1xuXG59XG4udHJpZ2dlcjpob3ZlciAuYnRuIGg0e1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43Nyk7XG4gICBcblxufVxuLmJ0bntcbiAgICB3aWR0aDogMjc0cHg7XG4gICAgaGVpZ2h0OiAyNzRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmJ0biBoNHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmhlcm8gcHtcbiAgICBmb250LWZhbWlseTonQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWYgO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmhvbWUtY29udGVudHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi8qIGxheW91dCBmb3IgdGFibGV0cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6OTEycHgpe1xuICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXZoOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXG4gICAgfVxuICAgIC5oZXJve1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgICBtYXJnaW4tbGVmdDowO1xuICAgICAgICBcbiAgICAgICBcbiAgICB9XG4gICAgLmhvbWUtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRyaWdnZXJ7XG4gICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9ICAgXG59XG5cbi8qbW9iaWxlKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICAudHJpZ2dlcntcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XG4gICAgfVxuXG4gICAgLmJ0bntcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XG4gICAgfVxuXG4gICAgLmhlcm8gaDF7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy0xLXNpemUpLzEuNSk7XG4gICAgICAgXG4gICAgfVxuICAgIC5oZXJvIGg0eyBcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWhlYWRpbmctNC1zaXplKS8xLjIpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuaGVybyBwe1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgLmNvbnRlbnQtd3JhcHBlcntcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICB9XG4gICAgXG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7O29DQUlvQzs7QUFFcEM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7O0lBRXBCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsNkJBQTZCOztJQUU3Qix3QkFBd0I7O0lBRXhCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7O0lBRXJCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLGlGQUF5RjtJQUN6Riw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQjs7O0FBR0o7O0FBRUE7Ozs7Ozs7O0dBUUc7OztBQUdIO0lBQ0ksK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztJQUNqQyxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7QUFDQTs7R0FFRyxrQkFBa0I7R0FDbEIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtBQUN0Qjs7O0FBR0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCOzs7O0FBSXJCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjs7QUFFOUI7QUFDQTtJQUNJLHNCQUFzQjs7O0FBRzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLHVCQUF1QjtBQUN2QjtJQUNJO1FBQ0kseUZBQWdHO1FBQ2hHLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixnQkFBZ0I7O0lBRXBCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsZUFBZTtRQUNmLGFBQWE7OztJQUdqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7SUFDQTs7UUFFSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2Ysa0JBQWtCOzs7O0lBSXRCO0FBQ0o7O0FBRUEsU0FBUzs7QUFFVDtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLHFDQUFxQztRQUNyQyxzQ0FBc0M7SUFDMUM7O0lBRUE7O1FBRUksMENBQTBDOztJQUU5QztJQUNBO1FBQ0ksMENBQTBDOztJQUU5Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0dBRUQ7SUFDQyxrQkFBa0I7R0FDbkI7OztBQUdIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFETGFNK0Rpc3BsYXkmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQmZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PUJlbGxlZmFpciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBmb250LWZhbWlseTogJ0FETGFNIERpc3BsYXknLCBjdXJzaXZlO1xcbmZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgc2Fucy1zZXJpZjtcXG5mb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC8qIGNvbG9yIHZhcmlhYmxlcyAqL1xcblxcbiAgICAtLW1haW4tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6I0QwRDZGOTtcXG4gICAgLS1taXNjZWxsYW5lb3VzLWNvbG9yOiMwQjBEMTc7XFxuXFxuICAgIC8qIGZvbnQgc2l6ZSB2YXJpYWJsZXMgKi9cXG5cXG4gICAgLS1oZWFkaW5nLTEtc2l6ZToxNTBweDtcXG4gICAgLS1oZWFkaW5nLTItc2l6ZToxMDBweDtcXG4gICAgLS1oZWFkaW5nLTMtc2l6ZTo1NnB4O1xcbiAgICAtLWhlYWRpbmctNC1zaXplOjMycHg7XFxuICAgIC0taGVhZGluZy01LXNpemU6MjhweDtcXG5cXG4gICAgLypvdGhlciBzaXppbmdzICovXFxuICAgIC0tY2lyY2xlLXJhZGl1czoyNzRweDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS1kZXNrdG9wLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICBcXG4gICAgXFxufVxcblxcbi8qICNuYXZiYXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgIG1hcmdpbi10b3A6IDQ4cHg7XFxuICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufSAqL1xcblxcblxcbmgxe1xcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy0xLXNpemUpO1xcbiAgIFxcbn1cXG5cXG5oNHtcXG4gICAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLW1pc2NlbGxhbmVvdXMtY29sb3IpOyBcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTQtc2l6ZSk7XFxuICAgIFxcbn1cXG5cXG5oNXtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy01LXNpemUpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNC43NXB4O1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbi5oZXJve1xcbiAgICBcXG4gICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xcbiAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcblxcbi50cmlnZ2Vye1xcbiAgICB3aWR0aDogdmFyKC0tY2lyY2xlLXJhZGl1cyk7XFxuICAgIGhlaWdodDogdmFyKC0tY2lyY2xlLXJhZGl1cyk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbi1yaWdodDogY2FsYyggMjc0cHgvMik7ICovXFxuICAgIG1hcmdpbi1yaWdodDogMTglO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuLnRyaWdnZXI6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRyaWdnZXI6aG92ZXIgLmJ0bntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICBib3JkZXI6IDUwcHggc29saWQgIzk3OTc5NztcXG5cXG59XFxuLnRyaWdnZXI6aG92ZXIgLmJ0biBoNHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcXG4gICBcXG5cXG59XFxuLmJ0bntcXG4gICAgd2lkdGg6IDI3NHB4O1xcbiAgICBoZWlnaHQ6IDI3NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmJ0biBoNHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oZXJvIHB7XFxuICAgIGZvbnQtZmFtaWx5OidCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZiA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5ob21lLWNvbnRlbnR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuLyogbGF5b3V0IGZvciB0YWJsZXRzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6OTEycHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9ob21lL2JhY2tncm91bmQtaG9tZS10YWJsZXQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgLmNvbnRlbnQtd3JhcHBlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1dmg7IFxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgXFxuICAgIH1cXG4gICAgLmhlcm97XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgICAgICBtYXJnaW4tbGVmdDowO1xcbiAgICAgICAgXFxuICAgICAgIFxcbiAgICB9XFxuICAgIC5ob21lLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnRyaWdnZXJ7XFxuICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1JTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgfSAgIFxcbn1cXG5cXG4vKm1vYmlsZSovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KXtcXG4gICAgLnRyaWdnZXJ7XFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1jaXJjbGUtcmFkaXVzKS8xLjUpO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XFxuICAgIH1cXG5cXG4gICAgLmJ0bntcXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWNpcmNsZS1yYWRpdXMpLzEuNSk7XFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY2lyY2xlLXJhZGl1cykvMS41KTtcXG4gICAgfVxcblxcbiAgICAuaGVybyBoMXtcXG4gICAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWhlYWRpbmctMS1zaXplKS8xLjUpO1xcbiAgICAgICBcXG4gICAgfVxcbiAgICAuaGVybyBoNHsgXFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0taGVhZGluZy00LXNpemUpLzEuMik7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuaGVybyBwe1xcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAuY29udGVudC13cmFwcGVye1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgfVxcbiAgICBcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWJhci13aWR0aDo0MHB4O1xuICAgIC0tYmFyLWhlaWdodDo1cHg7XG4gICAgLS1oYW1idXJnZXItZ2FwOjRweDtcbiAgICAtLWZvcmVncm91bmQ6d2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiMwQjBEMTc7XG4gICAgLS1hbmltYXRpb24tdGltaW5nOjIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIC0taGFtYnVyZ2VyLWhlaWdodDpjYWxjKHZhcigtLWJhci1oZWlnaHQpICozICsgdmFyKC0taGFtYnVyZ2VyLWdhcCkgKiAyKTtcbn1cblxuXG4jbmF2YmFyIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogNDhweDsgLyogQWRkIHlvdXIgZGVzaXJlZCBtYXJnaW4tdG9wIHZhbHVlICovXG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsIDEzLCAyMywgMC40KTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxubmF2e1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNztcbiAgICBcbn1cblxubmF2IGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xufVxuXG5uYXYgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTcwcHg7XG4gICBcbn1cblxubmF2IGxpe1xuICAgIFxuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm5hdiBsaTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xufVxuXG5cbi5sb2dve1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ286OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgICB6LWluZGV4OiAyO1xuXG59XG5cbi5hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUsXG4jdG9nZ2xle1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5oYW1idXJnZXItbWVudXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIG5hdmJhciBmb3IgdGFibGV0cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6ODIwcHgpe1xuICAgXG4gICAgI25hdmJhciB7XG4gICAgICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgfVxuICAgIG5hdntcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNztcbiAgICAgICAgXG4gICAgfVxuICAgIG5hdiB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgIFxuICAgIH1cbiAgICBuYXYgbGl7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAubG9nbzo6YWZ0ZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgXG4gICAgfVxufVxuXG5cbi8qIGJpZ2dlciB0YWJsZXRzKi9cbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcbiAgIFxuICAgICNuYXZiYXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICB9XG4gICAgbmF2e1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIG5hdiB1bHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICAgICBcbiAgICB9XG4gICAgbmF2IGxpe1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvZ286OmFmdGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIFxuICAgIH1cbn1cblxuLyogbW9iaWxlICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuaGFtYnVyZ2VyLW1lbnV7XG4gICAgICAgIC0teC13aWR0aDpjYWxjKHZhcigtLWhhbWJ1cmdlci1oZWlnaHQpICogMS40MTQyMTM1NjIzNyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogdmFyKC0taGFtYnVyZ2VyLWdhcCk7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLmhhbWJ1cmdlci1tZW51OjpiZWZvcmUsXG4gICAgLmhhbWJ1cmdlci1tZW51OjphZnRlcixcbiAgICAuaGFtYnVyZ2VyLW1lbnUgaW5wdXR7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1iYXItd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWJhci1oZWlnaHQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS1hbmltYXRpb24tdGltaW5nKSx3aWR0aCB2YXIoLS1hbmltYXRpb24tdGltaW5nKSxyb3RhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyksIHRyYW5zbGF0ZSB2YXIoLS1hbmltYXRpb24tdGltaW5nKTtcblxuICAgIH1cblxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dHtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnUgaW5wdXQ6Y2hlY2tlZHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3Jle1xuICAgICAgICByb3RhdGU6IDQ1ZGVnO1xuICAgICAgICB3aWR0aDogdmFyKC0teC13aWR0aCk7XG4gICAgICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLy0yKTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpOjphZnRlcntcbiAgICAgICAgcm90YXRlOiAtNDVkZWc7XG4gICAgICAgIHdpZHRoOiB2YXIoLS14LXdpZHRoKTtcbiAgICAgICAgdHJhbnNsYXRlOiAwIGNhbGModmFyKC0tYmFyLWhlaWdodCkvMik7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgdHJhbnNsYXRlOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiAgdHJhbnNsYXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgXG4gICAgfVxuICAgIG5hdiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNzAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIG5hdiBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKSsgbmF2e1xuICAgICAgICB0cmFuc2xhdGU6IDA7XG4gICAgfVxuICAgIC5sb2dve1xuICAgICAgICBtYXJnaW4tbGVmdDowIDtcbiAgICB9XG4gICBcbiAgICAjbmF2YmFye1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyx3RUFBd0U7QUFDNUU7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQixFQUFFLHNDQUFzQztJQUN4RCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLHVDQUF1QztJQUN2QyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsbUJBQW1COztBQUV2Qjs7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QUEyQjtJQUMvQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYmFyLXdpZHRoOjQwcHg7XFxuICAgIC0tYmFyLWhlaWdodDo1cHg7XFxuICAgIC0taGFtYnVyZ2VyLWdhcDo0cHg7XFxuICAgIC0tZm9yZWdyb3VuZDp3aGl0ZTtcXG4gICAgLS1iYWNrZ3JvdW5kOiMwQjBEMTc7XFxuICAgIC0tYW5pbWF0aW9uLXRpbWluZzoyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgLS1oYW1idXJnZXItaGVpZ2h0OmNhbGModmFyKC0tYmFyLWhlaWdodCkgKjMgKyB2YXIoLS1oYW1idXJnZXItZ2FwKSAqIDIpO1xcbn1cXG5cXG5cXG4jbmF2YmFyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiA0OHB4OyAvKiBBZGQgeW91ciBkZXNpcmVkIG1hcmdpbi10b3AgdmFsdWUgKi9cXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMTMsIDIzLCAwLjQpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5uYXZ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7IFxcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjc7XFxuICAgIFxcbn1cXG5cXG5uYXYgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxubmF2IHVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTcwcHg7XFxuICAgXFxufVxcblxcbm5hdiBsaXtcXG4gICAgXFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5uYXYgbGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG5cXG5cXG4ubG9nb3tcXG4gICAgXFxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogODBweDtcXG4gICAgei1pbmRleDogMjtcXG5cXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUsXFxuI3RvZ2dsZXtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4vKiBuYXZiYXIgZm9yIHRhYmxldHMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo4MjBweCl7XFxuICAgXFxuICAgICNuYXZiYXIge1xcbiAgICAgICAgXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcblxcbiAgICB9XFxuICAgIG5hdntcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgXFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43O1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgbmF2IHVse1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyNXB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIG5hdiBsaXtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmxvZ286OmFmdGVye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuICAgIH1cXG59XFxuXFxuXFxuLyogYmlnZ2VyIHRhYmxldHMqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjkxMnB4KXtcXG4gICBcXG4gICAgI25hdmJhciB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcblxcbiAgICB9XFxuICAgIG5hdntcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgXFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43O1xcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgfVxcbiAgICBuYXYgdWx7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxuICAgICAgIFxcbiAgICB9XFxuICAgIG5hdiBsaXtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmxvZ286OmFmdGVye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuICAgIH1cXG59XFxuXFxuLyogbW9iaWxlICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5oYW1idXJnZXItbWVudXtcXG4gICAgICAgIC0teC13aWR0aDpjYWxjKHZhcigtLWhhbWJ1cmdlci1oZWlnaHQpICogMS40MTQyMTM1NjIzNyk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0taGFtYnVyZ2VyLWdhcCk7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDI1cHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5oYW1idXJnZXItbWVudTo6YmVmb3JlLFxcbiAgICAuaGFtYnVyZ2VyLW1lbnU6OmFmdGVyLFxcbiAgICAuaGFtYnVyZ2VyLW1lbnUgaW5wdXR7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1iYXItd2lkdGgpO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1iYXItaGVpZ2h0KTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLHdpZHRoIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLHJvdGF0ZSB2YXIoLS1hbmltYXRpb24tdGltaW5nKSwgdHJhbnNsYXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xcblxcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dHtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudSBpbnB1dDpjaGVja2Vke1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudTpoYXMoaW5wdXQ6Y2hlY2tlZCk6OmJlZm9yZXtcXG4gICAgICAgIHJvdGF0ZTogNDVkZWc7XFxuICAgICAgICB3aWR0aDogdmFyKC0teC13aWR0aCk7XFxuICAgICAgICB0cmFuc2xhdGU6IDAgY2FsYyh2YXIoLS1iYXItaGVpZ2h0KS8tMik7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YWZ0ZXJ7XFxuICAgICAgICByb3RhdGU6IC00NWRlZztcXG4gICAgICAgIHdpZHRoOiB2YXIoLS14LXdpZHRoKTtcXG4gICAgICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLzIpO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICB0cmFuc2xhdGU6IDEwMCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiAgdHJhbnNsYXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIG5hdiB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA3MCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgbmF2IGxpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItbWVudTpoYXMoaW5wdXQ6Y2hlY2tlZCkrIG5hdntcXG4gICAgICAgIHRyYW5zbGF0ZTogMDtcXG4gICAgfVxcbiAgICAubG9nb3tcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjAgO1xcbiAgICB9XFxuICAgXFxuICAgICNuYXZiYXJ7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQganNvbiBmcm9tICcuL2Fzc2V0cy9kYXRhL2RhdGEuanNvbic7XG5cblxuLy8gIGltcG9ydCAnLi9hc3NldHMvY3NzL2hvbWUuY3NzJztcbiBpbXBvcnQgJy4vYXNzZXRzL2Nzcy9uYXZiYXIuY3NzJztcbiBpbXBvcnQgJy4vYXNzZXRzL2Nzcy9ob21lLmNzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9