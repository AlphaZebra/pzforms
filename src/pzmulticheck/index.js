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
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M11,13H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v6C13,12.1,12.1,13,11,13z"
						fill="transparent"
					/>
					<path
						d="M11,29H5c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v6C13,28.1,12.1,29,11,29z"
						fill="transparent"
					/>
					<line x1="17" y1="5" x2="29" y2="5" />
					<line x1="17" y1="9" x2="24" y2="9" />
					<line x1="17" y1="21" x2="29" y2="21" />
					<line x1="17" y1="25" x2="24" y2="25" />
					<polyline points="6,7 8,9 11,6" />
				</g>
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
