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
  attributes.class = "form-style-1";

  return (
    <div
      {...useBlockProps.save()}
      style={{
        margin: `${attributes.marginValues.top}px ${attributes.marginValues.right}px ${attributes.marginValues.bottom}px ${attributes.marginValues.left}px`,
      }}
    >
      <label for={attributes.datepicker_id}>{attributes.prompt}</label>
      <input
        type="date"
        id={attributes.datepicker_id}
        name={attributes.datepicker_name || "date"}
      />
    </div>
  );
}
