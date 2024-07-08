import { SortOrder } from "../../util/SortOrder";

export type PdfOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  uploadedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
