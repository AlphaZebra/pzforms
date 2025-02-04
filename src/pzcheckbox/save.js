/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import { CheckboxControl } from "@wordpress/components";

export default function save({ attributes }) {
	attributes.class = "form-style-1";
	const mustVal = attributes.mustCheck == true ? "yes" : "";

	return (
		<div
			{...useBlockProps.save()}
			style={{
				...(attributes.marginValues && {
					margin: `${attributes.marginValues.top || "0"} ${
						attributes.marginValues.right || "0"
					} ${attributes.marginValues.bottom || "0"} ${
						attributes.marginValues.left || "0"
					}`,
				}),
				display: "flex",
				alignItems: "center",
				gap: "0.5em",
			}}
		>
			<input
				type="checkbox"
				id={attributes.id}
				name={attributes.name}
				checked={attributes.isChecked}
				datamust={mustVal}
			/>
			<label htmlFor={attributes.id} className="form-style-1-checkbox">
				{attributes.prompt}{" "}
			</label>
		</div>
	);
}
