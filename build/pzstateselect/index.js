/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pzstateselect/edit.js":
/*!***********************************!*\
  !*** ./src/pzstateselect/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

 // WordPress React wrapper



function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundColor
  } = attributes;
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
    top: "50px",
    left: "10%",
    right: "10%",
    bottom: "50px"
  });
  const [myState, setMyState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("IL");
  const handleChange = event => {
    setMyState(event.target.value);
  };
  const paddingString = attributes.paddingValues ? `${attributes.paddingValues.top || 0} ${attributes.paddingValues.right || 0} ${attributes.paddingValues.bottom || 0} ${attributes.paddingValues.left || 0}` : "";
  const marginString = attributes.marginValues ? `${attributes.marginValues.top || 0} ${attributes.marginValues.right || 0} ${attributes.marginValues.bottom || 0} ${attributes.marginValues.left || 0}` : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(),
    style: {
      padding: paddingString,
      margin: marginString
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select field:"),
    value: attributes.field,
    onChange: value => {
      setAttributes({
        field: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Field prompts"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Prompt displayed inside field",
    value: attributes.prompt,
    onChange: value => setAttributes({
      prompt: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Unique field id",
    value: attributes.name,
    onChange: value => setAttributes({
      name: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: "Margin",
    values: attributes.marginValues,
    onChange: value => {
      setAttributes({
        marginValues: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: "Padding",
    values: attributes.paddingValues,
    onChange: value => {
      setAttributes({
        paddingValues: value
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: attributes.paddingValues,
      margin: attributes.marginValues
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "state-select",
    id: "state-select-label"
  }, props.prompt), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "state-select",
    name: "state",
    value: myState,
    onChange: handleChange
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AL"
  }, "Alabama"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AK"
  }, "Alaska"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AZ"
  }, "Arizona"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AR"
  }, "Arkansas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CA"
  }, "California"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CO"
  }, "Colorado"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CT"
  }, "Connecticut"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "DE"
  }, "Delaware"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "DC"
  }, "District Of Columbia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "FL"
  }, "Florida"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "GA"
  }, "Georgia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "HI"
  }, "Hawaii"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ID"
  }, "Idaho"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IL"
  }, "Illinois"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IN"
  }, "Indiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IA"
  }, "Iowa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "KS"
  }, "Kansas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "KY"
  }, "Kentucky"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "LA"
  }, "Louisiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ME"
  }, "Maine"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MD"
  }, "Maryland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MA"
  }, "Massachusetts"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MI"
  }, "Michigan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MN"
  }, "Minnesota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MS"
  }, "Mississippi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MO"
  }, "Missouri"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MT"
  }, "Montana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NE"
  }, "Nebraska"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NV"
  }, "Nevada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NH"
  }, "New Hampshire"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NJ"
  }, "New Jersey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NM"
  }, "New Mexico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NY"
  }, "New York"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NC"
  }, "North Carolina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ND"
  }, "North Dakota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OH"
  }, "Ohio"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OK"
  }, "Oklahoma"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OR"
  }, "Oregon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "PA"
  }, "Pennsylvania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "RI"
  }, "Rhode Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "SC"
  }, "South Carolina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "SD"
  }, "South Dakota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "TN"
  }, "Tennessee"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "TX"
  }, "Texas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "UT"
  }, "Utah"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "VT"
  }, "Vermont"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "VA"
  }, "Virginia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WA"
  }, "Washington"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WV"
  }, "West Virginia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WI"
  }, "Wisconsin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WY"
  }, "Wyoming")));
}

/***/ }),

