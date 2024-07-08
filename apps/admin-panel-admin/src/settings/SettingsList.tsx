import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SettingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SettingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
