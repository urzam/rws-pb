import { useParams } from "react-router-dom";

import TranslatorsDetailTemplate from "../components/templates/TranslatorsDetailTemplate";
import { useTranslator } from "../hooks/useTranslator";

export default function TranslatorDetailPage() {
  const { id } = useParams();

  const { data, isError, isLoading } = useTranslator(id);

  return (
    <TranslatorsDetailTemplate
      translator={data}
      isError={isError}
      isLoading={isLoading}
    />
  );
}
