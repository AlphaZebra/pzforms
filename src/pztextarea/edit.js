/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
// import { __ } from "@wordpress/i18n";

import { useState } from "@wordpress/element"; // WordPress React wrapper
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  CheckboxControl,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { marginValues, paddingValues } = attributes;

  // Helper function to convert BoxControl values to CSS string
  const getSpacingString = (values) => {
    if (!values) return undefined;
    return `${values.top || 0}px ${values.right || 0}px ${
      values.bottom || 0
    }px ${values.left || 0}px`;
  };

  const marginString = getSpacingString(marginValues);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Configuration">
          <TextControl
            label="Rows"
            value={attributes.rows}
            onChange={(value) => setAttributes({ rows: value })}
          />
          <TextControl
            label="Cols"
            value={attributes.cols}
            onChange={(value) => setAttributes({ cols: value })}
          />
        </PanelBody>
        <PanelBody title="Field prompts">
          <TextControl
            label="Prompt displayed for field"
            value={attributes.prompt}
            onChange={(value) => setAttributes({ prompt: value })}
          />
          <TextControl
            label="Unique name"
            help="This is the name of the field in the form data when email is sent."
            value={
              attributes.textarea_name
                ? attributes.textarea_name
                : attributes.field
            }
            onChange={(value) => setAttributes({ textarea_name: value })}
          />
          <TextControl
            label="Unique id"
            help="No spaces."
            value={attributes.textarea_id}
            onChange={(value) => setAttributes({ textarea_id: value })}
          />
          <CheckboxControl
            label="Required"
            checked={attributes.required}
            onChange={(value) => setAttributes({ required: value })}
          />
          <CheckboxControl
            label="Show Asterisk"
            checked={attributes.showAsterisk}
            onChange={(value) => setAttributes({ showAsterisk: value })}
          />
        </PanelBody>
        <PanelBody title="Spacing" initialOpen={false}>
          <BoxControl
            label="Margin"
            values={marginValues}
            onChange={(nextValues) =>
              setAttributes({ marginValues: nextValues })
            }
          />
          <BoxControl
            label="Padding"
            values={paddingValues}
            onChange={(nextValues) =>
              setAttributes({ paddingValues: nextValues })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div
        style={{
          margin: marginString,
        }}
      >
        <label htmlFor={attributes.textarea_id}>
          {attributes.prompt}
          {attributes.showAsterisk && <span style={{ color: "red" }}> *</span>}
        </label>
        <TextareaControl
          id={attributes.textarea_id}
          name={attributes.textarea_name}
          rows={attributes.rows}
          cols={attributes.cols}
        />
      </div>
    </div>
  );
}
