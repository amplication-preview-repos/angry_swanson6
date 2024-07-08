import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const StatisticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="totalPhotos" source="totalPhotos" />
        <NumberInput step={1} label="totalVideos" source="totalVideos" />
        <NumberInput step={1} label="totalAudios" source="totalAudios" />
        <NumberInput step={1} label="totalPDFs" source="totalPdFs" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
