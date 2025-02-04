/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import "./editor.scss";

import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Form info">
					<TextControl
						label="Unique form id"
						value={attributes.formName}
						onChange={(value) => setAttributes({ formName: value })}
					/>

					<TextControl
						label="redirect here after submit"
						value={attributes.successURL}
						onChange={(value) => setAttributes({ successURL: value })}
					/>
					<TextControl
						label="redirect here on error"
						value={attributes.errorURL}
						onChange={(value) => setAttributes({ errorURL: value })}
					/>
					<p>
						Set email address to send form submissions to in the Peakforms
						settings page.
					</p>
					<TextControl
						label="Name of optional post submission function"
						value={attributes.phpFunctionName}
						onChange={(value) => setAttributes({ phpFunctionName: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div style={{ borderStyle: "dashed" }}>
				<form>
					<InnerBlocks />
				</form>
			</div>
		</div>
	);
}
