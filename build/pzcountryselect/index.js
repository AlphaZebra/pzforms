/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pzcountryselect/edit.js":
/*!*************************************!*\
  !*** ./src/pzcountryselect/edit.js ***!
  \*************************************/
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
  const [myState, setMyState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("IL");
  const handleChange = event => {
    setMyState(event.target.value);
  };
  const marginString = attributes.marginValues ? `${attributes.marginValues.top || 0} ${attributes.marginValues.right || 0} ${attributes.marginValues.bottom || 0} ${attributes.marginValues.left || 0}` : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
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
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: marginString
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "country-select",
    id: "country-select-label"
  }, props.prompt), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "country-select",
    name: "country",
    value: "PA",
    onChange: handleChange
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Afghanistan"
  }, "Afghanistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "\xC5land Islands"
  }, "\xC5land Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Albania"
  }, "Albania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Algeria"
  }, "Algeria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "American Samoa"
  }, "American Samoa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Andorra"
  }, "Andorra"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Angola"
  }, "Angola"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Anguilla"
  }, "Anguilla"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Antarctica"
  }, "Antarctica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Antigua and Barbuda"
  }, "Antigua and Barbuda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Argentina"
  }, "Argentina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Armenia"
  }, "Armenia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Aruba"
  }, "Aruba"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Australia"
  }, "Australia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Austria"
  }, "Austria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Azerbaijan"
  }, "Azerbaijan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bahamas"
  }, "Bahamas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bahrain"
  }, "Bahrain"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bangladesh"
  }, "Bangladesh"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Barbados"
  }, "Barbados"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belarus"
  }, "Belarus"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belgium"
  }, "Belgium"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belize"
  }, "Belize"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Benin"
  }, "Benin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bermuda"
  }, "Bermuda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bhutan"
  }, "Bhutan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bolivia"
  }, "Bolivia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bosnia and Herzegovina"
  }, "Bosnia and Herzegovina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Botswana"
  }, "Botswana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bouvet Island"
  }, "Bouvet Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Brazil"
  }, "Brazil"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "British Indian Ocean Territory"
  }, "British Indian Ocean Territory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Brunei Darussalam"
  }, "Brunei Darussalam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bulgaria"
  }, "Bulgaria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Burkina Faso"
  }, "Burkina Faso"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Burundi"
  }, "Burundi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cambodia"
  }, "Cambodia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cameroon"
  }, "Cameroon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Canada"
  }, "Canada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cape Verde"
  }, "Cape Verde"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cayman Islands"
  }, "Cayman Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Central African Republic"
  }, "Central African Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Chad"
  }, "Chad"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Chile"
  }, "Chile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "China"
  }, "China"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Christmas Island"
  }, "Christmas Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cocos (Keeling) Islands"
  }, "Cocos (Keeling) Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Colombia"
  }, "Colombia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Comoros"
  }, "Comoros"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Congo"
  }, "Congo"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Congo, The Democratic Republic of The"
  }, "Congo, The Democratic Republic of The"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cook Islands"
  }, "Cook Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Costa Rica"
  }, "Costa Rica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cote D'ivoire"
  }, "Cote D'ivoire"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Croatia"
  }, "Croatia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cuba"
  }, "Cuba"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cyprus"
  }, "Cyprus"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Czech Republic"
  }, "Czech Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Denmark"
  }, "Denmark"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Djibouti"
  }, "Djibouti"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Dominica"
  }, "Dominica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Dominican Republic"
  }, "Dominican Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ecuador"
  }, "Ecuador"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Egypt"
  }, "Egypt"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "El Salvador"
  }, "El Salvador"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Equatorial Guinea"
  }, "Equatorial Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Eritrea"
  }, "Eritrea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Estonia"
  }, "Estonia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ethiopia"
  }, "Ethiopia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Falkland Islands (Malvinas)"
  }, "Falkland Islands (Malvinas)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Faroe Islands"
  }, "Faroe Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Fiji"
  }, "Fiji"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Finland"
  }, "Finland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "France"
  }, "France"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Guiana"
  }, "French Guiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Polynesia"
  }, "French Polynesia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Southern Territories"
  }, "French Southern Territories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gabon"
  }, "Gabon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gambia"
  }, "Gambia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Georgia"
  }, "Georgia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Germany"
  }, "Germany"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ghana"
  }, "Ghana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gibraltar"
  }, "Gibraltar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Greece"
  }, "Greece"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Greenland"
  }, "Greenland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Grenada"
  }, "Grenada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guadeloupe"
  }, "Guadeloupe"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guam"
  }, "Guam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guatemala"
  }, "Guatemala"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guernsey"
  }, "Guernsey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guinea"
  }, "Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guinea-bissau"
  }, "Guinea-bissau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guyana"
  }, "Guyana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Haiti"
  }, "Haiti"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Heard Island and Mcdonald Islands"
  }, "Heard Island and Mcdonald Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Holy See (Vatican City State)"
  }, "Holy See (Vatican City State)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Honduras"
  }, "Honduras"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Hong Kong"
  }, "Hong Kong"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Hungary"
  }, "Hungary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iceland"
  }, "Iceland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "India"
  }, "India"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Indonesia"
  }, "Indonesia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iran, Islamic Republic of"
  }, "Iran, Islamic Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iraq"
  }, "Iraq"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ireland"
  }, "Ireland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Isle of Man"
  }, "Isle of Man"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Israel"
  }, "Israel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Italy"
  }, "Italy"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jamaica"
  }, "Jamaica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Japan"
  }, "Japan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jersey"
  }, "Jersey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jordan"
  }, "Jordan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kazakhstan"
  }, "Kazakhstan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kenya"
  }, "Kenya"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kiribati"
  }, "Kiribati"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Korea, Democratic People's Republic of"
  }, "Korea, Democratic People's Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Korea, Republic of"
  }, "Korea, Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kuwait"
  }, "Kuwait"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kyrgyzstan"
  }, "Kyrgyzstan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lao People's Democratic Republic"
  }, "Lao People's Democratic Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Latvia"
  }, "Latvia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lebanon"
  }, "Lebanon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lesotho"
  }, "Lesotho"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Liberia"
  }, "Liberia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Libyan Arab Jamahiriya"
  }, "Libyan Arab Jamahiriya"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Liechtenstein"
  }, "Liechtenstein"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lithuania"
  }, "Lithuania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Luxembourg"
  }, "Luxembourg"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Macao"
  }, "Macao"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Macedonia, The Former Yugoslav Republic of"
  }, "Macedonia, The Former Yugoslav Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Madagascar"
  }, "Madagascar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malawi"
  }, "Malawi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malaysia"
  }, "Malaysia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Maldives"
  }, "Maldives"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mali"
  }, "Mali"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malta"
  }, "Malta"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Marshall Islands"
  }, "Marshall Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Martinique"
  }, "Martinique"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mauritania"
  }, "Mauritania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mauritius"
  }, "Mauritius"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mayotte"
  }, "Mayotte"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mexico"
  }, "Mexico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Micronesia, Federated States of"
  }, "Micronesia, Federated States of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Moldova, Republic of"
  }, "Moldova, Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Monaco"
  }, "Monaco"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mongolia"
  }, "Mongolia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Montenegro"
  }, "Montenegro"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Montserrat"
  }, "Montserrat"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Morocco"
  }, "Morocco"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mozambique"
  }, "Mozambique"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Myanmar"
  }, "Myanmar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Namibia"
  }, "Namibia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nauru"
  }, "Nauru"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nepal"
  }, "Nepal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Netherlands"
  }, "Netherlands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Netherlands Antilles"
  }, "Netherlands Antilles"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "New Caledonia"
  }, "New Caledonia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "New Zealand"
  }, "New Zealand"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nicaragua"
  }, "Nicaragua"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Niger"
  }, "Niger"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nigeria"
  }, "Nigeria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Niue"
  }, "Niue"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Norfolk Island"
  }, "Norfolk Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Northern Mariana Islands"
  }, "Northern Mariana Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Norway"
  }, "Norway"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Oman"
  }, "Oman"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Pakistan"
  }, "Pakistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Palau"
  }, "Palau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Palestinian Territory, Occupied"
  }, "Palestinian Territory, Occupied"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Panama"
  }, "Panama"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Papua New Guinea"
  }, "Papua New Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Paraguay"
  }, "Paraguay"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Peru"
  }, "Peru"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Philippines"
  }, "Philippines"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Pitcairn"
  }, "Pitcairn"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Poland"
  }, "Poland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Portugal"
  }, "Portugal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Puerto Rico"
  }, "Puerto Rico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Qatar"
  }, "Qatar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Reunion"
  }, "Reunion"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Romania"
  }, "Romania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Russian Federation"
  }, "Russian Federation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Rwanda"
  }, "Rwanda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Helena"
  }, "Saint Helena"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Kitts and Nevis"
  }, "Saint Kitts and Nevis"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Lucia"
  }, "Saint Lucia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Pierre and Miquelon"
  }, "Saint Pierre and Miquelon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Vincent and The Grenadines"
  }, "Saint Vincent and The Grenadines"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Samoa"
  }, "Samoa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "San Marino"
  }, "San Marino"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sao Tome and Principe"
  }, "Sao Tome and Principe"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saudi Arabia"
  }, "Saudi Arabia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Senegal"
  }, "Senegal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Serbia"
  }, "Serbia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Seychelles"
  }, "Seychelles"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sierra Leone"
  }, "Sierra Leone"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Singapore"
  }, "Singapore"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Slovakia"
  }, "Slovakia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Slovenia"
  }, "Slovenia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Solomon Islands"
  }, "Solomon Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Somalia"
  }, "Somalia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "South Africa"
  }, "South Africa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "South Georgia and The South Sandwich Islands"
  }, "South Georgia and The South Sandwich Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Spain"
  }, "Spain"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sri Lanka"
  }, "Sri Lanka"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sudan"
  }, "Sudan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Suriname"
  }, "Suriname"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Svalbard and Jan Mayen"
  }, "Svalbard and Jan Mayen"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Swaziland"
  }, "Swaziland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sweden"
  }, "Sweden"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Switzerland"
  }, "Switzerland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Syrian Arab Republic"
  }, "Syrian Arab Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Taiwan"
  }, "Taiwan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tajikistan"
  }, "Tajikistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tanzania, United Republic of"
  }, "Tanzania, United Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Thailand"
  }, "Thailand"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Timor-leste"
  }, "Timor-leste"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Togo"
  }, "Togo"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tokelau"
  }, "Tokelau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tonga"
  }, "Tonga"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Trinidad and Tobago"
  }, "Trinidad and Tobago"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tunisia"
  }, "Tunisia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turkey"
  }, "Turkey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turkmenistan"
  }, "Turkmenistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turks and Caicos Islands"
  }, "Turks and Caicos Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tuvalu"
  }, "Tuvalu"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uganda"
  }, "Uganda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ukraine"
  }, "Ukraine"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United Arab Emirates"
  }, "United Arab Emirates"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United Kingdom"
  }, "United Kingdom"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United States"
  }, "United States"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United States Minor Outlying Islands"
  }, "United States Minor Outlying Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uruguay"
  }, "Uruguay"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uzbekistan"
  }, "Uzbekistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Vanuatu"
  }, "Vanuatu"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Venezuela"
  }, "Venezuela"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Viet Nam"
  }, "Viet Nam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Virgin Islands, British"
  }, "Virgin Islands, British"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Virgin Islands, U.S."
  }, "Virgin Islands, U.S."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Wallis and Futuna"
  }, "Wallis and Futuna"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Western Sahara"
  }, "Western Sahara"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Yemen"
  }, "Yemen"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Zambia"
  }, "Zambia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Zimbabwe"
  }, "Zimbabwe"))));
}

