import { Pdf as TPdf } from "../api/pdf/Pdf";

export const PDF_TITLE_FIELD = "url";

export const PdfTitle = (record: TPdf): string => {
  return record.url?.toString() || String(record.id);
};
