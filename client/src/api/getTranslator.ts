import { Translator } from "../types/Translator";

export function getTranslator(id?: string) {
  return async (): Promise<Translator> => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/translator/${id}`,
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
