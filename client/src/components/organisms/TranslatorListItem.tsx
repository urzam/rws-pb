import { Box, Card, CardContent, Typography } from "@mui/material";

import { Translator } from "../../types/Translator";
import CardActionsContainer from "../molecules/CardActionsContainer";
import TranslatorListItemNamePhoto from "../molecules/TranslatorListItemNamePhoto";

export default function TranslatorListItem({
  translator,
}: {
  translator: Translator;
}) {
  const { id, name, photoUrl, languages, status, hourlyRate } = translator;

  return (
    <Card>
      <CardContent>
        <TranslatorListItemNamePhoto photoUrl={photoUrl} name={name} />
        <Box color="text.secondary">
          <Typography variant="body2">Status: {status}</Typography>
          <Typography variant="body2">Hourly rate: {hourlyRate} USD</Typography>
        </Box>
      </CardContent>
      <CardActionsContainer id={id} languages={languages} />
    </Card>
  );
}
