import React, { useState } from "react";
import { ToggleInput } from "@strapi/design-system";

const MyToggleButton = ({ value, onChange, name, attribute }) => {
  const [checked, setChecked] = useState(value ?? true);

  return (
    <ToggleInput
      hint="This is your hint"
      label="This is your label"
      name="togglebutton"
      onLabel="On" // Here you can customize the on label for this component
      offLabel="Off" // Here you can customize the off label for this component
      checked={checked}
      onChange={(e) => {
        // set the value of the state
        setChecked(e.target.checked);

        // invoke the onChange function that is destructured from our component props on line 4
        onChange({
          target: {
            value: e.target.checked, // use the value of the checked.
            name: name, // use the name of the field as created in the Content Type Builder
            type: attribute.type, // use the type as defined when registering the custom field
          },
        });
      }}
    />
  );
};

export default MyToggleButton;
