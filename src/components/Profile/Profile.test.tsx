import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Profile from ".";

const mockStore = configureStore([]);

describe("Profile", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      appInterface: {
        isNightMode: false,
        accentColor: {
          static: "#000",
          hover: "#fff",
        },
      },
      auth: {
        user: {
          role: "USER",
        },
        isLogin: true,
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Profile
            accentColor={{ static: "#fff", hover: "#000" }}
            isProfileShow={true}
            isSidebarFixed={true}
            isSidebarAccentMode={true}
            isNavbarNightMode={false}
            isNightMode={false}
          />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
