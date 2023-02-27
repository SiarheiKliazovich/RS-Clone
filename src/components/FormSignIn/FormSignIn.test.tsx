import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import FormSignIn from ".";

const mockStore = configureStore([]);

describe("FormSignIn", () => {
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
        <MemoryRouter>
          <FormSignIn />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
