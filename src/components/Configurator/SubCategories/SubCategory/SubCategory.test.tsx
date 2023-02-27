import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SubCategory from ".";

describe("SubCategory", () => {
  const subCategory = {
    id: 1,
    type: "type",
    name: "name",
    image: "image.png",
  };
  const category = "category";
  const accentColor = {
    static: "#FFFFFF",
    hover: "#000000",
  };
  const isNavbarNightMode = false;

  test("renders correctly", () => {
    const { container } = render(
      <Router>
        <SubCategory
          subCategory={subCategory}
          category={category}
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
