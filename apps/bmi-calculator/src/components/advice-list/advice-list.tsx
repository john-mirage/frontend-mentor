import { IconEating, IconExercise, IconSleep } from "../icons";
import image from "../../images/image-man-eating.webp";
import clsx from "clsx";
import Advice from "../advice";

/* eslint-disable-next-line */
export interface AdviceListProps {
  classname?: string;
}

export function AdviceList(props: AdviceListProps) {
  return (
    <section className={clsx(props.classname)}>
      <div className="mb-72 md:mb-96 container md:flex md:flex-row md:items-center md:gap-72 lg:pt-48 lg:bg-curved-line-left lg:bg-[url('/src/images/pattern-curved-line-left.svg')] lg:bg-no-repeat">
        <img
          className="mb-48 -mx-24 w-image max-w-none md:w-full md:max-w-432 md:mb-0 md:-ml-116 lg:ml-0 lg:max-w-564"
          src={image}
          alt="Man eating"
        />
        <div>
          <h2 className="mb-32 text-heading-l-sm text-gun-metal lg:mt-156 lg:text-heading-l">
            What your BMI result means
          </h2>
          <p className="text-body-m text-dark-electric-blue">
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
      <ul className="container py-56 md:pt-72 md:pb-96 bg-gradient-to-br from-advice-from to-advice-to grid gap-40 md:rounded-35 lg:grid-cols-3">
        <Advice
          name="Healthy eating"
          description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
          icon={
            <IconEating className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
          }
        />
        <Advice
          name="Regular exercise"
          description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
          icon={
            <IconExercise className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
          }
        />
        <Advice
          name="Adequate sleep"
          description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
          icon={
            <IconSleep className="mb-32 w-64 h-64 md:mb-0 md:flex-0 lg:mb-44" />
          }
        />
      </ul>
    </section>
  );
}

export default AdviceList;
