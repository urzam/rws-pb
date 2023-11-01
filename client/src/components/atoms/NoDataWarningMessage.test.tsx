import { render, screen } from "@testing-library/react";
import { NoDataWarningMessage } from "./NoDataWarningMessage";

describe("NoDataWarningMessage", () => {
  it("should render a warning message", () => {
    render(<NoDataWarningMessage />);
    const warningMessage = screen.getByText(/No Data!/i);
    expect(warningMessage).toBeInTheDocument();
  });
});
