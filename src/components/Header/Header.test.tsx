import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from ".";

const mockStore = configureStore([]);

describe("Header", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
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
          <Header
            accentColor={{ static: "#fff", hover: "#000" }}
            isNavbarNightMode={false}
            isButtonVisible={true}
          />
        </Router>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
