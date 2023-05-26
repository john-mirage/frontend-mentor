import { IconEating, IconExercise, IconSleep } from "../icons";
import image from "../../images/image-man-eating.webp";

/* eslint-disable-next-line */
export interface BmiExplanationProps {}

export function BmiExplanation(props: BmiExplanationProps) {
  return (
    <section className="mb-72">
      <div className="container px-0 md:mb-96 md:flex md:flex-row md:items-center md:gap-72">
        <img
          className="mb-48 md:max-w-432 md:mb-0 md:-ml-116"
          src={image}
          alt="Man eating"
        />
        <div className="px-24 md:pl-0 md:pr-40">
          <h2 className="mb-32 text-heading-l-sm text-gun-metal">
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
      <div className="py-56 bg-gradient-to-br from-explanation-from to-explanation-to">
        <ul className="container grid gap-40">
          <li className="md:flex md:flex-row md:items-center md:gap-40">
            <IconEating className="mb-32 w-64 h-64 md:mb-0 md:flex-0" />
            <div className="md:flex-1">
              <h3 className="mb-24 text-heading-m text-gun-metal">
                Healthy eating
              </h3>
              <p className="text-body-m text-dark-electric-blue">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </li>
          <li className="md:flex md:flex-row md:items-center md:gap-40">
            <IconExercise className="mb-32 w-64 h-64 md:mb-0 md:flex-0" />
            <div className="md:flex-1">
              <h3 className="mb-24 text-heading-m text-gun-metal">
                Regular exercise
              </h3>
              <p className="text-body-m text-dark-electric-blue">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </li>
          <li className="md:flex md:flex-row md:items-center md:gap-40">
            <IconSleep className="mb-32 w-64 h-64 md:mb-0 md:flex-0" />
            <div className="md:flex-1">
              <h3 className="mb-24 text-heading-m text-gun-metal">
                Adequate sleep
              </h3>
              <p className="text-body-m text-dark-electric-blue">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BmiExplanation;
