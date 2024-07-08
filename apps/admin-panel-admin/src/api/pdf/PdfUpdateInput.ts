import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PdfUpdateInput = {
  description?: string | null;
  uploadedAt?: Date | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
