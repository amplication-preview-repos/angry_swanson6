import { User } from "../user/User";

export type Audio = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  description: string | null;
  uploadedAt: Date | null;
  user?: User | null;
};
