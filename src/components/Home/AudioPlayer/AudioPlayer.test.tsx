import { render } from "@testing-library/react";
import AudioPlayer from ".";

describe("AudioPlayer", () => {
  it("renders correctly", () => {
    const { container } = render(<AudioPlayer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
