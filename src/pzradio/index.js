/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
				style={{ fill: "currentColor" }}
			>
				<path d="M29,6H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,6,29,6z" />
				<path d="M24,10h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,10,24,10z" />
				<path d="M29,22H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,22,29,22z" />
				<path d="M24,26h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,26,24,26z" />
				<path d="M8,30c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,30,8,30z" />
				<path d="M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z" />
			</svg>
		),
		foreground: "#0693e3",
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
});
