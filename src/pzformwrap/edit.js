/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import "./editor.scss";

import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Form info">
          <TextControl
            label="Unique form id"
            value={attributes.formName}
            onChange={(value) => setAttributes({ formName: value })}
          />

          <TextControl
            label="redirect here after submit"
            value={attributes.successURL}
            onChange={(value) => setAttributes({ successURL: value })}
          />
          <TextControl
            label="redirect here on error"
            value={attributes.errorURL}
            onChange={(value) => setAttributes({ errorURL: value })}
          />
          <p>
            Set email address to send form submissions to in the PeakZebra
            settings page.
          </p>
        </PanelBody>
      </InspectorControls>
      <div style={{ borderStyle: "dashed" }}>
        <p style={{ fontSize: "12px", marginLeft: "8px" }}>
          Place form fields within the dotted border (that is, within the form
          tag). For security, be sure to place a pznonce block somewhere within
          the field. Every form must also include a pzsubmit block. Finally, be
          sure to give a unique name to the form and each of the fields.
        </p>
        <form className="form-style-1">
          <InnerBlocks />
        </form>
      </div>
    </div>
  );
}
