import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Hover from ".";

const mockStore = configureStore([]);

describe("Hover", () => {
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
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Hover>
            <div>Content</div>
          </Hover>
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
