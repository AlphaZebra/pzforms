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
  Button,
  ColorPicker,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
// import Button from "@mui/material/Button";

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

  const handleMarginChange = (value) => {
    setAttributes({ marginValues: value });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <TextControl
          label="Button id"
          value={attributes.buttonId}
          onChange={(value) => setAttributes({ buttonId: value })}
        />
        <PanelColorSettings
          title={__("Color settings")}
          initialOpen={false}
          colorSettings={[
            {
              value: attributes.backgroundColor,
              onChange: (color) => setAttributes({ backgroundColor: color }),
              label: __("Background Color"),
            },
            {
              value: attributes.textColor,
              onChange: (color) => setAttributes({ textColor: color }),
              label: __("Text Color"),
            },
            {
              value: attributes.hoverColor,
              onChange: (color) => setAttributes({ hoverColor: color }),
              label: __("Hover Background Color"),
            },
            {
              value: attributes.hoverTextColor,
              onChange: (color) => setAttributes({ hoverTextColor: color }),
              label: __("Hover Text Color"),
            },
            {
              value: attributes.activeColor,
              onChange: (color) => setAttributes({ activeColor: color }),
              label: __("Active Background Color"),
            },
            {
              value: attributes.activeTextColor,
              onChange: (color) => setAttributes({ activeTextColor: color }),
              label: __("Active Text Color"),
            },
          ]}
        />
        <PanelBody title="Button Text">
          <TextControl
            label="Button Text"
            value={attributes.buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <BoxControl
            label="Margin"
            values={attributes.marginValues}
            onChange={handleMarginChange}
          />
          <BoxControl
            label="Padding"
            values={attributes.paddingValues}
            onChange={(value) => {
              setAttributes({ paddingValues: value });
            }}
          />
        </PanelBody>
      </InspectorControls>
      <div
        data-debug="margin-container"
        style={{
          marginTop: attributes.marginValues?.top || "0px",
          marginBottom: attributes.marginValues?.bottom || "0px",
          marginLeft: attributes.marginValues?.left || "0px",
          marginRight: attributes.marginValues?.right || "0px",
          paddingTop: attributes.paddingValues?.top || "0px",
          paddingBottom: attributes.paddingValues?.bottom || "0px",
          paddingLeft: attributes.paddingValues?.left || "0px",
          paddingRight: attributes.paddingValues?.right || "0px",
          display: "block",
          boxSizing: "border-box",
        }}
      >
        <button
          type="submit"
          variant="contained"
          size="large"
          className={attributes.class}
          style={{
            backgroundColor: attributes.backgroundColor,
            color: attributes.textColor,
            minWidth: "100px",
            minHeight: "40px",
          }}
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = attributes.hoverColor;
            e.currentTarget.style.color = attributes.hoverTextColor;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = attributes.backgroundColor;
            e.currentTarget.style.color = attributes.textColor;
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = attributes.activeColor;
            e.currentTarget.style.color = attributes.activeTextColor;
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = attributes.hoverColor;
            e.currentTarget.style.color = attributes.hoverTextColor;
          }}
        >
          {attributes.buttonText}
        </button>
      </div>
    </div>
  );
}
