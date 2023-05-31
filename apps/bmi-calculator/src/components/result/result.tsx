/* eslint-disable-next-line */
export interface ResultProps {
  bmi: number;
}

export function Result({ bmi }: ResultProps) {
  return (
    <div className="p-32 rounded-16 bg-gradient-to-r from-form-from to-form-to">
      <p className="mb-16 text-heading-m text-pure-white">Welcome</p>
      <p className="text-body-s text-pure-white">
        Enter your height and weight and you’ll see your BMI result here
      </p>
      <p className="text-pure-white">{bmi}</p>
    </div>
  );
}

export default Result;
