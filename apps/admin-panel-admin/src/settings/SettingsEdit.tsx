import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="theme" source="theme" />
        <TextInput label="language" source="language" />
        <BooleanInput
          label="notificationsEnabled"
          source="notificationsEnabled"
        />
        <SelectInput
          source="privacyLevel"
          label="privacyLevel"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
