import { IconEating, IconExercise, IconSleep } from "../icons";
import image from "../../images/image-man-eating.webp";

/* eslint-disable-next-line */
export interface BmiExplanationProps {}

export function BmiExplanation(props: BmiExplanationProps) {
  return (
    <section className="mb-72">
      <img className="mb-48" src={image} alt="Man eating" />
      <div className="container">
        <h2 className="mb-32 text-heading-l-sm text-gun-metal">
          What your BMI result means
        </h2>
        <p className="mb-72 text-body-m text-dark-electric-blue">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
      <div className="py-56 bg-gradient-to-br from-explanation-from to-explanation-to">
        <ul className="container grid gap-40">
          <li>
            <IconEating className="mb-32 w-64 h-64" />
            <h3 className="mb-24 text-heading-m text-gun-metal">
              Healthy eating
            </h3>
            <p className="text-body-m text-dark-electric-blue">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </li>
          <li>
            <IconExercise className="mb-32 w-64 h-64" />
            <h3 className="mb-24 text-heading-m text-gun-metal">
              Regular exercise
            </h3>
            <p className="text-body-m text-dark-electric-blue">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </li>
          <li>
            <IconSleep className="mb-32 w-64 h-64" />
            <h3 className="mb-24 text-heading-m text-gun-metal">
              Adequate sleep
            </h3>
            <p className="text-body-m text-dark-electric-blue">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BmiExplanation;
