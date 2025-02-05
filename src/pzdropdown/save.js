/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()} className="form-style-1">
			<p className="pz-question-text">{attributes.question}</p>
			<select
				name={attributes.slug}
				required={attributes.required ? "required" : undefined}
			>
				<option value="">Select an option</option>
				{attributes.answers.map(function (answer) {
					return <option value={answer}>{answer}</option>;
				})}
			</select>
		</div>
	);
}
