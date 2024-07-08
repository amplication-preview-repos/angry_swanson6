import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  theme?: SortOrder;
  language?: SortOrder;
  notificationsEnabled?: SortOrder;
  privacyLevel?: SortOrder;
};
