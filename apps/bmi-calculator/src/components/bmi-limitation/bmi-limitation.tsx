import {
  IconAge,
  IconGender,
  IconMuscle,
  IconPregnancy,
  IconRace,
} from "../icons";

/* eslint-disable-next-line */
export interface BmiLimitationProps {}

export function BmiLimitation(props: BmiLimitationProps) {
  return (
    <section className="container pb-96">
      <h2 className="mb-32 text-heading-l-sm text-gun-metal">
        Limitations of BMI
      </h2>
      <p className="mb-56 text-body-m text-dark-electric-blue">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      <ul className="grid gap-16">
        <li className="bg-pure-white p-24 rounded-16 shadow-form">
          <div className="mb-16 flex flex-row items-center gap-16">
            <IconGender className="w-32 h-32" />
            <h3 className="text-heading-s text-gun-metal">Gender</h3>
          </div>
          <p className="text-body-m text-dark-electric-blue">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </li>
        <li className="bg-pure-white p-24 rounded-16 shadow-form">
          <div className="mb-16 flex flex-row items-center gap-16">
            <IconAge className="w-32 h-32" />
            <h3 className="text-heading-s text-gun-metal">Age</h3>
          </div>
          <p className="text-body-m text-dark-electric-blue">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </li>
        <li className="bg-pure-white p-24 rounded-16 shadow-form">
          <div className="mb-16 flex flex-row items-center gap-16">
            <IconMuscle className="w-32 h-32" />
            <h3 className="text-heading-s text-gun-metal">Muscle</h3>
          </div>
          <p className="text-body-m text-dark-electric-blue">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </li>
        <li className="bg-pure-white p-24 rounded-16 shadow-form">
          <div className="mb-16 flex flex-row items-center gap-16">
            <IconPregnancy className="w-32 h-32" />
            <h3 className="text-heading-s text-gun-metal">Pregnancy</h3>
          </div>
          <p className="text-body-m text-dark-electric-blue">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </li>
        <li className="bg-pure-white p-24 rounded-16 shadow-form">
          <div className="mb-16 flex flex-row items-center gap-16">
            <IconRace className="w-32 h-32" />
            <h3 className="text-heading-s text-gun-metal">Race</h3>
          </div>
          <p className="text-body-m text-dark-electric-blue">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default BmiLimitation;
