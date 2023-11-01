import { Translator } from "../types/Translator";

export function getTranslators(search?: string) {
  return async (): Promise<Array<Translator>> => {
    const response = await fetch(
      search
        ? `http://localhost:8000/translators?search=${search}`
        : "http://localhost:8000/translators",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.json();
  };
}
