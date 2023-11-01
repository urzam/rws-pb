import { render, screen } from "@testing-library/react";
import { TranslatorLanguages } from "../../types/Translator";
import LanguagesChips from "./LanguagesChips";

describe("LanguagesChips", () => {
  it("should render a chip for each language", () => {
    const languages: TranslatorLanguages = ["English", "Spanish", "French"];
    render(<LanguagesChips languages={languages} />);
    const englishChip = screen.getByText(/English/i);
    const spanishChip = screen.getByText(/Spanish/i);
    const frenchChip = screen.getByText(/French/i);
    expect(englishChip).toBeInTheDocument();
    expect(spanishChip).toBeInTheDocument();
    expect(frenchChip).toBeInTheDocument();
  });

  it("should render chips with the correct label", () => {
    const languages: TranslatorLanguages = ["English", "Spanish", "French"];
    render(<LanguagesChips languages={languages} />);
    const englishChip = screen.getByText(/English/i);
    const spanishChip = screen.getByText(/Spanish/i);
    const frenchChip = screen.getByText(/French/i);
    expect(englishChip).toHaveTextContent("English");
    expect(spanishChip).toHaveTextContent("Spanish");
    expect(frenchChip).toHaveTextContent("French");
  });
});
