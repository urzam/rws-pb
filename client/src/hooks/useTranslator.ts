import { useQuery } from "@tanstack/react-query";

import { getTranslator } from "../api/getTranslator";

export function useTranslator(id?: string) {
  return useQuery({
    queryKey: ["translator"],
    queryFn: getTranslator(id),
  });
}
