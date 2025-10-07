import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("正しくラベルが表示されるか", () => {
  render(<Button label="Click me" onClick={() => {}} />)
  expect(screen.getByText('Click me')).toBeInTheDocument();
})

test("クリックされた時にハンドラが呼ばれるか", () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />)

  screen.getByRole('button').click();
  expect(handleClick).toHaveBeenCalledTimes(1);
})
