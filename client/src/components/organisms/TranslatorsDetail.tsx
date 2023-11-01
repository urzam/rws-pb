import { Box, Card, CardContent, Typography } from "@mui/material";
import { Translator } from "../../types/Translator";
import { DataAlertMessage } from "../atoms/DataAlertMessage";
import LanguagesChips from "../atoms/LanguagesChips";
import { NoDataWarningMessage } from "../atoms/NoDataWarningMessage";
import { TranslatorDetailNamePhoto } from "../molecules/TranslatorDetailNamePhoto";
import TranslatorsDetailSkeleton from "../molecules/TranslatorsDetailSkeleton";

type TranslatorsListProps = {
  isLoading: boolean;
  isError: boolean;
  translator?: Translator;
};

export function TranslatorsDetail({
  translator,
  isLoading = true,
  isError,
}: TranslatorsListProps) {
  if (isLoading) return <TranslatorsDetailSkeleton />;

  if (isError) return <DataAlertMessage />;

  if (!translator) return <NoDataWarningMessage />;

  return (
    <Card>
      <CardContent>
        <TranslatorDetailNamePhoto data={translator} />
        <Box sx={{ mb: 4 }}>
          <LanguagesChips languages={translator.languages} />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1">ABOUT:</Typography>
          <Typography variant="body1" color="text.secondary">
            {translator.detail}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">Status: {translator.status}</Typography>
          <Typography variant="body1">
            Hourly rate: {translator.hourlyRate} USD
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
