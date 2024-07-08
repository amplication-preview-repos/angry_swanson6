import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FaqWhereInput = {
  id?: StringFilter;
  answer?: StringNullableFilter;
  question?: StringNullableFilter;
};
