import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PdfWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
