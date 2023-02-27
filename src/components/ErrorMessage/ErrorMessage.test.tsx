import { render } from "@testing-library/react";
import ErrorMessage from ".";

describe("ErrorMessage", () => {
  test("renders correctly", () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toMatchSnapshot();
  });
});
