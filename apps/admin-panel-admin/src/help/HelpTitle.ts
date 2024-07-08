import { Help as THelp } from "../api/help/Help";

export const HELP_TITLE_FIELD = "title";

export const HelpTitle = (record: THelp): string => {
  return record.title?.toString() || String(record.id);
};