/***/ "./src/pzstateselect/index.js":
/*!************************************!*\
  !*** ./src/pzstateselect/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/pzstateselect/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/pzstateselect/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/pzstateselect/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/pzstateselect/block.json");

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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "800px",
      height: "800px",
      viewBox: "0 0 260 165",
      enableBackground: "new 0 0 260 165",
      stroke: "currentColor"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      strokeWidth: "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M258,23.765l-5.217-3.73l-2.621-7.979l-6.633-0.567l-1.653,11.521l-2.101,3.329l-1.298,2.219l-7.767,2.124l-6.445,1.535 l-5.194,6.728l1.464,3.116l-10.883,6.894l-3.329,4.225l-3.116,2.314l-8.428,5.005l-4.651-1.417l3.589-8.475l-5.312-7.389 l-1.558-6.185l-3.966-2.125l-6.799,6.209l-1.393,5.312l2.054,6.704l-2.03,7.625l-3.093,0.496l-1.723-4.533l-0.874-4.697l1.676-9.656 l-1.345-1.723l2.101-5.194l12.701-1.818l-4.58-4.532l-9.963,2.762l-4.886-3.353l-8.169,3.919l-7.294-0.732l2.502-7.979l-5.17-2.88 l-4.58,0.26l-5.902-2.857l-8.38-0.023l-27.928-1.417l-34.491-4.698l-14.07-2.88l-3.942-0.897L24.687,2.235l-1.605,5.052 l-7.744-2.644l-0.189,12.512l2.715,1.228l-4.084,2.738L5.919,36.136l-0.142,5.406L2,50.347l0.236,9.868l7.649,30.784l8.853,4.958 l4.107,5.477l0.803,5.265l12.441,1.628l-0.779,1.181l18.367,10.788l10.246,1.606l4.721-2.149l8.924,1.181l7.176,7.554l1.96,6.445 l7.106,4.863l2.88-4.485l6.893,0.236l9.703,14.188l2.101,7.342l9.962,2.03l-1.274-5.571l3.021-6.374l7.838-4.462l9.655-7.72 l8.31,2.526l2.243-1.935l5.43,4.06l6.043-1.983l0.874-5.028l5.902-1.677l5.193-1.038l7.342,0.33l6.351,3.589l4.674-3.683 l8.522,6.515l-0.094,6.729l5.288,7.932l10.08,5.807l0.567-11.048l-4.061-8.782l-7.483-12.819l1.865-8.546l7.531-8.522l2.266-4.816 l11.638-14.637l-2.455-3.966l0.071-0.024l0.236-0.047l0.425-0.094l0.118-0.024l-3.99-3.588l0.307-4.084l-1.354-1.354l4.116,0.339 l1.204-0.591l0.756-2.927l0.142-0.023l0.047-0.024l-3.636-7.649l1.558-1.676l4.604,0.685l-0.945-7.72l1.181-0.354l7.554-3.943 l2.078-3.092l0.236,0.141l0.59,0.874l2.101-2.526l-3.022-5.926l-0.047-1.298l3.99-5.973L258,23.765z M35.9,132.856l-2.856,1.015 l-6.964,3.305l-3.565,5.335l0.921,7.153l-2.999,5.572l7.98,7.53l20.373-2.549l-0.755-22.239L35.9,132.856z"
    }))),
    foreground: "#0693e3"
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

/***/ "./src/pzstateselect/save.js":
/*!***********************************!*\
  !*** ./src/pzstateselect/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// pzstateselect/save.js


function save({
  attributes
}) {
  const paddingString = attributes.paddingValues ? `${attributes.paddingValues.top || 0} ${attributes.paddingValues.right || 0} ${attributes.paddingValues.bottom || 0} ${attributes.paddingValues.left || 0}` : "";
  const marginString = attributes.marginValues ? `${attributes.marginValues.top || 0} ${attributes.marginValues.right || 0} ${attributes.marginValues.bottom || 0} ${attributes.marginValues.left || 0}` : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    className: "form-style-1",
    style: {
      padding: paddingString,
      margin: marginString
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "addr_state",
    id: "state-select-label"
  }, attributes.prompt), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "addr_state",
    name: "addr_state",
    value: "IL"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AL"
  }, "Alabama"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AK"
  }, "Alaska"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AZ"
  }, "Arizona"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "AR"
  }, "Arkansas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CA"
  }, "California"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CO"
  }, "Colorado"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "CT"
  }, "Connecticut"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "DE"
  }, "Delaware"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "DC"
  }, "District Of Columbia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "FL"
  }, "Florida"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "GA"
  }, "Georgia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "HI"
  }, "Hawaii"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ID"
  }, "Idaho"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IL"
  }, "Illinois"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IN"
  }, "Indiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IA"
  }, "Iowa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "KS"
  }, "Kansas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "KY"
  }, "Kentucky"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "LA"
  }, "Louisiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ME"
  }, "Maine"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MD"
  }, "Maryland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MA"
  }, "Massachusetts"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MI"
  }, "Michigan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MN"
  }, "Minnesota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MS"
  }, "Mississippi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MO"
  }, "Missouri"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "MT"
  }, "Montana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NE"
  }, "Nebraska"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NV"
  }, "Nevada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NH"
  }, "New Hampshire"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NJ"
  }, "New Jersey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NM"
  }, "New Mexico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NY"
  }, "New York"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "NC"
  }, "North Carolina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ND"
  }, "North Dakota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OH"
  }, "Ohio"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OK"
  }, "Oklahoma"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "OR"
  }, "Oregon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "PA"
  }, "Pennsylvania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "RI"
  }, "Rhode Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "SC"
  }, "South Carolina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "SD"
  }, "South Dakota"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "TN"
  }, "Tennessee"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "TX"
  }, "Texas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "UT"
  }, "Utah"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "VT"
  }, "Vermont"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "VA"
  }, "Virginia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WA"
  }, "Washington"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WV"
  }, "West Virginia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WI"
  }, "Wisconsin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "WY"
  }, "Wyoming")));
}

/***/ }),

/***/ "./src/pzstateselect/style.scss":
/*!**************************************!*\
  !*** ./src/pzstateselect/style.scss ***!
  \**************************************/
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/pzstateselect/block.json":
/*!**************************************!*\
  !*** ./src/pzstateselect/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"peakforms/pzstateselect","version":"0.1.0","title":"Peakforms State Select","category":"widgets","icon":"smiley","description":"A state select field for Peakforms","example":{},"supports":{"html":false},"textdomain":"peakforms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"prompt":{"type":"string","default":"Select a state"},"id":{"type":"string"},"name":{"type":"string"},"marginValues":{"type":"object","default":{"top":"50px","left":"10%","right":"10%","bottom":"50px"}},"paddingValues":{"type":"object","default":{"top":"0px","left":"0px","right":"0px","bottom":"0px"}},"backgroundColor":{"type":"string"}}}');

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
/******/ 			"pzstateselect/index": 0,
/******/ 			"pzstateselect/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["pzstateselect/style-index"], () => (__webpack_require__("./src/pzstateselect/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map