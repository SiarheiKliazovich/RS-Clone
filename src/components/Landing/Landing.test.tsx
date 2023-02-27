import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Landing from ".";

const mockStore = configureStore([]);

describe("Landing", () => {
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
          <Landing />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
