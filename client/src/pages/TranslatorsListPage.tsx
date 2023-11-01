import { useEffect, useState } from "react";

import TranslatorsListTemplate from "../components/templates/TranslatorsListTemplate";
import { useTranslators } from "../hooks/useTranslators";

export default function TranslatorsListPage() {
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");
  const { data, isError, isLoading, refetch } = useTranslators(searchQuery);

  useEffect(() => {
    refetch();
  }, [searchQuery]);

  return (
    <TranslatorsListTemplate
      translators={data}
      isError={isError}
      isLoading={isLoading}
      setSearchQuery={setSearchQuery}
    />
  );
}
