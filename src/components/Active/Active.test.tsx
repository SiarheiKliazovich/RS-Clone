import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Active from ".";

const mockStore = configureStore([]);

describe("Active", () => {
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
        <Active classN="users__header-button">
          <button>Test Button</button>
        </Active>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
