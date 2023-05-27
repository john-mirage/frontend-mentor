import { IconEating, IconExercise, IconSleep } from "../icons";
import image from "../../images/image-man-eating.webp";
import clsx from "clsx";
import BmiExplanationAdvice from "../bmi-explanation-advice";

/* eslint-disable-next-line */
export interface BmiExplanationProps {
  classname?: string;
}

export function BmiExplanation(props: BmiExplanationProps) {
  return (
    <section className={clsx(props.classname)}>
      <div className="pt-72 px-0 md:mb-96 md:flex md:flex-row md:items-center md:gap-72 lg:pt-64 lg:bg-curved-line-left lg:bg-no-repeat">
        <img
          className="mb-48 md:max-w-432 md:mb-0 md:-ml-116 lg:ml-0 lg:max-w-564"
          src={image}
          alt="Man eating"
        />
        <div className="px-24 md:pl-0 md:pr-40">
          <h2 className="mb-32 text-heading-l-sm text-gun-metal lg:mt-116 lg:text-heading-l">
            What your BMI result means
          </h2>
          <p className="mb-72 text-body-m text-dark-electric-blue md:mb-0">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
      <div className="py-56">
        <ul className="grid gap-40 lg:grid-cols-3">
          <BmiExplanationAdvice
            name="Healthy eating"
            description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
            icon={
              <IconEating className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
            }
          />
          <BmiExplanationAdvice
            name="Regular exercise"
            description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
            icon={
              <IconExercise className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
            }
          />
          <BmiExplanationAdvice
            name="Adequate sleep"
            description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
            icon={
              <IconSleep className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
            }
          />
        </ul>
      </div>
    </section>
  );
}

export default BmiExplanation;
