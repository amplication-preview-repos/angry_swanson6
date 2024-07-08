import { Audio as TAudio } from "../api/audio/Audio";

export const AUDIO_TITLE_FIELD = "url";

export const AudioTitle = (record: TAudio): string => {
  return record.url?.toString() || String(record.id);
};
