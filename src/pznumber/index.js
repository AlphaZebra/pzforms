import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: "calculator",
		foreground: "#0693e3",
	},
	edit: Edit,
	save,
});
