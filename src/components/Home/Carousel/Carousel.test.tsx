import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Carousel from ".";

const mockStore = configureStore([]);

describe("Carousel", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      langReducer: {
        lang: "en",
      },
    });
  });

  test("renders correctly", () => {
    const accentColor = {
      static: "#000000",
      hover: "#ffffff",
    };
    const isNavbarNightMode = false;

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Carousel
            accentColor={accentColor}
            isNavbarNightMode={isNavbarNightMode}
          />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
