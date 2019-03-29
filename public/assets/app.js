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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/o2system-espresso/src/Espresso.js":
/*!********************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Espresso.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Espresso; });
/* harmony import */ var _Kernel_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kernel/Input */ "./node_modules/o2system-espresso/src/Kernel/Input.js");
/* harmony import */ var _Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kernel/Http/Message/ServerRequest */ "./node_modules/o2system-espresso/src/Kernel/Http/Message/ServerRequest.js");
/* harmony import */ var _Html_EventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Html/EventListener */ "./node_modules/o2system-espresso/src/Html/EventListener.js");
/* harmony import */ var _Html_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Html/View */ "./node_modules/o2system-espresso/src/Html/View.js");
/* harmony import */ var _Helpers_Url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Helpers/Url */ "./node_modules/o2system-espresso/src/Helpers/Url.js");

/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

// Kernel Helpers



// Html Helpers



// Common Helpers


// ------------------------------------------------------------------------

/**
 * Class Espresso
 */
class Espresso {
    constructor() {
        this.input = new _Kernel_Input__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.serverRequest = new _Kernel_Http_Message_ServerRequest__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.eventListener = new _Html_EventListener__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.view = new _Html_View__WEBPACK_IMPORTED_MODULE_3__["default"]();

        /**
         * Initialize EventListener
         */
        this.eventListener.loadPage('a[data-action="load-page"]');
        this.eventListener.loadData('a[data-action="load-data"]');
        this.eventListener.loadFrame('a[data-action="load-frame"]');

        this.helpers = {
            url: new _Helpers_Url__WEBPACK_IMPORTED_MODULE_4__["default"]()
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Helpers/Url.js":
/*!***********************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Helpers/Url.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Url; });
/* harmony import */ var _Kernel_Http_Message_Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Kernel/Http/Message/Uri */ "./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



/**
 * Class Url
 * 
 * @package Helpers
 */
class Url {
    constructor() {
        this.uri = new _Kernel_Http_Message_Uri__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.string = this.uri.__toString();
    }

    getString() {
        return this.string;
    }

    base(segments, query) {
        let uri = this.uri;
        
        if(typeof segments === 'undefined') {
            return this.string;
        } 

        if(Array.isArray(segments)) {
            uri = this.uri.setSegments(segments);
        } else {
            uri = this.uri.setSegments(segments.split('/'));
        }

        if(query instanceof Object) {
            uri = uri.setQuery(query); 
        }

        return uri.__toString();
    }

    current(query) {
        if (query instanceof Object) {
            this.uri.withQuery(query);
        }

        return this.uri.__toString();
    }

    redirect(segments, query) {
        let href = this.base(segments, query);

        window.location.href = href;
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Html/EventListener.js":
/*!******************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Html/EventListener.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventListener; });
/* harmony import */ var _Kernel_Http_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Kernel/Http/Request */ "./node_modules/o2system-espresso/src/Kernel/Http/Request.js");
/* harmony import */ var template7__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! template7 */ "./node_modules/template7/dist/template7.esm.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------




/**
 * Class EventListener
 * 
 * @package Html
 */
class EventListener {
    constructor() {
        this.callbacks = new Object();
    }

    loadFrame(selectors) {
        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();

                    const pageFrame = document.querySelector('iframe[role="page-frame"]');
                    if (pageFrame !== 'null') {
                        pageFrame.setAttribute('src', element.target.href);
                    }
                });
            });
        }
    }

    loadPage(selectors) {
        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();

                    const pageContent = document.querySelector('section[role="page-content"]');
                    if (pageContent) {
                        const request = new _Kernel_Http_Request__WEBPACK_IMPORTED_MODULE_0__["default"]();
                        const xhr = request.CORS(element.target.href, 'GET');
                        if (xhr) {
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    pageContent.innerHTML = xhr.responseText;
                                }
                            }
                            xhr.onerror = function () {
                                console.error('Cannot load page:' + element.target.href);
                            }
                            xhr.send();
                        }
                    }
                });
            });
        }
    }

    loadData(selectors) {
        const templateElements = document.querySelectorAll('[role="template"]');
        if (templateElements.length > 0) {
            templateElements.forEach(function (templateElement) {
                templateElement.style.display = 'none';
            });
        }

        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();
                    const dataUrl = element.target.getAttribute('data-url');
                    const dataTarget = element.target.getAttribute('data-target');

                    if (typeof dataUrl !== 'undefined') {
                        const request = new _Kernel_Http_Request__WEBPACK_IMPORTED_MODULE_0__["default"]();
                        const xhr = request.CORS(dataUrl, 'GET');
                        if (xhr) {
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    let dataJSON = JSON.parse(xhr.responseText);

                                    if (dataJSON.result.length > 0) {
                                        const dataSource = document.querySelector('[data-source="' + dataTarget + '"]');
                                        const dataSourceTemplate = dataSource.querySelector('[role="template"]');

                                        if (dataSource) {
                                            if (!dataSourceTemplate) {
                                                let compiler = template7__WEBPACK_IMPORTED_MODULE_1__["default"].compile(dataSource.innerText);
                                                dataSource.innerHTML = compiler(dataJSON.result[0]);
                                            } else {
                                                dataJSON.result.forEach(function (itemData, itemIndex) {
                                                    let itemTemplate = dataSourceTemplate.cloneNode(true);
                                                    itemExists = dataSource.querySelector('[data-index="' + itemIndex + '"]');
                                                    if (!itemExists) {
                                                        itemTemplate.setAttribute('data-index', itemIndex);
                                                        itemTemplate.removeAttribute('role');
                                                        itemTemplate.style.display = 'block';
                                                        let compiler = template7__WEBPACK_IMPORTED_MODULE_1__["default"].compile(itemTemplate.innerText);
                                                        itemTemplate.innerHTML = compiler(itemData);
                                                        dataSource.appendChild(itemTemplate);
                                                    }
                                                });
                                            }
                                        } else {
                                            console.log(dataJSON);
                                        }
                                    }
                                }
                            }
                            xhr.onerror = function () {
                                console.error('Cannot load data:' + dataUrl);
                            }
                            xhr.send();
                        }
                    }
                });
            });
        }
    }

    listenOnloadFunctionCalls() {
        const elements = document.querySelectorAll('[onload]');
        const callbacks = this.callbacks;

        if (elements.length > 0) {
            elements.forEach(function (element) {
                let functionName = element.getAttribute('onload');
                let functionArgs = null;

                if (element.hasAttribute('data-args')) {
                    functionArgs = JSON.parse(element.getAttribute('data-args'));
                }

                const functionCallback = callbacks[functionName];

                if (typeof functionCallback == "function") {
                    if (Array.isArray(functionArgs)) {
                        functionCallback.apply(functionArgs);
                    } else {
                        functionCallback();
                    }
                }
            });
        }
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Html/View.js":
/*!*********************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Html/View.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var template7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! template7 */ "./node_modules/template7/dist/template7.esm.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



/**
 * Class View
 * 
 * @package Html
 */
class View {
    
    /**
     * View.loadTemplate
     * 
     * @param string template
     * 
     * @return View 
     */
    loadTemplate(template) {
        this.template = template;

        return this;
    }

    // ------------------------------------------------------------------------

    /**
     * View.withVars
     * 
     * @param array vars 
     * 
     * @return View
     */
    withVars(vars) {
        if(vars instanceof Object) {
            this.vars = vars;
        }
        
        return this;
    }

    // ------------------------------------------------------------------------

    /**
     * View.render
     * 
     * @return string
     */
    render() {
        let output = "";

        if(typeof this.template == "string" && this.vars instanceof Object) {
            let compiler = template7__WEBPACK_IMPORTED_MODULE_0__["default"].compile(this.template);
            output = compiler(this.vars);
        }

        delete this.template;
        delete this.vars;

        return output;
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Kernel/Http/Message/ServerRequest.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Kernel/Http/Message/ServerRequest.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerRequest; });
/* harmony import */ var _Uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uri */ "./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



/**
 * Class ServerRequest
 * 
 * @package Kernel/Http/Message
 */
class ServerRequest {
    constructor() {
        this.uri = new _Uri__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.queryParams = new URLSearchParams(window.location.search);
        this.queryString = window.location.search.substring(1);
    }

    getUri() {
        return this.uri;
    }

    getQueryString() {
        return this.queryString;
    }

    getQueryParams() {
        return this.queryParams
    }

    getHash() {
        return window.location.hash;
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri.js":
/*!***********************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uri; });
/* harmony import */ var _Uri_Segments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uri/Segments */ "./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri/Segments.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



/**
 * Class Uri
 * 
 * @package Kernel/Http/Message
 * 
 * @todo add domain, subdomain, tld
 */
class Uri {
    constructor() {
        this.scheme = window.location.protocol;
        this.segments = new _Uri_Segments__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.host = window.location.hostname;
        this.port = window.location.port;
        this.hash = window.location.hash;

        // Query as Object
        this.query = (function (a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));
    }

    getScheme() {
        return this.scheme;
    }

    setSegments(segments) {
        if(Array.isArray(segments)) {
            this.segments = this.segments.setParts(segments);
        }

        return this;
    }

    getSegments() {
        return this.segments;
    }

    withSegments(segments) {
        let uri = new Uri();

        if(Array.isArray(segments)) {
            uri.segments = uri.segments.withParts(segments);
        }

        return uri;
    }

    setHost(host) {
        if(typeof host == "string") {
            this.host = host;
        }

        return this;
    }

    getHost() {
        return this.host;
    }

    setPort(port) {
        if(isNaN(port)) {
            this.port = port;
        }

        return this;
    }

    getPort() {
        return this.port;
    }

    setHash(hash) {
        if(typeof hash == "string") {
            this.hash = hash;
        }

        return this;
    }

    getHash() {
        return this.hash;
    }

    withHash(hash) {
        let uri = new Uri();

        if(typeof hash == "string") {
            uri.hash = hash;
        }

        return uri;
    }

    setQuery(query) {
        if(query instanceof Object) {
            this.query = query;
        }

        return this;
    }

    getQuery() {
        return this.query;
    }

    addQuery(key, value) {
        if(typeof key != "undefined" && typeof value != "undefined") {
            this.query[key] = value;
        }
        
        return this;
    }

    withQuery(query) {
        let uri = new Uri();
        
        if(query instanceof Object) {
            uri.query = query;
        }
        
        return uri;
    }

    buildQuery(params) {
        var uriComponent = encodeURIComponent;
        var query = Object.keys(params)
            .map(key => uriComponent(key) + '=' + uriComponent(params[key]))
            .join('&');
    }

    __toString() {
        let uriString = this.scheme + '//' + this.host + (this.port ? ':' + this.port : '') + this.segments.__toString();

        if(this.query.length > 0) {
            uriString = uriString + this.buildQuery(this.query);
        }

        if(this.hash) {
            uriString = uriString + this.hash;
        }

        return uriString;
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri/Segments.js":
/*!********************************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Kernel/Http/Message/Uri/Segments.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Segments; });
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

/**
 * Class Segments
 * 
 * @package Kernel/Http/Message/Uri
 */
class Segments {
    constructor() {
        this.string = window.location.pathname.substr(1);
        this.parts = this.string.split('/');
    }

    setString(string) {
        this.string = string;

        return this;
    }

    getString() {
        return this.string;
    }

    addString(string) {
        if(typeof string == "string") {
            this.string = this.string + string;
            this.parts = this.string.split('/');
        }

        return this;
    }

    withString(string) {
        let segments = new Segments();

        if(typeof string == "string") {
            segments.string = string;
        }

        return segments;
    }

    getParts() {
        return this.parts;
    }

    setParts(parts) {
        if(Array.isArray(parts)) {
            this.parts = parts;
            this.string = parts.join('/');
        }

        return this;
    }

    getParts() {
        return this.parts;
    }

    addParts(parts) {
        if(Array.isArray(parts)) {
            this.parts.concat(parts);
            this.string = this.parts.join('/');
        }

        return this;
    }

    withParts(parts) {
        let segments = new Segments();

        if(Array.isArray(parts)) {
            segments.parts = parts;
            segments.string = parts.join('/');
        }
    }

    getPart(index) {
        if (this.parts.hasOwnProperty(index - 1)) {
            return this.parts[index - 1];
        }

        return null;
    }

    addPart(part) {
        if(typeof part != "undefined") {
            this.parts.push(part);
            this.string = this.parts.join('/');
        }
        
        return this;
    }

    withPart(part) {
        let segments = new Segments();
        segments.addPart(part);
        
        return segments;
    }

    hasPart(part) {
        let result = this.parts.find(part);

        if(typeof result === 'undefined') {
            return false;
        }

        return true;
    }

    filterPart(part) {
        return part.replace(/[\W_-]/g, '').replace(/_+/g, '-').replace(/-+/g, '-');
    }

    getNumOfParts() {
        return this.parts.length;
    }

    __toString() {
        if(this.parts.length > 0) {
            return '/' + this.parts.join('/');
        }

        return '';
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Kernel/Http/Request.js":
/*!*******************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Kernel/Http/Request.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Request; });
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

/**
 * Class Request
 * 
 * @package Kernel/Http
 */
class Request {
    CORS(url, method) {
        method = typeof method === 'undefined' ? 'GET' : method;
        const xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // Otherwise, check if XDomainRequest.
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // Otherwise, CORS is not supported by the browser.
            xhr = null;
        }
        return xhr;
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/Kernel/Input.js":
/*!************************************************************!*\
  !*** ./node_modules/o2system-espresso/src/Kernel/Input.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

/**
 * Class Input
 * 
 * @package Kernel/Http
 */
class Input {
    get(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var url = window.location.href;
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    sanitize(string) {
        let tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

        let tagOrComment = new RegExp(
            '<(?:'
            // Comment body.
            +
            '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            +
            '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' +
            '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            +
            '|/?[a-z]' +
            tagBody +
            ')>',
            'gi');

        let oldString;
        do {
            oldString = string;
            string = string.replace(tagOrComment, '');
        } while (string !== oldString);
        return string.replace(/</g, '&lt;');
    }

    formatNumber(number) {
        return ("" + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function ($1) {
            return $1 + "."
        });
    }
}

/***/ }),

/***/ "./node_modules/o2system-espresso/src/main.js":
/*!****************************************************!*\
  !*** ./node_modules/o2system-espresso/src/main.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Espresso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Espresso */ "./node_modules/o2system-espresso/src/Espresso.js");
/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



let espresso = window.espresso = new _Espresso__WEBPACK_IMPORTED_MODULE_0__["default"]();

/**
 * Espresso Object
 */
/* harmony default export */ __webpack_exports__["default"] = (espresso);

/***/ }),

/***/ "./node_modules/template7/dist/template7.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/template7/dist/template7.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Template7 1.4.1
 * Mobile-first HTML template engine
 * 
 * http://www.idangero.us/template7/
 * 
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 5, 2019
 */

let t7ctx;
if (typeof window !== 'undefined') {
  t7ctx = window;
} else if (typeof global !== 'undefined') {
  t7ctx = global;
} else {
  t7ctx = undefined;
}

const Template7Context = t7ctx;

const Template7Utils = {
  quoteSingleRexExp: new RegExp('\'', 'g'),
  quoteDoubleRexExp: new RegExp('"', 'g'),
  isFunction(func) {
    return typeof func === 'function';
  },
  escape(string = '') {
    return string
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },
  helperToSlices(string) {
    const { quoteDoubleRexExp, quoteSingleRexExp } = Template7Utils;
    const helperParts = string.replace(/[{}#}]/g, '').trim().split(' ');
    const slices = [];
    let shiftIndex;
    let i;
    let j;
    for (i = 0; i < helperParts.length; i += 1) {
      let part = helperParts[i];
      let blockQuoteRegExp;
      let openingQuote;
      if (i === 0) slices.push(part);
      else if (part.indexOf('"') === 0 || part.indexOf('\'') === 0) {
        blockQuoteRegExp = part.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
        openingQuote = part.indexOf('"') === 0 ? '"' : '\'';
        // Plain String
        if (part.match(blockQuoteRegExp).length === 2) {
          // One word string
          slices.push(part);
        } else {
          // Find closed Index
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            part += ` ${helperParts[j]}`;
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              slices.push(part);
              break;
            }
          }
          if (shiftIndex) i = shiftIndex;
        }
      } else if (part.indexOf('=') > 0) {
        // Hash
        const hashParts = part.split('=');
        const hashName = hashParts[0];
        let hashContent = hashParts[1];
        if (!blockQuoteRegExp) {
          blockQuoteRegExp = hashContent.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
          openingQuote = hashContent.indexOf('"') === 0 ? '"' : '\'';
        }
        if (hashContent.match(blockQuoteRegExp).length !== 2) {
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            hashContent += ` ${helperParts[j]}`;
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              break;
            }
          }
          if (shiftIndex) i = shiftIndex;
        }
        const hash = [hashName, hashContent.replace(blockQuoteRegExp, '')];
        slices.push(hash);
      } else {
        // Plain variable
        slices.push(part);
      }
    }
    return slices;
  },
  stringToBlocks(string) {
    const blocks = [];
    let i;
    let j;
    if (!string) return [];
    const stringBlocks = string.split(/({{[^{^}]*}})/);
    for (i = 0; i < stringBlocks.length; i += 1) {
      let block = stringBlocks[i];
      if (block === '') continue;
      if (block.indexOf('{{') < 0) {
        blocks.push({
          type: 'plain',
          content: block,
        });
      } else {
        if (block.indexOf('{/') >= 0) {
          continue;
        }
        block = block
          .replace(/{{([#/])*([ ])*/, '{{$1')
          .replace(/([ ])*}}/, '}}');
        if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
          // Simple variable
          blocks.push({
            type: 'variable',
            contextName: block.replace(/[{}]/g, ''),
          });
          continue;
        }
        // Helpers
        const helperSlices = Template7Utils.helperToSlices(block);
        let helperName = helperSlices[0];
        const isPartial = helperName === '>';
        const helperContext = [];
        const helperHash = {};
        for (j = 1; j < helperSlices.length; j += 1) {
          const slice = helperSlices[j];
          if (Array.isArray(slice)) {
            // Hash
            helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
          } else {
            helperContext.push(slice);
          }
        }

        if (block.indexOf('{#') >= 0) {
          // Condition/Helper
          let helperContent = '';
          let elseContent = '';
          let toSkip = 0;
          let shiftIndex;
          let foundClosed = false;
          let foundElse = false;
          let depth = 0;
          for (j = i + 1; j < stringBlocks.length; j += 1) {
            if (stringBlocks[j].indexOf('{{#') >= 0) {
              depth += 1;
            }
            if (stringBlocks[j].indexOf('{{/') >= 0) {
              depth -= 1;
            }
            if (stringBlocks[j].indexOf(`{{#${helperName}`) >= 0) {
              helperContent += stringBlocks[j];
              if (foundElse) elseContent += stringBlocks[j];
              toSkip += 1;
            } else if (stringBlocks[j].indexOf(`{{/${helperName}`) >= 0) {
              if (toSkip > 0) {
                toSkip -= 1;
                helperContent += stringBlocks[j];
                if (foundElse) elseContent += stringBlocks[j];
              } else {
                shiftIndex = j;
                foundClosed = true;
                break;
              }
            } else if (stringBlocks[j].indexOf('else') >= 0 && depth === 0) {
              foundElse = true;
            } else {
              if (!foundElse) helperContent += stringBlocks[j];
              if (foundElse) elseContent += stringBlocks[j];
            }
          }
          if (foundClosed) {
            if (shiftIndex) i = shiftIndex;
            if (helperName === 'raw') {
              blocks.push({
                type: 'plain',
                content: helperContent,
              });
            } else {
              blocks.push({
                type: 'helper',
                helperName,
                contextName: helperContext,
                content: helperContent,
                inverseContent: elseContent,
                hash: helperHash,
              });
            }
          }
        } else if (block.indexOf(' ') > 0) {
          if (isPartial) {
            helperName = '_partial';
            if (helperContext[0]) {
              if (helperContext[0].indexOf('[') === 0) helperContext[0] = helperContext[0].replace(/[[\]]/g, '');
              else helperContext[0] = `"${helperContext[0].replace(/"|'/g, '')}"`;
            }
          }
          blocks.push({
            type: 'helper',
            helperName,
            contextName: helperContext,
            hash: helperHash,
          });
        }
      }
    }
    return blocks;
  },
  parseJsVariable(expression, replace, object) {
    return expression.split(/([+ \-*/^()&=|<>!%:?])/g).reduce((arr, part) => {
      if (!part) {
        return arr;
      }
      if (part.indexOf(replace) < 0) {
        arr.push(part);
        return arr;
      }
      if (!object) {
        arr.push(JSON.stringify(''));
        return arr;
      }

      let variable = object;
      if (part.indexOf(`${replace}.`) >= 0) {
        part.split(`${replace}.`)[1].split('.').forEach((partName) => {
          if (partName in variable) variable = variable[partName];
          else variable = undefined;
        });
      }
      if (typeof variable === 'string') {
        variable = JSON.stringify(variable);
      }
      if (variable === undefined) variable = 'undefined';

      arr.push(variable);
      return arr;
    }, []).join('');
  },
  parseJsParents(expression, parents) {
    return expression.split(/([+ \-*^()&=|<>!%:?])/g).reduce((arr, part) => {
      if (!part) {
        return arr;
      }

      if (part.indexOf('../') < 0) {
        arr.push(part);
        return arr;
      }

      if (!parents || parents.length === 0) {
        arr.push(JSON.stringify(''));
        return arr;
      }

      const levelsUp = part.split('../').length - 1;
      const parentData = levelsUp > parents.length ? parents[parents.length - 1] : parents[levelsUp - 1];

      let variable = parentData;
      const parentPart = part.replace(/..\//g, '');
      parentPart.split('.').forEach((partName) => {
        if (typeof variable[partName] !== 'undefined') variable = variable[partName];
        else variable = 'undefined';
      });
      if (variable === false || variable === true) {
        arr.push(JSON.stringify(variable));
        return arr;
      }
      if (variable === null || variable === 'undefined') {
        arr.push(JSON.stringify(''));
        return arr;
      }
      arr.push(JSON.stringify(variable));
      return arr;
    }, []).join('');
  },
  getCompileVar(name, ctx, data = 'data_1') {
    let variable = ctx;
    let parts;
    let levelsUp = 0;
    let newDepth;
    if (name.indexOf('../') === 0) {
      levelsUp = name.split('../').length - 1;
      newDepth = variable.split('_')[1] - levelsUp;
      variable = `ctx_${newDepth >= 1 ? newDepth : 1}`;
      parts = name.split('../')[levelsUp].split('.');
    } else if (name.indexOf('@global') === 0) {
      variable = 'Template7.global';
      parts = name.split('@global.')[1].split('.');
    } else if (name.indexOf('@root') === 0) {
      variable = 'root';
      parts = name.split('@root.')[1].split('.');
    } else {
      parts = name.split('.');
    }
    for (let i = 0; i < parts.length; i += 1) {
      const part = parts[i];
      if (part.indexOf('@') === 0) {
        let dataLevel = data.split('_')[1];
        if (levelsUp > 0) {
          dataLevel = newDepth;
        }
        if (i > 0) {
          variable += `[(data_${dataLevel} && data_${dataLevel}.${part.replace('@', '')})]`;
        } else {
          variable = `(data_${dataLevel} && data_${dataLevel}.${part.replace('@', '')})`;
        }
      } else if (Number.isFinite ? Number.isFinite(part) : Template7Context.isFinite(part)) {
        variable += `[${part}]`;
      } else if (part === 'this' || part.indexOf('this.') >= 0 || part.indexOf('this[') >= 0 || part.indexOf('this(') >= 0) {
        variable = part.replace('this', ctx);
      } else {
        variable += `.${part}`;
      }
    }
    return variable;
  },
  getCompiledArguments(contextArray, ctx, data) {
    const arr = [];
    for (let i = 0; i < contextArray.length; i += 1) {
      if (/^['"]/.test(contextArray[i])) arr.push(contextArray[i]);
      else if (/^(true|false|\d+)$/.test(contextArray[i])) arr.push(contextArray[i]);
      else {
        arr.push(Template7Utils.getCompileVar(contextArray[i], ctx, data));
      }
    }

    return arr.join(', ');
  },
};

/* eslint no-eval: "off" */

const Template7Helpers = {
  _partial(partialName, options) {
    const ctx = this;
    const p = Template7Class.partials[partialName];
    if (!p || (p && !p.template)) return '';
    if (!p.compiled) {
      p.compiled = new Template7Class(p.template).compile();
    }
    Object.keys(options.hash).forEach((hashName) => {
      ctx[hashName] = options.hash[hashName];
    });
    return p.compiled(ctx, options.data, options.root);
  },
  escape(context) {
    if (typeof context !== 'string') {
      throw new Error('Template7: Passed context to "escape" helper should be a string');
    }
    return Template7Utils.escape(context);
  },
  if(context, options) {
    let ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  unless(context, options) {
    let ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (!ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  each(context, options) {
    let ctx = context;
    let ret = '';
    let i = 0;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    if (Array.isArray(ctx)) {
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
      for (i = 0; i < ctx.length; i += 1) {
        ret += options.fn(ctx[i], { first: i === 0, last: i === ctx.length - 1, index: i });
      }
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
    } else {
      // eslint-disable-next-line
      for (const key in ctx) {
        i += 1;
        ret += options.fn(ctx[key], { key });
      }
    }
    if (i > 0) return ret;
    return options.inverse(this);
  },
  with(context, options) {
    let ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = context.call(this); }
    return options.fn(ctx);
  },
  join(context, options) {
    let ctx = context;
    if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
    return ctx.join(options.hash.delimiter || options.hash.delimeter);
  },
  js(expression, options) {
    const data = options.data;
    let func;
    let execute = expression;
    ('index first last key').split(' ').forEach((prop) => {
      if (typeof data[prop] !== 'undefined') {
        const re1 = new RegExp(`this.@${prop}`, 'g');
        const re2 = new RegExp(`@${prop}`, 'g');
        execute = execute
          .replace(re1, JSON.stringify(data[prop]))
          .replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = `(function(){${execute}})`;
    } else {
      func = `(function(){return (${execute})})`;
    }
    return eval(func).call(this);
  },
  js_if(expression, options) {
    const data = options.data;
    let func;
    let execute = expression;
    ('index first last key').split(' ').forEach((prop) => {
      if (typeof data[prop] !== 'undefined') {
        const re1 = new RegExp(`this.@${prop}`, 'g');
        const re2 = new RegExp(`@${prop}`, 'g');
        execute = execute
          .replace(re1, JSON.stringify(data[prop]))
          .replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = `(function(){${execute}})`;
    } else {
      func = `(function(){return (${execute})})`;
    }
    const condition = eval(func).call(this);
    if (condition) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
};
Template7Helpers.js_compare = Template7Helpers.js_if;

const Template7Options = {};
const Template7Partials = {};

class Template7Class {
  constructor(template) {
    const t = this;
    t.template = template;
  }
  compile(template = this.template, depth = 1) {
    const t = this;
    if (t.compiled) return t.compiled;

    if (typeof template !== 'string') {
      throw new Error('Template7: Template must be a string');
    }
    const { stringToBlocks, getCompileVar, getCompiledArguments } = Template7Utils;

    const blocks = stringToBlocks(template);
    const ctx = `ctx_${depth}`;
    const data = `data_${depth}`;
    if (blocks.length === 0) {
      return function empty() { return ''; };
    }

    function getCompileFn(block, newDepth) {
      if (block.content) return t.compile(block.content, newDepth);
      return function empty() { return ''; };
    }
    function getCompileInverse(block, newDepth) {
      if (block.inverseContent) return t.compile(block.inverseContent, newDepth);
      return function empty() { return ''; };
    }

    let resultString = '';
    if (depth === 1) {
      resultString += `(function (${ctx}, ${data}, root) {\n`;
    } else {
      resultString += `(function (${ctx}, ${data}) {\n`;
    }
    if (depth === 1) {
      resultString += 'function isArray(arr){return Array.isArray(arr);}\n';
      resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
      resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
      resultString += 'root = root || ctx_1 || {};\n';
    }
    resultString += 'var r = \'\';\n';
    let i;
    for (i = 0; i < blocks.length; i += 1) {
      const block = blocks[i];
      // Plain block
      if (block.type === 'plain') {
        // eslint-disable-next-line
        resultString += `r +='${(block.content).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'')}';`;
        continue;
      }
      let variable;
      let compiledArguments;
      // Variable block
      if (block.type === 'variable') {
        variable = getCompileVar(block.contextName, ctx, data);
        resultString += `r += c(${variable}, ${ctx});`;
      }
      // Helpers block
      if (block.type === 'helper') {
        let parents;
        if (ctx !== 'ctx_1') {
          const level = ctx.split('_')[1];
          let parentsString = `ctx_${level - 1}`;
          for (let j = level - 2; j >= 1; j -= 1) {
            parentsString += `, ctx_${j}`;
          }
          parents = `[${parentsString}]`;
        } else {
          parents = `[${ctx}]`;
        }
        let dynamicHelper;
        if (block.helperName.indexOf('[') === 0) {
          block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ''), ctx, data);
          dynamicHelper = true;
        }
        if (dynamicHelper || block.helperName in Template7Helpers) {
          compiledArguments = getCompiledArguments(block.contextName, ctx, data);
          resultString += `r += (Template7Helpers${dynamicHelper ? `[${block.helperName}]` : `.${block.helperName}`}).call(${ctx}, ${compiledArguments && (`${compiledArguments}, `)}{hash:${JSON.stringify(block.hash)}, data: ${data} || {}, fn: ${getCompileFn(block, depth + 1)}, inverse: ${getCompileInverse(block, depth + 1)}, root: root, parents: ${parents}});`;
        } else if (block.contextName.length > 0) {
          throw new Error(`Template7: Missing helper: "${block.helperName}"`);
        } else {
          variable = getCompileVar(block.helperName, ctx, data);
          resultString += `if (${variable}) {`;
          resultString += `if (isArray(${variable})) {`;
          resultString += `r += (Template7Helpers.each).call(${ctx}, ${variable}, {hash:${JSON.stringify(block.hash)}, data: ${data} || {}, fn: ${getCompileFn(block, depth + 1)}, inverse: ${getCompileInverse(block, depth + 1)}, root: root, parents: ${parents}});`;
          resultString += '}else {';
          resultString += `r += (Template7Helpers.with).call(${ctx}, ${variable}, {hash:${JSON.stringify(block.hash)}, data: ${data} || {}, fn: ${getCompileFn(block, depth + 1)}, inverse: ${getCompileInverse(block, depth + 1)}, root: root, parents: ${parents}});`;
          resultString += '}}';
        }
      }
    }
    resultString += '\nreturn r;})';

    if (depth === 1) {
      // eslint-disable-next-line
      t.compiled = eval(resultString);
      return t.compiled;
    }
    return resultString;
  }
  static get options() {
    return Template7Options;
  }
  static get partials() {
    return Template7Partials;
  }
  static get helpers() {
    return Template7Helpers;
  }
}

function Template7(...args) {
  const [template, data] = args;
  if (args.length === 2) {
    let instance = new Template7Class(template);
    const rendered = instance.compile()(data);
    instance = null;
    return (rendered);
  }
  return new Template7Class(template);
}
Template7.registerHelper = function registerHelper(name, fn) {
  Template7Class.helpers[name] = fn;
};
Template7.unregisterHelper = function unregisterHelper(name) {
  Template7Class.helpers[name] = undefined;
  delete Template7Class.helpers[name];
};
Template7.registerPartial = function registerPartial(name, template) {
  Template7Class.partials[name] = { template };
};
Template7.unregisterPartial = function unregisterPartial(name) {
  if (Template7Class.partials[name]) {
    Template7Class.partials[name] = undefined;
    delete Template7Class.partials[name];
  }
};
Template7.compile = function compile(template, options) {
  const instance = new Template7Class(template, options);
  return instance.compile();
};

Template7.options = Template7Class.options;
Template7.helpers = Template7Class.helpers;
Template7.partials = Template7Class.partials;

/* harmony default export */ __webpack_exports__["default"] = (Template7);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/app.js":
/*!**************************!*\
  !*** ./resources/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var o2system_espresso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! o2system-espresso */ "./node_modules/o2system-espresso/src/main.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./resources/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file is part of the O2System Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    console.log('Service Worker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    console.log('Service Worker registration failed: ', err);
  });
}

$(document).ready(function () {
  var DOMDocument = $(document);
  var DOMBody = $('body');
  /**
   * Tabs button
   */

  DOMDocument.on('click', '[data-toggle="tab"]', function (e) {
    e.preventDefault();
    var attributeHref = $(this).attr('href');

    if (history.pushState) {
      history.pushState(null, null, attributeHref);
    } else {
      location.hash = attributeHref;
    }
  });
  /**
   * Delete button
   */

  DOMBody.on('click', '[data-action="delete"]', function (e) {
    e.preventDefault();
    var modalDialog = DOMDocument.find('#confirm-dialog');
    var attributeHref = $(this).attr('href');
    modalDialog.modal({
      show: true
    });
    modalDialog.on('click', '[value="yes"]', function () {
      window.location = attributeHref;
    });
    modalDialog.on('click', '[value="no"]', function () {
      modalDialog.modal('hide');
    });
  });
  /**
   * Cancel button
   */

  DOMDocument.on('click', '[data-action="cancel"]', function (e) {
    e.preventDefault();
    history.go(-1);
  });
  /**
   * Modal Form
   */

  DOMDocument.on('click', '[data-modal="modal-form"]', function (e) {
    e.preventDefault();
    var modalForm = DOMDocument.find('#modal-form');
    modalForm.modal({
      show: true
    });
    modalForm.find('.modal-body').load($(this).attr('href') + ' #modal-form', function () {
      $.getScript($('#js-theme').attr('src'));
      var modalTitle = $(this).find('#modal-form').data('title');
      var modalAction = $(this).find('#modal-form').data('action');
      modalForm.find('form').attr('action', modalAction);
      modalForm.find('.modal-title').html(modalTitle);
    }).css({
      width: 'auto',
      //probably not needed
      height: 'auto',
      //probably not needed
      'max-height': '100%'
    });
  });
});

/***/ }),

/***/ "./resources/app.scss":
/*!****************************!*\
  !*** ./resources/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map