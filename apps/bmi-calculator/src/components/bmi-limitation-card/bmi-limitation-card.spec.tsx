import { render } from "@testing-library/react";

import BmiLimitationCard from "./bmi-limitation-card";

describe("BmiLimitationCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BmiLimitationCard />);
    expect(baseElement).toBeTruthy();
  });
});
