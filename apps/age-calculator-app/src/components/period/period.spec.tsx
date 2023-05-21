import { render } from "@testing-library/react";

import Period from "./period";

describe("Period", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Period />);
    expect(baseElement).toBeTruthy();
  });
});
