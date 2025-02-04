import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	attributes.class = "form-style-1";

	const commonProps = {
		type: "number",
		id: attributes.id,
		name: attributes.name,
		style: { width: attributes.width },
	};

	const divStyle = {
		margin: attributes.marginValues
			? `${attributes.marginValues.top} ${attributes.marginValues.right} ${attributes.marginValues.bottom} ${attributes.marginValues.left}`
			: undefined,
		padding: attributes.paddingValues
			? `${attributes.paddingValues.top} ${attributes.paddingValues.right} ${attributes.paddingValues.bottom} ${attributes.paddingValues.left}`
			: undefined,
	};

	return (
		<div {...useBlockProps.save()} style={divStyle}>
			<label htmlFor={attributes.id}>
				{attributes.prompt}
				{attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
			</label>
			<input
				{...commonProps}
				{...(attributes.required && { required: true })}
			/>
		</div>
	);
}
