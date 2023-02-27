import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import MyTies from "./";

const mockStore = configureStore([]);

describe("MyTies component", () => {
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
      auth: {
        user: {
          role: "USER",
        },
      },
      myTiesReducer: {
        tieLoadingStatus: "load",
      },
      myOrdersReducer: {
        ordersLoadingStatus: "load",
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <MyTies />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
