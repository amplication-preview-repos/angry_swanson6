import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  url?: SortOrder;
  uploadedAt?: SortOrder;
  userId?: SortOrder;
};
