/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { PanelBody, TextControl, SelectControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { siteKey, size, theme } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("reCAPTCHA Settings", "peakforms")}>
					<TextControl
						label={__("Site Key", "peakforms")}
						value={siteKey}
						onChange={(value) => setAttributes({ siteKey: value })}
						help={__("Enter your reCAPTCHA site key", "peakforms")}
					/>
					<SelectControl
						label={__("Size", "peakforms")}
						value={size}
						options={[
							{ label: __("Normal", "peakforms"), value: "normal" },
							{ label: __("Compact", "peakforms"), value: "compact" },
						]}
						onChange={(value) => setAttributes({ size: value })}
					/>
					<SelectControl
						label={__("Theme", "peakforms")}
						value={theme}
						options={[
							{ label: __("Light", "peakforms"), value: "light" },
							{ label: __("Dark", "peakforms"), value: "dark" },
						]}
						onChange={(value) => setAttributes({ theme: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{!siteKey ? (
					<p className="components-placeholder__error">
						{__(
							"Please enter a reCAPTCHA site key in the block settings.",
							"peakforms",
						)}
					</p>
				) : (
					<div className="peakforms-recaptcha-preview">
						<div className="recaptcha-placeholder">
							{__("reCAPTCHA will appear here", "peakforms")}
							<br />
							<small>
								{__("Size:", "peakforms")} {size}
								{" | "}
								{__("Theme:", "peakforms")} {theme}
							</small>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
