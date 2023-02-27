import { svg2img } from "./svg2img";

describe("svg2img", () => {
  test("returns base64 image string", () => {
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.id = "test-svg";
    document.body.appendChild(svgElement);

    const image64 = svg2img("test-svg");

    expect(image64).toMatch(/^data:image\/svg\+xml;base64,/);
  });
});
