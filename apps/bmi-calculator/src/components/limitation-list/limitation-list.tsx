import Limitation from "../limitation";
import {
  IconAge,
  IconGender,
  IconMuscle,
  IconPregnancy,
  IconRace,
} from "../icons";
import clsx from "clsx";

/* eslint-disable-next-line */
export interface LimitationListProps {
  classname?: string;
}

export function LimitationList(props: LimitationListProps) {
  return (
    <section
      className={clsx(
        props.classname,
        "container lg:relative lg:bg-curved-line-right lg:bg-[url('/src/images/pattern-curved-line-right.svg')] lg:bg-no-repeat"
      )}
    >
      <div className="text-center lg:absolute lg:top-0 lg:left-0 lg:max-w-564 lg:text-left">
        <h2 className="mb-32 text-heading-l-sm text-gun-metal lg:text-heading-l">
          Limitations of BMI
        </h2>
        <p className="mb-56 text-body-m text-dark-electric-blue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <ul className="grid gap-16 md:gap-y-24 md:grid-cols-4 md:gap-x-16 lg:ml-auto lg:w-960 lg:grid-cols-10 lg:gap-32">
        <Limitation
          className="md:col-span-2 lg:col-start-6 lg:col-span-4"
          name="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          icon={<IconGender className="w-32 h-32" />}
        />
        <Limitation
          className="md:col-span-2 lg:col-start-3 lg:col-span-4"
          name="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          icon={<IconAge className="w-32 h-32" />}
        />
        <Limitation
          className="md:col-span-2 lg:col-span-4"
          name="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          icon={<IconMuscle className="w-32 h-32" />}
        />
        <Limitation
          className="md:col-span-2 lg:col-span-4"
          name="Pregnancy"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          icon={<IconPregnancy className="w-32 h-32" />}
        />
        <Limitation
          className="md:col-span-2 md:col-start-2 lg:col-span-4"
          name="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          icon={<IconRace className="w-32 h-32" />}
        />
      </ul>
    </section>
  );
}

export default LimitationList;
