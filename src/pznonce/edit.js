import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  CheckboxControl,
} from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { backgroundColor, marginValues, paddingValues } = attributes;

  return (
    <div {...useBlockProps()}>
      <p>Nonce Added (won't show in the frontend)</p>
    </div>
  );
}
