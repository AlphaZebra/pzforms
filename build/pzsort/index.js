/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pzsort/edit.js":
/*!****************************!*\
  !*** ./src/pzsort/edit.js ***!
  \****************************/
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

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */




function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundColor
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const {
    textColor
  } = attributes;
  const curQuestion = props.attributes.question;

  // get starting style values
  const body = document.querySelector("body");
  const themeBase = getComputedStyle(body).getPropertyValue("--wp--preset--color--base");
  const themeContrast = getComputedStyle(body).getPropertyValue("--wp--preset--color--contrast");
  const themeButtonBackground = getComputedStyle(body).getPropertyValue("--wp--preset--color--accent");
  const themeButtonBackgroundHoverColor = getComputedStyle(body).getPropertyValue("--wp--preset--color--accent-5");
  if (attributes.formBackground == "") setAttributes({
    formBackground: themeBase
  });
  if (attributes.formColor == "") setAttributes({
    formColor: themeContrast
  });
  if (attributes.buttonColor == "") setAttributes({
    buttonColor: themeButtonBackground
  });
  if (attributes.buttonTextColor == "") setAttributes({
    buttonTextColor: themeContrast
  });
  if (attributes.buttonBackgroundHoverColor == "") setAttributes({
    buttonBackgroundHoverColor: themeButtonBackgroundHoverColor
  });

  // define the onChange functions
  const onChangeBackgroundColor = val => {
    setAttributes({
      formBackground: val
    });
  };
  const onChangeFormColor = val => {
    setAttributes({
      formColor: val
    });
  };
  const onChangeButtonColor = val => {
    setAttributes({
      buttonColor: val
    });
  };
  const onChangeButtonTextColor = val => {
    setAttributes({
      buttonTextColor: val
    });
  };
  const onChangeButtonBackgroundHoverColor = val => {
    setAttributes({
      buttonBackgroundHoverColor: val
    });
  };
  function updateQuestion(newVal) {
    props.setAttributes({
      question: newVal
    });
  }
  function updateSlug(newVal) {
    props.setAttributes({
      slug: newVal
    });
  }
  function updateTextColor(newVal) {
    props.setAttributes({
      textColor: newVal
    });
  }
  function updateButtonTextColor(newVal) {
    props.setAttributes({
      buttonTextColor: newVal
    });
  }
  function updateButtonBackgroundColor(newVal) {
    props.setAttributes({
      buttonBackgroundColor: newVal
    });
  }
  function updateBlockBackgroundColor(newVal) {
    props.setAttributes({
      blockBackgroundColor: newVal
    });
  }
  function deleteAnswer(x) {
    const newAnswers = props.attributes.answers.filter(function (z, index) {
      return index != x;
    });
    props.setAttributes({
      answers: newAnswers
    });
    if (x == props.attributes.correctAnswer) {
      props.setAttributes({
        correctAnswer: undefined
      });
    }
  }
  function setAnswer(x) {
    props.setAttributes({
      correctAnswer: x
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    __experimentalIsRenderedInSidebar: true,
    colorSettings: [{
      value: attributes.formBackground,
      onChange: onChangeBackgroundColor,
      label: "Form background color "
    }, {
      value: attributes.formColor,
      onChange: onChangeFormColor,
      label: "Form text color "
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Required",
    checked: attributes.required,
    onChange: value => setAttributes({
      required: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: attributes.formStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Question:",
    value: props.attributes.question,
    onChange: updateQuestion,
    style: {
      fontSize: "20px"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Slug name:",
    value: props.attributes.slug,
    onChange: updateSlug,
    style: {
      fontSize: "20px"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: "13px",
      margin: "20px 0 8px 0"
    }
  }, "Answers:"), props.attributes.answers.map(function (answer, index) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      value: answer,
      onChange: x => {
        const newAnswers = props.attributes.answers.concat([]);
        newAnswers[index] = x;
        props.setAttributes({
          answers: newAnswers
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "link",
      className: "pz-delete",
      onClick: () => deleteAnswer(index)
    }, "Delete")));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: () => {
      props.setAttributes({
        answers: props.attributes.answers.concat([""])
      });
    }
  }, "Add another answer")));
}

/***/ }),

