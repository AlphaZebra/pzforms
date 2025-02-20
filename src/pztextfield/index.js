/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

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
				id="Icons"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 32 32"
				xmlSpace="preserve"
				width="800px"
				height="800px"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g id="SVGRepo_iconCarrier">
					<style>{`.st0 {fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}</style>
					<rect x="3" y="12" className="st0" width="26" height="10" />
					<line className="st0" x1="6" y1="15" x2="10" y2="15" />
					<line className="st0" x1="8" y1="19" x2="8" y2="15" />
					<line className="st0" x1="11" y1="8" x2="15" y2="8" />
					<line className="st0" x1="11" y1="26" x2="15" y2="26" />
					<line className="st0" x1="13" y1="26" x2="13" y2="8" />
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
	save,
});
