import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticsWhereInput = {
  id?: StringFilter;
  totalPhotos?: IntNullableFilter;
  totalVideos?: IntNullableFilter;
  totalAudios?: IntNullableFilter;
  totalPdFs?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
