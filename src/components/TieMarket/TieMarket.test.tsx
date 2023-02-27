import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import TieMarket from ".";

const mockStore = configureStore([]);

describe("TieMarket", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      langReducer: {
        lang: "en",
      },
      appInterface: {
        accentColor: {
          static: "#000",
          hover: "#fff",
        },
      },
      tiesReducer: {
        tieLoadingStatus: "idle",
      },
      buyTieReducer: {
        buyTieLoadingStatus: "load",
      },
      auth: {
        user: {
          role: "USER",
        },
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <TieMarket />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
