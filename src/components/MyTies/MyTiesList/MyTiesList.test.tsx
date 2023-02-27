import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MyTiesList from ".";

const mockStore = configureStore([]);

describe("MyTiesList", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {
          _id: "userId",
        },
      },
    });
  });

  test("renders correctly", () => {
    const ties = [
      {
        _id: "1",
        name: "Test Tie 1",
        price: 10,
        image: "https://example.com/test1.jpg",
        userId: "user",
        sellerId: "seller",
      },
      {
        _id: "2",
        name: "Test Tie 2",
        price: 20,
        image: "https://example.com/test2.jpg",
        userId: "user",
        sellerId: "seller",
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <MyTiesList ties={ties} />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
