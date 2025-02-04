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
	const thisURL = window.location.href;
	const url = new URL(thisURL);
	const adminPath = url.protocol + "//" + url.host + "/wp-admin/admin-post.php";

	if (attributes.required == true) {
		return (
			<div {...useBlockProps.save()} className="form-style-1">
				<p className="pz-question-text">{attributes.question}</p>

				<div
					style={{
						display: attributes.horizontalLayout ? "flex" : "block",
						flexWrap: "wrap",
						gap: "20px",
					}}
				>
					{attributes.answers.map(function (answer, index) {
						return (
							<div
								style={{
									flex: attributes.horizontalLayout
										? "0 1 calc(33.33% - 14px)"
										: "1 1 100%",
								}}
							>
								<input
									type="radio"
									id={answer}
									name={attributes.slug}
									value={answer}
									required="required"
								/>
								<label className="pz-answer-text" for={answer}>
									{answer}
								</label>
								<br></br>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	// else

	return (
		<div {...useBlockProps.save()} className="form-style-1">
			<p className="pz-question-text">{attributes.question}</p>

			<div
				style={{
					display: attributes.horizontalLayout ? "flex" : "block",
					flexWrap: "wrap",
					gap: "20px",
				}}
			>
				{attributes.answers.map(function (answer, index) {
					return (
						<div
							style={{
								flex: attributes.horizontalLayout
									? "0 1 calc(33.33% - 14px)"
									: "1 1 100%",
							}}
						>
							<input
								type="radio"
								id={answer}
								name={attributes.slug}
								value={answer}
								required={attributes.required ? "required" : undefined}
							/>
							<label className="pz-answer-text" for={answer}>
								{answer}
							</label>
							<br></br>
						</div>
					);
				})}
			</div>
		</div>
	);
}
