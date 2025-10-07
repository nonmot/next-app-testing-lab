import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button", () => {
  render(<Button label="Hello" onClick={() => {}} />)
  expect(screen.getByText("Hello")).toBeInTheDocument();
})
