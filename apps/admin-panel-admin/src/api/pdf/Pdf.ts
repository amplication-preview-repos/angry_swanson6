import { User } from "../user/User";

export type Pdf = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  uploadedAt: Date | null;
  url: string | null;
  user?: User | null;
};
