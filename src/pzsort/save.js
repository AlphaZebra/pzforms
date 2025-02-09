/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const thisURL = window.location.href;
	const url = new URL(thisURL);
	const adminPath = url.protocol + "//" + url.host + "/wp-admin/admin-post.php";

	return (
		<div {...useBlockProps.save()}>
			<p className="pz-question-text">{attributes.question}</p>
			<ul id="items-list" class="moveable">
				{attributes.answers.map(function (answer, index) {
					return <li>{answer}</li>;
				})}
			</ul>
		</div>
	);
}
