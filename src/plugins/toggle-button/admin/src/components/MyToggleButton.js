import React, { useState } from "react";
import { ToggleInput, Tooltip } from "@strapi/design-system";

const MyToggleButton = ({ value, onChange, name }) => {
  const [checked, setChecked] = useState(value || true);
  return (
    <ToggleInput
      hint="This is your hint"
      label="This is your label"
      name="togglebutton"
      labelAction={
        <Tooltip description="Content of the tooltip">
          <button
            aria-label="Information about the email"
            style={{
              border: "none",
              padding: 0,
              background: "transparent",
            }}
          ></button>
        </Tooltip>
      }
      onLabel="On" // Here you can customize the on label for this component
      offLabel="Off" // Here you can customize the off label for this component
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
        onChange({
          target: {
            value: checked,
            name: name,
            type: attribute.type,
          },
        });
      }}
    />
  );
};

export default MyToggleButton;
