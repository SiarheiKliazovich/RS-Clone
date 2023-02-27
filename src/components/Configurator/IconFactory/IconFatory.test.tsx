import { render } from "@testing-library/react";
import IconFactory from "../IconFactory";

describe("IconFactory", () => {
  const components = [
    {
      type: "type1",
      component: () => <div>Icon 1</div>,
    },
    {
      type: "type2",
      component: () => <div>Icon 2</div>,
    },
  ];

  const settings = {
    color: "#ff0000",
    size: "16px",
    weave: "weave",
    bgColor: "#000",
    colorOne: "#888",
    colorTwo: "#888",
    colorThree: "#333",
    colorFour: "#444",
    colorFive: "#111",
    colorSix: "#888",
  };

  test("renders correctly", () => {
    const { container } = render(
      <IconFactory components={components} type="type1" settings={settings} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
