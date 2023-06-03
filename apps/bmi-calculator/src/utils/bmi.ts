export const getBmiFromMetric = (meters: number, kilograms: number): number => {
  return Math.round((kilograms / Math.pow(meters, 2)) * 10) / 10;
};

export const getBmiFromImperial = (inches: number, pounds: number): number => {
  return Math.round((pounds / Math.pow(inches, 2)) * 703 * 10) / 10;
};

export const getBmiState = (bmi: number): string => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Healthy weight";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

export const getWeightAreaForMetric = (
  kilograms: number,
  bmi: number
): string => {
  const minWeight = Math.round((18.5 * kilograms) / bmi);
  const maxWeight = Math.round((24.8 * kilograms) / bmi);
  return `${String(minWeight)}kgs - ${String(maxWeight)}kgs`;
};

export const getWeightAreaForImperial = (
  pounds: number,
  bmi: number
): string => {
  const minWeight = (18.5 * pounds) / bmi;
  const maxWeight = (24.8 * pounds) / bmi;
  return `${Math.floor(minWeight / 14)}st ${
    Math.floor(minWeight) % 14
  }lbs - ${Math.floor(maxWeight / 14)}st ${Math.floor(maxWeight) % 14}lbs`;
};
