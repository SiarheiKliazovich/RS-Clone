import { render } from "@testing-library/react";
import MyTiesOrdersList from ".";

describe("MyTiesOrdersList", () => {
  const orders = [
    {
      _id: "1",
      image: "https://image.jpg",
      date: "2022-02-01",
      price: 10,
      userId: "user",
      sellerId: "seller",
      status: "in progress",
    },
    {
      _id: "2",
      image: "https://image2.jpg",
      date: "2022-02-02",
      price: 20,
      userId: "user",
      sellerId: "seller",
      status: "paid",
    },
  ];

  test("renders correctly", () => {
    const { container } = render(<MyTiesOrdersList orders={orders} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
