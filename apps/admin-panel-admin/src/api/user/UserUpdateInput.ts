import { InputJsonValue } from "../../types";
import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";
import { VideoUpdateManyWithoutUsersInput } from "./VideoUpdateManyWithoutUsersInput";
import { AudioUpdateManyWithoutUsersInput } from "./AudioUpdateManyWithoutUsersInput";
import { PdfUpdateManyWithoutUsersInput } from "./PdfUpdateManyWithoutUsersInput";
import { StatisticsUpdateManyWithoutUsersInput } from "./StatisticsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  photos?: PhotoUpdateManyWithoutUsersInput;
  videos?: VideoUpdateManyWithoutUsersInput;
  audioItems?: AudioUpdateManyWithoutUsersInput;
  pdfs?: PdfUpdateManyWithoutUsersInput;
  statisticsItems?: StatisticsUpdateManyWithoutUsersInput;
};
