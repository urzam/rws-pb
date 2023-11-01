import { useQuery } from "@tanstack/react-query";

import { getTranslators } from "../api/getTranslators";

export function useTranslators(search?: string) {
  return useQuery({
    queryKey: ["translators"],
    queryFn: getTranslators(search),
  });
}
