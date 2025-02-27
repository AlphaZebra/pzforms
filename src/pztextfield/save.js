import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  attributes.class = "form-style-1";

  if (!attributes.required == true) {
    return (
      <div
        {...useBlockProps.save()}
        style={{
          margin: attributes.marginValues
            ? `${attributes.marginValues.top} ${attributes.marginValues.right} ${attributes.marginValues.bottom} ${attributes.marginValues.left}`
            : undefined,
          padding: attributes.paddingValues
            ? `${attributes.paddingValues.top} ${attributes.paddingValues.right} ${attributes.paddingValues.bottom} ${attributes.paddingValues.left}`
            : undefined,
        }}
      >
        <label for={attributes.textfield_id}>{attributes.textPrompt}</label>
        <input
          type={attributes.is_password ? "password" : "text"}
          id={attributes.textfield_id}
          name={attributes.textfield_name}
          style={{ width: attributes.width }}
        />
      </div>
    );
  } else {
    return (
      <div {...useBlockProps.save()}>
        <label for={attributes.textfield_name}>
          {attributes.textPrompt}
          {attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
        </label>
        <input
          type={attributes.is_password ? "password" : "text"}
          id={attributes.textfield_id}
          name={attributes.textfield_name}
          required
          style={{ width: attributes.width }}
        />
      </div>
    );
  }
}
