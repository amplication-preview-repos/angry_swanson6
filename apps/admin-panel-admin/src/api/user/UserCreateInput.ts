import { InputJsonValue } from "../../types";
import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";
import { VideoCreateNestedManyWithoutUsersInput } from "./VideoCreateNestedManyWithoutUsersInput";
import { AudioCreateNestedManyWithoutUsersInput } from "./AudioCreateNestedManyWithoutUsersInput";
import { PdfCreateNestedManyWithoutUsersInput } from "./PdfCreateNestedManyWithoutUsersInput";
import { StatisticsCreateNestedManyWithoutUsersInput } from "./StatisticsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  photos?: PhotoCreateNestedManyWithoutUsersInput;
  videos?: VideoCreateNestedManyWithoutUsersInput;
  audioItems?: AudioCreateNestedManyWithoutUsersInput;
  pdfs?: PdfCreateNestedManyWithoutUsersInput;
  statisticsItems?: StatisticsCreateNestedManyWithoutUsersInput;
};
