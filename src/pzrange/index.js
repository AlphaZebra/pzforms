import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg
				width="800px"
				height="800px"
				viewBox="0 0 16 16"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />

				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					{" "}
					<path
						fill="#0693e3"
						d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"
					/>{" "}
				</g>
			</svg>
		),
	},
	edit: Edit,
	save,
});
