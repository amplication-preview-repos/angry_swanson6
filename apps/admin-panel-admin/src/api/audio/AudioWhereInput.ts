import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AudioWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
