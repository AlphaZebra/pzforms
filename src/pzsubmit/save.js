/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	attributes.class = "form-style-1";

	return (
		<div
			{...useBlockProps.save()}
			style={{
				marginTop: attributes.marginValues?.top || "0px",
				marginBottom: attributes.marginValues?.bottom || "0px",
				marginLeft: attributes.marginValues?.left || "0px",
				marginRight: attributes.marginValues?.right || "0px",
				paddingTop: attributes.paddingValues?.top || "0px",
				paddingBottom: attributes.paddingValues?.bottom || "0px",
				paddingLeft: attributes.paddingValues?.left || "0px",
				paddingRight: attributes.paddingValues?.right || "0px",
			}}
		>
			<button
				id="pzbutton"
				type="submit"
				variant="contained"
				size="large"
				classname={attributes.class}
				style={{
					backgroundColor: attributes.backgroundColor,
					color: attributes.textColor,
				}}
			>
				{attributes.buttonText}
			</button>
		</div>
	);
}
