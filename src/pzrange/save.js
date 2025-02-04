import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	attributes.class = "form-style-1";

	const commonProps = {
		type: "range",
		id: attributes.id,
		name: attributes.id,
		min: attributes.min,
		max: attributes.max,
		value: attributes.defaultValue,
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
			<label htmlFor={attributes.id}>{attributes.prompt}</label>
			<input
				{...commonProps}
				{...(attributes.required && { required: true })}
			/>
			<output>
				Value:{" "}
				<span id={`${attributes.id}-output`}>{attributes.defaultValue}</span>
			</output>
		</div>
	);
}
