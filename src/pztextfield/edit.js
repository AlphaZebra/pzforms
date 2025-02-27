import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  CheckboxControl,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { select, subscribe } from "@wordpress/data";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { backgroundColor, marginValues, paddingValues } = attributes;
  let ctr = 0;

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      const isSaving = select("core/editor").isSavingPost();
      const isAutosaving = select("core/editor").isAutosavingPost();

      if (isSaving && !isAutosaving) {
        // validate that text field has unique name, not still 'value'
        if (attributes.textPrompt === "Value") {
          if (ctr == 0) {
            alert("Please change the text field prompt to a unique value.");
            alert(ctr);
          }
          ctr++;
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title="Config">
          <TextControl
            label="Prompt displayed with field"
            value={attributes.textPrompt}
            onChange={(value) => setAttributes({ textPrompt: value })}
          />
          <TextControl
            label="Field variable name"
            help="Unique to this page. No spaces."
            value={attributes.name ? attributes.name : attributes.field}
            onChange={(value) => setAttributes({ name: value, id: value })}
          />
          <TextControl
            label="Width"
            help="May be a percentage or a number of pixels."
            value={attributes.width}
            onChange={(value) => setAttributes({ width: value })}
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
          <CheckboxControl
            label="Multiline"
            checked={attributes.multiline}
            onChange={(value) => setAttributes({ multiline: value })}
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
          margin: marginValues
            ? `${marginValues.top} ${marginValues.right} ${marginValues.bottom} ${marginValues.left}`
            : undefined,
          padding: paddingValues
            ? `${paddingValues.top} ${paddingValues.right} ${paddingValues.bottom} ${paddingValues.left}`
            : undefined,
        }}
      >
        <TextControl
          id={attributes.textfield_id}
          name={attributes.textfield_name}
          label={
            <>
              {attributes.textPrompt}
              {attributes.showAsterisk && (
                <span style={{ color: "red" }}> *</span>
              )}
            </>
          }
          style={{
            width: attributes.width,
          }}
          // variant="outlined"
        />
      </div>
    </div>
  );
}
