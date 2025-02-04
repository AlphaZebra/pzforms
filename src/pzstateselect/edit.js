/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { useState } from "@wordpress/element"; // WordPress React wrapper
import {
	useBlockProps,
	InspectorControls,
	useSetting,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	RadioControl,
	SelectControl,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { backgroundColor } = attributes;
	const [values, setValues] = useState({
		top: "50px",
		left: "10%",
		right: "10%",
		bottom: "50px",
	});
	const [myState, setMyState] = useState("IL");
	const handleChange = (event) => {
		setMyState(event.target.value);
	};
	const paddingString = attributes.paddingValues
		? `${attributes.paddingValues.top || 0} ${
				attributes.paddingValues.right || 0
		  } ${attributes.paddingValues.bottom || 0} ${
				attributes.paddingValues.left || 0
		  }`
		: "";
	const marginString = attributes.marginValues
		? `${attributes.marginValues.top || 0} ${
				attributes.marginValues.right || 0
		  } ${attributes.marginValues.bottom || 0} ${
				attributes.marginValues.left || 0
		  }`
		: "";

	return (
		<div
			{...useBlockProps()}
			style={{ padding: paddingString, margin: marginString }}
		>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={__("Select field:")}
						value={attributes.field}
						onChange={(value) => {
							setAttributes({ field: value });
						}}
					></SelectControl>
				</PanelBody>
				<PanelBody title="Field prompts">
					<TextControl
						label="Prompt displayed inside field"
						value={attributes.prompt}
						onChange={(value) => setAttributes({ prompt: value })}
					/>
					<TextControl
						label="Unique field id"
						value={attributes.name}
						onChange={(value) => setAttributes({ name: value })}
					/>
					<BoxControl
						label="Margin"
						values={attributes.marginValues}
						onChange={(value) => {
							setAttributes({ marginValues: value });
						}}
					/>
					<BoxControl
						label="Padding"
						values={attributes.paddingValues}
						onChange={(value) => {
							setAttributes({ paddingValues: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				style={{
					padding: attributes.paddingValues,
					margin: attributes.marginValues,
				}}
			></div>
			<label for="state-select" id="state-select-label">
				{props.prompt}
			</label>
			<select
				id="state-select"
				name="state"
				value={myState}
				onChange={handleChange}
			>
				<option value="AL">Alabama</option>
				<option value="AK">Alaska</option>
				<option value="AZ">Arizona</option>
				<option value="AR">Arkansas</option>
				<option value="CA">California</option>
				<option value="CO">Colorado</option>
				<option value="CT">Connecticut</option>
				<option value="DE">Delaware</option>
				<option value="DC">District Of Columbia</option>
				<option value="FL">Florida</option>
				<option value="GA">Georgia</option>
				<option value="HI">Hawaii</option>
				<option value="ID">Idaho</option>
				<option value="IL">Illinois</option>
				<option value="IN">Indiana</option>
				<option value="IA">Iowa</option>
				<option value="KS">Kansas</option>
				<option value="KY">Kentucky</option>
				<option value="LA">Louisiana</option>
				<option value="ME">Maine</option>
				<option value="MD">Maryland</option>
				<option value="MA">Massachusetts</option>
				<option value="MI">Michigan</option>
				<option value="MN">Minnesota</option>
				<option value="MS">Mississippi</option>
				<option value="MO">Missouri</option>
				<option value="MT">Montana</option>
				<option value="NE">Nebraska</option>
				<option value="NV">Nevada</option>
				<option value="NH">New Hampshire</option>
				<option value="NJ">New Jersey</option>
				<option value="NM">New Mexico</option>
				<option value="NY">New York</option>
				<option value="NC">North Carolina</option>
				<option value="ND">North Dakota</option>
				<option value="OH">Ohio</option>
				<option value="OK">Oklahoma</option>
				<option value="OR">Oregon</option>
				<option value="PA">Pennsylvania</option>
				<option value="RI">Rhode Island</option>
				<option value="SC">South Carolina</option>
				<option value="SD">South Dakota</option>
				<option value="TN">Tennessee</option>
				<option value="TX">Texas</option>
				<option value="UT">Utah</option>
				<option value="VT">Vermont</option>
				<option value="VA">Virginia</option>
				<option value="WA">Washington</option>
				<option value="WV">West Virginia</option>
				<option value="WI">Wisconsin</option>
				<option value="WY">Wyoming</option>
			</select>
		</div>
	);
}
