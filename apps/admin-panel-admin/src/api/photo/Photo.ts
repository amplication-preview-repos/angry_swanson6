import { User } from "../user/User";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  url: string | null;
  uploadedAt: Date | null;
  user?: User | null;
};
