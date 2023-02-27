import { render } from "@testing-library/react";
import Footer from ".";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../store/configureStore";

const store = configureStore();

describe("Footer", () => {
  test("renders correctly", () => {
    const container = render(
      <Provider store={store}>
        <Router>
          <Footer
            accentColor={{ static: "#FFF", hover: "#000" }}
            isNavbarNightMode={false}
          />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
