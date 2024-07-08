import { SortOrder } from "../../util/SortOrder";

export type FaqOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  answer?: SortOrder;
  question?: SortOrder;
};
