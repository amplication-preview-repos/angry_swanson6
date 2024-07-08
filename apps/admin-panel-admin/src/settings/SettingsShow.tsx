import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const SettingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="theme" source="theme" />
        <TextField label="language" source="language" />
        <BooleanField
          label="notificationsEnabled"
          source="notificationsEnabled"
        />
        <TextField label="privacyLevel" source="privacyLevel" />
      </SimpleShowLayout>
    </Show>
  );
};
