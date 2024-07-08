import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
