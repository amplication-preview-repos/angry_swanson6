import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HelpWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
};
