import { Container } from "@mui/material";

import { Translator } from "../../types/Translator";
import CustomizedInputBase from "../organisms/CustomizedInputBase";
import PageHeader from "../organisms/PageHeader";
import TranslatorsList from "../organisms/TranslatorsList";

export type TranslatorsListTemplateProps = {
  isLoading: boolean;
  isError: boolean;
  translators?: Translator[];
  setSearchQuery: (search: string | undefined) => void;
};

export default function TranslatorsListTemplate({
  isLoading,
  isError,
  translators,
  setSearchQuery,
}: TranslatorsListTemplateProps) {
  return (
    <>
      <PageHeader title="Translators list" />
      <Container maxWidth="md" sx={{ mt: 12, mb: 4 }}>
        <CustomizedInputBase setSearchQuery={setSearchQuery} />
        <TranslatorsList
          translators={translators}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </>
  );
}
