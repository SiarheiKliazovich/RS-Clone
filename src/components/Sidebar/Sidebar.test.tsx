import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from ".";

describe("Sidebar", () => {
  test("renders correctly", () => {
    const { container } = render(
      <Router>
        <Sidebar
          accentColor={{ static: "#ff0000", hover: "#00ff00" }}
          isSidebarFixed={true}
          isSidebarAccentMode={true}
          isSidebarShow={true}
          isNightMode={false}
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
