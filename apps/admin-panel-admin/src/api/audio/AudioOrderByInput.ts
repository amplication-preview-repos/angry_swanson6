import { SortOrder } from "../../util/SortOrder";

export type AudioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  description?: SortOrder;
  uploadedAt?: SortOrder;
  userId?: SortOrder;
};
