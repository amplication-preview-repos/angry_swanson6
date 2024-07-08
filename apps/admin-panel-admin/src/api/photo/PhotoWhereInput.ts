import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  url?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
