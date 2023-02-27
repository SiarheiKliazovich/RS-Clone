import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import OrdersListItem from "../OrdersListItem";

const mockStore = configureStore([]);

describe("OrdersListItem", () => {
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

  const item = {
    _id: "1",
    date: "2022-02-24T12:00:00Z",
    price: 100,
    status: "NON-PAID",
    image: "image",
    userId: "userId",
    sellerId: "sellerId",
  };
  const i = 0;
  const deleteItem = jest.fn();
  const updateItem = jest.fn();

  test("renders correctly", () => {
    const { container } = render(
      <table>
        <tbody>
          <Provider store={store}>
            <OrdersListItem
              item={item}
              i={i}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          </Provider>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
