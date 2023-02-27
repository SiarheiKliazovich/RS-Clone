import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from ".";

describe("Categories", () => {
  const tieList = {
    lang: "ru",
    data: [
      {
        categoryName: "Центральный узор",
        image: "https://i.ibb.co/t4RqPjL/centered.jpg",
        id: 3,
        type: "centred",
        price: "12",
        subCategories: [
          {
            name: "CENT 507",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503301?width=300&height=300&view=0&cachedSvgVersion=06ca279a-645b-4822-a5d8-45c1ed02d51a&key=undefined&distributorId=76104207",
            id: 32,
            type: "CENT507",
          },
          {
            name: "CENT 512",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503302?width=300&height=300&view=0&cachedSvgVersion=ba87498e-52b4-4247-90bd-417093d6b2a3&key=undefined&distributorId=76104207",

            id: 33,
            type: "CENT512",
          },
          {
            name: "CENT 516",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503303?width=300&height=300&view=0&cachedSvgVersion=a62cdbdd-1d8e-4b28-8f7f-ceafdbc67272&key=undefined&distributorId=76104207",

            id: 34,
            type: "CENT516",
          },
          {
            name: "CENT 517",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503304?width=300&height=300&view=0&cachedSvgVersion=bcbeb6d1-0b72-4e24-b30c-10343ac35324&key=undefined&distributorId=76104207",

            id: 35,
            type: "CENT517",
          },
          {
            name: "CENT 520",
            image:
              "https://api.kitbuilder.co.uk/svg/defaultimage/6503305?width=300&height=300&view=0&cachedSvgVersion=053231d3-ab56-475b-9406-4b661fa7a353&key=undefined&distributorId=76104207",

            id: 36,
            type: "CENT520",
          },
        ],
      },
    ],
  };

  const accentColor = {
    static: "#000",
    hover: "#fff",
  };

  const isNavbarNightMode = false;

  test("renders correctly", () => {
    const { container } = render(
      <Router>
        <Categories
          tieList={tieList}
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