/***/ "./src/pzsort/index.js":
/*!*****************************!*\
  !*** ./src/pzsort/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/pzsort/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/pzsort/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/pzsort/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/pzsort/block.json");

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


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      fill: "#0693e3",
      width: "800px",
      height: "800px",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "#0693e3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      "stroke-width": "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M9.29289322,7 L7.14644661,4.85355339 C6.95118446,4.65829124 6.95118446,4.34170876 7.14644661,4.14644661 C7.34170876,3.95118446 7.65829124,3.95118446 7.85355339,4.14644661 L10.8535534,7.14644661 C11.0488155,7.34170876 11.0488155,7.65829124 10.8535534,7.85355339 L7.85355339,10.8535534 C7.65829124,11.0488155 7.34170876,11.0488155 7.14644661,10.8535534 C6.95118446,10.6582912 6.95118446,10.3417088 7.14644661,10.1464466 L9.29289322,8 L5.5,8 C4.67157288,8 4,8.67157288 4,9.5 L4,15.5 C4,16.3284271 4.67157288,17 5.5,17 L10.5,17 C10.7761424,17 11,17.2238576 11,17.5 C11,17.7761424 10.7761424,18 10.5,18 L5.5,18 C4.11928813,18 3,16.8807119 3,15.5 L3,9.5 C3,8.11928813 4.11928813,7 5.5,7 L9.29289322,7 Z M13.5,8 C13.2238576,8 13,7.77614237 13,7.5 C13,7.22385763 13.2238576,7 13.5,7 L20.5,7 C20.7761424,7 21,7.22385763 21,7.5 C21,7.77614237 20.7761424,8 20.5,8 L13.5,8 Z M13.5,13 C13.2238576,13 13,12.7761424 13,12.5 C13,12.2238576 13.2238576,12 13.5,12 L20.5,12 C20.7761424,12 21,12.2238576 21,12.5 C21,12.7761424 20.7761424,13 20.5,13 L13.5,13 Z M13.5,18 C13.2238576,18 13,17.7761424 13,17.5 C13,17.2238576 13.2238576,17 13.5,17 L20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L13.5,18 Z"
    }), " "))
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/pzsort/save.js":
/*!****************************!*\
  !*** ./src/pzsort/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

function save({
  attributes
}) {
  const thisURL = window.location.href;
  const url = new URL(thisURL);
  const adminPath = url.protocol + "//" + url.host + "/wp-admin/admin-post.php";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "pz-question-text"
  }, attributes.question), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "items-list",
    class: "moveable"
  }, attributes.answers.map(function (answer, index) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, answer);
  })));
}

/***/ }),

/***/ "./src/pzsort/style.scss":
/*!*******************************!*\
  !*** ./src/pzsort/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/pzsort/block.json":
/*!*******************************!*\
  !*** ./src/pzsort/block.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"peakforms/pzsort","version":"0.1.0","title":"Peakforms Sort","category":"widgets","icon":"smiley","description":"Sort form field.","example":{},"supports":{"html":false},"textdomain":"peakforms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"prompt":{"type":"string","default":"Value"},"table":{"type":"string","default":"person"},"field":{"type":"string","default":"lastname"},"question":{"type":"string"},"slug":{"type":"string","default":"sorted-items"},"answers":{"type":"array","default":[""]},"id":{"type":"string","default":"some1"},"name":{"type":"string"},"loadCurrent":{"type":"boolean","default":false},"required":{"type":"boolean","default":false},"marginValues":{"type":"object","default":{"top":"50px","left":"10%","right":"10%","bottom":"50px"}},"formStyle":{"type":"string","default":"form-style-1"},"textColor":{"type":"string"},"buttonTextColor":{"type":"string","default":"#000000"},"buttonBackgroundColor":{"type":"string","default":"#FFFFFF"},"redirectURL":{"type":"string"},"errorURL":{"type":"string","default":"/error/"},"correctAnswer":{"type":"number","default":"undefined"},"shortName":{"type":"string","default":"undefined"},"priority":{"type":"string"}}}');

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pzsort/index": 0,
/******/ 			"pzsort/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkpeakforms"] = globalThis["webpackChunkpeakforms"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["pzsort/style-index"], () => (__webpack_require__("./src/pzsort/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map