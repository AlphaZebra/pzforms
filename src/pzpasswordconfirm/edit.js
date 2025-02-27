import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const {
    passwordPrompt,
    confirmPrompt,
    field_id,
    field_name,
    width,
    required,
    marginValues,
    paddingValues,
    showAsterisk,
  } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Field Settings", "peakzebra")}>
          <TextControl
            label={__("Password Field Prompt", "peakzebra")}
            value={passwordPrompt}
            onChange={(value) => setAttributes({ passwordPrompt: value })}
          />
          <TextControl
            label={__("Confirm Password Prompt", "peakzebra")}
            value={confirmPrompt}
            onChange={(value) => setAttributes({ confirmPrompt: value })}
          />
          <TextControl
            label={__("Field ID", "peakzebra")}
            value={field_id}
            onChange={(value) => setAttributes({ field_id: value })}
          />
          <TextControl
            label={__("Field Name", "peakzebra")}
            value={field_name}
            onChange={(value) => setAttributes({ field_name: value })}
          />
          <TextControl
            label={__("Width", "peakzebra")}
            value={width}
            onChange={(value) => setAttributes({ width: value })}
          />
          <ToggleControl
            label={__("Required", "peakzebra")}
            checked={required}
            onChange={(value) => setAttributes({ required: value })}
          />
          <ToggleControl
            label={__("Show Asterisk", "peakzebra")}
            checked={showAsterisk}
            onChange={(value) => setAttributes({ showAsterisk: value })}
          />
          <BoxControl
            label={__("Margin", "peakzebra")}
            values={marginValues}
            onChange={(value) => setAttributes({ marginValues: value })}
          />
          <BoxControl
            label={__("Padding", "peakzebra")}
            values={paddingValues}
            onChange={(value) => setAttributes({ paddingValues: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div
        className="pz-password-confirm-wrapper"
        style={{
          width: width,
          margin: `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}`,
          padding: `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}`,
        }}
      >
        <div className="pz-password-field">
          <label htmlFor={`${field_id}_password`}>
            {passwordPrompt}
            {required && showAsterisk && <span className="required">*</span>}
          </label>
          <input
            type="password"
            id={`${field_id}_password`}
            name={`${field_name}_password`}
            required={required}
            disabled
          />
        </div>
        <div className="pz-confirm-field">
          <label htmlFor={`${field_id}_confirm`}>
            {confirmPrompt}
            {required && showAsterisk && <span className="required">*</span>}
          </label>
          <input
            type="password"
            id={`${field_id}_confirm`}
            name={`${field_name}_confirm`}
            required={required}
            disabled
          />
        </div>
        <div className="pz-password-match-message"></div>
      </div>
    </div>
  );
}
