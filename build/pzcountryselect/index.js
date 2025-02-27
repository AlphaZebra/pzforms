(()=>{"use strict";const a=window.wp.blocks,e=window.wp.i18n,n=window.wp.element,i=window.wp.blockEditor,o=window.wp.components,l=window.wp.data,r=window.ReactJSXRuntime,s=JSON.parse('{"UU":"peakforms/pzcountryselect"}');(0,a.registerBlockType)(s.UU,{icon:{src:(0,r.jsxs)("svg",{fill:"#0693e3",width:"800px",height:"800px",viewBox:"0 -8 72 72",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",stroke:"#0693e3",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[(0,r.jsx)("title",{children:"world"}),(0,r.jsx)("path",{d:"M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z"}),(0,r.jsx)("path",{d:"M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z"}),(0,r.jsx)("path",{d:"M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z"})]})]}),foreground:"#0693e3"},edit:function(a){const{attributes:s,setAttributes:t}=a,[u,d]=(0,n.useState)("IL");let c=0;(0,n.useEffect)((()=>{const a=(0,l.subscribe)((()=>{const a=(0,l.select)("core/editor").isSavingPost(),e=(0,l.select)("core/editor").isAutosavingPost();a&&!e&&"Value"===s.prompt&&(0===c&&alert("Please change the country select prompt to a unique value."),c++)}));return()=>a()}),[]);const h=s.marginValues?`${s.marginValues.top||0} ${s.marginValues.right||0} ${s.marginValues.bottom||0} ${s.marginValues.left||0}`:"";return(0,r.jsxs)("div",{...(0,i.useBlockProps)(),children:[(0,r.jsxs)(i.InspectorControls,{children:[(0,r.jsx)(o.PanelBody,{children:(0,r.jsx)(o.SelectControl,{label:(0,e.__)("Select field:"),value:s.field,onChange:a=>{t({field:a})}})}),(0,r.jsxs)(o.PanelBody,{title:"Field prompts",children:[(0,r.jsx)(o.TextControl,{label:"Prompt displayed inside field",value:s.prompt,onChange:a=>t({prompt:a})}),(0,r.jsx)(o.TextControl,{label:"Unique field id",value:s.countryselect_id,onChange:a=>t({countryselect_id:a})}),(0,r.jsx)(o.TextControl,{label:"Unique field name",value:s.countryselect_name,onChange:a=>t({countryselect_name:a}),help:"Unique to this page. No spaces. This is the name of the  field in the form data when email is sent."}),(0,r.jsx)(o.__experimentalBoxControl,{label:"Margin",values:s.marginValues,onChange:a=>{t({marginValues:a})}})]})]}),(0,r.jsxs)("div",{style:{margin:h},children:[(0,r.jsx)("label",{for:"country-select",id:"country-select-label",children:a.prompt}),(0,r.jsxs)("select",{id:"country-select",name:"country",value:"PA",onChange:a=>{d(a.target.value)},children:[(0,r.jsx)("option",{value:"Afghanistan",children:"Afghanistan"}),(0,r.jsx)("option",{value:"Åland Islands",children:"Åland Islands"}),(0,r.jsx)("option",{value:"Albania",children:"Albania"}),(0,r.jsx)("option",{value:"Algeria",children:"Algeria"}),(0,r.jsx)("option",{value:"American Samoa",children:"American Samoa"}),(0,r.jsx)("option",{value:"Andorra",children:"Andorra"}),(0,r.jsx)("option",{value:"Angola",children:"Angola"}),(0,r.jsx)("option",{value:"Anguilla",children:"Anguilla"}),(0,r.jsx)("option",{value:"Antarctica",children:"Antarctica"}),(0,r.jsx)("option",{value:"Antigua and Barbuda",children:"Antigua and Barbuda"}),(0,r.jsx)("option",{value:"Argentina",children:"Argentina"}),(0,r.jsx)("option",{value:"Armenia",children:"Armenia"}),(0,r.jsx)("option",{value:"Aruba",children:"Aruba"}),(0,r.jsx)("option",{value:"Australia",children:"Australia"}),(0,r.jsx)("option",{value:"Austria",children:"Austria"}),(0,r.jsx)("option",{value:"Azerbaijan",children:"Azerbaijan"}),(0,r.jsx)("option",{value:"Bahamas",children:"Bahamas"}),(0,r.jsx)("option",{value:"Bahrain",children:"Bahrain"}),(0,r.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),(0,r.jsx)("option",{value:"Barbados",children:"Barbados"}),(0,r.jsx)("option",{value:"Belarus",children:"Belarus"}),(0,r.jsx)("option",{value:"Belgium",children:"Belgium"}),(0,r.jsx)("option",{value:"Belize",children:"Belize"}),(0,r.jsx)("option",{value:"Benin",children:"Benin"}),(0,r.jsx)("option",{value:"Bermuda",children:"Bermuda"}),(0,r.jsx)("option",{value:"Bhutan",children:"Bhutan"}),(0,r.jsx)("option",{value:"Bolivia",children:"Bolivia"}),(0,r.jsx)("option",{value:"Bosnia and Herzegovina",children:"Bosnia and Herzegovina"}),(0,r.jsx)("option",{value:"Botswana",children:"Botswana"}),(0,r.jsx)("option",{value:"Bouvet Island",children:"Bouvet Island"}),(0,r.jsx)("option",{value:"Brazil",children:"Brazil"}),(0,r.jsx)("option",{value:"British Indian Ocean Territory",children:"British Indian Ocean Territory"}),(0,r.jsx)("option",{value:"Brunei Darussalam",children:"Brunei Darussalam"}),(0,r.jsx)("option",{value:"Bulgaria",children:"Bulgaria"}),(0,r.jsx)("option",{value:"Burkina Faso",children:"Burkina Faso"}),(0,r.jsx)("option",{value:"Burundi",children:"Burundi"}),(0,r.jsx)("option",{value:"Cambodia",children:"Cambodia"}),(0,r.jsx)("option",{value:"Cameroon",children:"Cameroon"}),(0,r.jsx)("option",{value:"Canada",children:"Canada"}),(0,r.jsx)("option",{value:"Cape Verde",children:"Cape Verde"}),(0,r.jsx)("option",{value:"Cayman Islands",children:"Cayman Islands"}),(0,r.jsx)("option",{value:"Central African Republic",children:"Central African Republic"}),(0,r.jsx)("option",{value:"Chad",children:"Chad"}),(0,r.jsx)("option",{value:"Chile",children:"Chile"}),(0,r.jsx)("option",{value:"China",children:"China"}),(0,r.jsx)("option",{value:"Christmas Island",children:"Christmas Island"}),(0,r.jsx)("option",{value:"Cocos (Keeling) Islands",children:"Cocos (Keeling) Islands"}),(0,r.jsx)("option",{value:"Colombia",children:"Colombia"}),(0,r.jsx)("option",{value:"Comoros",children:"Comoros"}),(0,r.jsx)("option",{value:"Congo",children:"Congo"}),(0,r.jsx)("option",{value:"Congo, The Democratic Republic of The",children:"Congo, The Democratic Republic of The"}),(0,r.jsx)("option",{value:"Cook Islands",children:"Cook Islands"}),(0,r.jsx)("option",{value:"Costa Rica",children:"Costa Rica"}),(0,r.jsx)("option",{value:"Cote D'ivoire",children:"Cote D'ivoire"}),(0,r.jsx)("option",{value:"Croatia",children:"Croatia"}),(0,r.jsx)("option",{value:"Cuba",children:"Cuba"}),(0,r.jsx)("option",{value:"Cyprus",children:"Cyprus"}),(0,r.jsx)("option",{value:"Czech Republic",children:"Czech Republic"}),(0,r.jsx)("option",{value:"Denmark",children:"Denmark"}),(0,r.jsx)("option",{value:"Djibouti",children:"Djibouti"}),(0,r.jsx)("option",{value:"Dominica",children:"Dominica"}),(0,r.jsx)("option",{value:"Dominican Republic",children:"Dominican Republic"}),(0,r.jsx)("option",{value:"Ecuador",children:"Ecuador"}),(0,r.jsx)("option",{value:"Egypt",children:"Egypt"}),(0,r.jsx)("option",{value:"El Salvador",children:"El Salvador"}),(0,r.jsx)("option",{value:"Equatorial Guinea",children:"Equatorial Guinea"}),(0,r.jsx)("option",{value:"Eritrea",children:"Eritrea"}),(0,r.jsx)("option",{value:"Estonia",children:"Estonia"}),(0,r.jsx)("option",{value:"Ethiopia",children:"Ethiopia"}),(0,r.jsx)("option",{value:"Falkland Islands (Malvinas)",children:"Falkland Islands (Malvinas)"}),(0,r.jsx)("option",{value:"Faroe Islands",children:"Faroe Islands"}),(0,r.jsx)("option",{value:"Fiji",children:"Fiji"}),(0,r.jsx)("option",{value:"Finland",children:"Finland"}),(0,r.jsx)("option",{value:"France",children:"France"}),(0,r.jsx)("option",{value:"French Guiana",children:"French Guiana"}),(0,r.jsx)("option",{value:"French Polynesia",children:"French Polynesia"}),(0,r.jsx)("option",{value:"French Southern Territories",children:"French Southern Territories"}),(0,r.jsx)("option",{value:"Gabon",children:"Gabon"}),(0,r.jsx)("option",{value:"Gambia",children:"Gambia"}),(0,r.jsx)("option",{value:"Georgia",children:"Georgia"}),(0,r.jsx)("option",{value:"Germany",children:"Germany"}),(0,r.jsx)("option",{value:"Ghana",children:"Ghana"}),(0,r.jsx)("option",{value:"Gibraltar",children:"Gibraltar"}),(0,r.jsx)("option",{value:"Greece",children:"Greece"}),(0,r.jsx)("option",{value:"Greenland",children:"Greenland"}),(0,r.jsx)("option",{value:"Grenada",children:"Grenada"}),(0,r.jsx)("option",{value:"Guadeloupe",children:"Guadeloupe"}),(0,r.jsx)("option",{value:"Guam",children:"Guam"}),(0,r.jsx)("option",{value:"Guatemala",children:"Guatemala"}),(0,r.jsx)("option",{value:"Guernsey",children:"Guernsey"}),(0,r.jsx)("option",{value:"Guinea",children:"Guinea"}),(0,r.jsx)("option",{value:"Guinea-bissau",children:"Guinea-bissau"}),(0,r.jsx)("option",{value:"Guyana",children:"Guyana"}),(0,r.jsx)("option",{value:"Haiti",children:"Haiti"}),(0,r.jsx)("option",{value:"Heard Island and Mcdonald Islands",children:"Heard Island and Mcdonald Islands"}),(0,r.jsx)("option",{value:"Holy See (Vatican City State)",children:"Holy See (Vatican City State)"}),(0,r.jsx)("option",{value:"Honduras",children:"Honduras"}),(0,r.jsx)("option",{value:"Hong Kong",children:"Hong Kong"}),(0,r.jsx)("option",{value:"Hungary",children:"Hungary"}),(0,r.jsx)("option",{value:"Iceland",children:"Iceland"}),(0,r.jsx)("option",{value:"India",children:"India"}),(0,r.jsx)("option",{value:"Indonesia",children:"Indonesia"}),(0,r.jsx)("option",{value:"Iran, Islamic Republic of",children:"Iran, Islamic Republic of"}),(0,r.jsx)("option",{value:"Iraq",children:"Iraq"}),(0,r.jsx)("option",{value:"Ireland",children:"Ireland"}),(0,r.jsx)("option",{value:"Isle of Man",children:"Isle of Man"}),(0,r.jsx)("option",{value:"Israel",children:"Israel"}),(0,r.jsx)("option",{value:"Italy",children:"Italy"}),(0,r.jsx)("option",{value:"Jamaica",children:"Jamaica"}),(0,r.jsx)("option",{value:"Japan",children:"Japan"}),(0,r.jsx)("option",{value:"Jersey",children:"Jersey"}),(0,r.jsx)("option",{value:"Jordan",children:"Jordan"}),(0,r.jsx)("option",{value:"Kazakhstan",children:"Kazakhstan"}),(0,r.jsx)("option",{value:"Kenya",children:"Kenya"}),(0,r.jsx)("option",{value:"Kiribati",children:"Kiribati"}),(0,r.jsx)("option",{value:"Korea, Democratic People's Republic of",children:"Korea, Democratic People's Republic of"}),(0,r.jsx)("option",{value:"Korea, Republic of",children:"Korea, Republic of"}),(0,r.jsx)("option",{value:"Kuwait",children:"Kuwait"}),(0,r.jsx)("option",{value:"Kyrgyzstan",children:"Kyrgyzstan"}),(0,r.jsx)("option",{value:"Lao People's Democratic Republic",children:"Lao People's Democratic Republic"}),(0,r.jsx)("option",{value:"Latvia",children:"Latvia"}),(0,r.jsx)("option",{value:"Lebanon",children:"Lebanon"}),(0,r.jsx)("option",{value:"Lesotho",children:"Lesotho"}),(0,r.jsx)("option",{value:"Liberia",children:"Liberia"}),(0,r.jsx)("option",{value:"Libyan Arab Jamahiriya",children:"Libyan Arab Jamahiriya"}),(0,r.jsx)("option",{value:"Liechtenstein",children:"Liechtenstein"}),(0,r.jsx)("option",{value:"Lithuania",children:"Lithuania"}),(0,r.jsx)("option",{value:"Luxembourg",children:"Luxembourg"}),(0,r.jsx)("option",{value:"Macao",children:"Macao"}),(0,r.jsx)("option",{value:"Macedonia, The Former Yugoslav Republic of",children:"Macedonia, The Former Yugoslav Republic of"}),(0,r.jsx)("option",{value:"Madagascar",children:"Madagascar"}),(0,r.jsx)("option",{value:"Malawi",children:"Malawi"}),(0,r.jsx)("option",{value:"Malaysia",children:"Malaysia"}),(0,r.jsx)("option",{value:"Maldives",children:"Maldives"}),(0,r.jsx)("option",{value:"Mali",children:"Mali"}),(0,r.jsx)("option",{value:"Malta",children:"Malta"}),(0,r.jsx)("option",{value:"Marshall Islands",children:"Marshall Islands"}),(0,r.jsx)("option",{value:"Martinique",children:"Martinique"}),(0,r.jsx)("option",{value:"Mauritania",children:"Mauritania"}),(0,r.jsx)("option",{value:"Mauritius",children:"Mauritius"}),(0,r.jsx)("option",{value:"Mayotte",children:"Mayotte"}),(0,r.jsx)("option",{value:"Mexico",children:"Mexico"}),(0,r.jsx)("option",{value:"Micronesia, Federated States of",children:"Micronesia, Federated States of"}),(0,r.jsx)("option",{value:"Moldova, Republic of",children:"Moldova, Republic of"}),(0,r.jsx)("option",{value:"Monaco",children:"Monaco"}),(0,r.jsx)("option",{value:"Mongolia",children:"Mongolia"}),(0,r.jsx)("option",{value:"Montenegro",children:"Montenegro"}),(0,r.jsx)("option",{value:"Montserrat",children:"Montserrat"}),(0,r.jsx)("option",{value:"Morocco",children:"Morocco"}),(0,r.jsx)("option",{value:"Mozambique",children:"Mozambique"}),(0,r.jsx)("option",{value:"Myanmar",children:"Myanmar"}),(0,r.jsx)("option",{value:"Namibia",children:"Namibia"}),(0,r.jsx)("option",{value:"Nauru",children:"Nauru"}),(0,r.jsx)("option",{value:"Nepal",children:"Nepal"}),(0,r.jsx)("option",{value:"Netherlands",children:"Netherlands"}),(0,r.jsx)("option",{value:"Netherlands Antilles",children:"Netherlands Antilles"}),(0,r.jsx)("option",{value:"New Caledonia",children:"New Caledonia"}),(0,r.jsx)("option",{value:"New Zealand",children:"New Zealand"}),(0,r.jsx)("option",{value:"Nicaragua",children:"Nicaragua"}),(0,r.jsx)("option",{value:"Niger",children:"Niger"}),(0,r.jsx)("option",{value:"Nigeria",children:"Nigeria"}),(0,r.jsx)("option",{value:"Niue",children:"Niue"}),(0,r.jsx)("option",{value:"Norfolk Island",children:"Norfolk Island"}),(0,r.jsx)("option",{value:"Northern Mariana Islands",children:"Northern Mariana Islands"}),(0,r.jsx)("option",{value:"Norway",children:"Norway"}),(0,r.jsx)("option",{value:"Oman",children:"Oman"}),(0,r.jsx)("option",{value:"Pakistan",children:"Pakistan"}),(0,r.jsx)("option",{value:"Palau",children:"Palau"}),(0,r.jsx)("option",{value:"Palestinian Territory, Occupied",children:"Palestinian Territory, Occupied"}),(0,r.jsx)("option",{value:"Panama",children:"Panama"}),(0,r.jsx)("option",{value:"Papua New Guinea",children:"Papua New Guinea"}),(0,r.jsx)("option",{value:"Paraguay",children:"Paraguay"}),(0,r.jsx)("option",{value:"Peru",children:"Peru"}),(0,r.jsx)("option",{value:"Philippines",children:"Philippines"}),(0,r.jsx)("option",{value:"Pitcairn",children:"Pitcairn"}),(0,r.jsx)("option",{value:"Poland",children:"Poland"}),(0,r.jsx)("option",{value:"Portugal",children:"Portugal"}),(0,r.jsx)("option",{value:"Puerto Rico",children:"Puerto Rico"}),(0,r.jsx)("option",{value:"Qatar",children:"Qatar"}),(0,r.jsx)("option",{value:"Reunion",children:"Reunion"}),(0,r.jsx)("option",{value:"Romania",children:"Romania"}),(0,r.jsx)("option",{value:"Russian Federation",children:"Russian Federation"}),(0,r.jsx)("option",{value:"Rwanda",children:"Rwanda"}),(0,r.jsx)("option",{value:"Saint Helena",children:"Saint Helena"}),(0,r.jsx)("option",{value:"Saint Kitts and Nevis",children:"Saint Kitts and Nevis"}),(0,r.jsx)("option",{value:"Saint Lucia",children:"Saint Lucia"}),(0,r.jsx)("option",{value:"Saint Pierre and Miquelon",children:"Saint Pierre and Miquelon"}),(0,r.jsx)("option",{value:"Saint Vincent and The Grenadines",children:"Saint Vincent and The Grenadines"}),(0,r.jsx)("option",{value:"Samoa",children:"Samoa"}),(0,r.jsx)("option",{value:"San Marino",children:"San Marino"}),(0,r.jsx)("option",{value:"Sao Tome and Principe",children:"Sao Tome and Principe"}),(0,r.jsx)("option",{value:"Saudi Arabia",children:"Saudi Arabia"}),(0,r.jsx)("option",{value:"Senegal",children:"Senegal"}),(0,r.jsx)("option",{value:"Serbia",children:"Serbia"}),(0,r.jsx)("option",{value:"Seychelles",children:"Seychelles"}),(0,r.jsx)("option",{value:"Sierra Leone",children:"Sierra Leone"}),(0,r.jsx)("option",{value:"Singapore",children:"Singapore"}),(0,r.jsx)("option",{value:"Slovakia",children:"Slovakia"}),(0,r.jsx)("option",{value:"Slovenia",children:"Slovenia"}),(0,r.jsx)("option",{value:"Solomon Islands",children:"Solomon Islands"}),(0,r.jsx)("option",{value:"Somalia",children:"Somalia"}),(0,r.jsx)("option",{value:"South Africa",children:"South Africa"}),(0,r.jsx)("option",{value:"South Georgia and The South Sandwich Islands",children:"South Georgia and The South Sandwich Islands"}),(0,r.jsx)("option",{value:"Spain",children:"Spain"}),(0,r.jsx)("option",{value:"Sri Lanka",children:"Sri Lanka"}),(0,r.jsx)("option",{value:"Sudan",children:"Sudan"}),(0,r.jsx)("option",{value:"Suriname",children:"Suriname"}),(0,r.jsx)("option",{value:"Svalbard and Jan Mayen",children:"Svalbard and Jan Mayen"}),(0,r.jsx)("option",{value:"Swaziland",children:"Swaziland"}),(0,r.jsx)("option",{value:"Sweden",children:"Sweden"}),(0,r.jsx)("option",{value:"Switzerland",children:"Switzerland"}),(0,r.jsx)("option",{value:"Syrian Arab Republic",children:"Syrian Arab Republic"}),(0,r.jsx)("option",{value:"Taiwan",children:"Taiwan"}),(0,r.jsx)("option",{value:"Tajikistan",children:"Tajikistan"}),(0,r.jsx)("option",{value:"Tanzania, United Republic of",children:"Tanzania, United Republic of"}),(0,r.jsx)("option",{value:"Thailand",children:"Thailand"}),(0,r.jsx)("option",{value:"Timor-leste",children:"Timor-leste"}),(0,r.jsx)("option",{value:"Togo",children:"Togo"}),(0,r.jsx)("option",{value:"Tokelau",children:"Tokelau"}),(0,r.jsx)("option",{value:"Tonga",children:"Tonga"}),(0,r.jsx)("option",{value:"Trinidad and Tobago",children:"Trinidad and Tobago"}),(0,r.jsx)("option",{value:"Tunisia",children:"Tunisia"}),(0,r.jsx)("option",{value:"Turkey",children:"Turkey"}),(0,r.jsx)("option",{value:"Turkmenistan",children:"Turkmenistan"}),(0,r.jsx)("option",{value:"Turks and Caicos Islands",children:"Turks and Caicos Islands"}),(0,r.jsx)("option",{value:"Tuvalu",children:"Tuvalu"}),(0,r.jsx)("option",{value:"Uganda",children:"Uganda"}),(0,r.jsx)("option",{value:"Ukraine",children:"Ukraine"}),(0,r.jsx)("option",{value:"United Arab Emirates",children:"United Arab Emirates"}),(0,r.jsx)("option",{value:"United Kingdom",children:"United Kingdom"}),(0,r.jsx)("option",{value:"United States",children:"United States"}),(0,r.jsx)("option",{value:"United States Minor Outlying Islands",children:"United States Minor Outlying Islands"}),(0,r.jsx)("option",{value:"Uruguay",children:"Uruguay"}),(0,r.jsx)("option",{value:"Uzbekistan",children:"Uzbekistan"}),(0,r.jsx)("option",{value:"Vanuatu",children:"Vanuatu"}),(0,r.jsx)("option",{value:"Venezuela",children:"Venezuela"}),(0,r.jsx)("option",{value:"Viet Nam",children:"Viet Nam"}),(0,r.jsx)("option",{value:"Virgin Islands, British",children:"Virgin Islands, British"}),(0,r.jsx)("option",{value:"Virgin Islands, U.S.",children:"Virgin Islands, U.S."}),(0,r.jsx)("option",{value:"Wallis and Futuna",children:"Wallis and Futuna"}),(0,r.jsx)("option",{value:"Western Sahara",children:"Western Sahara"}),(0,r.jsx)("option",{value:"Yemen",children:"Yemen"}),(0,r.jsx)("option",{value:"Zambia",children:"Zambia"}),(0,r.jsx)("option",{value:"Zimbabwe",children:"Zimbabwe"})]})]})]})},save:function({attributes:a}){const e=window.location.href,n=(new URL(e),a.marginValues?`${a.marginValues.top||0} ${a.marginValues.right||0} ${a.marginValues.bottom||0} ${a.marginValues.left||0}`:"");return(0,r.jsxs)("div",{...i.useBlockProps.save(),className:"form-style-1",style:{...n&&{margin:n}},children:[(0,r.jsx)("label",{for:"country-select",id:"country-select-label",children:a.prompt}),(0,r.jsxs)("select",{id:a.countryselect_id,name:a.countryselect_name,children:[(0,r.jsx)("option",{value:"Afghanistan",children:"Afghanistan"}),(0,r.jsx)("option",{value:"Åland Islands",children:"Åland Islands"}),(0,r.jsx)("option",{value:"Albania",children:"Albania"}),(0,r.jsx)("option",{value:"Algeria",children:"Algeria"}),(0,r.jsx)("option",{value:"American Samoa",children:"American Samoa"}),(0,r.jsx)("option",{value:"Andorra",children:"Andorra"}),(0,r.jsx)("option",{value:"Angola",children:"Angola"}),(0,r.jsx)("option",{value:"Anguilla",children:"Anguilla"}),(0,r.jsx)("option",{value:"Antarctica",children:"Antarctica"}),(0,r.jsx)("option",{value:"Antigua and Barbuda",children:"Antigua and Barbuda"}),(0,r.jsx)("option",{value:"Argentina",children:"Argentina"}),(0,r.jsx)("option",{value:"Armenia",children:"Armenia"}),(0,r.jsx)("option",{value:"Aruba",children:"Aruba"}),(0,r.jsx)("option",{value:"Australia",children:"Australia"}),(0,r.jsx)("option",{value:"Austria",children:"Austria"}),(0,r.jsx)("option",{value:"Azerbaijan",children:"Azerbaijan"}),(0,r.jsx)("option",{value:"Bahamas",children:"Bahamas"}),(0,r.jsx)("option",{value:"Bahrain",children:"Bahrain"}),(0,r.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),(0,r.jsx)("option",{value:"Barbados",children:"Barbados"}),(0,r.jsx)("option",{value:"Belarus",children:"Belarus"}),(0,r.jsx)("option",{value:"Belgium",children:"Belgium"}),(0,r.jsx)("option",{value:"Belize",children:"Belize"}),(0,r.jsx)("option",{value:"Benin",children:"Benin"}),(0,r.jsx)("option",{value:"Bermuda",children:"Bermuda"}),(0,r.jsx)("option",{value:"Bhutan",children:"Bhutan"}),(0,r.jsx)("option",{value:"Bolivia",children:"Bolivia"}),(0,r.jsx)("option",{value:"Bosnia and Herzegovina",children:"Bosnia and Herzegovina"}),(0,r.jsx)("option",{value:"Botswana",children:"Botswana"}),(0,r.jsx)("option",{value:"Bouvet Island",children:"Bouvet Island"}),(0,r.jsx)("option",{value:"Brazil",children:"Brazil"}),(0,r.jsx)("option",{value:"British Indian Ocean Territory",children:"British Indian Ocean Territory"}),(0,r.jsx)("option",{value:"Brunei Darussalam",children:"Brunei Darussalam"}),(0,r.jsx)("option",{value:"Bulgaria",children:"Bulgaria"}),(0,r.jsx)("option",{value:"Burkina Faso",children:"Burkina Faso"}),(0,r.jsx)("option",{value:"Burundi",children:"Burundi"}),(0,r.jsx)("option",{value:"Cambodia",children:"Cambodia"}),(0,r.jsx)("option",{value:"Cameroon",children:"Cameroon"}),(0,r.jsx)("option",{value:"Canada",children:"Canada"}),(0,r.jsx)("option",{value:"Cape Verde",children:"Cape Verde"}),(0,r.jsx)("option",{value:"Cayman Islands",children:"Cayman Islands"}),(0,r.jsx)("option",{value:"Central African Republic",children:"Central African Republic"}),(0,r.jsx)("option",{value:"Chad",children:"Chad"}),(0,r.jsx)("option",{value:"Chile",children:"Chile"}),(0,r.jsx)("option",{value:"China",children:"China"}),(0,r.jsx)("option",{value:"Christmas Island",children:"Christmas Island"}),(0,r.jsx)("option",{value:"Cocos (Keeling) Islands",children:"Cocos (Keeling) Islands"}),(0,r.jsx)("option",{value:"Colombia",children:"Colombia"}),(0,r.jsx)("option",{value:"Comoros",children:"Comoros"}),(0,r.jsx)("option",{value:"Congo",children:"Congo"}),(0,r.jsx)("option",{value:"Congo, The Democratic Republic of The",children:"Congo, The Democratic Republic of The"}),(0,r.jsx)("option",{value:"Cook Islands",children:"Cook Islands"}),(0,r.jsx)("option",{value:"Costa Rica",children:"Costa Rica"}),(0,r.jsx)("option",{value:"Cote D'ivoire",children:"Cote D'ivoire"}),(0,r.jsx)("option",{value:"Croatia",children:"Croatia"}),(0,r.jsx)("option",{value:"Cuba",children:"Cuba"}),(0,r.jsx)("option",{value:"Cyprus",children:"Cyprus"}),(0,r.jsx)("option",{value:"Czech Republic",children:"Czech Republic"}),(0,r.jsx)("option",{value:"Denmark",children:"Denmark"}),(0,r.jsx)("option",{value:"Djibouti",children:"Djibouti"}),(0,r.jsx)("option",{value:"Dominica",children:"Dominica"}),(0,r.jsx)("option",{value:"Dominican Republic",children:"Dominican Republic"}),(0,r.jsx)("option",{value:"Ecuador",children:"Ecuador"}),(0,r.jsx)("option",{value:"Egypt",children:"Egypt"}),(0,r.jsx)("option",{value:"El Salvador",children:"El Salvador"}),(0,r.jsx)("option",{value:"Equatorial Guinea",children:"Equatorial Guinea"}),(0,r.jsx)("option",{value:"Eritrea",children:"Eritrea"}),(0,r.jsx)("option",{value:"Estonia",children:"Estonia"}),(0,r.jsx)("option",{value:"Ethiopia",children:"Ethiopia"}),(0,r.jsx)("option",{value:"Falkland Islands (Malvinas)",children:"Falkland Islands (Malvinas)"}),(0,r.jsx)("option",{value:"Faroe Islands",children:"Faroe Islands"}),(0,r.jsx)("option",{value:"Fiji",children:"Fiji"}),(0,r.jsx)("option",{value:"Finland",children:"Finland"}),(0,r.jsx)("option",{value:"France",children:"France"}),(0,r.jsx)("option",{value:"French Guiana",children:"French Guiana"}),(0,r.jsx)("option",{value:"French Polynesia",children:"French Polynesia"}),(0,r.jsx)("option",{value:"French Southern Territories",children:"French Southern Territories"}),(0,r.jsx)("option",{value:"Gabon",children:"Gabon"}),(0,r.jsx)("option",{value:"Gambia",children:"Gambia"}),(0,r.jsx)("option",{value:"Georgia",children:"Georgia"}),(0,r.jsx)("option",{value:"Germany",children:"Germany"}),(0,r.jsx)("option",{value:"Ghana",children:"Ghana"}),(0,r.jsx)("option",{value:"Gibraltar",children:"Gibraltar"}),(0,r.jsx)("option",{value:"Greece",children:"Greece"}),(0,r.jsx)("option",{value:"Greenland",children:"Greenland"}),(0,r.jsx)("option",{value:"Grenada",children:"Grenada"}),(0,r.jsx)("option",{value:"Guadeloupe",children:"Guadeloupe"}),(0,r.jsx)("option",{value:"Guam",children:"Guam"}),(0,r.jsx)("option",{value:"Guatemala",children:"Guatemala"}),(0,r.jsx)("option",{value:"Guernsey",children:"Guernsey"}),(0,r.jsx)("option",{value:"Guinea",children:"Guinea"}),(0,r.jsx)("option",{value:"Guinea-bissau",children:"Guinea-bissau"}),(0,r.jsx)("option",{value:"Guyana",children:"Guyana"}),(0,r.jsx)("option",{value:"Haiti",children:"Haiti"}),(0,r.jsx)("option",{value:"Heard Island and Mcdonald Islands",children:"Heard Island and Mcdonald Islands"}),(0,r.jsx)("option",{value:"Holy See (Vatican City State)",children:"Holy See (Vatican City State)"}),(0,r.jsx)("option",{value:"Honduras",children:"Honduras"}),(0,r.jsx)("option",{value:"Hong Kong",children:"Hong Kong"}),(0,r.jsx)("option",{value:"Hungary",children:"Hungary"}),(0,r.jsx)("option",{value:"Iceland",children:"Iceland"}),(0,r.jsx)("option",{value:"India",children:"India"}),(0,r.jsx)("option",{value:"Indonesia",children:"Indonesia"}),(0,r.jsx)("option",{value:"Iran, Islamic Republic of",children:"Iran, Islamic Republic of"}),(0,r.jsx)("option",{value:"Iraq",children:"Iraq"}),(0,r.jsx)("option",{value:"Ireland",children:"Ireland"}),(0,r.jsx)("option",{value:"Isle of Man",children:"Isle of Man"}),(0,r.jsx)("option",{value:"Israel",children:"Israel"}),(0,r.jsx)("option",{value:"Italy",children:"Italy"}),(0,r.jsx)("option",{value:"Jamaica",children:"Jamaica"}),(0,r.jsx)("option",{value:"Japan",children:"Japan"}),(0,r.jsx)("option",{value:"Jersey",children:"Jersey"}),(0,r.jsx)("option",{value:"Jordan",children:"Jordan"}),(0,r.jsx)("option",{value:"Kazakhstan",children:"Kazakhstan"}),(0,r.jsx)("option",{value:"Kenya",children:"Kenya"}),(0,r.jsx)("option",{value:"Kiribati",children:"Kiribati"}),(0,r.jsx)("option",{value:"Korea, Democratic People's Republic of",children:"Korea, Democratic People's Republic of"}),(0,r.jsx)("option",{value:"Korea, Republic of",children:"Korea, Republic of"}),(0,r.jsx)("option",{value:"Kuwait",children:"Kuwait"}),(0,r.jsx)("option",{value:"Kyrgyzstan",children:"Kyrgyzstan"}),(0,r.jsx)("option",{value:"Lao People's Democratic Republic",children:"Lao People's Democratic Republic"}),(0,r.jsx)("option",{value:"Latvia",children:"Latvia"}),(0,r.jsx)("option",{value:"Lebanon",children:"Lebanon"}),(0,r.jsx)("option",{value:"Lesotho",children:"Lesotho"}),(0,r.jsx)("option",{value:"Liberia",children:"Liberia"}),(0,r.jsx)("option",{value:"Libyan Arab Jamahiriya",children:"Libyan Arab Jamahiriya"}),(0,r.jsx)("option",{value:"Liechtenstein",children:"Liechtenstein"}),(0,r.jsx)("option",{value:"Lithuania",children:"Lithuania"}),(0,r.jsx)("option",{value:"Luxembourg",children:"Luxembourg"}),(0,r.jsx)("option",{value:"Macao",children:"Macao"}),(0,r.jsx)("option",{value:"Macedonia, The Former Yugoslav Republic of",children:"Macedonia, The Former Yugoslav Republic of"}),(0,r.jsx)("option",{value:"Madagascar",children:"Madagascar"}),(0,r.jsx)("option",{value:"Malawi",children:"Malawi"}),(0,r.jsx)("option",{value:"Malaysia",children:"Malaysia"}),(0,r.jsx)("option",{value:"Maldives",children:"Maldives"}),(0,r.jsx)("option",{value:"Mali",children:"Mali"}),(0,r.jsx)("option",{value:"Malta",children:"Malta"}),(0,r.jsx)("option",{value:"Marshall Islands",children:"Marshall Islands"}),(0,r.jsx)("option",{value:"Martinique",children:"Martinique"}),(0,r.jsx)("option",{value:"Mauritania",children:"Mauritania"}),(0,r.jsx)("option",{value:"Mauritius",children:"Mauritius"}),(0,r.jsx)("option",{value:"Mayotte",children:"Mayotte"}),(0,r.jsx)("option",{value:"Mexico",children:"Mexico"}),(0,r.jsx)("option",{value:"Micronesia, Federated States of",children:"Micronesia, Federated States of"}),(0,r.jsx)("option",{value:"Moldova, Republic of",children:"Moldova, Republic of"}),(0,r.jsx)("option",{value:"Monaco",children:"Monaco"}),(0,r.jsx)("option",{value:"Mongolia",children:"Mongolia"}),(0,r.jsx)("option",{value:"Montenegro",children:"Montenegro"}),(0,r.jsx)("option",{value:"Montserrat",children:"Montserrat"}),(0,r.jsx)("option",{value:"Morocco",children:"Morocco"}),(0,r.jsx)("option",{value:"Mozambique",children:"Mozambique"}),(0,r.jsx)("option",{value:"Myanmar",children:"Myanmar"}),(0,r.jsx)("option",{value:"Namibia",children:"Namibia"}),(0,r.jsx)("option",{value:"Nauru",children:"Nauru"}),(0,r.jsx)("option",{value:"Nepal",children:"Nepal"}),(0,r.jsx)("option",{value:"Netherlands",children:"Netherlands"}),(0,r.jsx)("option",{value:"Netherlands Antilles",children:"Netherlands Antilles"}),(0,r.jsx)("option",{value:"New Caledonia",children:"New Caledonia"}),(0,r.jsx)("option",{value:"New Zealand",children:"New Zealand"}),(0,r.jsx)("option",{value:"Nicaragua",children:"Nicaragua"}),(0,r.jsx)("option",{value:"Niger",children:"Niger"}),(0,r.jsx)("option",{value:"Nigeria",children:"Nigeria"}),(0,r.jsx)("option",{value:"Niue",children:"Niue"}),(0,r.jsx)("option",{value:"Norfolk Island",children:"Norfolk Island"}),(0,r.jsx)("option",{value:"Northern Mariana Islands",children:"Northern Mariana Islands"}),(0,r.jsx)("option",{value:"Norway",children:"Norway"}),(0,r.jsx)("option",{value:"Oman",children:"Oman"}),(0,r.jsx)("option",{value:"Pakistan",children:"Pakistan"}),(0,r.jsx)("option",{value:"Palau",children:"Palau"}),(0,r.jsx)("option",{value:"Palestinian Territory, Occupied",children:"Palestinian Territory, Occupied"}),(0,r.jsx)("option",{value:"Panama",children:"Panama"}),(0,r.jsx)("option",{value:"Papua New Guinea",children:"Papua New Guinea"}),(0,r.jsx)("option",{value:"Paraguay",children:"Paraguay"}),(0,r.jsx)("option",{value:"Peru",children:"Peru"}),(0,r.jsx)("option",{value:"Philippines",children:"Philippines"}),(0,r.jsx)("option",{value:"Pitcairn",children:"Pitcairn"}),(0,r.jsx)("option",{value:"Poland",children:"Poland"}),(0,r.jsx)("option",{value:"Portugal",children:"Portugal"}),(0,r.jsx)("option",{value:"Puerto Rico",children:"Puerto Rico"}),(0,r.jsx)("option",{value:"Qatar",children:"Qatar"}),(0,r.jsx)("option",{value:"Reunion",children:"Reunion"}),(0,r.jsx)("option",{value:"Romania",children:"Romania"}),(0,r.jsx)("option",{value:"Russian Federation",children:"Russian Federation"}),(0,r.jsx)("option",{value:"Rwanda",children:"Rwanda"}),(0,r.jsx)("option",{value:"Saint Helena",children:"Saint Helena"}),(0,r.jsx)("option",{value:"Saint Kitts and Nevis",children:"Saint Kitts and Nevis"}),(0,r.jsx)("option",{value:"Saint Lucia",children:"Saint Lucia"}),(0,r.jsx)("option",{value:"Saint Pierre and Miquelon",children:"Saint Pierre and Miquelon"}),(0,r.jsx)("option",{value:"Saint Vincent and The Grenadines",children:"Saint Vincent and The Grenadines"}),(0,r.jsx)("option",{value:"Samoa",children:"Samoa"}),(0,r.jsx)("option",{value:"San Marino",children:"San Marino"}),(0,r.jsx)("option",{value:"Sao Tome and Principe",children:"Sao Tome and Principe"}),(0,r.jsx)("option",{value:"Saudi Arabia",children:"Saudi Arabia"}),(0,r.jsx)("option",{value:"Senegal",children:"Senegal"}),(0,r.jsx)("option",{value:"Serbia",children:"Serbia"}),(0,r.jsx)("option",{value:"Seychelles",children:"Seychelles"}),(0,r.jsx)("option",{value:"Sierra Leone",children:"Sierra Leone"}),(0,r.jsx)("option",{value:"Singapore",children:"Singapore"}),(0,r.jsx)("option",{value:"Slovakia",children:"Slovakia"}),(0,r.jsx)("option",{value:"Slovenia",children:"Slovenia"}),(0,r.jsx)("option",{value:"Solomon Islands",children:"Solomon Islands"}),(0,r.jsx)("option",{value:"Somalia",children:"Somalia"}),(0,r.jsx)("option",{value:"South Africa",children:"South Africa"}),(0,r.jsx)("option",{value:"South Georgia and The South Sandwich Islands",children:"South Georgia and The South Sandwich Islands"}),(0,r.jsx)("option",{value:"Spain",children:"Spain"}),(0,r.jsx)("option",{value:"Sri Lanka",children:"Sri Lanka"}),(0,r.jsx)("option",{value:"Sudan",children:"Sudan"}),(0,r.jsx)("option",{value:"Suriname",children:"Suriname"}),(0,r.jsx)("option",{value:"Svalbard and Jan Mayen",children:"Svalbard and Jan Mayen"}),(0,r.jsx)("option",{value:"Swaziland",children:"Swaziland"}),(0,r.jsx)("option",{value:"Sweden",children:"Sweden"}),(0,r.jsx)("option",{value:"Switzerland",children:"Switzerland"}),(0,r.jsx)("option",{value:"Syrian Arab Republic",children:"Syrian Arab Republic"}),(0,r.jsx)("option",{value:"Taiwan",children:"Taiwan"}),(0,r.jsx)("option",{value:"Tajikistan",children:"Tajikistan"}),(0,r.jsx)("option",{value:"Tanzania, United Republic of",children:"Tanzania, United Republic of"}),(0,r.jsx)("option",{value:"Thailand",children:"Thailand"}),(0,r.jsx)("option",{value:"Timor-leste",children:"Timor-leste"}),(0,r.jsx)("option",{value:"Togo",children:"Togo"}),(0,r.jsx)("option",{value:"Tokelau",children:"Tokelau"}),(0,r.jsx)("option",{value:"Tonga",children:"Tonga"}),(0,r.jsx)("option",{value:"Trinidad and Tobago",children:"Trinidad and Tobago"}),(0,r.jsx)("option",{value:"Tunisia",children:"Tunisia"}),(0,r.jsx)("option",{value:"Turkey",children:"Turkey"}),(0,r.jsx)("option",{value:"Turkmenistan",children:"Turkmenistan"}),(0,r.jsx)("option",{value:"Turks and Caicos Islands",children:"Turks and Caicos Islands"}),(0,r.jsx)("option",{value:"Tuvalu",children:"Tuvalu"}),(0,r.jsx)("option",{value:"Uganda",children:"Uganda"}),(0,r.jsx)("option",{value:"Ukraine",children:"Ukraine"}),(0,r.jsx)("option",{value:"United Arab Emirates",children:"United Arab Emirates"}),(0,r.jsx)("option",{value:"United Kingdom",children:"United Kingdom"}),(0,r.jsx)("option",{value:"United States",children:"United States"}),(0,r.jsx)("option",{value:"United States Minor Outlying Islands",children:"United States Minor Outlying Islands"}),(0,r.jsx)("option",{value:"Uruguay",children:"Uruguay"}),(0,r.jsx)("option",{value:"Uzbekistan",children:"Uzbekistan"}),(0,r.jsx)("option",{value:"Vanuatu",children:"Vanuatu"}),(0,r.jsx)("option",{value:"Venezuela",children:"Venezuela"}),(0,r.jsx)("option",{value:"Viet Nam",children:"Viet Nam"}),(0,r.jsx)("option",{value:"Virgin Islands, British",children:"Virgin Islands, British"}),(0,r.jsx)("option",{value:"Virgin Islands, U.S.",children:"Virgin Islands, U.S."}),(0,r.jsx)("option",{value:"Wallis and Futuna",children:"Wallis and Futuna"}),(0,r.jsx)("option",{value:"Western Sahara",children:"Western Sahara"}),(0,r.jsx)("option",{value:"Yemen",children:"Yemen"}),(0,r.jsx)("option",{value:"Zambia",children:"Zambia"}),(0,r.jsx)("option",{value:"Zimbabwe",children:"Zimbabwe"})]})]})}})})();