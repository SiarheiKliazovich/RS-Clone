import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import OrdersList from ".";

const mockStore = configureStore([]);

describe("OrdersList", () => {
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
    const orders = [
      {
        _id: "123",
        date: "2022-02-24T10:00:00.000Z",
        price: 100,
        status: "PAID",
        userId: "userId",
        sellerId: "sellerId",
        image: "image",
      },
      {
        _id: "456",
        date: "2022-02-24T11:00:00.000Z",
        price: 200,
        status: "FIHISHED",
        userId: "userId",
        sellerId: "sellerId",
        image: "image",
      },
    ];
    const { container } = render(
      <Provider store={store}>
        <Router>
          <OrdersList orders={orders} />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
