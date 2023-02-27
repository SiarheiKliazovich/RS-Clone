import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Orders from ".";

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
      ordersReducer: {
        ordersLoadingStatus: "idle",
        orders: [],
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Orders />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
