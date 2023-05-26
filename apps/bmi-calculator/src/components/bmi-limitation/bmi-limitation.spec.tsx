import { render } from "@testing-library/react";

import BmiLimitation from "./bmi-limitation";

describe("BmiLimitation", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BmiLimitation />);
    expect(baseElement).toBeTruthy();
  });
});
