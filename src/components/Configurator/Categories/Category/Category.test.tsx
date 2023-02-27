import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Category from ".";

describe("Active", () => {
  test("renders Category component correctly", () => {
    const props = {
      tie: {
        id: 1,
        image: "tie-image-url",
        type: "some-tie-type",
        categoryName: "Some Category",
        price: "30",
      },
      accentColor: { static: "#000", hover: "#fff" },
      isNavbarNightMode: false,
    };

    const { container } = render(
      <Router>
        <Category {...props} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
