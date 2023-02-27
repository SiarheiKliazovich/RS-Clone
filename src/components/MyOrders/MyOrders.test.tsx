import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import MyOrders from ".";

const mockStore = configureStore([]);

describe("MyOrders", () => {
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
      myOrdersReducer: {
        ordersLoadingStatus: "idle",
        orders: [],
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <MyOrders />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
