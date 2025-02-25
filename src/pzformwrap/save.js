import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

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
  let theProcessor = "do-form";

  attributes.class = "form-style-1";
  const jsonAttributes = JSON.stringify(attributes);

  return (
    <div {...useBlockProps.save()}>
      <div>
        <pre style={{ color: "white" }} className="pz-form-atts">
          {jsonAttributes}
        </pre>
      </div>

      <form
        action="/wp-admin/admin-post.php"
        method="POST"
        id={attributes.formName}
        className={attributes.class}
      >
        <input type="hidden" name="action" value={theProcessor} required />
        <input
          type="hidden"
          name="formName"
          value={attributes.formName}
          required
        />
        <input
          type="hidden"
          name="successURL"
          value={attributes.successURL}
          required
        />
        <input
          type="hidden"
          name="formEmail"
          value={attributes.formEmail}
          required
        />
        <input
          type="hidden"
          name="phpFunctionName"
          value={attributes.phpFunctionName}
          required
        />
        <InnerBlocks.Content />
      </form>
    </div>
  );
}
