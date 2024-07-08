import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  theme?: StringNullableFilter;
  language?: StringNullableFilter;
  notificationsEnabled?: BooleanNullableFilter;
  privacyLevel?: "Option1";
};
