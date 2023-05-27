import { render } from "@testing-library/react";

import BmiExplanationAdvice from "./bmi-explanation-advice";

describe("BmiExplanationAdvice", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BmiExplanationAdvice />);
    expect(baseElement).toBeTruthy();
  });
});
