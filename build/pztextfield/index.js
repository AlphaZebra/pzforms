/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pztextfield/edit.js":
/*!*********************************!*\
  !*** ./src/pztextfield/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundColor,
    marginValues,
    paddingValues
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Config"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Prompt displayed with field",
    value: attributes.prompt,
    onChange: value => setAttributes({
      prompt: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Field variable name",
    help: "Unique to this page. No spaces.",
    value: attributes.name ? attributes.name : attributes.field,
    onChange: value => setAttributes({
      name: value,
      id: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Width",
    help: "May be a percentage or a number of pixels.",
    value: attributes.width,
    onChange: value => setAttributes({
      width: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Required",
    checked: attributes.required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Show Asterisk",
    checked: attributes.showAsterisk,
    onChange: value => setAttributes({
      showAsterisk: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Multiline",
    checked: attributes.multiline,
    onChange: value => setAttributes({
      multiline: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: "Margin",
    values: marginValues,
    onChange: nextValues => setAttributes({
      marginValues: nextValues
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: "Padding",
    values: paddingValues,
    onChange: nextValues => setAttributes({
      paddingValues: nextValues
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: marginValues ? `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}` : undefined,
      padding: paddingValues ? `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}` : undefined
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    id: attributes.id,
    name: attributes.name,
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.prompt, attributes.showAsterisk && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        color: "red"
      }
    }, " *")),
    style: {
      width: attributes.width
    }
    // variant="outlined"
  })));
}

/***/ }),

/***/ "./src/pztextfield/save.js":
/*!*********************************!*\
  !*** ./src/pztextfield/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  attributes.class = "form-style-1";
  if (!attributes.required == true) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
      style: {
        margin: attributes.marginValues ? `${attributes.marginValues.top} ${attributes.marginValues.right} ${attributes.marginValues.bottom} ${attributes.marginValues.left}` : undefined,
        padding: attributes.paddingValues ? `${attributes.paddingValues.top} ${attributes.paddingValues.right} ${attributes.paddingValues.bottom} ${attributes.paddingValues.left}` : undefined
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: attributes.id
    }, attributes.prompt), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      id: attributes.id,
      name: attributes.name,
      style: {
        width: attributes.width
      }
    }));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: attributes.name
    }, attributes.prompt, attributes.showAsterisk && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        color: "red"
      }
    }, " *")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      id: attributes.id,
      name: attributes.name,
      required: true,
      style: {
        width: attributes.width
      }
    }));
  }
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/pztextfield/block.json":
/*!************************************!*\
  !*** ./src/pztextfield/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"peakforms/pztextfield","version":"0.1.0","title":"PZ Text Field","category":"peakforms","icon":"smiley","description":"Text input field.","example":{},"supports":{"html":false},"textdomain":"peakforms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"prompt":{"type":"string","default":"Value"},"id":{"type":"string","default":"some1"},"name":{"type":"string"},"width":{"type":"string","default":"100%"},"required":{"type":"boolean","default":false},"multiline":{"type":"boolean","default":false},"marginValues":{"type":"object","default":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}},"paddingValues":{"type":"object","default":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}},"showAsterisk":{"type":"boolean","default":false}}}');

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/pztextfield/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/pztextfield/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/pztextfield/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/pztextfield/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.1",
      id: "Icons",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32",
      xmlSpace: "preserve",
      width: "800px",
      height: "800px"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      strokeWidth: "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.st0 {fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "3",
      y: "12",
      className: "st0",
      width: "26",
      height: "10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      className: "st0",
      x1: "6",
      y1: "15",
      x2: "10",
      y2: "15"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      className: "st0",
      x1: "8",
      y1: "19",
      x2: "8",
      y2: "15"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      className: "st0",
      x1: "11",
      y1: "8",
      x2: "15",
      y2: "8"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      className: "st0",
      x1: "11",
      y1: "26",
      x2: "15",
      y2: "26"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      className: "st0",
      x1: "13",
      y1: "26",
      x2: "13",
      y2: "8"
    }))),
    foreground: "#0693e3"
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map