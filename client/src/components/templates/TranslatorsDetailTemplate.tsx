import { Container } from "@mui/material";

import { Translator } from "../../types/Translator";
import PageHeader from "../organisms/PageHeader";
import { TranslatorsDetail } from "../organisms/TranslatorsDetail";

export type TranslatorsDetailTemplateProps = {
  isLoading: boolean;
  isError: boolean;
  translator?: Translator;
};

export default function TranslatorsDetailTemplate({
  isLoading,
  isError,
  translator,
}: TranslatorsDetailTemplateProps) {
  return (
    <>
      <PageHeader title="Translator datail" />\
      <Container maxWidth="sm" sx={{ mt: 10, mb: 4 }}>
        <TranslatorsDetail
          translator={translator}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </>
  );
}
