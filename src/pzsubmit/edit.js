/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	Button,
	ColorPicker,
} from "@wordpress/components";
// import Button from "@mui/material/Button";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const handleMarginChange = (value) => {
		setAttributes({ marginValues: value });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Button Text">
					<TextControl
						label="Button Text"
						value={attributes.buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
					<ColorPicker
						label="Button Color"
						color={attributes.backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
						enableAlpha={true}
					/>
					<ColorPicker
						label="Text Color"
						color={attributes.textColor}
						onChange={(value) => setAttributes({ textColor: value })}
						enableAlpha={true}
					/>
					<BoxControl
						label="Margin"
						values={attributes.marginValues}
						onChange={handleMarginChange}
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
				data-debug="margin-container"
				style={{
					marginTop: attributes.marginValues?.top || "0px",
					marginBottom: attributes.marginValues?.bottom || "0px",
					marginLeft: attributes.marginValues?.left || "0px",
					marginRight: attributes.marginValues?.right || "0px",
					paddingTop: attributes.paddingValues?.top || "0px",
					paddingBottom: attributes.paddingValues?.bottom || "0px",
					paddingLeft: attributes.paddingValues?.left || "0px",
					paddingRight: attributes.paddingValues?.right || "0px",
					border: "1px solid red",
					display: "block",
					boxSizing: "border-box",
				}}
			>
				<Button
					id="pzbutton"
					variant="primary"
					size="large"
					style={{
						backgroundColor: attributes.backgroundColor,
						color: attributes.textColor,
					}}
				>
					{attributes.buttonText}
				</Button>
			</div>
		</div>
	);
}
