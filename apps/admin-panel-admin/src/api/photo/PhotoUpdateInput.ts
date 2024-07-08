import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  description?: string | null;
  url?: string | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
