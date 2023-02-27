import getTieColor from "./getTieColor";

describe("getTieColor", () => {
  test("returns an rgba color string", () => {
    const color = "255, 0, 0, 1";
    const expectedColorString = `rgba(${color})`;

    const result = getTieColor(color);

    expect(result).toEqual(expectedColorString);
  });
});
