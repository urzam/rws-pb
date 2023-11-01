import { Grid } from "@mui/material";

import { Translator } from "../../types/Translator";
import { DataAlertMessage } from "../atoms/DataAlertMessage";
import { NoDataWarningMessage } from "../atoms/NoDataWarningMessage";
import TranslatorsListSkeleton from "../molecules/TranslatorsListSkeleton";
import TranslatorListItem from "./TranslatorListItem";

type TranslatorsListProps = {
  isLoading: boolean;
  isError: boolean;
  translators?: Translator[];
};

export default function TranslatorsList({
  translators,
  isLoading,
  isError,
}: TranslatorsListProps) {
  if (isLoading) return <TranslatorsListSkeleton />;

  if (isError) return <DataAlertMessage />;

  if (!translators || translators.length <= 0) return <NoDataWarningMessage />;

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 2, sm: 4, md: 16 }}
      >
        {translators.map((translator: Translator, i: number) => (
          <Grid item xs={2} sm={4} md={8} key={translator.id}>
            <TranslatorListItem key={i} translator={translator} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
