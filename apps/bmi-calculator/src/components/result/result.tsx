/* eslint-disable-next-line */
export interface ResultProps {
  centimeters: string;
  kilograms: string;
  feets: string;
  inches: string;
  stones: string;
  pounds: string;
  isMetric: boolean;
}

export function Result({
  centimeters,
  kilograms,
  feets,
  inches,
  stones,
  pounds,
  isMetric,
}: ResultProps) {
  let bmi = "";
  let status = "";

  const calculateStatus = (bmiInt: number) => {
    if (bmiInt) {
      if (bmiInt < 18.5) {
        status = "Underweight";
      } else if (bmiInt < 24.9) {
        status = "Healthy weight";
      } else if (bmiInt < 29.9) {
        status = "Overweight";
      } else {
        status = "Obese";
      }
    }
  };

  if (isMetric && centimeters && kilograms) {
    const meters = Number(centimeters) / 100;
    const bmiInt =
      Math.round((Number(kilograms) / Math.pow(meters, 2)) * 10) / 10;
    calculateStatus(bmiInt);
    bmi = String(bmiInt);
  }

  if (!isMetric && (feets || inches) && (stones || pounds)) {
    const feetsInt = Number(feets);
    const inchesInt = Number(inches);
    const stonesInt = Number(stones);
    const poundsInt = Number(pounds);
    if ((feetsInt || inchesInt) && (stonesInt || poundsInt)) {
      const fullInches = feetsInt * 12 + inchesInt;
      const fullPounds = stonesInt * 14 + poundsInt;
      const notRoundedBmi = (fullPounds / Math.pow(fullInches, 2)) * 703;
      const bmiInt = Math.round(notRoundedBmi * 10) / 10;
      calculateStatus(bmiInt);
      bmi = String(bmiInt);
    }
  }

  return (
    <div className="p-32 rounded-16 bg-gradient-to-r from-form-from to-form-to lg:rounded-l-16 lg:rounded-r-100">
      {bmi ? (
        <div className="lg:flex lg:flex-row lg:items-center lg:gap-24">
          <div className="lg:flex-1">
            <p className="mb-8 text-body-m-bold text-pure-white">
              Your BMI is...
            </p>
            <p className="mb-24 text-heading-l text-pure-white lg:mb-0">
              {bmi}
            </p>
          </div>
          <p className="text-body-s text-pure-white lg:flex-1">
            Your BMI suggests you’re a {status}. Your ideal weight is between{" "}
            <span className="text-body-s-bold">9st 6lbs - 12st 10lbs</span>.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-16 text-heading-m text-pure-white">Welcome</p>
          <p className="text-body-s text-pure-white">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </>
      )}
    </div>
  );
}

export default Result;
