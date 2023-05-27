import { render } from "@testing-library/react";

import Success from "./success";

describe("Success", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Success />);
    expect(baseElement).toBeTruthy();
  });
});
