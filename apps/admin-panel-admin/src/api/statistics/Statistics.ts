import { User } from "../user/User";

export type Statistics = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalPhotos: number | null;
  totalVideos: number | null;
  totalAudios: number | null;
  totalPdFs: number | null;
  user?: User | null;
};
