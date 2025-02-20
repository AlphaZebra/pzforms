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
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
				stroke="currentColor"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />

				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					<g>
						<polygon
							fill="currentColor"
							points="16,33 14,33 14,10 14,6 14,3 16,3 16,0 8,0 8,3 10,3 10,6 10,10 10,33 8,33 8,36 16,36 "
						/>
						<polygon
							fill="currentColor"
							points="17.031,6 17.031,10 44,10 44,44 4,44 4,10 6.938,10 6.938,6 0,6 0,48 48,48 48,6 "
						/>
					</g>
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
