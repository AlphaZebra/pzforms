import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{ backgroundColor: "transparent" }}
			>
				<rect x="2" y="4" width="20" height="16" rx="2" fill="transparent" />
				<polyline points="22,6 12,13 2,6" fill="transparent" />
			</svg>
		),
		foreground: "#0693e3",
	},
	edit: Edit,
	save,
});
