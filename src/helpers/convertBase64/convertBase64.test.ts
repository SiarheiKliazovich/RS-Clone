import { waitFor } from "@testing-library/react";
import { convertBase64 } from "./convertBase64";

describe("convertBase64 function", () => {
  test("should convert a file to base64 string", async () => {
    const file = new Blob(["Hello, world!"], { type: "text/plain" });
    const base64String = await convertBase64(file);

    expect(base64String).toBeDefined();

    await waitFor(() => {
      expect(base64String).toEqual(
        expect.stringContaining("data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==")
      );
    });
  });
});
