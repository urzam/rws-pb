import { Translator } from "../types/Translator";

export function getTranslators(search?: string) {
  return async (): Promise<Array<Translator>> => {
    const response = await fetch(
      search
        ? `${process.env.REACT_APP_API_URL}/translators?search=${search}`
        : `${process.env.REACT_APP_API_URL}/translators`,
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
