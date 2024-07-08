import { SortOrder } from "../../util/SortOrder";

export type HelpOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
};
