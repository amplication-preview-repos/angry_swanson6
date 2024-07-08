import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  url?: string | null;
  description?: string | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
