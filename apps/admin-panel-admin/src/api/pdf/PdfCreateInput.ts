import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PdfCreateInput = {
  description?: string | null;
  uploadedAt?: Date | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
