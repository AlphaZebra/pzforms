// pztextarea/save.js

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  attributes.class = "form-style-1";

  if (!attributes.required == true) {
    return (
      <div
        {...useBlockProps.save()}
        style={{
          margin: `${attributes.marginValues.top}px ${attributes.marginValues.right}px ${attributes.marginValues.bottom}px ${attributes.marginValues.left}px`,
          padding: `${attributes.paddingValues.top}px ${attributes.paddingValues.right}px ${attributes.paddingValues.bottom}px ${attributes.paddingValues.left}px`,
        }}
      >
        <label for={attributes.id}>{attributes.prompt}</label>
        <textarea
          id={attributes.textarea_id}
          name={attributes.textarea_name}
          rows={attributes.rows}
          cols={attributes.cols}
        />
      </div>
    );
  } else {
    return (
      <div
        {...useBlockProps.save()}
        style={{
          margin: `${attributes.marginValues.top}px ${attributes.marginValues.right}px ${attributes.marginValues.bottom}px ${attributes.marginValues.left}px`,
          padding: `${attributes.paddingValues.top}px ${attributes.paddingValues.right}px ${attributes.paddingValues.bottom}px ${attributes.paddingValues.left}px`,
        }}
      >
        <label htmlFor={attributes.id}>
          {attributes.prompt}
          {attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
        </label>
        <textarea
          id={attributes.textarea_id}
          name={attributes.textarea_name}
          rows={attributes.rows}
          cols={attributes.cols}
          required
        />
      </div>
    );
  }
}
