import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UsersList from ".";

const mockStore = configureStore([]);

describe("UsersList", () => {
  // eslint-disable-next-line
  let store: any;

  const users = [
    {
      _id: "1",
      email: "test1@test.com",
      password: "password",
      role: "role",
      date: "date",
    },
    {
      _id: "2",
      email: "test2@test.com",
      password: "password",
      role: "role",
      date: "date",
    },
    {
      _id: "3",
      email: "test3@test.com",
      password: "password",
      role: "role",
      date: "date",
    },
  ];

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
      favouriteTieReducer: {
        addTieLoadingStatus: "load",
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
        <UsersList users={users} activeButton="1" />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
