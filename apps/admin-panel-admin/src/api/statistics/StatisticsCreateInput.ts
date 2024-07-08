import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticsCreateInput = {
  totalPhotos?: number | null;
  totalVideos?: number | null;
  totalAudios?: number | null;
  totalPdFs?: number | null;
  user?: UserWhereUniqueInput | null;
};
