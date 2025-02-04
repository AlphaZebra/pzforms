import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	attributes.class = "form-style-1";

	const commonProps = {
		type: "email",
		id: attributes.id,
		name: attributes.id,
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
			<div className="email-input-wrapper">
				<input
					{...commonProps}
					{...(attributes.required && { required: true })}
				/>
				<span
					id={`${attributes.id}-warning`}
					className="email-warning"
					style={{
						display: "none",
						color: "#dc3232",
						fontSize: "0.8em",
						marginTop: "4px",
					}}
				>
					Please enter a valid email address
				</span>
			</div>
		</div>
	);
}
