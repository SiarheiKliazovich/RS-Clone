import { render } from "@testing-library/react";
import MyOrdersList from ".";

describe("MyOrdersList", () => {
  test("renders correctly", () => {
    const orders = [
      {
        _id: "1",
        image: "image-url-1",
        date: "2022-01-01T00:00:00.000Z",
        price: 100,
        status: "completed",
        userId: "user",
        sellerId: "seller",
      },
      {
        _id: "2",
        image: "image-url-2",
        date: "2022-01-02T00:00:00.000Z",
        price: 200,
        status: "in progress",
        userId: "user",
        sellerId: "seller",
      },
    ];
    const { container } = render(<MyOrdersList orders={orders} />);
    expect(container).toMatchSnapshot();
  });
});
