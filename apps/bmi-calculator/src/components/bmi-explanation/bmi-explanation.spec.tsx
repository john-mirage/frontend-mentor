import { render } from "@testing-library/react";

import BmiExplanation from "./bmi-explanation";

describe("BmiExplanation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BmiExplanation />);
    expect(baseElement).toBeTruthy();
  });
});
