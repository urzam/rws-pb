import { render, screen } from "@testing-library/react";
import { DataAlertMessage } from "./DataAlertMessage";

describe("DataAlertMessage", () => {
  it("should render an error message", () => {
    render(<DataAlertMessage />);
    const errorMessage = screen.getByText(
      /An error has occurred during loading data./i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
