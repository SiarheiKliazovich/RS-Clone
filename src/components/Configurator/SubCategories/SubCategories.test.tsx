import { render } from "@testing-library/react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SubCategories from ".";

const mockStore = configureStore([]);

describe("SubCategories", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {
          role: "USER",
        },
      },
      appInterface: {
        accentColor: {
          static: "#000",
          hover: "#fff",
        },
      },
      langReducer: {
        lang: "en",
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router initialEntries={["/configurator/patterns"]}>
          <Routes>
            <Route path="/category/:category" element={<SubCategories />} />
          </Routes>
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
