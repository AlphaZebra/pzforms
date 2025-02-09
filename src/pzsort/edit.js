/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	Flex,
	FlexBlock,
	FlexItem,
	Button,
	SelectControl,
	CheckboxControl,
} from "@wordpress/components";

import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { backgroundColor } = attributes;

	const blockProps = useBlockProps();
	const { textColor } = attributes;
	const curQuestion = props.attributes.question;

	// get starting style values
	const body = document.querySelector("body");
	const themeBase = getComputedStyle(body).getPropertyValue(
		"--wp--preset--color--base",
	);
	const themeContrast = getComputedStyle(body).getPropertyValue(
		"--wp--preset--color--contrast",
	);
	const themeButtonBackground = getComputedStyle(body).getPropertyValue(
		"--wp--preset--color--accent",
	);
	const themeButtonBackgroundHoverColor = getComputedStyle(
		body,
	).getPropertyValue("--wp--preset--color--accent-5");

	if (attributes.formBackground == "")
		setAttributes({ formBackground: themeBase });
	if (attributes.formColor == "") setAttributes({ formColor: themeContrast });
	if (attributes.buttonColor == "")
		setAttributes({ buttonColor: themeButtonBackground });
	if (attributes.buttonTextColor == "")
		setAttributes({ buttonTextColor: themeContrast });
	if (attributes.buttonBackgroundHoverColor == "")
		setAttributes({
			buttonBackgroundHoverColor: themeButtonBackgroundHoverColor,
		});

	// define the onChange functions
	const onChangeBackgroundColor = (val) => {
		setAttributes({ formBackground: val });
	};
	const onChangeFormColor = (val) => {
		setAttributes({ formColor: val });
	};
	const onChangeButtonColor = (val) => {
		setAttributes({ buttonColor: val });
	};
	const onChangeButtonTextColor = (val) => {
		setAttributes({ buttonTextColor: val });
	};
	const onChangeButtonBackgroundHoverColor = (val) => {
		setAttributes({ buttonBackgroundHoverColor: val });
	};

	function updateQuestion(newVal) {
		props.setAttributes({ question: newVal });
	}

	function updateSlug(newVal) {
		props.setAttributes({ slug: newVal });
	}

	function updateTextColor(newVal) {
		props.setAttributes({ textColor: newVal });
	}

	function updateButtonTextColor(newVal) {
		props.setAttributes({ buttonTextColor: newVal });
	}

	function updateButtonBackgroundColor(newVal) {
		props.setAttributes({ buttonBackgroundColor: newVal });
	}

	function updateBlockBackgroundColor(newVal) {
		props.setAttributes({ blockBackgroundColor: newVal });
	}

	function deleteAnswer(x) {
		const newAnswers = props.attributes.answers.filter(function (z, index) {
			return index != x;
		});
		props.setAttributes({ answers: newAnswers });

		if (x == props.attributes.correctAnswer) {
			props.setAttributes({ correctAnswer: undefined });
		}
	}

	function setAnswer(x) {
		props.setAttributes({ correctAnswer: x });
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					colorSettings={[
						{
							value: attributes.formBackground,
							onChange: onChangeBackgroundColor,
							label: "Form background color ",
						},
						{
							value: attributes.formColor,
							onChange: onChangeFormColor,
							label: "Form text color ",
						},
					]}
				/>
				<CheckboxControl
					label="Required"
					checked={attributes.required}
					onChange={(value) => setAttributes({ required: value })}
				/>
			</InspectorControls>

			<div className={attributes.formStyle}>
				<TextControl
					label="Question:"
					value={props.attributes.question}
					onChange={updateQuestion}
					style={{ fontSize: "20px" }}
				/>
				<TextControl
					label="Slug name:"
					value={props.attributes.slug}
					onChange={updateSlug}
					style={{ fontSize: "20px" }}
				/>
				<p style={{ fontSize: "13px", margin: "20px 0 8px 0" }}>Answers:</p>
				{props.attributes.answers.map(function (answer, index) {
					return (
						<Flex>
							<FlexBlock>
								<TextControl
									value={answer}
									onChange={(x) => {
										const newAnswers = props.attributes.answers.concat([]);
										newAnswers[index] = x;
										props.setAttributes({ answers: newAnswers });
									}}
								/>
							</FlexBlock>

							<FlexItem>
								<Button
									variant="link"
									className="pz-delete"
									onClick={() => deleteAnswer(index)}
								>
									Delete
								</Button>
							</FlexItem>
						</Flex>
					);
				})}
				<Button
					variant="primary"
					onClick={() => {
						props.setAttributes({
							answers: props.attributes.answers.concat([""]),
						});
					}}
				>
					Add another answer
				</Button>
			</div>
		</div>
	);
}
