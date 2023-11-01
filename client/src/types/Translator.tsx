export type Translator = {
  id: string;
  name: string;
  detail: string;
  hourlyRate: string;
  status: TranslatorStatus;
  creditCardNumber: string;
  photoUrl: string;
  languages: TranslatorLanguages;
};

export type TranslatorLanguages = (
  | "English"
  | "Spanish"
  | "French"
  | "Italian"
)[];

export type TranslatorStatus = "Applicant" | "Certified" | "Deleted";
