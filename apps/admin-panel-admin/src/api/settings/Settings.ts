export type Settings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  theme: string | null;
  language: string | null;
  notificationsEnabled: boolean | null;
  privacyLevel?: "Option1" | null;
};
