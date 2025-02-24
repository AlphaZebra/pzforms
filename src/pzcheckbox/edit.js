/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  CheckboxControl,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
  const { attributes, setAttributes } = props;

  if (!attributes.checkboxID) {
    setAttributes({ checkboxID: Math.floor(Math.random() * 10000) });
  }

  // Calculate the margin string before the return statement
  const marginString = attributes.marginValues
    ? `${attributes.marginValues.top || "0"} ${
        attributes.marginValues.right || "0"
      } ${attributes.marginValues.bottom || "0"} ${
        attributes.marginValues.left || "0"
      }`
    : undefined;

  // Add debug logging

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Field prompts">
          <TextControl
            label="Prompt displayed with field"
            value={attributes.prompt}
            onChange={(value) => setAttributes({ prompt: value })}
          />
          <TextControl
            label="Unique field id"
            value={attributes.name}
            onChange={(value) => setAttributes({ name: value })}
            help="Unique to this page. No spaces."
          />
          <CheckboxControl
            label="Show Asterisk"
            checked={attributes.showAsterisk}
            onChange={(value) => setAttributes({ showAsterisk: value })}
          />
          <CheckboxControl
            label="Default on?"
            checked={attributes.isChecked}
            onChange={(value) => setAttributes({ isChecked: value })}
          />
          <CheckboxControl
            label="force check to enable submit"
            checked={attributes.mustCheck}
            onChange={(value) => setAttributes({ mustCheck: value })}
          />
          <BoxControl
            label="Margin"
            values={attributes.marginValues}
            onChange={(value) => setAttributes({ marginValues: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="pz-checkbox"
        style={{
          ...(marginString && { margin: marginString }),
        }}
      >
        <CheckboxControl
          label={
            <>
              {attributes.prompt}
              {attributes.showAsterisk && (
                <span style={{ color: "red" }}> *</span>
              )}
            </>
          }
          checked={attributes.isChecked}
        />
      </div>
    </div>
  );
}
