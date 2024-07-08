import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";
import { AudioListRelationFilter } from "../audio/AudioListRelationFilter";
import { PdfListRelationFilter } from "../pdf/PdfListRelationFilter";
import { StatisticsListRelationFilter } from "../statistics/StatisticsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
  videos?: VideoListRelationFilter;
  audioItems?: AudioListRelationFilter;
  pdfs?: PdfListRelationFilter;
  statisticsItems?: StatisticsListRelationFilter;
};
