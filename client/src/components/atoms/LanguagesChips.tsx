import { Chip, Stack } from "@mui/material";
import { TranslatorLanguages } from "../../types/Translator";

export default function LanguagesChips({
  languages,
}: {
  languages: TranslatorLanguages;
}) {
  return (
    <Stack direction="row" spacing={0.5}>
      {languages.map((language: string) => (
        <Chip
          size="small"
          label={language}
          variant="outlined"
          color="warning"
          key={language}
        />
      ))}
    </Stack>
  );
}
