/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const marginString = attributes.marginValues
		? `${attributes.marginValues.top || "0"} ${
				attributes.marginValues.right || "0"
		  } ${attributes.marginValues.bottom || "0"} ${
				attributes.marginValues.left || "0"
		  }`
		: undefined;

	return (
		<div
			{...useBlockProps.save()}
			className="pz-checkbox"
			style={{
				...(marginString && { margin: marginString }),
			}}
		>
			<label>
				<input
					type="checkbox"
					name={attributes.name}
					defaultChecked={attributes.isChecked && !attributes.isPrefill}
				/>
				{attributes.prompt}
				{attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
			</label>
		</div>
	);
}
