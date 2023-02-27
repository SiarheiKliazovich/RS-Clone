import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import FavoriteTie from ".";

const mockStore = configureStore([]);

describe("FavoriteTie", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      appInterface: {
        accentColor: {
          static: "#000",
          hover: "#fff",
        },
      },
      langReducer: {
        lang: "en",
      },
      favouriteTieReducer: {
        addTieLoadingStatus: "load",
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
          <FavoriteTie />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
