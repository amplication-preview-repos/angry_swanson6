import { JsonValue } from "type-fest";
import { Photo } from "../photo/Photo";
import { Video } from "../video/Video";
import { Audio } from "../audio/Audio";
import { Pdf } from "../pdf/Pdf";
import { Statistics } from "../statistics/Statistics";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  photos?: Array<Photo>;
  videos?: Array<Video>;
  audioItems?: Array<Audio>;
  pdfs?: Array<Pdf>;
  statisticsItems?: Array<Statistics>;
};
