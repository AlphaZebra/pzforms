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
				viewBox="0 0 14 14"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				strokeWidth="0.7"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<path
						fill="currentColor"
						d="M1.0000123,6.99975 v-4.7134 h5.8088699 c4.1431298,0 5.8462998,0.017 5.9393898,0.06 0.0718,0.033 0.15728,0.1182 0.189991,0.19 0.0823,0.1807 0.0823,3.6053 0,3.786 -0.105991,0.2326 -0.2305,0.2494 -1.84448,0.2494 h-1.5239708 v2.571 v2.5709 h-4.2849 -4.2849 v-4.7135 z"
					/>
					<path
						fill="#E1E8ED"
						d="M8.7128323,8.71375 v-2.1425 h-3.4279201 -3.42792 v2.1425 2.1424 h3.42792 3.4279201 v-2.1424 z"
					/>
					<path
						fill="currentColor"
						d="M2.71397,9.5708 v-0.4285 h2.5709399 2.57094 v0.4285 0.4284 h-2.57094 -2.5709399 v-0.4284 z M2.71397,7.8568 v-0.4285 h2.5709399 2.57094 v0.4285 0.4285 h-2.57094 -2.5709399 v-0.4285 z"
					/>
					<path
						fill="#E1E8ED"
						d="M8.7128323,4.4289 v-1.2855 h-3.4279201 -3.42792 v1.2855 1.2854 h3.42792 3.4279201 v-1.2854 z"
					/>
					<path
						fill="currentColor"
						d="M11.003913,5.5135 c0.192459,-0.1687 1.35108,-1.6577 1.35108,-1.7364 0,-0.1911 -0.1034,-0.2052 -1.49971,-0.2052 -1.3963208,0 -1.4997208,0.014 -1.4997208,0.2052 0,0.042 0.27994,0.4291 0.62208,0.8597 0.6085808,0.766 0.7934798,0.9704 0.8776398,0.9704 0.0229,0 0.0898,-0.042 0.148631,-0.094 z"
					/>
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
