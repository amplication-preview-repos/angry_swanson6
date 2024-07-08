import { HelpWhereUniqueInput } from "./HelpWhereUniqueInput";
import { HelpUpdateInput } from "./HelpUpdateInput";

export type UpdateHelpArgs = {
  where: HelpWhereUniqueInput;
  data: HelpUpdateInput;
};
