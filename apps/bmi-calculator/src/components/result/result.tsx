/* eslint-disable-next-line */
export interface ResultProps {
  bmi?: number;
}

export function Result({ bmi }: ResultProps) {
  let status = "";

  if (bmi) {
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 24.9) {
      status = "Healthy weight";
    } else if (bmi < 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  }

  return (
    <div className="p-32 rounded-16 bg-gradient-to-r from-form-from to-form-to lg:rounded-l-16 lg:rounded-r-100">
      {typeof bmi === "number" ? (
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
