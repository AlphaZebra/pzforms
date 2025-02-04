import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, CheckboxControl } from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { marginValues, paddingValues } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Config">
					<TextControl
						label="Prompt displayed with field"
						value={attributes.prompt}
						onChange={(value) => setAttributes({ prompt: value })}
					/>
					<TextControl
						label="Field variable name"
						help="Unique to this page. No spaces."
						value={attributes.name ? attributes.name : attributes.id}
						onChange={(value) => setAttributes({ name: value, id: value })}
					/>
					<TextControl
						label="Width"
						help="May be a percentage or a number of pixels."
						value={attributes.width}
						onChange={(value) => setAttributes({ width: value })}
					/>
					<CheckboxControl
						label="Required"
						checked={attributes.required}
						onChange={(value) => setAttributes({ required: value })}
					/>
					<CheckboxControl
						label="Show Asterisk"
						checked={attributes.showAsterisk}
						onChange={(value) => setAttributes({ showAsterisk: value })}
					/>
				</PanelBody>
				<PanelBody title="Spacing" initialOpen={false}>
					<BoxControl
						label="Margin"
						values={marginValues}
						onChange={(nextValues) =>
							setAttributes({ marginValues: nextValues })
						}
					/>
					<BoxControl
						label="Padding"
						values={paddingValues}
						onChange={(nextValues) =>
							setAttributes({ paddingValues: nextValues })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				style={{
					margin: marginValues
						? `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}`
						: undefined,
					padding: paddingValues
						? `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}`
						: undefined,
				}}
			>
				<label htmlFor={attributes.id}>
					{attributes.prompt}
					{attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
				</label>
				<TextControl
					type="email"
					id={attributes.id}
					name={attributes.name}
					label={attributes.prompt}
					style={{
						width: attributes.width,
					}}
				/>
			</div>
		</div>
	);
}