/***/ }),

/***/ "./src/pzcountryselect/index.js":
/*!**************************************!*\
  !*** ./src/pzcountryselect/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/pzcountryselect/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/pzcountryselect/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/pzcountryselect/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/pzcountryselect/block.json");

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
      viewBox: "0 -8 72 72",
      id: "Layer_1",
      "data-name": "Layer 1",
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
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "world"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z"
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

/***/ "./src/pzcountryselect/save.js":
/*!*************************************!*\
  !*** ./src/pzcountryselect/save.js ***!
  \*************************************/
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


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const thisURL = window.location.href;
  const url = new URL(thisURL);
  const marginString = attributes.marginValues ? `${attributes.marginValues.top || 0} ${attributes.marginValues.right || 0} ${attributes.marginValues.bottom || 0} ${attributes.marginValues.left || 0}` : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    className: "form-style-1",
    style: {
      ...(marginString && {
        margin: marginString
      })
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "country-select",
    id: "country-select-label"
  }, attributes.prompt), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "country-select",
    name: "country"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Afghanistan"
  }, "Afghanistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "\xC5land Islands"
  }, "\xC5land Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Albania"
  }, "Albania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Algeria"
  }, "Algeria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "American Samoa"
  }, "American Samoa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Andorra"
  }, "Andorra"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Angola"
  }, "Angola"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Anguilla"
  }, "Anguilla"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Antarctica"
  }, "Antarctica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Antigua and Barbuda"
  }, "Antigua and Barbuda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Argentina"
  }, "Argentina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Armenia"
  }, "Armenia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Aruba"
  }, "Aruba"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Australia"
  }, "Australia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Austria"
  }, "Austria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Azerbaijan"
  }, "Azerbaijan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bahamas"
  }, "Bahamas"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bahrain"
  }, "Bahrain"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bangladesh"
  }, "Bangladesh"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Barbados"
  }, "Barbados"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belarus"
  }, "Belarus"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belgium"
  }, "Belgium"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Belize"
  }, "Belize"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Benin"
  }, "Benin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bermuda"
  }, "Bermuda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bhutan"
  }, "Bhutan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bolivia"
  }, "Bolivia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bosnia and Herzegovina"
  }, "Bosnia and Herzegovina"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Botswana"
  }, "Botswana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bouvet Island"
  }, "Bouvet Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Brazil"
  }, "Brazil"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "British Indian Ocean Territory"
  }, "British Indian Ocean Territory"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Brunei Darussalam"
  }, "Brunei Darussalam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Bulgaria"
  }, "Bulgaria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Burkina Faso"
  }, "Burkina Faso"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Burundi"
  }, "Burundi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cambodia"
  }, "Cambodia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cameroon"
  }, "Cameroon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Canada"
  }, "Canada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cape Verde"
  }, "Cape Verde"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cayman Islands"
  }, "Cayman Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Central African Republic"
  }, "Central African Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Chad"
  }, "Chad"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Chile"
  }, "Chile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "China"
  }, "China"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Christmas Island"
  }, "Christmas Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cocos (Keeling) Islands"
  }, "Cocos (Keeling) Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Colombia"
  }, "Colombia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Comoros"
  }, "Comoros"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Congo"
  }, "Congo"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Congo, The Democratic Republic of The"
  }, "Congo, The Democratic Republic of The"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cook Islands"
  }, "Cook Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Costa Rica"
  }, "Costa Rica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cote D'ivoire"
  }, "Cote D'ivoire"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Croatia"
  }, "Croatia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cuba"
  }, "Cuba"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Cyprus"
  }, "Cyprus"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Czech Republic"
  }, "Czech Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Denmark"
  }, "Denmark"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Djibouti"
  }, "Djibouti"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Dominica"
  }, "Dominica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Dominican Republic"
  }, "Dominican Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ecuador"
  }, "Ecuador"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Egypt"
  }, "Egypt"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "El Salvador"
  }, "El Salvador"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Equatorial Guinea"
  }, "Equatorial Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Eritrea"
  }, "Eritrea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Estonia"
  }, "Estonia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ethiopia"
  }, "Ethiopia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Falkland Islands (Malvinas)"
  }, "Falkland Islands (Malvinas)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Faroe Islands"
  }, "Faroe Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Fiji"
  }, "Fiji"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Finland"
  }, "Finland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "France"
  }, "France"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Guiana"
  }, "French Guiana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Polynesia"
  }, "French Polynesia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "French Southern Territories"
  }, "French Southern Territories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gabon"
  }, "Gabon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gambia"
  }, "Gambia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Georgia"
  }, "Georgia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Germany"
  }, "Germany"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ghana"
  }, "Ghana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Gibraltar"
  }, "Gibraltar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Greece"
  }, "Greece"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Greenland"
  }, "Greenland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Grenada"
  }, "Grenada"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guadeloupe"
  }, "Guadeloupe"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guam"
  }, "Guam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guatemala"
  }, "Guatemala"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guernsey"
  }, "Guernsey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guinea"
  }, "Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guinea-bissau"
  }, "Guinea-bissau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Guyana"
  }, "Guyana"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Haiti"
  }, "Haiti"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Heard Island and Mcdonald Islands"
  }, "Heard Island and Mcdonald Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Holy See (Vatican City State)"
  }, "Holy See (Vatican City State)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Honduras"
  }, "Honduras"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Hong Kong"
  }, "Hong Kong"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Hungary"
  }, "Hungary"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iceland"
  }, "Iceland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "India"
  }, "India"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Indonesia"
  }, "Indonesia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iran, Islamic Republic of"
  }, "Iran, Islamic Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Iraq"
  }, "Iraq"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ireland"
  }, "Ireland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Isle of Man"
  }, "Isle of Man"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Israel"
  }, "Israel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Italy"
  }, "Italy"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jamaica"
  }, "Jamaica"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Japan"
  }, "Japan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jersey"
  }, "Jersey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Jordan"
  }, "Jordan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kazakhstan"
  }, "Kazakhstan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kenya"
  }, "Kenya"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kiribati"
  }, "Kiribati"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Korea, Democratic People's Republic of"
  }, "Korea, Democratic People's Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Korea, Republic of"
  }, "Korea, Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kuwait"
  }, "Kuwait"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Kyrgyzstan"
  }, "Kyrgyzstan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lao People's Democratic Republic"
  }, "Lao People's Democratic Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Latvia"
  }, "Latvia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lebanon"
  }, "Lebanon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lesotho"
  }, "Lesotho"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Liberia"
  }, "Liberia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Libyan Arab Jamahiriya"
  }, "Libyan Arab Jamahiriya"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Liechtenstein"
  }, "Liechtenstein"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Lithuania"
  }, "Lithuania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Luxembourg"
  }, "Luxembourg"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Macao"
  }, "Macao"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Macedonia, The Former Yugoslav Republic of"
  }, "Macedonia, The Former Yugoslav Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Madagascar"
  }, "Madagascar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malawi"
  }, "Malawi"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malaysia"
  }, "Malaysia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Maldives"
  }, "Maldives"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mali"
  }, "Mali"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Malta"
  }, "Malta"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Marshall Islands"
  }, "Marshall Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Martinique"
  }, "Martinique"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mauritania"
  }, "Mauritania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mauritius"
  }, "Mauritius"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mayotte"
  }, "Mayotte"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mexico"
  }, "Mexico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Micronesia, Federated States of"
  }, "Micronesia, Federated States of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Moldova, Republic of"
  }, "Moldova, Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Monaco"
  }, "Monaco"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mongolia"
  }, "Mongolia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Montenegro"
  }, "Montenegro"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Montserrat"
  }, "Montserrat"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Morocco"
  }, "Morocco"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Mozambique"
  }, "Mozambique"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Myanmar"
  }, "Myanmar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Namibia"
  }, "Namibia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nauru"
  }, "Nauru"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nepal"
  }, "Nepal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Netherlands"
  }, "Netherlands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Netherlands Antilles"
  }, "Netherlands Antilles"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "New Caledonia"
  }, "New Caledonia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "New Zealand"
  }, "New Zealand"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nicaragua"
  }, "Nicaragua"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Niger"
  }, "Niger"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Nigeria"
  }, "Nigeria"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Niue"
  }, "Niue"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Norfolk Island"
  }, "Norfolk Island"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Northern Mariana Islands"
  }, "Northern Mariana Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Norway"
  }, "Norway"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Oman"
  }, "Oman"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Pakistan"
  }, "Pakistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Palau"
  }, "Palau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Palestinian Territory, Occupied"
  }, "Palestinian Territory, Occupied"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Panama"
  }, "Panama"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Papua New Guinea"
  }, "Papua New Guinea"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Paraguay"
  }, "Paraguay"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Peru"
  }, "Peru"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Philippines"
  }, "Philippines"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Pitcairn"
  }, "Pitcairn"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Poland"
  }, "Poland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Portugal"
  }, "Portugal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Puerto Rico"
  }, "Puerto Rico"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Qatar"
  }, "Qatar"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Reunion"
  }, "Reunion"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Romania"
  }, "Romania"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Russian Federation"
  }, "Russian Federation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Rwanda"
  }, "Rwanda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Helena"
  }, "Saint Helena"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Kitts and Nevis"
  }, "Saint Kitts and Nevis"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Lucia"
  }, "Saint Lucia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Pierre and Miquelon"
  }, "Saint Pierre and Miquelon"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saint Vincent and The Grenadines"
  }, "Saint Vincent and The Grenadines"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Samoa"
  }, "Samoa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "San Marino"
  }, "San Marino"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sao Tome and Principe"
  }, "Sao Tome and Principe"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Saudi Arabia"
  }, "Saudi Arabia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Senegal"
  }, "Senegal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Serbia"
  }, "Serbia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Seychelles"
  }, "Seychelles"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sierra Leone"
  }, "Sierra Leone"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Singapore"
  }, "Singapore"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Slovakia"
  }, "Slovakia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Slovenia"
  }, "Slovenia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Solomon Islands"
  }, "Solomon Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Somalia"
  }, "Somalia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "South Africa"
  }, "South Africa"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "South Georgia and The South Sandwich Islands"
  }, "South Georgia and The South Sandwich Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Spain"
  }, "Spain"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sri Lanka"
  }, "Sri Lanka"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sudan"
  }, "Sudan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Suriname"
  }, "Suriname"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Svalbard and Jan Mayen"
  }, "Svalbard and Jan Mayen"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Swaziland"
  }, "Swaziland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Sweden"
  }, "Sweden"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Switzerland"
  }, "Switzerland"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Syrian Arab Republic"
  }, "Syrian Arab Republic"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Taiwan"
  }, "Taiwan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tajikistan"
  }, "Tajikistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tanzania, United Republic of"
  }, "Tanzania, United Republic of"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Thailand"
  }, "Thailand"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Timor-leste"
  }, "Timor-leste"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Togo"
  }, "Togo"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tokelau"
  }, "Tokelau"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tonga"
  }, "Tonga"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Trinidad and Tobago"
  }, "Trinidad and Tobago"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tunisia"
  }, "Tunisia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turkey"
  }, "Turkey"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turkmenistan"
  }, "Turkmenistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Turks and Caicos Islands"
  }, "Turks and Caicos Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Tuvalu"
  }, "Tuvalu"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uganda"
  }, "Uganda"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Ukraine"
  }, "Ukraine"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United Arab Emirates"
  }, "United Arab Emirates"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United Kingdom"
  }, "United Kingdom"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United States"
  }, "United States"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "United States Minor Outlying Islands"
  }, "United States Minor Outlying Islands"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uruguay"
  }, "Uruguay"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Uzbekistan"
  }, "Uzbekistan"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Vanuatu"
  }, "Vanuatu"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Venezuela"
  }, "Venezuela"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Viet Nam"
  }, "Viet Nam"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Virgin Islands, British"
  }, "Virgin Islands, British"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Virgin Islands, U.S."
  }, "Virgin Islands, U.S."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Wallis and Futuna"
  }, "Wallis and Futuna"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Western Sahara"
  }, "Western Sahara"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Yemen"
  }, "Yemen"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Zambia"
  }, "Zambia"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Zimbabwe"
  }, "Zimbabwe")));
}

/***/ }),

/***/ "./src/pzcountryselect/style.scss":
/*!****************************************!*\
  !*** ./src/pzcountryselect/style.scss ***!
  \****************************************/
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

/***/ "./src/pzcountryselect/block.json":
/*!****************************************!*\
  !*** ./src/pzcountryselect/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"peakforms/pzcountryselect","version":"0.1.0","title":"Peakforms Country Select","category":"peakzebra","icon":"smiley","description":"Peakforms Country Select","example":{},"supports":{"html":false},"textdomain":"peakforms","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"prompt":{"type":"string","default":"Value"},"id":{"type":"string"},"name":{"type":"string"},"siteURL":{"type":"string"},"marginValues":{"type":"object","default":{"top":"20px","left":"0px","right":"0px","bottom":"20px"}},"backgroundColor":{"type":"string"}}}');

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
/******/ 			"pzcountryselect/index": 0,
/******/ 			"pzcountryselect/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["pzcountryselect/style-index"], () => (__webpack_require__("./src/pzcountryselect/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map