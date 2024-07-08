import { SortOrder } from "../../util/SortOrder";

export type StatisticsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalPhotos?: SortOrder;
  totalVideos?: SortOrder;
  totalAudios?: SortOrder;
  totalPdFs?: SortOrder;
  userId?: SortOrder;
};
