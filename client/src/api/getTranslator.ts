import { Translator } from "../types/Translator";

export function getTranslator(id?: string) {
  return async (): Promise<Translator> => {
    const response = await fetch(`http://localhost:8000/translator/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  };
}
