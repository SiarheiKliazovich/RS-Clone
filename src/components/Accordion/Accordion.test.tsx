import { render } from "@testing-library/react";
import Accordion from ".";

describe("Accordion", () => {
  test("renders correctly", () => {
    const { container } = render(
      <Accordion title="Test Accordion">
        <p>Test Content</p>
      </Accordion>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
